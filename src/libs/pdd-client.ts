import { PddClientOptionsInterface } from '../interfaces/pdd-client-options.interface';
import { PddCollectRequestInterface, PddCollectResponseInterface, PddCommonRequestInterface } from '../pddApi';
import { checkRequired, md5, timestamp } from '../util';
import { AsyncResultCallbackInterface } from '../interfaces/async-result-callback.interface';
import { NetworkAdapter, NetworkAdapterInterface } from './network-adapter';
import { PDD_END_POINTS } from '../constant';
import { extend } from 'lodash';
import { RequestParamsType, RequestParamsFullType } from '../interfaces';

const defaultRequestParam = {
  // eslint-disable-next-line @typescript-eslint/camelcase
  data_type: 'JSON',
  version: 'V1',
};

type AppTypes = PddCollectRequestInterface;

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
   * @param type
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

    if (callback && typeof callback === 'function') {
      requestPromise.then(response => callback(null, response)).catch(error => callback(error));
    } else {
      return requestPromise;
    }
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
