export const PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_INFO = 'pdd.ad.api.advertiser.query.account.info';

export const PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_INFO_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
  },
];

/**
 * 接口名称：查询广告开户信息
 * 接口标识：pdd.ad.api.advertiser.query.account.info
 * 接口使用场景：查询广告开户信息
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddAdApiAdvertiserQueryAccountInfoRequestInterface {}

/**
 * 接口名称：查询广告开户信息
 * 接口标识：pdd.ad.api.advertiser.query.account.info
 * 接口使用场景：查询广告开户信息
 **/
export interface PddAdApiAdvertiserQueryAccountInfoResponseInterface {
  /**
   * @description:
   * @type: PddAdApiAdvertiserQueryAccountInfoResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiAdvertiserQueryAccountInfoResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiAdvertiserQueryAccountInfoResponseResponseInterface {
  /**
   * @description:
   * @type: number
   * @default:
   **/
  errorCode: number;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  errorMsg: string;

  /**
   * @description:
   * @type: PddAdApiAdvertiserQueryAccountInfoResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddAdApiAdvertiserQueryAccountInfoResponseResultResponseInterface;

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  success: boolean;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiAdvertiserQueryAccountInfoResponseResultResponseInterface {
  /**
   * @description: 是否已开户
   * @type: boolean
   * @default:
   **/
  hasOpenAccount: boolean;

  /**
   * @description: 是否已缴纳保证金
   * @type: boolean
   * @default:
   **/
  hasPaidDeposit: boolean;

  /**
   * @description: 是否已签署广告协议
   * @type: boolean
   * @default:
   **/
  hasSignProtocol: boolean;

  /**
   * @description: 广告主ID
   * @type: string | number
   * @default:
   **/
  mallId: string | number;
}
