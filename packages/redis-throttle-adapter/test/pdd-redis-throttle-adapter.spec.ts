import { testThrottleAdapterUtil, testThrottleUtil } from '../../core/test/test-util';
import { PddRedisThrottleAdapter } from '../src';
import { createClient } from 'redis';

const client = createClient(6379, '127.0.0.1');

// only test adapter
testThrottleAdapterUtil(PddRedisThrottleAdapter, 'pdd-api-redis-throttle-adapter', client);

// use throttle test adapter
testThrottleUtil(new PddRedisThrottleAdapter(client), 'pdd-api-redis-throttle-adapter');
