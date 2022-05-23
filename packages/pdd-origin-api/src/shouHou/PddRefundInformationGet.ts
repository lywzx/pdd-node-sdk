export const PDD_REFUND_INFORMATION_GET = 'pdd.refund.information.get';

export const PDD_REFUND_INFORMATION_GET_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 1,
    times: 1400,
    callSourceType: 0,
  },
];

/**
 * 接口名称：售后单详情接口
 * 接口标识：pdd.refund.information.get
 * 接口使用场景：查询单个售后单详情
 **/
export interface PddRefundInformationGetRequestInterface {
  /**
   * @description: 售后单id
   * @type: string | number
   * @default:
   **/
  after_sales_id?: string | number;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;
}

/**
 * 接口名称：售后单详情接口
 * 接口标识：pdd.refund.information.get
 * 接口使用场景：查询单个售后单详情
 **/
export interface PddRefundInformationGetResponseInterface {
  /**
   * @description: 售后原因
   * @type: string
   * @default:
   **/
  after_sales_reason: string;

  /**
   * @description: 售后状态 0：无售后 2：买家申请退款，待商家处理 3：退货退款，待商家处理 4：商家同意退款，退款中 5：平台同意退款，退款中 6：驳回退款，待买家处理 7：已同意退货退款,待用户发货 8：平台处理中 9：平台拒绝退款，退款关闭 10：退款成功 11：买家撤销 12：买家逾期未处理，退款失败 13：买家逾期，超过有效期 14：换货补寄待商家处理 15：换货补寄待用户处理 16：换货补寄成功 17：换货补寄失败 18：换货补寄待用户确认完成 21：待商家同意维修 22：待用户确认发货 24：维修关闭 25：维修成功 27：待用户确认收货 31：已同意拒收退款，待用户拒收 32：补寄待商家发货
   * @type: number
   * @default:
   **/
  after_sales_status: number;

  /**
   * @description: 售后类型 1-仅退款，2-退货退款，3-换货，4-补寄，5-维修
   * @type: number
   * @default:
   **/
  after_sales_type: number;

  /**
   * @description: 订单成团时间
   * @type: string | number
   * @default:
   **/
  confirm_time: string | number;

  /**
   * @description: 订单折扣金额
   * @type: number
   * @default:
   **/
  discount_amount: number;

  /**
   * @description: 1纠纷退款 0非纠纷退款
   * @type: number
   * @default:
   **/
  dispute_refund_status: number;

  /**
   * @description: 换货详情,售后类型是换货才有值
   * @type: PddRefundInformationGetExchangeShippingDetailResponseInterface
   * @default:
   *
   **/
  exchange_shipping_detail: PddRefundInformationGetExchangeShippingDetailResponseInterface;

  /**
   * @description: 售后逾期时间（只提供待商家处理状态下的，其余的状态为null）
   * @type: string | number
   * @default:
   **/
  expire_time: string | number;

  /**
   * @description: 退货物流单号
   * @type: string
   * @default:
   **/
  express_no: string;

  /**
   * @description: 商品数量
   * @type: number
   * @default:
   **/
  goods_number: number;

  /**
   * @description: 商品单价
   * @type: number
   * @default:
   **/
  goods_price: number;

  /**
   * @description: 售后单id
   * @type: string | number
   * @default:
   **/
  id: string | number;

  /**
   * @description: 用户申请售后上传的图片列表
   * @type: string[]
   * @default:
   **/
  images: string[];

  /**
   * @description: 是否介入 1介入 0未介入
   * @type: string
   * @default:
   **/
  join_or_not: string;

  /**
   * @description: 交易金额
   * @type: string | number
   * @default:
   **/
  order_amount: string | number;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 售后单创建时间（重新申请时间）
   * @type: string | number
   * @default:
   **/
  recreated_at: string | number;

  /**
   * @description: 退款金额
   * @type: number
   * @default:
   **/
  refund_amount: number;

  /**
   * @description: 用户申请输入的描述信息
   * @type: string
   * @default:
   **/
  remark: string;

