export const PDD_GOODS_LOGISTICS_TEMPLATE_CREATE = 'pdd.goods.logistics.template.create';
export const PDD_GOODS_LOGISTICS_TEMPLATE_CREATE_RESPONSE_KEY = 'goods_logistics_template_create_response';

/**
 * 接口名称：创建商品物流模版
 * 接口标识：pdd.goods.logistics.template.create
 * 接口使用场景：创建物流模版
 **/
export interface PddGoodsLogisticsTemplateCreateRequestInterface {
  /**
   * @description: 非包邮模版列表
   * @type: PddGoodsLogisticsTemplateCreateCostTemplateListRequestInterface[]
   * @default:
   *
   **/
  cost_template_list?: PddGoodsLogisticsTemplateCreateCostTemplateListRequestInterface[];

  /**
   * @description: 包邮地区
   * @type: PddGoodsLogisticsTemplateCreateFreeProvinceListRequestInterface[]
   * @default:
   *
   **/
  free_province_list?: PddGoodsLogisticsTemplateCreateFreeProvinceListRequestInterface[];

  /**
   * @description: 计费方式，0-按件计费，1-按重量计费
   * @type: number
   * @default:
   **/
  cost_type?: number;

  /**
   * @description: 运费模板名称
   * @type: string
   * @default:
   **/
  template_name?: string;

  /**
   * @description: 发货地省份id
   * @type: number
   * @default:
   **/
  province_id: number;

  /**
   * @description: 发货地城市id
   * @type: number
   * @default:
   **/
  city_id: number;

  /**
   * @description: 发货地区id
   * @type: number
   * @default:
   **/
  district_id: number;
}

/**
 * @description 非包邮模版列表
 * @default
 * @example
 **/
export interface PddGoodsLogisticsTemplateCreateCostTemplateListRequestInterface {
  /**
   * @description: 首件
   * @type: string | number
   * @default:
   **/
  first_standard?: string | number;

  /**
   * @description: 首件或首重价格，单位为分
   * @type: string | number
   * @default:
   **/
  first_cost?: string | number;

  /**
   * @description: 续重或续件
   * @type: string | number
   * @default:
   **/
  add_standard?: string | number;

  /**
   * @description: 续件或续重价格，单位为分
   * @type: string | number
   * @default:
   **/
  add_cost?: string | number;

  /**
   * @description: 对不包邮地区，true-若要包邮须满足件数包邮，false-不开启满足件数包邮
   * @type: boolean
   * @default:
   **/
  is_have_free_min_count?: boolean;

  /**
   * @description: 对不包邮地区，满足指定件数包邮，该值为商家设置的指定件数，若为-1则商家没有开启满足件数包邮
   * @type: number
   * @default:
   **/
  have_free_min_count?: number;

  /**
   * @description: 对不包邮地区，true-若要包邮须满足指定价格则可以包邮，false-不开启满足指定价格包邮
   * @type: boolean
   * @default:
   **/
  is_have_free_min_amount?: boolean;

  /**
   * @description: 对不包邮地区，满足指定价格包邮，该值为商家设置的指定订单金额，若为-1则商家没有开启满足指定价格包邮，注意，单位为分
   * @type: string | number
   * @default:
   **/
  have_free_min_amount?: string | number;

  /**
   * @description: 省份列表
   * @type: PddGoodsLogisticsTemplateCreateCostTemplateListCostProvinceListRequestInterface[]
   * @default:
   *
   **/
  cost_province_list?: PddGoodsLogisticsTemplateCreateCostTemplateListCostProvinceListRequestInterface[];
}

/**
 * @description 省份列表
 * @default
 * @example
 **/
export interface PddGoodsLogisticsTemplateCreateCostTemplateListCostProvinceListRequestInterface {
  /**
   * @description: 省份ID
   * @type: number
   * @default:
   **/
  province_id?: number;
}

/**
 * @description 包邮地区
 * @default
 * @example
 **/
export interface PddGoodsLogisticsTemplateCreateFreeProvinceListRequestInterface {
  /**
   * @description: 省份ID
   * @type: number
   * @default:
   **/
  province_id?: number;
}

/**
 * 接口名称：创建商品物流模版
 * 接口标识：pdd.goods.logistics.template.create
 * 接口使用场景：创建物流模版
 **/
export interface PddGoodsLogisticsTemplateCreateResponseInterface {
  /**
   * @description: 返回resposne
   * @type: PddGoodsLogisticsTemplateCreateGoodsLogisticsTemplateCreateResponseResponseInterface
   * @default:
   *
   **/
  goods_logistics_template_create_response: PddGoodsLogisticsTemplateCreateGoodsLogisticsTemplateCreateResponseResponseInterface;
}

/**
 * @description 返回resposne
 * @default
 * @example
 **/
export interface PddGoodsLogisticsTemplateCreateGoodsLogisticsTemplateCreateResponseResponseInterface {
  /**
   * @description: 模版id
   * @type: string | number
   * @default:
   **/
  template_id: string | number;
}
