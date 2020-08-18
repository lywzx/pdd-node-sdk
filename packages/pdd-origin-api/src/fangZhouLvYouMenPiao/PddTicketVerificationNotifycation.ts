export const PDD_TICKET_VERIFICATION_NOTIFYCATION = 'pdd.ticket.verification.notifycation';

/**
 * 接口名称：旅游门票订单核销通知接口
 * 接口标识：pdd.ticket.verification.notifycation
 * 接口使用场景：供应商向拼多多发送订单核销通知
 **/
export interface PddTicketVerificationNotifycationRequestInterface {
  /**
   * @description: 拼多多制票号
   * @type: string
   * @default:
   **/
  order_no: string;

  /**
   * @description: 核销时间（13位毫秒数）
   * @type: string | number
   * @default:
   **/
  verify_time: string | number;
}

/**
 * 接口名称：旅游门票订单核销通知接口
 * 接口标识：pdd.ticket.verification.notifycation
 * 接口使用场景：供应商向拼多多发送订单核销通知
 **/
export interface PddTicketVerificationNotifycationResponseInterface {
  /**
   * @description: 错误码
   * @type: PddTicketVerificationNotifycationResponseResponseInterface
   * @default:
   *
   **/
  response: PddTicketVerificationNotifycationResponseResponseInterface;
}

/**
 * @description 错误码
 * @default
 * @example
 **/
export interface PddTicketVerificationNotifycationResponseResponseInterface {
  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
