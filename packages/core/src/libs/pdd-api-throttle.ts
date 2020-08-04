import { PddRequestWaitingTimeoutException } from '../exceptions/pdd-request-waiting-timeout.exception';
import { PddApiLimiterInterface } from '../interfaces';
import { PddApiThrottleAdapter } from './pdd-api-throttle-adapter';
import { PddApiLimiterMapping } from '@pin-duo-duo/pdd-origin-api';

/**
 * 拼多多api限频器
 */
export class PddApiThrottle {
  constructor(protected adapter: PddApiThrottleAdapter) {}

  /**
   * 获取限频数据
   * @param api
   */
  public async checkApiThrottle(api: string): Promise<null> {
    throw new PddRequestWaitingTimeoutException();
    return null;
  }

  protected getApiRateLimit(api: string): PddApiLimiterInterface[] | void {
    if (api in PddApiLimiterMapping) {
      return (PddApiLimiterMapping as any)[api] as PddApiLimiterInterface[];
    }
    return undefined;
  }
}
