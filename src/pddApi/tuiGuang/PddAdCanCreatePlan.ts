export const PDD_AD_CAN_CREATE_PLAN = 'PDD_AD_CAN_CREATE_PLAN';

/**
 * 接口名称：是否可以创建计划验证接口
 * 接口标识：pdd.ad.can.create.plan
 * 接口使用场景：验证是否可以创建计划，新建计划时需要满足两个条件：同意拼多多店铺推广软件服务协议&计划数没达到上限50个
 **/
export interface PddAdCanCreatePlanRequestInterface {
  /**
   * @description: 计划名
   * @type: string
   * @default:
   **/
  plan_name?: string;

  /**
   * @description: 0--搜索广告,1--明星店铺,2--定向广告,3--首页Banner广告
   * @type: number
   * @default:
   **/
  scene_type?: number;
}

/**
 * 接口名称：是否可以创建计划验证接口
 * 接口标识：pdd.ad.can.create.plan
 * 接口使用场景：验证是否可以创建计划，新建计划时需要满足两个条件：同意拼多多店铺推广软件服务协议&计划数没达到上限50个
 **/
export interface PddAdCanCreatePlanResponseInterface {
  /**
   * @description: response
   * @type: PddAdCanCreatePlanAdPlanCreateResponseResponseInterface
   * @default:
   *
   **/
  ad_plan_create_response: PddAdCanCreatePlanAdPlanCreateResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddAdCanCreatePlanAdPlanCreateResponseResponseInterface {
  /**
   * @description: 是否可以创建
   * @type: boolean
   * @default:
   **/
  creatable: boolean;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_AD_CAN_CREATE_PLAN]: {
    requestInterface: PddAdCanCreatePlanRequestInterface;
    responseInterface: PddAdCanCreatePlanResponseInterface;
  };
}
