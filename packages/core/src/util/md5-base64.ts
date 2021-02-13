import CryptoJS from 'crypto-js';

/**
 * MD5加密字符
 * @param str
 */
export function md5(str: string) {
  return CryptoJS.MD5(str).toString(CryptoJS.enc.Hex);
}

/**
 * string to md5 and base64 encode
 * @param plainText
 */
export function md5Base64(plainText: string) {
  return new Buffer(md5(plainText)).toString('base64');
}
