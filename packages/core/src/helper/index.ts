import { isNumeric } from '../util';
import isString from 'lodash/isString';

const sepPhone = '$';
const sepId = '#';
/**
 * 判断后当前字符是否为加密字符
 *
 * @param data
 */
export function isEncryptData(data?: string): boolean {
  const base64Regexp = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;

  if (!data || data.length <= 4) {
    return false;
  }

  if (data.charAt(0) != data.charAt(data.length - 1)) {
    return false;
  }

  const separator = data.charAt(0);
  const dataSplitArr = data.split(separator).filter((it): it is string => !!it);
  if (dataSplitArr.length < 2 || !isNumeric(dataSplitArr[dataSplitArr.length - 1])) {
    return false;
  }
  if (separator === sepPhone || separator === sepId) {
    if (dataSplitArr.length != 3) {
      return false;
    }
    if (data.charAt(data.length - 2) === separator) {
      return base64Regexp.test(dataSplitArr[0]) && base64Regexp.test(dataSplitArr[1]);
    } else {
      return base64Regexp.test(dataSplitArr[1]);
    }
  }
  if (data.charAt(data.length - 2) === separator) {
    if (dataSplitArr.length === 3) {
      return base64Regexp.test(dataSplitArr[0]) && base64Regexp.test(dataSplitArr[1]);
    }
  } else {
    if (dataSplitArr.length === 2) {
      return base64Regexp.test(dataSplitArr[0]);
    }
  }

  return false;
}

/**
 * 数据检索存储方案
 *
 * 完整加密串和检索串要分离，可从完整字符串中提取检索串。
 * https://open.pinduoduo.com/application/document/browse?idStr=3407B605226E77F2
 * 完整加密串和检索串分别存储数据表两个字段。因为加密后的数据长度会扩大 10-20 倍，应该减少索引字段的长度，提高检索效率低。加密原串用于开展业务，检索串用于数据查询使用。
 *
 * @param encryptedData
 */
export function extractIndex(encryptedData?: string): string | null {
  const length = encryptedData?.length;
  if (!isString(encryptedData) || length! < 4) {
    return null;
  }
  const sepInData = encryptedData.charAt(0);
  if (encryptedData.charAt(length! - 2) != sepInData) {
    return null;
  }
  const parts: string[] = encryptedData.split(sepInData).filter((it): it is string => !!it);
  if (sepInData == sepPhone || sepInData == sepId) {
    return parts[0];
  } else {
    return parts[1];
  }
}
