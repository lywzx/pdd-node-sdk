import { get } from 'lodash';

export class PddException extends Error {
  constructor(public errObj: PddErrorResponse) {
    super(JSON.stringify(errObj));
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
