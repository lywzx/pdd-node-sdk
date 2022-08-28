export const PDD_FDS_WAYBILL_RETURN_SLAVE = 'pdd.fds.waybill.return.slave';
export const PDD_FDS_WAYBILL_RETURN_SLAVE_RESPONSE_KEY = 'pdd_fds_waybill_return_slave_response';

/**
 * 接口名称：电子面单回传额外运单号
 * 接口标识：pdd.fds.waybill.return.slave
 * 接口使用场景：1、代发管理支持厂家回传额外运单号给商家
 * 2、商家可以在MMS后台的代发管理查看额外运单号字段
 * 3、1个订单最多支持上传10个额外运单号，额外的从运单号不能包括主运单号
 **/
export interface PddFdsWaybillReturnSlaveRequestInterface {
  /**
   * @description: 回传从运单号请求
   * @type: PddFdsWaybillReturnSlaveRequestRequestInterface
   * @default:
   *
   **/
  request: PddFdsWaybillReturnSlaveRequestRequestInterface;
}

/**
 * @description 回传从运单号请求
 * @default
 * @example
 **/
export interface PddFdsWaybillReturnSlaveRequestRequestInterface {
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
   * @description: 从运单号列表，最多传递十条从运单号
   * @type: string[]
   * @default:
   **/
  waybill_codes?: string[];

  /**
   * @description: 物流公司 Code ，枚举： YTO- 圆通，ZTO-中通，YUNDA-韵达，STO-申通
   * @type: string
   * @default:
   **/
  wp_code: string;
}

/**
 * 接口名称：电子面单回传额外运单号
 * 接口标识：pdd.fds.waybill.return.slave
 * 接口使用场景：1、代发管理支持厂家回传额外运单号给商家
 * 2、商家可以在MMS后台的代发管理查看额外运单号字段
 * 3、1个订单最多支持上传10个额外运单号，额外的从运单号不能包括主运单号
 **/
export interface PddFdsWaybillReturnSlaveResponseInterface {
  /**
   * @description: response
   * @type: PddFdsWaybillReturnSlavePddFdsWaybillReturnSlaveResponseResponseInterface
   * @default:
   *
   **/
  pdd_fds_waybill_return_slave_response: PddFdsWaybillReturnSlavePddFdsWaybillReturnSlaveResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddFdsWaybillReturnSlavePddFdsWaybillReturnSlaveResponseResponseInterface {
  /**
   * @description: 回传结果true：成功  false：失败
   * @type: boolean
   * @default:
   **/
  result: boolean;
}
