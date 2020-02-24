export const PDD_AD_CREATIVE_HISTORY_REPORT_GET = 'pdd.ad.creative.history.report.get';
export const PDD_AD_CREATIVE_HISTORY_REPORT_GET_RESPONSE_KEY = 'open_api_response';

/**
 * 接口名称：创意历史报表数据
 * 接口标识：pdd.ad.creative.history.report.get
 * 接口使用场景：创意历史报表数据
 **/
export interface PddAdCreativeHistoryReportGetRequestInterface {
  /**
   * @description: 创意ID, 分天数据必填，汇总表数据无需填
   * @type: string | number
   * @default:
   **/
  creative_id: string | number;

  /**
   * @description: 单元ID, 分天数据无需填，汇总表数据选填
   * @type: string | number
   * @default:
   **/
  unit_id: string | number;

  /**
   * @description: 计划ID, 分天数据无需填，汇总表数据选填
   * @type: string | number
   * @default:
   **/
  plan_id: string | number;

  /**
   * @description: 数据聚合方式（1 - 日期，2 - 实体 Id）
   * @type: number
   * @default:
   **/
  group_by?: number;

  /**
   * @description: 分页参数
   * @type: PddAdCreativeHistoryReportGetPageRequestRequestInterface
   * @default:
   *
   **/
  page_request: PddAdCreativeHistoryReportGetPageRequestRequestInterface;

  /**
   * @description: 开始日期，示例："2018-11-04"
   * @type: string
   * @default:
   **/
  begin_date?: string;

  /**
   * @description: 结束日期，示例："2018-11-04"
   * @type: string
   * @default:
   **/
  end_date?: string;

  /**
   * @description: 排序字段  默认DATE（8）0 - IMPR_NUM - 曝光量排序、1 - CLK_NUM - 点击量排序2 - CLK_RATE - 点击率3 - CPC - 点击单价排序4 - SPEND - 消耗排序5 - PAY_ORDER_NUM - 订单数排序6 - PAY_GVM - 交易额排序7 - ROI - 产出比排序8 - DATE - 日期9 - CPM - 千次曝光单价10 - FAV_MALL - 店铺关注数
   * @type: number
   * @default:
   **/
  order_by: number;

  /**
   * @description: 排序方式 默认降序（0）
   * 0 - DESC - 降序
   * 1 - ASC - 升序
   * @type: number
   * @default:
   **/
  sort_by: number;

  /**
   * @description: 推广类型，0-搜索推广，2-展示推广
   * @type: number
   * @default:
   **/
  scene_type?: number;
}

/**
 * @description 分页参数
 * @default
 * @example
 **/
export interface PddAdCreativeHistoryReportGetPageRequestRequestInterface {
  /**
   * @description: 页码，默认 1
   * @type: number
   * @default:
   **/
  page_number: number;

  /**
   * @description: 单页记录数 默认 10
   * @type: number
   * @default:
   **/
  page_size: number;
}

/**
 * 接口名称：创意历史报表数据
 * 接口标识：pdd.ad.creative.history.report.get
 * 接口使用场景：创意历史报表数据
 **/
export interface PddAdCreativeHistoryReportGetResponseInterface {
  /**
   * @description: 开平返回
   * @type: PddAdCreativeHistoryReportGetOpenApiResponseResponseInterface
   * @default:
   *
   **/
  open_api_response: PddAdCreativeHistoryReportGetOpenApiResponseResponseInterface;
}

/**
 * @description 开平返回
 * @default
 * @example
 **/
export interface PddAdCreativeHistoryReportGetOpenApiResponseResponseInterface {
  /**
   * @description: 信息列表
   * @type: PddAdCreativeHistoryReportGetOpenApiResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddAdCreativeHistoryReportGetOpenApiResponseResultResponseInterface[];

  /**
   * @description: 总数
   * @type: string | number
   * @default:
   **/
  total: string | number;
}

/**
 * @description 信息列表
 * @default
 * @example
 **/
export interface PddAdCreativeHistoryReportGetOpenApiResponseResultResponseInterface {
  /**
   * @description: 店铺关注数
   * @type: string | number
   * @default:
   **/
  mall_fav_num: string | number;

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
   * @description: 广告转化支付金额，单位厘
   * @type: string | number
   * @default:
   **/
  gmv: string | number;

  /**
   * @description: 广告转化支付订单数
   * @type: string | number
   * @default:
   **/
  order_num: string | number;

  /**
   * @description: 点击单价，单位厘
   * @type: string
   * @default:
   **/
  cpc: string;

  /**
   * @description: 广告消耗,单位厘
   * @type: string | number
   * @default:
   **/
  spend: string | number;

  /**
   * @description: 广告点击率
   * @type: string
   * @default:
   **/
  ctr: string;

  /**
   * @description: 广告点击数
   * @type: number
   * @default:
   **/
  click: number;

  /**
   * @description: 广告曝光数
   * @type: number
   * @default:
   **/
  impression: number;

  /**
   * @description: 创意状态：1-推广中，2-手动暂停，3-已删除，4-待发布，5-已驳回。 分天数据里无此数据
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 创意ID
   * @type: string | number
   * @default:
   **/
  creative_id: string | number;

  /**
   * @description: 单元ID, 分天数据里无此数据
   * @type: string | number
   * @default:
   **/
  unit_id: string | number;

  /**
   * @description: 计划ID,分天数据无此数据
   * @type: string | number
   * @default:
   **/
  plan_id: string | number;

  /**
   * @description: 广告主ID
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;

  /**
   * @description: 分天数据日期，汇总报表无此数据
   * @type: string
   * @default:
   **/
  date: string;

  /**
   * @description: 图片url
   * @type: string
   * @default:
   **/
  image_url: string;

  /**
   * @description: 创意名称
   * @type: string
   * @default:
   **/
  title: string;
}
