import { Inject, Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { PddClient } from '@pin-duo-duo/core';
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

@Injectable()
export class PddClientService {
  /**
   * 获取所有的客户端
   * @protected
   */
  protected clients = new Map<string | symbol, PddClient | PddClientCollect>();

  constructor(
    @Inject(NEST_PDD_MODULE_OPTIONS) protected options: NestJsPddModuleAsyncOptionsInterface,
    private moduleRef: ModuleRef,
    private pddExplorerService: PddExplorerService
  ) {}

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
