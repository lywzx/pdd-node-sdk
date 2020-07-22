export const PDD_AD_API_UNIT_BID_QUERY_AUDIENCE_PROFILE = 'pdd.ad.api.unit.bid.query.audience.profile';

/**
 * 接口名称：获取DMP人群包
 * 接口标识：pdd.ad.api.unit.bid.query.audience.profile
 * 接口使用场景：获取DMP人群包
 **/
export interface PddAdApiUnitBidQueryAudienceProfileRequestInterface {
  /**
   * @description: 渠道类型 2 - 场景单品推广, 4 - 搜索推广
   * @type: number
   * @default:
   **/
  deliverType: number;
}

/**
 * 接口名称：获取DMP人群包
 * 接口标识：pdd.ad.api.unit.bid.query.audience.profile
 * 接口使用场景：获取DMP人群包
 **/
export interface PddAdApiUnitBidQueryAudienceProfileResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitBidQueryAudienceProfileResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitBidQueryAudienceProfileResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitBidQueryAudienceProfileResponseResponseInterface {
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
   * @type: PddAdApiUnitBidQueryAudienceProfileResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddAdApiUnitBidQueryAudienceProfileResponseResultResponseInterface[];

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
export interface PddAdApiUnitBidQueryAudienceProfileResponseResultResponseInterface {
  /**
   * @description: DMP人群Id
   * @type: string
   * @default:
   **/
  audienceId: string;

  /**
   * @description: DMP人群名称
   * @type: string
   * @default:
   **/
  audienceName: string;

  /**
   * @description: DMP人群类型 1 - 自定义人群， 2 - 标签创建人群, 3 - 系统推荐人群
   * @type: number
   * @default:
   **/
  audienceType: number;
}
