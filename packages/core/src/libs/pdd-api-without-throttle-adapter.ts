import { PddApiThrottleAdapter } from './pdd-api-throttle-adapter';

/**
 * 拼多多默认的不限频类
 */
export class PddApiWithoutThrottleAdapter extends PddApiThrottleAdapter {
  /**
   * 缓存数据的map对象
   * @protected
   */
  protected cacheMap = new Map<string, any>();

  get<T>(key: string): Promise<T | undefined> {
    return Promise.resolve(undefined);
  }

  set(key: string, value: any, ttl?: number): Promise<boolean> {
    return Promise.resolve(false);
  }
}
