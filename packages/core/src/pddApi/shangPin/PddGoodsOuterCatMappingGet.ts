export const PDD_GOODS_OUTER_CAT_MAPPING_GET = 'pdd.goods.outer.cat.mapping.get';
export const PDD_GOODS_OUTER_CAT_MAPPING_GET_RESPONSE_KEY = 'outer_cat_mapping_get_response';

/**
 * 接口名称：类目预测接口
 * 接口标识：pdd.goods.outer.cat.mapping.get
 * 接口使用场景：类目预测
 **/
export interface PddGoodsOuterCatMappingGetRequestInterface {
  /**
   * @description: 外部叶子类目id
   * @type: string | number
   * @default:
   **/
  outer_cat_id: string | number;

  /**
   * @description: 外部叶子类目名称
   * @type: string
   * @default:
   **/
  outer_cat_name: string;

  /**
   * @description: 外部商品名称
   * @type: string
   * @default:
   **/
  outer_goods_name: string;
}

/**
 * 接口名称：类目预测接口
 * 接口标识：pdd.goods.outer.cat.mapping.get
 * 接口使用场景：类目预测
 **/
export interface PddGoodsOuterCatMappingGetResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsOuterCatMappingGetOuterCatMappingGetResponseResponseInterface
   * @default:
   *
   **/
  outer_cat_mapping_get_response: PddGoodsOuterCatMappingGetOuterCatMappingGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGoodsOuterCatMappingGetOuterCatMappingGetResponseResponseInterface {
  /**
   * @description: 一级类目
   * @type: string | number
   * @default:
   **/
  cat_id1: string | number;

  /**
   * @description: 二级类目
   * @type: string | number
   * @default:
   **/
  cat_id2: string | number;

  /**
   * @description: 三级类目
   * @type: string | number
   * @default:
   **/
  cat_id3: string | number;

  /**
   * @description: 四级类目
   * @type: string | number
   * @default:
   **/
  cat_id4: string | number;
}
