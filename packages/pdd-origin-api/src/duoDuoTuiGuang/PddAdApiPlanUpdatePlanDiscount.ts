export const PDD_AD_API_PLAN_UPDATE_PLAN_DISCOUNT = 'pdd.ad.api.plan.update.plan.discount';

export const PDD_AD_API_PLAN_UPDATE_PLAN_DISCOUNT_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
  },
];

/**
 * 接口名称：更新分时折扣
 * 接口标识：pdd.ad.api.plan.update.plan.discount
 * 接口使用场景：更新分时折扣
 **/
export interface PddAdApiPlanUpdatePlanDiscountRequestInterface {
  /**
   * @description: 分时折扣
   * @type: PddAdApiPlanUpdatePlanDiscountPlanDiscountRequestInterface
   * @default:
   *
   **/
  planDiscount: PddAdApiPlanUpdatePlanDiscountPlanDiscountRequestInterface;

  /**
   * @description: 广告计划Id
   * @type: string | number
   * @default:
   **/
  planId: string | number;
}

/**
 * @description 分时折扣
 * @default
 * @example
 **/
export interface PddAdApiPlanUpdatePlanDiscountPlanDiscountRequestInterface {
  /**
   * @description: 分时折扣配置列表
   * @type: PddAdApiPlanUpdatePlanDiscountPlanDiscountDiscountsRequestInterface[]
   * @default:
   *
   **/
  discounts: PddAdApiPlanUpdatePlanDiscountPlanDiscountDiscountsRequestInterface[];
}

/**
 * @description 分时折扣配置列表
 * @default
 * @example
 **/
export interface PddAdApiPlanUpdatePlanDiscountPlanDiscountDiscountsRequestInterface {
  /**
   * @description: 小时。0-23分别表示第1个小时到第24个小时。
   * @type: number
   * @default:
   **/
  index: number;

  /**
   * @description: 折扣比例。千分比（即rate等于1000表示比例100%）。
   * @type: number
   * @default:
   **/
  rate: number;
}

/**
 * 接口名称：更新分时折扣
 * 接口标识：pdd.ad.api.plan.update.plan.discount
 * 接口使用场景：更新分时折扣
 **/
export interface PddAdApiPlanUpdatePlanDiscountResponseInterface {
  /**
   * @description:
   * @type: PddAdApiPlanUpdatePlanDiscountResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiPlanUpdatePlanDiscountResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiPlanUpdatePlanDiscountResponseResponseInterface {
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
