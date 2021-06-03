import { expect } from 'chai';
import { isEncryptData } from '../../src';

describe('isEncryptData', function () {
  it('data is not encrypt', function () {
    expect(isEncryptData('')).to.be.false;
  });
});
