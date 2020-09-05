import { ModuleMetadata, Provider, Type } from '@nestjs/common';
import { PddClientOptionsInterface, PddApiCacheAbstract, PddClientAccessAuth, PddApiThrottle } from '@pin-duo-duo/core';

/**
 * 拼多多后台客户端配置
 */
export interface NestJsPddClientOptions<T = any> extends PddClientOptionsInterface {
  /**
   * 拼多多默认认证类信息
   */
  clientAccessAuth?: PddClientAccessAuth<T>;

  // 默认限频率配置
  apiThrottle?: PddApiThrottle;

  /**
   * 拼多多模块缓存功能
   */
  apiCached?: PddApiCacheAbstract;
}

/**
 * 当前模块配置信息
 */
export type NestJsPddModuleOptions = NestJsPddModuleAsyncOptionsInterface | NestJsPddClientOptions;

export interface NestJsPddModuleAsyncOptionsInterface {
  // 默认的channel的频道
  defaultChannel: string;

  // 处理PddClient的内容
  [s: string]: NestJsPddClientOptions | string;
}

export interface NestJsPddModuleOptionsInterface extends Pick<ModuleMetadata, 'imports'> {
  /**
   * Injection token resolving to an existing provider. The provider must implement
   * the `PddOptionsFactoryInterface` interface.
   */
  useExisting?: Type<PddOptionsFactoryInterface>;
  /**
   * Injection token resolving to a class that will be instantiated as a provider.
   * The class must implement the `PddOptionsFactoryInterface` interface.
   */
  useClass?: Type<PddOptionsFactoryInterface>;
  /**
   * Function returning options (or a Promise resolving to options) to configure the
   * cache module.
   */
  useFactory?: (...args: any[]) => Promise<NestJsPddModuleOptions> | NestJsPddModuleOptions;
  /**
   * Dependencies that a Factory may inject.
   */
  inject?: any[];
  extraProviders?: Provider[];
}

export interface PddOptionsFactoryInterface {
  createPddOptions(): Promise<NestJsPddModuleOptions> | NestJsPddModuleOptions;
}
