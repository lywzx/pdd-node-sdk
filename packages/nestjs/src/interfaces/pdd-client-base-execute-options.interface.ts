import { RetryOptionsInterface } from '@pin-duo-duo/core';

type RetryOptionsType = (RetryOptionsInterface & { timeout?: number }) | number;

export interface PddClientBaseExecuteOptionsInterface {
  /**
   * 重试机制的配置信息
   */
  retryOptions?: RetryOptionsType;

  /**
   * 客户端缓存配置
   */
  cacheOptions?: PddClientBaseExecuteCacheOptionsInterface | number | boolean;
}

export interface PddClientBaseExecuteCacheOptionsInterface {
  // 生成缓存的key
  cacheKey: string | ((obj: any) => string);

  // 缓存的过期时间
  // 默认为24 * 60 * 60
  ttl?: number;
}
