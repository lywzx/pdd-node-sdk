export const PDD_AD_API_UNIT_BID_QUERY_TARGETING_TAG_LIST = 'pdd.ad.api.unit.bid.query.targeting.tag.list';

/**
 * 接口名称：获取定向标签数据
 * 接口标识：pdd.ad.api.unit.bid.query.targeting.tag.list
 * 接口使用场景：获取定向标签数据
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddAdApiUnitBidQueryTargetingTagListRequestInterface {}

/**
 * 接口名称：获取定向标签数据
 * 接口标识：pdd.ad.api.unit.bid.query.targeting.tag.list
 * 接口使用场景：获取定向标签数据
 **/
export interface PddAdApiUnitBidQueryTargetingTagListResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitBidQueryTargetingTagListResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitBidQueryTargetingTagListResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitBidQueryTargetingTagListResponseResponseInterface {
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
   * @type: PddAdApiUnitBidQueryTargetingTagListResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddAdApiUnitBidQueryTargetingTagListResponseResultResponseInterface[];

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
export interface PddAdApiUnitBidQueryTargetingTagListResponseResultResponseInterface {
  /**
   * @description: 标签描述
   * @type: string
   * @default:
   **/
  description: string;

  /**
   * @description: 父标签Id
   * @type: string
   * @default:
   **/
  parentTagId: string;

  /**
   * @description: 标签Id
   * @type: string
   * @default:
   **/
  tagId: string;

  /**
   * @description: 定向标签类型，1-地域定向
   * @type: number
   * @default:
   **/
  tagType: number;
}
