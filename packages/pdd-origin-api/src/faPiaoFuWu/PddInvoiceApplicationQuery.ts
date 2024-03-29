export const PDD_INVOICE_APPLICATION_QUERY = 'pdd.invoice.application.query';
export const PDD_INVOICE_APPLICATION_QUERY_RESPONSE_KEY = 'invoice_application_query_response';
export const PDD_INVOICE_APPLICATION_QUERY_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 5,
    times: 12000,
    callSourceType: 0,
  },
  {
    limiterLevel: 1,
    timeRange: 60,
    times: 3600,
    callSourceType: 0,
  },
];

/**
 * 接口名称：开票申请单查询
 * 接口标识：pdd.invoice.application.query
 * 接口使用场景：当消费者在拼多多平台申请开票之后，第三方ERP通过此接口获取开票申请信息
 **/
export interface PddInvoiceApplicationQueryRequestInterface {
  /**
   * @description: 订单号；订单号和申请时间必填其一
   * @type: string
   * @default:
   **/
  order_sn?: string;

  /**
   * @description: 页码，默认1
   * @type: number
   * @default:
   **/
  page?: number;

  /**
   * @description: 每页返回数目，默认50
   * @type: number
   * @default:
   **/
  page_size?: number;

  /**
   * @description: 是否正品发票 0=非正品发票 1=是正品发票
   * @type: number
   * @default:
   **/
  quality_goods_invoice?: number;

  /**
   * @description: 申请状态：0-已拒绝，1-申请中，2-已同意
   * @type: number
   * @default:
   **/
  status?: number;

  /**
   * @description: 申请结束时间, 时间戳（单位毫秒，查询时间间隔不可超过15天）
   * @type: string | number
   * @default:
   **/
  update_end_time?: string | number;

  /**
   * @description: 申请开始时间, 时间戳（单位毫秒，查询时间间隔不可超过15天）
   * @type: string | number
   * @default:
   **/
  update_start_time?: string | number;
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
   * @description: 申请状态：0-已拒绝，1-申请中，2-已同意
   * @type: number
   * @default:
   **/
  application_status: number;

  /**
   * @description: 申请时间
   * @type: number
   * @default:
   **/
  apply_time: number;

  /**
   * @description: 抬头类型：0-个人，1-企业
   * @type: number
   * @default:
   **/
  business_type: number;

  /**
   * @description: 开票金额，单位：分
   * @type: string
   * @default:
   **/
  invoice_amount: string;

  /**
   * @description: 发票种类：0-电子，1-纸质，2-专票；目前只支持0和2
   * @type: number
   * @default:
   **/
  invoice_kind: number;

  /**
   * @description: 发票类型：0-蓝票，1-红票
   * @type: number
   * @default:
   **/
  invoice_type: number;

  /**
   * @description: 开票方式 0=手动开票,1=自动开票
   * @type: number
   * @default:
   **/
  invoice_way: number;

  /**
   * @description: 店铺id
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;

  /**
   * @description: 备注
   * @type: string
   * @default:
   **/
  memo: string;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: （企业抬头）开户账号
   * @type: string
   * @default:
   **/
  payer_account: string;

  /**
   * @description: （企业抬头）地址
   * @type: string
   * @default:
   **/
  payer_address: string;

  /**
   * @description: （企业抬头）开户银行
   * @type: string
   * @default:
   **/
  payer_bank: string;

  /**
   * @description: 发票抬头
   * @type: string
   * @default:
   **/
  payer_name: string;

  /**
   * @description: （企业抬头）电话
   * @type: string
   * @default:
   **/
  payer_phone: string;

  /**
   * @description: 企业税号，抬头为企业类型必填
   * @type: string
   * @default:
   **/
  payer_register_no: string;

  /**
   * @description: 是否正品发票：0=非正品发票，1=非正品发票
   * @type: number
   * @default:
   **/
  quality_goods_invoice: number;

  /**
   * @description: 驳回原因
   * @type: string
   * @default:
   **/
  reason: string;

  /**
   * @description: 不含税金额，暂为null
   * @type: string
   * @default:
   **/
  sum_price: string;

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
   * @description: 开票申请触发类型：1-申请开票，2-改抬头
   * @type: number
   * @default:
   **/
  trigger_status: number;
}
