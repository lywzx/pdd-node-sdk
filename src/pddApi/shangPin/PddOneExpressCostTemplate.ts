export const PDD_ONE_EXPRESS_COST_TEMPLATE = 'PDD_ONE_EXPRESS_COST_TEMPLATE';

/**
 * 接口名称：按id获取商品运费模版接口
 * 接口标识：pdd.one.express.cost.template
 * 接口使用场景：根据id获取拼多多商家的物流运费模板信息
 **/

export interface PddOneExpressCostTemplateRequestInterface {
  /**
   * @description: 运费模板id
   * @type: string
   * @default:
   **/
  cost_template_id?: string;
}

/**
 * 接口名称：按id获取商品运费模版接口
 * 接口标识：pdd.one.express.cost.template
 * 接口使用场景：根据id获取拼多多商家的物流运费模板信息
 **/

export interface PddOneExpressCostTemplateResponseInterface {
  /**
   * @description: response
   * @type: PddOneExpressCostTemplateOneExpressCostTemplateResponseResponseInterface
   * @default:
   *
   **/
  one_express_cost_template_response: PddOneExpressCostTemplateOneExpressCostTemplateResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/

export interface PddOneExpressCostTemplateOneExpressCostTemplateResponseResponseInterface {
  /**
   * @description: 发货地省份ID
   * @type: number
   * @default:
   **/
  province_id: number;

  /**
   * @description: 发货地城市ID
   * @type: number
   * @default:
   **/
  city_id: number;

  /**
   * @description: 发货地区ID
   * @type: number
   * @default:
   **/
  district_id: number;

  /**
   * @description: 送货入户并安装服务，0-不支持、1-支持送货入户、2-支持送货入户并安装
   * @type: number
   * @default:
   **/
  additional_service_type: number;

  /**
   * @description: 是否顺丰包邮
   * @type: number
   * @default:
   **/
  sf_free_type: number;

  /**
   * @description: 不包邮区域/需要买家付邮费区域
   * @type: PddOneExpressCostTemplateOneExpressCostTemplateResponseCostTemplateListResponseInterface[]
   * @default:
   *
   **/
  cost_template_list: PddOneExpressCostTemplateOneExpressCostTemplateResponseCostTemplateListResponseInterface[];

  /**
   * @description: 运费模板id
   * @type: string
   * @default:
   **/
  template_id: string;

  /**
   * @description: 运费模板名称
   * @type: string
   * @default:
   **/
  template_name: string;

  /**
   * @description: 计费方式，0-按件计费，1-按重量计费
   * @type: number
   * @default:
   **/
  cost_type: number;

  /**
   * @description: 是否送货上门，对于包邮地区：true-商品包邮且送货上门，false-商品包邮但不送货上门
   * @type: boolean
   * @default:
   **/
  free_deliver_house: boolean;

  /**
   * @description: 送货上门地区列表
   * @type: PddOneExpressCostTemplateOneExpressCostTemplateResponseFreeDeliverHouseAreaListResponseInterface[]
   * @default:
   *
   **/
  free_deliver_house_area_list: PddOneExpressCostTemplateOneExpressCostTemplateResponseFreeDeliverHouseAreaListResponseInterface[];

  /**
   * @description: 包邮省份对象
   * @type: PddOneExpressCostTemplateOneExpressCostTemplateResponseFreeProvinceListResponseInterface[]
   * @default:
   *
   **/
  free_province_list: PddOneExpressCostTemplateOneExpressCostTemplateResponseFreeProvinceListResponseInterface[];
}

/**
 * @description 不包邮区域/需要买家付邮费区域
 * @default
 * @example
 **/

export interface PddOneExpressCostTemplateOneExpressCostTemplateResponseCostTemplateListResponseInterface {
  /**
   * @description: 不包邮的区域
   * @type: PddOneExpressCostTemplateOneExpressCostTemplateResponseCostTemplateListCostProvinceListResponseInterface[]
   * @default:
   *
   **/
  cost_province_list: PddOneExpressCostTemplateOneExpressCostTemplateResponseCostTemplateListCostProvinceListResponseInterface[];

  /**
   * @description: 首件
   * @type: string
   * @default:
   **/
  first_standard: string;

  /**
   * @description: 首件或首重价格，单位为分
   * @type: string
   * @default:
   **/
  first_cost: string;

  /**
   * @description: 续重或续件
   * @type: string
   * @default:
   **/
  add_standard: string;

  /**
   * @description: 续件或续重价格，单位为分
   * @type: string
   * @default:
   **/
  add_cost: string;

  /**
   * @description: 对不包邮地区，true-若要包邮须满足件数包邮，false-不开启满足件数包邮
   * @type: boolean
   * @default:
   **/
  is_have_free_min_count: boolean;

  /**
   * @description: 对不包邮地区，满足指定件数包邮，该值为商家设置的指定件数，若为-1则商家没有开启满足件数包邮
   * @type: string
   * @default:
   **/
  have_free_min_count: string;

  /**
   * @description: 对不包邮地区，true-若要包邮须满足指定价格则可以包邮，false-不开启满足指定价格包邮
   * @type: boolean
   * @default:
   **/
  is_have_free_min_amount: boolean;

  /**
   * @description: 对不包邮地区，满足指定价格包邮，该值为商家设置的指定订单金额，若为-1则商家没有开启满足指定价格包邮，注意，单位为分
   * @type: string
   * @default:
   **/
  have_free_min_amount: string;
}

/**
 * @description 不包邮的区域
 * @default
 * @example
 **/

export interface PddOneExpressCostTemplateOneExpressCostTemplateResponseCostTemplateListCostProvinceListResponseInterface {
  /**
   * @description: 省份
   * @type: string
   * @default:
   **/
  province: string;

  /**
   * @description: 不包邮区域的ID
   * @type: number
   * @default:
   **/
  province_id: number;
}

/**
 * @description 送货上门地区列表
 * @default
 * @example
 **/

export interface PddOneExpressCostTemplateOneExpressCostTemplateResponseFreeDeliverHouseAreaListResponseInterface {
  /**
   * @description: 包邮送货上门的城区ID
   * @type: number
   * @default:
   **/
  town_id: number;

  /**
   * @description: 包邮送货上门的城市ID
   * @type: number
   * @default:
   **/
  city_id: number;

  /**
   * @description: 包邮送货上门的省份ID
   * @type: number
   * @default:
   **/
  province_id: number;

  /**
   * @description: 包邮送货上门的省份
   * @type: string
   * @default:
   **/
  province: string;

  /**
   * @description: 包邮送货上门的城市
   * @type: string
   * @default:
   **/
  city: string;

  /**
   * @description: 包邮送货上门的城区
   * @type: string
   * @default:
   **/
  town: string;
}

/**
 * @description 包邮省份对象
 * @default
 * @example
 **/

export interface PddOneExpressCostTemplateOneExpressCostTemplateResponseFreeProvinceListResponseInterface {
  /**
   * @description: 省份ID
   * @type: string
   * @default:
   **/
  province_id: string;

  /**
   * @description: 省份
   * @type: string
   * @default:
   **/
  province: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_ONE_EXPRESS_COST_TEMPLATE]: {
    requestInterface: PddOneExpressCostTemplateRequestInterface;
    responseInterface: PddOneExpressCostTemplateResponseInterface;
  };
}
