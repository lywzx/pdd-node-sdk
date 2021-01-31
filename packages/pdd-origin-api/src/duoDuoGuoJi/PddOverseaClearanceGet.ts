export const PDD_OVERSEA_CLEARANCE_GET = 'pdd.oversea.clearance.get';
export const PDD_OVERSEA_CLEARANCE_GET_RESPONSE_KEY = 'clearance_response';

/**
 * 接口名称：获取多多国际清关材料
 * 接口标识：pdd.oversea.clearance.get
 * 接口使用场景：获取多多国际清关材料（按订单维度获取）
 **/
export interface PddOverseaClearanceGetRequestInterface {
  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;
}

/**
 * 接口名称：获取多多国际清关材料
 * 接口标识：pdd.oversea.clearance.get
 * 接口使用场景：获取多多国际清关材料（按订单维度获取）
 **/
export interface PddOverseaClearanceGetResponseInterface {
  /**
   * @description:
   * @type: PddOverseaClearanceGetClearanceResponseResponseInterface
   * @default:
   *
   **/
  clearance_response: PddOverseaClearanceGetClearanceResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddOverseaClearanceGetClearanceResponseResponseInterface {
  /**
   * @description: 身份证姓名
   * @type: string
   * @default:
   **/
  id_card_name: string;

  /**
   * @description: 身份证号
   * @type: string
   * @default:
   **/
  id_card_no: string;

  /**
   * @description: 支付申报订单号
   * @type: string
   * @default:
   **/
  inner_transaction_id: string;

  /**
   * @description: 支付单号
   * @type: string
   * @default:
   **/
  pay_no: string;

  /**
   * @description: 支付方式，枚举值：WEIXIN,ALIPAY
   * @type: string
   * @default:
   **/
  pay_type: string;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;
}
