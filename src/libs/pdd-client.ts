import { PddClientOptionsInterface } from '../interfaces/pdd-client-options.interface';
import {
  PddCollectRequestInterface,
  PddCollectShortResponseInterface,
  PddCommonRequestInterface,
  PddResponseTypeAndRequestTypeMapping,
} from '../pddApi';
import { md5, timestamp, promseToCallback } from '../util';
import { AsyncResultCallbackInterface } from '../interfaces/async-result-callback.interface';
import { NetworkAdapter, NetworkAdapterInterface } from './network-adapter';
import { PDD_END_POINTS, PDD_OAUTH_TEMPLATE, OAuthType, PDD_OAUTH_TOKEN_URL } from '../constant';
import { extend, castArray, omit } from 'lodash';
import {
  RequestParamsType,
  RequestParamsFullType,
  PddClientOAuthOptionsInterface,
  PddOAuthLinkInterface,
  PddAccessTokenResponseInterface,
} from '../interfaces';
import { retry } from 'async';
import { RetryOptionsInterface } from '../interfaces/retry-options.interface';
import { defaultRetryOptions } from './pdd-client-default';
import { isString, isObject } from 'util';
import { APPLICATION_JSON } from '../constant/content-type';
import { pddLog, getPddLogClient } from '../util/debug';
import { PddException } from '../exceptions/pdd-exception';

const defaultRequestParam = {
  // eslint-disable-next-line @typescript-eslint/camelcase
  data_type: 'JSON',
  version: 'V1',
};

// 限制拼多多接口的响应等待时间
type PddAxiosClientOptions = { timeout?: number };
type RetryOptionsType = (RetryOptionsInterface & PddAxiosClientOptions) | number;
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

export class PddClient {
  constructor(public options: PddClientOptionsInterface, protected adapter: NetworkAdapterInterface = NetworkAdapter) {
    if (!options.clientId || !options.clientSecret) {
      throw new Error('clientId and clientSecret are necessary!');
    }
    if (this.adapter.set) {
      this.adapter.set(this.options);
    }
    if (!this.options.endpoint) {
      this.options.endpoint = PDD_END_POINTS;
    }
  }

