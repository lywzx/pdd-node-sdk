import { ILock } from '../interfaces';
import { PddApiThrottleAdapter } from './pdd-api-throttle-adapter';

/**
 * 无任何作用的限频器
 */
export class PddApiWithoutThrottleAdapter extends PddApiThrottleAdapter {
  lock(key: string, ttl: number): Promise<ILock> {
    return Promise.resolve({
      timeout: 1000,
      triggerTotal: 0,
    });
  }

  unLock(key: string): Promise<boolean> {
    return Promise.resolve(true);
  }
}
