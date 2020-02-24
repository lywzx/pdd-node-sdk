export const PDD_AD_HISTORY_RT_KEYWORD_REPORT_GET = 'pdd.ad.history.rt.keyword.report.get';
export const PDD_AD_HISTORY_RT_KEYWORD_REPORT_GET_RESPONSE_KEY = 'ad_keyword_real_time_report_response';

/**
 * 接口名称：关键词实时报表数据
 * 接口标识：pdd.ad.history.rt.keyword.report.get
 * 接口使用场景：关键词实时报表数据，提供单元id可获得该单元下关键词的实时数据
 **/
export interface PddAdHistoryRtKeywordReportGetRequestInterface {
  /**
   * @description: 0--搜索广告,1--明星店铺,2--定向广告,3--首页Banner广告（目前只支持0，暂不支持1、2、3）
   * @type: number
   * @default:
   **/
  scene_type?: number;

  /**
   * @description: 单元id
   * @type: string
   * @default:
   **/
  unit_id?: string;
}

/**
 * 接口名称：关键词实时报表数据
 * 接口标识：pdd.ad.history.rt.keyword.report.get
 * 接口使用场景：关键词实时报表数据，提供单元id可获得该单元下关键词的实时数据
 **/
export interface PddAdHistoryRtKeywordReportGetResponseInterface {
  /**
   * @description: 返回response
   * @type: PddAdHistoryRtKeywordReportGetAdKeywordRealTimeReportResponseResponseInterface
   * @default:
   *
   **/
  ad_keyword_real_time_report_response: PddAdHistoryRtKeywordReportGetAdKeywordRealTimeReportResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/
export interface PddAdHistoryRtKeywordReportGetAdKeywordRealTimeReportResponseResponseInterface {
  /**
   * @description: report列表
   * @type: PddAdHistoryRtKeywordReportGetAdKeywordRealTimeReportResponseKeywordRealTimeReportListResponseInterface[]
   * @default:
   *
   **/
  keyword_real_time_report_list: PddAdHistoryRtKeywordReportGetAdKeywordRealTimeReportResponseKeywordRealTimeReportListResponseInterface[];
}

/**
 * @description report列表
 * @default
 * @example
 **/
export interface PddAdHistoryRtKeywordReportGetAdKeywordRealTimeReportResponseKeywordRealTimeReportListResponseInterface {
  /**
   * @description: 关键词id
   * @type: string
   * @default:
   **/
  keyword_id: string;

  /**
   * @description: 关键词
   * @type: string
   * @default:
   **/
  word: string;

  /**
   * @description: 出价
   * @type: string
   * @default:
   **/
  bid: string;

  /**
   * @description: 关键词状态 1-推广中 2-已删除
   * @type: number
   * @default:
   **/
  impression_status: number;

  /**
   * @description: 质量分
   * @type: string
   * @default:
   **/
  quality_score: string;

  /**
   * @description: 关键词状态。1表示推广中，2表示已删除
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 广告投资回报率
   * @type: string
   * @default:
   **/
  roi: string;

  /**
   * @description: 千次展现成本
   * @type: string
   * @default:
   **/
  cpm: string;

  /**
   * @description: 广告曝光数
   * @type: string
   * @default:
   **/
  impression: string;

  /**
   * @description: 广告点击数
   * @type: string
   * @default:
   **/
  click: string;

  /**
   * @description: 广告点击率
   * @type: string
   * @default:
   **/
  ctr: string;

  /**
   * @description: 广告消耗,单位厘
   * @type: string
   * @default:
   **/
  spend: string;

  /**
   * @description: 点击单价，单位厘
   * @type: string
   * @default:
   **/
  cpc: string;

  /**
   * @description: 广告转化支付订单数
   * @type: string
   * @default:
   **/
  order_num: string;

  /**
   * @description: 广告转化支付金额，单位厘
   * @type: string
   * @default:
   **/
  gmv: string;

  /**
   * @description: 日期
   * @type: string
   * @default:
   **/
  date: string;
}
