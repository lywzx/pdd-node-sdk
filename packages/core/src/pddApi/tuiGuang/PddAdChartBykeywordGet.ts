export const PDD_AD_CHART_BYKEYWORD_GET = 'pdd.ad.chart.bykeyword.get';
export const PDD_AD_CHART_BYKEYWORD_GET_RESPONSE_KEY = 'ad_keyword_daily_report_response';

/**
 * 接口名称：获取关键词推广报表信息
 * 接口标识：pdd.ad.chart.bykeyword.get
 * 接口使用场景：获取关键词推广报表信息
 **/
export interface PddAdChartBykeywordGetRequestInterface {
  /**
   * @description: 报表日期，仅能查询近30天的报表数据，格式为：YYYY-MM-DD
   * @type: string
   * @default:
   **/
  date: string;

  /**
   * @description: 返回页数，默认1页
   * @type: number
   * @default:
   **/
  page?: number;

  /**
   * @description: 每页返回条数，默认20条
   * @type: number
   * @default:
   **/
  page_size?: number;
}

/**
 * 接口名称：获取关键词推广报表信息
 * 接口标识：pdd.ad.chart.bykeyword.get
 * 接口使用场景：获取关键词推广报表信息
 **/
export interface PddAdChartBykeywordGetResponseInterface {
  /**
   * @description: response
   * @type: PddAdChartBykeywordGetAdKeywordDailyReportResponseResponseInterface
   * @default:
   *
   **/
  ad_keyword_daily_report_response: PddAdChartBykeywordGetAdKeywordDailyReportResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddAdChartBykeywordGetAdKeywordDailyReportResponseResponseInterface {
  /**
   * @description: 返回的关键词报表总条数
   * @type: string | number
   * @default:
   **/
  total_count: string | number;

  /**
   * @description: 数据报表对象
   * @type: PddAdChartBykeywordGetAdKeywordDailyReportResponseKeywordDailyReportListResponseInterface[]
   * @default:
   *
   **/
  keyword_daily_report_list: PddAdChartBykeywordGetAdKeywordDailyReportResponseKeywordDailyReportListResponseInterface[];
}

/**
 * @description 数据报表对象
 * @default
 * @example
 **/
export interface PddAdChartBykeywordGetAdKeywordDailyReportResponseKeywordDailyReportListResponseInterface {
  /**
   * @description: 订单数据
   * @type: PddAdChartBykeywordGetAdKeywordDailyReportResponseKeywordDailyReportListConversionResponseInterface
   * @default:
   *
   **/
  conversion: PddAdChartBykeywordGetAdKeywordDailyReportResponseKeywordDailyReportListConversionResponseInterface;

  /**
   * @description: 日期
   * @type: string
   * @default:
   **/
  date: string;

  /**
   * @description: 计划信息
   * @type: PddAdChartBykeywordGetAdKeywordDailyReportResponseKeywordDailyReportListAdInfoResponseInterface
   * @default:
   *
   **/
  ad_info: PddAdChartBykeywordGetAdKeywordDailyReportResponseKeywordDailyReportListAdInfoResponseInterface;

  /**
   * @description: 点击量数据
   * @type: string | number
   * @default:
   **/
  click_num: string | number;

  /**
   * @description: 展现量数据
   * @type: string | number
   * @default:
   **/
  impression_num: string | number;

  /**
   * @description: 广告花费，单位为分
   * @type: string | number
   * @default:
   **/
  spend: string | number;
}

/**
 * @description 订单数据
 * @default
 * @example
 **/
export interface PddAdChartBykeywordGetAdKeywordDailyReportResponseKeywordDailyReportListConversionResponseInterface {
  /**
   * @description: 总推广订单数
   * @type: string | number
   * @default:
   **/
  total_order_num: string | number;

  /**
   * @description: 总推广订单金额
   * @type: string | number
   * @default:
   **/
  total_gmv: string | number;

  /**
   * @description: 直接发生购买转化的订单总销售金额，单位为分
   * @type: string | number
   * @default:
   **/
  direct_gmv: string | number;

  /**
   * @description: 直接发生购买转化的订单数
   * @type: string | number
   * @default:
   **/
  direct_order_num: string | number;
}

/**
 * @description 计划信息
 * @default
 * @example
 **/
export interface PddAdChartBykeywordGetAdKeywordDailyReportResponseKeywordDailyReportListAdInfoResponseInterface {
  /**
   * @description: 推广计划名称
   * @type: string
   * @default:
   **/
  plan_name: string;

  /**
   * @description: 推广计划中的关键词
   * @type: string
   * @default:
   **/
  keyword: string;
}
