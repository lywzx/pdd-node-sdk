import {
  AsyncResultCallbackInterface,
  PddAxiosClientOptions,
  PddCacheOptions,
  RetryOptionsInterface,
  RetryOptionsType,
} from '../interfaces';
import { PddApiCacheInterface } from '../interfaces/pdd-api-cache.interface';

const retryOptionKeys: Array<keyof (RetryOptionsInterface & PddAxiosClientOptions)> = [
  'timeout',
  'times',
  'interval',
  'errorFilter',
];
/**
 * 判断当前值是否为一个retry options
 * @param value
 */
export function isRetryOptionConfig(value: any): value is RetryOptionsType {
  return typeof value === 'number' || (value && retryOptionKeys.some(key => key in value));
}

const cacheKeys: Array<keyof PddApiCacheInterface> = ['ttl', 'cacheKey'];
/**
 * 判断当前变量是否是一个缓存配置
 * @param value
 */
export function isCacheOptionConfig(value: any): value is PddCacheOptions {
  return typeof value === 'boolean' || typeof value === 'number' || (value && cacheKeys.some(key => key in value));
}

/**
 * 构建拼多多execute函数的参数信息
 */
export function guessPddClientExecuteParams<T>(
  args: any[]
): [
  T | undefined,
  RetryOptionsType | undefined,
  PddCacheOptions | undefined,
  AsyncResultCallbackInterface<any, never> | undefined
] {
  const result: [any, any, any, any] = [undefined, undefined, undefined, undefined];

  for (let i = 0, j = args.length; i < j; i++) {
    const current = args[i];
    const currentType = typeof current;

    if (currentType === 'function') {
      result[3] = current;
      break;
    }

    if (typeof result[1] === 'undefined' && i < 1 && isRetryOptionConfig(current)) {
      result[1] = current;
      continue;
    }

    if (typeof result[2] === 'undefined' && i < 2 && isCacheOptionConfig(current)) {
      result[2] = current;
      continue;
    }

    if (typeof result[0] === 'undefined' && i === 0) {
      result[0] = current;
    }
  }

  return result;
}
