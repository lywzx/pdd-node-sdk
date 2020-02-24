export const PDD_AD_HISTORY_KEYWORD_REPORT_GET = 'pdd.ad.history.keyword.report.get';
export const PDD_AD_HISTORY_KEYWORD_REPORT_GET_RESPONSE_KEY = 'ad_keyword_history_report_get_response';

/**
 * 接口名称：关键词历史报表数据
 * 接口标识：pdd.ad.history.keyword.report.get
 * 接口使用场景：关键词历史报表数据：1、可以获取某个关键词的分天历史数据；2、可以获得所有关键词在指定时间段内的汇总统计数据；3、可以获得指定计划下的所有关键词在指定时间段内的汇总统计数据；4、可获取最近30天的数据。
 **/
export interface PddAdHistoryKeywordReportGetRequestInterface {
  /**
   * @description: 开始时间：2018-05-01（周期不超过一个月，记录保存最近30天）
   * @type: string
   * @default:
   **/
  begin_date?: string;

  /**
   * @description: 结束时间：2018-05-02（周期不超过一个月，记录保存最近30天）
   * @type: string
   * @default:
   **/
  end_date?: string;

  /**
   * @description: 0--搜索广告,1--明星店铺,2--定向广告,3--首页Banner广告（目前只支持0，暂不支持1、2、3）
   * @type: number
   * @default:
   **/
  scene_type?: number;

  /**
   * @description: 0--曝光量排序,1--点击量排序,2--点击率,3--点击单价排序,4--消耗排序,5--订单数排序,6--交易额排序,7--产出比排序,8--日期,9--千次曝光单价;默认8
   * @type: number
   * @default:
   **/
  order_by: number;

  /**
   * @description: 0--降序,1--升序;默认0
   * @type: number
   * @default:
   **/
  sort_by: number;

  /**
   * @description: 1--按日期分组,2--按关键词id分组
   * @type: number
   * @default:
   **/
  group_by?: number;

  /**
   * @description: 页码，默认1，当group_by=2时才生效
   * @type: number
   * @default:
   **/
  page: number;

  /**
   * @description: 每页数量，默认100，当group_by=2时才生效
   * @type: number
   * @default:
   **/
  page_size: number;

  /**
   * @description: 单元id，groupBy = 1时必须传值，groupBy = 2时可以传值
   * @type: string | number
   * @default:
   **/
  unit_id: string | number;

  /**
   * @description: 关键词，仅当groupBy = 1时必须传值
   * @type: string
   * @default:
   **/
  keyword: string;

  /**
   * @description: 计划id，仅当groupBy = 2时可以传值
   * @type: string | number
   * @default:
   **/
  plan_id: string | number;
}

/**
 * 接口名称：关键词历史报表数据
 * 接口标识：pdd.ad.history.keyword.report.get
 * 接口使用场景：关键词历史报表数据：1、可以获取某个关键词的分天历史数据；2、可以获得所有关键词在指定时间段内的汇总统计数据；3、可以获得指定计划下的所有关键词在指定时间段内的汇总统计数据；4、可获取最近30天的数据。
 **/
export interface PddAdHistoryKeywordReportGetResponseInterface {
  /**
   * @description: 返回response
   * @type: PddAdHistoryKeywordReportGetAdKeywordHistoryReportGetResponseResponseInterface
   * @default:
   *
   **/
  ad_keyword_history_report_get_response: PddAdHistoryKeywordReportGetAdKeywordHistoryReportGetResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/
export interface PddAdHistoryKeywordReportGetAdKeywordHistoryReportGetResponseResponseInterface {
  /**
   * @description: 总数
   * @type: number
   * @default:
   **/
  total: number;

  /**
   * @description: 报表对象列表
   * @type: PddAdHistoryKeywordReportGetAdKeywordHistoryReportGetResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddAdHistoryKeywordReportGetAdKeywordHistoryReportGetResponseResultResponseInterface[];
}

/**
 * @description 报表对象列表
 * @default
 * @example
 **/
export interface PddAdHistoryKeywordReportGetAdKeywordHistoryReportGetResponseResultResponseInterface {
  /**
   * @description: 千次展现成本
   * @type: string
   * @default:
   **/
  cpm: string;

  /**
   * @description: 扩展字段
   * @type: PddAdHistoryKeywordReportGetAdKeywordHistoryReportGetResponseResultExternalFieldsResponseInterface
   * @default:
   *
   **/
  external_fields: PddAdHistoryKeywordReportGetAdKeywordHistoryReportGetResponseResultExternalFieldsResponseInterface;

  /**
   * @description: 广告投资回报率
   * @type: string
   * @default:
   **/
  roi: string;

  /**
   * @description: 广告曝光数
   * @type: string | number
   * @default:
   **/
  impression: string | number;

  /**
   * @description: 广告点击数
   * @type: string | number
   * @default:
   **/
  click: string | number;

  /**
   * @description: 广告点击率
   * @type: string
   * @default:
   **/
  ctr: string;

  /**
   * @description: 广告消耗,单位厘
   * @type: string | number
   * @default:
   **/
  spend: string | number;

  /**
   * @description: 点击单价，单位厘
   * @type: string
   * @default:
   **/
  cpc: string;

  /**
   * @description: 广告转化支付订单数
   * @type: string | number
   * @default:
   **/
  order_num: string | number;

  /**
   * @description: 广告转化支付金额，单位厘
   * @type: string | number
   * @default:
   **/
  gmv: string | number;

  /**
   * @description: 日期
   * @type: string
   * @default:
   **/
  date: string;
}

/**
 * @description 扩展字段
 * @default
 * @example
 **/
export interface PddAdHistoryKeywordReportGetAdKeywordHistoryReportGetResponseResultExternalFieldsResponseInterface {
  /**
   * @description: key
   * @type: string
   * @default:
   **/
  key: string;

  /**
   * @description: value
   * @type: string
   * @default:
   **/
  value: string;
}
