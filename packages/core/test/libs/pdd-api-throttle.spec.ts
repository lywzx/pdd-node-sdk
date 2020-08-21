import { PDD_CHAT_PROMISE_INFO_GET, PDD_ERP_ORDER_SYNC } from '../../src/index';
import { expect } from 'chai';
import { PddApiThrottle } from '../../src/libs';
import * as util from '../../src/libs/pdd-api-check.tools';
import { replace, fake, restore, stub } from 'sinon';
import { times } from 'lodash';
import { PddApiMemoryThrottleAdapter } from '../../src/libs/pdd-api-memory-throttle-adapter';

describe('pdd-api-throttle test', function() {
  let pddApiThrottleInstance: PddApiThrottle;
  before(function() {
    pddApiThrottleInstance = new PddApiThrottle(new PddApiMemoryThrottleAdapter(), {
      timeout: 3,
    });
  });

  it('#constructor', function() {
    expect(pddApiThrottleInstance).to.be.instanceOf(PddApiThrottle);
  });

  describe('#checkApiThrottle', async function() {
    it('without api throttle should return null ', async function() {
      const result = await pddApiThrottleInstance.checkApiThrottle(PDD_CHAT_PROMISE_INFO_GET);
      expect(result).to.be.null;
    });

    it('without api throttle should return  ', async function() {
      const fk = fake.returns([
        {
          limiterLevel: 3,
          timeRange: 10,
          times: 3,
        },
      ]);
      replace(util, 'getTypeApiLimiter', fk);
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      stub(pddApiThrottleInstance, 'adapter').returns('111');
      // const result = util.getTypeApiLimiter('aaa');
      for (const current of times(2)) {
        await pddApiThrottleInstance.checkApiThrottle(PDD_ERP_ORDER_SYNC);
      }
      expect(fk.callCount).to.be.eq(2);
      restore();
    });
  });
});
