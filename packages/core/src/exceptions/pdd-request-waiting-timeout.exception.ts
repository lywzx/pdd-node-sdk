import { PddBaseException } from './pdd-base.exception';
import { bindErrorConstructor } from '../util';

/**
 * 拼多多调用等待超时
 */
export class PddRequestWaitingTimeoutException extends PddBaseException {
  constructor(api: string, waiting: number, msg = '') {
    super(`api name:${api} has been waiting ${waiting}ms, but has now choice to call pdd api. ${msg}`);
    bindErrorConstructor(this, PddRequestWaitingTimeoutException);
  }
}
