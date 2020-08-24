import { RetryOptionsInterface } from '../interfaces';
import { PddResponseException } from '../exceptions';
import { pddLog } from '../util/debug';

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
    return false;
  },
};