  /**
   * @description: 退货物流名称
   * @type: string
   * @default:
   **/
  shipping_name: string;

  /**
   * @description: 订单发货状态 0:未发货， 1:已发货（包含：已发货，已揽收）
   * @type: number
   * @default:
   **/
  shipping_status: number;

  /**
   * @description: 商品规格ID
   * @type: string
   * @default:
   **/
  sku_id: string;

  /**
   * @description: 极速退款标志位 1：极速退款，0：非极速退款
   * @type: number
   * @default:
   **/
  speed_refund_flag: number;

  /**
   * @description: 更新时间
   * @type: string
   * @default:
   **/
  updated_time: string;

  /**
   * @description: 0-未勾选 1-消费者选择的收货状态为未收到货 2-消费者选择的收货状态为已收到货
   * @type: string
   * @default:
   **/
  user_shipping_status: string;
}

/**
 * @description 换货详情,售后类型是换货才有值
 * @default
 * @example
 **/
export interface PddRefundInformationGetExchangeShippingDetailResponseInterface {
  /**
   * @description: 消费者回寄的物流id
   * @type: number
   * @default:
   **/
  customer_send_back_ship_id: number;

  /**
   * @description: 消费者回寄的物流单号
   * @type: string
   * @default:
   **/
  customer_send_back_trunk_number: string;

  /**
   * @description: 换货发货的物品名称
   * @type: string
   * @default:
   **/
  exchange_goods_name: string;

  /**
   * @description: 换货发货的物品数量
   * @type: number
   * @default:
   **/
  exchange_goods_number: number;

  /**
   * @description: 换货的物品价格(单位分)
   * @type: string | number
   * @default:
   **/
  exchange_goods_price: string | number;

  /**
   * @description: 商家换货发货的城市（消费者地址）
   * @type: string
   * @default:
   **/
  exchange_receiver_city: string;

  /**
   * @description: 商家换货发货的城市编码（消费者地址）
   * @type: string | number
   * @default:
   **/
  exchange_receiver_city_id: string | number;

  /**
   * @description: 商家换货发货的省份（消费者地址）
   * @type: string
   * @default:
   **/
  exchange_receiver_province: string;

  /**
   * @description: 商家换货发货的省份编码（消费者地址）
   * @type: string | number
   * @default:
   **/
  exchange_receiver_province_id: string | number;

  /**
   * @description: 商家换货发货的区县（消费者地址）
   * @type: string
   * @default:
   **/
  exchange_receiver_town: string;

  /**
   * @description: 商家换货发货的区县编码（消费者地址）
   * @type: string | number
   * @default:
   **/
  exchange_receiver_town_id: string | number;

  /**
   * @description: 商家换货发货的详细地址
   * @type: string
   * @default:
   **/
  merchant_exchange_detail_address: string;

  /**
   * @description: 商家换货发货的收货人手机号
   * @type: string
   * @default:
   **/
  merchant_exchange_detail_phone: string;

  /**
   * @description: 商家换货发货的收货人名字
   * @type: string
   * @default:
   **/
  merchant_exchange_detail_receiver: string;

  /**
   * @description: 商家换货发货的物流id
   * @type: number
   * @default:
   **/
  merchant_exchange_ship_id: number;

  /**
   * @description: 商家换货发货的物流单号
   * @type: string
   * @default:
   **/
  merchant_exchange_trunk_number: string;

  /**
   * @description: 换货商品规格ID
   * @type: string
   * @default:
   **/
  sku_id_exchange: string;

  /**
   * @description: 商家换货发货的详细地址（打码）
   * @type: string
   * @default:
   **/
  merchant_exchange_detail_address_mask: string;

  /**
   * @description: 商家换货发货的收货人手机号（打码）
   * @type: string
   * @default:
   **/
  merchant_exchange_detail_phone_mask: string;

  /**
   * @description: 商家换货发货的收货人名字（打码）
   * @type: string
   * @default:
   **/
  merchant_exchange_detail_receiver_mask: string;
}
