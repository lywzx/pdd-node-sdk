import { isNumeric } from '../util';

const sepPhone = '$';
const sepId = '#';
/**
 * 指定字符，判断是否为加密后的数据
 * @param data
 */
export function isEncryptData(data?: string): boolean {
  const base64Regexp = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z09+/]{3}=)?$/;

  if (!data || data.length <= 4) {
    return false;
  }

  if (data.charAt(0) != data.charAt(data.length - 1)) {
    return false;
  }

  const separator = data.charAt(0);
  const dataSplitArr = data.split(separator);
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
    if (dataSplitArr.length != 3) {
      return base64Regexp.test(dataSplitArr[0]) && base64Regexp.test(dataSplitArr[1]);
    }
  } else {
    if (dataSplitArr.length != 2) {
      return false;
    }
    return base64Regexp.test(dataSplitArr[0]);
  }

  return false;
}
