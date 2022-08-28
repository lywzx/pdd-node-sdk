import { PddBaseException } from '../../src';
import { expect } from 'chai';

describe('pdd-base-exception test util', function () {
  it('should true when instanceof Error', function () {
    const n = new PddBaseException('unknown error');
    expect(n).to.be.instanceOf(Error);
  });

  it('should true when with try catch', function () {
    let err;
    try {
      throw new PddBaseException('unknown error');
    } catch (e) {
      err = e;
    }

    expect(err).to.be.instanceOf(PddBaseException);
    expect(err.constructor.name).to.be.eq(PddBaseException.name);
  });
});
