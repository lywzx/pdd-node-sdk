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
  public abstract set(key: string, value: string, ttl?: number): Promise<boolean>;

  /**
   * 从缓存中读取某个值
   * @param key
   */
  public abstract get(key: string): Promise<string | null>;

  /**
   * 删除某
   * @param key
   */
  public abstract delete(key: string): Promise<boolean>;
}
