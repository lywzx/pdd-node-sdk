export const PDD_LOGISTICS_ONLINE_SEND = 'PDD_LOGISTICS_ONLINE_SEND';

/**
 * 接口名称：订单发货通知接口
 * 接口标识：pdd.logistics.online.send
 * 接口使用场景：订单发货通知
 **/
export interface PddLogisticsOnlineSendRequestInterface {
  /**
   * @description: 发货个性内容，支持imei（手机串号），deviceSn（设备序列号）内容。形如：imei=11,22,3333; 以 “imei=” 开头，以英文分号“;”结尾，中间为手机IMEI串号信息，多个串号以英文逗号 “,”拼接释义：该订单包含三个手机IMEI串号，分别为11、22和3333；其他内容的格式同理。
   * @type: string
   * @default:
   **/
  feature: string;

  /**
   * @description: 快递公司编号
   * @type: string
   * @default:
   **/
  logistics_id?: string;

  /**
   * @description: 订单号。形如：20150909-452750051
   * @type: string
   * @default:
   **/
  order_sn?: string;

  /**
   * @description: 退货地址的id，不填则取商家默认地址
   * @type: string
   * @default:
   **/
  refund_address_id: string;

  /**
   * @description: 快递单号
   * @type: string
   * @default:
   **/
  tracking_number?: string;
}

/**
 * 接口名称：订单发货通知接口
 * 接口标识：pdd.logistics.online.send
 * 接口使用场景：订单发货通知
 **/
export interface PddLogisticsOnlineSendResponseInterface {
  /**
   * @description: 发货通知响应对象
   * @type: PddLogisticsOnlineSendLogisticsOnlineSendResponseResponseInterface
   * @default:
   *
   **/
  logistics_online_send_response: PddLogisticsOnlineSendLogisticsOnlineSendResponseResponseInterface;
}

/**
 * @description 发货通知响应对象
 * @default
 * @example
 **/
export interface PddLogisticsOnlineSendLogisticsOnlineSendResponseResponseInterface {
  /**
   * @description: 是否成功，false-失败，true-成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_LOGISTICS_ONLINE_SEND]: {
    requestInterface: PddLogisticsOnlineSendRequestInterface;
    responseInterface: PddLogisticsOnlineSendResponseInterface;
  };
}
