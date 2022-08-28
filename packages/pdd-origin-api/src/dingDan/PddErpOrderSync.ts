export const PDD_ERP_ORDER_SYNC = 'pdd.erp.order.sync';

export const PDD_ERP_ORDER_SYNC_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 10,
    times: 39000,
    callSourceType: 0,
  },
];

/**
 * 接口名称：erp打单信息同步
 * 接口标识：pdd.erp.order.sync
 * 接口使用场景：erp打单信息同步
 **/
export interface PddErpOrderSyncRequestInterface {
  /**
   * @description: 物流公司编码
   * @type: string | number
   * @default:
   **/
  logistics_id: string | number;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 订单状态：1-已打单
   * @type: number
   * @default:
   **/
  order_state: number;

  /**
   * @description: 运单号
   * @type: string
   * @default:
   **/
  waybill_no: string;
}

/**
 * 接口名称：erp打单信息同步
 * 接口标识：pdd.erp.order.sync
 * 接口使用场景：erp打单信息同步
 **/
export interface PddErpOrderSyncResponseInterface {
  /**
   * @description: 错误代码
   * @type: string | number
   * @default:
   **/
  error_code: string | number;

  /**
   * @description: 错误参数
   * @type: string
   * @default:
   **/
  error_msg: string;

  /**
   * @description: 是否有结果
   * @type: boolean
   * @default:
   **/
  result: boolean;

  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
