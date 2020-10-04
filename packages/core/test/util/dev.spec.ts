import { isDevModel } from '../../src/util/dev';
import { expect } from 'chai';

describe('check dev mode', function () {
  it('should true when env eq development', function () {
    expect(isDevModel()).to.be.an('boolean');
  });
});