  /**
   * 发起一个普通request请求
   * @param params
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
    const defaultArgs: Partial<RequestParamsFullType> = extend({}, defaultRequestParam, {
      // eslint-disable-next-line @typescript-eslint/camelcase
      client_id: this.options.clientId,
      timestamp: timestamp(),
    });

    const newParams = extend({}, params);

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

    pddLog(`start run pdd client request, type: %s, params: %o`, params.type, params);
    let requestPromise = this.adapter.post(this.options.endpoint, defaultArgs, axiosOptions || {});

    // debug
    if (getPddLogClient().enabled) {
      requestPromise = requestPromise.then(
        response => {
          pddLog('end run pdd client request, type: %s, result: %o', params.type, response);
          return response;
        },
        err => {
          const errObj =
            (err && (err as PddException).errObj) || (err && (err as Error).stack) || (err as Error).message || err;
          pddLog(
            'end run pdd client request with error, type: %s,  params: %o, error msg: %o',
            params.type,
            params,
            errObj
          );
          throw err;
        }
      );
    }

    return promseToCallback<R>(requestPromise, callback as any);
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
    let tryOptions: RetryOptionsInterface | undefined;
    let axiosClientOptions: PddAxiosClientOptions;
    if (typeof retryOptions === 'function') {
      tryOptions = defaultRetryOptions;
      callback = (retryOptions as any) as AsyncResultCallbackInterface<R, never>;
    } else if (typeof retryOptions === 'undefined') {
      tryOptions = defaultRetryOptions;
    } else if (typeof retryOptions === 'number') {
      tryOptions = extend({}, defaultRetryOptions, { times: retryOptions });
    } else if (typeof retryOptions === 'object') {
      tryOptions = extend({}, defaultRetryOptions, omit(retryOptions, ['timeout']));
      if (retryOptions.timeout) {
        axiosClientOptions = {
          timeout: retryOptions.timeout,
        };
      }
    }

    let retryCount: number;
    if (getPddLogClient().enabled) {
      retryCount = 0;
    }

    const retryResult = (retry<R>(tryOptions, clbk => {
      // first run not print out message
      if (retryCount) {
        pddLog(
          'start retry pdd client request, retry %d th, max retry count: %d, type: %s, params: %o',
          tryOptions?.times,
          retryCount,
          params.type,
          params
        );
      }

      let result = this.request<T, R>(params, axiosClientOptions);

      if (getPddLogClient().enabled) {
        result = result.then(
          response => {
            if (retryCount) {
              pddLog(
                'success retry pdd client request, retry %d th, type: %s, result: %o',
                retryCount,
                params.type,
                response
              );
            }
            return response;
          },
          err => {
            if (retryCount) {
              const errObj =
                (err && (err as PddException).errObj) || (err && (err as Error).stack) || (err as Error).message || err;
              pddLog(
                'error retry pdd client request, retry %d th, type: %s, error msg: %o',
                retryCount,
                params.type,
                errObj
              );
            }
            throw err;
          }
        );
      }

      return promseToCallback<R>(result, clbk as any);
    }) as any) as Promise<R>;

    return promseToCallback<R>(retryResult, callback as any);
  }

  /**
   * 自动处理响应中带前缀的数据
   * @param type
   * @param params
   * @param [retryOptions]
   * @param [callback]
   */
  public execute<
    K extends keyof PddCollectRequestInterface,
    Req = PddCollectRequestInterface[K],
    Res = PddCollectShortResponseInterface[K]
  >(type: K, params: Req & PddCommonRequestExcludeSomeAttr): Promise<Res>;
  public execute<
    K extends keyof PddCollectRequestInterface,
    Req = PddCollectRequestInterface[K] & PddCommonRequestExcludeSomeAttr,
    Res = PddCollectShortResponseInterface[K]
  >(type: K, params: Req & PddCommonRequestExcludeSomeAttr, retryOptions: RetryOptionsType): Promise<Res>;
  public execute<
    K extends keyof PddCollectRequestInterface,
    Req = PddCollectRequestInterface[K],
    Res = PddCollectShortResponseInterface[K]
  >(
    type: K,
    params: Req & PddCommonRequestExcludeSomeAttr,
    retryOptions: AsyncResultCallbackInterface<Res, never>
  ): void;
  public execute<
    K extends keyof PddCollectRequestInterface,
    Req = PddCollectRequestInterface[K] & PddCommonRequestExcludeSomeAttr,
    Res = PddCollectShortResponseInterface[K]
  >(
    type: K,
    params: Req & PddCommonRequestExcludeSomeAttr,
    retryOptions: RetryOptionsType,
    callback: AsyncResultCallbackInterface<Res, never>
  ): void;
  public execute<
    K extends keyof PddCollectRequestInterface,
    Req = PddCollectRequestInterface[K],
    Res = PddCollectShortResponseInterface[K]
  >(
    type: K,
    params: Req & PddCommonRequestExcludeSomeAttr,
    retryOptions?: RetryOptionsType | AsyncResultCallbackInterface<Res, never>,
    callback?: AsyncResultCallbackInterface<Res, never>
  ): Promise<Res> | void {
    const reqParams = extend({}, params, { type: type }) as any;
    if (typeof retryOptions === 'function') {
      callback = retryOptions;
      retryOptions = {};
    }
    const result = this.requestWithRetry<
      Req & Omit<PddCommonRequestInterface, 'sign' | 'timestamp' | 'client_id'>,
      any
    >(reqParams, retryOptions as RetryOptionsType).then(response => {
      if (type in PddResponseTypeAndRequestTypeMapping) {
        const responseKey = (PddResponseTypeAndRequestTypeMapping as any)[type] as string;
        return response[responseKey];
      }
      return response;
    });

    return promseToCallback(result, callback as any);
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
      throw new Error("grant type can't be empty!");
    }
    const resPromise = this.adapter.post(PDD_OAUTH_TOKEN_URL, callOptions, {
      headers: {
        'Content-Type': APPLICATION_JSON,
      },
    });
    return promseToCallback(resPromise, callback as any);
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
}
