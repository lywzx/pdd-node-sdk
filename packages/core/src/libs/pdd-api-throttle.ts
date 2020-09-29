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
   * @param clientId 应用ID
   * @param mallId 店铺ID
   * @param startAt 开始时间
   */
  public async checkApiThrottle(
    api: string,
    clientId: string,
    mallId = '',
    startAt: number = Date.now()
  ): Promise<null> {
    const apiRateLimit = getTypeApiLimiter(api);
    if (!apiRateLimit) {
      return null;
    }
    const result = await Promise.all(
      map(apiRateLimit, limiter => {
        const saveKey = this.getSaveKey(api, limiter.limiterLevel, clientId, mallId);
        return this.adapter.lock(saveKey, limiter.timeRange * 1000).then(lock => ({
          saveKey,
          lock,
          limiter,
        }));
      })
    );

    const startNow = Date.now();
    let maxTimeout: number | undefined;
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

    const willWait = typeof maxTimeout === 'number' && maxTimeout >= 0;
    if (willWait && unLockKey.length) {
      await Promise.all(map(unLockKey, lock => this.adapter.unLock(lock)));
    }

    const waitingTime = Date.now() - startAt + (maxTimeout || 0);
    if (willWait && waitingTime >= this.options.timeout) {
      throw new PddRequestWaitingTimeoutException(api, waitingTime);
    }

    if (willWait) {
      const now = Date.now();
      const realWaitTimeout = Math.min(
        (maxTimeout as number) - (now - startNow),
        this.options.timeout - (now - startAt)
      );
      if (realWaitTimeout >= 0) {
        // 时间绝对相等时，可能会多一次无效的重试，暂时默认再加1ms
        await sleep(realWaitTimeout + 1);
      }
      return this.checkApiThrottle(api, clientId, mallId, startAt);
    }

    // 立即执行
    return null;
  }

  /**
   * 获取生成的key
   * @param api api名称
   * @param level 限流类型
   * @param clientId 应用ID
   * @param mallId 店铺ID
   * @protected
   */
  protected getSaveKey(api: string, level: PddApiLimiterLevel, clientId: string, mallId = ''): string {
    const prefix = this.options.keyPrefix || 'pdd:api:limiter';
    switch (level) {
      case PddApiLimiterLevel.API: {
        return `${prefix}:${api}:limit:total`;
      }
      case PddApiLimiterLevel.APP: {
        return `${prefix}:${api}:${clientId}:limit:total`;
      }
      case PddApiLimiterLevel.SHOP: {
        return `${prefix}:${api}:shop:${mallId}:limit:total`;
      }
    }
  }
}
