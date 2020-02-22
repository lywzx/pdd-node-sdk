export const PDD_GOODS_LOGISTICS_TEMPLATE_GET = 'PDD_GOODS_LOGISTICS_TEMPLATE_GET';

/**
 * 接口名称：商品运费模版接口
 * 接口标识：pdd.goods.logistics.template.get
 * 接口使用场景：获取拼多多商家的物流运费模板信息
 **/
export interface PddGoodsLogisticsTemplateGetRequestInterface {
  /**
   * @description: 默认返回运费模板的页数为1，最高为100页，注意：page与page_size必须传一个
   * @type: number
   * @default:
   **/
  page: number;

  /**
   * @description: 默认返回20条模板数据，最多100条数据
   * @type: number
   * @default:
   **/
  page_size: number;
}

/**
 * 接口名称：商品运费模版接口
 * 接口标识：pdd.goods.logistics.template.get
 * 接口使用场景：获取拼多多商家的物流运费模板信息
 **/
export interface PddGoodsLogisticsTemplateGetResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseResponseInterface
   * @default:
   *
   **/
  goods_logistics_template_get_response: PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseResponseInterface {
  /**
   * @description: 返回的运费模板总数
   * @type: number
   * @default:
   **/
  total_count: number;

  /**
   * @description: 商家运费模板对象列表
   * @type: PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseLogisticsTemplateListResponseInterface[]
   * @default:
   *
   **/
  logistics_template_list: PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseLogisticsTemplateListResponseInterface[];
}

/**
 * @description 商家运费模板对象列表
 * @default
 * @example
 **/
export interface PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseLogisticsTemplateListResponseInterface {
  /**
   * @description: 发货地省份id
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
   * @description: 是否顺丰包邮，1-是 0-否
   * @type: number
   * @default:
   **/
  sf_free_type: number;

  /**
   * @description: 不包邮区域/需要买家付邮费区域
   * @type: PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseLogisticsTemplateListCostTemplateListResponseInterface[]
   * @default:
   *
   **/
  cost_template_list: PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseLogisticsTemplateListCostTemplateListResponseInterface[];

  /**
   * @description: 模板id
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
   * @description: 包邮省份对象
   * @type: PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseLogisticsTemplateListFreeProvinceListResponseInterface[]
   * @default:
   *
   **/
  free_province_list: PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseLogisticsTemplateListFreeProvinceListResponseInterface[];
}

/**
 * @description 不包邮区域/需要买家付邮费区域
 * @default
 * @example
 **/
export interface PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseLogisticsTemplateListCostTemplateListResponseInterface {
  /**
   * @description: 不包邮的区域
   * @type: PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseLogisticsTemplateListCostTemplateListCostProvinceListResponseInterface[]
   * @default:
   *
   **/
  cost_province_list: PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseLogisticsTemplateListCostTemplateListCostProvinceListResponseInterface[];

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
export interface PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseLogisticsTemplateListCostTemplateListCostProvinceListResponseInterface {
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
 * @description 包邮省份对象
 * @default
 * @example
 **/
export interface PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseLogisticsTemplateListFreeProvinceListResponseInterface {
  /**
   * @description: 省份id
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
  [PDD_GOODS_LOGISTICS_TEMPLATE_GET]: {
    requestInterface: PddGoodsLogisticsTemplateGetRequestInterface;
    responseInterface: PddGoodsLogisticsTemplateGetResponseInterface;
  };
}
