import { Provider } from '@nestjs/common';
import { PddClient, PddClientOptionsInterface } from '@pin-duo-duo/core';
import { NEST_PDD_MODULE_OPTIONS, NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT } from '../constant';
import { NestJsPddClientOptions, NestJsPddModuleAsyncOptionsInterface, NestJsPddModuleOptions } from '../interfaces';
import omit from 'lodash/omit';
import map from 'lodash/map';
import flatten from 'lodash/flatten';

/**
 * 是否单模块配置
 * @param options
 */
function isSingleModel(options: NestJsPddModuleOptions): options is PddClientOptionsInterface {
  return (
    'clientId' in options &&
    'clientSecret' in options &&
    typeof options.clientId === 'string' &&
    typeof options.clientSecret === 'string'
  );
}

/**
 * 转换传入的参数
 * @param options
 */
export function transformOptionsToMultiple(options: NestJsPddModuleOptions): NestJsPddModuleAsyncOptionsInterface {
  if (isSingleModel(options)) {
    return {
      defaultChannel: NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT,
      [NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT]: options,
    };
  }
  return options;
}

/**
 * 生成client信息
 * @param clientOption
 */
export function generateClientByClientOptions(clientOption: NestJsPddClientOptions) {
  return new PddClient(clientOption, clientOption.clientAccessAuth, clientOption.apiCached, clientOption.apiThrottle);
}

/**
 * 生成多个providers
 * @param options
 */
export function generateOptionsProviders(options: NestJsPddModuleAsyncOptionsInterface): Provider[] {
  const defaultChannel = options.defaultChannel;
  const clientOptions = omit(options, ['defaultChannel']) as { [s: string]: PddClientOptionsInterface };
  const providers = map<{ [s: string]: PddClientOptionsInterface }, Provider | Provider[]>(
    clientOptions,
    (option, key: string) => {
      if (key === defaultChannel) {
        return [
          {
            provide: PddClient,
            useExisting: key,
          },
          {
            provide: key,
            useFactory: (options: NestJsPddModuleAsyncOptionsInterface) => {
              // return new PddClient();
            },
            inject: [NEST_PDD_MODULE_OPTIONS],
          },
        ];
      }
      return [];
    }
  );
  return flatten(providers);
}
