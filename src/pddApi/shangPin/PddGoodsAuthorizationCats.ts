export const PDD_GOODS_AUTHORIZATION_CATS = 'PDD_GOODS_AUTHORIZATION_CATS';

/**
 * 接口名称：获取当前授权商家可发布的商品类目信息
 * 接口标识：pdd.goods.authorization.cats
 * 接口使用场景：获取当前授权商家可发布的商品类目信息
 **/

export interface PddGoodsAuthorizationCatsRequestInterface {
  /**
   * @description: 默认值=0，值=0时为顶点cat_id,通过树顶级节点获取一级类目
   * @type: string
   * @default:
   **/
  parent_cat_id: string;
}

/**
 * 接口名称：获取当前授权商家可发布的商品类目信息
 * 接口标识：pdd.goods.authorization.cats
 * 接口使用场景：获取当前授权商家可发布的商品类目信息
 **/

export interface PddGoodsAuthorizationCatsResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsAuthorizationCatsGoodsAuthCatsGetResponseResponseInterface
   * @default:
   *
   **/
  goods_auth_cats_get_response: PddGoodsAuthorizationCatsGoodsAuthCatsGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/

export interface PddGoodsAuthorizationCatsGoodsAuthCatsGetResponseResponseInterface {
  /**
   * @description: 类目对象列表
   * @type: PddGoodsAuthorizationCatsGoodsAuthCatsGetResponseGoodsCatsListResponseInterface[]
   * @default:
   *
   **/
  goods_cats_list: PddGoodsAuthorizationCatsGoodsAuthCatsGetResponseGoodsCatsListResponseInterface[];
}

/**
 * @description 类目对象列表
 * @default
 * @example
 **/

export interface PddGoodsAuthorizationCatsGoodsAuthCatsGetResponseGoodsCatsListResponseInterface {
  /**
   * @description: 对应ID下的类目名称
   * @type: string
   * @default:
   **/
  cat_name: string;

  /**
   * @description: 类目ID，一级类目ID
   * @type: string
   * @default:
   **/
  cat_id: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_GOODS_AUTHORIZATION_CATS]: {
    requestInterface: PddGoodsAuthorizationCatsRequestInterface;
    responseInterface: PddGoodsAuthorizationCatsResponseInterface;
  };
}
