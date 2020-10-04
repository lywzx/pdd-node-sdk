export const PDD_GOODS_CAT_RULE_GET = 'pdd.goods.cat.rule.get';
export const PDD_GOODS_CAT_RULE_GET_RESPONSE_KEY = 'cat_rule_get_response';

/**
 * 接口名称：类目商品发布规则查询接口
 * 接口标识：pdd.goods.cat.rule.get
 * 接口使用场景：通过叶子类目id获取该类目的发布规则，目前仅返回标品相关的规则。
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
 * 接口使用场景：通过叶子类目id获取该类目的发布规则，目前仅返回标品相关的规则。
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
   * @description: 标品规则
   * @type: PddGoodsCatRuleGetCatRuleGetResponseSpuRuleResponseInterface
   * @default:
   *
   **/
  spu_rule: PddGoodsCatRuleGetCatRuleGetResponseSpuRuleResponseInterface;
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
