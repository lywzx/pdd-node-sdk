export * from './date';
export * from './promise-util';
export * from './validate';
import CryptoJS from 'crypto-js';

/**
 * MD5加密字符
 * @param str
 */
export function md5(str: string) {
  return CryptoJS.MD5(str).toString(CryptoJS.enc.Hex);
}
