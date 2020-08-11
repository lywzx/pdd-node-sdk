import { PddApiThrottleAdapter } from '@pin-duo-duo/core';
import { RedisClient } from 'redis';
import { promisify } from 'util';

export class PddRedisThrottleAdapter extends PddApiThrottleAdapter {
  constructor(protected redis: RedisClient) {
    super();
  }

  public async set(key: string, value: any, ttl?: number | undefined): Promise<boolean> {
    try {
      if (typeof ttl === 'number') {
        await promisify(this.redis.setex).call(this.redis, key, ttl as number, value);
      } else {
        await promisify(this.redis.set).call(this.redis, key, value);
      }
      return true;
    } catch (e) {
      return false;
    }
  }
  get<T>(key: string): Promise<T | undefined> {
    throw new Error('Method not implemented.');
  }
}
