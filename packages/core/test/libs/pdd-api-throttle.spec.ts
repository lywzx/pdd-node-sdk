import {
  PDD_NEXTONE_LOGISTICS_WAREHOUSE_UPDATE,
  PDD_ERP_ORDER_SYNC,
  PDD_CHAT_PROMISE_INFO_GET,
} from '@pin-duo-duo/pdd-origin-api';
import { ILock, PddApiLimiterLevel, PddBaseException, PddRequestWaitingTimeoutException } from '../../src/index';
import { expect } from 'chai';
import { PddApiThrottle } from '../../src/libs';
import * as util from '../../src/libs/pdd-api-check.tools';
import { replace, fake, restore, stub } from 'sinon';
import { times } from 'lodash';
import { PddApiMemoryThrottleAdapter } from '../../src/libs/pdd-api-memory-throttle-adapter';
import { uniqueId } from 'lodash';

/**
 * 生成api的key，保证不重复
 */
function generateApiKey(): string {
  return uniqueId('__api__key__');
}

/**
 * 生成使用的access token，保证不重复
 */
function generateAccessToken(): string {
  return uniqueId('__access_token__');
}

describe('pdd-api-throttle test', function() {
  let pddApiThrottleInstance: PddApiThrottle;
  let apiKey: string;
  let apiAccessToken: string;
  before(function() {
    pddApiThrottleInstance = new PddApiThrottle(new PddApiMemoryThrottleAdapter(), {
      timeout: 1000,
    });
  });

  beforeEach(function() {
    apiKey = generateApiKey();
    apiAccessToken = generateAccessToken();
  });

  it('#constructor', function() {
    expect(pddApiThrottleInstance).to.be.instanceOf(PddApiThrottle);
  });

  describe('#checkApiThrottle', async function() {
    it('without api throttle should return null ', async function() {
      const result = await pddApiThrottleInstance.checkApiThrottle(apiKey);
      expect(result).to.be.null;
    });

    it('with api in limiter will quick running', async function() {
      const fk = fake.returns([
        {
          limiterLevel: PddApiLimiterLevel.API,
          timeRange: 0.05,
          times: 3,
        },
      ]);
      replace(util, 'getTypeApiLimiter', fk);
      const startTime = Date.now();
      const result = await Promise.all(
        times(3).map(() => {
          return pddApiThrottleInstance.checkApiThrottle(apiKey, apiAccessToken);
        })
      );
      expect(result).to.be.eqls([null, null, null]);
      expect(fk.callCount).to.be.eq(3);
      expect(Date.now() - startTime).to.be.lessThan(49);
      restore();
    });

    it('with api more than limiter, time will delay', async function() {
      const fk = fake.returns([
        {
          limiterLevel: PddApiLimiterLevel.API,
          timeRange: 0.05,
          times: 2,
        },
      ]);
      replace(util, 'getTypeApiLimiter', fk);
      const startTime = Date.now();
      await Promise.all(
        times(2).map(() => {
          return pddApiThrottleInstance.checkApiThrottle(apiKey, apiAccessToken);
        })
      );
      expect(fk.callCount).to.be.eq(2);
      const reBegin = Date.now();
      expect(reBegin - startTime).to.be.lessThan(51);
      await Promise.all(
        times(1).map(() => {
          return pddApiThrottleInstance.checkApiThrottle(apiKey, apiAccessToken);
        })
      );
      expect(fk.callCount).to.be.eq(4);
      expect(Date.now() - startTime).to.be.greaterThan(49);
      restore();
    });

    it('with api mix throttle should get min throttle', async function() {
      const fk = fake.returns([
        {
          limiterLevel: PddApiLimiterLevel.API,
          timeRange: 0.1,
          times: 3,
        },
        {
          limiterLevel: PddApiLimiterLevel.SHOP,
          timeRange: 0.2,
          times: 4,
        },
      ]);
      replace(util, 'getTypeApiLimiter', fk);
      const start = Date.now();
      const result = await Promise.all(
        times(4).map(() => {
          return pddApiThrottleInstance.checkApiThrottle(apiKey, apiAccessToken);
        })
      );
      expect(result).to.be.eqls([null, null, null, null]);
      expect(fk.callCount).to.be.eq(5);
      const runningTime = Date.now() - start;
      expect(runningTime).to.be.greaterThan(99);
      expect(runningTime).to.be.lessThan(201);
      restore();
    });

    it('should api throttle should get mix throttle', async function() {
      const fk = fake.returns([
        {
          limiterLevel: PddApiLimiterLevel.API,
          timeRange: 0.04,
          times: 2,
        },
        {
          limiterLevel: PddApiLimiterLevel.SHOP,
          timeRange: 0.1,
          times: 2,
        },
      ]);
      replace(util, 'getTypeApiLimiter', fk);
      const start = Date.now();
      await Promise.all(
        times(2).map(() => {
          return pddApiThrottleInstance.checkApiThrottle(apiKey, apiAccessToken);
        })
      );
      expect(fk.callCount).to.be.eq(2);
      await pddApiThrottleInstance.checkApiThrottle(apiKey, apiAccessToken);
      const runningTime = Date.now() - start;
      expect(runningTime).to.be.greaterThan(99);
      expect(fk.callCount).to.be.eq(4);
      restore();
    });

    it('should throw error when waiting timeout', async function() {
      const instance = new PddApiThrottle(new PddApiMemoryThrottleAdapter(), {
        timeout: 50,
      });
      const fk = fake.returns([
        {
          limiterLevel: PddApiLimiterLevel.APP,
          timeRange: 0.05,
          times: 2,
        },
      ]);
      replace(util, 'getTypeApiLimiter', fk);
      await Promise.all(
        times(2).map(() => {
          return instance.checkApiThrottle(apiKey, apiAccessToken);
        })
      );
      expect(fk.callCount).to.be.eq(2);
      try {
        await instance.checkApiThrottle(apiKey, apiAccessToken);
        throw new Error('unknown error');
      } catch (e) {
        expect(fk.callCount).to.be.eq(4);
        expect(e).to.be.instanceOf(PddRequestWaitingTimeoutException);
        expect(e).to.be.instanceOf(PddBaseException);
      }
      restore();
    });
  });
});
