export const PDD_OPEN_LOGISTICS_PRE_CHECK = 'pdd.open.logistics.pre.check';
export const PDD_OPEN_LOGISTICS_PRE_CHECK_RESPONSE_KEY = 'logistics_pre_check_response';

/**
 * 接口名称：发货运单预校验接口
 * 接口标识：pdd.open.logistics.pre.check
 * 接口使用场景：订单发货运单预校验接口
 **/
export interface PddOpenLogisticsPreCheckRequestInterface {
  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 快递公司编号
   * @type: string
   * @default:
   **/
  ship_code: string;

  /**
   * @description: 快递单号
   * @type: string
   * @default:
   **/
  tracking_number: string;
}

/**
 * 接口名称：发货运单预校验接口
 * 接口标识：pdd.open.logistics.pre.check
 * 接口使用场景：订单发货运单预校验接口
 **/
export interface PddOpenLogisticsPreCheckResponseInterface {
  /**
   * @description:
   * @type: PddOpenLogisticsPreCheckLogisticsPreCheckResponseResponseInterface
   * @default:
   *
   **/
  logistics_pre_check_response: PddOpenLogisticsPreCheckLogisticsPreCheckResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddOpenLogisticsPreCheckLogisticsPreCheckResponseResponseInterface {
  /**
   * @description: 是否允许发货
   * @type: boolean
   * @default:
   **/
  allowed: boolean;
}
