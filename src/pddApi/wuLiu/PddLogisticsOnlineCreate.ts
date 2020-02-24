export const PDD_LOGISTICS_ONLINE_CREATE = 'pdd.logistics.online.create';
export const PDD_LOGISTICS_ONLINE_CREATE_RESPONSE_KEY = 'logistics_online_create_response';

/**
 * 接口名称：在线下单订单下发接口
 * 接口标识：pdd.logistics.online.create
 * 接口使用场景：在线下单订单下发
 **/
export interface PddLogisticsOnlineCreateRequestInterface {
  /**
   * @description: 快递单号
   * @type: string
   * @default:
   **/
  tracking_number: string;

  /**
   * @description: 物流公司id
   * @type: number
   * @default:
   **/
  shipping_id?: number;

  /**
   * @description: refund_address_id 通过pdd.refund.address.list.get 这个接口获取
   * @type: string
   * @default:
   **/
  return_id?: string;

  /**
   * @description: 发货人电话
   * @type: string
   * @default:
   **/
  delivery_phone?: string;

  /**
   * @description: 发货人姓名
   * @type: string
   * @default:
   **/
  delivery_name?: string;

  /**
   * @description: 发货人地址
   * @type: string
   * @default:
   **/
  delivery_address?: string;

  /**
   * @description: 发货人地址id
   * @type: string
   * @default:
   **/
  delivery_id?: string;

  /**
   * @description: 订单编号
   * @type: string
   * @default:
   **/
  order_sn?: string;
}

/**
 * 接口名称：在线下单订单下发接口
 * 接口标识：pdd.logistics.online.create
 * 接口使用场景：在线下单订单下发
 **/
export interface PddLogisticsOnlineCreateResponseInterface {
  /**
   * @description: response
   * @type: PddLogisticsOnlineCreateLogisticsOnlineCreateResponseResponseInterface
   * @default:
   *
   **/
  logistics_online_create_response: PddLogisticsOnlineCreateLogisticsOnlineCreateResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddLogisticsOnlineCreateLogisticsOnlineCreateResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
