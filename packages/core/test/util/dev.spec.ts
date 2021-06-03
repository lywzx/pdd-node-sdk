import { isDevModel, toggleDev } from '../../src/util/dev';
import { expect } from 'chai';
import { MemoizedFunction } from 'lodash';

describe('check dev mode', function () {
  it('should true when env eq development', function () {
    expect(isDevModel()).to.be.an('boolean');
  });

  it('toggleDev is working', function () {
    const oldNodeEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'any';
    toggleDev(true);
    const devModelNew = (isDevModel as any) as MemoizedFunction;
    if (devModelNew.cache.clear) {
      devModelNew.cache.clear();
    }
    expect(isDevModel()).to.be.true;
    toggleDev(false);
    if (devModelNew.cache.clear) {
      devModelNew.cache.clear();
    }
    expect(isDevModel()).to.be.false;
    process.env.NODE_ENV = oldNodeEnv;
  });
});
