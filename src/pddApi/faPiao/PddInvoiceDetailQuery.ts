export const PDD_INVOICE_DETAIL_QUERY = 'pdd.invoice.detail.query';
export const PDD_INVOICE_DETAIL_QUERY_RESPONSE_KEY = 'invoice_detail_query_response';

/**
 * 接口名称：查询已回传发票
 * 接口标识：pdd.invoice.detail.query
 * 接口使用场景：可以通过订单号查询已回传的发票信息
 **/
export interface PddInvoiceDetailQueryRequestInterface {
  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn?: string;

  /**
   * @description: 发票流水号
   * @type: string
   * @default:
   **/
  serial_no: string;
}

/**
 * 接口名称：查询已回传发票
 * 接口标识：pdd.invoice.detail.query
 * 接口使用场景：可以通过订单号查询已回传的发票信息
 **/
export interface PddInvoiceDetailQueryResponseInterface {
  /**
   * @description: response
   * @type: PddInvoiceDetailQueryInvoiceDetailQueryResponseResponseInterface
   * @default:
   *
   **/
  invoice_detail_query_response: PddInvoiceDetailQueryInvoiceDetailQueryResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddInvoiceDetailQueryInvoiceDetailQueryResponseResponseInterface {
  /**
   * @description: 拒绝原因
   * @type: string
   * @default:
   **/
  denied_reason: string;

  /**
   * @description: 备注
   * @type: string
   * @default:
   **/
  memo: string;

  /**
   * @description: 发票文件地址
   * @type: string
   * @default:
   **/
  invoice_file_path: string;

  /**
   * @description: 开票日期,时间戳（毫秒）
   * @type: string
   * @default:
   **/
  invoice_time: string;

  /**
   * @description: 开票人
   * @type: string
   * @default:
   **/
  payee_operator: string;

  /**
   * @description: 原蓝票号码（红票必填）
   * @type: string
   * @default:
   **/
  original_invoice_no: string;

  /**
   * @description: 原蓝票代码（红票必填）
   * @type: string
   * @default:
   **/
  original_invoice_code: string;

  /**
   * @description: 发票号码
   * @type: string
   * @default:
   **/
  invoice_no: string;

  /**
   * @description: 发票代码
   * @type: string
   * @default:
   **/
  invoice_code: string;

  /**
   * @description: 总税额
   * @type: string
   * @default:
   **/
  sum_tax: string;

  /**
   * @description: 税率
   * @type: string
   * @default:
   **/
  tax_rate: string;

  /**
   * @description: 不含税金额
   * @type: string
   * @default:
   **/
  sum_price: string;

  /**
   * @description: 开票金额
   * @type: string
   * @default:
   **/
  invoice_amount: string;

  /**
   * @description: 开票类型：0-蓝票，1-红票；目前只支持0
   * @type: number
   * @default:
   **/
  invoice_type: number;

  /**
   * @description: 发票种类：0-电子发票，1-纸质发票，2-专票；目前只支持0
   * @type: number
   * @default:
   **/
  invoice_kind: number;

  /**
   * @description: 审核结果：1-开票中，2-已完成
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 税号，企业必填
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
   * @description: 发票流水号
   * @type: string
   * @default:
   **/
  serial_no: string;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 申请状态：0-已拒绝，1-申请中，2-已同意
   * @type: number
   * @default:
   **/
  application_status: number;
}
