export * from './date';
export * from './promise-util';
export * from './validate';
export * from './md5-base64';
import {
  PddCollectRootResponseInterface,
  PddCollectShortResponseInterface,
  PddResponseTypeAndRequestTypeMapping,
} from '@pin-duo-duo/pdd-origin-api';
import isNumber from 'lodash/isNumber';
import isFinite from 'lodash/isFinite';

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

/**
 * 判断是否能转成数字
 * @param num
 */
export function isNumeric(num: number | string = ''): boolean {
  if (isNumber(num)) {
    return true;
  }
  return !isNaN(parseFloat(num.toString())) && isFinite(num);
}
