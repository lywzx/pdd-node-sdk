import {
  PddCollectRequestInterface,
  PddCollectShortResponseInterface,
  PddCommonRequestInterface,
  PddResponseTypeAndRequestTypeMapping,
} from '@pin-duo-duo/pdd-origin-api';
import {
  DefaultRequestType,
  NetworkAdapterInterface,
  PddAxiosClientOptions,
  PddCacheOptions,
  PddClientOptionsInterface,
  PddDefaultCacheOptionsType,
  RetryOptionsType,
} from '../interfaces';
import { md5, timestamp, promiseToCallback, defer, checkRequired } from '../util';
import { AsyncResultCallbackInterface } from '../interfaces';
import { isDevModel } from '../util/dev';
import {
  guessPddClientCachedParams,
  guessPddClientExecuteParams,
  guessPddClientRequestWithRetryParams,
} from '../util/guess-params.util';
import { NetworkAdapter } from './network-adapter';
import { PDD_END_POINTS, PDD_OAUTH_TEMPLATE, OAuthType, PDD_OAUTH_TOKEN_URL } from '../constant';
import extend from 'lodash/extend';
import castArray from 'lodash/castArray';
import isString from 'lodash/isString';
import isObject from 'lodash/isObject';
import isFunction from 'lodash/isFunction';
import includes from 'lodash/includes';
import {
  RequestParamsType,
  RequestParamsFullType,
  PddClientOAuthOptionsInterface,
  PddOAuthLinkInterface,
  PddAccessTokenResponseInterface,
} from '../interfaces';
import { retry } from 'async';
import { RetryOptionsInterface } from '../interfaces';
import { PddApiCacheAbstract } from './pdd-api-cache.abstract';
import { checkTypeIsNeedAccessToken } from './pdd-api-check.tools';
import { PddApiThrottle } from './pdd-api-throttle';
import { PddApiMemoryThrottleAdapter } from './pdd-api-memory-throttle-adapter';
import { PddClientAccessAuth } from './pdd-client-access-auth.abstract';
import { APPLICATION_JSON } from '../constant/content-type';
import { pddLog, getPddLogClient } from '../util/debug';
import { PddAccessTokenMissingException, PddResponseException } from '../exceptions';

type PddClientGenerateType =
  | string
  | {
      code: string;
      grant_type: 'authorization_code';
    }
  | {
      refresh_token: string;
      grant_type: 'refresh_token';
    };
type PddCommonRequestExcludeSomeAttr = Pick<PddCommonRequestInterface, 'access_token'>;

/**
 * pdd client
 */
export class PddClient<T = any> {
  constructor(
    public options: PddClientOptionsInterface,
    public pddClientAuth?: PddClientAccessAuth<T>,
    protected pddApiCache?: PddApiCacheAbstract,
    protected apiThrottle: PddApiThrottle = new PddApiThrottle(new PddApiMemoryThrottleAdapter()),
    protected networkAdapter: NetworkAdapterInterface = NetworkAdapter
  ) {
    if (!options.clientId || !options.clientSecret) {
      throw new Error('clientId and clientSecret are necessary!');
    }
    if (this.networkAdapter.set) {
      this.networkAdapter.set(this.options);
    }
    if (!this.options.endpoint) {
      this.options.endpoint = PDD_END_POINTS;
    }
  }

