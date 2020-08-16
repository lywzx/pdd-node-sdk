// eslint-disable-next-line @typescript-eslint/no-var-requires
const stringify = require('fast-json-stable-stringify');
import omit from 'lodash/omit';

export abstract class PddApiCacheAbstract {
  /**
   * 默认时间配置
   */
  static defaultTtl = {
    ttl: 24 * 60 * 60,
  };

  static setPddApiDefaultTtl(ttl: number) {
    this.defaultTtl.ttl = ttl;
  }

  /**
   * 传入参数，生成缓存的key
   * @param obj
   */
  public cacheKey(obj: any): string {
    const toObj = omit(obj, ['client_id', 'timestamp', 'data_type', 'version', 'sign']);

    return stringify(toObj);
  }

  /**
   * 缓存某个类及对应实例
   * @param key
   * @param fn
   * @param ttl
   */
  public abstract cached<R>(key: string, fn: () => Promise<R>, ttl: number | ((...args: any[]) => number)): Promise<R>;
}
