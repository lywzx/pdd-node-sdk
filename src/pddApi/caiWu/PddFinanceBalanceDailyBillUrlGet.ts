export const PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET = 'pdd.finance.balance.daily.bill.url.get';
export const PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET_RESPONSE_KEY = 'finance_balance_daily_bill_url_get_response';

/**
 * 接口名称：商家货款日账单下载链接查询接口
 * 接口标识：pdd.finance.balance.daily.bill.url.get
 * 接口使用场景：获取商家货款日账单下载链接
 **/
export interface PddFinanceBalanceDailyBillUrlGetRequestInterface {
  /**
   * @description: 账单日期（形如yyyy-MM-dd）；例如入参为“2019-03-24”，则返回2019年3月24日的商家货款日账单的下载链接
   * @type: string
   * @default:
   **/
  bill_date?: string;
}

/**
 * 接口名称：商家货款日账单下载链接查询接口
 * 接口标识：pdd.finance.balance.daily.bill.url.get
 * 接口使用场景：获取商家货款日账单下载链接
 **/
export interface PddFinanceBalanceDailyBillUrlGetResponseInterface {
  /**
   * @description: response
   * @type: PddFinanceBalanceDailyBillUrlGetFinanceBalanceDailyBillUrlGetResponseResponseInterface
   * @default:
   *
   **/
  finance_balance_daily_bill_url_get_response: PddFinanceBalanceDailyBillUrlGetFinanceBalanceDailyBillUrlGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddFinanceBalanceDailyBillUrlGetFinanceBalanceDailyBillUrlGetResponseResponseInterface {
  /**
   * @description: 下载url
   * @type: string
   * @default:
   **/
  download_url: string;
}
