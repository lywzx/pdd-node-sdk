import { PddApiLimiterLevel } from '../constant';
import { PddRequestWaitingTimeoutException } from '../exceptions';
import { PddApiThrottleOptionsInterface } from '../interfaces';
import { sleep } from '../util';
import { getTypeApiLimiter } from './pdd-api-check.tools';
import { PddApiThrottleAdapter } from './pdd-api-throttle-adapter';
import map from 'lodash/map';

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
   * @param startAt
   */
  public async checkApiThrottle(api: string, ak?: string, startAt: number = Date.now()): Promise<null> {
    const apiRateLimit = getTypeApiLimiter(api);
    if (!apiRateLimit) {
      return null;
    }
    const result = await Promise.all(
      map(apiRateLimit, limiter => {
        const saveKey = this.getSaveKey(api, limiter.limiterLevel, ak);
        return this.adapter.lock(saveKey, limiter.timeRange * 1000).then(lock => ({
          saveKey,
          lock,
          limiter,
        }));
      })
    );

    let maxTimeout: number | undefined;
    const startNow = Date.now();
    const unLockKey: string[] = [];
    for (let i = 0, j = result.length; i < j; i++) {
      const { lock, limiter, saveKey } = result[i];
      if (lock.triggerTotal > limiter.times) {
        maxTimeout = Math.max(maxTimeout || 0, lock.timeout);
      } else {
        // 已经超出计数的，没有必要再清理
        // 直接等待超时清理即可
        unLockKey.push(saveKey);
      }
    }

    if (typeof maxTimeout !== 'undefined') {
      if (unLockKey.length) {
        await Promise.all(map(unLockKey, lock => this.adapter.unLock(lock)));
      }
      const now = Date.now();
      const waitingTime = now - startAt;

      const realTimeout = Math.min(maxTimeout - (now - startNow), this.options.timeout - waitingTime);
      if (realTimeout > 0) {
        await sleep(realTimeout);
      }
      return this.checkApiThrottle(api, ak, startAt);
    }

    const waitingTime = Date.now() - startAt;
    if (waitingTime > this.options.timeout) {
      throw new PddRequestWaitingTimeoutException(api, waitingTime);
    }

    // 立即执行
    return null;
  }

  /**
   * 获取生成的key
   * @param api
   * @param level
   * @param ak
   * @protected
   */
  protected getSaveKey(api: string, level: PddApiLimiterLevel, ak?: string): string {
    const prefix = this.options.keyPrefix || 'pdd:api:limiter';
    switch (level) {
      case PddApiLimiterLevel.API: {
        return `${prefix}:${api}:limit:total`;
      }
      case PddApiLimiterLevel.APP: {
        return `${prefix}:app:limit:total`;
      }
      case PddApiLimiterLevel.SHOP: {
        return `${prefix}:shop:${ak}:limit:total`;
      }
    }
  }
}
