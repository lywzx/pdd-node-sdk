import { PddCommonRequestInterface } from '@pin-duo-duo/pdd-origin-api';
import mapValues from 'lodash/mapValues';
import template from 'lodash/template';
import { PddAccessTokenResponseInterface, PddClientAuthInterface, RetryOptionsInterface } from '../interfaces';

type RetryOptionsType = RetryOptionsInterface | number;
type PddCommonRequestExcludeSomeAttr = Pick<PddCommonRequestInterface, 'access_token'>;

/**
 * 拼多多自动附带access token的类
 */
export abstract class PddClientAccessAuth<T> {
  protected functionAlOptions: {
    [s: string]: (obj?: any) => string;
  };

  constructor(options: PddClientAuthInterface = { saveAccessTokenTemplate: 'pdd:client:<% =shopId %>' }) {
    this.functionAlOptions = mapValues(options, (tpl: string) => template(tpl));
  }

  /**
   * 生成存储access token的字符串
   * @param obj
   */
  public generateAccessTokenKey(obj?: T) {
    return this.functionAlOptions.saveAccessTokenTemplate(obj);
  }

  /**
   * 获取当前用户的access token
   * @param obj
   */
  public abstract getAccessTokenFromCache(obj: T): Promise<PddAccessTokenResponseInterface | null>;

  /**
   * 设置当前用户的access token
   * @param obj
   * @param token
   * @param expired
   */
  public abstract setAccessTokenToCache(
    obj: T,
    token: PddAccessTokenResponseInterface,
    expired?: number
  ): Promise<void>;

  /**
   * 清除当前用户的access token
   * @param obj
   */
  public abstract clearAccessTokenFromCache(obj: T): Promise<void>;
}
