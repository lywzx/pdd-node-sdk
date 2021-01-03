export const PDD_LOGISTICS_ISV_TRACE_NOTIFY_SUB = 'pdd.logistics.isv.trace.notify.sub';

export const PDD_LOGISTICS_ISV_TRACE_NOTIFY_SUB_LIMITERS = [
  {
    limiterLevel: 4,
    timeRange: 86400,
    times: 2400000,
  },
];

/**
 * 接口名称：ISV物流轨迹推送消息订阅接口
 * 接口标识：pdd.logistics.isv.trace.notify.sub
 * 接口使用场景：商家在ISV发货成功之后，ISV通过调用订阅接口订阅轨迹推送消息
 **/
export interface PddLogisticsIsvTraceNotifySubRequestInterface {
  /**
   * @description: 快递公司编码
   * @type: string
   * @default:
   **/
  ship_code: string;

  /**
   * @description: 收件人手机
   * @type: string
   * @default:
   **/
  tel: string;

  /**
   * @description: 快递单号
   * @type: string
   * @default:
   **/
  track_no: string;
}

/**
 * 接口名称：ISV物流轨迹推送消息订阅接口
 * 接口标识：pdd.logistics.isv.trace.notify.sub
 * 接口使用场景：商家在ISV发货成功之后，ISV通过调用订阅接口订阅轨迹推送消息
 **/
export interface PddLogisticsIsvTraceNotifySubResponseInterface {
  /**
   * @description: 订阅响应对象
   * @type: PddLogisticsIsvTraceNotifySubLogisticsIsvTraceNotifySubResponseInterface
   * @default:
   *
   **/
  logistics_isv_trace_notify_sub: PddLogisticsIsvTraceNotifySubLogisticsIsvTraceNotifySubResponseInterface;
}

/**
 * @description 订阅响应对象
 * @default
 * @example
 **/
export interface PddLogisticsIsvTraceNotifySubLogisticsIsvTraceNotifySubResponseInterface {
  /**
   * @description: 是否成功，false-失败，true-成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
