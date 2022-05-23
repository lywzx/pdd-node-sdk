export const PDD_AD_API_UNIT_CREATIVE_UPDATE_DATA_OPERATE_STATUS =
  'pdd.ad.api.unit.creative.update.data.operate.status';

export const PDD_AD_API_UNIT_CREATIVE_UPDATE_DATA_OPERATE_STATUS_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
    callSourceType: 0,
  },
];

/**
 * 接口名称：批量启动或暂停创意
 * 接口标识：pdd.ad.api.unit.creative.update.data.operate.status
 * 接口使用场景：批量启动或暂停创意
 **/
export interface PddAdApiUnitCreativeUpdateDataOperateStatusRequestInterface {
  /**
   * @description: 数据操作状态。1表示开启，2表示暂停。
   * @type: number
   * @default:
   **/
  dataOperateStatus: number;

  /**
   * @description: 创意单元Id列表
   * @type: Array<string | number>
   * @default:
   **/
  unitCreativeIds: Array<string | number>;
}

/**
 * 接口名称：批量启动或暂停创意
 * 接口标识：pdd.ad.api.unit.creative.update.data.operate.status
 * 接口使用场景：批量启动或暂停创意
 **/
export interface PddAdApiUnitCreativeUpdateDataOperateStatusResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitCreativeUpdateDataOperateStatusResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitCreativeUpdateDataOperateStatusResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitCreativeUpdateDataOperateStatusResponseResponseInterface {
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
   * @description: 是否更改成功
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
