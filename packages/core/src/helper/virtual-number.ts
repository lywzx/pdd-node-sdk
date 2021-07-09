/**
 * 隐私号正则表达式
 */
const virtualReg = /\$(1[0-9]{10})\$#([0-9]{4})#|\$(95[0-9]{5})\$#([0-9]{8})#/;

/**
 * 判断当前号码是否为隐私号
 * @param numberStr
 */
export function isVirtualNumber(numberStr: string | number): boolean {
  return virtualReg.test(numberStr.toString());
}

/**
 * 获取隐私号
 * @param numberStr
 */
export function getVirtualNumber(numberStr: string | number): string | undefined {
  const matched = numberStr.toString().match(virtualReg);
  if (matched) {
    return matched[1] || matched[3];
  }
}

/**
 * 获取分机号
 * @param numberStr
 */
export function getExtNumber(numberStr: string | number): string | undefined {
  const matched = numberStr.toString().match(virtualReg);
  if (matched) {
    return matched[2] || matched[4];
  }
}
