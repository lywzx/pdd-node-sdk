export const PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL = 'pdd.goods.logistics.ser.template.detail';
export const PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL_RESPONSE_KEY = 'goods_logistics_ser_template_detail_response';

/**
 * 接口名称：商品送装服务模版详情
 * 接口标识：pdd.goods.logistics.ser.template.detail
 * 接口使用场景：商品送装服务模版详情
 **/
export interface PddGoodsLogisticsSerTemplateDetailRequestInterface {
  /**
   * @description: 模版id
   * @type: string
   * @default:
   **/
  template_id: string;
}

/**
 * 接口名称：商品送装服务模版详情
 * 接口标识：pdd.goods.logistics.ser.template.detail
 * 接口使用场景：商品送装服务模版详情
 **/
export interface PddGoodsLogisticsSerTemplateDetailResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsLogisticsSerTemplateDetailGoodsLogisticsSerTemplateDetailResponseResponseInterface
   * @default:
   *
   **/
  goods_logistics_ser_template_detail_response: PddGoodsLogisticsSerTemplateDetailGoodsLogisticsSerTemplateDetailResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGoodsLogisticsSerTemplateDetailGoodsLogisticsSerTemplateDetailResponseResponseInterface {
  /**
   * @description: 分类目基础价格配置
   * @type: PddGoodsLogisticsSerTemplateDetailGoodsLogisticsSerTemplateDetailResponseCatListResponseInterface[]
   * @default:
   *
   **/
  cat_list: PddGoodsLogisticsSerTemplateDetailGoodsLogisticsSerTemplateDetailResponseCatListResponseInterface[];

  /**
   * @description: 店铺id
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;

  /**
   * @description: 分地区配置溢价时使用的计价单位：0：价格分，按价格分计算费用；1：百分比，按照基础价格乘以百分比计算费用，除了"买家自提"服务，其他服务类型必传
   * @type: number
   * @default:
   **/
  price_unit: number;

  /**
   * @description: 服务地区范围配置
   * @type: PddGoodsLogisticsSerTemplateDetailGoodsLogisticsSerTemplateDetailResponseServiceAreaListResponseInterface[]
   * @default:
   *
   **/
  service_area_list: PddGoodsLogisticsSerTemplateDetailGoodsLogisticsSerTemplateDetailResponseServiceAreaListResponseInterface[];

  /**
   * @description: 模版id
   * @type: string
   * @default:
   **/
  template_id: string;

  /**
   * @description: 服务模板名称（不超过50字）
   * @type: string
   * @default:
   **/
  template_name: string;

  /**
   * @description: 服务模板类型：2：送货上门 3：送货上门并安装 4：上门安装 5： 买家自提
   * @type: number
   * @default:
   **/
  template_type: number;
}

/**
 * @description 分类目基础价格配置
 * @default
 * @example
 **/
export interface PddGoodsLogisticsSerTemplateDetailGoodsLogisticsSerTemplateDetailResponseCatListResponseInterface {
  /**
   * @description: 三级类目id
   * @type: string | number
   * @default:
   **/
  cat_id3: string | number;

  /**
   * @description: 四级类目id
   * @type: string | number
   * @default:
   **/
  cat_id4: string | number;

  /**
   * @description: 三级类目名称
   * @type: string
   * @default:
   **/
  cat_name3: string;

  /**
   * @description: 四级类目名称
   * @type: string
   * @default:
   **/
  cat_name4: string;

  /**
   * @description: 类目规则配置
   * @type: PddGoodsLogisticsSerTemplateDetailGoodsLogisticsSerTemplateDetailResponseCatListListResponseInterface[]
   * @default:
   *
   **/
  list: PddGoodsLogisticsSerTemplateDetailGoodsLogisticsSerTemplateDetailResponseCatListListResponseInterface[];
}

/**
 * @description 类目规则配置
 * @default
 * @example
 **/
export interface PddGoodsLogisticsSerTemplateDetailGoodsLogisticsSerTemplateDetailResponseCatListListResponseInterface {
  /**
   * @description: 按属性收取费用时配置的内容：按属性限价时设置；按件限价时不用传，value和content必须设置一个
   * @type: PddGoodsLogisticsSerTemplateDetailGoodsLogisticsSerTemplateDetailResponseCatListListContentResponseInterface[]
   * @default:
   *
   **/
  content: PddGoodsLogisticsSerTemplateDetailGoodsLogisticsSerTemplateDetailResponseCatListListContentResponseInterface[];

  /**
   * @description: 分类目收取服务费用方式：1-按件收取费用，2-按属性收取费用
   * @type: string | number
   * @default:
   **/
  limit_type: string | number;

  /**
   * @description: mms商品编辑页的展示字段
   * @type: string
   * @default:
   **/
  mms_view: string;

  /**
   * @description: 按件收取费用时配置的内容：按件限价时输入数字，表示每件商品附加费用$value分；按属性限价时不用传value和content必须设置一个
   * @type: string | number
   * @default:
   **/
  value: string | number;
}

/**
 * @description 按属性收取费用时配置的内容：按属性限价时设置；按件限价时不用传，value和content必须设置一个
 * @default
 * @example
 **/
export interface PddGoodsLogisticsSerTemplateDetailGoodsLogisticsSerTemplateDetailResponseCatListListContentResponseInterface {
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

  /**
   * @description: 价格。单位：分
   * @type: string | number
   * @default:
   **/
  price: string | number;
}

/**
 * @description 服务地区范围配置
 * @default
 * @example
 **/
export interface PddGoodsLogisticsSerTemplateDetailGoodsLogisticsSerTemplateDetailResponseServiceAreaListResponseInterface {
  /**
   * @description: 市id，如果是全省选中，则市id为0
   * @type: number
   * @default:
   **/
  city_id: number;

  /**
   * @description: 区id，如果是全省或全市选中，则区id为0
   * @type: number
   * @default:
   **/
  district_id: number;

  /**
   * @description: 省id
   * @type: number
   * @default:
   **/
  province_id: number;

  /**
   * @description: 溢价值：按分溢价时，输入价格分的数字，表示value分；按百分比溢价时，输入0-500之间的数字，表示0%——500%备注：买家自提服务类型时，不用传该字段
   * @type: number
   * @default:
   **/
  value: number;
}
