import { ILock } from '../interfaces';
import { PddApiThrottleAdapter } from './pdd-api-throttle-adapter';

/**
 * 拼多多默认的不限频类
 */
export class PddApiWithoutThrottleAdapter extends PddApiThrottleAdapter {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public lock(key: string, ttl?: number): Promise<ILock> {
    return Promise.resolve({
      triggerTotal: 0,
      timeout: 0,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  unLock(key: string): Promise<boolean> {
    return Promise.resolve(true);
  }
}
