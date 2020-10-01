import { Provider, Type } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { PddClient, PddClientOptionsInterface } from '@pin-duo-duo/core';
import { PddClientService } from '..';
import {
  NEST_PDD_MODULE_OPTIONS,
  NEST_PDD_MODULE_PDD_CLIENTS_ALL,
  NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT,
} from '../constant';
import { bindEventArray, PDD_CLIENT_BIND_EVENTS_TOKEN } from '../constant/constant-decorator';
import { NestJsPddClientOptions, NestJsPddModuleAsyncOptionsInterface, NestJsPddModuleOptions } from '../interfaces';
import omit from 'lodash/omit';
import map from 'lodash/map';
import flatten from 'lodash/flatten';
import includes from 'lodash/includes';
import { createConditionalDepHolder } from './create-conditional-dep-holder.helper';

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
 * 创建默认的Providers的内容
 */
export function generateProviders(): Provider[] {
  const optionalSharedConfigHolder = createConditionalDepHolder(NEST_PDD_MODULE_OPTIONS);
  return [
    {
      provide: PddClient,
      useFactory: (options: NestJsPddModuleAsyncOptionsInterface, moduleRef: ModuleRef) => {
        const defaultChannel = options.defaultChannel;
        const clientOption = options[defaultChannel] as NestJsPddClientOptions;
        const client = generateClientByClientOptions(clientOption);
        bindPddClientEvents(client, moduleRef, NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT);
        return client;
      },
      inject: [NEST_PDD_MODULE_OPTIONS, ModuleRef],
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

type AllBindMethods = ['error', string, (string | symbol)[]];
/**
 * 绑定Pdd client中的事件
 * @param client
 * @param moduleRef
 * @param clientName
 */
export function bindPddClientEvents(client: PddClient<any>, moduleRef: ModuleRef, clientName: string | symbol) {
  bindEventArray.forEach(function (target) {
    const allBindMethods: AllBindMethods[] | undefined = Reflect.getMetadata(PDD_CLIENT_BIND_EVENTS_TOKEN, target);
    if (allBindMethods && allBindMethods.length) {
      allBindMethods.forEach(([errorName, propertyKey, cNames]) => {
        if (includes(cNames, clientName)) {
          try {
            const service = moduleRef.get(target.constructor as Type<any>);
            client.on(errorName, service[propertyKey]);
          } catch (e) {}
        }
      });
    }
  });
}