  /**
   * 发起一个普通request请求
   * @param params
   * @param axiosOptions
   * @param callback
   */
  public request<T extends {}, R>(params: T & RequestParamsType, axiosOptions?: PddAxiosClientOptions): Promise<R>;
  public request<T extends {}, R>(
    params: T & RequestParamsType,
    callback: AsyncResultCallbackInterface<R, never>
  ): void;
  public request<T extends {}, R>(
    params: T & RequestParamsType,
    axiosOptions: PddAxiosClientOptions,
    callback: AsyncResultCallbackInterface<R, never>
  ): void;
  public request<T extends {}, R>(
    params: T & RequestParamsType,
    axiosOptions?: AsyncResultCallbackInterface<R, never> | PddAxiosClientOptions,
    callback?: AsyncResultCallbackInterface<R, never>
  ): Promise<R> | void {
    if (typeof axiosOptions === 'function') {
      callback = axiosOptions;
      axiosOptions = undefined;
    }
    const retDefer = defer<R>();
    const defaultArgs: Partial<RequestParamsFullType> = extend({}, PddClient.defaultRequestParam, {
      // eslint-disable-next-line @typescript-eslint/camelcase
      client_id: this.options.clientId,
      timestamp: timestamp(),
    });

    const newParams = extend({}, params);

    const err = checkRequired(newParams, 'type');

    if (err) {
      retDefer.reject(err);

      return promiseToCallback<R>(retDefer.promise, callback as any);
    }

    for (const k in newParams) {
      if (newParams.hasOwnProperty(k)) {
        const value: any = newParams[k];
        if (typeof value === 'object') {
          defaultArgs[k] = JSON.stringify(value);
        } else {
          defaultArgs[k] = value;
        }
      }
    }

    defaultArgs.sign = this.sign((defaultArgs as any) as { [s: string]: string | number });

    let requestPromise = this.apiThrottle.checkApiThrottle(params.type as string, params.access_token).then(() => {
      pddLog('start run pdd client request, type: %s, params: %o', undefined, params.type, params);
      return this.networkAdapter.post(this.options.endpoint, defaultArgs, axiosOptions || {});
    });

    const pddLoggerClient = getPddLogClient();
    // debug
    if (pddLoggerClient && pddLoggerClient.enabled) {
      requestPromise = requestPromise.then(
        response => {
          pddLog('end run pdd client request, type: %s, result: %o', undefined, params.type, response);
          return response;
        },
        err => {
          const errObj =
            (err && (err as PddResponseException).errObj) ||
            (err && (err as Error).stack) ||
            (err as Error).message ||
            err;
          pddLog(
            'end run pdd client request with error, type: %s,  params: %o, error msg: %o',
            undefined,
            params.type,
            params,
            errObj
          );
          throw err;
        }
      );
    }

    retDefer.resolve(requestPromise);

    return promiseToCallback<R>(retDefer.promise, callback as any);
  }

  /**
   * 附带重试机制的request
   * @param params
   * @param retryOptions
   * @param callback
   */
  public requestWithRetry<T extends {}, R>(params: T & RequestParamsType, retryOptions?: RetryOptionsType): Promise<R>;
  public requestWithRetry<T extends {}, R>(
    params: T & RequestParamsType,
    callback: AsyncResultCallbackInterface<R, never>
  ): void;
  public requestWithRetry<T extends {}, R>(
    params: T & RequestParamsType,
    retryOptions: RetryOptionsType,
    callback: AsyncResultCallbackInterface<R, never>
  ): void;
  public requestWithRetry<T extends {}, R>(
    params: T & RequestParamsType,
    retryOptions?: RetryOptionsType | AsyncResultCallbackInterface<R, never>,
    callback?: AsyncResultCallbackInterface<R, never>
  ): Promise<R> | void {
    const [tryOptions, axiosClientOptions, cbk] = guessPddClientRequestWithRetryParams(retryOptions, callback);

    const pddLogClient = getPddLogClient();
    const enabled = pddLogClient && pddLogClient.enabled;
    let retryCount: number;
    if (enabled) {
      retryCount = 0;
    }

    const retryResult = (retry<R>(tryOptions, clbk => {
      // first run not print out message
      if (retryCount) {
        pddLog(
          'start retry pdd client request, retry %d th, max retry count: %d, type: %s, params: %o',
          undefined,
          tryOptions?.times,
          retryCount,
          params.type,
          params
        );
      }

      let result = this.request<T, R>(params, axiosClientOptions);

      if (enabled) {
        result = result.then(
          response => {
            if (retryCount) {
              pddLog(
                'success retry pdd client request, retry %d th, type: %s, result: %o',
                undefined,
                retryCount + 1,
                params.type,
                response
              );
            }
            return response;
          },
          err => {
            if (retryCount) {
              const errObj =
                (err && (err as PddResponseException).errObj) ||
                (err && (err as Error).stack) ||
                (err as Error).message ||
                err;
              pddLog(
                'error retry pdd client request, retry %d th, type: %s, error msg: %o',
                undefined,
                retryCount,
                params.type,
                errObj
              );
            }
            retryCount++;
            throw err;
          }
        );
      }

      return promiseToCallback<R>(result, clbk as any);
    }) as any) as Promise<R>;

    return promiseToCallback<R>(retryResult, cbk as any);
  }

