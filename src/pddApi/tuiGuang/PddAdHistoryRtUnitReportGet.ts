export const PDD_AD_HISTORY_RT_UNIT_REPORT_GET = 'PDD_AD_HISTORY_RT_UNIT_REPORT_GET';

/**
 * 接口名称：推广单元实时报表数据
 * 接口标识：pdd.ad.history.rt.unit.report.get
 * 接口使用场景：推广单元实时报表数据
 **/

export interface PddAdHistoryRtUnitReportGetRequestInterface {
  /**
   * @description: 0--搜索广告,1--明星店铺,2--定向广告,3--首页Banner广告（目前只支持0，暂不支持1、2、3）
   * @type: number
   * @default:
   **/
  scene_type?: number;

  /**
   * @description: 计划id
   * @type: string
   * @default:
   **/
  plan_id?: string;
}

/**
 * 接口名称：推广单元实时报表数据
 * 接口标识：pdd.ad.history.rt.unit.report.get
 * 接口使用场景：推广单元实时报表数据
 **/

export interface PddAdHistoryRtUnitReportGetResponseInterface {
  /**
   * @description: 返回response
   * @type: PddAdHistoryRtUnitReportGetAdUnitRealTimeReportResponseResponseInterface
   * @default:
   *
   **/
  ad_unit_real_time_report_response: PddAdHistoryRtUnitReportGetAdUnitRealTimeReportResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/

export interface PddAdHistoryRtUnitReportGetAdUnitRealTimeReportResponseResponseInterface {
  /**
   * @description: 报表对象列表
   * @type: PddAdHistoryRtUnitReportGetAdUnitRealTimeReportResponseUnitRealTimeReportListResponseInterface[]
   * @default:
   *
   **/
  unit_real_time_report_list: PddAdHistoryRtUnitReportGetAdUnitRealTimeReportResponseUnitRealTimeReportListResponseInterface[];
}

/**
 * @description 报表对象列表
 * @default
 * @example
 **/

export interface PddAdHistoryRtUnitReportGetAdUnitRealTimeReportResponseUnitRealTimeReportListResponseInterface {
  /**
   * @description: 单元状态。1表示推广中，2表示手动暂停，3表示商品售罄，4表示商品下架，5表示限制推广，6表示已删除，7表示审核中，8表示无推广中创意，9表示审核驳回，10表示品牌词重审驳回
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 计划id
   * @type: string
   * @default:
   **/
  plan_id: string;

  /**
   * @description: 单元id
   * @type: string
   * @default:
   **/
  unit_id: string;

  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id: string;

  /**
   * @description: 1：已启用，2：未启用
   * @type: number
   * @default:
   **/
  operate_status: number;

  /**
   * @description: 商品名
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 商品图片url
   * @type: string
   * @default:
   **/
  thumb_url: string;

  /**
   * @description: 最小团购价
   * @type: string
   * @default:
   **/
  min_group_price: string;

  /**
   * @description: 最大团购价
   * @type: string
   * @default:
   **/
  max_group_price: string;

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

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_AD_HISTORY_RT_UNIT_REPORT_GET]: {
    requestInterface: PddAdHistoryRtUnitReportGetRequestInterface;
    responseInterface: PddAdHistoryRtUnitReportGetResponseInterface;
  };
}
