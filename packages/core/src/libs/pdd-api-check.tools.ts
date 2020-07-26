import { PddNeedAccessTokenTypeCollections, PddApiLimiterMapping } from '@pin-duo-duo/pdd-origin-api';
import { memoize, keyBy } from 'lodash';

/**
 * 检测当前type请求时，是否需要获取对应的access_token的内容
 * @param type
 */
export function checkTypeIsNeedAccessToken(type: string): boolean {
  return PddNeedAccessTokenTypeCollections.includes(type);
}

/**
 * 获取当前接口是否有限流信息
 * @param type {string}
 */
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
type PddApiLimiterMappingKeys = keyof typeof PddApiLimiterMapping;
export const getTypeApiLimiter = memoize(function apiLimiter(
  type: string
): void | { [s: string]: PddApiLimiterInterface | undefined } {
  const limiter = PddApiLimiterMapping[type as PddApiLimiterMappingKeys];
  if (limiter) {
    return keyBy(limiter, 'limiterLevel');
  }
  return undefined;
});
