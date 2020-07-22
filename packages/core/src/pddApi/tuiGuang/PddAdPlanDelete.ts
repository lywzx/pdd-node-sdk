export const PDD_AD_PLAN_DELETE = 'pdd.ad.plan.delete';
export const PDD_AD_PLAN_DELETE_RESPONSE_KEY = 'ad_plan_delete_response';

/**
 * 接口名称：删除推广计划
 * 接口标识：pdd.ad.plan.delete
 * 接口使用场景：删除推广计划，删除计划前要将单元全部删除
 **/
export interface PddAdPlanDeleteRequestInterface {
  /**
   * @description: 0--搜索广告,1--明星店铺,2--定向广告,3--首页Banner广告（目前只支持0，暂不支持1、2、3）
   * @type: number
   * @default:
   **/
  scene_type: number;

  /**
   * @description: plan_id 列表，示例：[1,2]
   * @type: Array<string | number>
   * @default:
   **/
  plan_ids: Array<string | number>;
}

/**
 * 接口名称：删除推广计划
 * 接口标识：pdd.ad.plan.delete
 * 接口使用场景：删除推广计划，删除计划前要将单元全部删除
 **/
export interface PddAdPlanDeleteResponseInterface {
  /**
   * @description: 返回response
   * @type: PddAdPlanDeleteAdPlanDeleteResponseResponseInterface
   * @default:
   *
   **/
  ad_plan_delete_response: PddAdPlanDeleteAdPlanDeleteResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/
export interface PddAdPlanDeleteAdPlanDeleteResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
