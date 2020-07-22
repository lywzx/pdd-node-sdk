export const PDD_AD_API_UNIT_BID_QUERY_LIST = 'pdd.ad.api.unit.bid.query.list';

/**
 * 接口名称：查询定向/资源位列表
 * 接口标识：pdd.ad.api.unit.bid.query.list
 * 接口使用场景：查询定向/资源位列表
 **/
export interface PddAdApiUnitBidQueryListRequestInterface {
  /**
   * @description: 广告单元Id
   * @type: string | number
   * @default:
   **/
  adId: string | number;

  /**
   * @description: 报表数据开始日期
   * @type: string
   * @default:
   **/
  beginDate: string;

  /**
   * @description: 出价资源类型。1表示人群定向，2表示资源位。
   * @type: number
   * @default:
   **/
  bidReferenceType: number;

  /**
   * @description: 报表数据截止日期
   * @type: string
   * @default:
   **/
  endDate: string;

  /**
   * @description: 排序字段。0表示按曝光量排序，1表示按点击量排序，2表示按点击率排序，3表示按点击单价排序，4表示按消耗排序，5表示按订单数排序，6表示按交易额排序，7表示按产出比排序，8表示按日期排序，9表示按千次曝光单价排序，10表示按店铺收藏数排序，11表示按商品收藏数排序，12表示按点击转化率排序，13表示按转化成本排序，14表示按平均成交金额排序。
   * @type: number
   * @default:
   **/
  orderBy?: number;

  /**
   * @description: 排序类型。0表示降序，1表示升序。
   * @type: number
   * @default:
   **/
  sortBy?: number;
}

/**
 * 接口名称：查询定向/资源位列表
 * 接口标识：pdd.ad.api.unit.bid.query.list
 * 接口使用场景：查询定向/资源位列表
 **/
export interface PddAdApiUnitBidQueryListResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitBidQueryListResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitBidQueryListResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitBidQueryListResponseResponseInterface {
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
   * @type: PddAdApiUnitBidQueryListResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddAdApiUnitBidQueryListResponseResultResponseInterface[];

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
export interface PddAdApiUnitBidQueryListResponseResultResponseInterface {
  /**
   * @description: 广告单元Id
   * @type: string | number
   * @default:
   **/
  adId: string | number;

  /**
   * @description: 定向信息
   * @type: PddAdApiUnitBidQueryListResponseResultAdTargetingVOResponseInterface
   * @default:
   *
   **/
  adTargetingVO: PddAdApiUnitBidQueryListResponseResultAdTargetingVOResponseInterface;

  /**
   * @description: 每笔成交金额(average pay amount)，单位厘
   * @type: string
   * @default:
   **/
  avgPayAmount: string;

  /**
   * @description: 出价Id
   * @type: string | number
   * @default:
   **/
  bidId: string | number;

  /**
   * @description: 定向类型 或 资源位类型
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
   * @description: 广告点击量
   * @type: string | number
   * @default:
   **/
  click: string | number;

  /**
   * @description: 平均点击花费，单位厘
   * @type: string
   * @default:
   **/
  cpc: string;

  /**
   * @description: 千次展现成本
   * @type: string
   * @default:
   **/
  cpm: string;

  /**
   * @description: 广告点击率
   * @type: string
   * @default:
   **/
  ctr: string;

  /**
   * @description: 点击转化率
   * @type: string
   * @default:
   **/
  cvr: string;

  /**
   * @description: 广告转化支付金额，单位厘
   * @type: string | number
   * @default:
   **/
  gmv: string | number;

  /**
   * @description: 商品收藏数
   * @type: string | number
   * @default:
   **/
  goodsFavNum: string | number;

  /**
   * @description: 广告曝光量
   * @type: string | number
   * @default:
   **/
  impression: string | number;

  /**
   * @description: 店铺收藏数
   * @type: string | number
   * @default:
   **/
  mallFavNum: string | number;

  /**
   * @description: 广告主Id
   * @type: string | number
   * @default:
   **/
  mallId: string | number;

  /**
   * @description: 广告转化支付订单量
   * @type: string | number
   * @default:
   **/
  orderNum: string | number;

  /**
   * @description: 广告投入产出比
   * @type: string
   * @default:
   **/
  roi: string;

  /**
   * @description: 广告消耗，单位厘
   * @type: string | number
   * @default:
   **/
  spend: string | number;

  /**
   * @description: 人群定向二级Id。当出价资源为展示场景兴趣点时表示兴趣点Id，当出价资源为展示场景人群包时表示人群包Id，当出价资源为展示场景地域时表示地域Id。
   * @type: string
   * @default:
   **/
  subBidReferenceId: string;

  /**
   * @description: 人群定向二级名称。当出价资源为展示场景兴趣点时表示兴趣点名称，当出价资源为展示场景人群包时表示人群包名称，当出价资源为展示场景地域时表示地域名称。
   * @type: string
   * @default:
   **/
  subBidReferenceName: string;

  /**
   * @description: 转化成本
   * @type: string
   * @default:
   **/
  transactionCost: string;
}

/**
 * @description 定向信息
 * @default
 * @example
 **/
export interface PddAdApiUnitBidQueryListResponseResultAdTargetingVOResponseInterface {
  /**
   * @description: 定向集合
   * @type: PddAdApiUnitBidQueryListResponseResultAdTargetingVOAdTargetingSetResponseInterface
   * @default:
   *
   **/
  adTargetingSet: PddAdApiUnitBidQueryListResponseResultAdTargetingVOAdTargetingSetResponseInterface;

  /**
   * @description: 定向Id
   * @type: string | number
   * @default:
   **/
  targetingId: string | number;

  /**
   * @description: 定向名称
   * @type: string
   * @default:
   **/
  targetingName: string;
}

/**
 * @description 定向集合
 * @default
 * @example
 **/
export interface PddAdApiUnitBidQueryListResponseResultAdTargetingVOAdTargetingSetResponseInterface {
  /**
   * @description: 地域定向
   * @type: PddAdApiUnitBidQueryListResponseResultAdTargetingVOAdTargetingSetAreaStructResponseInterface
   * @default:
   *
   **/
  areaStruct: PddAdApiUnitBidQueryListResponseResultAdTargetingVOAdTargetingSetAreaStructResponseInterface;
}

/**
 * @description 地域定向
 * @default
 * @example
 **/
export interface PddAdApiUnitBidQueryListResponseResultAdTargetingVOAdTargetingSetAreaStructResponseInterface {
  /**
   * @description: 地域Id列表。具体地域Id编码参见接口返回：pdd.ad.api.unit.bid.query.targeting.tag.list
   * @type: number[]
   * @default:
   **/
  areaIds: number[];
}
