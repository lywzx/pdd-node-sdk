import { PddBaseException } from './pdd-base.exception';

/**
 * 调用API接口时，检测无当前接口权限时
 */
export class PddApiPermissionDenyException extends PddBaseException {
  constructor(mailId: string | number, api: string) {
    super(`${mailId} visit ${api} permission deny!`);
    Object.setPrototypeOf(this, PddApiPermissionDenyException.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.name = PddApiPermissionDenyException.name;
  }
}
