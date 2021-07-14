/**
 * 隐私号正则表达式
 */
const virtualReg = /\$(1[0-9]{10})\$#([0-9]{4})#|\$(95[0-9]{5})\$#([0-9]{8})#/; // 通过API返回格式
const virtualReg2 = /(1[0-9]{10})#([0-9]{4})#|(95[0-9]{5})#([0-9]{8})#/; // 通过OPLB返回格式

/**
 * 判断当前号码是否为隐私号
 * @param numberStr
 */
export function isVirtualNumber(numberStr: string | number): boolean {
  const nStr = numberStr.toString();
  return virtualReg.test(nStr) || virtualReg2.test(nStr);
}

/**
 * 获取隐私号
 * @param numberStr
 */
export function getVirtualNumber(numberStr: string | number): string | undefined {
  const nStr = numberStr.toString();
  const matched = nStr.match(virtualReg) || nStr.match(virtualReg2);
  if (matched) {
    return matched[1] || matched[3];
  }
}

/**
 * 获取分机号
 * @param numberStr
 */
export function getExtNumber(numberStr: string | number): string | undefined {
  const nStr = numberStr.toString();
  const matched = nStr.match(virtualReg) || nStr.match(virtualReg2);
  if (matched) {
    return matched[2] || matched[4];
  }
}
