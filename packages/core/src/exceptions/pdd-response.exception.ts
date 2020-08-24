import get from 'lodash/get';
import { PddBaseException } from './pdd-base.exception';

/**
 * 拼多多后台响应错误
 */
export class PddResponseException extends PddBaseException {
  constructor(public errObj: PddErrorResponse) {
    super(JSON.stringify(errObj));
    Object.setPrototypeOf(this, PddResponseException.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.name = PddResponseException.name;
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
