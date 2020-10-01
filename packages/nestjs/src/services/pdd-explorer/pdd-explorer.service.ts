import { Injectable, Logger } from '@nestjs/common';
import { DiscoveryService, MetadataScanner, ModuleRef, Reflector } from '@nestjs/core';
import { Injector } from '@nestjs/core/injector/injector';
import { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper';
import { PddClient } from '@pin-duo-duo/core';
import { PDD_CLIENT_BIND_EVENTS_TOKEN } from '../../constant/constant-decorator';

@Injectable()
export class PddExplorerService {
  private readonly logger = new Logger('PddNodeSdk');
  private readonly injector = new Injector();

  constructor(
    private readonly moduleRef: ModuleRef,
    private readonly discoveryService: DiscoveryService,
    private readonly metadataScanner: MetadataScanner,
    private readonly reflector: Reflector
  ) {}

  public lookupListeners(client: PddClient<any>, eventName: string) {
    const instanceWrappers: InstanceWrapper[] = this.discoveryService.getProviders();
    instanceWrappers.forEach((wrapper) => {
      const { instance } = wrapper;
      if (!instance || !Object.getPrototypeOf(instance)) {
        return;
      }
      this.metadataScanner.scanFromPrototype(instance, Object.getPrototypeOf(instance), (key) => {
        const methodRef = instance[key];
        if (this.reflector.get(PDD_CLIENT_BIND_EVENTS_TOKEN, methodRef)) {}
      });
    });
  }
}
