import { PddApiMemoryThrottleAdapter } from '../../src/libs/pdd-api-memory-throttle-adapter';
import { testThrottleUtil } from '../test-util';

testThrottleUtil(new PddApiMemoryThrottleAdapter(), 'pdd-api-memory-throttle-adapter');
