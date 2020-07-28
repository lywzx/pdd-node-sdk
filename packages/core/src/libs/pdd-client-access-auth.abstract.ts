import {
  PddCollectRequestInterface,
  PddCollectShortResponseInterface,
  PddCommonRequestInterface,
} from '@pin-duo-duo/pdd-origin-api';
import { mapValues, template, extend } from 'lodash';
import { PddException } from '../exceptions';
import { PddAccessTokenResponseInterface, PddClientAuthInterface, RetryOptionsInterface } from '../interfaces';
import { checkTypeIsNeedAccessToken } from './pdd-api-check.tools';
import { PddClient } from './pdd-client';

type RetryOptionsType = RetryOptionsInterface | number;
type PddCommonRequestExcludeSomeAttr = Pick<PddCommonRequestInterface, 'access_token'>;

/**
 * 拼多多自动附带access token的类
 */
export abstract class PddClientAccessAuth<T> {
  protected abstract client: PddClient;

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

  /**
   * 自动处理响应中带前缀的数据
   * @param type
   * @param params
   * @param obj
   * @param [retryOptions]
   */
  public async execute<
    K extends keyof PddCollectRequestInterface,
    Req = PddCollectRequestInterface[K],
    Res = PddCollectShortResponseInterface[K]
  >(type: K, params: Req & PddCommonRequestExcludeSomeAttr, obj: T, retryOptions?: RetryOptionsType): Promise<Res> {
    // 这里需要从access token 中获取数据
    let accessToken;
    const nParams = extend({}, params);
    if (checkTypeIsNeedAccessToken(type)) {
      accessToken = await this.getAccessTokenFromCache(obj);
      if (!accessToken) {
        // todo 添加需要access token 的Exception的异常
      } else {
        // eslint-disable-next-line @typescript-eslint/camelcase
        nParams.access_token = (accessToken as PddAccessTokenResponseInterface).access_token;
      }
    }
    return this.client.execute<K, Req, Res>(type, nParams, retryOptions as any).catch(async error => {
      if (error instanceof PddException && error.accessTokenNeedRefresh()) {
        // 处理access token 过期的处理逻辑，
        await this.clearAccessTokenFromCache(obj);
      }
      throw error;
    });
  }
}
