export const PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY = 'pdd.virtual.mobile.charge.notify';
export const PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY_RESPONSE_KEY = 'mobile_charge_notify_response';

/**
 * 接口名称：虚拟类目发货通知接口
 * 接口标识：pdd.virtual.mobile.charge.notify
 * 接口使用场景：虚拟类目发货的接口【仅供话费/流量直冲商家自研对接进行话费流量发货使用】
 **/
export interface PddVirtualMobileChargeNotifyRequestInterface {
  /**
   * @description: 直充附加信息对象数组
   * @type: PddVirtualMobileChargeNotifyChargeCertiRequestInterface[]
   * @default:
   *
   **/
  charge_certi: PddVirtualMobileChargeNotifyChargeCertiRequestInterface[];

  /**
   * @description: 拼多多订单编码
   * @type: string
   * @default:
   **/
  order_sn?: string;

  /**
   * @description: 11122dafa 外部系统订单编码
   * @type: string
   * @default:
   **/
  outer_order_sn?: string;

  /**
   * @description: 虚拟系统充值结果，SUCCESS-充值成功，FAIL-充值失败
   * @type: string
   * @default:
   **/
  status?: string;
}

/**
 * @description 直充附加信息对象数组
 * @default
 * @example
 **/
export interface PddVirtualMobileChargeNotifyChargeCertiRequestInterface {
  /**
   * @description: 直充充值金额（单位：分）
   * @type: string
   * @default:
   **/
  charge_certi_amount: string;

  /**
   * @description: 直充充值成功时间 （yyyy-MM-dd HH:mm:ss格式）
   * @type: string
   * @default:
   **/
  charge_certi_date: string;

  /**
   * @description: 直充充值号码
   * @type: string
   * @default:
   **/
  charge_certi_mobile: string;

  /**
   * @description: 充值卡号尾号
   * @type: string
   * @default:
   **/
  charge_certi_mobile_tail: string;

  /**
   * @description: 直充充值单号
   * @type: string
   * @default:
   **/
  charge_certi_order_sn: string;

  /**
   * @description: 直充短信原文
   * @type: string
   * @default:
   **/
  charge_certi_text: string;

  /**
   * @description: 代理商(渠道)编号
   * @type: string
   * @default:
   **/
  merchant_outer_id: string;
}

/**
 * 接口名称：虚拟类目发货通知接口
 * 接口标识：pdd.virtual.mobile.charge.notify
 * 接口使用场景：虚拟类目发货的接口【仅供话费/流量直冲商家自研对接进行话费流量发货使用】
 **/
export interface PddVirtualMobileChargeNotifyResponseInterface {
  /**
   * @description: 虚拟充值回调通知响应对象
   * @type: PddVirtualMobileChargeNotifyMobileChargeNotifyResponseResponseInterface
   * @default:
   *
   **/
  mobile_charge_notify_response: PddVirtualMobileChargeNotifyMobileChargeNotifyResponseResponseInterface;
}

/**
 * @description 虚拟充值回调通知响应对象
 * @default
 * @example
 **/
export interface PddVirtualMobileChargeNotifyMobileChargeNotifyResponseResponseInterface {
  /**
   * @description: 回调通知结果，true-成功，false-失败
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
