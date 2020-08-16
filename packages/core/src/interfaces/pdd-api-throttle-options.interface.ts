/**
 * api throttle 默认等待时间
 */
export interface PddApiThrottleOptionsInterface {
  /**
   * 默认等待时长，以毫秒为单位
   */
  timeout: number;

  /**
   * key当中的前缀
   */
  keyPrefix?: string;
}
