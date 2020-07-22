export const PDD_AD_API_UNIT_CREATIVE_CREATE = 'pdd.ad.api.unit.creative.create';

/**
 * 接口名称：创建创意
 * 接口标识：pdd.ad.api.unit.creative.create
 * 接口使用场景：创建创意
 **/
export interface PddAdApiUnitCreativeCreateRequestInterface {
  /**
   * @description: 创意列表
   * @type: PddAdApiUnitCreativeCreateAdCreativeCreateMessageRequestInterface
   * @default:
   *
   **/
  adCreativeCreateMessage: PddAdApiUnitCreativeCreateAdCreativeCreateMessageRequestInterface;

  /**
   * @description: 广告单元Id
   * @type: string | number
   * @default:
   **/
  adId: string | number;
}

/**
 * @description 创意列表
 * @default
 * @example
 **/
export interface PddAdApiUnitCreativeCreateAdCreativeCreateMessageRequestInterface {
  /**
   * @description: 创意图片列表
   * @type: PddAdApiUnitCreativeCreateAdCreativeCreateMessageAdImageVOListRequestInterface[]
   * @default:
   *
   **/
  adImageVOList?: PddAdApiUnitCreativeCreateAdCreativeCreateMessageAdImageVOListRequestInterface[];

  /**
   * @description: 创意标题列表
   * @type: PddAdApiUnitCreativeCreateAdCreativeCreateMessageAdTextVOListRequestInterface[]
   * @default:
   *
   **/
  adTextVOList?: PddAdApiUnitCreativeCreateAdCreativeCreateMessageAdTextVOListRequestInterface[];

  /**
   * @description: 创意规格，6：商品轮播图，7：商品长图，其余规格暂不支持
   * @type: string | number
   * @default:
   **/
  creativeSpecificationId?: string | number;
}

/**
 * @description 创意图片列表
 * @default
 * @example
 **/
export interface PddAdApiUnitCreativeCreateAdCreativeCreateMessageAdImageVOListRequestInterface {
  /**
   * @description: 图片链接，可用图片参考以下接口返回：pdd.ad.api.goods.query.gallery.images（轮播图），pdd.ad.api.goods.query.long.images（长图）
   * @type: string
   * @default:
   **/
  imageUrl: string;
}

/**
 * @description 创意标题列表
 * @default
 * @example
 **/
export interface PddAdApiUnitCreativeCreateAdCreativeCreateMessageAdTextVOListRequestInterface {
  /**
   * @description: 标题
   * @type: string
   * @default:
   **/
  text: string;
}

/**
 * 接口名称：创建创意
 * 接口标识：pdd.ad.api.unit.creative.create
 * 接口使用场景：创建创意
 **/
export interface PddAdApiUnitCreativeCreateResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitCreativeCreateResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitCreativeCreateResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitCreativeCreateResponseResponseInterface {
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
   * @description: 是否创建成功
   * @type: boolean
   * @default:
   **/
  result: boolean;

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
