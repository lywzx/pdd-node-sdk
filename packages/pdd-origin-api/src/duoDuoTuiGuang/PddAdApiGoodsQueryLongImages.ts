export const PDD_AD_API_GOODS_QUERY_LONG_IMAGES = 'pdd.ad.api.goods.query.long.images';

/**
 * 接口名称：查询商品长图
 * 接口标识：pdd.ad.api.goods.query.long.images
 * 接口使用场景：查询商品长图
 **/
export interface PddAdApiGoodsQueryLongImagesRequestInterface {
  /**
   * @description: 商品Id
   * @type: string | number
   * @default:
   **/
  goodsId: string | number;
}

/**
 * 接口名称：查询商品长图
 * 接口标识：pdd.ad.api.goods.query.long.images
 * 接口使用场景：查询商品长图
 **/
export interface PddAdApiGoodsQueryLongImagesResponseInterface {
  /**
   * @description:
   * @type: PddAdApiGoodsQueryLongImagesResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiGoodsQueryLongImagesResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiGoodsQueryLongImagesResponseResponseInterface {
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
   * @type: PddAdApiGoodsQueryLongImagesResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddAdApiGoodsQueryLongImagesResponseResultResponseInterface[];

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
export interface PddAdApiGoodsQueryLongImagesResponseResultResponseInterface {
  /**
   * @description:
   * @type: string
   * @default:
   **/
  imageUrl: string;
}
