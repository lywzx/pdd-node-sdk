import { PddResponseException } from '../../src/exceptions';
import { defaultRetryOptions } from '../../src/libs';
import { noop } from 'lodash';
import { expect } from 'chai';

const errorFilter = defaultRetryOptions.errorFilter || noop;

describe('pdd-client error filter test', function() {
  it('should return true', function() {
    const errorCode: number[] = [52101, 52102, 52103, 70031];

    for (const e of errorCode) {
      // eslint-disable-next-line @typescript-eslint/camelcase
      expect(errorFilter(new PddResponseException({ error_msg: 'test message', error_code: e }))).to.be.true;
    }
  });

  it('should return false', function() {
    expect(errorFilter(new Error('unknown error'))).to.be.false;
  });
});
