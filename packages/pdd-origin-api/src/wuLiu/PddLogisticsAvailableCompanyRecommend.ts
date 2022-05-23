export const PDD_LOGISTICS_AVAILABLE_COMPANY_RECOMMEND = 'pdd.logistics.available.company.recommend';

export const PDD_LOGISTICS_AVAILABLE_COMPANY_RECOMMEND_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 1,
    times: 1000,
    callSourceType: 0,
  },
];

/**
 * 接口名称：获取可发货快递接口
 * 接口标识：pdd.logistics.available.company.recommend
 * 接口使用场景：给商家提供可发货的快递公司，此数据仅作参考，如返回为空不代表不可发货
 **/
export interface PddLogisticsAvailableCompanyRecommendRequestInterface {
  /**
   * @description: 收件人市id（最多支持50个）
   * @type: Array<string | number>
   * @default:
   **/
  city_id: Array<string | number>;
}

/**
 * 接口名称：获取可发货快递接口
 * 接口标识：pdd.logistics.available.company.recommend
 * 接口使用场景：给商家提供可发货的快递公司，此数据仅作参考，如返回为空不代表不可发货
 **/
export interface PddLogisticsAvailableCompanyRecommendResponseInterface {
  /**
   * @description:
   * @type: PddLogisticsAvailableCompanyRecommendResponseResponseInterface
   * @default:
   *
   **/
  response: PddLogisticsAvailableCompanyRecommendResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddLogisticsAvailableCompanyRecommendResponseResponseInterface {
  /**
   * @description:
   * @type: PddLogisticsAvailableCompanyRecommendResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddLogisticsAvailableCompanyRecommendResponseResultResponseInterface[];
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddLogisticsAvailableCompanyRecommendResponseResultResponseInterface {
  /**
   * @description: 收件人市id
   * @type: string | number
   * @default:
   **/
  city_id: string | number;

  /**
   * @description: 快递公司id
   * @type: Array<string | number>
   * @default:
   **/
  company_id: Array<string | number>;
}
