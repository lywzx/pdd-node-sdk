export const PDD_MALL_TICKET_NOTIFY = 'pdd.mall.ticket.notify';

/**
 * 接口名称：商家工单处理结果回调接口
 * 接口标识：pdd.mall.ticket.notify
 * 接口使用场景：商家工单处理结果回调接口
 **/
export interface PddMallTicketNotifyRequestInterface {
  /**
   * @description: 回复内容
   * @type: string
   * @default:
   **/
  content: string;

  /**
   * @description: 是否同步给消费者(消费者投诉才有效)
   * @type: boolean
   * @default:
   **/
  syn_to_user: boolean;

  /**
   * @description: 工单编号
   * @type: string
   * @default:
   **/
  ticket_id: string;
}

/**
 * 接口名称：商家工单处理结果回调接口
 * 接口标识：pdd.mall.ticket.notify
 * 接口使用场景：商家工单处理结果回调接口
 **/
export interface PddMallTicketNotifyResponseInterface {
  /**
   * @description:
   * @type: PddMallTicketNotifyMallTicketNotifyResponeResponseInterface
   * @default:
   *
   **/
  mall_ticket_notify_respone: PddMallTicketNotifyMallTicketNotifyResponeResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddMallTicketNotifyMallTicketNotifyResponeResponseInterface {
  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
