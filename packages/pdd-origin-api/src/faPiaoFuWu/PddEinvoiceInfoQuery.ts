export const PDD_EINVOICE_INFO_QUERY = 'pdd.einvoice.info.query';
export const PDD_EINVOICE_INFO_QUERY_RESPONSE_KEY = 'einvoice_info_query_response';
export const PDD_EINVOICE_INFO_QUERY_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 1,
    times: 100,
    callSourceType: 0,
  },
];

/**
 * 接口名称：自动开票发票查询
 * 接口标识：pdd.einvoice.info.query
 * 接口使用场景：商家使用自动开票系统对订单进行开票，可通过此接口获取30天内已开发票对应的发票和订单信息
 **/
export interface PddEinvoiceInfoQueryRequestInterface {
  /**
   * @description: 最后更新时间结束时间的时间戳，指格林威治时间 1970 年 01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)起至现在的总秒数。开始时间结束时间间距不超过1小时。不能查询最近5分钟内的数据。开区间，返回数据不包含end_time
   * @type: string | number
   * @default:
   **/
  end_time: string | number;

  /**
   * @description: 发票类型 0-蓝票，1-红票，不传为全部
   * @type: number
   * @default:
   **/
  invoice_type?: number;

  /**
   * @description: 页码。页码从 1开始
   * @type: number
   * @default:
   **/
  page: number;

  /**
   * @description: 返回数量。最小1，最大 50
   * @type: number
   * @default:
   **/
  page_size: number;

  /**
   * @description: 最后更新时间开始时间的时间戳，指格林威治时间 1970 年01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)起至现在的总秒数。只能查询30天内的数据。闭区间，返回数据包含start_time
   * @type: string | number
   * @default:
   **/
  start_time: string | number;
}

/**
 * 接口名称：自动开票发票查询
 * 接口标识：pdd.einvoice.info.query
 * 接口使用场景：商家使用自动开票系统对订单进行开票，可通过此接口获取30天内已开发票对应的发票和订单信息
 **/
