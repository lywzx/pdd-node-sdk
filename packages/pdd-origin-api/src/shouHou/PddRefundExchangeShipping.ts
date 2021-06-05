export const PDD_REFUND_EXCHANGE_SHIPPING = 'pdd.refund.exchange.shipping';

/**
 * 接口名称：商家换货发货
 * 接口标识：pdd.refund.exchange.shipping
 * 接口使用场景：商家换货发货
 **/
export interface PddRefundExchangeShippingRequestInterface {
  /**
   * @description: request
   * @type: PddRefundExchangeShippingRequestRequestInterface
   * @default:
   *
   **/
  request: PddRefundExchangeShippingRequestRequestInterface;
}

/**
 * @description request
 * @default
 * @example
 **/
export interface PddRefundExchangeShippingRequestRequestInterface {
  /**
   * @description: 售后id
   * @type: string | number
   * @default:
   **/
  after_sales_id: string | number;

  /**
   * @description: 订单编号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 物流公司id
   * @type: number
   * @default:
   **/
  shipping_id: number;

  /**
   * @description: 物流公司名称
   * @type: string
   * @default:
   **/
  shipping_name: string;

  /**
   * @description: 换货物流单号
   * @type: string
   * @default:
   **/
  tracking_number: string;
}

/**
 * 接口名称：商家换货发货
 * 接口标识：pdd.refund.exchange.shipping
 * 接口使用场景：商家换货发货
 **/
export interface PddRefundExchangeShippingResponseInterface {
  /**
   * @description:
   * @type: PddRefundExchangeShippingResponseResponseInterface
   * @default:
   *
   **/
  response: PddRefundExchangeShippingResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddRefundExchangeShippingResponseResponseInterface {
  /**
   * @description:
   * @type: PddRefundExchangeShippingResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddRefundExchangeShippingResponseResultResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddRefundExchangeShippingResponseResultResponseInterface {
  /**
   * @description:
   * @type: string | number
   * @default:
   **/
  after_sales_id: string | number;

  /**
   * @description: 操作结果信息。如果失败，会返回失败原因
   * @type: string
   * @default:
   **/
  message: string;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 是否操作成功
   * @type: boolean
   * @default:
   **/
  succ: boolean;
}
