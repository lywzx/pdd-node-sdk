export const PDD_AD_API_UNIT_CREATIVE_DISTRIBUTE_FLOW_RATE = 'pdd.ad.api.unit.creative.distribute.flow.rate';

export const PDD_AD_API_UNIT_CREATIVE_DISTRIBUTE_FLOW_RATE_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
    callSourceType: 0,
  },
];

/**
 * 接口名称：智能创意流量比例分配
 * 接口标识：pdd.ad.api.unit.creative.distribute.flow.rate
 * 接口使用场景：智能创意流量比例分配
 **/
export interface PddAdApiUnitCreativeDistributeFlowRateRequestInterface {
  /**
   * @description: 广告单元Id
   * @type: string | number
   * @default:
   **/
  adId: string | number;

  /**
   * @description: 流量分配比例。万分比
   * @type: number
   * @default:
   **/
  creativeFlowRate: number;
}

/**
 * 接口名称：智能创意流量比例分配
 * 接口标识：pdd.ad.api.unit.creative.distribute.flow.rate
 * 接口使用场景：智能创意流量比例分配
 **/
export interface PddAdApiUnitCreativeDistributeFlowRateResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitCreativeDistributeFlowRateResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitCreativeDistributeFlowRateResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitCreativeDistributeFlowRateResponseResponseInterface {
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
   * @description: 是否分配成功
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
