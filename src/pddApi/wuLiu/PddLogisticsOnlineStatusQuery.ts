export const PDD_LOGISTICS_ONLINE_STATUS_QUERY = 'PDD_LOGISTICS_ONLINE_STATUS_QUERY';

/**
 * 接口名称：根据订单号查询在线下单状态
 * 接口标识：pdd.logistics.online.status.query
 * 接口使用场景：根据订单号查询在线下单状态
 **/
export interface PddLogisticsOnlineStatusQueryRequestInterface {
  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn?: string;
}

/**
 * 接口名称：根据订单号查询在线下单状态
 * 接口标识：pdd.logistics.online.status.query
 * 接口使用场景：根据订单号查询在线下单状态
 **/
export interface PddLogisticsOnlineStatusQueryResponseInterface {
  /**
   * @description: response
   * @type: PddLogisticsOnlineStatusQueryLogisticsOnlineStatusQueryResponseResponseInterface
   * @default:
   *
   **/
  logistics_online_status_query_response: PddLogisticsOnlineStatusQueryLogisticsOnlineStatusQueryResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddLogisticsOnlineStatusQueryLogisticsOnlineStatusQueryResponseResponseInterface {
  /**
   * @description: 订单状态值对应：1,已下单;2,已接单;3,商家已取消;4,快递公司已拒接;5.揽收成功;6.揽收失败;
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 状态最新操作时间戳;（Integer）
   * @type: string
   * @default:
   **/
  update_time: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_LOGISTICS_ONLINE_STATUS_QUERY]: {
    requestInterface: PddLogisticsOnlineStatusQueryRequestInterface;
    responseInterface: PddLogisticsOnlineStatusQueryResponseInterface;
  };
}
