export const PDD_AD_PLAN_OPT_STATUS_UPDATE = 'pdd.ad.plan.opt.status.update';
export const PDD_AD_PLAN_OPT_STATUS_UPDATE_RESPONSE_KEY = 'ad_plan_opt_status_update_response';

/**
 * 接口名称：修改推广计划状态（暂停、开启）
 * 接口标识：pdd.ad.plan.opt.status.update
 * 接口使用场景：修改推广计划状态（暂停、开启），开启计划时会判断账户的余额是否充足、计划的日预算是否充足、计划、单元、关键词、创意是否均为推广中状态
 **/
export interface PddAdPlanOptStatusUpdateRequestInterface {
  /**
   * @description: 0--搜索广告,1--明星店铺,2--定向广告,3--首页Banner广告（目前只支持0，暂不支持1、2、3）
   * @type: number
   * @default:
   **/
  scene_type: number;

  /**
   * @description: 计划id
   * @type: string | number
   * @default:
   **/
  plan_id: string | number;

  /**
   * @description: 1 已启用,2 已暂停
   * @type: number
   * @default:
   **/
  opt_status: number;
}

/**
 * 接口名称：修改推广计划状态（暂停、开启）
 * 接口标识：pdd.ad.plan.opt.status.update
 * 接口使用场景：修改推广计划状态（暂停、开启），开启计划时会判断账户的余额是否充足、计划的日预算是否充足、计划、单元、关键词、创意是否均为推广中状态
 **/
export interface PddAdPlanOptStatusUpdateResponseInterface {
  /**
   * @description: 返回response
   * @type: PddAdPlanOptStatusUpdateAdPlanOptStatusUpdateResponseResponseInterface
   * @default:
   *
   **/
  ad_plan_opt_status_update_response: PddAdPlanOptStatusUpdateAdPlanOptStatusUpdateResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/
export interface PddAdPlanOptStatusUpdateAdPlanOptStatusUpdateResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
