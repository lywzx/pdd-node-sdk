export const PDD_AD_API_UNIT_UPDATE_UNIT_BID = 'pdd.ad.api.unit.update.unit.bid';

/**
 * 接口名称：更新单元出价
 * 接口标识：pdd.ad.api.unit.update.unit.bid
 * 接口使用场景：更新单元出价
 **/
export interface PddAdApiUnitUpdateUnitBidRequestInterface {
  /**
   * @description: 广告单元Id
   * @type: string | number
   * @default:
   **/
  adId: string | number;

  /**
   * @description: 出价不得为空。单位厘。
   * @type: string | number
   * @default:
   **/
  bid: string | number;
}

/**
 * 接口名称：更新单元出价
 * 接口标识：pdd.ad.api.unit.update.unit.bid
 * 接口使用场景：更新单元出价
 **/
export interface PddAdApiUnitUpdateUnitBidResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitUpdateUnitBidResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitUpdateUnitBidResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitUpdateUnitBidResponseResponseInterface {
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
