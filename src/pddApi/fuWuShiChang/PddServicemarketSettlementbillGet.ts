export const PDD_SERVICEMARKET_SETTLEMENTBILL_GET = 'pdd.servicemarket.settlementbill.get';

/**
 * 接口名称：月结算账单导出
 * 接口标识：pdd.servicemarket.settlementbill.get
 * 接口使用场景：用于ISV查询自己名下的服务的月度结算明细
 **/
export interface PddServicemarketSettlementbillGetRequestInterface {
  /**
   * @description: 分页页码，最大不能超过1000
   * @type: number
   * @default:
   **/
  page?: number;

  /**
   * @description: 分页大小，最大不能超过1000
   * @type: number
   * @default:
   **/
  page_size?: number;

  /**
   * @description: 服务订单号
   * @type: string
   * @default:
   **/
  service_order_sn: string;

  /**
   * @description: 结算月份
   * @type: string
   * @default:
   **/
  settle_month?: string;
}

/**
 * 接口名称：月结算账单导出
 * 接口标识：pdd.servicemarket.settlementbill.get
 * 接口使用场景：用于ISV查询自己名下的服务的月度结算明细
 **/
export interface PddServicemarketSettlementbillGetResponseInterface {
  /**
   * @description: response
   * @type: PddServicemarketSettlementbillGetSettlementBillSearchResponseResponseInterface
   * @default:
   *
   **/
  settlement_bill_search_response: PddServicemarketSettlementbillGetSettlementBillSearchResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddServicemarketSettlementbillGetSettlementBillSearchResponseResponseInterface {
  /**
   * @description: 结算明细列表
   * @type: PddServicemarketSettlementbillGetSettlementBillSearchResponseDataResponseInterface[]
   * @default:
   *
   **/
  data: PddServicemarketSettlementbillGetSettlementBillSearchResponseDataResponseInterface[];

  /**
   * @description: 当前查询条件下所有订单总数
   * @type: number
   * @default:
   **/
  total_count: number;
}

/**
 * @description 结算明细列表
 * @default
 * @example
 **/
export interface PddServicemarketSettlementbillGetSettlementBillSearchResponseDataResponseInterface {
  /**
   * @description: 服务订单号
   * @type: string
   * @default:
   **/
  service_order_sn: string;

  /**
   * @description: 当期结算金额，单位分
   * @type: string
   * @default:
   **/
  settle_amount: string;

  /**
   * @description: 结算月份
   * @type: string
   * @default:
   **/
  settle_month: string;

  /**
   * @description: 结算时间
   * @type: string
   * @default:
   **/
  settle_time: string;

  /**
   * @description: 待结算金额，单位分
   * @type: string
   * @default:
   **/
  unsettle_amount: string;
}
