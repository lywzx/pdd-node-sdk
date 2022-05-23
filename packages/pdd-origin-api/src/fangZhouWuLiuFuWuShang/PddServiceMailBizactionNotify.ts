export const PDD_SERVICE_MAIL_BIZACTION_NOTIFY = 'pdd.service.mail.bizaction.notify';

/**
 * 接口名称：寄件实操回告接口
 * 接口标识：pdd.service.mail.bizaction.notify
 * 接口使用场景：寄件实操回告
 **/
export interface PddServiceMailBizactionNotifyRequestInterface {
  /**
   * @description: 请求参数
   * @type: PddServiceMailBizactionNotifyRequestRequestInterface
   * @default:
   *
   **/
  request?: PddServiceMailBizactionNotifyRequestRequestInterface;
}

/**
 * @description 请求参数
 * @default
 * @example
 **/
export interface PddServiceMailBizactionNotifyRequestRequestInterface {
  /**
   * @description: 扩展信息，json格式
   * @type: string
   * @default:
   **/
  attributes?: string;

  /**
   * @description: accept-接单， reject-拒单， dispatch-派单（需要小件员信息）， takePackage-已取件（需要有核重核价信息）， payed-支付完成 postmanCancel-小件员取消， expressCancel-快递公司取消 postMailNo-回传运单
   * @type: string
   * @default:
   **/
  bizAction?: string;

  /**
   * @description: 服务明细描述信息
   * @type: string
   * @default:
   **/
  bizActionDesc?: string;

  /**
   * @description: 取消原因
   * @type: string
   * @default:
   **/
  cancelOrRejectReason?: string;

  /**
   * @description: 核价金额，单位分
   * @type: number
   * @default:
   **/
  checkPrice?: number;

  /**
   * @description: 核重重量，单位克
   * @type: number
   * @default:
   **/
  checkWeight?: number;

  /**
   * @description: 改约结束时间- changeAppoint必填
   * @type: string
   * @default:
   **/
  endTime?: string;

  /**
   * @description: 业务实操时间
   * @type: string
   * @default:
   **/
  executeTime?: string;

  /**
   * @description: 柜子编号
   * @type: string
   * @default:
   **/
  expressBoxCode?: string;

  /**
   * @description: 物流公司编码
   * @type: string
   * @default:
   **/
  expressCode?: string;

  /**
   * @description: 运费金额
   * @type: number
   * @default:
   **/
  freightPrice?: number;

  /**
   * @description: 保费，单位分
   * @type: number
   * @default:
   **/
  insurancePrice?: number;

  /**
   * @description: 报价金额，单位分
   * @type: number
   * @default:
   **/
  insuranceValue?: number;

  /**
   * @description: 运单号
   * @type: string
   * @default:
   **/
  mailNo?: string;

  /**
   * @description: 寄件订单单号
   * @type: string
   * @default:
   **/
  mailOrderSn?: string;

  /**
   * @description: 小件员修改后的收件人信息
   * @type: PddServiceMailBizactionNotifyRequestModifyReceiverInfoRequestInterface
   * @default:
   *
   **/
  modifyReceiverInfo?: PddServiceMailBizactionNotifyRequestModifyReceiverInfoRequestInterface;

  /**
   * @description: 其他费用，单位分
   * @type: number
   * @default:
   **/
  otherPrice?: number;

  /**
   * @description: 包装费用，单位分
   * @type: number
   * @default:
   **/
  packagePrice?: number;

  /**
   * @description: 支付金额，单位分
   * @type: number
   * @default:
   **/
  payPrice?: number;

  /**
   * @description: 取件码
   * @type: string
   * @default:
   **/
  pickCode?: string;

  /**
   * @description: 寄件类型，HOME_DELIVERY-上门取件
   * @type: string
   * @default:
   **/
  postType?: string;

  /**
   * @description: 小件员code
   * @type: string
   * @default:
   **/
  postmanCode?: string;

  /**
   * @description: 小件员姓名
   * @type: string
   * @default:
   **/
  postmanName?: string;

  /**
   * @description: 小件员电话
   * @type: string
   * @default:
   **/
  postmanPhone?: string;

  /**
   * @description: 取消原因code
   * @type: string
   * @default:
   **/
  reasonCode?: string;

  /**
   * @description: 滞留原因
   * @type: string
   * @default:
   **/
  retentionReason?: string;

