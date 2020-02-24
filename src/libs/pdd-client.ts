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
import { PDD_END_POINTS } from '../constant';
import { extend } from 'lodash';
import { RequestParamsType, RequestParamsFullType } from '../interfaces';
import { retry } from 'async';
import { RetryOptionsInterface } from '../interfaces/retry-options.interface';
import { defaultRetryOptions } from './pdd-client-default';

const defaultRequestParam = {
  // eslint-disable-next-line @typescript-eslint/camelcase
  data_type: 'JSON',
  version: 'V1',
};

type AppTypes = PddCollectRequestInterface;
type RetryOptionsType = RetryOptionsInterface | number;

export class PddClient {
  constructor(public options: PddClientOptionsInterface, public adapter: NetworkAdapterInterface = NetworkAdapter) {
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
  public request<R>(params: RequestParamsType): Promise<R>;
  public request<R>(params: RequestParamsType, callback: AsyncResultCallbackInterface<R, never>): void;
  public request<R>(params: RequestParamsType, callback?: AsyncResultCallbackInterface<R, never>): Promise<R> | void {
    const defaultArgs: Partial<RequestParamsFullType> = extend({}, defaultRequestParam, {
      // eslint-disable-next-line @typescript-eslint/camelcase
      client_id: this.options.clientId,
      timestamp: timestamp(),
    });

    const newParams: object = extend({}, params);

    for (const k in newParams) {
      if (newParams.hasOwnProperty(k)) {
        const value: any = (newParams as any)[k];
        if (typeof value === 'object') {
          (defaultArgs as any)[k] = JSON.stringify(value);
        } else {
          (defaultArgs as any)[k] = value;
        }
      }
    }

    (defaultArgs as any).sign = this.sign((defaultArgs as any) as { [s: string]: string | number });

    const requestPromise = this.adapter.post(this.options.endpoint, defaultArgs);

    return promseToCallback<R>(requestPromise, callback as any);
  }

  /**
   * 附带重试机制的request
   * @param params
   * @param retryOptions
   * @param callback
   */
  public requestWithRetry<R>(params: RequestParamsType, retryOptions?: RetryOptionsType): Promise<R>;
  public requestWithRetry<R>(params: RequestParamsType, callback: AsyncResultCallbackInterface<R, never>): void;
  public requestWithRetry<R>(
    params: RequestParamsType,
    retryOptions: RetryOptionsType,
    callback: AsyncResultCallbackInterface<R, never>
  ): void;
  public requestWithRetry<R>(
    params: RequestParamsType,
    retryOptions?: RetryOptionsType | AsyncResultCallbackInterface<R, never>,
    callback?: AsyncResultCallbackInterface<R, never>
  ): Promise<R> | void {
    let tryOptions: RetryOptionsInterface | undefined;
    if (typeof retryOptions === 'function') {
      tryOptions = defaultRetryOptions;
      callback = (retryOptions as any) as AsyncResultCallbackInterface<R, never>;
    } else if (typeof retryOptions === 'undefined') {
      tryOptions = defaultRetryOptions;
    } else if (typeof retryOptions === 'number') {
      tryOptions = extend({}, defaultRetryOptions, { times: retryOptions });
    }

    const retryResult = (retry<R>(tryOptions, clbk => {
      this.request<R>(params, clbk);
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
  >(type: K, params: Req): Promise<Res>;
  public execute<
    K extends keyof PddCollectRequestInterface,
    Req = PddCollectRequestInterface[K],
    Res = PddCollectShortResponseInterface[K]
  >(type: K, params: Req, retryOptions: RetryOptionsType): Promise<Res>;
  public execute<
    K extends keyof PddCollectRequestInterface,
    Req = PddCollectRequestInterface[K],
    Res = PddCollectShortResponseInterface[K]
  >(type: K, params: Req, retryOptions: AsyncResultCallbackInterface<Res, never>): void;
  public execute<
    K extends keyof PddCollectRequestInterface,
    Req = PddCollectRequestInterface[K],
    Res = PddCollectShortResponseInterface[K]
  >(type: K, params: Req, retryOptions: RetryOptionsType, callback: AsyncResultCallbackInterface<Res, never>): void;
  public execute<
    K extends keyof PddCollectRequestInterface,
    Req = PddCollectRequestInterface[K],
    Res = PddCollectShortResponseInterface[K]
  >(
    type: K,
    params: Req,
    retryOptions?: RetryOptionsType | AsyncResultCallbackInterface<Res, never>,
    callback?: AsyncResultCallbackInterface<Res, never>
  ): Promise<Res> | void {
    const reqParams: Omit<PddCommonRequestInterface, 'sign'> = extend({}, params, { type: type }) as any;
    if (typeof retryOptions === 'function') {
      callback = retryOptions;
      retryOptions = {};
    }

    const result = this.requestWithRetry<any>(reqParams, retryOptions as RetryOptionsType).then(response => {
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
      baseString += k + (params[k] || '').toString();
    }

    baseString += clientSecret;

    return md5(baseString).toUpperCase();
  }
}