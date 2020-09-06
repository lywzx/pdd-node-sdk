/**
 * 当前是否为开发模式
 */
export function isDevModel(): boolean {
  return process.env.NODE_ENV === 'development';
}
