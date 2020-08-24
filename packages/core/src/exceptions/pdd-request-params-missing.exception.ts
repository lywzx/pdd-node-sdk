import { PddBaseException } from './pdd-base.exception';

/**
 * 请求参数不完整报错信息
 */
export class PddRequestParamsMissingException extends PddBaseException {
  constructor(public field: string, message: string) {
    super(`${field} ${message}`);
    Object.setPrototypeOf(this, PddRequestParamsMissingException.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.name = PddRequestParamsMissingException.name;
  }
}
