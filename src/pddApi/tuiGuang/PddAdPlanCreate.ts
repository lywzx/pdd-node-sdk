export const PDD_AD_PLAN_CREATE = 'pdd.ad.plan.create';
export const PDD_AD_PLAN_CREATE_RESPONSE_KEY = 'ad_plan_create_response';

/**
 * 接口名称：新建推广计划
 * 接口标识：pdd.ad.plan.create
 * 接口使用场景：新建推广计划，新建计划时需要满足两个条件：同意拼多多店铺推广软件服务协议&计划数没达到上限50个
 **/
export interface PddAdPlanCreateRequestInterface {
  /**
   * @description: 0--搜索广告,1--明星店铺,2--定向广告,3--首页Banner广告（目前只支持0，暂不支持1、2、3）
   * @type: number
   * @default:
   **/
  scene_type?: number;

  /**
   * @description: 计划名
   * @type: string
   * @default:
   **/
  plan_name?: string;

  /**
   * @description: 单日消耗，单位厘;上限不能超过1000000元，单日消耗上限不能低于100元 , 默认不限额，即1000000 元
   * @type: string | number
   * @default:
   **/
  max_cost: string | number;

  /**
   * @description: List<JsonObject> 的json string. 示例：[{"rate":1000,"index":12},{"rate":1000,"index":13}]
   * @type: PddAdPlanCreateDiscountsRequestInterface[]
   * @default:
   *
   **/
  discounts: PddAdPlanCreateDiscountsRequestInterface[];
}

/**
 * @description List<JsonObject> 的json string. 示例：[{"rate":1000,"index":12},{"rate":1000,"index":13}]
 * @default
 * @example
 **/
export interface PddAdPlanCreateDiscountsRequestInterface {
  /**
   * @description: 折扣率，1000 表示 100.0%，0 表示不投放，自定义范围 500 ~ 3000（10的倍数）
   * @type: number
   * @default:
   **/
  rate: number;

  /**
   * @description: 时间段索引，0 ~ 23
   * @type: number
   * @default:
   **/
  index: number;
}

/**
 * 接口名称：新建推广计划
 * 接口标识：pdd.ad.plan.create
 * 接口使用场景：新建推广计划，新建计划时需要满足两个条件：同意拼多多店铺推广软件服务协议&计划数没达到上限50个
 **/
export interface PddAdPlanCreateResponseInterface {
  /**
   * @description: 返回response
   * @type: PddAdPlanCreateAdPlanCreateResponseResponseInterface
   * @default:
   *
   **/
  ad_plan_create_response: PddAdPlanCreateAdPlanCreateResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/
export interface PddAdPlanCreateAdPlanCreateResponseResponseInterface {
  /**
   * @description: 广告计划id
   * @type: string | number
   * @default:
   **/
  ad_plan_id: string | number;
}