  /**
   * 自动处理响应中带前缀的数据
   * @param type
   * @param params
   * @param [accessOptions]
   * @param [retryOptions]
   * @param [cacheOptions]
   * @param [callback]
   */
  public execute<
    K extends keyof PddCollectRequestInterface,
    Req = PddCollectRequestInterface[K],
    Res = PddCollectShortResponseInterface[K]
  >(
    type: K,
    params: Req & PddCommonRequestExcludeSomeAttr,
    accessOptions?: T | RetryOptionsType | PddCacheOptions
  ): Promise<Res>;
  public execute<
    K extends keyof PddCollectRequestInterface,
    Req = PddCollectRequestInterface[K] & PddCommonRequestExcludeSomeAttr,
    Res = PddCollectShortResponseInterface[K]
  >(
    type: K,
    params: Req & PddCommonRequestExcludeSomeAttr,
    accessOptions: T,
    retryOptions?: RetryOptionsType | PddCacheOptions
  ): Promise<Res>;
  public execute<
    K extends keyof PddCollectRequestInterface,
    Req = PddCollectRequestInterface[K] & PddCommonRequestExcludeSomeAttr,
    Res = PddCollectShortResponseInterface[K]
  >(
    type: K,
    params: Req & PddCommonRequestExcludeSomeAttr,
    accessOptions: T,
    retryOptions: RetryOptionsType,
    cacheOptions?: PddCacheOptions
  ): Promise<Res>;
  public execute<
    K extends keyof PddCollectRequestInterface,
    Req = PddCollectRequestInterface[K],
    Res = PddCollectShortResponseInterface[K]
  >(type: K, params: Req & PddCommonRequestExcludeSomeAttr, callback: AsyncResultCallbackInterface<Res, never>): void;
  public execute<
    K extends keyof PddCollectRequestInterface,
    Req = PddCollectRequestInterface[K],
    Res = PddCollectShortResponseInterface[K]
  >(
    type: K,
    params: Req & PddCommonRequestExcludeSomeAttr,
    accessOptions: T | RetryOptionsType | PddCacheOptions,
    callback: AsyncResultCallbackInterface<Res, never>
  ): void;
  public execute<
    K extends keyof PddCollectRequestInterface,
    Req = PddCollectRequestInterface[K],
    Res = PddCollectShortResponseInterface[K]
  >(
    type: K,
    params: Req & PddCommonRequestExcludeSomeAttr,
    accessOptions: T,
    retryOptions: RetryOptionsType | PddCacheOptions,
    callback: AsyncResultCallbackInterface<Res, never>
  ): void;
  public execute<
    K extends keyof PddCollectRequestInterface,
    Req = PddCollectRequestInterface[K],
    Res = PddCollectShortResponseInterface[K]
  >(
    type: K,
    params: Req & PddCommonRequestExcludeSomeAttr,
    accessOptions: T,
    retryOptions: RetryOptionsType,
    cacheOptions: PddCacheOptions,
    callback: AsyncResultCallbackInterface<Res, never>
  ): void;
  public execute<
    K extends keyof PddCollectRequestInterface,
    Req = PddCollectRequestInterface[K],
    Res = PddCollectShortResponseInterface[K]
  >(
    type: K,
    params: Req & PddCommonRequestExcludeSomeAttr,
    accessOptions?: T | RetryOptionsType | PddCacheOptions | AsyncResultCallbackInterface<Res, never>,
    retryOptions?: RetryOptionsType | PddCacheOptions | AsyncResultCallbackInterface<Res, never>,
    cacheOptions?: PddCacheOptions | AsyncResultCallbackInterface<Res, never>,
    callback?: AsyncResultCallbackInterface<Res, never>
  ): Promise<Res> | void {
    const [apiAccessOptions, apiRetryOptions, apiCacheOptions, apiCallback] = guessPddClientExecuteParams<T>([
      accessOptions,
      retryOptions,
      cacheOptions,
      callback,
    ]);

    // 是否需要传入access token信息
    const needAccessToken = checkTypeIsNeedAccessToken(type);
    if (isDevModel()) {
      if (PddClient.pddDefaultCacheOptions.alwaysWork && cacheOptions !== false && !this.pddApiCache) {
        pddLog('cache options not work! please assign variable: pddApiCache.', '#ff0000');
      }
      if (typeof accessOptions !== 'undefined' && needAccessToken && !this.pddClientAuth) {
        pddLog('access_token will not auto fill. assign variable: pddClientAuth.', '#ffff00');
      }
    }

    const runningFn = () => {
      // 这里需要从access token 中获取数据
      const nParams: Req & RequestParamsType = extend({}, params, { type });
      let result = Promise.resolve(nParams);
      if (needAccessToken) {
        if (this.pddClientAuth) {
          result = result.then(param => {
            if (!apiAccessOptions) {
              throw new PddAccessTokenMissingException('params access options is required!');
            }
            return (this.pddClientAuth as PddClientAccessAuth<T>)
              .getAccessTokenFromCache(apiAccessOptions)
              .then((access: PddAccessTokenResponseInterface | null) => {
                if (access) {
                  return extend({}, param, {
                    // eslint-disable-next-line @typescript-eslint/camelcase
                    access_token: access.access_token,
                  });
                }
                throw new PddAccessTokenMissingException('cat"t find pdd access token from cache!');
              });
          });
        } else {
          result = Promise.reject(new PddAccessTokenMissingException('can"t find pdd access token from params'));
        }
      }
      return result.then((params: Req & PddCommonRequestExcludeSomeAttr) => {
        return this.requestWithRetry<Req & Omit<PddCommonRequestInterface, 'sign' | 'timestamp' | 'client_id'>, any>(
          params as Req & Omit<PddCommonRequestInterface, 'sign' | 'timestamp' | 'client_id'>,
          apiRetryOptions
        ).then(response => {
          if (type in PddResponseTypeAndRequestTypeMapping) {
            const responseKey = (PddResponseTypeAndRequestTypeMapping as any)[type] as string;
            return response[responseKey];
          }
          return response;
        });
      }) as Promise<Res>;
    };

    // api 接口缓存逻辑
    let ret;
    if (
      !includes([false, undefined], apiCacheOptions) ||
      (apiCacheOptions === undefined && PddClient.pddDefaultCacheOptions.alwaysWork)
    ) {
      if (this.pddApiCache) {
        const [cachedKey, ttl] = guessPddClientCachedParams(
          apiCacheOptions,
          PddClient.pddDefaultCacheOptions.ttl,
          () => {
            if (typeof apiCacheOptions === 'object' && isFunction(apiCacheOptions.cacheKey)) {
              return apiCacheOptions.cacheKey(params);
            }
            if (this.pddApiCache) {
              return this.pddApiCache.cacheKey(params);
            }
          }
        );
        if (cachedKey) {
          ret = this.pddApiCache.cached(cachedKey, runningFn, ttl);
        }
      } else {
        isDevModel() && pddLog('cache won"t work, because you don"t assign `pddApiCache`', 'red');
      }
    }

    return promiseToCallback(ret || runningFn(), apiCallback!);
  }

