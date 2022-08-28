export const PDD_AD_API_UNIT_CREATE = 'pdd.ad.api.unit.create';

export const PDD_AD_API_UNIT_CREATE_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 5,
    callSourceType: 0,
  },
];

/**
 * 接口名称：创建单元
 * 接口标识：pdd.ad.api.unit.create
 * 接口使用场景：创建单元
 **/
export interface PddAdApiUnitCreateRequestInterface {
  /**
   * @description: 单元创建信息
   * @type: PddAdApiUnitCreateAdUnitCreateComplexMessageRequestInterface
   * @default:
   *
   **/
  adUnitCreateComplexMessage: PddAdApiUnitCreateAdUnitCreateComplexMessageRequestInterface;

  /**
   * @description: 广告计划Id
   * @type: string | number
   * @default:
   **/
  planId: string | number;

  /**
   * @description: 场景类型。0表示搜索，2表示展示。
   * @type: number
   * @default:
   **/
  scenesType: number;
}

/**
 * @description 单元创建信息
 * @default
 * @example
 **/
export interface PddAdApiUnitCreateAdUnitCreateComplexMessageRequestInterface {
  /**
   * @description: 创意创建信息列表
   * @type: PddAdApiUnitCreateAdUnitCreateComplexMessageAdCreativeCreateMessagesListRequestInterface[]
   * @default:
   *
   **/
  adCreativeCreateMessagesList?: PddAdApiUnitCreateAdUnitCreateComplexMessageAdCreativeCreateMessagesListRequestInterface[];

  /**
   * @description: 关键词创建列表
   * @type: PddAdApiUnitCreateAdUnitCreateComplexMessageAdKeywordCreateMessageListRequestInterface[]
   * @default:
   *
   **/
  adKeywordCreateMessageList?: PddAdApiUnitCreateAdUnitCreateComplexMessageAdKeywordCreateMessageListRequestInterface[];

  /**
   * @description: 智能词包相关信息
   * @type: PddAdApiUnitCreateAdUnitCreateComplexMessageAdKeywordSetMessageRequestInterface
   * @default:
   *
   **/
  adKeywordSetMessage?: PddAdApiUnitCreateAdUnitCreateComplexMessageAdKeywordSetMessageRequestInterface;

  /**
   * @description: 商品创建信息
   * @type: PddAdApiUnitCreateAdUnitCreateComplexMessageAdProductCreateMessageRequestInterface
   * @default:
   *
   **/
  adProductCreateMessage?: PddAdApiUnitCreateAdUnitCreateComplexMessageAdProductCreateMessageRequestInterface;

  /**
   * @description: 单元创建信息
   * @type: PddAdApiUnitCreateAdUnitCreateComplexMessageAdUnitCreateMessageRequestInterface
   * @default:
   *
   **/
  adUnitCreateMessage: PddAdApiUnitCreateAdUnitCreateComplexMessageAdUnitCreateMessageRequestInterface;

  /**
   * @description: 人群定向创建信息列表
   * @type: PddAdApiUnitCreateAdUnitCreateComplexMessageAudienceBidCreateMessageListRequestInterface[]
   * @default:
   *
   **/
  audienceBidCreateMessageList?: PddAdApiUnitCreateAdUnitCreateComplexMessageAudienceBidCreateMessageListRequestInterface[];

  /**
   * @description: 资源位定向创建信息列表。仅支持展示广告。
   * @type: PddAdApiUnitCreateAdUnitCreateComplexMessageLocationBidCreateMessageListRequestInterface[]
   * @default:
   *
   **/
  locationBidCreateMessageList?: PddAdApiUnitCreateAdUnitCreateComplexMessageLocationBidCreateMessageListRequestInterface[];

  /**
   * @description: 智能创意创建信息
   * @type: PddAdApiUnitCreateAdUnitCreateComplexMessageSmartCreativeCreateMessageRequestInterface
   * @default:
   *
   **/
  smartCreativeCreateMessage?: PddAdApiUnitCreateAdUnitCreateComplexMessageSmartCreativeCreateMessageRequestInterface;
}

/**
 * @description 创意创建信息列表
 * @default
 * @example
 **/
export interface PddAdApiUnitCreateAdUnitCreateComplexMessageAdCreativeCreateMessagesListRequestInterface {
  /**
   * @description: 创意图片列表
   * @type: PddAdApiUnitCreateAdUnitCreateComplexMessageAdCreativeCreateMessagesListAdImageVOListRequestInterface[]
   * @default:
   *
   **/
  adImageVOList?: PddAdApiUnitCreateAdUnitCreateComplexMessageAdCreativeCreateMessagesListAdImageVOListRequestInterface[];

  /**
   * @description: 创意标题列表
   * @type: PddAdApiUnitCreateAdUnitCreateComplexMessageAdCreativeCreateMessagesListAdTextVOListRequestInterface[]
   * @default:
   *
   **/
  adTextVOList?: PddAdApiUnitCreateAdUnitCreateComplexMessageAdCreativeCreateMessagesListAdTextVOListRequestInterface[];

