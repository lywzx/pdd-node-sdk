import { PDD_GOODS_ADD, PDD_GOODS_CATS_GET } from '@pin-duo-duo/pdd-origin-api';
import { expect } from 'chai';
import { PddRequestParamsMissingException } from '../../src/exceptions';
import { getTypeApiLimiter, NetworkAdapter, PddClient } from '../../src/libs';
import { replace, fake, restore } from 'sinon';

describe('pdd-client test util', function() {
  let pddClient: PddClient;

  before(function() {
    pddClient = new PddClient<{ userId: number; shopId: number }>({
      clientId: 'aaa',
      clientSecret: 'bbb',
    });
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

    it('should ', async function() {
      const fk = fake.returns(1);
      replace(NetworkAdapter, 'post', fk);
      // eslint-disable-next-line @typescript-eslint/camelcase
      const result = await pddClient.request({ type: PDD_GOODS_CATS_GET, parent_cat_id: 1, c: { a: 1 } });

      expect(result).to.be.eq(1);

      restore();
    });
  });
});
