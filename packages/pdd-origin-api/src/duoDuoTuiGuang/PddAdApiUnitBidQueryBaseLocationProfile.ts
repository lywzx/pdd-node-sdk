export const PDD_AD_API_UNIT_BID_QUERY_BASE_LOCATION_PROFILE = 'pdd.ad.api.unit.bid.query.base.location.profile';

export const PDD_AD_API_UNIT_BID_QUERY_BASE_LOCATION_PROFILE_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
  },
];

/**
 * 接口名称：获取可用资源位
 * 接口标识：pdd.ad.api.unit.bid.query.base.location.profile
 * 接口使用场景：获取可用资源位
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddAdApiUnitBidQueryBaseLocationProfileRequestInterface {}

/**
 * 接口名称：获取可用资源位
 * 接口标识：pdd.ad.api.unit.bid.query.base.location.profile
 * 接口使用场景：获取可用资源位
 **/
export interface PddAdApiUnitBidQueryBaseLocationProfileResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitBidQueryBaseLocationProfileResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitBidQueryBaseLocationProfileResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitBidQueryBaseLocationProfileResponseResponseInterface {
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
   * @type: PddAdApiUnitBidQueryBaseLocationProfileResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddAdApiUnitBidQueryBaseLocationProfileResponseResultResponseInterface[];

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
export interface PddAdApiUnitBidQueryBaseLocationProfileResponseResultResponseInterface {
  /**
   * @description: 资源位描述
   * @type: string
   * @default:
   **/
  locationName: string;

  /**
   * @description: 资源位类型
   * @type: number
   * @default:
   **/
  locationType: number;

  /**
   * @description: 资源位预估人群
   * @type: string
   * @default:
   **/
  pvString: string;
}
