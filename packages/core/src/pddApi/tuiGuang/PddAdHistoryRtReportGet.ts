export const PDD_AD_HISTORY_RT_REPORT_GET = 'pdd.ad.history.rt.report.get';
export const PDD_AD_HISTORY_RT_REPORT_GET_RESPONSE_KEY = 'ad_mall_real_time_report_response';

/**
 * 接口名称：账户推广实时报表数据
 * 接口标识：pdd.ad.history.rt.report.get
 * 接口使用场景：账户推广实时报表数据，可获得实时总览报表数据
 **/
export interface PddAdHistoryRtReportGetRequestInterface {
  /**
   * @description: 0--搜索广告,1--明星店铺,2--定向广告,3--首页Banner广告（目前只支持0，暂不支持1、2、3）
   * @type: number
   * @default:
   **/
  scene_type: number;
}

/**
 * 接口名称：账户推广实时报表数据
 * 接口标识：pdd.ad.history.rt.report.get
 * 接口使用场景：账户推广实时报表数据，可获得实时总览报表数据
 **/
export interface PddAdHistoryRtReportGetResponseInterface {
  /**
   * @description: response
   * @type: PddAdHistoryRtReportGetAdMallRealTimeReportResponseResponseInterface
   * @default:
   *
   **/
  ad_mall_real_time_report_response: PddAdHistoryRtReportGetAdMallRealTimeReportResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddAdHistoryRtReportGetAdMallRealTimeReportResponseResponseInterface {
  /**
   * @description: 广告曝光数
   * @type: string | number
   * @default:
   **/
  ad_impr_num: string | number;

  /**
   * @description: 广告点击数
   * @type: string | number
   * @default:
   **/
  ad_clk_num: string | number;

  /**
   * @description: 广告消耗
   * @type: string | number
   * @default:
   **/
  spend: string | number;

  /**
   * @description: 广告转化支付订单数
   * @type: string | number
   * @default:
   **/
  pay_order_num: string | number;

  /**
   * @description: 广告转化支付金额
   * @type: string | number
   * @default:
   **/
  pay_gmv: string | number;

  /**
   * @description: 投入产出比
   * @type: string
   * @default:
   **/
  roi: string;

  /**
   * @description: 点击率
   * @type: string
   * @default:
   **/
  click_rate: string;
}
