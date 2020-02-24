export const PDD_GOODS_CAT_TEMPLATE_GET = 'pdd.goods.cat.template.get';
export const PDD_GOODS_CAT_TEMPLATE_GET_RESPONSE_KEY = 'open_api_response';

/**
 * 接口名称：获取商品类目属性
 * 接口标识：pdd.goods.cat.template.get
 * 接口使用场景：商品发布前，需要查询该类目的商品发布需要的属性，获取商品发布需要的模板-属性-属性值
 **/
export interface PddGoodsCatTemplateGetRequestInterface {
  /**
   * @description: 类目id
   * @type: string | number
   * @default:
   **/
  cat_id?: string | number;
}

/**
 * 接口名称：获取商品类目属性
 * 接口标识：pdd.goods.cat.template.get
 * 接口使用场景：商品发布前，需要查询该类目的商品发布需要的属性，获取商品发布需要的模板-属性-属性值
 **/
export interface PddGoodsCatTemplateGetResponseInterface {
  /**
   * @description: 属性信息
   * @type: PddGoodsCatTemplateGetOpenApiResponseResponseInterface
   * @default:
   *
   **/
  open_api_response: PddGoodsCatTemplateGetOpenApiResponseResponseInterface;
}

/**
 * @description 属性信息
 * @default
 * @example
 **/
export interface PddGoodsCatTemplateGetOpenApiResponseResponseInterface {
  /**
   * @description: 模板允许的最大的自定义规格数量
   * @type: string | number
   * @default:
   **/
  input_max_spec_num: string | number;

  /**
   * @description: 限定规格不支持部分选取，为true时限定规格要么全选要么全不选
   * @type: boolean
   * @default:
   **/
  choose_all_qualify_spec: boolean;

  /**
   * @description: 单个自定义规格值上限
   * @type: string | number
   * @default:
   **/
  single_spec_value_num: string | number;

  /**
   * @description: 最大sku数目上限
   * @type: string | number
   * @default:
   **/
  max_sku_num: string | number;

  /**
   * @description: 属性信息
   * @type: PddGoodsCatTemplateGetOpenApiResponsePropertiesResponseInterface[]
   * @default:
   *
   **/
  properties: PddGoodsCatTemplateGetOpenApiResponsePropertiesResponseInterface[];
}

/**
 * @description 属性信息
 * @default
 * @example
 **/
export interface PddGoodsCatTemplateGetOpenApiResponsePropertiesResponseInterface {
  /**
   * @description: 模板属性id
   * @type: string | number
   * @default:
   **/
  id: string | number;

  /**
   * @description: 属性别名
   * @type: string
   * @default:
   **/
  name_alias: string;

  /**
   * @description: 属性名称
   * @type: string
   * @default:
   **/
  name: string;

  /**
   * @description: 属性值单位
   * @type: string
   * @default:
   **/
  value_unit: string;

  /**
   * @description: 小数点允许最大精度,为0时代表不允许输入小数
   * @type: number
   * @default:
   **/
  value_precision: number;

  /**
   * @description: 输入最大值：文本类型代表文本最长长度、 数值类型代表数字最大值、时间类型代表时间最大值
   * @type: string
   * @default:
   **/
  max_value: string;

  /**
   * @description: 输入最小值：文本类型代表文本最小长度、数值类型代表数字最小值、时间类型代表时间最小值
   * @type: string
   * @default:
   **/
  min_value: string;

  /**
   * @description: 是否必填
   * @type: boolean
   * @default:
   **/
  required: boolean;

  /**
   * @description: 控件类型（0-可输入、1-可勾选、3-可输入又可勾选、5-单项时间选择器-年月日、6-双项时间选择器-年月日、7-单项时间选择器-年月、8-双项时间选择器-年月）9-调色盘、10-尺码选择器、11-输入数值范围、12-输入数值乘积-2维、13-输入数值乘积-3维
   * @type: number
   * @default:
   **/
  control_type: number;

  /**
   * @description: 属性值类型（0-文本、1-数值、4-绝对时间、5-相对时间）
   * @type: number
   * @default:
   **/
  value_type: number;

  /**
   * @description: 最大可勾选数目,为0时代表不限
   * @type: number
   * @default:
   **/
  choose_max_num: number;

  /**
   * @description: 最大可输入数目,为0时代表不可输入，非销售属性为null
   * @type: number
   * @default:
   **/
  input_max_num: number;

  /**
   * @description: 父属性id
   * @type: string | number
   * @default:
   **/
  parent_id: string | number;

  /**
   * @description: 是否销售属性
   * @type: boolean
   * @default:
   **/
  is_sale: boolean;

  /**
   * @description: 是否允许填写备注
   * @type: boolean
   * @default:
   **/
  can_note: boolean;

  /**
   * @description: 销售属性规格id，非销售属性为null
   * @type: string | number
   * @default:
   **/
  spec_id: string | number;

  /**
   * @description: 属性特性:0普通，1颜色，2尺码
   * @type: number
   * @default:
   **/
  feature: number;

  /**
   * @description: 是否父属性
   * @type: boolean
   * @default:
   **/
  is_parent: boolean;

  /**
   * @description: 引用属性id
   * @type: string | number
   * @default:
   **/
  ref_pid: string | number;

  /**
   * @description: 属性值列表
   * @type: PddGoodsCatTemplateGetOpenApiResponsePropertiesValuesResponseInterface[]
   * @default:
   *
   **/
  values: PddGoodsCatTemplateGetOpenApiResponsePropertiesValuesResponseInterface[];

  /**
   * @description: 是否按条件展示
   * @type: boolean
   * @default:
   **/
  is_condition_show: boolean;

  /**
   * @description: 若属性按条件展示,则只有show_vids中的值被选择时属性才可使用
   * @type: Array<string | number>
   * @default:
   **/
  show_vids: Array<string | number>;
}

/**
 * @description 属性值列表
 * @default
 * @example
 **/
export interface PddGoodsCatTemplateGetOpenApiResponsePropertiesValuesResponseInterface {
  /**
   * @description: 基础属性值id
   * @type: string | number
   * @default:
   **/
  vid: string | number;

  /**
   * @description: 属性值
   * @type: string
   * @default:
   **/
  value: string;

  /**
   * @description: 分组信息，非销售属性为null
   * @type: PddGoodsCatTemplateGetOpenApiResponsePropertiesValuesGroupResponseInterface
   * @default:
   *
   **/
  group: PddGoodsCatTemplateGetOpenApiResponsePropertiesValuesGroupResponseInterface;

  /**
   * @description: 扩展信息，颜色的话色号在这里,ARGB，非销售属性为null
   * @type: string
   * @default:
   **/
  extend_info: string;

  /**
   * @description: 规格id,非销售属性为null
   * @type: string | number
   * @default:
   **/
  spec_id: string | number;

  /**
   * @description: 是否父属性值
   * @type: boolean
   * @default:
   **/
  is_parent: boolean;

  /**
   * @description: 对应的父属性值id
   * @type: Array<string | number>
   * @default:
   **/
  parent_vids: Array<string | number>;
}

/**
 * @description 分组信息，非销售属性为null
 * @default
 * @example
 **/
export interface PddGoodsCatTemplateGetOpenApiResponsePropertiesValuesGroupResponseInterface {
  /**
   * @description: 组id
   * @type: number
   * @default:
   **/
  id: number;

  /**
   * @description: 组名称
   * @type: string
   * @default:
   **/
  name: string;
}
