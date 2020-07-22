export const PDD_AD_API_GOODS_QUERY_PAGE = 'pdd.ad.api.goods.query.page';

/**
 * 接口名称：查询可用商品列表（分页）
 * 接口标识：pdd.ad.api.goods.query.page
 * 接口使用场景：查询可用商品列表（分页）
 **/
export interface PddAdApiGoodsQueryPageRequestInterface {
  /**
   * @description: 商品名称
   * @type: string
   * @default:
   **/
  goodsName?: string;

  /**
   * @description: 分页查询，查询第几页
   * @type: number
   * @default:
   **/
  pageNumber: number;

  /**
   * @description: 分页查询，每页的大小
   * @type: number
   * @default:
   **/
  pageSize: number;

  /**
   * @description: 计划Id
   * @type: string | number
   * @default:
   **/
  planId?: string | number;
}

/**
 * 接口名称：查询可用商品列表（分页）
 * 接口标识：pdd.ad.api.goods.query.page
 * 接口使用场景：查询可用商品列表（分页）
 **/
export interface PddAdApiGoodsQueryPageResponseInterface {
  /**
   * @description:
   * @type: PddAdApiGoodsQueryPageResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiGoodsQueryPageResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiGoodsQueryPageResponseResponseInterface {
  /**
   * @description:
   * @type: number
   * @default:
   **/
  errorCode: number;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  errorMsg: string;

  /**
   * @description:
   * @type: PddAdApiGoodsQueryPageResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddAdApiGoodsQueryPageResponseResultResponseInterface;

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  success: boolean;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiGoodsQueryPageResponseResultResponseInterface {
  /**
   * @description:
   * @type: PddAdApiGoodsQueryPageResponseResultResultResponseInterface[]
   * @default:
   *
   **/
  result: PddAdApiGoodsQueryPageResponseResultResultResponseInterface[];

  /**
   * @description:
   * @type: string | number
   * @default:
   **/
  total: string | number;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiGoodsQueryPageResponseResultResultResponseInterface {
  /**
   * @description: 商品类目Id
   * @type: string | number
   * @default:
   **/
  catId: string | number;

  /**
   * @description: 商品类目名称
   * @type: string
   * @default:
   **/
  catName: string;

  /**
   * @description: 商品Id
   * @type: string | number
   * @default:
   **/
  goodsId: string | number;

  /**
   * @description: 商品名称
   * @type: string
   * @default:
   **/
  goodsName: string;

  /**
   * @description: 商品最小团购价
   * @type: string | number
   * @default:
   **/
  minGroupPrice: string | number;

  /**
   * @description: 商品库存
   * @type: string | number
   * @default:
   **/
  quantity: string | number;

  /**
   * @description: 商品销量
   * @type: string | number
   * @default:
   **/
  soldQuantity: string | number;

  /**
   * @description: 商品图片链接
   * @type: string
   * @default:
   **/
  thumbUrl: string;
}
