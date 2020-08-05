/**
 * 拼多多限拼处理类
 */
export abstract class PddApiThrottleAdapter {
  /**
   * 设置某个值
   * @param key
   * @param value
   * @param ttl
   */
  public abstract set(key: string, value: any, ttl?: number): Promise<boolean>;

  /**
   * 从缓存中读取某个值
   * @param key
   */
  public abstract get<T>(key: string): Promise<T | undefined>;
}
