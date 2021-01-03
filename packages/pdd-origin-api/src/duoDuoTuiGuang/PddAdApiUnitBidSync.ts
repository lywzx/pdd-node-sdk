export const PDD_AD_API_UNIT_BID_SYNC = 'pdd.ad.api.unit.bid.sync';

export const PDD_AD_API_UNIT_BID_SYNC_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
  },
];

/**
 * 接口名称：同步定向/资源位
 * 接口标识：pdd.ad.api.unit.bid.sync
 * 接口使用场景：同步定向/资源位
 **/
export interface PddAdApiUnitBidSyncRequestInterface {
  /**
   * @description: 广告单元Id
   * @type: string | number
   * @default:
   **/
  adId: string | number;

  /**
   * @description: 出价信息列表
   * @type: PddAdApiUnitBidSyncAdUnitBidsRequestInterface[]
   * @default:
   *
   **/
  adUnitBids: PddAdApiUnitBidSyncAdUnitBidsRequestInterface[];

  /**
   * @description: 出价资源类型。1表示人群定向，2表示资源位。
   * @type: number
   * @default:
   **/
  bidReferenceType: number;
}

/**
 * @description 出价信息列表
 * @default
 * @example
 **/
export interface PddAdApiUnitBidSyncAdUnitBidsRequestInterface {
  /**
   * @description: 定向信息。仅支持地域定向。
   * @type: PddAdApiUnitBidSyncAdUnitBidsAdTargetingVORequestInterface
   * @default:
   *
   **/
  adTargetingVO?: PddAdApiUnitBidSyncAdUnitBidsAdTargetingVORequestInterface;

  /**
   * @description: 可选人群定向类型或者可选资源位定向类型。人群定向类型，可用枚举值，参考接口：pdd.ad.api.unit.bid.query.base.target.profile资源位定向类型，可用枚举值，参考接口：pdd.ad.api.unit.bid.query.available.location
   * @type: string | number
   * @default:
   **/
  bidReferenceId: string | number;

  /**
   * @description: 出价，万分比，10000表示100%
   * @type: string | number
   * @default:
   **/
  bidValue: string | number;

  /**
   * @description: 二级定向Id。默认为0。
   * @type: string | number
   * @default:
   **/
  subBidReferenceId: string | number;
}

/**
 * @description 定向信息。仅支持地域定向。
 * @default
 * @example
 **/
export interface PddAdApiUnitBidSyncAdUnitBidsAdTargetingVORequestInterface {
  /**
   * @description: 定向集合
   * @type: PddAdApiUnitBidSyncAdUnitBidsAdTargetingVOAdTargetingSetRequestInterface
   * @default:
   *
   **/
  adTargetingSet?: PddAdApiUnitBidSyncAdUnitBidsAdTargetingVOAdTargetingSetRequestInterface;

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
export interface PddAdApiUnitBidSyncAdUnitBidsAdTargetingVOAdTargetingSetRequestInterface {
  /**
   * @description: 地域定向
   * @type: PddAdApiUnitBidSyncAdUnitBidsAdTargetingVOAdTargetingSetAreaStructRequestInterface
   * @default:
   *
   **/
  areaStruct?: PddAdApiUnitBidSyncAdUnitBidsAdTargetingVOAdTargetingSetAreaStructRequestInterface;
}

/**
 * @description 地域定向
 * @default
 * @example
 **/
export interface PddAdApiUnitBidSyncAdUnitBidsAdTargetingVOAdTargetingSetAreaStructRequestInterface {
  /**
   * @description: 地域Id列表。具体地域Id编码参见接口返回：pdd.ad.api.unit.bid.query.targeting.tag.list
   * @type: number[]
   * @default:
   **/
  areaIds?: number[];
}

/**
 * 接口名称：同步定向/资源位
 * 接口标识：pdd.ad.api.unit.bid.sync
 * 接口使用场景：同步定向/资源位
 **/
export interface PddAdApiUnitBidSyncResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitBidSyncResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitBidSyncResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitBidSyncResponseResponseInterface {
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
   * @description: 是否同步成功
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
