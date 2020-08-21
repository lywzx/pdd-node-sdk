import { times, uniqueId } from 'lodash';
import { expect } from 'chai';
import { PddApiMemoryThrottleAdapter } from '../../src/libs/pdd-api-memory-throttle-adapter';
import { sleep } from '../../src/util';

describe('pdd-api-memory-throttle-adapter test util', function() {
  let instance: PddApiMemoryThrottleAdapter;

  before(function() {
    instance = new PddApiMemoryThrottleAdapter();
  });

  describe('#constructor', () => {
    it('should instance of self', function() {
      expect(instance).instanceOf(PddApiMemoryThrottleAdapter);
    });
  });

  describe('#lock', function() {
    it('lock init trigger', async function() {
      const key = uniqueId('random_');

      const result = await instance.lock(key, 1000);

      expect(result.timeout).to.be.eq(1000);
      expect(result.triggerTotal).to.be.eq(1);
    });

    it('lock trigger twice', async function() {
      const key = uniqueId('random_');

      await instance.lock(key, 1000);
      await instance.lock(key, 1000);
      await sleep(50);
      const result = await instance.lock(key, 50);

      expect(result.timeout).to.be.lessThan(951);
      expect(result.triggerTotal).to.be.eq(3);
    });

    it('lock timeout should not be reset', async function() {
      const key = uniqueId('random_');
      await instance.lock(key, 200);
      const result = await instance.lock(key, 50);
      expect(result.triggerTotal).to.be.eq(2);
      expect(result.timeout).to.be.greaterThan(50);
      expect(result.timeout).to.be.lessThan(201);
    });

    it('lock timeout should be reset when timeout', async function() {
      const key = uniqueId('random_');

      await Promise.all(times(99).map(() => instance.lock(key, 100)));

      let result = await instance.lock(key, 100);

      expect(result.triggerTotal).eq(100);
      expect(result.timeout).lessThan(101);
      expect(result.timeout).greaterThan(-1);

      await sleep(101);

      result = await instance.lock(key, 1000);
      expect(result.triggerTotal).eq(1);
      expect(result.timeout).eq(1000);
    });

    it('lock timeout should auto clean', async function() {
      const key1 = uniqueId('random_');
      const key2 = uniqueId('random_');
      await instance.lock(key1, 100);
      await instance.lock(key2, 200);
      await sleep(101);
      const result = await instance.lock(key1, 100);
      expect(result.timeout).to.be.eq(100);
      expect(result.triggerTotal).to.be.eq(1);
    });
  });

  describe('#unLock', function() {
    it('should unLock will return false when call without exsts', async function() {
      const key = uniqueId('random_');
      const result = await instance.unLock(key);
      expect(result).to.be.eq(false);
    });

    it('should unLock will won,t return < -1 when unLock first trigger', async function() {
      const key = uniqueId('random_');
      await Promise.all(times(100).map(() => instance.unLock(key)));
      const result = await instance.lock(key, 100);
      expect(result.timeout).to.be.eq(100);
      expect(result.triggerTotal).to.be.eq(1);
    });

    it('should unLock will won,t return < -1 when any', async function() {
      const key = uniqueId('random_');
      await Promise.all(times(99).map(() => instance.lock(key, 100)));
      await sleep(20);
      let result = await instance.lock(key, 100);
      expect(result.timeout).to.be.lessThan(100);
      expect(result.triggerTotal).to.be.eq(100);

      await Promise.all(times(50).map(() => instance.unLock(key)));
      result = await instance.lock(key, 100);
      expect(result.triggerTotal).to.be.eq(51);

      await Promise.all(times(100).map(() => instance.unLock(key)));
      result = await instance.lock(key, 100);
      expect(result.triggerTotal).to.be.eq(1);
      expect(result.timeout).to.be.lessThan(100);
    });
  });
});
