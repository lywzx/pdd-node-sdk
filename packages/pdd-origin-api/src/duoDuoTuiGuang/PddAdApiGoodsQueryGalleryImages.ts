export const PDD_AD_API_GOODS_QUERY_GALLERY_IMAGES = 'pdd.ad.api.goods.query.gallery.images';

export const PDD_AD_API_GOODS_QUERY_GALLERY_IMAGES_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
    callSourceType: 0,
  },
];

/**
 * 接口名称：查询商品轮播图
 * 接口标识：pdd.ad.api.goods.query.gallery.images
 * 接口使用场景：查询商品轮播图
 **/
export interface PddAdApiGoodsQueryGalleryImagesRequestInterface {
  /**
   * @description: 商品Id
   * @type: string | number
   * @default:
   **/
  goodsId: string | number;
}

/**
 * 接口名称：查询商品轮播图
 * 接口标识：pdd.ad.api.goods.query.gallery.images
 * 接口使用场景：查询商品轮播图
 **/
export interface PddAdApiGoodsQueryGalleryImagesResponseInterface {
  /**
   * @description:
   * @type: PddAdApiGoodsQueryGalleryImagesResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiGoodsQueryGalleryImagesResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiGoodsQueryGalleryImagesResponseResponseInterface {
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
   * @type: PddAdApiGoodsQueryGalleryImagesResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddAdApiGoodsQueryGalleryImagesResponseResultResponseInterface[];

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
export interface PddAdApiGoodsQueryGalleryImagesResponseResultResponseInterface {
  /**
   * @description: 图片高
   * @type: number
   * @default:
   **/
  imageHeight: number;

  /**
   * @description: 图片链接
   * @type: string
   * @default:
   **/
  imageUrl: string;

  /**
   * @description: 图片宽
   * @type: number
   * @default:
   **/
  imageWidth: number;

  /**
   * @description: 标识轮播图排序，最小的为主轮播图
   * @type: number
   * @default:
   **/
  priority: number;
}
