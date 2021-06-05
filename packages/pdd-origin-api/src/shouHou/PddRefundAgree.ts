export const PDD_REFUND_AGREE = 'pdd.refund.agree';

/**
 * 接口名称：同意退款
 * 接口标识：pdd.refund.agree
 * 接口使用场景：商家同意退款
 **/
export interface PddRefundAgreeRequestInterface {
  /**
   * @description: request
   * @type: PddRefundAgreeRequestRequestInterface
   * @default:
   *
   **/
  request: PddRefundAgreeRequestRequestInterface;
}

/**
 * @description request
 * @default
 * @example
 **/
export interface PddRefundAgreeRequestRequestInterface {
  /**
   * @description: 售后id
   * @type: string | number
   * @default:
   **/
  after_sales_id: string | number;

  /**
   * @description: 退款备注，商家留言
   * @type: string
   * @default:
   **/
  operate_desc?: string;

  /**
   * @description: 订单编号
   * @type: string
   * @default:
   **/
  order_sn: string;
}

/**
 * 接口名称：同意退款
 * 接口标识：pdd.refund.agree
 * 接口使用场景：商家同意退款
 **/
export interface PddRefundAgreeResponseInterface {
  /**
   * @description:
   * @type: PddRefundAgreeResponseResponseInterface
   * @default:
   *
   **/
  response: PddRefundAgreeResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddRefundAgreeResponseResponseInterface {
  /**
   * @description:
   * @type: PddRefundAgreeResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddRefundAgreeResponseResultResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddRefundAgreeResponseResultResponseInterface {
  /**
   * @description:
   * @type: string | number
   * @default:
   **/
  after_sales_id: string | number;

  /**
   * @description: 退款操作成功      退款操作结果信息。如果退款失败，会返回失败原因
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
   * @description: 接口调用成功
   * @type: boolean
   * @default:
   **/
  succ: boolean;
}
