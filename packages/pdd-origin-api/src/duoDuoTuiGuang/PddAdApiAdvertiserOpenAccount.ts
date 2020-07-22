export const PDD_AD_API_ADVERTISER_OPEN_ACCOUNT = 'pdd.ad.api.advertiser.open.account';

/**
 * 接口名称：广告主开户
 * 接口标识：pdd.ad.api.advertiser.open.account
 * 接口使用场景：广告主开户
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddAdApiAdvertiserOpenAccountRequestInterface {}

/**
 * 接口名称：广告主开户
 * 接口标识：pdd.ad.api.advertiser.open.account
 * 接口使用场景：广告主开户
 **/
export interface PddAdApiAdvertiserOpenAccountResponseInterface {
  /**
   * @description:
   * @type: PddAdApiAdvertiserOpenAccountResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiAdvertiserOpenAccountResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiAdvertiserOpenAccountResponseResponseInterface {
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
   * @description: 开户结果
   * @type: boolean
   * @default:
   **/
  result: boolean;

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
