import { Injectable, OnModuleInit } from '@nestjs/common';
import { DiscoveryService, MetadataScanner, ModuleRef, Reflector } from '@nestjs/core';
import { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper';
import { PddClient } from '@pin-duo-duo/core';
import { PDD_CLIENT_BIND_EVENTS_TOKEN } from '../../constant/constant-decorator';

@Injectable()
export class PddExplorerService implements OnModuleInit {
  /**
   *
   * @protected
   */
  protected isModuleInit = false;

  /**
   * 未init时，的client
   * @protected
   */
  protected oldClient: Array<[PddClient<any>, string | symbol, string]> = [];

  constructor(
    private readonly moduleRef: ModuleRef,
    private readonly discoveryService: DiscoveryService,
    private readonly metadataScanner: MetadataScanner,
    private readonly reflector: Reflector
  ) {}

  onModuleInit(): void {
    this.initModuleInitLoopUpListener();
  }

  /**
   * 绑定事件到clientApp
   * @param client
   * @param clientName
   * @param eventName
   */
  public lookupListeners(client: PddClient<any>, clientName: string | symbol, eventName = 'error'): void {
    if (!this.isModuleInit) {
      this.oldClient.push([client, clientName, eventName]);
      return;
    }
    const instanceWrappers: InstanceWrapper[] = this.discoveryService.getProviders();
    instanceWrappers.forEach((wrapper) => {
      const { instance } = wrapper;
      if (!instance || !Object.getPrototypeOf(instance)) {
        return;
      }
      this.metadataScanner.scanFromPrototype(instance, Object.getPrototypeOf(instance), (key) => {
        const methodRef = instance[key];
        if (this.reflector.get(PDD_CLIENT_BIND_EVENTS_TOKEN, methodRef) === clientName) {
          client.on(eventName as 'error', methodRef.bind(instance));
        }
      });
    });
  }

  /**
   * 初始化之后，需要绑定原始的module相关的事件
   * @protected
   */
  protected initModuleInitLoopUpListener(): void {
    this.isModuleInit = true;
    this.oldClient.forEach((args) => {
      this.lookupListeners(...args);
    });
  }
}
