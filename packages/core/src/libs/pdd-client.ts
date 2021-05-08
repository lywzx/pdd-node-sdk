import {
  PDD_POP_AUTH_TOKEN_CREATE,
  PDD_POP_AUTH_TOKEN_REFRESH,
  PddCollectRequestInterface,
  PddCollectShortResponseInterface,
  PddCommonRequestInterface,
  PddPopAuthTokenCreateRequestInterface,
  PddPopAuthTokenCreateResponseInterface,
  PddPopAuthTokenRefreshRequestInterface,
  PddPopAuthTokenRefreshResponseInterface,
} from '@pin-duo-duo/pdd-origin-api';
import { retry } from 'async';
import { EventEmitter } from 'events';
import castArray from 'lodash/castArray';
import extend from 'lodash/extend';
import includes from 'lodash/includes';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';
import { OAuthType, PDD_END_POINTS, PDD_OAUTH_TEMPLATE } from '../constant';
import {
  PDD_CLIENT_ACCESS_TOKEN_CLEAR_TIMEOUT,
  PDD_CLIENT_PASS_ACCESS_TOKEN_KEY,
} from '../constant/pdd-client-pass-access-token';
import { PddAccessTokenMissingException, PddBaseException, PddResponseException } from '../exceptions';
import {
  AsyncResultCallbackInterface,
  DefaultRequestType,
  NetworkAdapterInterface,
  PddAccessTokenResponseInterface,
  PddApiClientAccessAuthLock,
  PddAxiosClientOptions,
  PddCacheOptions,
  PddClientErrorListener,
  PddClientOAuthOptionsInterface,
  PddClientOptionsInterface,
  PddDefaultCacheOptionsType,
  PddOAuthLinkInterface,
  RequestParamsFullType,
  RequestParamsType,
  RetryOptionsInterface,
  RetryOptionsType,
} from '../interfaces';
import { checkRequired, defer, getShortResponse, md5, promiseToCallback, sleep, timestamp } from '../util';
import { getPddLogClient, pddLog } from '../util/debug';
import { isDevModel } from '../util/dev';
import {
  guessPddClientCachedParams,
  guessPddClientExecuteParams,
  guessPddClientGenerateParams,
  guessPddClientRequestWithRetryParams,
} from '../util/guess-params.util';
import { NetworkAdapter } from './network-adapter';
import { PddApiCacheAbstract } from './pdd-api-cache.abstract';
import { checkTypeIsNeedAccessToken } from './pdd-api-check.tools';
import { PddApiMemoryThrottleAdapter } from './pdd-api-memory-throttle-adapter';
import { PddApiThrottle } from './pdd-api-throttle';
import { PddClientAccessAuth } from './pdd-client-access-auth.abstract';
import { defaultRetryOptions } from './pdd-client-default';

/**
 * 生成access token，请求参数
 */
type PddClientGenerateType = PddPopAuthTokenRefreshRequestInterface | PddPopAuthTokenCreateRequestInterface;

/**
 * 附带AccessToken的数据
 */
type RequestParamsTypeWithAccessToken = {
  [PDD_CLIENT_PASS_ACCESS_TOKEN_KEY]?: PddAccessTokenResponseInterface;
};

/**
 * 请求时的联合数据
 */
type RequestParamsTypeMix = RequestParamsType & RequestParamsTypeWithAccessToken;

/**
 * 带access_token的请求数
 */
type PddCommonRequestExcludeSomeAttr = Pick<PddCommonRequestInterface, 'access_token'>;
/**
 * pdd client
 */
export class PddClient<T extends Record<string, any> = any> {
  /**
   * 自定议错误事件等
   * @protected
   */
  protected event: EventEmitter;
  /**
   * 中间数据
   * @private
   */
  private _wrapRequestWithRetry?: any;

