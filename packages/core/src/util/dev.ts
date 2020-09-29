import memoize from 'lodash/memoize';

/**
 * 当前是否为开发模式
 */
export const isDevModel = memoize(function isDevModel(): boolean {
  return process.env.NODE_ENV === 'development';
});
