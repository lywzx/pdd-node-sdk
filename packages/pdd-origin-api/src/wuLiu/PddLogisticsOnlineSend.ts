export const PDD_LOGISTICS_ONLINE_SEND = 'pdd.logistics.online.send';
export const PDD_LOGISTICS_ONLINE_SEND_RESPONSE_KEY = 'logistics_online_send_response';
export const PDD_LOGISTICS_ONLINE_SEND_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 10,
    times: 30000,
  },
];

/**
 * 接口名称：订单发货通知接口
 * 接口标识：pdd.logistics.online.send
 * 接口使用场景：订单发货通知
 **/
export interface PddLogisticsOnlineSendRequestInterface {
  /**
   * @description: 发货个性内容，支持imei（手机串号），deviceSn（设备序列号），overseaTracing（海淘溯源码id）内容。形如：“imei=识别码1,识别码2;”、“ deviceSn=序列号1,序列号2;”、“overseaTracing=溯源码1,溯源码2;”。以英文逗号“,”分割串号，以英文分号“;”分割不同参数内容。上传时请严格区分imei，deviceSn和overseaTracing，其中overseaTracing（海淘溯源码id）要求海淘商品在支持溯源的情况下必传。错传/漏传将会导致发货失败。
   * @type: string
   * @default:
   **/
  feature?: string;

  /**
   * @description: 快递公司编号
   * @type: string | number
   * @default:
   **/
  logistics_id: string | number;

  /**
   * @description: 订单号。形如：20150909-452750051
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 退货地址的id，不填则取商家默认地址
   * @type: string
   * @default:
   **/
  refund_address_id?: string;

  /**
   * @description: 快递单号
   * @type: string
   * @default:
   **/
  tracking_number: string;
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
