export const PDD_CLOUD_SECURITY_EVENT_TRACKING_BATCH_ORDER = 'pdd.cloud.security.event.tracking.batch.order';

/**
 * 接口名称：多多云ISV用户订单事件批量上报
 * 接口标识：pdd.cloud.security.event.tracking.batch.order
 * 接口使用场景：用于ISV用户在多多云内订单访问、订单流出事件批量上报
 **/
export interface PddCloudSecurityEventTrackingBatchOrderRequestInterface {
  /**
   * @description: 订单事件类型 2:订单访问事件, 3:订单流出事件.
   * @type: number
   * @default: 2
   **/
  eventType: number;

  /**
   * @description: 订单事件列表
   * @type: PddCloudSecurityEventTrackingBatchOrderOrderEventsRequestInterface[]
   * @default:
   *
   **/
  orderEvents: PddCloudSecurityEventTrackingBatchOrderOrderEventsRequestInterface[];
}

/**
 * @description 订单事件列表
 * @default
 * @example
 **/
export interface PddCloudSecurityEventTrackingBatchOrderOrderEventsRequestInterface {
  /**
   * @description: 店铺ID列表
   * @type: Array<string | number>
   * @default:
   **/
  mallIdList: Array<string | number>;

  /**
   * @description: 针对订单进行的操作(可选)
   * @type: string
   * @default:
   **/
  operation?: string;

  /**
   * @description: 订单ID列表
   * @type: string[]
   * @default:
   **/
  orderList: string[];

  /**
   * @description: cookie中的_pati值
   * @type: string
   * @default:
   **/
  pati: string;

  /**
   * @description: 订单流出地址(订单事件类型为3:订单流出事件 则此项必填)
   * @type: string
   * @default:
   **/
  sendTo?: string;

  /**
   * @description: 事件时间戳
   * @type: string | number
   * @default:
   **/
  timestamp: string | number;

  /**
   * @description: ISV用户为了获取订单而请求的ISV系统里的URL
   * @type: string
   * @default:
   **/
  url: string;

  /**
   * @description: 用户唯一标识
   * @type: string
   * @default:
   **/
  userId?: string;

  /**
   * @description: 用户IP
   * @type: string
   * @default:
   **/
  userIp?: string;

  /**
   * @description: 涉及到的敏感字段列表。 1->虚拟卡密, 2->虚拟卡号,3->支付商品ID 4->支付单号 5->收件人, 6->收件人手机号，7->收件人完整地址 8->收件人详细地址, 9->快递单号, 10->身份证号, 11->身份证姓名
   * @type: number[]
   * @default:
   **/
  sensitiveFieldEnumList?: number[];

  /**
   * @description: 是否是加密访问或者加密流出
   * @type: boolean
   * @default:
   **/
  isEncrypt?: boolean;
}

/**
 * 接口名称：多多云ISV用户订单事件批量上报
 * 接口标识：pdd.cloud.security.event.tracking.batch.order
 * 接口使用场景：用于ISV用户在多多云内订单访问、订单流出事件批量上报
 **/
export interface PddCloudSecurityEventTrackingBatchOrderResponseInterface {
  /**
   * @description:
   * @type: PddCloudSecurityEventTrackingBatchOrderResponseResponseInterface
   * @default:
   *
   **/
  response: PddCloudSecurityEventTrackingBatchOrderResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddCloudSecurityEventTrackingBatchOrderResponseResponseInterface {
  /**
   * @description:
   * @type: number
   * @default:
   **/
  errorCode: number;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  errorMessage: string;

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
