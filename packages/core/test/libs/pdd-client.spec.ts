import { expect } from 'chai';
import { getTypeApiLimiter, PddClient } from '../../src/libs';
import { replace, fake } from 'sinon';

describe('pdd-client test util', function() {
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

  describe('#request', function() {
    it('should ', function() {
      fake(getTypeApiLimiter);
    });
  });
});
