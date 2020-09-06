export const PDD_AD_API_UNIT_CREATIVE_UPDATE_SMART_CREATIVE = 'pdd.ad.api.unit.creative.update.smart.creative';

export const PDD_AD_API_UNIT_CREATIVE_UPDATE_SMART_CREATIVE_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
  },
];

/**
 * 接口名称：更新智能创意
 * 接口标识：pdd.ad.api.unit.creative.update.smart.creative
 * 接口使用场景：更新智能创意
 **/
export interface PddAdApiUnitCreativeUpdateSmartCreativeRequestInterface {
  /**
   * @description: 标题
   * @type: string
   * @default:
   **/
  text: string;

  /**
   * @description: 创意单元Id
   * @type: string | number
   * @default:
   **/
  unitCreativeId: string | number;
}

/**
 * 接口名称：更新智能创意
 * 接口标识：pdd.ad.api.unit.creative.update.smart.creative
 * 接口使用场景：更新智能创意
 **/
export interface PddAdApiUnitCreativeUpdateSmartCreativeResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitCreativeUpdateSmartCreativeResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitCreativeUpdateSmartCreativeResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitCreativeUpdateSmartCreativeResponseResponseInterface {
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
