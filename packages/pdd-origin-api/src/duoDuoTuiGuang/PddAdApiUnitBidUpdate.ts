export const PDD_AD_API_UNIT_BID_UPDATE = 'pdd.ad.api.unit.bid.update';

export const PDD_AD_API_UNIT_BID_UPDATE_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
    callSourceType: 0,
  },
];

/**
 * 接口名称：更新单个定向/资源位
 * 接口标识：pdd.ad.api.unit.bid.update
 * 接口使用场景：更新单个定向/资源位
 **/
export interface PddAdApiUnitBidUpdateRequestInterface {
  /**
   * @description: 广告单元Id
   * @type: string | number
   * @default:
   **/
  adId: string | number;

  /**
   * @description: 更新列表
   * @type: PddAdApiUnitBidUpdateAdUnitBidsRequestInterface[]
   * @default:
   *
   **/
  adUnitBids: PddAdApiUnitBidUpdateAdUnitBidsRequestInterface[];

  /**
   * @description: 出价资源类型。1表示人群定向，2表示资源位。
   * @type: number
   * @default:
   **/
  bidReferenceType: number;
}

/**
 * @description 更新列表
 * @default
 * @example
 **/
export interface PddAdApiUnitBidUpdateAdUnitBidsRequestInterface {
  /**
   * @description: 出价Id
   * @type: string | number
   * @default:
   **/
  bidId: string | number;

  /**
   * @description: 出价，万分比
   * @type: string | number
   * @default:
   **/
  bidValue: string | number;
}

/**
 * 接口名称：更新单个定向/资源位
 * 接口标识：pdd.ad.api.unit.bid.update
 * 接口使用场景：更新单个定向/资源位
 **/
export interface PddAdApiUnitBidUpdateResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitBidUpdateResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitBidUpdateResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitBidUpdateResponseResponseInterface {
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
   * @description: 是否更新成功
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
