export const PDD_AD_API_UNIT_BID_DELETE = 'pdd.ad.api.unit.bid.delete';

export const PDD_AD_API_UNIT_BID_DELETE_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
    callSourceType: 0,
  },
];

/**
 * 接口名称：删除定向/资源位
 * 接口标识：pdd.ad.api.unit.bid.delete
 * 接口使用场景：删除定向/资源位
 **/
export interface PddAdApiUnitBidDeleteRequestInterface {
  /**
   * @description: 广告单元Id
   * @type: string | number
   * @default:
   **/
  adId: string | number;

  /**
   * @description: 出价Id列表
   * @type: Array<string | number>
   * @default:
   **/
  bidIds: Array<string | number>;
}

/**
 * 接口名称：删除定向/资源位
 * 接口标识：pdd.ad.api.unit.bid.delete
 * 接口使用场景：删除定向/资源位
 **/
export interface PddAdApiUnitBidDeleteResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitBidDeleteResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitBidDeleteResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitBidDeleteResponseResponseInterface {
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
   * @description: 是否删除成功
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
