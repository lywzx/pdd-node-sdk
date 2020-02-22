export const PDD_AD_PLAN_NAME_UPDATE = 'PDD_AD_PLAN_NAME_UPDATE';

/**
 * 接口名称：修改推广计划名称
 * 接口标识：pdd.ad.plan.name.update
 * 接口使用场景：修改推广计划名称
 **/

export interface PddAdPlanNameUpdateRequestInterface {
  /**
   * @description: 0--搜索广告,1--明星店铺,2--定向广告,3--首页Banner广告（目前只支持0，暂不支持1、2、3）
   * @type: number
   * @default:
   **/
  scene_type?: number;

  /**
   * @description: 计划id
   * @type: string
   * @default:
   **/
  plan_id?: string;

  /**
   * @description: 计划名
   * @type: string
   * @default:
   **/
  plan_name?: string;
}

/**
 * 接口名称：修改推广计划名称
 * 接口标识：pdd.ad.plan.name.update
 * 接口使用场景：修改推广计划名称
 **/

export interface PddAdPlanNameUpdateResponseInterface {
  /**
   * @description: 返回response
   * @type: PddAdPlanNameUpdateAdPlanNameUpdateResponseResponseInterface
   * @default:
   *
   **/
  ad_plan_name_update_response: PddAdPlanNameUpdateAdPlanNameUpdateResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/

export interface PddAdPlanNameUpdateAdPlanNameUpdateResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_AD_PLAN_NAME_UPDATE]: {
    requestInterface: PddAdPlanNameUpdateRequestInterface;
    responseInterface: PddAdPlanNameUpdateResponseInterface;
  };
}
