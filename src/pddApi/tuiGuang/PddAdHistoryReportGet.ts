export const PDD_AD_HISTORY_REPORT_GET = 'pdd.ad.history.report.get';

/**
 * 接口名称：账户推广历史报表数据
 * 接口标识：pdd.ad.history.report.get
 * 接口使用场景：账户推广历史报表数据，可获取最近30天的数据
 **/
export interface PddAdHistoryReportGetRequestInterface {
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
   * @description: 0--曝光量排序,1--点击量排序,2--点击率,3--点击单价排序,4--消耗排序,5--订单数排序,6--交易额排序,7--产出比排序,8--日期;默认8
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
}

/**
 * 接口名称：账户推广历史报表数据
 * 接口标识：pdd.ad.history.report.get
 * 接口使用场景：账户推广历史报表数据，可获取最近30天的数据
 **/
export interface PddAdHistoryReportGetResponseInterface {
  /**
   * @description: 返回response
   * @type: PddAdHistoryReportGetAdMallHistoryReportResponseResponseInterface
   * @default:
   *
   **/
  ad_mall_history_report_response: PddAdHistoryReportGetAdMallHistoryReportResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/
export interface PddAdHistoryReportGetAdMallHistoryReportResponseResponseInterface {
  /**
   * @description: 历史report列表
   * @type: PddAdHistoryReportGetAdMallHistoryReportResponseMallHistoryReportListResponseInterface[]
   * @default:
   *
   **/
  mall_history_report_list: PddAdHistoryReportGetAdMallHistoryReportResponseMallHistoryReportListResponseInterface[];
}

/**
 * @description 历史report列表
 * @default
 * @example
 **/
export interface PddAdHistoryReportGetAdMallHistoryReportResponseMallHistoryReportListResponseInterface {
  /**
   * @description: 千次展现成本
   * @type: string
   * @default:
   **/
  cpm: string;

  /**
   * @description: 广告投资回报率
   * @type: string
   * @default:
   **/
  roi: string;

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
