import memoize from 'lodash/memoize';

/**
 * 当前是否为开发模式
 */
export const isDevModel: () => boolean = memoize(function isDevModel(): boolean {
  return process.env.NODE_ENV === 'development' || enableDev;
});

/**
 * 开启或关闭当前dev模式
 */
let enableDev = false;
export function toggleDev(enable = false) {
  enableDev = enable;
}
