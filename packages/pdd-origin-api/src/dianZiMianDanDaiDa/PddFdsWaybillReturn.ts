export const PDD_FDS_WAYBILL_RETURN = 'pdd.fds.waybill.return';
export const PDD_FDS_WAYBILL_RETURN_RESPONSE_KEY = 'pdd_fds_waybill_return_response';
export const PDD_FDS_WAYBILL_RETURN_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 60,
    times: 2000,
  },
  {
    limiterLevel: 3,
    timeRange: 1,
    times: 1000,
  },
];

/**
 * 接口名称：电子面单回传
 * 接口标识：pdd.fds.waybill.return
 * 接口使用场景：厂家回传电子面单到商家订单
 **/
export interface PddFdsWaybillReturnRequestInterface {
  /**
   * @description: 入参信息
   * @type: PddFdsWaybillReturnParamFdsWaybillReturnRequestRequestInterface
   * @default:
   *
   **/
  param_fds_waybill_return_request: PddFdsWaybillReturnParamFdsWaybillReturnRequestRequestInterface;
}

/**
 * @description 入参信息
 * @default
 * @example
 **/
export interface PddFdsWaybillReturnParamFdsWaybillReturnRequestRequestInterface {
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
 * 接口名称：电子面单回传
 * 接口标识：pdd.fds.waybill.return
 * 接口使用场景：厂家回传电子面单到商家订单
 **/
export interface PddFdsWaybillReturnResponseInterface {
  /**
   * @description: response
   * @type: PddFdsWaybillReturnPddFdsWaybillReturnResponseResponseInterface
   * @default:
   *
   **/
  pdd_fds_waybill_return_response: PddFdsWaybillReturnPddFdsWaybillReturnResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddFdsWaybillReturnPddFdsWaybillReturnResponseResponseInterface {
  /**
   * @description: 回传结果true:成功false：失败
   * @type: boolean
   * @default:
   **/
  return_result: boolean;
}
