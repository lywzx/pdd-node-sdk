export interface PddApiLimiterInterface {
  /**
   * 限频率的level
   * 1: 商家限流
   * 3: 接口总限流频次
   * 4: 应用限流频次
   */
  limiterLevel: number;
  /**
   * 时长限制
   */
  timeRange: number;
  /**
   * 调用次数
   */
  times: number;
}
