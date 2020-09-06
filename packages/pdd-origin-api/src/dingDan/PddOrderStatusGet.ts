export const PDD_ORDER_STATUS_GET = 'pdd.order.status.get';
export const PDD_ORDER_STATUS_GET_RESPONSE_KEY = 'order_status_get_response';
export const PDD_ORDER_STATUS_GET_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 60,
    times: 2500,
  },
];

/**
 * 接口名称：订单状态
 * 接口标识：pdd.order.status.get
 * 接口使用场景：获取订单的状态（单次最多查50个订单）
 **/
export interface PddOrderStatusGetRequestInterface {
  /**
   * @description: 20150909-452750051,20150909-452750134 用逗号分开
   * @type: string
   * @default:
   **/
  order_sns: string;
}

/**
 * 接口名称：订单状态
 * 接口标识：pdd.order.status.get
 * 接口使用场景：获取订单的状态（单次最多查50个订单）
 **/
export interface PddOrderStatusGetResponseInterface {
  /**
   * @description: response
   * @type: PddOrderStatusGetOrderStatusGetResponseResponseInterface
   * @default:
   *
   **/
  order_status_get_response: PddOrderStatusGetOrderStatusGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddOrderStatusGetOrderStatusGetResponseResponseInterface {
  /**
   * @description: 订单状态列表对象
   * @type: PddOrderStatusGetOrderStatusGetResponseOrderStatusListResponseInterface[]
   * @default:
   *
   **/
  order_status_list: PddOrderStatusGetOrderStatusGetResponseOrderStatusListResponseInterface[];
}

/**
 * @description 订单状态列表对象
 * @default
 * @example
 **/
export interface PddOrderStatusGetOrderStatusGetResponseOrderStatusListResponseInterface {
  /**
   * @description: 订单编号
   * @type: string
   * @default:
   **/
  orderSn: string;

  /**
   * @description: 订单发货状态，1：待发货，2：已发货待签收，3：已签收 0：异常
   * @type: number
   * @default:
   **/
  order_status: number;

  /**
   * @description: 订单售后状态，1：无售后或售后关闭，2：售后处理中，3：退款中，4：退款成功，0：异常
   * @type: number
   * @default:
   **/
  refund_status: number;
}
