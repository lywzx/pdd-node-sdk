import { Test } from '@nestjs/testing';
import { PddClient } from '@pin-duo-duo/core';
import { expect } from 'chai';
import {
  NEST_PDD_MODULE_PDD_CLIENTS_ALL,
  NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT,
  NestJsPddModule,
  NestJsPddModuleOptionsInterface,
  PddClientService,
} from '../src';
import { clientOptions } from './config/test-config';

describe('nest js pdd module test util', function () {
  it('#register static method', async function () {
    const module = await Test.createTestingModule({
      imports: [NestJsPddModule.register(clientOptions)],
      providers: [],
    }).compile();
    expect(module.get(PddClient)).to.be.instanceOf(PddClient);
  });

  it('#registerAsync method', async function () {
    const dfOptions = {
      defaultChannel: 'mms',
      mms: clientOptions,
      test: clientOptions,
    };
    class ConfigService {
      createPddOptions() {
        return Promise.resolve(dfOptions);
      }
    }

    const options: NestJsPddModuleOptionsInterface[] = [
      {
        extraProviders: [ConfigService],
        useClass: ConfigService,
      },
      {
        useFactory: () => {
          return new ConfigService().createPddOptions();
        },
      },
    ];
    for (const option of options) {
      const module = await Test.createTestingModule({
        imports: [NestJsPddModule.registerAsync(option)],
      }).compile();
      const service = module.get(PddClientService);
      const clients = service.get();
      expect(clients[NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT]).to.be.instanceOf(PddClient);
      expect(module.get(NEST_PDD_MODULE_PDD_CLIENTS_ALL)).to.be.eq(clients);
      expect(clients[NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT]).to.be.eq(module.get(PddClient));
      expect(clients[NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT]).to.be.eq(clients.mms);
      expect(module.get(NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT)).to.be.eq(clients.mms);
    }
  });
});
