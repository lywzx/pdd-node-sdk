import { PddClientOptionsInterface } from './interfaces/pdd-client-options.interface';
import { PddCollectRequestInterface, PddCollectResponseInterface } from './pddApi';
import { checkRequired, md5 } from './util';
import { AsyncResultCallbackInterface } from './interfaces/async-result-callback.interface';
import { NetworkAdapter, NetworkAdapterInterface } from './lib/network-adapter';

type AppTypes = PddCollectRequestInterface;

export class PddClient {
  constructor(private options: PddClientOptionsInterface, public adapter: NetworkAdapterInterface = NetworkAdapter) {
    if (this.adapter.set) {
      this.adapter.set(this.options);
    }
  }

  /**
   * 发起一个普通request请求
   * @param type
   * @param params
   * @param callback
   */
  public requestPlain<K extends keyof PddCollectResponseInterface>(
    type: K,
    params: PddCollectRequestInterface[K]
  ): Promise<PddCollectRequestInterface[K]>;
  public requestPlain<K extends keyof PddCollectRequestInterface>(
    type: K,
    params: PddCollectRequestInterface[K],
    callback: AsyncResultCallbackInterface<PddCollectRequestInterface[K], never>
  ): void;
  public requestPlain<K extends keyof PddCollectRequestInterface>(
    type: K,
    params: PddCollectRequestInterface[K],
    callback?: AsyncResultCallbackInterface<any, never>
  ): Promise<PddCollectRequestInterface[K]> | void {
    const err = checkRequired(params, 'type');
    //this.axiosClient.post();
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
