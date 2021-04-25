export const PDD_GOODS_CAT_RULE_GET = 'pdd.goods.cat.rule.get';
export const PDD_GOODS_CAT_RULE_GET_RESPONSE_KEY = 'cat_rule_get_response';

/**
 * 接口名称：类目商品发布规则查询接口
 * 接口标识：pdd.goods.cat.rule.get
 * 接口使用场景：通过叶子类目id获取该类目的发布规则，目前返回标品、商品服务、属性等规则。
 **/
export interface PddGoodsCatRuleGetRequestInterface {
  /**
   * @description: 类目id
   * @type: string | number
   * @default:
   **/
  cat_id: string | number;
}

/**
 * 接口名称：类目商品发布规则查询接口
 * 接口标识：pdd.goods.cat.rule.get
 * 接口使用场景：通过叶子类目id获取该类目的发布规则，目前返回标品、商品服务、属性等规则。
 **/
export interface PddGoodsCatRuleGetResponseInterface {
  /**
   * @description: 类目规则
   * @type: PddGoodsCatRuleGetCatRuleGetResponseResponseInterface
   * @default:
   *
   **/
  cat_rule_get_response: PddGoodsCatRuleGetCatRuleGetResponseResponseInterface;
}

/**
 * @description 类目规则
 * @default
 * @example
 **/
export interface PddGoodsCatRuleGetCatRuleGetResponseResponseInterface {
  /**
   * @description: 商品属性规则
   * @type: PddGoodsCatRuleGetCatRuleGetResponseGoodsPropertiesRuleResponseInterface
   * @default:
   *
   **/
  goods_properties_rule: PddGoodsCatRuleGetCatRuleGetResponseGoodsPropertiesRuleResponseInterface;

  /**
   * @description: 商品服务规则
   * @type: PddGoodsCatRuleGetCatRuleGetResponseGoodsServiceRuleResponseInterface
   * @default:
   *
   **/
  goods_service_rule: PddGoodsCatRuleGetCatRuleGetResponseGoodsServiceRuleResponseInterface;

  /**
   * @description: sku规则
   * @type: PddGoodsCatRuleGetCatRuleGetResponseGoodsSkuRuleResponseInterface
   * @default:
   *
   **/
  goods_sku_rule: PddGoodsCatRuleGetCatRuleGetResponseGoodsSkuRuleResponseInterface;

  /**
   * @description: 标品规则
   * @type: PddGoodsCatRuleGetCatRuleGetResponseSpuRuleResponseInterface
   * @default:
   *
   **/
  spu_rule: PddGoodsCatRuleGetCatRuleGetResponseSpuRuleResponseInterface;
}

/**
 * @description 商品属性规则
 * @default
 * @example
 **/
export interface PddGoodsCatRuleGetCatRuleGetResponseGoodsPropertiesRuleResponseInterface {
  /**
   * @description: 多个销售属性是否需要同时传
   * @type: boolean
   * @default:
   **/
  choose_all_qualify_spec: boolean;

  /**
   * @description: 允许自定义的销售属性数量
   * @type: string | number
   * @default:
   **/
  input_max_spec_num: string | number;

  /**
   * @description: 属性信息
   * @type: PddGoodsCatRuleGetCatRuleGetResponseGoodsPropertiesRulePropertiesResponseInterface[]
   * @default:
   *
   **/
  properties: PddGoodsCatRuleGetCatRuleGetResponseGoodsPropertiesRulePropertiesResponseInterface[];
}

/**
 * @description 属性信息
 * @default
 * @example
 **/
export interface PddGoodsCatRuleGetCatRuleGetResponseGoodsPropertiesRulePropertiesResponseInterface {
  /**
   * @description: 是否允许填写备注，仅当是销售属性时有意义
   * @type: boolean
   * @default:
   **/
  can_note: boolean;

  /**
   * @description: 可选择属性值数目，为0时代表不限。包括自定义的属性值和模版中给出的属性值。
   * @type: number
   * @default:
   **/
  choose_max_num: number;

  /**
   * @description: 可自定义属性值数目，为0时代表不可自定义。
   * @type: number
   * @default:
   **/
  input_max_num: number;

  /**
   * @description: 是否重要属性。填写重要属性有更多机会获取搜索、活动等场景流量。
   * @type: boolean
   * @default:
   **/
  is_important: boolean;

  /**
   * @description: 是否销售属性。销售属性需要在发商品时，商品属性上的属性值与规格中中的spec对应。
   * @type: boolean
   * @default:
   **/
  is_sale: boolean;

  /**
   * @description: 是否sku属性，sku维度的属性在商品发布时入参在sku对象下
   * @type: boolean
   * @default:
   **/
  is_sku: boolean;

  /**
   * @description: 最大值。在不同的属性值类型下有不同的含义。  文本类型时，代表文本最大长度；  数值类型时，代表数字最大值；  时间类型且最大值为时间时，代表时间最大值；  时间类型且最大值为数字时，代表距离今天或者本月往后的天数或月数。
   * @type: string
   * @default:
   **/
  max_value: string;

