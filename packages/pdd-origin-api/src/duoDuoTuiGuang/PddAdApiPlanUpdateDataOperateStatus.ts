export const PDD_AD_API_PLAN_UPDATE_DATA_OPERATE_STATUS = 'pdd.ad.api.plan.update.data.operate.status';

export const PDD_AD_API_PLAN_UPDATE_DATA_OPERATE_STATUS_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
    callSourceType: 0,
  },
];

/**
 * 接口名称：启动或暂停计划
 * 接口标识：pdd.ad.api.plan.update.data.operate.status
 * 接口使用场景：启动或暂停计划
 **/
export interface PddAdApiPlanUpdateDataOperateStatusRequestInterface {
  /**
   * @description: 数据操作状态。1表示开启，2表示暂停。
   * @type: number
   * @default:
   **/
  dataOperateStatus: number;

  /**
   * @description: 广告计划Id列表
   * @type: Array<string | number>
   * @default:
   **/
  planIds: Array<string | number>;

  /**
   * @description: 场景类型。0表示搜索，2表示展示。
   * @type: number
   * @default:
   **/
  scenesType: number;
}

/**
 * 接口名称：启动或暂停计划
 * 接口标识：pdd.ad.api.plan.update.data.operate.status
 * 接口使用场景：启动或暂停计划
 **/
export interface PddAdApiPlanUpdateDataOperateStatusResponseInterface {
  /**
   * @description:
   * @type: PddAdApiPlanUpdateDataOperateStatusResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiPlanUpdateDataOperateStatusResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiPlanUpdateDataOperateStatusResponseResponseInterface {
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
