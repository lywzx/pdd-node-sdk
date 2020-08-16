import { PddCommonRequestInterface } from '@pin-duo-duo/pdd-origin-api';
import { AxiosRequestConfig } from 'axios';
import { PddApiCacheInterface } from './pdd-api-cache.interface';
import { RetryOptionsInterface } from './retry-options.interface';

export type RequestParamsType = Partial<Omit<PddCommonRequestInterface, 'sign' | 'timestamp' | 'client_id'>> & {
  [s: string]: any;
};
export type RequestParamsFullType = PddCommonRequestInterface & { [s: string]: any };
export type DefaultRequestType = Pick<PddCommonRequestInterface, 'data_type' | 'version'>;
/**
 * pdd 缓存
 */
export type PddCacheOptions = PddApiCacheInterface | number | boolean;
/**
 * 接口调用时，默认的timeout
 */
export type PddAxiosClientOptions = Pick<AxiosRequestConfig, 'timeout' | 'proxy'>;

// 限制拼多多接口的响应等待时间
export type RetryOptionsType = (RetryOptionsInterface & PddAxiosClientOptions) | number;

/**
 * 拼多多默认缓存配置
 */
export type PddDefaultCacheOptionsType = {
  ttl: number;
  alwaysWork: boolean;
};
