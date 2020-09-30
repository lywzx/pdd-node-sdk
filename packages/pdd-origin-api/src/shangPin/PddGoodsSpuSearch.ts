export const PDD_GOODS_SPU_SEARCH = 'pdd.goods.spu.search';
export const PDD_GOODS_SPU_SEARCH_RESPONSE_KEY = 'spu_search_response';

/**
 * 接口名称：标品搜索接口
 * 接口标识：pdd.goods.spu.search
 * 接口使用场景：可以通过标品名称或者类目+关键属性的值两种模式进行搜索，搜索到的标品需要在标品详情接口获取详细信息。
 **/
export interface PddGoodsSpuSearchRequestInterface {
  /**
   * @description: 类目ID，可以是一二三四级类目，在该类目下进行搜索。
   * @type: string | number
   * @default:
   **/
  cat_id: string | number;

  /**
   * @description: 标品关键属性精确匹配。和标品标题必须入参其一。
   * @type: PddGoodsSpuSearchKeyPropRequestInterface[]
   * @default:
   *
   **/
  key_prop?: PddGoodsSpuSearchKeyPropRequestInterface[];

  /**
   * @description: 标品标题模糊搜索。和关键属性必须入参其一。
   * @type: string
   * @default:
   **/
  spu_name?: string;
}

/**
 * @description 标品关键属性精确匹配。和标品标题必须入参其一。
 * @default
 * @example
 **/
export interface PddGoodsSpuSearchKeyPropRequestInterface {
  /**
   * @description: 关键属性的引用属性ID，需要从pdd.cat.rule.get中获取。
   * @type: string | number
   * @default:
   **/
  ref_pid?: string | number;

  /**
   * @description: 属性值单位
   * @type: string
   * @default:
   **/
  value_unit?: string;

  /**
   * @description: 关键属性值，需要从pdd.goods.cat.template.get中获取。当要根据关键属性匹配时，和vid必须入参其一。
   * @type: string
   * @default:
   **/
  value?: string;

  /**
   * @description: 关键属性值ID，需要从pdd.goods.cat.template.get中获取规则。当要根据关键属性匹配时，和value必须入参其一。
   * @type: string | number
   * @default:
   **/
  vid?: string | number;
}

/**
 * 接口名称：标品搜索接口
 * 接口标识：pdd.goods.spu.search
 * 接口使用场景：可以通过标品名称或者类目+关键属性的值两种模式进行搜索，搜索到的标品需要在标品详情接口获取详细信息。
 **/
export interface PddGoodsSpuSearchResponseInterface {
  /**
   * @description: 标品搜索查询结果
   * @type: PddGoodsSpuSearchSpuSearchResponseResponseInterface
   * @default:
   *
   **/
  spu_search_response: PddGoodsSpuSearchSpuSearchResponseResponseInterface;
}

/**
 * @description 标品搜索查询结果
 * @default
 * @example
 **/
export interface PddGoodsSpuSearchSpuSearchResponseResponseInterface {
  /**
   * @description: 标品列表
   * @type: PddGoodsSpuSearchSpuSearchResponseSpuListResponseInterface[]
   * @default:
   *
   **/
  spu_list: PddGoodsSpuSearchSpuSearchResponseSpuListResponseInterface[];
}

/**
 * @description 标品列表
 * @default
 * @example
 **/
export interface PddGoodsSpuSearchSpuSearchResponseSpuListResponseInterface {
  /**
   * @description: 标品所在的类目ID。若非叶子类目，表示该标品可用于该类目下的任何叶子类目。
   * @type: string | number
   * @default:
   **/
  cat_id: string | number;

  /**
   * @description: 关键属性
   * @type: PddGoodsSpuSearchSpuSearchResponseSpuListKeyPropResponseInterface[]
   * @default:
   *
   **/
  key_prop: PddGoodsSpuSearchSpuSearchResponseSpuListKeyPropResponseInterface[];

  /**
   * @description: 标品标题
   * @type: string
   * @default:
   **/
  spu_name: string;
}

/**
 * @description 关键属性
 * @default
 * @example
 **/
export interface PddGoodsSpuSearchSpuSearchResponseSpuListKeyPropResponseInterface {
  /**
   * @description: 引用属性ID
   * @type: string | number
   * @default:
   **/
  ref_pid: string | number;

  /**
   * @description: 属性值单位
   * @type: string
   * @default:
   **/
  value_unit: string;

  /**
   * @description: 属性值
   * @type: string
   * @default:
   **/
  value: string;

  /**
   * @description: 属性值ID
   * @type: string | number
   * @default:
   **/
  vid: string | number;
}
