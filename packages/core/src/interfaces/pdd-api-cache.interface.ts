export interface PddApiCacheInterface {
  /**
   * 默认缓存时间
   */
  ttl?: number;

  /**
   * 缓存的key内容
   */
  cacheKey?: string | ((obj: any) => string);
}
