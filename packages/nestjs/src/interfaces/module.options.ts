import { ModuleMetadata, Provider, Type } from '@nestjs/common';
import { PddClientOptionsInterface } from '@pin-duo-duo/core';

export type NestJsPddModuleOptions = NestJsPddModuleAsyncOptionsInterface | PddClientOptionsInterface;

export type NestJsPddModuleAsyncOptions = NestJsPddModuleOptionsInterface;

export interface NestJsPddModuleAsyncOptionsInterface {
  // 默认的channel的频道
  defaultChannel: string;

  // 处理PddClient的内容
  [s: string]: PddClientOptionsInterface | string;
}

export interface NestJsPddModuleOptionsInterface extends Pick<ModuleMetadata, 'imports'> {
  /**
   * Injection token resolving to an existing provider. The provider must implement
   * the `CacheOptionsFactory` interface.
   */
  useExisting?: Type<PddOptionsFactoryInterface>;
  /**
   * Injection token resolving to a class that will be instantiated as a provider.
   * The class must implement the `CacheOptionsFactory` interface.
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