  /**
   * @description: 最小值。在不同的属性值类型下有不同的含义。  文本类型时，代表文本最小长度；  数值类型时，代表数字最小值；  时间类型且最小值为时间时，代表时间最小值；  时间类型且最小值为数字时，代表距离今天或者本月往前的天数或月数。
   * @type: string
   * @default:
   **/
  min_value: string;

  /**
   * @description: 属性名称
   * @type: string
   * @default:
   **/
  name: string;

  /**
   * @description: 销售属性对应的父规格id。
   * @type: string | number
   * @default:
   **/
  parent_spec_id: string | number;

  /**
   * @description: 属性值类型。在发商品时传自定义的属性值时，有不同的格式。 0=文本; 1=数值，如“100”; 2=数值范围，如“10,20”，表示10到20之间; 3=数值乘积-二维，如“10,10”，表示10*10; 4=数值乘积-三维，如“10,10,10”，表示10*10*10; 5=单项时间选择-年月日，如“2020-05-20”; 6=双项时间选择-年月日，如“2020-05-20,2020-06-20”; 7=单项时间选择-年月，如“2020-05”; 8=双项时间选择-年月，如“2020-05,2020-06”。
   * @type: number
   * @default:
   **/
  property_value_type: number;

  /**
   * @description: 属性id
   * @type: string | number
   * @default:
   **/
  ref_pid: string | number;

  /**
   * @description: 是否必填
   * @type: boolean
   * @default:
   **/
  required: boolean;

  /**
   * @description: 必填规则具体内容，当required=true且required_rule_type=1时该字段有效，表示当出现哪些属性/属性值时，该属性需要必填，json格式，两层List结构，外层list代表"或"关系，内层list代表"且"关系，例如：[[{\"ref_pid\":123,\"vid\":123}]]
   * @type: string
   * @default:
   **/
  required_rule: string;

  /**
   * @description: required=true时，该字段有效，为“0”时表示当前属性必填，不受其他属性影响，为“1”时表示当前属性是否必填由已填写的其他属性值决定
   * @type: number
   * @default:
   **/
  required_rule_type: number;

  /**
   * @description: 该属性的父属性。只有parent_pid下的show_vids中的值被选择时才可入参该属性。有多组父属性时，为且的关系。
   * @type: PddGoodsCatRuleGetCatRuleGetResponseGoodsPropertiesRulePropertiesShowConditionResponseInterface[]
   * @default:
   *
   **/
  show_condition: PddGoodsCatRuleGetCatRuleGetResponseGoodsPropertiesRulePropertiesShowConditionResponseInterface[];

  /**
   * @description: 属性值列表
   * @type: PddGoodsCatRuleGetCatRuleGetResponseGoodsPropertiesRulePropertiesValuesResponseInterface[]
   * @default:
   *
   **/
  values: PddGoodsCatRuleGetCatRuleGetResponseGoodsPropertiesRulePropertiesValuesResponseInterface[];

  /**
   * @description: 小数点允许最大精度，为0时代表不允许输入小数。对数值类属性值限制。
   * @type: number
   * @default:
   **/
  value_precision: number;

  /**
   * @description: 可选属性值单位，发商品填写自定义数值属性值时，选择其中之一作为单位。
   * @type: string[]
   * @default:
   **/
  value_unit: string[];
}

/**
 * @description 该属性的父属性。只有parent_pid下的show_vids中的值被选择时才可入参该属性。有多组父属性时，为且的关系。
 * @default
 * @example
 **/
export interface PddGoodsCatRuleGetCatRuleGetResponseGoodsPropertiesRulePropertiesShowConditionResponseInterface {
  /**
   * @description: 父属性id。
   * @type: string | number
   * @default:
   **/
  parent_ref_pid: string | number;

  /**
   * @description: 父属性值id。多个值任选其一即可。若为空表示任意值都可以。
   * @type: Array<string | number>
   * @default:
   **/
  parent_vids: Array<string | number>;
}

/**
 * @description 属性值列表
 * @default
 * @example
 **/
export interface PddGoodsCatRuleGetCatRuleGetResponseGoodsPropertiesRulePropertiesValuesResponseInterface {
  /**
   * @description: 扩展信息，表示颜色的色号。格式为ARGB
   * @type: string
   * @default:
   **/
  extend_info: string;

  /**
   * @description: 分组信息
   * @type: PddGoodsCatRuleGetCatRuleGetResponseGoodsPropertiesRulePropertiesValuesGroupResponseInterface
   * @default:
   *
   **/
  group: PddGoodsCatRuleGetCatRuleGetResponseGoodsPropertiesRulePropertiesValuesGroupResponseInterface;

  /**
   * @description: 表示对应父属性值id。当其中父属性值被选中时该子属性值才可选。为空则表示无此限制。
   * @type: Array<string | number>
   * @default:
   **/
  parent_vids: Array<string | number>;

