export const PDD_AD_API_UNIT_CREATIVE_QUERY_FLOW_RATE = 'pdd.ad.api.unit.creative.query.flow.rate';

export const PDD_AD_API_UNIT_CREATIVE_QUERY_FLOW_RATE_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
    callSourceType: 0,
  },
];

/**
 * 接口名称：查询智能创意流量分配比例,万分比
 * 接口标识：pdd.ad.api.unit.creative.query.flow.rate
 * 接口使用场景：查询智能创意流量分配比例,万分比
 **/
export interface PddAdApiUnitCreativeQueryFlowRateRequestInterface {
  /**
   * @description: 广告单元Id
   * @type: string | number
   * @default:
   **/
  adId: string | number;
}

/**
 * 接口名称：查询智能创意流量分配比例,万分比
 * 接口标识：pdd.ad.api.unit.creative.query.flow.rate
 * 接口使用场景：查询智能创意流量分配比例,万分比
 **/
export interface PddAdApiUnitCreativeQueryFlowRateResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitCreativeQueryFlowRateResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitCreativeQueryFlowRateResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitCreativeQueryFlowRateResponseResponseInterface {
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
   * @description: 智能创意流量分配比例
   * @type: number
   * @default:
   **/
  result: number;

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
