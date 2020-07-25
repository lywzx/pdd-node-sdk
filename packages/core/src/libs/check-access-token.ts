import { PddNeedAccessTokenTypeCollections } from '@pin-duo-duo/pdd-origin-api';

/**
 * 检测当前type请求时，是否需要获取对应的access_token的内容
 * @param type
 */

export function checkTypeIsNeedAccessToken(type: string): boolean {
  return PddNeedAccessTokenTypeCollections.includes(type);
}
