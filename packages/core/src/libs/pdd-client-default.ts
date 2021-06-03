import { RetryOptionsInterface } from '../interfaces';
import { PddResponseException } from '../exceptions';
import { pddLog } from '../util/debug';
import axios from 'axios';
import get from 'lodash/get';

/**
 * pdd client中默认重试机制逻辑
 */
export const defaultRetryOptions: RetryOptionsInterface = {
  times: 2,
  interval: (retryCount: number) => retryCount * 1500,
  errorFilter: (error: Error) => {
    pddLog('retry filter error: %s', undefined, error);

    if (error instanceof PddResponseException) {
      const retryAble = error.retryAble();

      pddLog('pdd client default request error, retryAble: %s, error: %s', undefined, retryAble, error);

      return retryAble;
    }

    if (axios.isAxiosError(error)) {
      if (get(error, 'response.status', 0) >= 500) {
        return true;
      }
    }

    return false;
  },
};
