import { ILock, PddApiThrottleAdapter } from '@pin-duo-duo/core';
import { RedisClient } from 'redis';
import { promisify } from 'util';

export class PddRedisThrottleAdapter extends PddApiThrottleAdapter {
  constructor(protected redis: RedisClient) {
    super();
  }

  private async callRedisMethod<T extends keyof RedisClient>(method: T, ...args: any[]) {
    return promisify(this.redis[method] as any).apply(this.redis, args);
  }

  /**
   * 创建锁
   * @param key
   * @param ttl
   */
  public async lock(key: string, ttl?: number): Promise<ILock> {
    const result = await this.callRedisMethod('incr', key);
    const resultNum = typeof result === 'string' ? parseInt(result, 10) : result;
    let timeout = ttl;
    if (resultNum === 1 && typeof ttl === 'number') {
      await this.callRedisMethod('expire', key, ttl);
    } else {
      timeout = await this.callRedisMethod('pttl', key);
    }
    return {
      triggerTotal: resultNum,
      timeout: timeout as number,
    };
  }

  /**
   * 释放锁（乐观锁）
   * @param key
   */
  public async unLock(key: string): Promise<boolean> {
    const result = await this.callRedisMethod('decr', key);
    if (result < 0) {
      await this.callRedisMethod('set', key, 0);
    }
    return true;
  }
}
