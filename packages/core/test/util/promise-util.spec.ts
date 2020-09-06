import { expect } from 'chai';
import { promiseToCallback, sleep } from '../../src/util';

describe('promise util test util', function() {
  it('#promiseToCallback with callback resolve', function(done) {
    const p = Promise.resolve(1);

    promiseToCallback(p, function(err, result) {
      try {
        expect(err).to.be.null;
        expect(result).to.be.eq(1);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  it('#promiseToCallback with callback reject exception', function(done) {
    const p = Promise.reject(new Error('unknown error'));

    promiseToCallback(p, function(err, result) {
      try {
        expect(err).to.be.instanceOf(Error);
        expect(err)
          .to.haveOwnProperty('message')
          .eq('unknown error');
        expect(result).to.be.undefined;
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  it('#promiseToCallback without callback should return it', function() {
    const p = Promise.resolve(1);

    expect(promiseToCallback(p)).to.be.eq(p);
  });

  it('#sleep', async function() {
    const result = await sleep(100, 50);
    expect(result).to.be.eq(50);
  });
});
