export const PDD_GOODS_SPEC_GET = 'pdd.goods.spec.get';
export const PDD_GOODS_SPEC_GET_RESPONSE_KEY = 'goods_spec_get_response';
export const PDD_GOODS_SPEC_GET_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 60,
    times: 3000,
  },
];

/**
 * 接口名称：商品属性类目接口
 * 接口标识：pdd.goods.spec.get
 * 接口使用场景：获取商品规格信息
 **/
export interface PddGoodsSpecGetRequestInterface {
  /**
   * @description: 叶子类目ID，必须入参level=3时的cat_id,否则无法返回正确的参数
   * @type: string | number
   * @default:
   **/
  cat_id: string | number;
}

/**
 * 接口名称：商品属性类目接口
 * 接口标识：pdd.goods.spec.get
 * 接口使用场景：获取商品规格信息
 **/
export interface PddGoodsSpecGetResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsSpecGetGoodsSpecGetResponseResponseInterface
   * @default:
   *
   **/
  goods_spec_get_response: PddGoodsSpecGetGoodsSpecGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGoodsSpecGetGoodsSpecGetResponseResponseInterface {
  /**
   * @description: 规格列表对象
   * @type: PddGoodsSpecGetGoodsSpecGetResponseGoodsSpecListResponseInterface[]
   * @default:
   *
   **/
  goods_spec_list: PddGoodsSpecGetGoodsSpecGetResponseGoodsSpecListResponseInterface[];
}

/**
 * @description 规格列表对象
 * @default
 * @example
 **/
export interface PddGoodsSpecGetGoodsSpecGetResponseGoodsSpecListResponseInterface {
  /**
   * @description: 规格所属的叶子类目ID
   * @type: string | number
   * @default:
   **/
  cat_id: string | number;

  /**
   * @description: 商品规格对应的ID
   * @type: string | number
   * @default:
   **/
  parent_spec_id: string | number;

  /**
   * @description: 商品规格ID对应的规格名称
   * @type: string
   * @default:
   **/
  parent_spec_name: string;
}
