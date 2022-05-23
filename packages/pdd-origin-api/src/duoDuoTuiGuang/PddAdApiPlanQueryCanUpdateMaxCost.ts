export const PDD_AD_API_PLAN_QUERY_CAN_UPDATE_MAX_COST = 'pdd.ad.api.plan.query.can.update.max.cost';

export const PDD_AD_API_PLAN_QUERY_CAN_UPDATE_MAX_COST_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
    callSourceType: 0,
  },
];

/**
 * 接口名称：当天是否允许计划的推广预算
 * 接口标识：pdd.ad.api.plan.query.can.update.max.cost
 * 接口使用场景：当天是否允许计划的推广预算
 **/
export interface PddAdApiPlanQueryCanUpdateMaxCostRequestInterface {
  /**
   * @description: 广告计划Id
   * @type: string | number
   * @default:
   **/
  planId: string | number;
}

/**
 * 接口名称：当天是否允许计划的推广预算
 * 接口标识：pdd.ad.api.plan.query.can.update.max.cost
 * 接口使用场景：当天是否允许计划的推广预算
 **/
export interface PddAdApiPlanQueryCanUpdateMaxCostResponseInterface {
  /**
   * @description:
   * @type: PddAdApiPlanQueryCanUpdateMaxCostResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiPlanQueryCanUpdateMaxCostResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiPlanQueryCanUpdateMaxCostResponseResponseInterface {
  /**
   * @description:
   * @type: number
   * @default:
   **/
  errorCode: number;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  errorMsg: string;

  /**
   * @description: 是否可以更新
   * @type: boolean
   * @default:
   **/
  result: boolean;

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
