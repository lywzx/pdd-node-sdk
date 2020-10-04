export * from './date';
export * from './promise-util';
export * from './validate';
import {
  PddCollectRootResponseInterface,
  PddCollectShortResponseInterface,
  PddResponseTypeAndRequestTypeMapping,
} from '@pin-duo-duo/pdd-origin-api';
import CryptoJS from 'crypto-js';

/**
 * MD5加密字符
 * @param str
 */
export function md5(str: string) {
  return CryptoJS.MD5(str).toString(CryptoJS.enc.Hex);
}

/**
 * 根据响应的内容，获取响应最终数据
 * @param response
 * @param type
 */
export function getShortResponse<K extends keyof PddCollectRootResponseInterface>(
  response: PddCollectRootResponseInterface[K],
  type: K
): PddCollectShortResponseInterface[K] {
  if (type in PddResponseTypeAndRequestTypeMapping) {
    const responseKey = (PddResponseTypeAndRequestTypeMapping as any)[type];
    return (response as any)[responseKey] as PddCollectShortResponseInterface[K];
  }
  return (response as any) as PddCollectShortResponseInterface[K];
}
