import { times } from 'lodash';
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
      const key = 'random-1';

      const result = await instance.lock(key, 1000);

      expect(result.timeout).to.be.eq(1000);
      expect(result.triggerTotal).to.be.eq(1);
    });

    it('lock trigger twice', async function() {
      const key = 'random-2';

      await instance.lock(key, 1000);
      await instance.lock(key, 1000);
      const result = await instance.lock(key, 50);

      expect(result.timeout).to.be.lessThan(1000);
      expect(result.triggerTotal).to.be.eq(3);
    });

    it('lock timeout should not be reset', async function() {
      const key = 'random-3';
      await instance.lock(key, 200);
      const result = await instance.lock(key, 50);
      expect(result.triggerTotal).to.be.eq(2);
      expect(result.timeout).to.be.greaterThan(50);
    });

    it('lock timeout should be reset when timeout', async function() {
      const key = 'random-4';

      await Promise.all(times(99).map(() => instance.lock(key, 500)));

      let result = await instance.lock(key, 1000);

      expect(result.triggerTotal).eq(100);
      expect(result.timeout).lessThan(1000);

      await sleep(800);

      result = await instance.lock(key, 1000);
      expect(result.triggerTotal).eq(1);
      expect(result.timeout).eq(1000);
    });
  });
});
