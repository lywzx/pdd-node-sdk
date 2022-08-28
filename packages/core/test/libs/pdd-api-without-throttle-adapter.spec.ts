import { expect } from 'chai';
import { PddApiWithoutThrottleAdapter } from '../../src';

describe('pdd api without throttle adapter test util', function () {
  it('#lock should always return triggerTotal to eql 0', async function () {
    const throtterAdapter = new PddApiWithoutThrottleAdapter();
    const k = 'any';
    expect((await throtterAdapter.lock(k, 100)).triggerTotal).to.be.eq(0);
    expect((await throtterAdapter.lock(k, 100)).triggerTotal).to.be.eq(0);
  });

  it('#unlock should always return true', async function () {
    const throtterAdapter = new PddApiWithoutThrottleAdapter();
    const k = 'any';
    expect(await throtterAdapter.unLock(k)).to.be.eq(true);
    expect(await throtterAdapter.unLock(k)).to.be.eq(true);
  });
});
