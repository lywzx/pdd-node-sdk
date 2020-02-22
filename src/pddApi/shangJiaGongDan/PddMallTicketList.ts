export const PDD_MALL_TICKET_LIST = 'PDD_MALL_TICKET_LIST';

/**
 * 接口名称：商家工单列表查询接口
 * 接口标识：pdd.mall.ticket.list
 * 接口使用场景：商家工单列表查询接口
 **/
export interface PddMallTicketListRequestInterface {
  /**
   * @description: 结束时间戳(格式:秒)
   * @type: number
   * @default:
   **/
  create_end_time?: number;

  /**
   * @description: 开始时间戳(格式:秒)
   * @type: number
   * @default:
   **/
  create_start_time?: number;

  /**
   * @description: 页数(从0开始)
   * @type: number
   * @default:
   **/
  page_num: number;

  /**
   * @description: 每页条数(默认100，最大100)
   * @type: number
   * @default:
   **/
  page_size: number;

  /**
   * @description: 0:待处理 1:已解决 2:超时
   * @type: number
   * @default:
   **/
  progress: number;
}

/**
 * 接口名称：商家工单列表查询接口
 * 接口标识：pdd.mall.ticket.list
 * 接口使用场景：商家工单列表查询接口
 **/
export interface PddMallTicketListResponseInterface {
  /**
   * @description: respone
   * @type: PddMallTicketListMallTicketListResponseResponseInterface
   * @default:
   *
   **/
  mall_ticket_list_response: PddMallTicketListMallTicketListResponseResponseInterface;
}

/**
 * @description respone
 * @default
 * @example
 **/
export interface PddMallTicketListMallTicketListResponseResponseInterface {
  /**
   * @description: list
   * @type: PddMallTicketListMallTicketListResponseListResponseInterface[]
   * @default:
   *
   **/
  list: PddMallTicketListMallTicketListResponseListResponseInterface[];

  /**
   * @description: 总数
   * @type: number
   * @default:
   **/
  total: number;
}

/**
 * @description list
 * @default
 * @example
 **/
export interface PddMallTicketListMallTicketListResponseListResponseInterface {
  /**
   * @description: 创建时间(秒)
   * @type: number
   * @default:
   **/
  created_at: number;

  /**
   * @description: 问题类型id
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
   * @description: 创建类型
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
   * @description: 问题备注
   * @type: string
   * @default:
   **/
  question: string;

  /**
   * @description: 问题描述
   * @type: string
   * @default:
   **/
  type_desc: string;

  /**
   * @description: 问题类型描述
   * @type: number
   * @default:
   **/
  type_id: number;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_MALL_TICKET_LIST]: {
    requestInterface: PddMallTicketListRequestInterface;
    responseInterface: PddMallTicketListResponseInterface;
  };
}
