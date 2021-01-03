export const PDD_DDK_CASHGIFT_DATA_QUERY = 'pdd.ddk.cashgift.data.query';
export const PDD_DDK_CASHGIFT_DATA_QUERY_RESPONSE_KEY = 'cashgift_data_response';

/**
 * 接口名称：查询多多礼金效果数据
 * 接口标识：pdd.ddk.cashgift.data.query
 * 接口使用场景：查询多多礼金效果数据
 **/
export interface PddDdkCashgiftDataQueryRequestInterface {
  /**
   * @description: 礼金创建结束时间。note：此时间为时间戳，指格林威治时间 1970 年01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)起至现在的总秒数
   * @type: string | number
   * @default:
   **/
  end_time: string | number;

  /**
   * @description: 分页数
   * @type: number
   * @default:
   **/
  page?: number;

  /**
   * @description: 每页结果数
   * @type: number
   * @default:
   **/
  page_size?: number;

  /**
   * @description: 礼金创建起始时间。note：此时间为时间戳，指格林威治时间 1970 年01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)起至现在的总秒数
   * @type: string | number
   * @default:
   **/
  start_time: string | number;
}

/**
 * 接口名称：查询多多礼金效果数据
 * 接口标识：pdd.ddk.cashgift.data.query
 * 接口使用场景：查询多多礼金效果数据
 **/
export interface PddDdkCashgiftDataQueryResponseInterface {
  /**
   * @description: response
   * @type: PddDdkCashgiftDataQueryCashgiftDataResponseResponseInterface
   * @default:
   *
   **/
  cashgift_data_response: PddDdkCashgiftDataQueryCashgiftDataResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddDdkCashgiftDataQueryCashgiftDataResponseResponseInterface {
  /**
   * @description: 多多礼金数据列表
   * @type: PddDdkCashgiftDataQueryCashgiftDataResponseListResponseInterface[]
   * @default:
   *
   **/
  list: PddDdkCashgiftDataQueryCashgiftDataResponseListResponseInterface[];

  /**
   * @description: 请求到的结果数
   * @type: number
   * @default:
   **/
  total: number;
}

/**
 * @description 多多礼金数据列表
 * @default
 * @example
 **/
export interface PddDdkCashgiftDataQueryCashgiftDataResponseListResponseInterface {
  /**
   * @description: 礼金券创建总金额
   * @type: string | number
   * @default:
   **/
  amount: string | number;

  /**
   * @description: 礼金ID
   * @type: string | number
   * @default:
   **/
  cash_gift_id: string | number;

  /**
   * @description: 礼金名称
   * @type: string
   * @default:
   **/
  cash_gift_name: string;

  /**
   * @description: 已领取礼金券总金额
   * @type: string | number
   * @default:
   **/
  fetch_amount: string | number;

  /**
   * @description: 已领取礼金券数量
   * @type: number
   * @default:
   **/
  fetch_quantity: number;

  /**
   * @description: 礼金订单使用的券总金额
   * @type: string | number
   * @default:
   **/
  order_coupon_amount: string | number;

  /**
   * @description: 礼金订单产生的总GMV
   * @type: string | number
   * @default:
   **/
  order_gmv: string | number;

  /**
   * @description: 礼金订单数量
   * @type: number
   * @default:
   **/
  order_quantity: number;

  /**
   * @description: 礼金订单预估佣金
   * @type: string | number
   * @default:
   **/
  pre_promotion_amount: string | number;

  /**
   * @description: 礼金券创建总数量
   * @type: number
   * @default:
   **/
  quantity: number;

  /**
   * @description: 退回礼金券总金额
   * @type: string | number
   * @default:
   **/
  refund_amount: string | number;

  /**
   * @description: 退回礼金券数量
   * @type: number
   * @default:
   **/
  refund_quantity: number;

  /**
   * @description: 礼金状态：1-未生效；2-生效中；3-已过期；4-活动中止（用户主动停止）；5-活动中止（佣金降低）；6-活动中止（推广活动异常）
   * @type: number
   * @default:
   **/
  status: number;
}
