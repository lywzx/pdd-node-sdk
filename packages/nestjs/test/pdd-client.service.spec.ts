import { Test, TestingModule } from '@nestjs/testing';
import { PddClient } from '@pin-duo-duo/core';
import { expect } from 'chai';
import {
  NEST_PDD_MODULE_PDD_CLIENTS_ALL,
  NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT,
  NestJsPddModule,
  PddClientService,
} from '../src';
import { clientOptions } from './config/test-config';

describe('FrontRouterService', () => {
  let service: PddClientService;
  let module: TestingModule;
  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [
        NestJsPddModule.register({
          defaultChannel: 'mms',
          mms: clientOptions,
          open: clientOptions,
        }),
      ],
      providers: [],
    }).compile();

    service = module.get<PddClientService>(PddClientService);
  });

  it('PddClientService be defined', () => {
    expect(service).to.be.not.undefined;
    expect(service).to.be.instanceOf(PddClientService);
  });

  it('should get all Clients', function() {
    const clients = service.get();
    expect(clients[NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT]).to.be.instanceOf(PddClient);
    expect(module.get(NEST_PDD_MODULE_PDD_CLIENTS_ALL)).to.be.eq(clients);
    expect(clients[NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT]).to.be.eq(module.get(PddClient));
    expect(clients[NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT]).to.be.eq(clients.mms);
  });

  it('should throw exception', function() {
    expect(() => {
      service.get('any-not-exists');
    }).to.be.throw();
  });
});
