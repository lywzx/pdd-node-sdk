export const PDD_AD_API_UNIT_UPDATE_DATA_OPERATE_STATUS = 'pdd.ad.api.unit.update.data.operate.status';

export const PDD_AD_API_UNIT_UPDATE_DATA_OPERATE_STATUS_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
    callSourceType: 0,
  },
];

/**
 * 接口名称：批量启动或暂停单元
 * 接口标识：pdd.ad.api.unit.update.data.operate.status
 * 接口使用场景：批量启动或暂停单元
 **/
export interface PddAdApiUnitUpdateDataOperateStatusRequestInterface {
  /**
   * @description: 广告单元Id列表。一次不得超过20个。
   * @type: Array<string | number>
   * @default:
   **/
  adIds: Array<string | number>;

  /**
   * @description: 数据操作状态。1表示开启，2表示暂停。
   * @type: number
   * @default:
   **/
  dataOperateStatus: number;
}

/**
 * 接口名称：批量启动或暂停单元
 * 接口标识：pdd.ad.api.unit.update.data.operate.status
 * 接口使用场景：批量启动或暂停单元
 **/
export interface PddAdApiUnitUpdateDataOperateStatusResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitUpdateDataOperateStatusResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitUpdateDataOperateStatusResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitUpdateDataOperateStatusResponseResponseInterface {
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
