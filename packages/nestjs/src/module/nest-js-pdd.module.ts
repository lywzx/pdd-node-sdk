import { DynamicModule, Module, Provider } from '@nestjs/common';
import { PddClient } from '@pin-duo-duo/core';
import { NEST_PDD_MODULE_OPTIONS } from '../constant';
import {
  NestJsPddClientOptions,
  NestJsPddModuleAsyncOptionsInterface,
  NestJsPddModuleOptions,
  NestJsPddModuleOptionsInterface,
  PddOptionsFactoryInterface,
} from '../interfaces';
import { PddClientService } from '../services/pdd-client/pdd-client.service';
import { generateClientByClientOptions, transformOptionsToMultiple } from '../util/providers';

const DefaultProvider: Provider = {
  provide: PddClient,
  useFactory: (options: NestJsPddModuleAsyncOptionsInterface) => {
    const defaultChannel = options.defaultChannel;
    const clientOption = options[defaultChannel] as NestJsPddClientOptions;
    return generateClientByClientOptions(clientOption);
  },
  inject: [NEST_PDD_MODULE_OPTIONS],
};

@Module({
  providers: [PddClientService],
  exports: [PddClientService],
})
export class NestJsPddModule {
  static register(options: NestJsPddModuleOptions): DynamicModule {
    const newOptions = transformOptionsToMultiple(options);
    return {
      module: this,
      providers: [
        {
          provide: NEST_PDD_MODULE_OPTIONS,
          useValue: newOptions,
        },
        DefaultProvider,
      ],
      exports: [DefaultProvider],
    };
  }

  /**
   * Configure the pdd client dynamically.
   *
   * @param options method for dynamically supplying cache manager configuration
   * options
   *
   * @see [Async configuration](https://docs.nestjs.com/techniques/caching#async-configuration)
   */
  static registerAsync(options: NestJsPddModuleOptionsInterface): DynamicModule {
    return {
      module: this,
      imports: options.imports,
      providers: [...this.createAsyncProviders(options), ...(options.extraProviders || []), DefaultProvider],
      exports: [DefaultProvider],
    };
  }

  public static createAsyncProviders(options: NestJsPddModuleOptionsInterface): Provider[] {
    const result: Provider[] = [DefaultProvider];
    const asyncOptionsProvider = this.createAsyncOptionsProvider(options);
    if (asyncOptionsProvider) {
      result.push(asyncOptionsProvider);
    }

    if (options.useClass) {
      result.push({
        provide: options.useClass,
        useClass: options.useClass,
      });
    }
    return result;
  }

  public static createAsyncOptionsProvider(options: NestJsPddModuleOptionsInterface): Provider | void {
    if (options.useFactory) {
      return {
        provide: NEST_PDD_MODULE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }
    if (options.useClass || options.useClass) {
      return {
        provide: NEST_PDD_MODULE_OPTIONS,
        useFactory: async (optionsFactory: PddOptionsFactoryInterface) => optionsFactory.createPddOptions(),
        inject: [options.useExisting || options.useClass],
      };
    }
  }
}
