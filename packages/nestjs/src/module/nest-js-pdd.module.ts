import { DynamicModule, Module, Provider } from '@nestjs/common';
import { DiscoveryModule } from '@nestjs/core';
import { PddClient } from '@pin-duo-duo/core';
import {
  NEST_PDD_MODULE_OPTIONS,
  NEST_PDD_MODULE_PDD_CLIENTS_ALL,
  NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT,
} from '../constant';
import {
  NestJsPddClientOptions,
  NestJsPddModuleAsyncOptionsInterface,
  NestJsPddModuleOptions,
  NestJsPddModuleOptionsInterface,
  PddOptionsFactoryInterface,
} from '../interfaces';
import { PddClientService } from '../services/pdd-client/pdd-client.service';
import { PddExplorerService } from '../services/pdd-explorer/pdd-explorer.service';
import { generateClientByClientOptions, transformOptionsToMultiple } from '../util/providers';
import { NestJsPddPlaceholderModule } from './nest-js-pdd-placeholder.module';

const DefaultProvider: Provider[] = [
  {
    provide: PddClient,
    useFactory: (options: NestJsPddModuleAsyncOptionsInterface, pddExplorer: PddExplorerService) => {
      const defaultChannel = options.defaultChannel;
      const clientOption = options[defaultChannel] as NestJsPddClientOptions;
      const client = generateClientByClientOptions(clientOption);
      pddExplorer.lookupListeners(client, NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT);
      return client;
    },
    inject: [NEST_PDD_MODULE_OPTIONS, PddExplorerService],
  },
  {
    provide: NEST_PDD_MODULE_PDD_CLIENTS_ALL,
    useFactory(pddClientService: PddClientService) {
      return pddClientService.get();
    },
    inject: [PddClientService],
  },
  {
    provide: NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT,
    useExisting: PddClient,
  },
];

@Module({
  providers: [PddClientService],
  exports: [PddClientService],
})
export class NestJsPddModule {
  static register(options: NestJsPddModuleOptions): DynamicModule {
    const newOptions = transformOptionsToMultiple(options);
    return {
      module: this,
      imports: [NestJsPddModule.registryCore()],
      providers: [
        {
          provide: NEST_PDD_MODULE_OPTIONS,
          useValue: newOptions,
        },
        ...DefaultProvider,
      ],
      exports: [...DefaultProvider],
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
      imports: [...(options.imports || []), NestJsPddModule.registryCore()],
      providers: [...this.createAsyncProviders(options), ...(options.extraProviders || [])],
      exports: [...DefaultProvider],
    };
  }

  protected static createAsyncProviders(options: NestJsPddModuleOptionsInterface): Provider[] {
    const result: Provider[] = [...DefaultProvider];
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

  protected static createAsyncOptionsProvider(options: NestJsPddModuleOptionsInterface): Provider | void {
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

  private static registryCore() {
    return {
      global: true,
      module: NestJsPddPlaceholderModule,
      imports: [DiscoveryModule],
      providers: [PddExplorerService],
      exports: [PddExplorerService],
    };
  }
}
