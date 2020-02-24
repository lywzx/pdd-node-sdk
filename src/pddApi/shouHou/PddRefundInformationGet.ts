export const PDD_REFUND_INFORMATION_GET = 'pdd.refund.information.get';

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
  order_sn?: string;
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
   * @description: 售后状态 1：全部 2：买家申请退款，待商家处理 3：退货退款，待商家处理 4：商家同意退款，退款中 5：平台同意退款，退款中 6：驳回退款， 待买家处理 7：已同意退货退款,待用户发货 8：平台处理中 9：平台拒 绝退款，退款关闭 10：退款成功 11：买家撤销 12：买家逾期未处 理，退款失败 13：买家逾期，超过有效期 14 : 换货补寄待商家处理 15:换货补寄待用户处理 16:换货补寄成功 17:换货补寄失败 18:换货补寄待用户确认完成; 31：商家同意拒收退款，待用户拒收；32： 待商家补寄发货
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
   * @description: 订单发货状态 0:未发货， 1:已发货（包含：已发货，已揽收）
   * @type: number
   * @default:
   **/
  shipping_status: number;

  /**
   * @description: 极速退款标志位 1：极速退款，0：非极速退款
   * @type: number
   * @default:
   **/
  speed_refund_flag: number;

  /**
   * @description: 售后逾期时间（只提供待商家处理状态下的，其余的状态为null）
   * @type: string | number
   * @default:
   **/
  expire_time: string | number;
}
