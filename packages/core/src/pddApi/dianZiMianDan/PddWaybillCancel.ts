export const PDD_WAYBILL_CANCEL = 'pdd.waybill.cancel';
export const PDD_WAYBILL_CANCEL_RESPONSE_KEY = 'pdd_waybill_cancel_response';

/**
 * 接口名称：商家取消获取的电子面单号
 * 接口标识：pdd.waybill.cancel
 * 接口使用场景：商家取消获取的电子面单号
 **/
export interface PddWaybillCancelRequestInterface {
  /**
   * @description: 电子面单号
   * @type: string
   * @default:
   **/
  waybill_code?: string;

  /**
   * @description: 快递公司code
   * @type: string
   * @default:
   **/
  wp_code?: string;
}

/**
 * 接口名称：商家取消获取的电子面单号
 * 接口标识：pdd.waybill.cancel
 * 接口使用场景：商家取消获取的电子面单号
 **/
export interface PddWaybillCancelResponseInterface {
  /**
   * @description: Response
   * @type: PddWaybillCancelPddWaybillCancelResponseResponseInterface
   * @default:
   *
   **/
  pdd_waybill_cancel_response: PddWaybillCancelPddWaybillCancelResponseResponseInterface;
}

/**
 * @description Response
 * @default
 * @example
 **/
export interface PddWaybillCancelPddWaybillCancelResponseResponseInterface {
  /**
   * @description: 调用取消是否成功
   * @type: boolean
   * @default:
   **/
  cancel_result: boolean;
}
