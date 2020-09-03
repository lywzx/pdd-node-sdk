import { PDD_GOODS_CATS_GET, PDD_GOODS_DETAIL_GET } from '@pin-duo-duo/pdd-origin-api';
import { expect } from 'chai';
import { OAuthType } from '../../src/constant';
import {
  PddAccessTokenMissingException,
  PddRequestParamsMissingException,
  PddResponseException,
} from '../../src/exceptions';
import { NetworkAdapter, PddClient } from '../../src/libs';
import { replace, fake, restore, stub } from 'sinon';
import * as debug from '../../src/util/debug';
import { once } from 'lodash';

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
      pddClient.request({ a: 1, b: 2 }, (err, result) => {
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
      const fkGetClientFn = fake.returns({
        enabled: true,
        color: '',
      });
      const fkLog = fake.returns(null);
      replace(debug, 'getPddLogClient', fkGetClientFn);
      replace(debug, 'pddLog', fkLog);
      // eslint-disable-next-line @typescript-eslint/camelcase
      const result = await pddClient.request({ type: PDD_GOODS_CATS_GET, parent_cat_id: 1, c: { a: 1 } });
      restored();
      expect(fkLog.callCount).to.be.eq(2);
      expect(result).to.be.eq(1);
    });

    it('pdd request with exception when debug is enabled', async function() {
      const fkResult = fake.throws(new Error('unknown'));
      replace(NetworkAdapter, 'post', fkResult);
      const fkGetClientFn = fake.returns({
        enabled: true,
        color: '',
      });
      const fkLog = fake.returns(null);
      replace(debug, 'getPddLogClient', fkGetClientFn);
      replace(debug, 'pddLog', fkLog);
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
      const mkRequest = stub()
        .onCall(0)
        // eslint-disable-next-line @typescript-eslint/camelcase
        .rejects(new PddResponseException({ error_msg: 'error message', error_code: 70031 }))
        .onCall(1)
        .resolves(1);
      replace(pddClient, 'request', mkRequest);
      const result = await pddClient.requestWithRetry({ type: PDD_GOODS_CATS_GET, a: 1 }, 2);
      restored();
      expect(result).to.be.eq(1);
    });

    it('with retry will reject', async function() {
      const errMsg = 'test retry exception';
      const mkRequest = stub()
        .onCall(0)
        // eslint-disable-next-line @typescript-eslint/camelcase
        .rejects(new PddResponseException({ error_msg: 'error message', error_code: 70031 }))
        .onCall(1)
        .rejects(new Error(errMsg));
      replace(pddClient, 'request', mkRequest);
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
      const fkGetClientFn = fake.returns({
        enabled: true,
        color: '',
      });
      // eslint-disable-next-line @typescript-eslint/camelcase
      const err = new PddResponseException({ error_msg: 'error message', error_code: 70031 });
      const fkLog = fake.returns(null);
      replace(debug, 'getPddLogClient', fkGetClientFn);
      replace(debug, 'pddLog', fkLog);
      const mkRequest = stub()
        .onCall(0)
        .rejects(err)
        .onCall(1)
        .rejects(err)
        .onCall(2)
        .resolves(1);
      replace(pddClient, 'request', mkRequest);
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
      try {
        await pddClient.execute(PDD_GOODS_DETAIL_GET, {});
        throw new Error('unknown exception');
      } catch (e) {
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
  });
});