  /**
   * @description: 改约开始时间- changeAppoint节点必填
   * @type: string
   * @default:
   **/
  startTime?: string;

  /**
   * @description: 最终服务商确认的收件人信息
   * @type: PddServiceMailBizactionNotifyRequestConfirmReceiverInfoRequestInterface
   * @default:
   *
   **/
  confirmReceiverInfo?: PddServiceMailBizactionNotifyRequestConfirmReceiverInfoRequestInterface;

  /**
   * @description: 最终服务商确认的寄件人信息
   * @type: PddServiceMailBizactionNotifyRequestConfirmSenderInfoRequestInterface
   * @default:
   *
   **/
  confirmSenderInfo?: PddServiceMailBizactionNotifyRequestConfirmSenderInfoRequestInterface;
}

/**
 * @description 小件员修改后的收件人信息
 * @default
 * @example
 **/
export interface PddServiceMailBizactionNotifyRequestModifyReceiverInfoRequestInterface {
  /**
   * @description: 详细地址
   * @type: string
   * @default:
   **/
  addrDetail?: string;

  /**
   * @description: 区名称
   * @type: string
   * @default:
   **/
  areaName?: string;

  /**
   * @description: 市名称
   * @type: string
   * @default:
   **/
  cityName?: string;

  /**
   * @description: 联系人姓名
   * @type: string
   * @default:
   **/
  contactName?: string;

  /**
   * @description: 联系人手机号
   * @type: string
   * @default:
   **/
  mobile?: string;

  /**
   * @description: 省名称
   * @type: string
   * @default:
   **/
  provName?: string;

  /**
   * @description: 街道名称
   * @type: string
   * @default:
   **/
  streetName?: string;

  /**
   * @description: 联系人电话号码
   * @type: string
   * @default:
   **/
  telephone?: string;
}

/**
 * @description 最终服务商确认的收件人信息
 * @default
 * @example
 **/
export interface PddServiceMailBizactionNotifyRequestConfirmReceiverInfoRequestInterface {
  /**
   * @description: 联系人姓名
   * @type: string
   * @default:
   **/
  contactName?: string;

  /**
   * @description: 联系人手机号
   * @type: string
   * @default:
   **/
  mobile?: string;

  /**
   * @description: 联系人电话号码
   * @type: string
   * @default:
   **/
  telephone?: string;

  /**
   * @description: 省名称
   * @type: string
   * @default:
   **/
  provName?: string;

  /**
   * @description: 市名称
   * @type: string
   * @default:
   **/
  cityName?: string;

  /**
   * @description: 区名称
   * @type: string
   * @default:
   **/
  areaName?: string;

  /**
   * @description: 街道名称
   * @type: string
   * @default:
   **/
  streetName?: string;

  /**
   * @description: 详细地址
   * @type: string
   * @default:
   **/
  addrDetail?: string;
}

/**
 * @description 最终服务商确认的寄件人信息
 * @default
 * @example
 **/
export interface PddServiceMailBizactionNotifyRequestConfirmSenderInfoRequestInterface {
  /**
   * @description: 联系人姓名
   * @type: string
   * @default:
   **/
  contactName?: string;

  /**
   * @description: 联系人手机号
   * @type: string
   * @default:
   **/
  mobile?: string;

  /**
   * @description: 联系人电话号码
   * @type: string
   * @default:
   **/
  telephone?: string;

  /**
   * @description: 省名称
   * @type: string
   * @default:
   **/
  provName?: string;

  /**
   * @description: 市名称
   * @type: string
   * @default:
   **/
  cityName?: string;

  /**
   * @description: 区名称
   * @type: string
   * @default:
   **/
  areaName?: string;

  /**
   * @description: 街道名称
   * @type: string
   * @default:
   **/
  streetName?: string;

  /**
   * @description: 详细地址
   * @type: string
   * @default:
   **/
  addrDetail?: string;
}

/**
 * 接口名称：寄件实操回告接口
 * 接口标识：pdd.service.mail.bizaction.notify
 * 接口使用场景：寄件实操回告
 **/
export interface PddServiceMailBizactionNotifyResponseInterface {
  /**
   * @description:
   * @type: PddServiceMailBizactionNotifyResponseResponseInterface
   * @default:
   *
   **/
  response: PddServiceMailBizactionNotifyResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddServiceMailBizactionNotifyResponseResponseInterface {
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
  errorMsg: string;

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  flag: boolean;
}
