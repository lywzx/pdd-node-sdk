/**
 * 况状生成锁
 */
export interface PddApiClientAccessAuthLock {
  /**
   * 生成锁
   * @param lock
   * @param expired 默认过期时间，默认会传入10s即10000
   */
  lock(lock: string, expired: number): Promise<boolean>;

  /**
   * 解除锁
   * @param lock
   */
  unLock(lock: string): Promise<boolean>;
}
