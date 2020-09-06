export interface ILock {
  /**
   * 触发次数
   */
  triggerTotal: number;
  /**
   * 过期时间
   */
  timeout: number;
}
