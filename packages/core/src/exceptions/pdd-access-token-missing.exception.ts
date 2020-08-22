import { PddBaseException } from './pdd-base.exception';

export class PddAccessTokenMissingException extends PddBaseException {
  constructor(message: string) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    Object.setPrototypeOf(this, PddAccessTokenMissingException.prototype);
  }
}
