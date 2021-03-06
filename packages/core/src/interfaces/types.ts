import {
  PddCommonRequestInterface,
  PddPopAuthTokenCreatePopAuthTokenCreateResponseResponseInterface,
  PddPopAuthTokenRefreshPopAuthTokenRefreshResponseResponseInterface,
} from '@pin-duo-duo/pdd-origin-api';
import { AxiosRequestConfig } from 'axios';
import { PddApiCacheInterface } from './pdd-api-cache.interface';
import { RetryOptionsInterface } from './retry-options.interface';

/**
 * 拼多多API请求的部分数据
 */
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

// 重试机制与null合并，如果为null，则表示临时关闭重试
export type RetryOptionsType = (RetryOptionsInterface & PddAxiosClientOptions) | number | null;

/**
 * 拼多多默认缓存配置
 */
export type PddDefaultCacheOptionsType = {
  ttl: number;
  alwaysWork: boolean;
};

/**
 * 拼多多认证响应的数据
 */
export type PddAccessTokenResponseInterface =
  | PddPopAuthTokenCreatePopAuthTokenCreateResponseResponseInterface
  | PddPopAuthTokenRefreshPopAuthTokenRefreshResponseResponseInterface;
