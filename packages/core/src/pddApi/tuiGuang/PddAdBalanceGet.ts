export const PDD_AD_BALANCE_GET = 'pdd.ad.balance.get';
export const PDD_AD_BALANCE_GET_RESPONSE_KEY = 'ad_balance_get_response';

/**
 * 接口名称：获取拼多多推广账户余额
 * 接口标识：pdd.ad.balance.get
 * 接口使用场景：获取拼多多推广账户余额，可获得现金余额和红包余额数据
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddAdBalanceGetRequestInterface {}

/**
 * 接口名称：获取拼多多推广账户余额
 * 接口标识：pdd.ad.balance.get
 * 接口使用场景：获取拼多多推广账户余额，可获得现金余额和红包余额数据
 **/
export interface PddAdBalanceGetResponseInterface {
  /**
   * @description: response
   * @type: PddAdBalanceGetAdBalanceGetResponseResponseInterface
   * @default:
   *
   **/
  ad_balance_get_response: PddAdBalanceGetAdBalanceGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddAdBalanceGetAdBalanceGetResponseResponseInterface {
  /**
   * @description: 账户列表
   * @type: PddAdBalanceGetAdBalanceGetResponseAccountsBalanceResponseInterface[]
   * @default:
   *
   **/
  accounts_balance: PddAdBalanceGetAdBalanceGetResponseAccountsBalanceResponseInterface[];

  /**
   * @description: 总余额，单位厘
   * @type: string | number
   * @default:
   **/
  advertiser_balance: string | number;

  /**
   * @description: 店铺id
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;
}

/**
 * @description 账户列表
 * @default
 * @example
 **/
export interface PddAdBalanceGetAdBalanceGetResponseAccountsBalanceResponseInterface {
  /**
   * @description: 1 - 现金 2 - 红包
   * @type: number
   * @default:
   **/
  account_type: number;

  /**
   * @description: 余额
   * @type: string | number
   * @default:
   **/
  balance: string | number;

  /**
   * @description: 店铺id
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;

  /**
   * @description: 可消费余额
   * @type: string | number
   * @default:
   **/
  spendable_balance: string | number;
}
