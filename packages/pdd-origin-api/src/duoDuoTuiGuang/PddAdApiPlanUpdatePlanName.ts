export const PDD_AD_API_PLAN_UPDATE_PLAN_NAME = 'pdd.ad.api.plan.update.plan.name';

/**
 * 接口名称：更新计划名称
 * 接口标识：pdd.ad.api.plan.update.plan.name
 * 接口使用场景：更新计划名称
 **/
export interface PddAdApiPlanUpdatePlanNameRequestInterface {
  /**
   * @description: 广告计划Id
   * @type: string | number
   * @default:
   **/
  planId: string | number;

  /**
   * @description: 计划名称
   * @type: string
   * @default:
   **/
  planName: string;
}

/**
 * 接口名称：更新计划名称
 * 接口标识：pdd.ad.api.plan.update.plan.name
 * 接口使用场景：更新计划名称
 **/
export interface PddAdApiPlanUpdatePlanNameResponseInterface {
  /**
   * @description:
   * @type: PddAdApiPlanUpdatePlanNameResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiPlanUpdatePlanNameResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiPlanUpdatePlanNameResponseResponseInterface {
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
