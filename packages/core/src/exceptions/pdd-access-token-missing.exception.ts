import { PddBaseException } from './pdd-base.exception';
import { bindErrorConstructor } from '../util';

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
    bindErrorConstructor(this, PddAccessTokenMissingException);
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
