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
    /**
     * 52101 当前接口被限流，请稍后重试
     * 52102 当前接口暂时不可用，请稍后重试
     * 52103 服务暂时不可用，请稍后重试
     * 70031 调用过于频繁，请调整调用频率
     */
    return [52101, 52102, 52103, 70031].includes(this.getErrorCode());
  }

  /**
   * access token 已经过期
   */
  public accessTokenNeedRefresh() {
    // 10019 access_token已过期
    return [10019].includes(this.getErrorCode());
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
