export const PDD_MALL_TICKET_DETAIL = 'pdd.mall.ticket.detail';
export const PDD_MALL_TICKET_DETAIL_RESPONSE_KEY = 'mall_ticket_detail_response';

/**
 * 接口名称：商家工单详情查询接口
 * 接口标识：pdd.mall.ticket.detail
 * 接口使用场景：商家工单详情查询接口
 **/
export interface PddMallTicketDetailRequestInterface {
  /**
   * @description: 工单编号
   * @type: string
   * @default:
   **/
  ticket_id: string;
}

/**
 * 接口名称：商家工单详情查询接口
 * 接口标识：pdd.mall.ticket.detail
 * 接口使用场景：商家工单详情查询接口
 **/
export interface PddMallTicketDetailResponseInterface {
  /**
   * @description: response
   * @type: PddMallTicketDetailMallTicketDetailResponseResponseInterface
   * @default:
   *
   **/
  mall_ticket_detail_response: PddMallTicketDetailMallTicketDetailResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddMallTicketDetailMallTicketDetailResponseResponseInterface {
  /**
   * @description: 附件(图片)
   * @type: PddMallTicketDetailMallTicketDetailResponseAttachUrlResponseInterface[]
   * @default:
   *
   **/
  attach_url: PddMallTicketDetailMallTicketDetailResponseAttachUrlResponseInterface[];

  /**
   * @description: 创建时间(秒)
   * @type: number
   * @default:
   **/
  created_at: number;

  /**
   * @description: 创建类型
   * @type: number
   * @default:
   **/
  create_type: number;

  /**
   * @description: 逾期时间(秒)
   * @type: number
   * @default:
   **/
  deadline: number;

  /**
   * @description: 问题备注
   * @type: string
   * @default:
   **/
  description: string;

  /**
   * @description: 流水记录
   * @type: PddMallTicketDetailMallTicketDetailResponseHistoryRecordResponseInterface[]
   * @default:
   *
   **/
  history_record: PddMallTicketDetailMallTicketDetailResponseHistoryRecordResponseInterface[];

  /**
   * @description: 商家工单id
   * @type: string
   * @default:
   **/
  id: string;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 商家工单状态
   * @type: number
   * @default:
   **/
  progress: number;

  /**
   * @description: 问题描述
   * @type: string
   * @default:
   **/
  question: string;

  /**
   * @description: 问题类型描述
   * @type: string
   * @default:
   **/
  type_desc: string;

  /**
   * @description: 问题类型id
   * @type: number
   * @default:
   **/
  type_id: number;
}

/**
 * @description 附件(图片)
 * @default
 * @example
 **/
export interface PddMallTicketDetailMallTicketDetailResponseAttachUrlResponseInterface {
  /**
   * @description: url
   * @type: string
   * @default:
   **/
  url: string;
}

/**
 * @description 流水记录
 * @default
 * @example
 **/
export interface PddMallTicketDetailMallTicketDetailResponseHistoryRecordResponseInterface {
  /**
   * @description: 附件(图片)
   * @type: PddMallTicketDetailMallTicketDetailResponseHistoryRecordAttachUrlResponseInterface[]
   * @default:
   *
   **/
  attach_url: PddMallTicketDetailMallTicketDetailResponseHistoryRecordAttachUrlResponseInterface[];

  /**
   * @description: content
   * @type: string
   * @default:
   **/
  content: string;

  /**
   * @description: created_at
   * @type: number
   * @default:
   **/
  created_at: number;

  /**
   * @description: detail
   * @type: string
   * @default:
   **/
  detail: string;

  /**
   * @description: role
   * @type: number
   * @default:
   **/
  role: number;
}

/**
 * @description 附件(图片)
 * @default
 * @example
 **/
export interface PddMallTicketDetailMallTicketDetailResponseHistoryRecordAttachUrlResponseInterface {
  /**
   * @description: url
   * @type: string
   * @default:
   **/
  url: string;
}
