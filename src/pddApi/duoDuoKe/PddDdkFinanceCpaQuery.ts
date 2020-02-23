export const PDD_DDK_FINANCE_CPA_QUERY = 'pdd.ddk.finance.cpa.query';

/**
 * 接口名称：查询CPA数据
 * 接口标识：pdd.ddk.finance.cpa.query
 * 接口使用场景：CPA效果数据查询
 **/
export interface PddDdkFinanceCpaQueryRequestInterface {
  /**
   * @description: 查询日期，格式：yyyy-MM-dd
   * @type: string
   * @default:
   **/
  date_query?: string;

  /**
   * @description: 推广位id
   * @type: string
   * @default:
   **/
  pid: string;
}

/**
 * 接口名称：查询CPA数据
 * 接口标识：pdd.ddk.finance.cpa.query
 * 接口使用场景：CPA效果数据查询
 **/
export interface PddDdkFinanceCpaQueryResponseInterface {
  /**
   * @description: response
   * @type: PddDdkFinanceCpaQueryFinanceCpaQueryResponseResponseInterface
   * @default:
   *
   **/
  finance_cpa_query_response: PddDdkFinanceCpaQueryFinanceCpaQueryResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddDdkFinanceCpaQueryFinanceCpaQueryResponseResponseInterface {
  /**
   * @description: CPA补贴并锁佣数量，支持T+1查询
   * @type: number
   * @default:
   **/
  cpa_new_num: number;

  /**
   * @description: 质量分（以天为维度，支持T+8查询；查询duoid维度返回具体数值，查询pid维度返回高中低）
   * @type: string
   * @default:
   **/
  quality_score: string;

  /**
   * @description: 预估补贴（单位分，以天为维度，支持T+8查询；查询duoid维度返回具体数值，查询pid维度返回空）
   * @type: number
   * @default:
   **/
  subsidy_fee: number;
}
