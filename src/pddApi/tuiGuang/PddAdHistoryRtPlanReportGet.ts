export const PDD_AD_HISTORY_RT_PLAN_REPORT_GET = 'pdd.ad.history.rt.plan.report.get';

/**
 * 接口名称：推广计划实时报表数据
 * 接口标识：pdd.ad.history.rt.plan.report.get
 * 接口使用场景：推广计划实时报表数据，可获得推广计划的实时数据
 **/
export interface PddAdHistoryRtPlanReportGetRequestInterface {
  /**
   * @description: 0--搜索广告,1--明星店铺,2--定向广告,3--首页Banner广告（目前只支持0，暂不支持1、2、3）
   * @type: number
   * @default:
   **/
  scene_type?: number;
}

/**
 * 接口名称：推广计划实时报表数据
 * 接口标识：pdd.ad.history.rt.plan.report.get
 * 接口使用场景：推广计划实时报表数据，可获得推广计划的实时数据
 **/
export interface PddAdHistoryRtPlanReportGetResponseInterface {
  /**
   * @description: 返回response
   * @type: PddAdHistoryRtPlanReportGetAdPlanRealTimeReportResponseResponseInterface
   * @default:
   *
   **/
  ad_plan_real_time_report_response: PddAdHistoryRtPlanReportGetAdPlanRealTimeReportResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/
export interface PddAdHistoryRtPlanReportGetAdPlanRealTimeReportResponseResponseInterface {
  /**
   * @description: 报表对象列表
   * @type: PddAdHistoryRtPlanReportGetAdPlanRealTimeReportResponsePlanRealTimeReportListResponseInterface[]
   * @default:
   *
   **/
  plan_real_time_report_list: PddAdHistoryRtPlanReportGetAdPlanRealTimeReportResponsePlanRealTimeReportListResponseInterface[];
}

/**
 * @description 报表对象列表
 * @default
 * @example
 **/
export interface PddAdHistoryRtPlanReportGetAdPlanRealTimeReportResponsePlanRealTimeReportListResponseInterface {
  /**
   * @description: 计划id
   * @type: string
   * @default:
   **/
  plan_id: string;

  /**
   * @description: 计划名
   * @type: string
   * @default:
   **/
  plan_name: string;

  /**
   * @description: 计划日限额，单位厘
   * @type: string
   * @default:
   **/
  max_cost: string;

  /**
   * @description: 1：已启用，2：未启用
   * @type: number
   * @default:
   **/
  operate_status: number;

  /**
   * @description: 1：余额充足，2：余额不足，3：超出消耗上限
   * @type: number
   * @default:
   **/
  account_status: number;

  /**
   * @description: 1：推广中，2：手动暂停，3：余额不足，4：到达日限额，5：无推广单元，6：已删除
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 1：已删除，0：未删除
   * @type: number
   * @default:
   **/
  is_deleted: number;

  /**
   * @description: 推广单元数量
   * @type: string
   * @default:
   **/
  ad_unit_num: string;

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

  /**
   * @description: 推广类型（1-商品推广，2-店铺推广）
   * @type: number
   * @default:
   **/
  product_type: number;
}