  /**
   * @description: 规格id，发商品时需要和sku上的spec对应。
   * @type: string | number
   * @default:
   **/
  spec_id: string | number;

  /**
   * @description: 属性值
   * @type: string
   * @default:
   **/
  value: string;

  /**
   * @description: 基础属性值id
   * @type: string | number
   * @default:
   **/
  vid: string | number;
}

/**
 * @description 分组信息
 * @default
 * @example
 **/
export interface PddGoodsCatRuleGetCatRuleGetResponseGoodsPropertiesRulePropertiesValuesGroupResponseInterface {
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

/**
 * @description 商品服务规则
 * @default
 * @example
 **/
export interface PddGoodsCatRuleGetCatRuleGetResponseGoodsServiceRuleResponseInterface {
  /**
   * @description:
   * @type: PddGoodsCatRuleGetCatRuleGetResponseGoodsServiceRuleGoodsServiceRuleMapResponseInterface
   * @default:
   *
   **/
  goods_service_rule_map: PddGoodsCatRuleGetCatRuleGetResponseGoodsServiceRuleGoodsServiceRuleMapResponseInterface;

  /**
   * @description: 可选的商品类型列表
   * @type: number[]
   * @default:
   **/
  goods_type_list: number[];
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddGoodsCatRuleGetCatRuleGetResponseGoodsServiceRuleGoodsServiceRuleMapResponseInterface {
  /**
   * @description: 商品类型
   * @type: string
   * @default:
   **/
  $key: string;

  /**
   * @description:
   * @type: PddGoodsCatRuleGetCatRuleGetResponseGoodsServiceRuleGoodsServiceRuleMapValueResponseInterface
   * @default:
   *
   **/
  $value: PddGoodsCatRuleGetCatRuleGetResponseGoodsServiceRuleGoodsServiceRuleMapValueResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddGoodsCatRuleGetCatRuleGetResponseGoodsServiceRuleGoodsServiceRuleMapValueResponseInterface {
  /**
   * @description: 坏了包赔规则：0不可选、1可选
   * @type: number
   * @default:
   **/
  bad_claim_rule: number;

  /**
   * @description: 是否可以选择物流方式
   * @type: boolean
   * @default:
   **/
  can_select_delivery_type: boolean;

  /**
   * @description: 当日发货规则：0不可选、1可选
   * @type: number
   * @default:
   **/
  delivery_one_day_rule: number;

  /**
   * @description: 假一赔十规则：0不可选、1可选、2必选
   * @type: number
   * @default:
   **/
  folt_rule: number;

  /**
   * @description: 缺重包退规则：0不可选、1可选、2必选
   * @type: number
   * @default:
   **/
  lack_of_weight_claimRule: number;

  /**
   * @description: 全国联保规则：0不可选、1可选
   * @type: number
   * @default:
   **/
  quan_guo_lian_bao_rule: number;

  /**
   * @description: 7天无理由退换货规则：0不可选、1可选、2必选
   * @type: number
   * @default:
   **/
  refundable_rule: number;

  /**
   * @description: 可选承诺发货时间列表，单位：秒
   * @type: number[]
   * @default:
   **/
  shipment_limit_second_list: number[];

  /**
   * @description: 只换不修规则：0不可选、1可选
   * @type: number
   * @default:
   **/
  zhi_huan_bu_xiu_rule: number;
}

/**
 * @description sku规则
 * @default
 * @example
 **/
export interface PddGoodsCatRuleGetCatRuleGetResponseGoodsSkuRuleResponseInterface {
  /**
   * @description: 团购价最高差倍率
   * @type: string
   * @default:
   **/
  price_range_ratio: string;

  /**
   * @description: 同个商品下规格值的加和数量上限
   * @type: number
   * @default:
   **/
  spec_num_limit: number;
}

/**
 * @description 标品规则
 * @default
 * @example
 **/
export interface PddGoodsCatRuleGetCatRuleGetResponseSpuRuleResponseInterface {
  /**
   * @description: 标品管控类型。0=不管控；1=管控，表示商品发布时必须命中标品，且发布成功后不可更改关键属性；2=不可换品，表示发布成功后不可更改关键属性。
   * @type: number
   * @default:
   **/
  control_type: number;

  /**
   * @description: 关键属性
   * @type: PddGoodsCatRuleGetCatRuleGetResponseSpuRuleKeyPropResponseInterface[]
   * @default:
   *
   **/
  key_prop: PddGoodsCatRuleGetCatRuleGetResponseSpuRuleKeyPropResponseInterface[];
}

/**
 * @description 关键属性
 * @default
 * @example
 **/
export interface PddGoodsCatRuleGetCatRuleGetResponseSpuRuleKeyPropResponseInterface {
  /**
   * @description: 关键属性名
   * @type: string
   * @default:
   **/
  pname: string;

  /**
   * @description: 关键属性id
   * @type: string | number
   * @default:
   **/
  ref_pid: string | number;
}
