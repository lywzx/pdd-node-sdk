export const PDD_AD_HISTORY_UNIT_REPORT_GET = 'PDD_AD_HISTORY_UNIT_REPORT_GET';

/**
 * 接口名称：推广单元历史报表数据
 * 接口标识：pdd.ad.history.unit.report.get
 * 接口使用场景：推广单元历史报表数据：1、可以获取某个单元的分天历史数据；2、可以获得所有单元在指定时间段内的汇总统计数据；3、可以获得指定计划下的所有单元在指定时间段内的汇总统计数据；4、可获取最近30天的数据。
 **/

export interface PddAdHistoryUnitReportGetRequestInterface {
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
   * @description: 0--曝光量排序,1--点击量排序,2--点击率,3--点击单价排序,4--消耗排序,5--订单数排序,6--交易额排序,7--产出比排序,8--日期,默认8
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
   * @description: 1--按日期分组,2--按单元id分组
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
   * @description: 单元id，单元id，仅当groupBy = 1时传值
   * @type: string
   * @default:
   **/
  unit_id: string;

  /**
   * @description: 计划id，groupBy = 2时传值
   * @type: string
   * @default:
   **/
  plan_id: string;
}

/**
 * 接口名称：推广单元历史报表数据
 * 接口标识：pdd.ad.history.unit.report.get
 * 接口使用场景：推广单元历史报表数据：1、可以获取某个单元的分天历史数据；2、可以获得所有单元在指定时间段内的汇总统计数据；3、可以获得指定计划下的所有单元在指定时间段内的汇总统计数据；4、可获取最近30天的数据。
 **/

export interface PddAdHistoryUnitReportGetResponseInterface {
  /**
   * @description: 返回response
   * @type: PddAdHistoryUnitReportGetAdUnitHistoryReportGetResponseResponseInterface
   * @default:
   *
   **/
  ad_unit_history_report_get_response: PddAdHistoryUnitReportGetAdUnitHistoryReportGetResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/

export interface PddAdHistoryUnitReportGetAdUnitHistoryReportGetResponseResponseInterface {
  /**
   * @description: 总数
   * @type: string
   * @default:
   **/
  total: string;

  /**
   * @description: report列表
   * @type: PddAdHistoryUnitReportGetAdUnitHistoryReportGetResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddAdHistoryUnitReportGetAdUnitHistoryReportGetResponseResultResponseInterface[];
}

/**
 * @description report列表
 * @default
 * @example
 **/

export interface PddAdHistoryUnitReportGetAdUnitHistoryReportGetResponseResultResponseInterface {
  /**
   * @description: 扩展字段
   * @type: MAP
   * @default:
   *
   **/
  external_fields: MAP;

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

/**
 * @description 扩展字段
 * @default
 * @example
 **/

export interface PddAdHistoryUnitReportGetAdUnitHistoryReportGetResponseResultExternalFieldsResponseInterface {
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

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_AD_HISTORY_UNIT_REPORT_GET]: {
    requestInterface: PddAdHistoryUnitReportGetRequestInterface;
    responseInterface: PddAdHistoryUnitReportGetResponseInterface;
  };
}
