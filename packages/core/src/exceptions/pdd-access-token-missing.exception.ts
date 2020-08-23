import { PddBaseException } from './pdd-base.exception';

export class PddAccessTokenMissingException extends PddBaseException {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, PddAccessTokenMissingException.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
