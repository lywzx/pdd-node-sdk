import get from 'lodash/get';
import { PddBaseException } from './pdd-base.exception';

export class PddException extends PddBaseException {
  constructor(public errObj: PddErrorResponse) {
    super(JSON.stringify(errObj));
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    Object.setPrototypeOf(this, PddException.prototype);
  }

  /**
   * 当前请求，是否有必要进行重试
   */
  public retryAble(): boolean {
    return [70031, 70032, 70033, 70034].includes(this.getErrorCode());
  }

  /**
   * access token 已经过期
   */
  public accessTokenNeedRefresh() {
    return [10019, 10035].includes(this.getErrorCode());
  }

  /**
   * 获取当前的错误码信息
   */
  public getErrorCode(): number {
    return get(this, 'errObj.error_code', -1);
  }
}

export type PddErrorResponse = {
  error_msg: string;
  sub_msg?: string;
  sub_code?: null | number;
  error_code: number;
  request_id?: string;
};
