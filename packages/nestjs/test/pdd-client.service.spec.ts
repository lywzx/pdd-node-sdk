import { Test, TestingModule } from '@nestjs/testing';
import { expect } from 'chai';
import { NestJsPddModule, PddClientService } from '../src';

describe('FrontRouterService', () => {
  let service: PddClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        NestJsPddModule.register({
          // 拼多多应用client_id
          clientId: 'string',
          // 拼多多应用密钥
          clientSecret: 'string',
        }),
      ],
      providers: [],
    }).compile();

    service = module.get<PddClientService>(PddClientService);
  });

  it('should be defined', () => {
    expect(service).to.be.not.undefined;
  });
});
