export const PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE = 'pdd.goods.logistics.ser.template.create';
export const PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE_RESPONSE_KEY = 'goods_logistics_ser_template_create_response';

/**
 * 接口名称：商品送装服务模版新增
 * 接口标识：pdd.goods.logistics.ser.template.create
 * 接口使用场景：商品送装服务模版新增
 **/
export interface PddGoodsLogisticsSerTemplateCreateRequestInterface {
  /**
   * @description: 服务模板类型：2：送货上门 3：送货上门并安装 4：上门安装 5： 买家自提
   * @type: number
   * @default:
   **/
  template_type: number;

  /**
   * @description: 服务模板名称（不超过50字）
   * @type: string
   * @default:
   **/
  template_name: string;

  /**
   * @description: 分地区配置溢价时使用的计价单位：0：价格分，按价格分计算费用；1：百分比，按照基础价格乘以百分比计算费用，除了"买家自提"服务，其他服务类型必传
   * @type: number
   * @default:
   **/
  price_unit?: number;

  /**
   * @description: 服务地区范围配置，此入参为string,[{ "value": 1, "district_id": 2, "city_id": 2, "province_id": 2 }]
   * @type: PddGoodsLogisticsSerTemplateCreateServiceAreaListRequestInterface[]
   * @default:
   *
   **/
  service_area_list?: PddGoodsLogisticsSerTemplateCreateServiceAreaListRequestInterface[];

  /**
   * @description: 分类目基础价格配置,入参为string，[{	"cat_id4": 1,	"cat_id3": 2,	"list": [{		"limit_type": 1,		"value": 1,		"content": [{			"price": 1,			"max_pro": 1,			"min_pro": 1		}]	}]}]
   * @type: PddGoodsLogisticsSerTemplateCreateCatListRequestInterface[]
   * @default:
   *
   **/
  cat_list?: PddGoodsLogisticsSerTemplateCreateCatListRequestInterface[];
}

/**
 * @description 服务地区范围配置，此入参为string,[{ "value": 1, "district_id": 2, "city_id": 2, "province_id": 2 }]
 * @default
 * @example
 **/
export interface PddGoodsLogisticsSerTemplateCreateServiceAreaListRequestInterface {
  /**
   * @description: 溢价值：按分溢价时，输入价格分的数字，表示value分；按百分比溢价时，输入0-500之间的数字，表示0%——500%备注：买家自提服务类型时，不用传该字段
   * @type: string
   * @default:
   **/
  value?: string;

  /**
   * @description: 区id，如果是全省或全市选中，则区id为0
   * @type: string
   * @default:
   **/
  district_id: string;

  /**
   * @description: 市id，如果是全省选中，则市id为0
   * @type: string
   * @default:
   **/
  city_id: string;

  /**
   * @description: 省id
   * @type: string
   * @default:
   **/
  province_id: string;
}

/**
 * @description 分类目基础价格配置,入参为string，[{	"cat_id4": 1,	"cat_id3": 2,	"list": [{		"limit_type": 1,		"value": 1,		"content": [{			"price": 1,			"max_pro": 1,			"min_pro": 1		}]	}]}]
 * @default
 * @example
 **/
export interface PddGoodsLogisticsSerTemplateCreateCatListRequestInterface {
  /**
   * @description: 类目规则配置
   * @type: PddGoodsLogisticsSerTemplateCreateCatListListRequestInterface[]
   * @default:
   *
   **/
  list: PddGoodsLogisticsSerTemplateCreateCatListListRequestInterface[];

  /**
   * @description: 四级类目id
   * @type: string | number
   * @default:
   **/
  cat_id4?: string | number;

  /**
   * @description: 三级类目id
   * @type: string | number
   * @default:
   **/
  cat_id3: string | number;
}

/**
 * @description 类目规则配置
 * @default
 * @example
 **/
export interface PddGoodsLogisticsSerTemplateCreateCatListListRequestInterface {
  /**
   * @description: 按属性收取费用时配置的内容：按属性限价时设置；按件限价时不用传，value和content必须设置一个
   * @type: PddGoodsLogisticsSerTemplateCreateCatListListContentRequestInterface[]
   * @default:
   *
   **/
  content?: PddGoodsLogisticsSerTemplateCreateCatListListContentRequestInterface[];

  /**
   * @description: 按“件”收取费用时配置的内容：按件限价时输入数字，表示每件商品附加费用$value分；按属性限价时不用传value和content必须设置一个
   * @type: string | number
   * @default:
   **/
  value: string | number;

  /**
   * @description: 分类目收取服务费用方式：1-按件收取费用，2-按属性收取费用
   * @type: number
   * @default:
   **/
  limit_type?: number;
}

/**
 * @description 按属性收取费用时配置的内容：按属性限价时设置；按件限价时不用传，value和content必须设置一个
 * @default
 * @example
 **/
export interface PddGoodsLogisticsSerTemplateCreateCatListListContentRequestInterface {
  /**
   * @description: 价格。单位：分
   * @type: string | number
   * @default:
   **/
  price: string | number;

  /**
   * @description: 属性区间大值，-1表示"其他"示例：要配置区间"100-200"的费用，则maxPro输入"200"要配置区间"其他"的费用，则maxPro输入"-1"备注：表示长度时单位为：mm
   * @type: string | number
   * @default:
   **/
  max_pro: string | number;

  /**
   * @description: 属性区间小值，-1表示"其他"示例：要配置区间"100-200"的费用，则minPro输入"100"要配置区间"其他"的费用，则minPro输入"-1"备注：表示长度时单位为：mm
   * @type: string | number
   * @default:
   **/
  min_pro: string | number;
}

/**
 * 接口名称：商品送装服务模版新增
 * 接口标识：pdd.goods.logistics.ser.template.create
 * 接口使用场景：商品送装服务模版新增
 **/
export interface PddGoodsLogisticsSerTemplateCreateResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsLogisticsSerTemplateCreateGoodsLogisticsSerTemplateCreateResponseResponseInterface
   * @default:
   *
   **/
  goods_logistics_ser_template_create_response: PddGoodsLogisticsSerTemplateCreateGoodsLogisticsSerTemplateCreateResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGoodsLogisticsSerTemplateCreateGoodsLogisticsSerTemplateCreateResponseResponseInterface {
  /**
   * @description: 模版id
   * @type: string
   * @default:
   **/
  template_id: string;
}
