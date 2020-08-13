import { ILock } from '../interfaces';

/**
 * 拼多多限拼处理类
 */
export abstract class PddApiThrottleAdapter {
  /**
   * 生成一个锁，默认会自增一位数
   * @param key 生成的key
   * @param ttl 毫秒为单位
   */
  public abstract lock(key: string, ttl?: number): Promise<ILock>;

  /**
   * 如果锁并未触发逻辑，则此时需要释放锁资源，减少数字
   * @param key
   */
  public abstract unLock(key: string): Promise<boolean>;
}
