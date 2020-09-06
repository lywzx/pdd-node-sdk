export const PDD_AD_API_UNIT_DELETE = 'pdd.ad.api.unit.delete';

export const PDD_AD_API_UNIT_DELETE_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 20,
    times: 5,
  },
];

/**
 * 接口名称：删除单元
 * 接口标识：pdd.ad.api.unit.delete
 * 接口使用场景：删除单元
 **/
export interface PddAdApiUnitDeleteRequestInterface {
  /**
   * @description: 广告单元Id
   * @type: string | number
   * @default:
   **/
  adId: string | number;

  /**
   * @description: 场景类型。0表示搜索，2表示展示。
   * @type: number
   * @default:
   **/
  scenesType: number;
}

/**
 * 接口名称：删除单元
 * 接口标识：pdd.ad.api.unit.delete
 * 接口使用场景：删除单元
 **/
export interface PddAdApiUnitDeleteResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitDeleteResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitDeleteResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitDeleteResponseResponseInterface {
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
