/**
 * api throttle 默认等待时间
 */
export interface PddApiThrottleOptionsInterface {
  /**
   * 默认等待时长
   */
  timeout: number;

  /**
   * key当中的前缀
   */
  keyPrefix?: string;
}
