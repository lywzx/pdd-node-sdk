import {
  PDD_GOODS_CATS_GET,
  PDD_GOODS_DETAIL_GET,
  PDD_LOGISTICS_ADDRESS_GET,
  PDD_TICKET_VERIFICATION_NOTIFYCATION,
} from '@pin-duo-duo/pdd-origin-api';
import { expect } from 'chai';
import { OAuthType } from '../../src/constant';
import {
  PddAccessTokenMissingException,
  PddRequestParamsMissingException,
  PddResponseException,
} from '../../src/exceptions';
import { NetworkAdapter, PddApiCacheAbstract, PddClient } from '../../src/libs';
import { replace, fake, restore, stub } from 'sinon';
import { once, extend } from 'lodash';
import {
  replaceCheckTypeIsNeedAccessToken,
  replaceDevMode,
  replaceGetPddLogClient,
  replacePddClientRequest,
  replacePddLog,
  replaceRequestWithRetry,
} from './pdd-client-helper';

describe('pdd-client test util', function() {
  let pddClient: PddClient;
  let restored: (...args: any) => any;
  const pddOptions = {
    clientId: 'aaa',
    clientSecret: 'bbb',
    oAuthType: OAuthType.mms,
  };

  beforeEach(function() {
    restored = once(restore);
  });

  before(function() {
    pddClient = new PddClient<{ userId: number; shopId: number }>(pddOptions);
  });

  it('when without clientId or clientSecret should throw error', function() {
    expect(() => {
      new PddClient({
        clientId: 'clientId',
        clientSecret: '',
      });
    }).to.throw('clientId and clientSecret are necessary!');

    expect(function() {
      new PddClient({
        clientId: '',
        clientSecret: 'clientSecret',
      });
    }).to.throw('clientId and clientSecret are necessary!');
  });

  it('client should instanceof PddClient', function() {
    expect(pddClient).be.instanceOf(PddClient);
  });

  describe('#request methods', function() {
    it('without type should throw exception ', async function() {
      try {
        await pddClient.request({ a: 1, b: 2 });
      } catch (e) {
        expect(e).to.be.instanceOf(PddRequestParamsMissingException);
      }
    });

    it('with callback, without type should throw exception ', function(done) {
      pddClient.request({ a: 1, b: 2 }, err => {
        try {
          expect(err).to.be.instanceOf(PddRequestParamsMissingException);
          done();
        } catch (e) {
          done(e);
        }
      });
    });

    it('pdd request with value', async function() {
      const fk = fake.returns(1);
      replace(NetworkAdapter, 'post', fk);
      // eslint-disable-next-line @typescript-eslint/camelcase
      const result = await pddClient.request({ type: PDD_GOODS_CATS_GET, parent_cat_id: 1, c: { a: 1 } });
      restored();
      expect(result).to.be.eq(1);
    });

    it('pdd request with value when debug is enabled', async function() {
      const fkResult = fake.returns(1);
      replace(NetworkAdapter, 'post', fkResult);
      replaceGetPddLogClient();
      const fkLog = replacePddLog();
      // eslint-disable-next-line @typescript-eslint/camelcase
      const result = await pddClient.request({ type: PDD_GOODS_CATS_GET, parent_cat_id: 1, c: { a: 1 } });
      restored();
      expect(fkLog.callCount).to.be.eq(2);
      expect(result).to.be.eq(1);
    });

    it('pdd request with exception when debug is enabled', async function() {
      const fkResult = fake.throws(new Error('unknown'));
      replace(NetworkAdapter, 'post', fkResult);
      replaceGetPddLogClient();
      replacePddLog();
      try {
        // eslint-disable-next-line @typescript-eslint/camelcase
        await pddClient.request({ type: PDD_GOODS_CATS_GET, parent_cat_id: 1, c: { a: 1 } });
        restored();
        throw new Error('app');
      } catch (e) {
        restored();
        expect(e.message).to.be.eq('unknown');
      }
    });
  });

  describe('#requestWithRetry method', function() {
    it('with retry will not reject', async function() {
      replacePddClientRequest(
        pddClient,
        stub()
          .onCall(0)
          // eslint-disable-next-line @typescript-eslint/camelcase
          .rejects(new PddResponseException({ error_msg: 'error message', error_code: 70031 }))
          .onCall(1)
          .resolves(1)
      );
      const result = await pddClient.requestWithRetry({ type: PDD_GOODS_CATS_GET, a: 1 }, 2);
      restored();
      expect(result).to.be.eq(1);
    });

    it('with retry will reject', async function() {
      const errMsg = 'test retry exception';
      const mkRequest = replacePddClientRequest(
        pddClient,
        stub()
          .onCall(0)
          // eslint-disable-next-line @typescript-eslint/camelcase
          .rejects(new PddResponseException({ error_msg: 'error message', error_code: 70031 }))
          .onCall(1)
          .rejects(new Error(errMsg))
      );
      try {
        await pddClient.requestWithRetry({ type: PDD_GOODS_CATS_GET, a: 1 }, 2);
        restored();
        throw new Error('unknown error');
      } catch (e) {
        restored();
        expect(e.message).to.be.eq(errMsg);
      }
      expect(mkRequest.callCount).to.be.eq(2);
    });

    it('test retry with log enabled', async function() {
      // eslint-disable-next-line @typescript-eslint/camelcase
      const err = new PddResponseException({ error_msg: 'error message', error_code: 70031 });
      const fkLog = replacePddLog();
      const fkGetClientFn = replaceGetPddLogClient();
      const mkRequest = replacePddClientRequest(
        pddClient,
        stub()
          .onCall(0)
          .rejects(err)
          .onCall(1)
          .rejects(err)
          .onCall(2)
          .resolves(1)
      );
      const result = await pddClient.requestWithRetry({ type: PDD_GOODS_CATS_GET, a: 1 }, { times: 3, interval: 0 });
      restored();
      expect(fkGetClientFn.callCount).to.be.eq(1);
      expect(mkRequest.callCount).to.be.eq(3);
      expect(result).to.be.eq(1);
      expect(fkLog.callCount).to.be.eq(8);
    });
  });

  describe('#createOAuthLink method', function() {
    it('should throw exception', function() {
      expect(() => {
        return pddClient.createOAuthLink();
      }).to.be.throw();
    });

    it('should get url', function() {
      const urls = pddClient.createOAuthLink({ redirectUri: 'http://www.lyblog.net' });
      expect(urls.length).to.be.eq(1);
    });
  });

  describe('#execute method', function() {
    it('should throw exception when access token required, but clientAuth not exists', async function() {
      replaceDevMode(true);
      PddClient.setPddDefaultCacheOptions({ alwaysWork: true, ttl: 2 });
      try {
        await pddClient.execute(PDD_GOODS_DETAIL_GET, {}, {});
        throw new Error('unknown exception');
      } catch (e) {
        restored();
        expect(e).to.be.instanceOf(PddAccessTokenMissingException);
      }
    });

    it('should throw exception when access token required, clientAuth exists but clientOptions not exists', async function() {
      const pddClientAuth = stub().resolves();
      pddClient.pddClientAuth = {} as any;
      replace(pddClient, 'pddClientAuth', {
        getAccessTokenFromCache: pddClientAuth,
      } as any);
      try {
        await pddClient.execute(PDD_GOODS_DETAIL_GET, {});
        throw new Error('unknown exception');
      } catch (e) {
        restored();
        pddClient.pddClientAuth = undefined;
        expect(e).to.be.instanceOf(PddAccessTokenMissingException);
        expect(e.message).to.be.eq('params access options is required!');
      }
      expect(pddClientAuth.callCount).to.be.eq(0);
    });

    it('should throw exception when access token required, clientAuth exists and clientOptions exists', async function() {
      const pddClientAuth = stub().resolves();
      pddClient.pddClientAuth = {} as any;
      replace(pddClient, 'pddClientAuth', {
        getAccessTokenFromCache: pddClientAuth,
      } as any);
      try {
        await pddClient.execute(PDD_GOODS_DETAIL_GET, {}, {});
        throw new Error('unknown exception');
      } catch (e) {
        restored();
        pddClient.pddClientAuth = undefined;
        expect(e).to.be.instanceOf(PddAccessTokenMissingException);
        expect(e.message).to.be.eq('cat"t find pdd access token from cache!');
      }
      expect(pddClientAuth.callCount).to.be.eq(1);
    });

    it('should use default retry options, when retry options is undefined', async function() {
      const requestWithRetryOptions = stub().resolves({});
      replace(pddClient, 'requestWithRetry', requestWithRetryOptions);
      // eslint-disable-next-line @typescript-eslint/camelcase
      const params = { parent_cat_id: 1 };
      await pddClient.execute(PDD_GOODS_CATS_GET, params);
      restored();
      expect(requestWithRetryOptions.lastCall.args).to.be.eqls([
        extend({}, params, { type: PDD_GOODS_CATS_GET }),
        undefined,
      ]);
    });

    it('should get result without access token', async function() {
      const resultValue = {
        // eslint-disable-next-line @typescript-eslint/camelcase
        logistics_address_get_response: {
          // eslint-disable-next-line @typescript-eslint/camelcase
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

    it('should worn"t cache when cache option is empty', async function() {
      const cachedStub = stub().resolves(1);
      class Cache extends PddApiCacheAbstract {
        cached = cachedStub;
      }
      PddClient.setPddDefaultCacheOptions({ alwaysWork: false, ttl: 2 });
      pddClient = new PddClient<any>(pddOptions, undefined, new Cache());
      replaceCheckTypeIsNeedAccessToken(false);
      replaceRequestWithRetry(pddClient, { a: 1 });
      await pddClient.execute(PDD_TICKET_VERIFICATION_NOTIFYCATION, {}, null, 0, 1);
      restored();
      expect(cachedStub.callCount).to.be.eq(0);
    });
  });
});
