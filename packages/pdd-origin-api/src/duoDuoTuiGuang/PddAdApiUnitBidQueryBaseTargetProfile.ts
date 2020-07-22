export const PDD_AD_API_UNIT_BID_QUERY_BASE_TARGET_PROFILE = 'pdd.ad.api.unit.bid.query.base.target.profile';

/**
 * 接口名称：获取可用基础定向
 * 接口标识：pdd.ad.api.unit.bid.query.base.target.profile
 * 接口使用场景：获取可用基础定向
 **/
export interface PddAdApiUnitBidQueryBaseTargetProfileRequestInterface {
  /**
   * @description: 商品Id
   * @type: string | number
   * @default:
   **/
  goodsId: string | number;

  /**
   * @description: 场景类型，0-搜索，2-展示
   * @type: number
   * @default:
   **/
  scenesType: number;
}

/**
 * 接口名称：获取可用基础定向
 * 接口标识：pdd.ad.api.unit.bid.query.base.target.profile
 * 接口使用场景：获取可用基础定向
 **/
export interface PddAdApiUnitBidQueryBaseTargetProfileResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitBidQueryBaseTargetProfileResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitBidQueryBaseTargetProfileResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitBidQueryBaseTargetProfileResponseResponseInterface {
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
   * @type: PddAdApiUnitBidQueryBaseTargetProfileResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddAdApiUnitBidQueryBaseTargetProfileResponseResultResponseInterface[];

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
export interface PddAdApiUnitBidQueryBaseTargetProfileResponseResultResponseInterface {
  /**
   * @description: 定向类型描述
   * @type: string
   * @default:
   **/
  targetName: string;

  /**
   * @description: 定向类型
   * @type: number
   * @default:
   **/
  targetType: number;

  /**
   * @description: 用户数量预估
   * @type: string
   * @default:
   **/
  uvString: string;
}
