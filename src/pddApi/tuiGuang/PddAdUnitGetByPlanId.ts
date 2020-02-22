export const PDD_AD_UNIT_GET_BY_PLAN_ID = 'PDD_AD_UNIT_GET_BY_PLAN_ID';

/**
 * 接口名称：根据计划id获取推广单元基本信息
 * 接口标识：pdd.ad.unit.get.by.plan.id
 * 接口使用场景：根据计划id获取推广单元基本信息（推广单元列表：推广单元id、商品id、推广单元状态、关键词个数），提供计划id可获取该计划下单元的基本信息
 **/
export interface PddAdUnitGetByPlanIdRequestInterface {
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
}

/**
 * 接口名称：根据计划id获取推广单元基本信息
 * 接口标识：pdd.ad.unit.get.by.plan.id
 * 接口使用场景：根据计划id获取推广单元基本信息（推广单元列表：推广单元id、商品id、推广单元状态、关键词个数），提供计划id可获取该计划下单元的基本信息
 **/
export interface PddAdUnitGetByPlanIdResponseInterface {
  /**
   * @description: 返回response
   * @type: PddAdUnitGetByPlanIdAdUnitBaseInfoListResponseResponseInterface
   * @default:
   *
   **/
  ad_unit_base_info_List_response: PddAdUnitGetByPlanIdAdUnitBaseInfoListResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/
export interface PddAdUnitGetByPlanIdAdUnitBaseInfoListResponseResponseInterface {
  /**
   * @description: 推广单元基本信息
   * @type: PddAdUnitGetByPlanIdAdUnitBaseInfoListResponseUnitBaseInfoListResponseInterface[]
   * @default:
   *
   **/
  unit_base_info_list: PddAdUnitGetByPlanIdAdUnitBaseInfoListResponseUnitBaseInfoListResponseInterface[];
}

/**
 * @description 推广单元基本信息
 * @default
 * @example
 **/
export interface PddAdUnitGetByPlanIdAdUnitBaseInfoListResponseUnitBaseInfoListResponseInterface {
  /**
   * @description: 关键词个数
   * @type: string
   * @default:
   **/
  keyword_count: string;

  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id: string;

  /**
   * @description: 单元状态。1表示推广中，2表示手动暂停，3表示商品售罄，4表示商品下架，5表示限制推广，6表示已删除，7表示审核中，8表示无推广中创意，9表示审核驳回，10表示品牌词重审驳回
   * @type: number
   * @default:
   **/
  unit_status: number;

  /**
   * @description: 单元id
   * @type: string
   * @default:
   **/
  unit_id: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_AD_UNIT_GET_BY_PLAN_ID]: {
    requestInterface: PddAdUnitGetByPlanIdRequestInterface;
    responseInterface: PddAdUnitGetByPlanIdResponseInterface;
  };
}
