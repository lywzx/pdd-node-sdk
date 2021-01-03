export const PDD_AD_API_REPORT_HOURLY_REPORT_QUERY = 'pdd.ad.api.report.hourly.report.query';

export const PDD_AD_API_REPORT_HOURLY_REPORT_QUERY_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
  },
  {
    limiterLevel: 4,
    timeRange: 1,
    times: 100,
  },
];

/**
 * 接口名称：报表小时数据查询接口
 * 接口标识：pdd.ad.api.report.hourly.report.query
 * 接口使用场景：查询推广报表各维度（广告主，计划，单元）的小时报表数据
 **/
export interface PddAdApiReportHourlyReportQueryRequestInterface {
  /**
   * @description: 查询日期的字符串，格式类似'2020-02-02',当前支持查询30天内数据
   * @type: string
   * @default:
   **/
  dateString: string;

  /**
   * @description: 各维度查询的主体id，查询计划维度传计划id，查询单元维度传单元id
   * @type: string | number
   * @default:
   **/
  entityId?: string | number;

  /**
   * @description: 查询维度，0-广告主，1-计划，2-单元,当前只支持到单元维度
   * @type: number
   * @default:
   **/
  queryDimensionType: number;

  /**
   * @description: 场景类型,0-搜索，2-场景展示
   * @type: number
   * @default:
   **/
  scenesType: number;
}

/**
 * 接口名称：报表小时数据查询接口
 * 接口标识：pdd.ad.api.report.hourly.report.query
 * 接口使用场景：查询推广报表各维度（广告主，计划，单元）的小时报表数据
 **/
export interface PddAdApiReportHourlyReportQueryResponseInterface {
  /**
   * @description:
   * @type: PddAdApiReportHourlyReportQueryResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiReportHourlyReportQueryResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiReportHourlyReportQueryResponseResponseInterface {
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
   * @description:
   * @type: PddAdApiReportHourlyReportQueryResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddAdApiReportHourlyReportQueryResponseResultResponseInterface;

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  success: boolean;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiReportHourlyReportQueryResponseResultResponseInterface {
  /**
   * @description:
   * @type: PddAdApiReportHourlyReportQueryResponseResultHourlyReportListResponseInterface[]
   * @default:
   *
   **/
  hourlyReportList: PddAdApiReportHourlyReportQueryResponseResultHourlyReportListResponseInterface[];

  /**
   * @description:
   * @type: PddAdApiReportHourlyReportQueryResponseResultSumReportResponseInterface
   * @default:
   *
   **/
  sumReport: PddAdApiReportHourlyReportQueryResponseResultSumReportResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiReportHourlyReportQueryResponseResultHourlyReportListResponseInterface {
  /**
   * @description: 每笔成交金额(average pay amount)，单位厘
   * @type: string
   * @default:
   **/
  avgPayAmount: string;

  /**
   * @description: 广告点击量
   * @type: string | number
   * @default:
   **/
  click: string | number;

  /**
   * @description: 平均点击花费，单位厘
   * @type: string
   * @default:
   **/
  cpc: string;

  /**
   * @description: 千次展现成本
   * @type: string
   * @default:
   **/
  cpm: string;

  /**
   * @description: 广告点击率
   * @type: string
   * @default:
   **/
  ctr: string;

  /**
   * @description: 点击转化率
   * @type: string
   * @default:
   **/
  cvr: string;

  /**
   * @description: 广告转化支付金额，单位厘
   * @type: string | number
   * @default:
   **/
  gmv: string | number;

  /**
   * @description: 商品收藏数
   * @type: string | number
   * @default:
   **/
  goodsFavNum: string | number;

  /**
   * @description: 小时：0 ~ 23
   * @type: number
   * @default:
   **/
  hour: number;

  /**
   * @description: 广告曝光量
   * @type: string | number
   * @default:
   **/
  impression: string | number;

  /**
   * @description: 店铺收藏数
   * @type: string | number
   * @default:
   **/
  mallFavNum: string | number;

  /**
   * @description: 广告转化支付订单量
   * @type: string | number
   * @default:
   **/
  orderNum: string | number;

  /**
   * @description: 广告投入产出比
   * @type: string
   * @default:
   **/
  roi: string;

  /**
   * @description: 广告消耗,单位厘
   * @type: string | number
   * @default:
   **/
  spend: string | number;

  /**
   * @description: 转化成本
   * @type: string
   * @default:
   **/
  transactionCost: string;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiReportHourlyReportQueryResponseResultSumReportResponseInterface {
  /**
   * @description: 每笔成交金额(average pay amount)，单位厘
   * @type: string
   * @default:
   **/
  avgPayAmount: string;

  /**
   * @description: 广告点击量
   * @type: string | number
   * @default:
   **/
  click: string | number;

  /**
   * @description: 平均点击花费，单位厘
   * @type: string
   * @default:
   **/
  cpc: string;

  /**
   * @description: 千次展现成本
   * @type: string
   * @default:
   **/
  cpm: string;

  /**
   * @description: 广告点击率
   * @type: string
   * @default:
   **/
  ctr: string;

  /**
   * @description: 点击转化率
   * @type: string
   * @default:
   **/
  cvr: string;

  /**
   * @description: 广告转化支付金额，单位厘
   * @type: string | number
   * @default:
   **/
  gmv: string | number;

  /**
   * @description: 商品收藏数
   * @type: string | number
   * @default:
   **/
  goodsFavNum: string | number;

  /**
   * @description: 广告曝光量
   * @type: string | number
   * @default:
   **/
  impression: string | number;

  /**
   * @description: 店铺收藏数
   * @type: string | number
   * @default:
   **/
  mallFavNum: string | number;

  /**
   * @description: 广告转化支付订单量
   * @type: string | number
   * @default:
   **/
  orderNum: string | number;

  /**
   * @description: 广告投入产出比
   * @type: string
   * @default:
   **/
  roi: string;

  /**
   * @description: 广告消耗,单位厘
   * @type: string | number
   * @default:
   **/
  spend: string | number;

  /**
   * @description: 转化成本
   * @type: string
   * @default:
   **/
  transactionCost: string;
}
