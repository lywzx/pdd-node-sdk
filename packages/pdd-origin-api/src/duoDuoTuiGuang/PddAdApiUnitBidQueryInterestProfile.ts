export const PDD_AD_API_UNIT_BID_QUERY_INTEREST_PROFILE = 'pdd.ad.api.unit.bid.query.interest.profile';

export const PDD_AD_API_UNIT_BID_QUERY_INTEREST_PROFILE_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
  },
];

/**
 * 接口名称：获取可用兴趣点定向
 * 接口标识：pdd.ad.api.unit.bid.query.interest.profile
 * 接口使用场景：获取可用兴趣点定向
 **/
export interface PddAdApiUnitBidQueryInterestProfileRequestInterface {
  /**
   * @description: 商品Id
   * @type: string | number
   * @default:
   **/
  goodsId: string | number;
}

/**
 * 接口名称：获取可用兴趣点定向
 * 接口标识：pdd.ad.api.unit.bid.query.interest.profile
 * 接口使用场景：获取可用兴趣点定向
 **/
export interface PddAdApiUnitBidQueryInterestProfileResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitBidQueryInterestProfileResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitBidQueryInterestProfileResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitBidQueryInterestProfileResponseResponseInterface {
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
   * @type: PddAdApiUnitBidQueryInterestProfileResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddAdApiUnitBidQueryInterestProfileResponseResultResponseInterface[];

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
export interface PddAdApiUnitBidQueryInterestProfileResponseResultResponseInterface {
  /**
   * @description: 兴趣点Id
   * @type: string | number
   * @default:
   **/
  subLevelTargetId: string | number;

  /**
   * @description: 兴趣点名称
   * @type: string
   * @default:
   **/
  subLevelTargetName: string;

  /**
   * @description: 用户数量预估
   * @type: string
   * @default:
   **/
  uvString: string;
}
