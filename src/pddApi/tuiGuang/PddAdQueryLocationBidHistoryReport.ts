export const PDD_AD_QUERY_LOCATION_BID_HISTORY_REPORT = 'pdd.ad.query.location.bid.history.report';
export const PDD_AD_QUERY_LOCATION_BID_HISTORY_REPORT_RESPONSE_KEY = 'open_api_response';

/**
 * 接口名称：资源位历史报表数据
 * 接口标识：pdd.ad.query.location.bid.history.report
 * 接口使用场景：资源位历史报表数据
 **/
export interface PddAdQueryLocationBidHistoryReportRequestInterface {
  /**
   * @description: 推广类型  2-展示推广
   * @type: number
   * @default:
   **/
  scene_type?: number;

  /**
   * @description: 分天数据查询时必填 单元Id
   * @type: string
   * @default:
   **/
  unit_id: string;

  /**
   * @description: 计划ID
   * @type: string
   * @default:
   **/
  planId: string;

  /**
   * @description: 分天数据查询时必填，资源位类型。0表示基础流量包，1表示类目商品页，2表示商品详情页，3表示营销活动页，4表示店铺关注页，5表示订单评价页，6表示优选活动页
   * @type: number
   * @default:
   **/
  location_type: number;

  /**
   * @description: 汇总报表查询时必填，资源位类型列表，多个资源位以逗号隔开。值所代表的含义参见location_type字段.
   * @type: string
   * @default:
   **/
  location_types: string;

  /**
   * @description: 聚合方式，1-日期，2-实体
   * @type: number
   * @default:
   **/
  group_by?: number;

  /**
   * @description: page_request
   * @type: PddAdQueryLocationBidHistoryReportPageRequestRequestInterface
   * @default:
   *
   **/
  page_request: PddAdQueryLocationBidHistoryReportPageRequestRequestInterface;

  /**
   * @description: 起始日期 "2018-11-01"
   * @type: string
   * @default:
   **/
  begin_date?: string;

  /**
   * @description: 结束日期 "2018-11-01"
   * @type: string
   * @default:
   **/
  end_date?: string;

  /**
   * @description: 排序字段 默认DATE（8）0 - IMPR_NUM - 曝光量排序、1 - CLK_NUM - 点击量排序2 - CLK_RATE - 点击率3 - CPC - 点击单价排序4 - SPEND - 消耗排序5 - PAY_ORDER_NUM - 订单数排序6 - PAY_GVM - 交易额排序7 - ROI - 产出比排序8 - DATE - 日期9 - CPM - 千次曝光单价10 - FAV_MALL - 店铺关注数
   * @type: number
   * @default:
   **/
  order_by: number;

  /**
   * @description: 排序方式  默认降序（0）
   * 0 - DESC - 降序
   * 1 - ASC - 升序
   * @type: number
   * @default:
   **/
  sort_by: number;
}

/**
 * @description page_request
 * @default
 * @example
 **/
export interface PddAdQueryLocationBidHistoryReportPageRequestRequestInterface {
  /**
   * @description: 页码 默认 1
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
 * 接口名称：资源位历史报表数据
 * 接口标识：pdd.ad.query.location.bid.history.report
 * 接口使用场景：资源位历史报表数据
 **/
export interface PddAdQueryLocationBidHistoryReportResponseInterface {
  /**
   * @description: 开平返回
   * @type: PddAdQueryLocationBidHistoryReportOpenApiResponseResponseInterface
   * @default:
   *
   **/
  open_api_response: PddAdQueryLocationBidHistoryReportOpenApiResponseResponseInterface;
}

/**
 * @description 开平返回
 * @default
 * @example
 **/
export interface PddAdQueryLocationBidHistoryReportOpenApiResponseResponseInterface {
  /**
   * @description: 列表信息
   * @type: PddAdQueryLocationBidHistoryReportOpenApiResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddAdQueryLocationBidHistoryReportOpenApiResponseResultResponseInterface[];

  /**
   * @description: 总数
   * @type: string
   * @default:
   **/
  total: string;
}

/**
 * @description 列表信息
 * @default
 * @example
 **/
export interface PddAdQueryLocationBidHistoryReportOpenApiResponseResultResponseInterface {
  /**
   * @description: 店铺关注数
   * @type: string
   * @default:
   **/
  mall_fav_num: string;

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
   * @type: string
   * @default:
   **/
  gmv: string;

  /**
   * @description: 广告转化支付订单数
   * @type: string
   * @default:
   **/
  order_num: string;

  /**
   * @description: 点击单价，单位厘
   * @type: string
   * @default:
   **/
  cpc: string;

  /**
   * @description: 广告消耗,单位厘
   * @type: string
   * @default:
   **/
  spend: string;

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
   * @description: 分天数据日期
   * @type: string
   * @default:
   **/
  date: string;

  /**
   * @description: 定向状态，0表示未删除，1表示已删除
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 资源位ID。汇总报表查询时该字段才有值
   * @type: string
   * @default:
   **/
  location_id: string;

  /**
   * @description: 分天数据查询时必填，资源位类型。0表示基础流量包，1表示类目商品页，2表示商品详情页，3表示营销活动页，4表示店铺关注页，5表示订单评价页，6表示优选活动页
   * @type: number
   * @default:
   **/
  location_type: number;

  /**
   * @description: 单元ID
   * @type: string
   * @default:
   **/
  unit_id: string;

  /**
   * @description: 计划id
   * @type: string
   * @default:
   **/
  plan_id: string;

  /**
   * @description: 广告主ID
   * @type: string
   * @default:
   **/
  mall_id: string;
}
