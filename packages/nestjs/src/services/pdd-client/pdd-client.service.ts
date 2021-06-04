import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { PddClient, toggleDev } from '@pin-duo-duo/core';
import {
  NEST_PDD_MODULE_OPTIONS,
  NEST_PDD_MODULE_PDD_CLIENTS_ALL,
  NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT,
} from '../../constant';
import { NestJsPddClientOptions, NestJsPddModuleAsyncOptionsInterface, PddClientCollect } from '../../interfaces';
import { generateClientByClientOptions } from '../../util/providers';
import toPairs from 'lodash/toPairs';
import fromPairs from 'lodash/fromPairs';
import isObject from 'lodash/isObject';
import includes from 'lodash/includes';
import { PddExplorerService } from '../pdd-explorer/pdd-explorer.service';
import omit from 'lodash/omit';
import some from 'lodash/some';
import debug from 'debug';
import each from 'lodash/each';
import isString from 'lodash/isString';

@Injectable()
export class PddClientService implements OnModuleInit {
  /**
   * 获取所有的客户端
   * @protected
   */
  protected clients = new Map<string | symbol, PddClient | PddClientCollect>();

  constructor(
    @Inject(NEST_PDD_MODULE_OPTIONS) protected readonly options: NestJsPddModuleAsyncOptionsInterface,
    private readonly moduleRef: ModuleRef,
    private readonly pddExplorerService: PddExplorerService
  ) {}

  onModuleInit() {
    // 开启调试
    this.toggleClientDev();
    this.initRetryOptions();
  }

  /**
   * toggle client dev
   * @private
   */
  private toggleClientDev() {
    const allOptions = omit(this.options, ['defaultChannel']);

    if (
      some(allOptions, (value) => {
        return !!(value as NestJsPddClientOptions).enableDev;
      })
    ) {
      toggleDev(true);
      // 打印所有拼多多内部请求日志信息
      debug.enable('pdd:*');
    }
  }

  /**
   * init client default retry options
   * @private
   */
  private initRetryOptions() {
    each(this.options, function (value) {
      if (!isString(value) && value.retryOptions) {
        PddClient.setRetryOptions(value.retryOptions);
      }
    });
  }

  /**
   * 获取当前客户端
   * @param key
   */
  public get<T extends Record<string, any> = any>(): PddClientCollect<T>;
  public get<T extends Record<string, any> = any>(key: string): PddClient<T>;
  public get<T extends Record<string, any> = any>(key?: string): PddClient<T> | PddClientCollect<T> {
    const innerKey: symbol | string = typeof key === 'undefined' ? NEST_PDD_MODULE_PDD_CLIENTS_ALL : key;
    if (innerKey === NEST_PDD_MODULE_PDD_CLIENTS_ALL) {
      if (!this.clients.has(innerKey)) {
        this.clients.set(
          innerKey,
          fromPairs(
            toPairs<any>(this.options)
              .filter(([k, option]) => {
                return isObject(option);
              })
              .concat([[NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT, undefined]])
              .map(([k]) => {
                return [k, this.get(k)];
              })
          )
        );
      }
    }
    if (innerKey && this.clients.has(innerKey)) {
      return this.clients.get(innerKey) as PddClient<T>;
    }
    let client: PddClient | undefined;
    if (includes([NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT, this.options.defaultChannel], innerKey)) {
      client = this.moduleRef.get<PddClient>(PddClient);
    } else if (this.options[innerKey as string] && isObject(this.options[innerKey as string])) {
      const option = this.options[innerKey as string];
      client = generateClientByClientOptions(option as NestJsPddClientOptions);
      this.pddExplorerService.lookupListeners(client, innerKey);
    }
    if (client) {
      this.clients.set(innerKey, client);
      return client;
    }
    throw new Error(`not found client by key name: ${key}`);
  }
}
