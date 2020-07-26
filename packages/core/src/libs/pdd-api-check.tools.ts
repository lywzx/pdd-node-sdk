import { PddNeedAccessTokenTypeCollections, PddApiLimiterMapping } from '@pin-duo-duo/pdd-origin-api';
import { memoize, keyBy } from 'lodash';
import { PddApiLimiterInterface } from '../interfaces';

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
