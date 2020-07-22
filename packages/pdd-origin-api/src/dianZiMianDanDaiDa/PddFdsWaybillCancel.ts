export const PDD_FDS_WAYBILL_CANCEL = 'pdd.fds.waybill.cancel';
export const PDD_FDS_WAYBILL_CANCEL_RESPONSE_KEY = 'pdd_fds_waybill_cancel_response';

/**
 * 接口名称：电子面单取消回传
 * 接口标识：pdd.fds.waybill.cancel
 * 接口使用场景：厂家回传完电子面单，需要删除之前上传的电子面单，可以使用该接口取消回传
 **/
export interface PddFdsWaybillCancelRequestInterface {
  /**
   * @description: 入参信息
   * @type: PddFdsWaybillCancelPddFdsWaybillCancelRequestRequestInterface
   * @default:
   *
   **/
  pdd_fds_waybill_cancel_request: PddFdsWaybillCancelPddFdsWaybillCancelRequestRequestInterface;
}

/**
 * @description 入参信息
 * @default
 * @example
 **/
export interface PddFdsWaybillCancelPddFdsWaybillCancelRequestRequestInterface {
  /**
   * @description: 代打店铺id
   * @type: string
   * @default:
   **/
  mall_mask_id: string;

  /**
   * @description: 代打订单号
   * @type: string
   * @default:
   **/
  order_mask_sn: string;

  /**
   * @description: 面单号
   * @type: string
   * @default:
   **/
  waybill_code: string;

  /**
   * @description: 物流公司 Code ，枚举： YTO- 圆通，ZTO-中通，YUNDA-韵达，STO-申通
   * @type: string
   * @default:
   **/
  wp_code: string;
}

/**
 * 接口名称：电子面单取消回传
 * 接口标识：pdd.fds.waybill.cancel
 * 接口使用场景：厂家回传完电子面单，需要删除之前上传的电子面单，可以使用该接口取消回传
 **/
export interface PddFdsWaybillCancelResponseInterface {
  /**
   * @description: response
   * @type: PddFdsWaybillCancelPddFdsWaybillCancelResponseResponseInterface
   * @default:
   *
   **/
  pdd_fds_waybill_cancel_response: PddFdsWaybillCancelPddFdsWaybillCancelResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddFdsWaybillCancelPddFdsWaybillCancelResponseResponseInterface {
  /**
   * @description: 取消回传结果true:成功false：失败
   * @type: boolean
   * @default:
   **/
  return_result: boolean;
}
