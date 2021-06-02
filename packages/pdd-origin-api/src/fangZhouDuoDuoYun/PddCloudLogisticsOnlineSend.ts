export const PDD_CLOUD_LOGISTICS_ONLINE_SEND = 'pdd.cloud.logistics.online.send';
export const PDD_CLOUD_LOGISTICS_ONLINE_SEND_RESPONSE_KEY = 'logistics_online_send_response';

/**
 * 接口名称：云内发货接口
 * 接口标识：pdd.cloud.logistics.online.send
 * 接口使用场景：服务部署在云内，通过方舟调用云内发货接口
 **/
export interface PddCloudLogisticsOnlineSendRequestInterface {
  /**
   * @description: 发货个性内容，支持imei（手机串号），deviceSn（设备序列号）内容。形如：imei=11,22,3333; 以 “imei=” 开头，以英文分号“;”结尾，中间为手机IMEI串号信息，多个串号以英文逗号 “,”拼接释义：该订单包含三个手机IMEI串号，分别为11、22和3333；其他内容的格式同理。
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

  /**
   * @description: 第三方token
   * @type: string
   * @default:
   **/
  ext_token?: string;

  /**
   * @description: 修改发货模式：不传则默认为首次发货 1=首次发货：用于订单首次发货，仅待发货订单可传入； 2=修改发货：用于订单修改发货，调用成功后将会覆盖原发货信息，仅已发货订单可传入
   * @type: number
   * @default:
   **/
  redelivery_type?: number;
}

/**
 * 接口名称：云内发货接口
 * 接口标识：pdd.cloud.logistics.online.send
 * 接口使用场景：服务部署在云内，通过方舟调用云内发货接口
 **/
export interface PddCloudLogisticsOnlineSendResponseInterface {
  /**
   * @description: 发货通知响应对象
   * @type: PddCloudLogisticsOnlineSendLogisticsOnlineSendResponseResponseInterface
   * @default:
   *
   **/
  logistics_online_send_response: PddCloudLogisticsOnlineSendLogisticsOnlineSendResponseResponseInterface;
}

/**
 * @description 发货通知响应对象
 * @default
 * @example
 **/
export interface PddCloudLogisticsOnlineSendLogisticsOnlineSendResponseResponseInterface {
  /**
   * @description: 是否成功，false-失败，true-成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;

  /**
   * @description: 错误信息
   * @type: string
   * @default:
   **/
  error_msg: string;

  /**
   * @description: 子错误信息
   * @type: string
   * @default:
   **/
  sub_msg: string;

  /**
   * @description: 错误码
   * @type: number
   * @default:
   **/
  sub_code: number;

  /**
   * @description: 子错误码
   * @type: number
   * @default:
   **/
  error_code: number;
}
