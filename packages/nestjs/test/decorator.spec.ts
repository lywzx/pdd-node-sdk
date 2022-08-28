import 'reflect-metadata';
import { Injectable } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PDD_AD_API_ADVERTISER_OPEN_ACCOUNT } from '@pin-duo-duo/pdd-origin-api';
import { catchError, NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT, NestJsPddModule, PddClientService } from '../src';
import { PddExplorerService } from '../src/services/pdd-explorer/pdd-explorer.service';
import { clientOptions } from './config/test-config';
import { fake, SinonSpy } from 'sinon';
import { expect } from 'chai';
import { times } from 'lodash';

let clientError: SinonSpy;
let onOpenClientError: SinonSpy;
@Injectable()
class TestError {
  @catchError()
  onPddClientError(error: Error, params: any) {
    clientError(error, params);
  }

  @catchError('open')
  onPddOpenClientError(error: Error, params: any) {
    onOpenClientError(error, params);
  }
}

describe('test pdd nest module decorator', () => {
  let module: TestingModule;
  let pddClientService: PddClientService;
  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [
        NestJsPddModule.registerAsync({
          extraProviders: [TestError],
          useFactory() {
            return {
              defaultChannel: 'mms',
              mms: clientOptions as any,
              open: clientOptions as any,
            };
          },
        }),
      ],
      providers: [],
    }).compile();
    const pddExplorerService = module.get(PddExplorerService);
    pddExplorerService.onModuleInit();
    pddClientService = module.get(PddClientService);
  });

  it('should trigger in onPddClientError', async function () {
    clientError = fake.returns(undefined);
    onOpenClientError = fake.returns(undefined);
    const pddClient = pddClientService.get(NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT);
    const openPddClient = pddClientService.get('open');

    for (const i of times(10)) {
      try {
        await pddClient.execute(PDD_AD_API_ADVERTISER_OPEN_ACCOUNT, {});
      } catch (e) {}
      if (i < 5) {
        try {
          await openPddClient.execute(PDD_AD_API_ADVERTISER_OPEN_ACCOUNT, {});
        } catch (e) {}
      }
    }

    expect(clientError.callCount).to.be.eq(10);
    expect(onOpenClientError.callCount).to.be.eq(5);
  });
});
