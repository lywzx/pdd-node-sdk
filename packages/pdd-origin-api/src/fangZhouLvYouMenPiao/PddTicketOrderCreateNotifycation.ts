export const PDD_TICKET_ORDER_CREATE_NOTIFYCATION = 'pdd.ticket.order.create.notifycation';

/**
 * 接口名称：旅游门票订单创建异步回调接口
 * 接口标识：pdd.ticket.order.create.notifycation
 * 接口使用场景：供应商向拼多多进行创单回调请求
 **/
export interface PddTicketOrderCreateNotifycationRequestInterface {
  /**
   * @description: 码类型。status=2时必填。1.无凭证(身份证/手机号) 2. 数字码 3.QR图片 4.外链
   * @type: number
   * @default:
   **/
  code_type?: number;

  /**
   * @description: 失败错误码。status=3时必填
   * @type: number
   * @default:
   **/
  failed_code?: number;

  /**
   * @description: 失败原因。 status=3时必填
   * @type: string
   * @default:
   **/
  failed_reason?: string;

  /**
   * @description: 拼多多制票号
   * @type: string
   * @default:
   **/
  order_no: string;

  /**
   * @description: isv订单号
   * @type: string
   * @default:
   **/
  out_order_sn: string;

  /**
   * @description: 制码状态。 2.制作成功 3.制作失败
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 凭证信息列表。status=2 且 code_type!=1 时必填
   * @type: PddTicketOrderCreateNotifycationTicketsRequestInterface[]
   * @default:
   *
   **/
  tickets?: PddTicketOrderCreateNotifycationTicketsRequestInterface[];

  /**
   * @description: 凭证类型。status=2时必填。1.一人一码 2.一人多码
   * @type: number
   * @default:
   **/
  ticket_type?: number;
}

/**
 * @description 凭证信息列表。status=2 且 code_type!=1 时必填
 * @default
 * @example
 **/
export interface PddTicketOrderCreateNotifycationTicketsRequestInterface {
  /**
   * @description: 辅助凭证，有辅助凭证时返回
   * @type: string
   * @default:
   **/
  additional?: string;

  /**
   * @description: 主凭证，code_type=2时返回
   * @type: string
   * @default:
   **/
  code?: string;

  /**
   * @description: 文件base64流，code_type=3时返回，大小小于800KB
   * @type: string
   * @default:
   **/
  file?: string;

  /**
   * @description: 外链，code_type=4时返回
   * @type: string
   * @default:
   **/
  url?: string;
}

/**
 * 接口名称：旅游门票订单创建异步回调接口
 * 接口标识：pdd.ticket.order.create.notifycation
 * 接口使用场景：供应商向拼多多进行创单回调请求
 **/
export interface PddTicketOrderCreateNotifycationResponseInterface {
  /**
   * @description:
   * @type: PddTicketOrderCreateNotifycationResponseResponseInterface
   * @default:
   *
   **/
  response: PddTicketOrderCreateNotifycationResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddTicketOrderCreateNotifycationResponseResponseInterface {
  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
