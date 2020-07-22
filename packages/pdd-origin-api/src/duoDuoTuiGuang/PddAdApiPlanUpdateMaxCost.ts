export const PDD_AD_API_PLAN_UPDATE_MAX_COST = 'pdd.ad.api.plan.update.max.cost';

/**
 * 接口名称：更新日消耗上限
 * 接口标识：pdd.ad.api.plan.update.max.cost
 * 接口使用场景：更新日消耗上限
 **/
export interface PddAdApiPlanUpdateMaxCostRequestInterface {
  /**
   * @description: 日消耗上限。单位厘。
   * @type: string | number
   * @default:
   **/
  maxCost: string | number;

  /**
   * @description: 广告计划Id
   * @type: string | number
   * @default:
   **/
  planId: string | number;
}

/**
 * 接口名称：更新日消耗上限
 * 接口标识：pdd.ad.api.plan.update.max.cost
 * 接口使用场景：更新日消耗上限
 **/
export interface PddAdApiPlanUpdateMaxCostResponseInterface {
  /**
   * @description:
   * @type: PddAdApiPlanUpdateMaxCostResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiPlanUpdateMaxCostResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiPlanUpdateMaxCostResponseResponseInterface {
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
   * @description: 是否更新成功
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
