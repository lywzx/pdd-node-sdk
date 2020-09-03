import {
  AsyncResultCallbackInterface,
  PddAxiosClientOptions,
  PddCacheOptions,
  RetryOptionsInterface,
  RetryOptionsType,
} from '../interfaces';
import { PddApiCacheInterface } from '../interfaces/pdd-api-cache.interface';
import { defaultRetryOptions } from '../libs';
import extend from 'lodash/extend';
import pick from 'lodash/pick';
import omit from 'lodash/omit';
import isString from 'lodash/isString';

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

/**
 * 构建重试的参数
 * @param retryOptions
 * @param callback
 */
export function guessPddClientRequestWithRetryParams(
  retryOptions?: RetryOptionsType | AsyncResultCallbackInterface<any, never>,
  callback?: AsyncResultCallbackInterface<any, never>
): [
  RetryOptionsInterface | undefined,
  PddAxiosClientOptions | undefined,
  AsyncResultCallbackInterface<any, never> | undefined
] {
  let tryOptions: RetryOptionsInterface | undefined;
  let axiosClientOptions: PddAxiosClientOptions | undefined;
  let cbk: AsyncResultCallbackInterface<any, never> | undefined = callback;
  if (typeof retryOptions === 'function') {
    tryOptions = defaultRetryOptions;
    cbk = (retryOptions as any) as AsyncResultCallbackInterface<any, never>;
  } else if (typeof retryOptions === 'undefined') {
    tryOptions = defaultRetryOptions;
  } else if (typeof retryOptions === 'number') {
    tryOptions = extend({}, defaultRetryOptions, { times: retryOptions });
  } else if (typeof retryOptions === 'object') {
    tryOptions = extend({}, defaultRetryOptions, omit(retryOptions, ['timeout', 'proxy']));
    if (retryOptions.timeout || retryOptions.proxy) {
      axiosClientOptions = pick(retryOptions, ['timeout', 'proxy']);
    }
  }
  return [tryOptions, axiosClientOptions, cbk];
}

/**
 * 根据传入的参数，自动组装出缓存的参数信息
 * @param cacheOptions 默认配置信息
 * @param defaultTtl 默认的过期时间
 * @param cachedKey 动态构建缓存key信息
 */
export function guessPddClientCachedParams(
  cacheOptions: PddCacheOptions | number | boolean | undefined,
  defaultTtl: number,
  cachedKey: () => string | undefined
): [string | undefined, number] {
  let ttl = defaultTtl;
  let realCachedKey: string | undefined;

  if (typeof cacheOptions === 'number') {
    ttl = cacheOptions;
  } else if (typeof cacheOptions === 'object') {
    if (typeof cacheOptions.ttl === 'number') {
      ttl = cacheOptions.ttl;
    }
    if (cacheOptions.cacheKey && isString(cacheOptions.cacheKey)) {
      realCachedKey = cacheOptions.cacheKey;
    }
  }
  if (!realCachedKey) {
    realCachedKey = cachedKey();
  }

  return [realCachedKey, ttl];
}
