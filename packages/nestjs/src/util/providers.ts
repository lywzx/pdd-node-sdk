import { Provider } from '@nestjs/common';
import { PddClient, PddClientOptionsInterface } from '@pin-duo-duo/core';
import { NEST_PDD_MODULE_OPTIONS, NEST_PDD_MODULE_PDD_CLIENTS, NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT } from '../constant';
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

export function createPddClientCollectFactory(): Provider {
  return {
    provide: NEST_PDD_MODULE_PDD_CLIENTS,
    useFactory: (options: NestJsPddModuleOptions) => {
      const newOptions = omit(options, ['defaultChannel']);
      const clientCollection = {};
      let defaultClientName: string;
      let clientsOptions: Omit<NestJsPddModuleAsyncOptionsInterface, 'defaultChannel'>;
      if (!isSingleModel(options)) {
        defaultClientName = options.defaultChannel;
        clientsOptions = omit(options, 'defaultChannel');
      } else {
        defaultClientName = 'default';
        clientsOptions = {
          default: options,
        };
      }
      const isClientCollectionFull = false;

      /*const getSingleClient = () => {
        if (!(NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT in clientCollection)) {
          const clientOptions: PddClientOptionsInterface = (isSingle
            ? newOptions
            : newOptions[defaultClientName]) as any;
          clientCollection[NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT] = new PddClient(clientOptions);
        }
        return clientCollection[NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT];
      };

      const getClientByClientName = (clientName: string | symbol) => {
        if (!(clientName in clientCollection)) {
          clientCollection[clientName] = new PddClient(options[clientName]);

          if (clientName === defaultClientName || clientName === NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT) {
            clientCollection[NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT] = clientCollection[defaultClientName] =
              clientCollection[clientName];
          }
        }
        return clientCollection[clientName];
      };

      return (clientName?: string | symbol) => {
        if (!clientName || clientName === NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT) {
          return getSingleClient();
        }
        if (clientName === NEST_PDD_MODULE_PDD_CLIENTS_ALL) {
          if (!isClientCollectionFull) {
            isClientCollectionFull = true;
            // 创建所有client实例
            each(newOptions, (value, key) => {
              getClientByClientName(key);
            });
          }
          return omit(clientCollection, [NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT]);
        }

        return getClientByClientName(clientName);
      };*/
    },
    inject: [NEST_PDD_MODULE_OPTIONS],
  };
}

const clients = new Map<string, PddClient>();
function getPddClient(client: string, options: NestJsPddClientOptions) {
  if (clients.has(client)) {
    return clients.get(client);
  }
  const clientInstance = new PddClient(options);
  clients.set(client, clientInstance);
  return clientInstance;
}
