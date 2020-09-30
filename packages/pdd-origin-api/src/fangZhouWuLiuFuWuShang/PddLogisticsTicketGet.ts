export const PDD_LOGISTICS_TICKET_GET = 'pdd.logistics.ticket.get';
export const PDD_LOGISTICS_TICKET_GET_RESPONSE_KEY = 'logistics_ticket_get_response';
export const PDD_LOGISTICS_TICKET_GET_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 60,
    times: 4800,
  },
];

/**
 * 接口名称：快递公司工单查询接口
 * 接口标识：pdd.logistics.ticket.get
 * 接口使用场景：快递公司工单查询
 **/
export interface PddLogisticsTicketGetRequestInterface {
  /**
   * @description: 必填，最后更新时间结束时间的时间戳，指格林威治时间 1970 年 01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)起至现在的总秒数 PS：开始时间结束时间间距不超过 30 分钟。示例：1523763012。
   * @type: string | number
   * @default:
   **/
  end_updated_at: string | number;

  /**
   * @description: 返回页码 默认 1，页码从 1 开始 PS：当前采用分页返回，数量和页数会一起传，如果不传，则采用 默认值。注：必须采用倒序的分页方式（从最后一页往回取）才能避免漏单问题
   * @type: number
   * @default: 1
   **/
  page?: number;

  /**
   * @description: 返回数量，默认 100。最大 100
   * @type: number
   * @default: 1
   **/
  page_size?: number;

  /**
   * @description: 必填，最后更新时间开始时间的时间戳，指格林威治时间 1970 年 01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)起至现在的总秒数。示例：1523762012。
   * @type: string | number
   * @default:
   **/
  start_updated_at: string | number;
}

/**
 * 接口名称：快递公司工单查询接口
 * 接口标识：pdd.logistics.ticket.get
 * 接口使用场景：快递公司工单查询
 **/
export interface PddLogisticsTicketGetResponseInterface {
  /**
   * @description: response
   * @type: PddLogisticsTicketGetLogisticsTicketGetResponseResponseInterface
   * @default:
   *
   **/
  logistics_ticket_get_response: PddLogisticsTicketGetLogisticsTicketGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddLogisticsTicketGetLogisticsTicketGetResponseResponseInterface {
  /**
   * @description: 工单列表
   * @type: PddLogisticsTicketGetLogisticsTicketGetResponseLogisticsTicketListResponseInterface[]
   * @default:
   *
   **/
  logistics_ticket_list: PddLogisticsTicketGetLogisticsTicketGetResponseLogisticsTicketListResponseInterface[];

  /**
   * @description: 列表总数
   * @type: number
   * @default:
   **/
  total_count: number;
}

/**
 * @description 工单列表
 * @default
 * @example
 **/
export interface PddLogisticsTicketGetLogisticsTicketGetResponseLogisticsTicketListResponseInterface {
  /**
   * @description: 附件列表
   * @type: string[]
   * @default:
   **/
  attach_url: string[];

  /**
   * @description: 末端品牌代码
   * @type: string
   * @default:
   **/
  cabinet_code: string;

  /**
   * @description: 赔付金额(单位:分)
   * @type: string | number
   * @default:
   **/
  compensate_amount: string | number;

  /**
   * @description: 赔付状态 0:默认,1:未赔付,2:已赔付
   * @type: number
   * @default:
   **/
  compensate_state: number;

  /**
   * @description: 工单创建时间戳
   * @type: string | number
   * @default:
   **/
  created_at: string | number;

  /**
   * @description: create_type
   * @type: number
   * @default:
   **/
  create_type: number;

  /**
   * @description: 备注
   * @type: string
   * @default:
   **/
  description: string;

  /**
   * @description: duty
   * @type: number
   * @default:
   **/
  duty: number;

  /**
   * @description: 物流商回传凭证
   * @type: string[]
   * @default:
   **/
  express_attachment: string[];

  /**
   * @description: 物流商快递编码
   * @type: string | number
   * @default:
   **/
  express_company_id: string | number;

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

  /**
   * @description: 物流商处理结果
   * @type: string
   * @default:
   **/
  handle_result: string;

  /**
   * @description: 寄件单号
   * @type: string
   * @default:
   **/
  mail_order_sn: string;

  /**
   * @description: 订单金额
   * @type: string | number
   * @default:
   **/
  pay_amount: string | number;

  /**
   * @description: 订单号生成的物流单号
   * @type: string
   * @default:
   **/
  pre_delivery_id: string;

  /**
   * @description: receive_address
   * @type: string
   * @default:
   **/
  receive_address: string;

  /**
   * @description: 联系人电话
   * @type: string
   * @default:
   **/
  receive_contact: string;

  /**
   * @description: 联系人姓名
   * @type: string
   * @default:
   **/
  receive_name: string;

  /**
   * @description: 工单退回次数
   * @type: string | number
   * @default:
   **/
  retreat_count: string | number;

  /**
   * @description: send_address
   * @type: string
   * @default:
   **/
  send_address: string;

  /**
   * @description: 0:默认,1:未签收,2:已签收
   * @type: number
   * @default:
   **/
  sign_state: number;

  /**
   * @description: 问题来源，	0:买家,1:卖家
   * @type: number
   * @default:
   **/
  source: number;

  /**
   * @description: 工单状态， 0:待确认,1:跟进中,2:待回访,3:已完结
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 物流投诉标签
   * @type: number[]
   * @default:
   **/
  sub_type_ids: number[];

  /**
   * @description: 工单id
   * @type: string | number
   * @default:
   **/
  ticket_id: string | number;

  /**
   * @description: 问题描述
   * @type: string
   * @default:
   **/
  title: string;

  /**
   * @description: 问题类型id
   * @type: string | number
   * @default:
   **/
  type_id: string | number;

  /**
   * @description: 工单最后更新时间戳
   * @type: string | number
   * @default:
   **/
  updated_at: string | number;

  /**
   * @description: 紧急度，0:中,1:紧急
   * @type: number
   * @default:
   **/
  urgent_type: number;

  /**
   * @description: 运单号
   * @type: string
   * @default:
   **/
  waybill_no: string;
}
