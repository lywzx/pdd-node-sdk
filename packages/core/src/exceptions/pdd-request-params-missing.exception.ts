export class PddRequestParamsMissingException extends Error {
  constructor(public field: string, message: string) {
    super(`${field} ${message}`);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.name = this.constructor.name;
  }
}
