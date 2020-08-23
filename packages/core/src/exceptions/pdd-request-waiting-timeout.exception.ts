import { PddBaseException } from './pdd-base.exception';

/**
 * 拼多多调用等待超时
 */
export class PddRequestWaitingTimeoutException extends PddBaseException {
  constructor(api: string, waiting: number, msg = '') {
    super(`api name:${api} has been waiting ${waiting}ms, but has now choice to call pdd api. ${msg}`);
    Object.setPrototypeOf(this, PddRequestWaitingTimeoutException.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
