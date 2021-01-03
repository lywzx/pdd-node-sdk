export const PDD_PMC_ACCRUE_QUERY = 'pdd.pmc.accrue.query';
export const PDD_PMC_ACCRUE_QUERY_RESPONSE_KEY = 'pmc_user_get_response';

/**
 * 接口名称：消息队列积压数量查询
 * 接口标识：pdd.pmc.accrue.query
 * 接口使用场景：服务商订阅消息后，查询当前积压未消费消息数量（7日内）。
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddPmcAccrueQueryRequestInterface {}

/**
 * 接口名称：消息队列积压数量查询
 * 接口标识：pdd.pmc.accrue.query
 * 接口使用场景：服务商订阅消息后，查询当前积压未消费消息数量（7日内）。
 **/
export interface PddPmcAccrueQueryResponseInterface {
  /**
   * @description: response
   * @type: PddPmcAccrueQueryPmcUserGetResponseResponseInterface
   * @default:
   *
   **/
  pmc_user_get_response: PddPmcAccrueQueryPmcUserGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddPmcAccrueQueryPmcUserGetResponseResponseInterface {
  /**
   * @description: 消息积压数量
   * @type: string | number
   * @default:
   **/
  number: string | number;
}
