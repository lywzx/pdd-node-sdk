export const PDD_AD_API_UNIT_UPDATE_UNIT_NAME = 'pdd.ad.api.unit.update.unit.name';

/**
 * 接口名称：更新单元名称
 * 接口标识：pdd.ad.api.unit.update.unit.name
 * 接口使用场景：更新单元名称
 **/
export interface PddAdApiUnitUpdateUnitNameRequestInterface {
  /**
   * @description: 广告单元Id
   * @type: string | number
   * @default:
   **/
  adId: string | number;

  /**
   * @description: 单元名称
   * @type: string
   * @default:
   **/
  adName: string;
}

/**
 * 接口名称：更新单元名称
 * 接口标识：pdd.ad.api.unit.update.unit.name
 * 接口使用场景：更新单元名称
 **/
export interface PddAdApiUnitUpdateUnitNameResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitUpdateUnitNameResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitUpdateUnitNameResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitUpdateUnitNameResponseResponseInterface {
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
