export const PDD_AD_API_PLAN_UPDATE_PLAN_TO_OCPC = 'pdd.ad.api.plan.update.plan.to.ocpc';

/**
 * 接口名称：切换计划至ocpc
 * 接口标识：pdd.ad.api.plan.update.plan.to.ocpc
 * 接口使用场景：支持广告单元切换为ocpx
 **/
export interface PddAdApiPlanUpdatePlanToOcpcRequestInterface {
  /**
   * @description: 单元OCPC信息列表
   * @type: PddAdApiPlanUpdatePlanToOcpcAdUnitUpdateOcpcMessageListRequestInterface[]
   * @default:
   *
   **/
  adUnitUpdateOcpcMessageList: PddAdApiPlanUpdatePlanToOcpcAdUnitUpdateOcpcMessageListRequestInterface[];

  /**
   * @description: 广告计划Id
   * @type: string | number
   * @default:
   **/
  planId: string | number;

  /**
   * @description: 场景类型。0表示搜索。
   * @type: number
   * @default:
   **/
  scenesType: number;
}

/**
 * @description 单元OCPC信息列表
 * @default
 * @example
 **/
export interface PddAdApiPlanUpdatePlanToOcpcAdUnitUpdateOcpcMessageListRequestInterface {
  /**
   * @description: 广告单元Id
   * @type: string | number
   * @default:
   **/
  adId: string | number;

  /**
   * @description: OCPC信息
   * @type: PddAdApiPlanUpdatePlanToOcpcAdUnitUpdateOcpcMessageListOptimizationMessageRequestInterface
   * @default:
   *
   **/
  optimizationMessage: PddAdApiPlanUpdatePlanToOcpcAdUnitUpdateOcpcMessageListOptimizationMessageRequestInterface;
}

/**
 * @description OCPC信息
 * @default
 * @example
 **/
export interface PddAdApiPlanUpdatePlanToOcpcAdUnitUpdateOcpcMessageListOptimizationMessageRequestInterface {
  /**
   * @description: 智能投放期出价
   * @type: string | number
   * @default:
   **/
  optimizationBid: string | number;

  /**
   * @description: 优化目标。单元使用OCPC功能时，该值必须传2。
   * @type: number
   * @default:
   **/
  optimizationGoal: number;

  /**
   * @description: 优化方式。当使用OCPC时，该值必须传2。
   * @type: number
   * @default:
   **/
  optimizationMethod: number;
}

/**
 * 接口名称：切换计划至ocpc
 * 接口标识：pdd.ad.api.plan.update.plan.to.ocpc
 * 接口使用场景：支持广告单元切换为ocpx
 **/
export interface PddAdApiPlanUpdatePlanToOcpcResponseInterface {
  /**
   * @description:
   * @type: PddAdApiPlanUpdatePlanToOcpcResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiPlanUpdatePlanToOcpcResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiPlanUpdatePlanToOcpcResponseResponseInterface {
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
   * @description:
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
