export const PDD_GOODS_SPU_GET = 'pdd.goods.spu.get';
export const PDD_GOODS_SPU_GET_RESPONSE_KEY = 'spu_get_response';

/**
 * 接口名称：标品详情接口
 * 接口标识：pdd.goods.spu.get
 * 接口使用场景：根据标品类目和关键属性获取标品详情信息，可以先通过pdd.goods.spu.search接口获取标品的类目及关键属性。
 **/
export interface PddGoodsSpuGetRequestInterface {
  /**
   * @description: 标品所在的类目ID
   * @type: string
   * @default:
   **/
  cat_id: string;

  /**
   * @description: 关键属性
   * @type: PddGoodsSpuGetKeyPropRequestInterface[]
   * @default:
   *
   **/
  key_prop: PddGoodsSpuGetKeyPropRequestInterface[];
}

/**
 * @description 关键属性
 * @default
 * @example
 **/
export interface PddGoodsSpuGetKeyPropRequestInterface {
  /**
   * @description: 引用属性ID
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
   * @description: 关键属性值，和vid必须入参其一。
   * @type: string
   * @default:
   **/
  value?: string;

  /**
   * @description: 关键属性值ID，和value必须入参其一。
   * @type: string | number
   * @default:
   **/
  vid?: string | number;
}

/**
 * 接口名称：标品详情接口
 * 接口标识：pdd.goods.spu.get
 * 接口使用场景：根据标品类目和关键属性获取标品详情信息，可以先通过pdd.goods.spu.search接口获取标品的类目及关键属性。
 **/
export interface PddGoodsSpuGetResponseInterface {
  /**
   * @description: 标品详情查询结果
   * @type: PddGoodsSpuGetSpuGetResponseResponseInterface
   * @default:
   *
   **/
  spu_get_response: PddGoodsSpuGetSpuGetResponseResponseInterface;
}

/**
 * @description 标品详情查询结果
 * @default
 * @example
 **/
export interface PddGoodsSpuGetSpuGetResponseResponseInterface {
  /**
   * @description: 绑定属性，商品属性中对应的引用属性的属性值需要和绑定属性值相同。
   * @type: PddGoodsSpuGetSpuGetResponseBindPropResponseInterface[]
   * @default:
   *
   **/
  bind_prop: PddGoodsSpuGetSpuGetResponseBindPropResponseInterface[];

  /**
   * @description: 商品轮播图
   * @type: string[]
   * @default:
   **/
  carousel_gallery: string[];

  /**
   * @description: 标品所在的类目ID。若非叶子类目，表示该标品可用于该类目下的任何叶子类目。
   * @type: string | number
   * @default:
   **/
  cat_id: string | number;

  /**
   * @description: 商品详情图
   * @type: string[]
   * @default:
   **/
  detail_gallery: string[];

  /**
   * @description: 商品标题
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 关键属性
   * @type: PddGoodsSpuGetSpuGetResponseKeyPropResponseInterface[]
   * @default:
   *
   **/
  key_prop: PddGoodsSpuGetSpuGetResponseKeyPropResponseInterface[];

  /**
   * @description: 商品前缀标题，若有返回值，则表示发布该标品对应的商品时，商品标题的开头需要包含这部分字符串。
   * @type: string
   * @default:
   **/
  pre_title: string;

  /**
   * @description: 销售属性，商品属性中对应的引用属性的属性值需要是销售属性值的子集。
   * @type: PddGoodsSpuGetSpuGetResponseSalePropResponseInterface[]
   * @default:
   *
   **/
  sale_prop: PddGoodsSpuGetSpuGetResponseSalePropResponseInterface[];

  /**
   * @description: 标品标题
   * @type: string
   * @default:
   **/
  spu_name: string;
}

/**
 * @description 绑定属性，商品属性中对应的引用属性的属性值需要和绑定属性值相同。
 * @default
 * @example
 **/
export interface PddGoodsSpuGetSpuGetResponseBindPropResponseInterface {
  /**
   * @description: 属性名
   * @type: string
   * @default:
   **/
  pname: string;

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

/**
 * @description 关键属性
 * @default
 * @example
 **/
export interface PddGoodsSpuGetSpuGetResponseKeyPropResponseInterface {
  /**
   * @description: 属性名
   * @type: string
   * @default:
   **/
  pname: string;

  /**
   * @description: 引用属性id
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

/**
 * @description 销售属性，商品属性中对应的引用属性的属性值需要是销售属性值的子集。
 * @default
 * @example
 **/
export interface PddGoodsSpuGetSpuGetResponseSalePropResponseInterface {
  /**
   * @description: 组ID
   * @type: number
   * @default:
   **/
  group_id: number;

  /**
   * @description: 父规格ID
   * @type: string | number
   * @default:
   **/
  parent_spec_id: string | number;

  /**
   * @description: 属性名
   * @type: string
   * @default:
   **/
  pname: string;

  /**
   * @description: 引用属性ID
   * @type: string | number
   * @default:
   **/
  ref_pid: string | number;

  /**
   * @description: 规格ID
   * @type: string | number
   * @default:
   **/
  spec_id: string | number;

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
