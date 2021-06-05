export const PDD_REFUND_RETURNGOODS_AGREE = 'pdd.refund.returngoods.agree';

/**
 * 接口名称：商家售后同意退货
 * 接口标识：pdd.refund.returngoods.agree
 * 接口使用场景：开放平台商家同意退货
 **/
export interface PddRefundReturngoodsAgreeRequestInterface {
  /**
   * @description: 请求入参
   * @type: PddRefundReturngoodsAgreeRequestRequestInterface
   * @default:
   *
   **/
  request: PddRefundReturngoodsAgreeRequestRequestInterface;
}

/**
 * @description 请求入参
 * @default
 * @example
 **/
export interface PddRefundReturngoodsAgreeRequestRequestInterface {
  /**
   * @description: 售后id
   * @type: string | number
   * @default:
   **/
  after_sales_id: string | number;

  /**
   * @description: 给用户留言
   * @type: string
   * @default:
   **/
  operate_desc: string;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 退货地址列表中已有的退货地址id
   * @type: string
   * @default:
   **/
  return_address_id: string;
}

/**
 * 接口名称：商家售后同意退货
 * 接口标识：pdd.refund.returngoods.agree
 * 接口使用场景：开放平台商家同意退货
 **/
export interface PddRefundReturngoodsAgreeResponseInterface {
  /**
   * @description: 返回结果
   * @type: PddRefundReturngoodsAgreeResponseResponseInterface
   * @default:
   *
   **/
  response: PddRefundReturngoodsAgreeResponseResponseInterface;
}

/**
 * @description 返回结果
 * @default
 * @example
 **/
export interface PddRefundReturngoodsAgreeResponseResponseInterface {
  /**
   * @description: 接口调用错误编码
   * @type: number
   * @default:
   **/
  error_code: number;

  /**
   * @description: 接口调用错误描述
   * @type: string
   * @default:
   **/
  error_msg: string;

  /**
   * @description: 返回内容
   * @type: PddRefundReturngoodsAgreeResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddRefundReturngoodsAgreeResponseResultResponseInterface;

  /**
   * @description: 接口是否调用成功
   * @type: boolean
   * @default:
   **/
  success: boolean;
}

/**
 * @description 返回内容
 * @default
 * @example
 **/
export interface PddRefundReturngoodsAgreeResponseResultResponseInterface {
  /**
   * @description: 售后id
   * @type: string | number
   * @default:
   **/
  after_sales_id: string | number;

  /**
   * @description: 退货是否成功描述
   * @type: string
   * @default:
   **/
  message: string;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 退货是否成功
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
