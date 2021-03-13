export const PDD_REFUND_LIST_INCREMENT_GET = 'pdd.refund.list.increment.get';
export const PDD_REFUND_LIST_INCREMENT_GET_RESPONSE_KEY = 'refund_increment_get_response';
export const PDD_REFUND_LIST_INCREMENT_GET_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 60,
    times: 600,
  },
  {
    limiterLevel: 3,
    timeRange: 1,
    times: 12000,
  },
];

/**
 * 接口名称：售后列表接口
 * 接口标识：pdd.refund.list.increment.get
 * 接口使用场景：售后列表增量查询
 **/
export interface PddRefundListIncrementGetRequestInterface {
  /**
   * @description: 必填，售后状态 0：无售后 2：买家申请退款，待商家处理 3：退货退款，待商家处理 4：商家同意退款，退款中 5：平台同意退款，退款中 6：驳回退款，待买家处理 7：已同意退货退款,待用户发货 8：平台处理中 9：平台拒绝退款，退款关闭 10：退款成功 11：买家撤销 12：买家逾期未处理，退款失败 13：买家逾期，超过有效期 14：换货补寄待商家处理 15：换货补寄待用户处理 16：换货补寄成功 17：换货补寄失败 18：换货补寄待用户确认完成 21：待商家同意维修 22：待用户确认发货 24：维修关闭 25：维修成功 27：待用户确认收货 31：已同意拒收退款，待用户拒收 32：补寄待商家发货
   * @type: number
   * @default:
   **/
  after_sales_status: number;

  /**
   * @description: 必填，售后类型 1：全部 2：仅退款 3：退货退款 4：换货 5：缺货补寄
   * @type: number
   * @default:
   **/
  after_sales_type: number;

  /**
   * @description: 必填，最后更新时间结束时间的UNIX时间戳，指格林威治时间 1970 年01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时00 分 00 秒)起至现在的总秒数 PS：开始时间结束时间间距不超过 30 分钟
   * @type: string | number
   * @default:
   **/
  end_updated_at: string | number;

  /**
   * @description: 返回页码 默认 1，页码从 1 开始 PS：当前采用分页返回，数量和页数会一起传，如果不传，则采用 默认值
   * @type: number
   * @default:
   **/
  page?: number;

  /**
   * @description: 返回数量，默认 100。最大 100
   * @type: number
   * @default:
   **/
  page_size?: number;

  /**
   * @description: 必填，最后更新时间开始时间的UNIX时间戳，指格林威治时间 1970 年01月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00分 00 秒)起至现在的总秒数
   * @type: string | number
   * @default:
   **/
  start_updated_at: string | number;
}

/**
 * 接口名称：售后列表接口
 * 接口标识：pdd.refund.list.increment.get
 * 接口使用场景：售后列表增量查询
 **/
export interface PddRefundListIncrementGetResponseInterface {
  /**
   * @description: 售后增量订单列表对象
   * @type: PddRefundListIncrementGetRefundIncrementGetResponseResponseInterface
   * @default:
   *
   **/
  refund_increment_get_response: PddRefundListIncrementGetRefundIncrementGetResponseResponseInterface;
}

/**
 * @description 售后增量订单列表对象
 * @default
 * @example
 **/
export interface PddRefundListIncrementGetRefundIncrementGetResponseResponseInterface {
  /**
   * @description: 售后列表对象
   * @type: PddRefundListIncrementGetRefundIncrementGetResponseRefundListResponseInterface[]
   * @default:
   *
   **/
  refund_list: PddRefundListIncrementGetRefundIncrementGetResponseRefundListResponseInterface[];

  /**
   * @description: 返回的售后订单列表总数
   * @type: number
   * @default:
   **/
  total_count: number;
}

/**
 * @description 售后列表对象
 * @default
 * @example
 **/
export interface PddRefundListIncrementGetRefundIncrementGetResponseRefundListResponseInterface {
  /**
   * @description: 极速退款状态，"1"：有极速退款资格，"2"：极速退款失败, "3" 表示极速退款成功，其他表示非极速退款
   * @type: string
   * @default:
   **/
  speed_refund_status: string;

  /**
   * @description: 售后原因
   * @type: string
   * @default:
   **/
  after_sale_reason: string;

  /**
   * @description: 售后状态 0：无售后 2：买家申请退款，待商家处理 3：退货退款，待商家处理 4：商家同意退款，退款中 5：平台同意退款，退款中 6：驳回退款，待买家处理 7：已同意退货退款,待用户发货 8：平台处理中 9：平台拒绝退款，退款关闭 10：退款成功 11：买家撤销 12：买家逾期未处理，退款失败 13：买家逾期，超过有效期 14：换货补寄待商家处理 15：换货补寄待用户处理 16：换货补寄成功 17：换货补寄失败 18：换货补寄待用户确认完成 21：待商家同意维修 22：待用户确认发货 24：维修关闭 25：维修成功 27：待用户确认收货 31：已同意拒收退款，待用户拒收 32：补寄待商家发货
   * @type: number
   * @default:
   **/
  after_sales_status: number;

  /**
   * @description: 售后类型
   * @type: number
   * @default:
   **/
  after_sales_type: number;

  /**
   * @description: 成团时间
   * @type: string
   * @default:
   **/
  confirm_time: string;

  /**
   * @description: 创建时间
   * @type: string
   * @default:
   **/
  created_time: string;

  /**
   * @description: 订单折扣金额（元）
   * @type: string
   * @default:
   **/
  discount_amount: string;

  /**
   * @description: 商品图片
   * @type: string
   * @default:
   **/
  good_image: string;

  /**
   * @description: 商品编码
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 商品名称
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 商品数量
   * @type: string
   * @default:
   **/
  goods_number: string;

  /**
   * @description: 商品单价
   * @type: string
   * @default:
   **/
  goods_price: string;

  /**
   * @description: 售后编号
   * @type: string | number
   * @default:
   **/
  id: string | number;

  /**
   * @description: 订单金额（元）
   * @type: string
   * @default:
   **/
  order_amount: string;

  /**
   * @description: 订单编号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 商家外部编码（商品）
   * @type: string
   * @default:
   **/
  outer_goods_id: string;

  /**
   * @description: 商家外部编码（sku）
   * @type: string
   * @default:
   **/
  outer_id: string;

  /**
   * @description: 退款金额（元）
   * @type: string
   * @default:
   **/
  refund_amount: string;

  /**
   * @description: 商品规格ID
   * @type: string
   * @default:
   **/
  sku_id: string;

  /**
   * @description: 快递运单号
   * @type: string
   * @default:
   **/
  tracking_number: string;

  /**
   * @description: 更新时间
   * @type: string
   * @default:
   **/
  updated_time: string;

  /**
   * @description: 极速退款标志位 1：极速退款，0：非极速退款
   * @type: number
   * @default:
   **/
  speed_refund_flag: number;

  /**
   * @description: 退货物流公司名称
   * @type: string
   * @default:
   **/
  shipping_name: string;

  /**
   * @description: 0-未勾选 1-消费者选择的收货状态为未收到货 2-消费者选择的收货状态为已收到货
   * @type: string
   * @default:
   **/
  user_shipping_status: string;

  /**
   * @description: 1纠纷退款 0非纠纷退款
   * @type: number
   * @default:
   **/
  dispute_refund_status: number;
}
