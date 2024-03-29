import get from 'lodash/get';
import { PddBaseException } from './pdd-base.exception';
import { bindErrorConstructor } from '../util';
import inRange from 'lodash/inRange';

/**
 * 拼多多后台响应错误
 */
export class PddResponseException extends PddBaseException {
  /**
   * 是否忽略自动刷新token
   * null 未更新或更新出错
   * true: 表示被忽略
   * false： 表示更新了token信息
   * @protected
   */
  protected $ignoreTokenRefresh: boolean | null = null;

  constructor(public errObj: PddErrorResponse) {
    super(JSON.stringify(errObj));
    bindErrorConstructor(this, PddResponseException);
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
    const errorCode = this.getErrorCode();
    if (inRange(errorCode, 10000, 40000) || inRange(errorCode, 50000, 52004)) {
      return false;
    }
    return true;
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

  /**
   * 是否忽略token刷新
   * @param ignored
   */
  public ignoreTokenRefresh(): null | boolean;
  public ignoreTokenRefresh(ignored: boolean | null): void;
  public ignoreTokenRefresh(ignored?: boolean | null): void | null | boolean {
    if (typeof ignored === 'undefined') {
      return this.$ignoreTokenRefresh;
    }
    this.$ignoreTokenRefresh = ignored;
  }
}

export type PddErrorResponse = {
  error_msg: string;
  sub_msg?: string;
  sub_code?: null | number;
  error_code: number;
  request_id?: string;
};
