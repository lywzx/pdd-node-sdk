export const PDD_TICKET_ORDER_REFUND_NOTIFYCATION = 'pdd.ticket.order.refund.notifycation';

/**
 * 接口名称：旅游门票订单售后结果回调
 * 接口标识：pdd.ticket.order.refund.notifycation
 * 接口使用场景：供应商向拼多多回调售后就结果
 **/
export interface PddTicketOrderRefundNotifycationRequestInterface {
  /**
   * @description: 拼多多制票号
   * @type: string
   * @default:
   **/
  order_no: string;

  /**
   * @description: 退款金额（分） status=2时必传
   * @type: string | number
   * @default:
   **/
  refund_amount?: string | number;

  /**
   * @description: 驳回原因 status=3时必传
   * @type: string
   * @default:
   **/
  reject_reason?: string;

  /**
   * @description: 退款流水号
   * @type: string
   * @default:
   **/
  serial_no: string;

  /**
   * @description: 受理状态。2.已通过 3.已驳回
   * @type: number
   * @default:
   **/
  status: number;
}

/**
 * 接口名称：旅游门票订单售后结果回调
 * 接口标识：pdd.ticket.order.refund.notifycation
 * 接口使用场景：供应商向拼多多回调售后就结果
 **/
export interface PddTicketOrderRefundNotifycationResponseInterface {
  /**
   * @description:
   * @type: PddTicketOrderRefundNotifycationResponseResponseInterface
   * @default:
   *
   **/
  response: PddTicketOrderRefundNotifycationResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddTicketOrderRefundNotifycationResponseResponseInterface {
  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
