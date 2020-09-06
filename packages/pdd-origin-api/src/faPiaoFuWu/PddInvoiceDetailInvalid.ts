export const PDD_INVOICE_DETAIL_INVALID = 'pdd.invoice.detail.invalid';
export const PDD_INVOICE_DETAIL_INVALID_RESPONSE_KEY = 'invoice_detail_invalid_response';
export const PDD_INVOICE_DETAIL_INVALID_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 5,
    times: 10000,
  },
  {
    limiterLevel: 1,
    timeRange: 5,
    times: 1000,
  },
];

/**
 * 接口名称：订单发票冲红
 * 接口标识：pdd.invoice.detail.invalid
 * 接口使用场景：根据订单号冲红发票
 **/
export interface PddInvoiceDetailInvalidRequestInterface {
  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;
}

/**
 * 接口名称：订单发票冲红
 * 接口标识：pdd.invoice.detail.invalid
 * 接口使用场景：根据订单号冲红发票
 **/
export interface PddInvoiceDetailInvalidResponseInterface {
  /**
   * @description: response
   * @type: PddInvoiceDetailInvalidInvoiceDetailInvalidResponseResponseInterface
   * @default:
   *
   **/
  invoice_detail_invalid_response: PddInvoiceDetailInvalidInvoiceDetailInvalidResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddInvoiceDetailInvalidInvoiceDetailInvalidResponseResponseInterface {
  /**
   * @description: errorCode
   * @type: number
   * @default:
   **/
  error_code: number;

  /**
   * @description: errorMsg
   * @type: string
   * @default:
   **/
  error_msg: string;

  /**
   * @description: result
   * @type: PddInvoiceDetailInvalidInvoiceDetailInvalidResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddInvoiceDetailInvalidInvoiceDetailInvalidResponseResultResponseInterface;

  /**
   * @description: success
   * @type: boolean
   * @default:
   **/
  success: boolean;
}

/**
 * @description result
 * @default
 * @example
 **/
export interface PddInvoiceDetailInvalidInvoiceDetailInvalidResponseResultResponseInterface {
  /**
   * @description: 红冲是否成功
   * @type: boolean
   * @default:
   **/
  result: boolean;
}
