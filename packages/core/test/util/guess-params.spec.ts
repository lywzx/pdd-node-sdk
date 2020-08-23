import { guessPddClientExecuteParams } from '../../src/util/guess-params.util';
import { expect } from 'chai';

describe('guess params test util', function() {
  const callback = (err: any, result: any) => 1;

  it('when callback, before args will be undefined', function() {
    const result = [undefined, undefined, undefined, callback];
    expect(guessPddClientExecuteParams([undefined, undefined, undefined, callback])).to.be.eqls(result);
    expect(guessPddClientExecuteParams([undefined, undefined, callback, 1, callback])).to.be.eqls(result);
    expect(guessPddClientExecuteParams([undefined, callback, 1, 1])).to.be.eqls(result);
    expect(guessPddClientExecuteParams([callback, 1, 1, 1])).to.be.eqls(result);
  });

  it('guess access options', function() {
    const opts = { a: 1 };
    expect(guessPddClientExecuteParams([opts, undefined, undefined, undefined])).to.be.eqls([
      opts,
      undefined,
      undefined,
      undefined,
    ]);
  });

  it('guess access options to retryOptions', function() {
    expect(guessPddClientExecuteParams([2, undefined, undefined, undefined])).to.be.eqls([
      undefined,
      2,
      undefined,
      undefined,
    ]);
  });

  it('retry and cache options guess', function() {
    expect(guessPddClientExecuteParams([3, 2, undefined, undefined])).to.be.eqls([undefined, 3, 2, undefined]);
  });
});
