export const PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_BALANCE = 'pdd.ad.api.advertiser.query.account.balance';

export const PDD_AD_API_ADVERTISER_QUERY_ACCOUNT_BALANCE_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
  },
];

/**
 * 接口名称：查询广告主账户余额
 * 接口标识：pdd.ad.api.advertiser.query.account.balance
 * 接口使用场景：查询广告主账户余额
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddAdApiAdvertiserQueryAccountBalanceRequestInterface {}

/**
 * 接口名称：查询广告主账户余额
 * 接口标识：pdd.ad.api.advertiser.query.account.balance
 * 接口使用场景：查询广告主账户余额
 **/
export interface PddAdApiAdvertiserQueryAccountBalanceResponseInterface {
  /**
   * @description:
   * @type: PddAdApiAdvertiserQueryAccountBalanceResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiAdvertiserQueryAccountBalanceResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiAdvertiserQueryAccountBalanceResponseResponseInterface {
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
   * @type: PddAdApiAdvertiserQueryAccountBalanceResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddAdApiAdvertiserQueryAccountBalanceResponseResultResponseInterface;

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
export interface PddAdApiAdvertiserQueryAccountBalanceResponseResultResponseInterface {
  /**
   * @description: 账户余额明细列表
   * @type: PddAdApiAdvertiserQueryAccountBalanceResponseResultAccountsBalanceResponseInterface[]
   * @default:
   *
   **/
  accountsBalance: PddAdApiAdvertiserQueryAccountBalanceResponseResultAccountsBalanceResponseInterface[];

  /**
   * @description: 总余额，单位厘
   * @type: string | number
   * @default:
   **/
  balance: string | number;

  /**
   * @description: 广告主Id
   * @type: string | number
   * @default:
   **/
  mallId: string | number;
}

/**
 * @description 账户余额明细列表
 * @default
 * @example
 **/
export interface PddAdApiAdvertiserQueryAccountBalanceResponseResultAccountsBalanceResponseInterface {
  /**
   * @description: 账户类型。1表示现金余额，2表示通用红包余额，3表示奖励金余额，7表示聚焦展位CPM专用红包余额，10表示直播专用红包余额。
   * @type: number
   * @default:
   **/
  accountType: number;

  /**
   * @description: 账户余额，单位厘
   * @type: string | number
   * @default:
   **/
  rawBalance: string | number;

  /**
   * @description: 可消费余额，单位厘
   * @type: string | number
   * @default:
   **/
  spendableBalance: string | number;
}
