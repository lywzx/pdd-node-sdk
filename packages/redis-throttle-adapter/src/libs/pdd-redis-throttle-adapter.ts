import { PddApiThrottleAdapter } from '@pin-duo-duo/core';
import { Callback, RedisClient } from 'redis';

export class PddRedisThrottleAdapter extends PddApiThrottleAdapter {
  constructor(protected redis: RedisClient) {
    super();
  }

  /**
   * 设置某个key值
   * @param key
   * @param value
   * @param ttl
   */
  public set(key: string, value: string, ttl?: number | undefined): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const callback: Callback<'OK' | undefined> = (err, reply) => {
        if (err) {
          reject(err);
        } else {
          resolve(reply === 'OK');
        }
      };
      if (typeof ttl === 'number') {
        this.redis.set(key, value, 'px', ttl, 'nx', callback);
      } else {
        this.redis.set(key, value, 'nx', callback);
      }
    });
  }

  /**
   * 读取某个key存的值
   * @param key
   */
  public get(key: string): Promise<string | null> {
    return new Promise<string | null>((resolve, reject) => {
      this.redis.get(key, (err, reply) => {
        if (err) {
          reject(err);
        } else {
          resolve(reply);
        }
      });
    });
  }

  /**
   * 删除某个key
   * @param key
   */
  public delete(key: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.redis.del(key, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(!!result);
        }
      });
    });
  }
}