  /**
   * @description: 创意规格，6：商品轮播图，7：商品长图，其余规格暂不支持
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
export interface PddAdApiUnitCreateAdUnitCreateComplexMessageAdCreativeCreateMessagesListAdImageVOListRequestInterface {
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
export interface PddAdApiUnitCreateAdUnitCreateComplexMessageAdCreativeCreateMessagesListAdTextVOListRequestInterface {
  /**
   * @description: 标题
   * @type: string
   * @default:
   **/
  text: string;
}

/**
 * @description 关键词创建列表
 * @default
 * @example
 **/
export interface PddAdApiUnitCreateAdUnitCreateComplexMessageAdKeywordCreateMessageListRequestInterface {
  /**
   * @description: 关键词出价
   * @type: string | number
   * @default:
   **/
  bid: string | number;

  /**
   * @description: 关键词溢价比例。万分比
   * @type: string | number
   * @default:
   **/
  premiumRate?: string | number;

  /**
   * @description: 关键词
   * @type: string
   * @default:
   **/
  word: string;
}

/**
 * @description 智能词包相关信息
 * @default
 * @example
 **/
export interface PddAdApiUnitCreateAdUnitCreateComplexMessageAdKeywordSetMessageRequestInterface {
  /**
   * @description: 词包出价。出价需在[0.10, 99.00]之间。
   * @type: string | number
   * @default:
   **/
  keywordSetBid?: string | number;
}

/**
 * @description 商品创建信息
 * @default
 * @example
 **/
export interface PddAdApiUnitCreateAdUnitCreateComplexMessageAdProductCreateMessageRequestInterface {
  /**
   * @description: 商品Id
   * @type: string | number
   * @default:
   **/
  goodsId?: string | number;
}

/**
 * @description 单元创建信息
 * @default
 * @example
 **/
export interface PddAdApiUnitCreateAdUnitCreateComplexMessageAdUnitCreateMessageRequestInterface {
  /**
   * @description: 推广单元名称
   * @type: string
   * @default:
   **/
  adName?: string;

  /**
   * @description: 基础出价。单位厘。
   * @type: string | number
   * @default:
   **/
  bid?: string | number;

  /**
   * @description: 智能优化广告相关。当单元使用自定义推广时，不要使用该字段。
   * @type: PddAdApiUnitCreateAdUnitCreateComplexMessageAdUnitCreateMessageOptimizationMessageRequestInterface
   * @default:
   *
   **/
  optimizationMessage?: PddAdApiUnitCreateAdUnitCreateComplexMessageAdUnitCreateMessageOptimizationMessageRequestInterface;
}

/**
 * @description 智能优化广告相关。当单元使用自定义推广时，不要使用该字段。
 * @default
 * @example
 **/
export interface PddAdApiUnitCreateAdUnitCreateComplexMessageAdUnitCreateMessageOptimizationMessageRequestInterface {
  /**
   * @description: 数据积累期出价。当使用OCPX时对该字段赋值。
   * @type: string | number
   * @default:
   **/
  accumulationBid?: string | number;

  /**
   * @description: 智能投放期出价。当使用OCPX时对该字段赋值。
   * @type: string | number
   * @default:
   **/
  optimizationBid?: string | number;

  /**
   * @description: 优化目标。0表示不优化。1表示优化ROI，2表示优化转化成本.自定义单元时，该值必传0；当单元使用展示自动调价功能(ECPC)时，该值必须传1；当单元使用展示OCPC功能（plan_strategy=3）时，该值必须传2。
   * @type: number
   * @default:
   **/
  optimizationGoal: number;

  /**
   * @description: 优化方式。0表示不优化，1表示ECPC，2表示OCPC。当单元使用ECPC时，该值必须传1；当使用OCPC时，该值必须传2。
   * @type: number
   * @default:
   **/
  optimizationMethod?: number;

  /**
   * @description: 可选优化出价列表。当使用OCPX时对该字段赋值。
   * @type: PddAdApiUnitCreateAdUnitCreateComplexMessageAdUnitCreateMessageOptimizationMessageOptionalOptimizationBidMessageListRequestInterface[]
   * @default:
   *
   **/
  optionalOptimizationBidMessageList?: PddAdApiUnitCreateAdUnitCreateComplexMessageAdUnitCreateMessageOptimizationMessageOptionalOptimizationBidMessageListRequestInterface[];
}

/**
 * @description 可选优化出价列表。当使用OCPX时对该字段赋值。
 * @default
 * @example
 **/
export interface PddAdApiUnitCreateAdUnitCreateComplexMessageAdUnitCreateMessageOptimizationMessageOptionalOptimizationBidMessageListRequestInterface {
  /**
   * @description: 可选优化出价价格
   * @type: string | number
   * @default:
   **/
  optimizationBid: string | number;