  /**
   * 生成请求签名
   * @param params
   */
  public sign<T extends { [s: string]: string | number }>(params: T): string {
    const { clientSecret } = this.options;
    const sorted: Array<keyof T> = Object.keys(params).sort() as any;
    let baseString = clientSecret;
    for (let i = 0, l = sorted.length; i < l; i++) {
      const k = sorted[i] as keyof T;
      baseString += k + params[k].toString();
    }

    baseString += clientSecret;

    return md5(baseString).toUpperCase();
  }

  /**
   * 获取当前客户端OAuth授权地址
   * @param oAuthOptions
   */
  public createOAuthLink(oAuthOptions?: PddClientOAuthOptionsInterface): PddOAuthLinkInterface[] {
    const { oAuthType, oAuthRedirectUrl, ...leftOptions } = this.options;

    const newOptions = extend(
      {},
      {
        clientId: leftOptions.clientId,
        redirectUri: oAuthRedirectUrl,
        state: Date.now(),
      },
      oAuthOptions
    );

    if (!oAuthType || !newOptions.redirectUri) {
      throw new Error('create o auth link error, auth type or redirectUrl is unknown!');
    }
    newOptions.redirectUri = encodeURIComponent(newOptions.redirectUri);
    return castArray(oAuthType).map((type: OAuthType) => {
      return {
        type,
        url: PDD_OAUTH_TEMPLATE[type](newOptions),
      };
    });
  }

