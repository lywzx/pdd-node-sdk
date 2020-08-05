import { PddApiLimiterLevel } from '../constant';
import { PddRequestWaitingTimeoutException } from '../exceptions/pdd-request-waiting-timeout.exception';
import { PddApiLimiterInterface } from '../interfaces';
import { PddApiThrottleOptionsInterface } from '../interfaces';
import { defer } from '../util';
import { getTypeApiLimiter } from './pdd-api-check.tools';
import { PddApiThrottleAdapter } from './pdd-api-throttle-adapter';

/**
 * 拼多多api限频器, 默认等待5分钟
 */
export class PddApiThrottle {
  constructor(
    protected adapter: PddApiThrottleAdapter,
    protected options: PddApiThrottleOptionsInterface = { timeout: 300000 }
  ) {}

  /**
   * 获取限频数据
   * @param api {string} 请求api名称
   * @param ak {string} 店铺签名
   */
  public checkApiThrottle(api: string, ak?: string): Promise<null> {
    const df = defer<null>();
    const apiRateLimit = getTypeApiLimiter(api);
    if (!apiRateLimit) {
      df.resolve(null);
      return df.promise;
    }
    // 将使用限流场景

    return df.promise;
  }

  /**
   * 获取生成的key
   * @param api
   * @param level
   * @param ak
   * @protected
   */
  protected getSaveKey(api: string, level: PddApiLimiterLevel, ak?: string) {
    const prefix = this.options.keyPrefix || 'pdd:api:limiter';
    switch (level) {
      case PddApiLimiterLevel.API: {
        return `${prefix}:${api}`;
      }
      case PddApiLimiterLevel.APP: {
        return `${prefix}:app:limit:total`;
      }
      case PddApiLimiterLevel.SHOP: {
        return `${prefix}:shop:`;
      }
    }
  }
}
