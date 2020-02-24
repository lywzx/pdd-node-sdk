export const PDD_INVOICE_APPLICATION_UPDATE = 'pdd.invoice.application.update';
export const PDD_INVOICE_APPLICATION_UPDATE_RESPONSE_KEY = 'invoice_application_update_response';

/**
 * 接口名称：开票申请单审核
 * 接口标识：pdd.invoice.application.update
 * 接口使用场景：第三方ERP可以调用此接口审核该开票申请是否允许开票
 **/
export interface PddInvoiceApplicationUpdateRequestInterface {
  /**
   * @description: 申请流水号
   * @type: string
   * @default:
   **/
  application_id?: string;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn?: string;

  /**
   * @description: 审核结果：0 = 拒绝，2 = 同意
   * @type: number
   * @default:
   **/
  status?: number;

  /**
   * @description: 驳回原因，status=0必填
   * @type: string
   * @default:
   **/
  reason?: string;
}

/**
 * 接口名称：开票申请单审核
 * 接口标识：pdd.invoice.application.update
 * 接口使用场景：第三方ERP可以调用此接口审核该开票申请是否允许开票
 **/
export interface PddInvoiceApplicationUpdateResponseInterface {
  /**
   * @description: response
   * @type: PddInvoiceApplicationUpdateInvoiceApplicationUpdateResponseResponseInterface
   * @default:
   *
   **/
  invoice_application_update_response: PddInvoiceApplicationUpdateInvoiceApplicationUpdateResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddInvoiceApplicationUpdateInvoiceApplicationUpdateResponseResponseInterface {
  /**
   * @description: true
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