  /**
   * 生成access token
   * @param code
   * @param callback
   */
  public generate(code: PddClientGenerateType): Promise<PddAccessTokenResponseInterface>;
  public generate(
    code: PddClientGenerateType,
    callback: AsyncResultCallbackInterface<PddAccessTokenResponseInterface, never>
  ): void;
  public generate(
    code: PddClientGenerateType,
    callback?: AsyncResultCallbackInterface<PddAccessTokenResponseInterface, never>
  ): Promise<PddAccessTokenResponseInterface> | void {
    /* eslint-disable @typescript-eslint/camelcase */
    const clientOptions = this.options;
    const callOptions = {
      client_id: clientOptions.clientId,
      client_secret: clientOptions.clientSecret,
    };
    if (isString(code)) {
      extend(callOptions, {
        code,
        grant_type: 'authorization_code',
      });
    } else if (isObject(code)) {
      extend(callOptions, code);
    }

    if (!(callOptions as any).grant_type) {
      const msg = `grant type can't be empty${'!'}`;
      throw new Error(msg);
    }
    const resPromise = this.networkAdapter.post(PDD_OAUTH_TOKEN_URL, callOptions, {
      headers: {
        'Content-Type': APPLICATION_JSON,
      },
    });
    return promiseToCallback(resPromise, callback as any);
    /* eslint-enable @typescript-eslint/camelcase */
  }

  /**
   * 刷新freshToken的内容
   * @param freshToken
   * @param callback
   */
  public refresh(freshToken: string): Promise<PddAccessTokenResponseInterface>;
  public refresh(
    freshToken: string,
    callback: AsyncResultCallbackInterface<PddAccessTokenResponseInterface, never>
  ): void;
  public refresh(
    freshToken: string,
    callback?: AsyncResultCallbackInterface<PddAccessTokenResponseInterface, never>
  ): Promise<PddAccessTokenResponseInterface> | void {
    /* eslint-disable @typescript-eslint/camelcase */
    return this.generate(
      {
        refresh_token: freshToken,
        grant_type: 'refresh_token',
      },
      callback as any
    );
    /* eslint-enable @typescript-eslint/camelcase */
  }

  /**
   * @var DefaultRequestType 默认请求参数类型
   */
  protected static defaultRequestParam: DefaultRequestType = {
    // eslint-disable-next-line @typescript-eslint/camelcase
    data_type: 'JSON',
    version: 'V1',
  };

  /**
   * 设置默认的请求参数及类型
   * @param param
   */
  public static setDefaultRequestParam(param: DefaultRequestType) {
    this.defaultRequestParam = param;
  }

  /**
   * 默认重试逻辑
   * @param RetryOptionsInterface
   */
  protected static retryOptions: RetryOptionsInterface = { times: 0 };

  /**
   * 设置重试逻辑
   * @param option {RetryOptionsInterface}
   */
  public static setRetryOptions(option: RetryOptionsInterface) {
    this.retryOptions = option;
  }

  /**
   * 拼多多默认缓存时间
   * @protected
   */
  protected static pddDefaultCacheOptions: PddDefaultCacheOptionsType = {
    ttl: 60 * 60 * 2,
    alwaysWork: false,
  };

  /**
   * 设置拼多多默认缓存配置
   * @param options
   */
  public static setPddDefaultCacheOptions(options: PddDefaultCacheOptionsType) {
    this.pddDefaultCacheOptions = options;
  }
}
