export const PDD_LOGISTICS_TICKET_NOTIFY = 'PDD_LOGISTICS_TICKET_NOTIFY';

/**
 * 接口名称：快递公司处理结果回调接口
 * 接口标识：pdd.logistics.ticket.notify
 * 接口使用场景：快递公司处理结果回调
 **/
export interface PddLogisticsTicketNotifyRequestInterface {
  /**
   * @description: 附件url,示例：["http://testimg.yangkeduo.com/pdd_oms/2018-01-16/411068e948835ae053a86c13f8ebb5ee.jpg"]
   * @type: string
   * @default:
   **/
  attach_path_list: string;

  /**
   * @description: 工单id
   * @type: string
   * @default:
   **/
  ticket_id?: string;

  /**
   * @description: 运单号
   * @type: string
   * @default:
   **/
  waybill_no?: string;

  /**
   * @description: 处理结果
   * @type: string
   * @default:
   **/
  handle_result?: string;

  /**
   * @description: 签收状态，0:默认,1:未签收,2:已签收
   * @type: number
   * @default:
   **/
  sign_state?: number;

  /**
   * @description: 是否赔付，0:默认,1:未赔付,2:已赔付
   * @type: number
   * @default:
   **/
  compensate_state?: number;

  /**
   * @description: 赔付金额(单位:分)
   * @type: string
   * @default:
   **/
  compensate_amount?: string;

  /**
   * @description: 责任方，0:默认, 1:消费者,2:商家,3:快递公司,4:其他
   * @type: number
   * @default:
   **/
  duty: number;

  /**
   * @description: 处理人
   * @type: string
   * @default:
   **/
  express_dealer: string;

  /**
   * @description: 处理人联系方式
   * @type: string
   * @default:
   **/
  express_dealer_contact: string;
}

/**
 * 接口名称：快递公司处理结果回调接口
 * 接口标识：pdd.logistics.ticket.notify
 * 接口使用场景：快递公司处理结果回调
 **/
export interface PddLogisticsTicketNotifyResponseInterface {
  /**
   * @description: response
   * @type: PddLogisticsTicketNotifyLogisticsTicketNotifyResponseResponseInterface
   * @default:
   *
   **/
  logistics_ticket_notify_response: PddLogisticsTicketNotifyLogisticsTicketNotifyResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddLogisticsTicketNotifyLogisticsTicketNotifyResponseResponseInterface {
  /**
   * @description: 是否修改成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_LOGISTICS_TICKET_NOTIFY]: {
    requestInterface: PddLogisticsTicketNotifyRequestInterface;
    responseInterface: PddLogisticsTicketNotifyResponseInterface;
  };
}
