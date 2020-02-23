export const PDD_AD_PLAN_DISCOUNT_UPDATE = 'pdd.ad.plan.discount.update';

/**
 * 接口名称：修改推广计划分时折扣
 * 接口标识：pdd.ad.plan.discount.update
 * 接口使用场景：修改推广计划分时折扣
 **/
export interface PddAdPlanDiscountUpdateRequestInterface {
  /**
   * @description: 推广计划id
   * @type: string
   * @default:
   **/
  plan_id?: string;

  /**
   * @description: List<JsonObject> 的json string. 示例：[{"rate":1000,"index":12},{"rate":1000,"index":13}]
   * @type: PddAdPlanDiscountUpdateDiscountsRequestInterface[]
   * @default:
   *
   **/
  discounts: PddAdPlanDiscountUpdateDiscountsRequestInterface[];

  /**
   * @description: 0 :搜索广告
   * @type: number
   * @default:
   **/
  scene_type?: number;
}

/**
 * @description List<JsonObject> 的json string. 示例：[{"rate":1000,"index":12},{"rate":1000,"index":13}]
 * @default
 * @example
 **/
export interface PddAdPlanDiscountUpdateDiscountsRequestInterface {
  /**
   * @description: 折扣率，1000 表示 100.0%，0 表示不投放，自定义范围 500 ~ 3000（10的倍数）
   * @type: number
   * @default:
   **/
  rate?: number;

  /**
   * @description: 时间段索引，0 ~ 23
   * @type: number
   * @default:
   **/
  index?: number;
}

/**
 * 接口名称：修改推广计划分时折扣
 * 接口标识：pdd.ad.plan.discount.update
 * 接口使用场景：修改推广计划分时折扣
 **/
export interface PddAdPlanDiscountUpdateResponseInterface {
  /**
   * @description: true or false
   * @type: boolean
   * @default:
   **/
  open_api_response: boolean;
}
