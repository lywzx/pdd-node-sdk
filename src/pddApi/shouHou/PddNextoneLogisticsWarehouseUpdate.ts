export const PDD_NEXTONE_LOGISTICS_WAREHOUSE_UPDATE = 'pdd.nextone.logistics.warehouse.update';

/**
 * 接口名称：退货入库
 * 接口标识：pdd.nextone.logistics.warehouse.update
 * 接口使用场景：退货入库通知拼多多确认入库成功
 **/
export interface PddNextoneLogisticsWarehouseUpdateRequestInterface {
  /**
   * @description: request
   * @type: PddNextoneLogisticsWarehouseUpdateRequestRequestInterface
   * @default:
   *
   **/
  request?: PddNextoneLogisticsWarehouseUpdateRequestRequestInterface;
}

/**
 * @description request
 * @default
 * @example
 **/
export interface PddNextoneLogisticsWarehouseUpdateRequestRequestInterface {
  /**
   * @description: 售后id
   * @type: string | number
   * @default:
   **/
  after_sales_id?: string | number;

  /**
   * @description: 操作时间
   * @type: void
   * @default:
   **/
  operate_time?: void;

  /**
   * @description: order_sn
   * @type: string
   * @default:
   **/
  order_sn?: string;

  /**
   * @description: 物流公司id
   * @type: number
   * @default:
   **/
  reverse_logistics_id?: number;

  /**
   * @description: 物流单号
   * @type: string
   * @default:
   **/
  reverse_tracking_number?: string;

  /**
   * @description: 退货入库状态 1：成功；2：失败
   * @type: number
   * @default:
   **/
  warehouse_status?: number;
}

/**
 * 接口名称：退货入库
 * 接口标识：pdd.nextone.logistics.warehouse.update
 * 接口使用场景：退货入库通知拼多多确认入库成功
 **/
export interface PddNextoneLogisticsWarehouseUpdateResponseInterface {
  /**
   * @description: response
   * @type: PddNextoneLogisticsWarehouseUpdateResponseResponseInterface
   * @default:
   *
   **/
  response: PddNextoneLogisticsWarehouseUpdateResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddNextoneLogisticsWarehouseUpdateResponseResponseInterface {
  /**
   * @description: result
   * @type: PddNextoneLogisticsWarehouseUpdateResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddNextoneLogisticsWarehouseUpdateResponseResultResponseInterface;
}

/**
 * @description result
 * @default
 * @example
 **/
export interface PddNextoneLogisticsWarehouseUpdateResponseResultResponseInterface {
  /**
   * @description: after_sales_id
   * @type: string | number
   * @default:
   **/
  after_sales_id: string | number;

  /**
   * @description: order_sn
   * @type: string
   * @default:
   **/
  order_sn: string;
}
