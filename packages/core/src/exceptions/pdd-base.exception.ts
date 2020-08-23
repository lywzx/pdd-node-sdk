/**
 * pdd base exception
 */
export class PddBaseException extends Error {
  constructor(m: string) {
    super(m);
    Object.setPrototypeOf(this, PddBaseException.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
