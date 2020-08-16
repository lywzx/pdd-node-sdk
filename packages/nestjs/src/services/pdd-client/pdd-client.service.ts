import { Inject, Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { PddClient } from '@pin-duo-duo/core';
import { NEST_PDD_MODULE_OPTIONS } from '../../constant';
import { NestJsPddClientOptions, NestJsPddModuleAsyncOptionsInterface } from '../../interfaces';
import { generateClientByClientOptions } from '../../util/providers';

@Injectable()
export class PddClientService {
  /**
   * 获取所有的客户端
   * @protected
   */
  protected clients = new Map<string, PddClient>();

  constructor(
    @Inject(NEST_PDD_MODULE_OPTIONS) protected options: NestJsPddModuleAsyncOptionsInterface,
    private moduleRef: ModuleRef
  ) {}

  /**
   * 获取当前客户端
   * @param key
   */
  public get(key: string): PddClient {
    if (this.clients.has(key)) {
      return this.clients.get(key) as PddClient;
    }
    let client: PddClient | undefined;
    if (key === this.options.defaultChannel) {
      client = this.moduleRef.get<PddClient>(PddClient);
    } else if (this.options[key]) {
      const option = this.options[key];
      client = generateClientByClientOptions(option as NestJsPddClientOptions);
    }
    if (client) {
      this.clients.set(key, client);
      return client;
    }
    throw new Error(`not found client by key name: ${key}`);
  }
}
