export const PDD_SERVICEMARKET_TRADELIST_GET = 'pdd.servicemarket.tradelist.get';
export const PDD_SERVICEMARKET_TRADELIST_GET_RESPONSE_KEY = 'mall_balance_flow_search_response';

/**
 * 接口名称：交易明细单导出
 * 接口标识：pdd.servicemarket.tradelist.get
 * 接口使用场景：用于ISV查询自己名下的服务的交易明细单
 **/
export interface PddServicemarketTradelistGetRequestInterface {
  /**
   * @description: 查询起始时间，精确到秒，起止时间间隔最大31天
   * @type: number
   * @default:
   **/
  begin_time: number;

  /**
   * @description: 查询结束时间，精确到秒，起止时间间隔最大31天
   * @type: number
   * @default:
   **/
  end_time: number;

  /**
   * @description: 收支类型，空-全部 1-收入 2-支出
   * @type: number
   * @default:
   **/
  group_type?: number;

  /**
   * @description: 分页页码，最大1000
   * @type: number
   * @default:
   **/
  page: number;

  /**
   * @description: 分页大小，最大1000
   * @type: number
   * @default:
   **/
  page_size: number;

  /**
   * @description: 服务订单号
   * @type: string
   * @default:
   **/
  service_order_sn?: string;
}

/**
 * 接口名称：交易明细单导出
 * 接口标识：pdd.servicemarket.tradelist.get
 * 接口使用场景：用于ISV查询自己名下的服务的交易明细单
 **/
export interface PddServicemarketTradelistGetResponseInterface {
  /**
   * @description: response
   * @type: PddServicemarketTradelistGetMallBalanceFlowSearchResponseResponseInterface
   * @default:
   *
   **/
  mall_balance_flow_search_response: PddServicemarketTradelistGetMallBalanceFlowSearchResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddServicemarketTradelistGetMallBalanceFlowSearchResponseResponseInterface {
  /**
   * @description: 交易流水列表
   * @type: PddServicemarketTradelistGetMallBalanceFlowSearchResponseDataResponseInterface[]
   * @default:
   *
   **/
  data: PddServicemarketTradelistGetMallBalanceFlowSearchResponseDataResponseInterface[];

  /**
   * @description: 当前查询条件下所有订单总数
   * @type: number
   * @default:
   **/
  total_count: number;
}

/**
 * @description 交易流水列表
 * @default
 * @example
 **/
export interface PddServicemarketTradelistGetMallBalanceFlowSearchResponseDataResponseInterface {
  /**
   * @description: 交易金额，单位分
   * @type: string | number
   * @default:
   **/
  amount: string | number;

  /**
   * @description: 流水类目名称，1-交易收入，2-优惠券结算，3-退款，4-提现，5-技术服务费，7-扣款
   * @type: string
   * @default:
   **/
  class_name: string;

  /**
   * @description: 流水创建时间，单位秒
   * @type: number
   * @default:
   **/
  created_at: number;

  /**
   * @description: 交易流水号
   * @type: string | number
   * @default:
   **/
  flow_id: string | number;

  /**
   * @description: 资金流向，1-收入，2-支出
   * @type: number
   * @default:
   **/
  group_type: number;

  /**
   * @description: 服务订单号
   * @type: string
   * @default:
   **/
  service_order_sn: string;

  /**
   * @description: 交易备注
   * @type: string
   * @default:
   **/
  trade_note: string;
}
