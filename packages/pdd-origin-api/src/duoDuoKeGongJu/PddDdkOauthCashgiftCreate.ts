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
   * @description: 礼金券面额，单位为分，创建固定面额礼金券必填（创建灵活面额礼金券时，券面额 = 商品券后价 - 期望礼金券后价）
   * @type: number
   * @default:
   **/
  coupon_amount?: number;

  /**
   * @description: 满减门槛，单位为分。满减门槛至少需为礼金券面额的2倍，仅对固定面额礼金券生效。
   * @type: number
   * @default:
   **/
  coupon_threshold_amount?: number;

  /**
   * @description: 活动持续时间，validity_time_type为 1 时必填。相对时间类型为天级时，最大值为30，即领取后30天内有效；相对时间类型为小时级时，最大值为24，即领取后24小时内有效；相对时间类型为分钟级时，则最大值为60，即领取后60分钟内有效。
   * @type: number
   * @default:
   **/
  duration?: number;

  /**
   * @description: 期望礼金券后价，单位为分，最小值为1。创建灵活券 (generate_flexible_coupon为true) 时必填
   * @type: number
   * @default:
   **/
  except_amount?: number;

  /**
   * @description: 领券是否过风控，默认true为过风控。
   * @type: boolean
   * @default:
   **/
  fetch_risk_check?: boolean;

  /**
   * @description: 收益保护开关开启(rate_decrease_monitor = true)时必填。0-监控项发生降低；1-监控项低于礼金面额，默认为0。
   * @type: number
   * @default:
   **/
  freeze_condition?: number;

  /**
   * @description: 收益保护开关开启(rate_decrease_monitor = true)时必填。0-佣金；1-补贴；2-佣金+补贴，默认为0。
   * @type: number
   * @default:
   **/
  freeze_watch_type?: number;

  /**
   * @description: 是否为灵活面额礼金券，默认false为固定面额礼金券
   * @type: boolean
   * @default:
   **/
  generate_flexible_coupon?: boolean;

  /**
   * @description: 是否开启全场景推广，默认false不开启全场景推广，仅支持固定面额且限定商品的礼金活动。
   * @type: boolean
   * @default:
   **/
  generate_global?: boolean;

  /**
   * @description: 商品goodsSign列表，例如：["c9r2omogKFFAc7WBwvbZU1ikIb16_J3CTa8HNN"]，最多可支持传20个商品；若传空，则为不限商品礼金，不支持创建不限商品灵活礼金。goodsSign使用说明：https://jinbao.pinduoduo.com/qa-system?questionId=252
   * @type: string[]
   * @default:
   **/
  goods_sign_list?: string[];

  /**
   * @description: 活动单链接可领券数量，默认无限制，最小值为1。
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
   * @description: 可使用推广位列表，例如：["60005_612"]。(列表中的PID方可推广该礼金)
   * @type: string[]
   * @default:
   **/
  p_id_list?: string[];

  /**
   * @description: 礼金券数量，创建固定面额礼金券必填（创建灵活面额礼金券时，礼金券数量不固定，礼金总预算用完为止）
   * @type: string | number
   * @default:
   **/
  quantity?: string | number;

  /**
   * @description: 收益保护开关，默认false表示关闭，仅支持固定面额且限定商品的礼金活动。开启状态下，系统将根据设置内容进行监控，当监控项满足冻结条件时，系统自动冻结礼金暂停推广，防止资金损失。（可通过多多礼金状态更新接口自行恢复推广）
   * @type: boolean
   * @default:
   **/
  rate_decrease_monitor?: boolean;

  /**
   * @description: 相对时间类型：1-天级；2-小时级；3-分钟级，有效期类型validityTimeType = 1时必填，默认为1。 例如: relative_time_type = 2, duration = 15, 表示领取后15小时内有效。
   * @type: number
   * @default:
   **/
  relative_time_type?: number;

  /**
   * @description: 礼金总预算，单位为分，创建灵活券 (generate_flexible_coupon为true) 时必填。默认情况，总金额 = 礼金券数量 * 礼金券面额
   * @type: string | number
   * @default:
   **/
  total_amount?: string | number;

  /**
   * @description: 单用户可领券数量，可设置范围为1~10张，默认为1张。
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
