import { PddBaseException } from './pdd-base.exception';

/**
 * 未传入access token时的报错信息
 */
export class PddAccessTokenMissingException extends PddBaseException {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, PddAccessTokenMissingException.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.name = PddAccessTokenMissingException.name;
  }
}
