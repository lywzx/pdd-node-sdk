export const PDD_INVOICE_DETAIL_UPLOAD = 'pdd.invoice.detail.upload';
export const PDD_INVOICE_DETAIL_UPLOAD_RESPONSE_KEY = 'invoice_detail_upload_response';

/**
 * 接口名称：开票结果回传
 * 接口标识：pdd.invoice.detail.upload
 * 接口使用场景：第三方ERP在外部开票系统开完发票之后可以调用此接口回传开票结果
 **/
export interface PddInvoiceDetailUploadRequestInterface {
  /**
   * @description: 申请流水号
   * @type: string | number
   * @default:
   **/
  application_id?: string | number;

  /**
   * @description: 抬头类型：0-个人，1-企业
   * @type: number
   * @default:
   **/
  business_type: number;

  /**
   * @description: 开票金额，整数，单位：分
   * @type: string | number
   * @default:
   **/
  invoice_amount?: string | number;

  /**
   * @description: 发票代码
   * @type: string
   * @default:
   **/
  invoice_code?: string;

  /**
   * @description: 发票内容，pdf文件，转码base64编码
   * @type: string
   * @default:
   **/
  invoice_file_content?: string;

  /**
   * @description: 多张发票列表（如果本字段为空，invoice_code、invoice_no、invoice_amount、invoice_file_content这四个字段必须填写）
   * @type: PddInvoiceDetailUploadInvoiceItemListRequestInterface[]
   * @default:
   *
   **/
  invoice_item_list?: PddInvoiceDetailUploadInvoiceItemListRequestInterface[];

  /**
   * @description: 发票种类：0-电子发票，1-纸质发票，2-专票；目前只支持0
   * @type: number
   * @default:
   **/
  invoice_kind: number;

  /**
   * @description: 发票号码
   * @type: string
   * @default:
   **/
  invoice_no?: string;

  /**
   * @description: 开票日期,时间戳（毫秒）
   * @type: string | number
   * @default:
   **/
  invoice_time: string | number;

  /**
   * @description: 开票类型：0-蓝票，1-红票；目前 只支持0
   * @type: number
   * @default:
   **/
  invoice_type: number;

  /**
   * @description: 备注
   * @type: string
   * @default:
   **/
  memo?: string;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 原蓝票代码（红票必填）
   * @type: string
   * @default:
   **/
  original_invoice_code?: string;

  /**
   * @description: 原蓝票号码（红票必填）
   * @type: string
   * @default:
   **/
  original_invoice_no?: string;

  /**
   * @description: 开票人
   * @type: string
   * @default:
   **/
  payee_operator: string;

  /**
   * @description: （企业抬头）开户账号
   * @type: string
   * @default:
   **/
  payer_account?: string;

  /**
   * @description: （企业抬头）地址
   * @type: string
   * @default:
   **/
  payer_address?: string;

  /**
   * @description: （企业抬头）开户银行
   * @type: string
   * @default:
   **/
  payer_bank?: string;

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
  payer_phone?: string;

  /**
   * @description: 税号，企业必填
   * @type: string
   * @default:
   **/
  payer_register_no?: string;

  /**
   * @description: 不含税金额，整数，单位：分
   * @type: string | number
   * @default:
   **/
  sum_price: string | number;

  /**
   * @description: 总税额，整数，单位：分
   * @type: number
   * @default:
   **/
  sum_tax: number;

  /**
   * @description: 税率,整数
   * @type: number
   * @default:
   **/
  tax_rate: number;
}

/**
 * @description 多张发票列表（如果本字段为空，invoice_code、invoice_no、invoice_amount、invoice_file_content这四个字段必须填写）
 * @default
 * @example
 **/
export interface PddInvoiceDetailUploadInvoiceItemListRequestInterface {
  /**
   * @description: 开票金额 单位:分
   * @type: string | number
   * @default:
   **/
  invoice_amount: string | number;

  /**
   * @description: 发票代码
   * @type: string
   * @default:
   **/
  invoice_code: string;

  /**
   * @description: 发票内容，pdf文件，转码base64编码
   * @type: string
   * @default:
   **/
  invoice_file_content: string;

  /**
   * @description: 发票号码
   * @type: string
   * @default:
   **/
  invoice_no: string;

  /**
   * @description: 原蓝票代码（红票必填）
   * @type: string
   * @default:
   **/
  original_invoice_code?: string;

  /**
   * @description: 原蓝票号码（红票必填）
   * @type: string
   * @default:
   **/
  original_invoice_no?: string;
}

/**
 * 接口名称：开票结果回传
 * 接口标识：pdd.invoice.detail.upload
 * 接口使用场景：第三方ERP在外部开票系统开完发票之后可以调用此接口回传开票结果
 **/
export interface PddInvoiceDetailUploadResponseInterface {
  /**
   * @description: response
   * @type: PddInvoiceDetailUploadInvoiceDetailUploadResponseResponseInterface
   * @default:
   *
   **/
  invoice_detail_upload_response: PddInvoiceDetailUploadInvoiceDetailUploadResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddInvoiceDetailUploadInvoiceDetailUploadResponseResponseInterface {
  /**
   * @description: 发票流水号
   * @type: string
   * @default:
   **/
  serial_no: string;
}
