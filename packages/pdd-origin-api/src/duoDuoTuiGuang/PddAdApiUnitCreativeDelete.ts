export const PDD_AD_API_UNIT_CREATIVE_DELETE = 'pdd.ad.api.unit.creative.delete';

export const PDD_AD_API_UNIT_CREATIVE_DELETE_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
  },
];

/**
 * 接口名称：删除创意
 * 接口标识：pdd.ad.api.unit.creative.delete
 * 接口使用场景：删除创意
 **/
export interface PddAdApiUnitCreativeDeleteRequestInterface {
  /**
   * @description: 创意单元Id
   * @type: string | number
   * @default:
   **/
  unitCreativeId: string | number;
}

/**
 * 接口名称：删除创意
 * 接口标识：pdd.ad.api.unit.creative.delete
 * 接口使用场景：删除创意
 **/
export interface PddAdApiUnitCreativeDeleteResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitCreativeDeleteResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitCreativeDeleteResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitCreativeDeleteResponseResponseInterface {
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
