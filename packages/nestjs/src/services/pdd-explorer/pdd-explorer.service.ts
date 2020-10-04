import { Injectable, Logger } from '@nestjs/common';
import { DiscoveryService, MetadataScanner, ModuleRef, Reflector } from '@nestjs/core';
import { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper';
import { PddClient } from '@pin-duo-duo/core';
import { PDD_CLIENT_BIND_EVENTS_TOKEN } from '../../constant/constant-decorator';

@Injectable()
export class PddExplorerService {
  private readonly logger = new Logger('PddNodeSdk');

  constructor(
    private readonly moduleRef: ModuleRef,
    private readonly discoveryService: DiscoveryService,
    private readonly metadataScanner: MetadataScanner,
    private readonly reflector: Reflector
  ) {}

  /**
   * 绑定事件到clientApp
   * @param client
   * @param clientName
   * @param eventName
   */
  public lookupListeners(client: PddClient<any>, clientName: string | symbol, eventName = 'error'): void {
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
}