  /**
   * @description: 可选优化出价目标。3表示优化店铺关注，4表示优化商品收藏，5表示优化询单
   * @type: number
   * @default:
   **/
  optimizationGoal: number;
}

/**
 * @description 人群定向创建信息列表
 * @default
 * @example
 **/
export interface PddAdApiUnitCreateAdUnitCreateComplexMessageAudienceBidCreateMessageListRequestInterface {
  /**
   * @description: 定向创建信息
   * @type: PddAdApiUnitCreateAdUnitCreateComplexMessageAudienceBidCreateMessageListAdTargetingCreateMessageRequestInterface
   * @default:
   *
   **/
  adTargetingCreateMessage?: PddAdApiUnitCreateAdUnitCreateComplexMessageAudienceBidCreateMessageListAdTargetingCreateMessageRequestInterface;

  /**
   * @description: 人群定向类型，可用枚举值，参考接口：pdd.ad.api.unit.bid.query.base.target.profile
   * @type: string | number
   * @default:
   **/
  bidReferenceId: string | number;

  /**
   * @description: 出价，万分比
   * @type: string | number
   * @default:
   **/
  bidValue: string | number;

  /**
   * @description: 人群定向二级Id。默认为0。
   * @type: string | number
   * @default:
   **/
  subBidReferenceId: string | number;
}

/**
 * @description 定向创建信息
 * @default
 * @example
 **/
export interface PddAdApiUnitCreateAdUnitCreateComplexMessageAudienceBidCreateMessageListAdTargetingCreateMessageRequestInterface {
  /**
   * @description: 定向集合
   * @type: PddAdApiUnitCreateAdUnitCreateComplexMessageAudienceBidCreateMessageListAdTargetingCreateMessageAdTargetingSetRequestInterface
   * @default:
   *
   **/
  adTargetingSet?: PddAdApiUnitCreateAdUnitCreateComplexMessageAudienceBidCreateMessageListAdTargetingCreateMessageAdTargetingSetRequestInterface;

  /**
   * @description: 定向名称
   * @type: string
   * @default:
   **/
  targetingName?: string;
}

/**
 * @description 定向集合
 * @default
 * @example
 **/
export interface PddAdApiUnitCreateAdUnitCreateComplexMessageAudienceBidCreateMessageListAdTargetingCreateMessageAdTargetingSetRequestInterface {
  /**
   * @description: 地域定向
   * @type: PddAdApiUnitCreateAdUnitCreateComplexMessageAudienceBidCreateMessageListAdTargetingCreateMessageAdTargetingSetAreaStructRequestInterface
   * @default:
   *
   **/
  areaStruct?: PddAdApiUnitCreateAdUnitCreateComplexMessageAudienceBidCreateMessageListAdTargetingCreateMessageAdTargetingSetAreaStructRequestInterface;
}

/**
 * @description 地域定向
 * @default
 * @example
 **/
export interface PddAdApiUnitCreateAdUnitCreateComplexMessageAudienceBidCreateMessageListAdTargetingCreateMessageAdTargetingSetAreaStructRequestInterface {
  /**
   * @description: 地域Id列表。具体地域Id编码参见接口返回：pdd.ad.api.unit.bid.query.targeting.tag.list
   * @type: number[]
   * @default:
   **/
  areaIds: number[];
}

/**
 * @description 资源位定向创建信息列表。仅支持展示广告。
 * @default
 * @example
 **/
export interface PddAdApiUnitCreateAdUnitCreateComplexMessageLocationBidCreateMessageListRequestInterface {
  /**
   * @description: 资源位定向类型。可取值参考接口：pdd.ad.api.unit.bid.query.available.location
   * @type: string | number
   * @default:
   **/
  bidReferenceId: string | number;

  /**
   * @description: 出价，万分比
   * @type: string | number
   * @default:
   **/
  bidValue: string | number;
}

/**
 * @description 智能创意创建信息
 * @default
 * @example
 **/
export interface PddAdApiUnitCreateAdUnitCreateComplexMessageSmartCreativeCreateMessageRequestInterface {
  /**
   * @description: 智能创意流量分配比例
   * @type: number
   * @default:
   **/
  creativeFlowRate?: number;

  /**
   * @description: 是否启用智能创意标识
   * @type: number
   * @default:
   **/
  enableSmartCreative?: number;

  /**
   * @description: 智能创意标题
   * @type: string
   * @default:
   **/
  smartCreativeTitle?: string;
}

/**
 * 接口名称：创建单元
 * 接口标识：pdd.ad.api.unit.create
 * 接口使用场景：创建单元
 **/
export interface PddAdApiUnitCreateResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitCreateResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitCreateResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitCreateResponseResponseInterface {
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
   * @description: 单元Id
   * @type: string | number
   * @default:
   **/
  result: string | number;

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