export interface PddEinvoiceInfoQueryResponseInterface {
  /**
   * @description:
   * @type: PddEinvoiceInfoQueryEinvoiceInfoQueryResponseResponseInterface
   * @default:
   *
   **/
  einvoice_info_query_response: PddEinvoiceInfoQueryEinvoiceInfoQueryResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddEinvoiceInfoQueryEinvoiceInfoQueryResponseResponseInterface {
  /**
   * @description:
   * @type: PddEinvoiceInfoQueryEinvoiceInfoQueryResponseInvoiceInfoListResponseInterface[]
   * @default:
   *
   **/
  invoice_info_list: PddEinvoiceInfoQueryEinvoiceInfoQueryResponseInvoiceInfoListResponseInterface[];
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddEinvoiceInfoQueryEinvoiceInfoQueryResponseInvoiceInfoListResponseInterface {
  /**
   * @description: 购方地址
   * @type: string
   * @default:
   **/
  buyer_address: string;

  /**
   * @description: 购方银行账号
   * @type: string
   * @default:
   **/
  buyer_bank_account: string;

  /**
   * @description: 购方银行名称
   * @type: string
   * @default:
   **/
  buyer_bank_name: string;

  /**
   * @description: 购方名称(发票抬头)
   * @type: string
   * @default:
   **/
  buyer_name: string;

  /**
   * @description: 购方电话
   * @type: string
   * @default:
   **/
  buyer_phone_number: string;

  /**
   * @description: 购方税号
   * @type: string
   * @default:
   **/
  buyer_tax_no: string;

  /**
   * @description: 复核人
   * @type: string
   * @default:
   **/
  checker: string;

  /**
   * @description: 开票时间（毫秒，如：1594023438064），以服务商回传成功时间为准
   * @type: string | number
   * @default:
   **/
  create_time: string | number;

  /**
   * @description: 开票人
   * @type: string
   * @default:
   **/
  drawer: string;

  /**
   * @description: 发票代码
   * @type: string
   * @default:
   **/
  invoice_code: string;

  /**
   * @description:
   * @type: PddEinvoiceInfoQueryEinvoiceInfoQueryResponseInvoiceInfoListInvoiceItemListResponseInterface[]
   * @default:
   *
   **/
  invoice_item_list: PddEinvoiceInfoQueryEinvoiceInfoQueryResponseInvoiceInfoListInvoiceItemListResponseInterface[];

  /**
   * @description: 发票号码
   * @type: string
   * @default:
   **/
  invoice_no: string;

  /**
   * @description: 发票开票日期（毫秒，如：1594023438064)
   * @type: string | number
   * @default:
   **/
  invoice_time: string | number;

  /**
   * @description: 发票类型 0-蓝票，1-红票
   * @type: number
   * @default:
   **/
  invoice_type: number;

  /**
   * @description: pdd订单号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 原蓝票代码（红票时返回）
   * @type: string
   * @default:
   **/
  original_invoice_code: string;

  /**
   * @description: 原蓝票号码（红票时返回）
   * @type: string
   * @default:
   **/
  original_invoice_no: string;

  /**
   * @description: 收款人
   * @type: string
   * @default:
   **/
  payee: string;

  /**
   * @description: 发票下载地址，30分钟内有效
   * @type: string
   * @default:
   **/
  pdf_path: string;

  /**
   * @description: 发票备注信息
   * @type: string
   * @default:
   **/
  remark: string;

  /**
   * @description: 销方地址
   * @type: string
   * @default:
   **/
  seller_address: string;

  /**
   * @description: 销方银行账号
   * @type: string
   * @default:
   **/
  seller_bank_account: string;

  /**
   * @description: 销方银行名称
   * @type: string
   * @default:
   **/
  seller_bank_name: string;

  /**
   * @description: 销方名称
   * @type: string
   * @default:
   **/
  seller_name: string;

  /**
   * @description: 销方电话
   * @type: string
   * @default:
   **/
  seller_phone_number: string;

  /**
   * @description: 销方税号
   * @type: string
   * @default:
   **/
  seller_tax_no: string;

  /**
   * @description: 价税合计金额(放大100倍，单位分)
   * @type: string | number
   * @default:
   **/
  total_amount: string | number;

  /**
   * @description: 合计金额（不含税，放大100倍，单位分）
   * @type: string | number
   * @default:
   **/
  total_price: string | number;

  /**
   * @description: 合计税额(放大100倍，单位分)
   * @type: string | number
   * @default:
   **/
  total_tax_amount: string | number;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddEinvoiceInfoQueryEinvoiceInfoQueryResponseInvoiceInfoListInvoiceItemListResponseInterface {
  /**
   * @description: 价税合计(放大100倍,单位分)
   * @type: string | number
   * @default:
   **/
  amount: string | number;

  /**
   * @description: 税收分类编码
   * @type: string
   * @default:
   **/
  catalog_code: string;

  /**
   * @description: 商品名称
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 不含税金额(放大100倍，单位分)
   * @type: string | number
   * @default:
   **/
  no_tax_amount: string | number;

  /**
   * @description: 含税单价（放大1000000倍）
   * @type: string | number
   * @default:
   **/
  price: string | number;

  /**
   * @description: 数量（放大1000000倍）
   * @type: string | number
   * @default:
   **/
  quantity: string | number;

  /**
   * @description: 规格型号
   * @type: string
   * @default:
   **/
  specification: string;

  /**
   * @description: 税率
   * @type: string
   * @default:
   **/
  tax_rate: string;

  /**
   * @description: 总税额(放大100倍，单位分)
   * @type: string | number
   * @default:
   **/
  total_tax: string | number;

  /**
   * @description: 单位
   * @type: string
   * @default:
   **/
  unit: string;

  /**
   * @description: 零税率标识，1：免税，2：不征税，3：普通零税率
   * @type: number
   * @default:
   **/
  zero_tax_rate_flag: number;
}
