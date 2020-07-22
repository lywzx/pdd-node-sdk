import { RetryOptionsInterface } from '../interfaces';
import { PddException } from '../exceptions';
import { pddLog } from '../util/debug';

export const defaultRetryOptions: RetryOptionsInterface = {
  times: 2,
  interval: (retryCount: number) => retryCount * 1500,
  errorFilter: (error: Error) => {
    pddLog('retry filter error: %s', error);

    if (error instanceof PddException) {
      const retryAble = error.retryAble();

      pddLog('pdd client default request error, retryAble: %s, error: %s', retryAble, error);

      return retryAble;
    }
    return false;
  },
};
