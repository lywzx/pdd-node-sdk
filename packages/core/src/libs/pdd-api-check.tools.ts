import { PddNeedAccessTokenTypeCollections, PddApiLimiterMapping } from '@pin-duo-duo/pdd-origin-api';
import { PddApiLimiterInterface } from '../interfaces';

/**
 * 检测当前type请求时，是否需要获取对应的access_token的内容
 * @param type
 */
export function checkTypeIsNeedAccessToken(type: string): boolean {
  return PddNeedAccessTokenTypeCollections.includes(type);
}

type PddApiLimiterMappingKeys = keyof typeof PddApiLimiterMapping;
/**
 * 获取当前接口是否有限流信息
 * @param api
 */
export function getTypeApiLimiter(api: string): PddApiLimiterInterface[] | void {
  return PddApiLimiterMapping[api as PddApiLimiterMappingKeys];
}
