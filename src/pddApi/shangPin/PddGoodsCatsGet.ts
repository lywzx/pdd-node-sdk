export const PDD_GOODS_CATS_GET = 'PDD_GOODS_CATS_GET';

/**
 * 接口名称：商品标准类目接口
 * 接口标识：pdd.goods.cats.get
 * 接口使用场景：获取拼多多标准商品类目信息（请使用pdd.goods.authorization.cats接口获取商家可发布类目）
 **/

export interface PddGoodsCatsGetRequestInterface {
  /**
   * @description: 值=0时为顶点cat_id,通过树顶级节点获取cat树
   * @type: string
   * @default:
   **/
  parent_cat_id?: string;
}

/**
 * 接口名称：商品标准类目接口
 * 接口标识：pdd.goods.cats.get
 * 接口使用场景：获取拼多多标准商品类目信息（请使用pdd.goods.authorization.cats接口获取商家可发布类目）
 **/

export interface PddGoodsCatsGetResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsCatsGetGoodsCatsGetResponseResponseInterface
   * @default:
   *
   **/
  goods_cats_get_response: PddGoodsCatsGetGoodsCatsGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/

export interface PddGoodsCatsGetGoodsCatsGetResponseResponseInterface {
  /**
   * @description: 类目树对象
   * @type: PddGoodsCatsGetGoodsCatsGetResponseGoodsCatsListResponseInterface[]
   * @default:
   *
   **/
  goods_cats_list: PddGoodsCatsGetGoodsCatsGetResponseGoodsCatsListResponseInterface[];
}

/**
 * @description 类目树对象
 * @default
 * @example
 **/

export interface PddGoodsCatsGetGoodsCatsGetResponseGoodsCatsListResponseInterface {
  /**
   * @description: 类目层级，1-一级类目，2-二级类目，3-三级类目，4-四级类目
   * @type: number
   * @default:
   **/
  level: number;

  /**
   * @description: 商品类目名称
   * @type: string
   * @default:
   **/
  cat_name: string;

  /**
   * @description: id所属父类目ID，其中，parent_id=0时为顶级节点
   * @type: string
   * @default:
   **/
  parent_cat_id: string;

  /**
   * @description: 商品类目ID
   * @type: string
   * @default:
   **/
  cat_id: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_GOODS_CATS_GET]: {
    requestInterface: PddGoodsCatsGetRequestInterface;
    responseInterface: PddGoodsCatsGetResponseInterface;
  };
}
