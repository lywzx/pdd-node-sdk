export const PDD_AD_API_PLAN_QUERY_CAN_CREATE_AD_PLAN = 'pdd.ad.api.plan.query.can.create.ad.plan';

/**
 * 接口名称：校验是否能创建计划
 * 接口标识：pdd.ad.api.plan.query.can.create.ad.plan
 * 接口使用场景：校验是否能创建计划
 **/
export interface PddAdApiPlanQueryCanCreateAdPlanRequestInterface {
  /**
   * @description: 单元名称
   * @type: string
   * @default:
   **/
  planName: string;

  /**
   * @description: 场景类型。0表示搜索，2表示展示。
   * @type: number
   * @default:
   **/
  scenesType: number;
}

/**
 * 接口名称：校验是否能创建计划
 * 接口标识：pdd.ad.api.plan.query.can.create.ad.plan
 * 接口使用场景：校验是否能创建计划
 **/
export interface PddAdApiPlanQueryCanCreateAdPlanResponseInterface {
  /**
   * @description:
   * @type: PddAdApiPlanQueryCanCreateAdPlanResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiPlanQueryCanCreateAdPlanResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiPlanQueryCanCreateAdPlanResponseResponseInterface {
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
   * @description: 是否可以创建
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
