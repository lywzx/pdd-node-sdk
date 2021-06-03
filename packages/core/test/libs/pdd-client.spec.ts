import {
  PDD_GOODS_CATS_GET,
  PDD_GOODS_DETAIL_GET,
  PDD_LOGISTICS_ADDRESS_GET,
  PDD_TICKET_VERIFICATION_NOTIFYCATION,
} from '@pin-duo-duo/pdd-origin-api';
import { expect } from 'chai';
import {
  OAuthType,
  PddAccessTokenMissingException,
  PddBaseException,
  PddRequestParamsMissingException,
  PddResponseException,
  defaultRetryOptions,
  NetworkAdapter,
  PddApiCacheAbstract,
  PddClient,
} from '../../src';
import * as guess from '../../src/util/guess-params.util';
import * as util from '../../src/util';
import { replace, fake, restore, stub } from 'sinon';
import { once, extend, pick, keys } from 'lodash';
import {
  replaceCheckTypeIsNeedAccessToken,
  replaceDevMode,
  replaceGetPddLogClient,
  replacePddClientRequest,
  replacePddLog,
  replaceRequestWithRetry,
} from './pdd-client-helper';
import chaiAsPromised from 'chai-as-promised';
import { use } from 'chai';

use(chaiAsPromised);

describe('pdd-client test util', function () {
  let pddClient: PddClient<{ userId: number; shopId: number }>;
  let restored: (...args: any) => any;
  const pddOptions = {
    clientId: 'aaa',
    clientSecret: 'bbb',
    oAuthType: OAuthType.mms,
  };

  beforeEach(function () {
    restored = once(restore);
  });

  before(function () {
    pddClient = new PddClient<{ userId: number; shopId: number }>(pddOptions);
  });

  describe('#constructor', function () {
    it('when without clientId or clientSecret should throw error', function () {
      expect(() => {
        new PddClient({
          clientId: 'clientId',
          clientSecret: '',
        });
      }).to.throw('clientId and clientSecret are necessary!');

      expect(function () {
        new PddClient({
          clientId: '',
          clientSecret: 'clientSecret',
        });
      }).to.throw('clientId and clientSecret are necessary!');
    });

    it('client should instanceof PddClient', function () {
      expect(pddClient).be.instanceOf(PddClient);
    });
  });

  describe('#request methods', function () {
    it('without type should throw exception ', async function () {
      await expect(pddClient.request({ a: 1, b: 2 })).to.be.rejectedWith(PddRequestParamsMissingException);
    });

    it('with callback, without type should throw exception ', function (done) {
      pddClient.request({ a: 1, b: 2 }, (err) => {
        try {
          expect(err).to.be.instanceOf(PddRequestParamsMissingException);
          done();
        } catch (e) {
          done(e);
        }
      });
    });

    it('pdd request with value', async function () {
      const fk = fake.returns(1);
      replace(NetworkAdapter, 'post', fk);
      const result = await pddClient.request({ type: PDD_GOODS_CATS_GET, parent_cat_id: 1, c: { a: 1 } });
      restored();
      expect(result).to.be.eq(1);
    });

    it('pdd request with value when debug is enabled', async function () {
      const fkResult = fake.returns(1);
      replace(NetworkAdapter, 'post', fkResult);
      replaceGetPddLogClient();
      const fkLog = replacePddLog();
      const result = await pddClient.request({ type: PDD_GOODS_CATS_GET, parent_cat_id: 1, c: { a: 1 } });
      restored();
      expect(fkLog.callCount).to.be.eq(2);
      expect(result).to.be.eq(1);
    });

    it('pdd request with exception when debug is enabled', async function () {
      const fkResult = fake.throws(new Error('unknown'));
      replace(NetworkAdapter, 'post', fkResult);
      replaceGetPddLogClient();
      replacePddLog();
      await expect(pddClient.request({ type: PDD_GOODS_CATS_GET, parent_cat_id: 1, c: { a: 1 } })).to.be.rejectedWith(
        'unknown'
      );
      restored();
    });
  });

  describe('#requestWithRetry method', function () {
    it('with retry will not reject', async function () {
      replacePddClientRequest(
        pddClient,
        stub()
          .onCall(0)
          .rejects(new PddResponseException({ error_msg: 'error message', error_code: 70031 }))
          .onCall(1)
          .resolves(1)
      );
      const result = await pddClient.requestWithRetry({ type: PDD_GOODS_CATS_GET, a: 1 }, 2);
      restored();
      expect(result).to.be.eq(1);
    });

    it('with retry will reject', async function () {
      const errMsg = 'test retry exception';
      const mkRequest = replacePddClientRequest(
        pddClient,
        stub()
          .onCall(0)
          .rejects(new PddResponseException({ error_msg: 'error message', error_code: 70031 }))
          .onCall(1)
          .rejects(new Error(errMsg))
      );
      await expect(pddClient.requestWithRetry({ type: PDD_GOODS_CATS_GET, a: 1 }, 2)).to.be.rejectedWith(Error, errMsg);
      expect(mkRequest.callCount).to.be.eq(2);
      restored();
    });

    it('test retry with log enabled', async function () {
      const err = new PddResponseException({ error_msg: 'error message', error_code: 70031 });
      const fkLog = replacePddLog();
      const fkGetClientFn = replaceGetPddLogClient();
      const mkRequest = replacePddClientRequest(
        pddClient,
        stub().onCall(0).rejects(err).onCall(1).rejects(err).onCall(2).resolves(1)
      );
      const result = await pddClient.requestWithRetry({ type: PDD_GOODS_CATS_GET, a: 1 }, { times: 3, interval: 0 });
      restored();
      expect(fkGetClientFn.callCount).to.be.eq(1);
      expect(mkRequest.callCount).to.be.eq(3);
      expect(result).to.be.eq(1);
      expect(fkLog.callCount).to.be.eq(8);
    });
  });

  describe('#createOAuthLink method', function () {
    it('should throw exception', function () {
      expect(() => {
        return pddClient.createOAuthLink();
      }).to.be.throw();
    });

    it('should get url', function () {
      const urls = pddClient.createOAuthLink({ redirectUri: 'http://www.lyblog.net' });
      expect(urls.length).to.be.eq(1);
    });
  });

  describe('#execute method', function () {
    it('should throw exception when access token required, but clientAuth not exists', async function () {
      replaceDevMode(true);
      PddClient.setPddDefaultCacheOptions({ alwaysWork: true, ttl: 2 });
      await expect(pddClient.execute(PDD_GOODS_DETAIL_GET, {}, {})).to.be.rejectedWith(PddAccessTokenMissingException);
      restored();
    });

    it('should throw exception when access token required, clientAuth exists but clientOptions not exists', async function () {
      const pddClientAuth = stub().resolves();
      pddClient.pddClientAuth = {} as any;
      replace(pddClient, 'pddClientAuth', {
        getAccessTokenFromCache: pddClientAuth,
      } as any);

      await expect(pddClient.execute(PDD_GOODS_DETAIL_GET, {})).to.be.rejectedWith(
        PddAccessTokenMissingException,
        'params access options is required!'
      );
      restored();
      expect(pddClientAuth.callCount).to.be.eq(0);
    });

    it('should throw exception when access token required, clientAuth exists and clientOptions exists', async function () {
      const pddClientAuth = stub().resolves();
      pddClient.pddClientAuth = {} as any;
      replace(pddClient, 'pddClientAuth', {
        getAccessTokenFromCache: pddClientAuth,
      } as any);
      await expect(pddClient.execute(PDD_GOODS_DETAIL_GET, {}, {})).to.be.rejectedWith(
        PddAccessTokenMissingException,
        'cat"t find pdd access token from cache!'
      );
      restored();
      pddClient.pddClientAuth = undefined;
      expect(pddClientAuth.callCount).to.be.eq(1);
    });

    it('should use default retry options, when retry options is undefined', async function () {
      const requestWithRetryOptions = stub().resolves({});
      replace(pddClient, 'requestWithRetry', requestWithRetryOptions);
      const params = { parent_cat_id: 1 };
      await pddClient.execute(PDD_GOODS_CATS_GET, params);
      restored();
      expect(requestWithRetryOptions.lastCall.args).to.be.eqls([
        extend({}, params, { type: PDD_GOODS_CATS_GET }),
        defaultRetryOptions,
      ]);
    });

    it('should get result without access token', async function () {
      const resultValue = {
        logistics_address_get_response: {
          logistics_address_list: [1],
        },
      };
      PddClient.setPddDefaultCacheOptions({ alwaysWork: true, ttl: 2 });
      replaceDevMode(true);
      replaceCheckTypeIsNeedAccessToken(false);
      replaceRequestWithRetry(pddClient, resultValue);
      const firstResult = await pddClient.execute(PDD_LOGISTICS_ADDRESS_GET, {});
      const secondResult = await pddClient.execute(PDD_TICKET_VERIFICATION_NOTIFYCATION, {});
      restored();
      expect(firstResult).to.be.equals(resultValue.logistics_address_get_response);
      expect(secondResult).to.be.equals(resultValue);
    });

    it('should worn"t cache when cache option is empty', async function () {
      const cachedStub = stub().resolves(1);
      class Cache extends PddApiCacheAbstract {
        cached = cachedStub;
      }
      replaceDevMode(true);
      PddClient.setPddDefaultCacheOptions({ alwaysWork: true, ttl: 2 });
      pddClient = new PddClient<any>(pddOptions, undefined, new Cache());
      replaceCheckTypeIsNeedAccessToken(false);
      replaceRequestWithRetry(pddClient, { a: 1 });
      await pddClient.execute(PDD_TICKET_VERIFICATION_NOTIFYCATION, {}, 0, 0);
      restored();
      expect(cachedStub.callCount).to.be.eq(0);
    });

    it('should cache when cache option is work', async function () {
      const cachedStub = stub().resolves(1);
      class Cache extends PddApiCacheAbstract {
        cached = cachedStub;
      }
      replaceDevMode(true);
      PddClient.setPddDefaultCacheOptions({ alwaysWork: true, ttl: 2 });
      pddClient = new PddClient<any>(pddOptions, undefined, new Cache());
      replaceCheckTypeIsNeedAccessToken(false);
      replaceRequestWithRetry(pddClient, { a: 1 });
      await pddClient.execute(PDD_TICKET_VERIFICATION_NOTIFYCATION, {}, 0, 2);
      restored();
      expect(cachedStub.callCount).to.be.eq(1);
    });
  });

  describe('#generate method', function () {
    it('should get result', async function () {
      const result = { testResponse: true };
      const methods = stub().resolves(result);
      const getShortResponse = stub().resolves(result);
      const testValues = [
        'code',
        {
          code: 'code',
        },
        {
          refresh_token: 'code',
        },
      ];
      replace(pddClient, 'request', methods);
      replace(util, 'getShortResponse', getShortResponse);
      for (const value of testValues) {
        const res = await pddClient.generate(value as any);
        expect(res).to.be.eql(result);
      }
      restored();
    });

    it('should get error when access is empty', async function () {
      await expect(pddClient.generate({ userId: 1, shopId: 1 })).to.be.rejectedWith(
        PddBaseException,
        'refresh access token failed, because pdd client auth is undefined!'
      );
    });
  });

  describe('#refresh method', function () {
    it('when string should guess to refresh param', async function () {
      const generate = stub().resolves({});
      const token = 'test-token';
      replace(pddClient, 'generate', generate);
      await pddClient.refresh(token);
      restored();
      expect(generate.callCount).to.be.eq(1);
      expect(generate.lastCall.args[0]).to.be.eqls({ refresh_token: token });
    });
  });

  describe('#setDefaultRequestParam static method', function () {
    it('should set default request param', async function () {
      const param = { data_type: 'XML', version: 'V2' };
      PddClient.setDefaultRequestParam(param as any);
      const signStub = stub().throws(new Error('unknonw error'));
      replace(pddClient, 'sign', signStub);
      expect(() => pddClient.request({ type: PDD_GOODS_CATS_GET })).to.be.throw(Error, 'unknonw error');
      restored();
      expect(signStub.callCount).to.be.eq(1);
      expect(pick(signStub.lastCall.args[0], keys(param))).to.be.eqls(param);
    });
  });

  describe('#setRetryOptions static method', function () {
    it('should set default request param', async function () {
      const times = 100;
      PddClient.setRetryOptions({ times });
      const stubGuessPddClientRequestWithRetryParams = stub().resolves([]);
      replace(pddClient, 'request', stub().resolves(1));
      replace(guess, 'guessPddClientRequestWithRetryParams', stubGuessPddClientRequestWithRetryParams);
      await pddClient.requestWithRetry({ type: PDD_GOODS_CATS_GET });
      restored();
      expect(stubGuessPddClientRequestWithRetryParams.callCount).to.be.eq(1);
      expect(stubGuessPddClientRequestWithRetryParams.lastCall.args[2].times).to.be.eq(times);
    });
  });
});
