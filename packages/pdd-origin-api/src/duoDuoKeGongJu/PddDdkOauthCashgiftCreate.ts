export const PDD_DDK_OAUTH_CASHGIFT_CREATE = 'pdd.ddk.oauth.cashgift.create';
export const PDD_DDK_OAUTH_CASHGIFT_CREATE_RESPONSE_KEY = 'create_cashgift_response';

/**
 * 接口名称：创建多多礼金
 * 接口标识：pdd.ddk.oauth.cashgift.create
 * 接口使用场景：创建多多礼金
 **/
export interface PddDdkOauthCashgiftCreateRequestInterface {
  /**
   * @description: 券批次领取结束时间。note：此时间为时间戳，指格林威治时间 1970 年01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)起至现在的总秒数
   * @type: string | number
   * @default:
   **/
  acquire_end_time: string | number;

  /**
   * @description: 券批次领取开始时间。note：此时间为时间戳，指格林威治时间 1970 年01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)起至现在的总秒数
   * @type: string | number
   * @default:
   **/
  acquire_start_time: string | number;

  /**
   * @description: 是否自动领券，默认false不自动领券
   * @type: boolean
   * @default:
   **/
  auto_take?: boolean;

  /**
   * @description: 礼金券面额，单位为分
   * @type: number
   * @default:
   **/
  coupon_amount: number;

  /**
   * @description: 活动持续时间，validity_time_type为 1 时必填。
   * @type: number
   * @default:
   **/
  duration?: number;

  /**
   * @description: 领券是否过风控，默认true为过风控。
   * @type: boolean
   * @default:
   **/
  fetch_risk_check?: boolean;

  /**
   * @description: 活动单链接可推广礼金数，默认无限制，最小值为1。
   * @type: string | number
   * @default:
   **/
  link_acquire_limit?: string | number;

  /**
   * @description: 礼金名称
   * @type: string
   * @default:
   **/
  name?: string;

  /**
   * @description: 礼金券数量
   * @type: string | number
   * @default:
   **/
  quantity: string | number;

  /**
   * @description: 商品推广短链
   * @type: string
   * @default:
   **/
  source_url: string;

  /**
   * @description: 单用户可领券数量上限，默认为1。
   * @type: number
   * @default:
   **/
  user_limit?: number;

  /**
   * @description: 券批次使用结束时间, validity_time_type为 2 时必填。note：此时间为时间戳，指格林威治时间 1970 年01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)起至现在的总秒数
   * @type: string | number
   * @default:
   **/
  validity_end_time?: string | number;

  /**
   * @description: 券批次使用开始时间, validity_time_type为 2 时必填。note：此时间为时间戳，指格林威治时间 1970 年01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)起至现在的总秒数
   * @type: string | number
   * @default:
   **/
  validity_start_time?: string | number;

  /**
   * @description: 有效期类型：1-领取后几天内有效；2-固定时间内有效
   * @type: number
   * @default:
   **/
  validity_time_type: number;
}

/**
 * 接口名称：创建多多礼金
 * 接口标识：pdd.ddk.oauth.cashgift.create
 * 接口使用场景：创建多多礼金
 **/
export interface PddDdkOauthCashgiftCreateResponseInterface {
  /**
   * @description: response
   * @type: PddDdkOauthCashgiftCreateCreateCashgiftResponseResponseInterface
   * @default:
   *
   **/
  create_cashgift_response: PddDdkOauthCashgiftCreateCreateCashgiftResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddDdkOauthCashgiftCreateCreateCashgiftResponseResponseInterface {
  /**
   * @description: 礼金ID
   * @type: string | number
   * @default:
   **/
  cash_gift_id: string | number;

  /**
   * @description: 创建结果
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