  constructor(
    public options: PddClientOptionsInterface,
    public pddClientAuth?: Omit<PddClientAccessAuth<T>, 'functionAlOptions'>,
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
    this.event = new EventEmitter();
  }

  /**
   * 发起一个普通request请求
   * @param params
   * @param axiosOptions
   * @param callback
   */
  public request<T extends Record<string, any>, R>(
    params: T & RequestParamsTypeMix,
    axiosOptions?: PddAxiosClientOptions
  ): Promise<R>;
  public request<T extends Record<string, any>, R>(
    params: T & RequestParamsTypeMix,
    callback: AsyncResultCallbackInterface<R, never>
  ): void;
  public request<T extends Record<string, any>, R>(
    params: T & RequestParamsTypeMix,
    axiosOptions: PddAxiosClientOptions,
    callback: AsyncResultCallbackInterface<R, never>
  ): void;
  public request<T extends Record<string, any>, R>(
    params: T & RequestParamsTypeMix,
    axiosOptions?: AsyncResultCallbackInterface<R, never> | PddAxiosClientOptions,
    callback?: AsyncResultCallbackInterface<R, never>
  ): Promise<R> | void {
    if (typeof axiosOptions === 'function') {
      callback = axiosOptions;
      axiosOptions = undefined;
    }
    const retDefer = defer<R>();
    const clientId = this.options.clientId;
    const defaultArgs: Partial<RequestParamsFullType> = extend({}, PddClient.defaultRequestParam, {
      client_id: clientId,
      timestamp: timestamp(),
    });

    const newParams = extend({}, params);

    const err: PddBaseException | void = checkRequired(newParams, 'type');

    if (err) {
      retDefer.reject(err);

      return promiseToCallback<R>(retDefer.promise, callback as any);
    }

    for (const k in newParams) {
      if (k !== PDD_CLIENT_PASS_ACCESS_TOKEN_KEY && newParams.hasOwnProperty(k)) {
        const value: any = newParams[k];
        if (typeof value === 'object') {
          defaultArgs[k] = JSON.stringify(value);
        } else {
          defaultArgs[k] = value;
        }
      }
    }

    defaultArgs.sign = this.sign((defaultArgs as any) as { [s: string]: string | number });

    // 获取到AccessToken相关信息
    const accessTokenInfo = params[PDD_CLIENT_PASS_ACCESS_TOKEN_KEY];
    const ownerId = accessTokenInfo && (accessTokenInfo.owner_id as string);

    let requestPromise = this.apiThrottle
      .checkApiThrottle(params.type as string, clientId, ownerId || params.access_token)
      .then(() => {
        pddLog('start run pdd client request, type: %s, params: %o', undefined, params.type, params);
        return this.networkAdapter.post(this.options.endpoint, defaultArgs, axiosOptions || {});
      });

    const pddLoggerClient = getPddLogClient();
    // debug
    if (pddLoggerClient && pddLoggerClient.enabled) {
      requestPromise = requestPromise.then(
        (response) => {
          pddLog('end run pdd client request, type: %s, result: %o', undefined, params.type, response);
          return response;
        },
        (err) => {
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
  public requestWithRetry<T extends Record<string, any>, R>(
    params: T & RequestParamsTypeMix,
    retryOptions?: RetryOptionsType
  ): Promise<R>;
  public requestWithRetry<T extends Record<string, any>, R>(
    params: T & RequestParamsTypeMix,
    callback: AsyncResultCallbackInterface<R, never>
  ): void;
  public requestWithRetry<T extends Record<string, any>, R>(
    params: T & RequestParamsTypeMix,
    retryOptions: RetryOptionsType,
    callback: AsyncResultCallbackInterface<R, never>
  ): void;
  public requestWithRetry<T extends Record<string, any>, R>(
    params: T & RequestParamsTypeMix,
    retryOptions?: RetryOptionsType | AsyncResultCallbackInterface<R, never>,
    callback?: AsyncResultCallbackInterface<R, never>
  ): Promise<R> | void {
    const [tryOptions = { times: 1 }, axiosClientOptions, cbk] = guessPddClientRequestWithRetryParams(
      retryOptions,
      callback,
      PddClient.retryOptions
    );

    const _wrapRequestWithRetry = this._wrapRequestWithRetry;
    this._wrapRequestWithRetry = undefined;

    const pddLogClient = getPddLogClient();
    const enabled = pddLogClient && pddLogClient.enabled;
    let retryCount: number;
    if (enabled) {
      retryCount = 0;
    }

    const retryResult = (retry<R>(tryOptions, (clbk) => {
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
          (response) => {
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
          (err) => {
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

      if (_wrapRequestWithRetry) {
        result = result.catch(_wrapRequestWithRetry);
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
    const [
      apiAccessOptions,
      apiRetryOptions = PddClient.retryOptions,
      apiCacheOptions,
      apiCallback,
    ] = guessPddClientExecuteParams<T>([accessOptions, retryOptions, cacheOptions, callback]);

    // 是否需要传入access token信息
    const needAccessToken = checkTypeIsNeedAccessToken(type);
    if (isDevModel()) {
      if (PddClient.pddDefaultCacheOptions.alwaysWork && cacheOptions !== false && !this.pddApiCache) {
        pddLog('cache options not work! please assign variable: pddApiCache.', '#ff0000');
      }
      if (typeof apiAccessOptions !== 'undefined' && needAccessToken && !this.pddClientAuth) {
        pddLog('access_token will not auto fill. assign variable: pddClientAuth.', '#ffff00');
      }
    }

    const runningFn = () => {
      // 这里需要从access token 中获取数据
      const nParams: Req & RequestParamsTypeMix = extend({}, params, { type });
      let accessTokenInfo: PddAccessTokenResponseInterface | null | undefined;
      let result = Promise.resolve(nParams);
      if (needAccessToken) {
        if (this.pddClientAuth) {
          result = result.then((param) => {
            if (!apiAccessOptions) {
              throw new PddAccessTokenMissingException('params access options is required!');
            }
            return (this.pddClientAuth as PddClientAccessAuth<T>)
              .getAccessTokenFromCache(apiAccessOptions)
              .then((access: PddAccessTokenResponseInterface | null) => {
                if (access) {
                  accessTokenInfo = access;
                  const scope = access.scope;
                  // 验证是否有当前接口权限
                  if (scope && scope.length) {
                    // 有些场景，拼多多官方会合并两个应用接口，这里所以不会存在
                    if ((scope as string[]).indexOf(type) === -1) {
                      pddLog(`shop id:${access.owner_id || 'unknown mall id'} visit ${type} permission deny!`);
                    }
                  }

                  return extend({}, param, {
                    access_token: access.access_token,
                    [PDD_CLIENT_PASS_ACCESS_TOKEN_KEY]: access,
                  });
                }
                throw new PddAccessTokenMissingException('cat"t find pdd access token from cache!', true);
              });
          });
        } else {
          result = Promise.reject(new PddAccessTokenMissingException('can"t find pdd access token from params'));
        }
      }
      return result.then((params: Req & PddCommonRequestExcludeSomeAttr) => {
        // 自动维护access token信息
        const pddClientAuth = this.pddClientAuth as
          | undefined
          | (PddClientAccessAuth<T> & Partial<PddApiClientAccessAuthLock>);

        // hack for requestWithRetry
        if (
          pddClientAuth &&
          isFunction(pddClientAuth.lock) &&
          isFunction(pddClientAuth.unLock) &&
          apiAccessOptions &&
          accessTokenInfo
        ) {
          this._wrapRequestWithRetry = async (err?: Error) => {
            if (accessTokenInfo && err && err instanceof PddResponseException) {
              if (err.accessTokenNeedRefresh()) {
                // 如果access token还有2分钟过期
                if (
                  parseInt(accessTokenInfo.expires_at.toString(), 10) * 1000 <=
                    Date.now() + PDD_CLIENT_ACCESS_TOKEN_CLEAR_TIMEOUT &&
                  parseInt(accessTokenInfo.refresh_token_expires_at.toString(), 10) * 1000 <=
                    Date.now() + PDD_CLIENT_ACCESS_TOKEN_CLEAR_TIMEOUT
                ) {
                  // 清理access token
                  await pddClientAuth.clearAccessTokenFromCache(apiAccessOptions);
                } else {
                  const lockKey = `${pddClientAuth.generateAccessTokenKey(apiAccessOptions)}:access:${
                    accessTokenInfo.owner_id
                  }:lock`;
                  if (pddClientAuth.lock && pddClientAuth.unLock && (await pddClientAuth.lock(lockKey, 10000))) {
                    err.ignoreTokenRefresh(false);
                    try {
                      // 刷新access token
                      const result = await this.request<
                        PddPopAuthTokenRefreshRequestInterface,
                        PddPopAuthTokenRefreshResponseInterface
                      >({
                        type: PDD_POP_AUTH_TOKEN_REFRESH,
                        refresh_token: accessTokenInfo.refresh_token,
                      });
                      const freshTokenInfo = getShortResponse(result, PDD_POP_AUTH_TOKEN_REFRESH);
                      await pddClientAuth.setAccessTokenToCache(apiAccessOptions, freshTokenInfo);
                    } catch (e) {}
                    // 释放锁
                    await pddClientAuth.unLock(lockKey);
                    accessTokenInfo = null;
                    // todo 后续有必要加入重试逻辑
                  } else {
                    err.ignoreTokenRefresh(true);
                    // hack sleep 3s, 假定刷新token信息，能够在3s内完成
                    await sleep(3000);
                  }
                }
              }
            }
            return Promise.reject(err);
          };
        }

        return this.requestWithRetry<Req & Omit<PddCommonRequestInterface, 'sign' | 'timestamp' | 'client_id'>, any>(
          params as Req & Omit<PddCommonRequestInterface, 'sign' | 'timestamp' | 'client_id'>,
          apiRetryOptions
        ).then((response) => {
          return getShortResponse(response, type);
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
            const cacheKeyObject = {
              type,
              ...extend({}, params),
              ...extend({}, apiAccessOptions),
            };
            if (typeof apiCacheOptions === 'object' && isFunction(apiCacheOptions.cacheKey)) {
              return apiCacheOptions.cacheKey(cacheKeyObject);
            }
            if (this.pddApiCache) {
              return this.pddApiCache.cacheKey(cacheKeyObject);
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

    return promiseToCallback(
      (ret || runningFn()).catch((err) => {
        if (err) {
          this.event.emit('error', err, { type, ...params }, apiAccessOptions);
        }
        return Promise.reject(err);
      }),
      apiCallback!
    );
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
   * @param accessOptions
   * @param callback
   */
  public generate(code: T | PddClientGenerateType | string): Promise<PddAccessTokenResponseInterface>;
  public generate(code: PddClientGenerateType | string, accessOptions: T): Promise<PddAccessTokenResponseInterface>;
  public generate(
    code: T | PddClientGenerateType | string,
    callback: AsyncResultCallbackInterface<PddAccessTokenResponseInterface, never>
  ): void;
  public generate(
    code: PddClientGenerateType | string,
    accessOptions: T,
    callback: AsyncResultCallbackInterface<PddAccessTokenResponseInterface, never>
  ): void;
  public generate(
    code: T | PddClientGenerateType | string,
    accessOptions?: T | AsyncResultCallbackInterface<PddAccessTokenResponseInterface, never>,
    callback?: AsyncResultCallbackInterface<PddAccessTokenResponseInterface, never>
  ): Promise<PddAccessTokenResponseInterface> | void {
    const [params, access, cbk] = guessPddClientGenerateParams<T>(code, accessOptions, callback);

    let paramsPromise: Promise<PddPopAuthTokenRefreshRequestInterface | PddPopAuthTokenCreateRequestInterface>;

    if (params) {
      paramsPromise = Promise.resolve(params);
    } else {
      /*if (!access) {
        throw new PddBaseException('if you want refresh access token, you should pass access token or params');
      }*/
      if (!this.pddClientAuth) {
        throw new PddBaseException('refresh access token failed, because pdd client auth is undefined!');
      }
      paramsPromise = this.pddClientAuth.getAccessTokenFromCache(access as T).then((result) => {
        if (result) {
          return {
            refresh_token: result.refresh_token,
          } as PddPopAuthTokenRefreshRequestInterface;
        }
        throw new PddBaseException('refresh access token can not find.');
      });
    }

    const result = paramsPromise
      .then<PddAccessTokenResponseInterface>((param) => {
        const type = 'code' in param ? PDD_POP_AUTH_TOKEN_CREATE : PDD_POP_AUTH_TOKEN_REFRESH;
        return this.request<
          PddClientGenerateType,
          PddPopAuthTokenCreateResponseInterface | PddPopAuthTokenRefreshResponseInterface
        >({
          type,
          ...param,
        }).then<PddAccessTokenResponseInterface>((result) => {
          return getShortResponse(result, type);
        });
      })
      .then(async (res) => {
        // 保存access token至缓存数据当中
        if (this.pddClientAuth && access) {
          await this.pddClientAuth.setAccessTokenToCache(access, res);
        }
        return res;
      });

    return promiseToCallback(result, cbk as AsyncResultCallbackInterface<PddAccessTokenResponseInterface, never>);
  }

  /**
   * 刷新freshToken的内容
   * @param freshToken
   * @param accessOptions
   * @param callback
   */
  public refresh(freshToken: string | T | PddClientGenerateType): Promise<PddAccessTokenResponseInterface>;
  public refresh(
    freshToken: string | T | PddClientGenerateType,
    callback: AsyncResultCallbackInterface<PddAccessTokenResponseInterface, never>
  ): void;
  public refresh(
    freshToken: string | T | PddClientGenerateType,
    callback?: AsyncResultCallbackInterface<PddAccessTokenResponseInterface, never>
  ): Promise<PddAccessTokenResponseInterface> | void {
    let token: T | PddClientGenerateType;
    if (isString(freshToken)) {
      token = {
        refresh_token: freshToken,
      };
    } else {
      token = freshToken;
    }
    return this.generate(
      token as T | PddClientGenerateType,
      callback as AsyncResultCallbackInterface<PddAccessTokenResponseInterface, never>
    );
  }

  /**
   * @var DefaultRequestType 默认请求参数类型
   */
  protected static defaultRequestParam: DefaultRequestType = {
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
  protected static retryOptions: RetryOptionsInterface = defaultRetryOptions;

  /**
   * 设置重试逻辑
   * @param option {RetryOptionsInterface}
   */
  public static setRetryOptions(option: RetryOptionsInterface) {
    extend(PddClient.retryOptions, option);
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

  /**
   * 捕获client发出的错误信息
   * @param event
   * @param listener
   */
  public on(event: 'error', listener: PddClientErrorListener<T>) {
    this.event.on(event, listener);
    return this;
  }

  /**
   * 取消事件绑定
   * @param event
   * @param listener
   */
  public off(event: 'error', listener?: PddClientErrorListener<T>) {
    if (listener) {
      this.event.off(event, listener);
    } else {
      this.event.removeAllListeners(event);
    }
    return this;
  }

  /**
   * 只执行一次绑定事件
   * @param event
   * @param listener
   */
  public once(event: 'error', listener: PddClientErrorListener<T>) {
    this.event.on(event, listener);
    return this;
  }
}
