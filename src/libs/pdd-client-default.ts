import { RetryOptionsInterface } from '../interfaces';
import { PddException } from '../exceptions';

export const defaultRetryOptions: RetryOptionsInterface = {
  times: 2,
  interval: (retryCount: number) => retryCount * 1500,
  errorFilter: (error: Error) => {
    if (error instanceof PddException) {
      return error.retryAble();
    }
    return true;
  },
};
