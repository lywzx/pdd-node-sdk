export const PDD_INVOICE_APPLICATION_QUERY = 'pdd.invoice.application.query';
export const PDD_INVOICE_APPLICATION_QUERY_RESPONSE_KEY = 'invoice_application_query_response';

/**
 * 接口名称：开票申请单查询
 * 接口标识：pdd.invoice.application.query
 * 接口使用场景：当消费者在拼多多平台申请开票之后，第三方ERP通过此接口获取开票申请信息
 **/
export interface PddInvoiceApplicationQueryRequestInterface {
  /**
   * @description: 申请流水号
   * @type: string
   * @default:
   **/
  application_id: string;

  /**
   * @description: 订单号；订单号和申请时间必填其一
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 申请状态：0-已拒绝，1-申请中，2-已同意
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 申请开始时间, 时间戳（毫秒）
   * @type: string
   * @default:
   **/
  update_start_time: string;

  /**
   * @description: 申请结束时间, 时间戳（毫秒）
   * @type: string
   * @default:
   **/
  update_end_time: string;

  /**
   * @description: 页码，默认1
   * @type: number
   * @default:
   **/
  page: number;

  /**
   * @description: 每页返回数目，默认50
   * @type: number
   * @default:
   **/
  page_size: number;
}

/**
 * 接口名称：开票申请单查询
 * 接口标识：pdd.invoice.application.query
 * 接口使用场景：当消费者在拼多多平台申请开票之后，第三方ERP通过此接口获取开票申请信息
 **/
export interface PddInvoiceApplicationQueryResponseInterface {
  /**
   * @description: response
   * @type: PddInvoiceApplicationQueryInvoiceApplicationQueryResponseResponseInterface
   * @default:
   *
   **/
  invoice_application_query_response: PddInvoiceApplicationQueryInvoiceApplicationQueryResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddInvoiceApplicationQueryInvoiceApplicationQueryResponseResponseInterface {
  /**
   * @description: 发票申请列表
   * @type: PddInvoiceApplicationQueryInvoiceApplicationQueryResponseInvoiceApplicationListResponseInterface[]
   * @default:
   *
   **/
  invoice_application_list: PddInvoiceApplicationQueryInvoiceApplicationQueryResponseInvoiceApplicationListResponseInterface[];
}

/**
 * @description 发票申请列表
 * @default
 * @example
 **/
export interface PddInvoiceApplicationQueryInvoiceApplicationQueryResponseInvoiceApplicationListResponseInterface {
  /**
   * @description: 修改时间
   * @type: string
   * @default:
   **/
  gmt_modified: string;

  /**
   * @description: 创建时间
   * @type: string
   * @default:
   **/
  gmt_create: string;

  /**
   * @description: 备注
   * @type: string
   * @default:
   **/
  memo: string;

  /**
   * @description: 驳回原因
   * @type: string
   * @default:
   **/
  reason: string;

  /**
   * @description: 总税额，暂为null
   * @type: string
   * @default:
   **/
  sum_tax: string;

  /**
   * @description: 税率，暂为null
   * @type: string
   * @default:
   **/
  tax_rate: string;

  /**
   * @description: 不含税金额，暂为null
   * @type: string
   * @default:
   **/
  sum_price: string;

  /**
   * @description: 开票金额，暂为null，取买家实付
   * @type: string
   * @default:
   **/
  invoice_amount: string;

  /**
   * @description: 发票类型：0-蓝票，1-红票；目前只支持0
   * @type: number
   * @default:
   **/
  invoice_type: number;

  /**
   * @description: 发票种类：0-电子，1-纸质，2-专票；目前只支持0
   * @type: number
   * @default:
   **/
  invoice_kind: number;

  /**
   * @description: 企业税号，抬头为企业类型必填
   * @type: string
   * @default:
   **/
  payer_register_no: string;

  /**
   * @description: 发票抬头
   * @type: string
   * @default:
   **/
  payer_name: string;

  /**
   * @description: 抬头类型：0-个人，1-企业
   * @type: number
   * @default:
   **/
  business_type: number;

  /**
   * @description: 店铺id
   * @type: string
   * @default:
   **/
  mall_id: string;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 开票申请触发类型：1-申请开票，2-改抬头，3电换纸；目前只支持1
   * @type: number
   * @default:
   **/
  trigger_status: number;

  /**
   * @description: 申请状态：0-已拒绝，1-申请中，2-已同意
   * @type: number
   * @default:
   **/
  application_status: number;

  /**
   * @description: 申请流水号
   * @type: string
   * @default:
   **/
  application_id: string;
}
