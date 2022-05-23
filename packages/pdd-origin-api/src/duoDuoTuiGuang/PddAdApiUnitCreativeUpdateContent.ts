export const PDD_AD_API_UNIT_CREATIVE_UPDATE_CONTENT = 'pdd.ad.api.unit.creative.update.content';

export const PDD_AD_API_UNIT_CREATIVE_UPDATE_CONTENT_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
    callSourceType: 0,
  },
];

/**
 * 接口名称：更新创意内容
 * 接口标识：pdd.ad.api.unit.creative.update.content
 * 接口使用场景：更新创意内容
 **/
export interface PddAdApiUnitCreativeUpdateContentRequestInterface {
  /**
   * @description: 创意更新输入
   * @type: PddAdApiUnitCreativeUpdateContentAdCreativeUpdateMessageRequestInterface
   * @default:
   *
   **/
  adCreativeUpdateMessage: PddAdApiUnitCreativeUpdateContentAdCreativeUpdateMessageRequestInterface;

  /**
   * @description: 创意单元Id
   * @type: string | number
   * @default:
   **/
  unitCreativeId: string | number;
}

/**
 * @description 创意更新输入
 * @default
 * @example
 **/
export interface PddAdApiUnitCreativeUpdateContentAdCreativeUpdateMessageRequestInterface {
  /**
   * @description: 创意图片列表
   * @type: PddAdApiUnitCreativeUpdateContentAdCreativeUpdateMessageAdImageVOListRequestInterface[]
   * @default:
   *
   **/
  adImageVOList?: PddAdApiUnitCreativeUpdateContentAdCreativeUpdateMessageAdImageVOListRequestInterface[];

  /**
   * @description: 创意标题列表
   * @type: PddAdApiUnitCreativeUpdateContentAdCreativeUpdateMessageAdTextVOListRequestInterface[]
   * @default:
   *
   **/
  adTextVOList?: PddAdApiUnitCreativeUpdateContentAdCreativeUpdateMessageAdTextVOListRequestInterface[];

  /**
   * @description: 创意规格Id，6-轮播图，7-长图
   * @type: string | number
   * @default:
   **/
  creativeSpecificationId: string | number;
}

/**
 * @description 创意图片列表
 * @default
 * @example
 **/
export interface PddAdApiUnitCreativeUpdateContentAdCreativeUpdateMessageAdImageVOListRequestInterface {
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
export interface PddAdApiUnitCreativeUpdateContentAdCreativeUpdateMessageAdTextVOListRequestInterface {
  /**
   * @description: 标题文字
   * @type: string
   * @default:
   **/
  text: string;
}

/**
 * 接口名称：更新创意内容
 * 接口标识：pdd.ad.api.unit.creative.update.content
 * 接口使用场景：更新创意内容
 **/
export interface PddAdApiUnitCreativeUpdateContentResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitCreativeUpdateContentResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitCreativeUpdateContentResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitCreativeUpdateContentResponseResponseInterface {
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
