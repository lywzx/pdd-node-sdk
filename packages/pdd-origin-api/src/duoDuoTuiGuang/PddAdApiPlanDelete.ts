export const PDD_AD_API_PLAN_DELETE = 'pdd.ad.api.plan.delete';

export const PDD_AD_API_PLAN_DELETE_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 5,
  },
];

/**
 * 接口名称：删除计划
 * 接口标识：pdd.ad.api.plan.delete
 * 接口使用场景：删除计划
 **/
export interface PddAdApiPlanDeleteRequestInterface {
  /**
   * @description: 广告计划Id
   * @type: string | number
   * @default:
   **/
  planId: string | number;

  /**
   * @description: 场景类型，0-搜索，2-展示
   * @type: number
   * @default:
   **/
  scenesType: number;
}

/**
 * 接口名称：删除计划
 * 接口标识：pdd.ad.api.plan.delete
 * 接口使用场景：删除计划
 **/
export interface PddAdApiPlanDeleteResponseInterface {
  /**
   * @description:
   * @type: PddAdApiPlanDeleteResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiPlanDeleteResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiPlanDeleteResponseResponseInterface {
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
   * @description: 是否删除成功
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
