export const PDD_LOGISTICS_COMPANIES_GET = 'pdd.logistics.companies.get';
export const PDD_LOGISTICS_COMPANIES_GET_RESPONSE_KEY = 'logistics_companies_get_response';
export const PDD_LOGISTICS_COMPANIES_GET_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 10,
    times: 1200,
    callSourceType: 0,
  },
];

/**
 * 接口名称：快递公司查看接口
 * 接口标识：pdd.logistics.companies.get
 * 接口使用场景：获取快递公司名称
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddLogisticsCompaniesGetRequestInterface {}

/**
 * 接口名称：快递公司查看接口
 * 接口标识：pdd.logistics.companies.get
 * 接口使用场景：获取快递公司名称
 **/
export interface PddLogisticsCompaniesGetResponseInterface {
  /**
   * @description: 返回的快递公司列表对象
   * @type: PddLogisticsCompaniesGetLogisticsCompaniesGetResponseResponseInterface
   * @default:
   *
   **/
  logistics_companies_get_response: PddLogisticsCompaniesGetLogisticsCompaniesGetResponseResponseInterface;
}

/**
 * @description 返回的快递公司列表对象
 * @default
 * @example
 **/
export interface PddLogisticsCompaniesGetLogisticsCompaniesGetResponseResponseInterface {
  /**
   * @description: 快递公司列表对象
   * @type: PddLogisticsCompaniesGetLogisticsCompaniesGetResponseLogisticsCompaniesResponseInterface[]
   * @default:
   *
   **/
  logistics_companies: PddLogisticsCompaniesGetLogisticsCompaniesGetResponseLogisticsCompaniesResponseInterface[];
}

/**
 * @description 快递公司列表对象
 * @default
 * @example
 **/
export interface PddLogisticsCompaniesGetLogisticsCompaniesGetResponseLogisticsCompaniesResponseInterface {
  /**
   * @description: 是否有效，0-当前不支持的快递公司，1-支持的快递公司，注意：发货时必须入参支持的快递公司id，否则会报错
   * @type: number
   * @default:
   **/
  available: number;

  /**
   * @description: 快递公司编码
   * @type: string | number
   * @default:
   **/
  id: string | number;

  /**
   * @description: 快递公司名称
   * @type: string
   * @default:
   **/
  logistics_company: string;

  /**
   * @description: 物流公司代码
   * @type: string
   * @default:
   **/
  code: string;
}
