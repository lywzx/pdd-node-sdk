import { expect } from 'chai';
import { PddAccessTokenMissingException, PddBaseException } from '../../src';

describe('pdd-access-token-missing-exception test util', function () {
  it('should true when instanceof Error', function () {
    const n = new PddAccessTokenMissingException('unknown error');
    expect(n).to.be.instanceOf(Error);
  });

  it('should true when with try catch', function () {
    let err;
    try {
      throw new PddAccessTokenMissingException('unknown error');
    } catch (e) {
      err = e;
    }

    expect(err).to.be.instanceOf(PddAccessTokenMissingException);
    expect(err.constructor.name).to.be.eq(PddAccessTokenMissingException.name);
    expect(err).to.be.instanceOf(PddBaseException);
  });
});
