import { PddBaseException } from './pdd-base.exception';

/**
 * 未传入access token时的报错信息
 */
export class PddAccessTokenMissingException extends PddBaseException {
  /**
   * 错误消息
   * @param message
   * @param isFromCache
   */
  constructor(message: string, private isFromCache = false) {
    super(message);
    Object.setPrototypeOf(this, PddAccessTokenMissingException.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.name = PddAccessTokenMissingException.name;
  }

  /**
   * 当前错误是否从缓存中产生
   * @param fromCache {boolean}
   */
  public fromCache(): boolean;
  public fromCache(fromCache: boolean): void;
  public fromCache(fromCache?: boolean): boolean | void {
    if (typeof fromCache === 'undefined') {
      return this.isFromCache;
    }
    this.isFromCache = fromCache;
  }
}
