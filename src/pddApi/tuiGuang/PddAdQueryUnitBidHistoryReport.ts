export const PDD_AD_QUERY_UNIT_BID_HISTORY_REPORT = 'pdd.ad.query.unit.bid.history.report';
export const PDD_AD_QUERY_UNIT_BID_HISTORY_REPORT_RESPONSE_KEY = 'open_api_response';

/**
 * 接口名称：定向历史报表数据
 * 接口标识：pdd.ad.query.unit.bid.history.report
 * 接口使用场景：定向历史报表数据
 **/
export interface PddAdQueryUnitBidHistoryReportRequestInterface {
  /**
   * @description: 推广类型  2-展示推广
   * @type: number
   * @default:
   **/
  scene_type?: number;

  /**
   * @description: 单元id ，分天查询时必填
   * @type: string | number
   * @default:
   **/
  unit_id: string | number;

  /**
   * @description: 计划id
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
   * @description: 分定向类型。分天查询时必填。1表示通投，2表示访客重定向，3表示相似商品定向，4表示叶子类目定向，5表示相似店铺定向，6表示兴趣点定向，7表示人群包定向，8表示地域定向人群，9表示商品高潜人群，10表示高品质商品偏好人群，11表示大促偏好人群，12表示爱分享人群
   * @type: number
   * @default:
   **/
  target_type?: number;

  /**
   * @description: 分天查询时必填 兴趣点ID，targetType不为6/7时，传 0
   * @type: string | number
   * @default:
   **/
  sub_level_target_id: string | number;

  /**
   * @description: 定向类型列表。汇总报销必填。多个定向以英文逗号隔开，值所代表的含义参见target_type字段
   * @type: string
   * @default:
   **/
  target_types: string;

  /**
   * @description: page_request
   * @type: PddAdQueryUnitBidHistoryReportPageRequestRequestInterface
   * @default:
   *
   **/
  page_request: PddAdQueryUnitBidHistoryReportPageRequestRequestInterface;

  /**
   * @description: 起始日期 2018-09-28
   * @type: string
   * @default:
   **/
  begin_date?: string;

  /**
   * @description: 结束日期 2018-09-28
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
   * @description: 排序方式 默认降序（0）
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
export interface PddAdQueryUnitBidHistoryReportPageRequestRequestInterface {
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
 * 接口名称：定向历史报表数据
 * 接口标识：pdd.ad.query.unit.bid.history.report
 * 接口使用场景：定向历史报表数据
 **/
export interface PddAdQueryUnitBidHistoryReportResponseInterface {
  /**
   * @description: 开平返回
   * @type: PddAdQueryUnitBidHistoryReportOpenApiResponseResponseInterface
   * @default:
   *
   **/
  open_api_response: PddAdQueryUnitBidHistoryReportOpenApiResponseResponseInterface;
}

/**
 * @description 开平返回
 * @default
 * @example
 **/
export interface PddAdQueryUnitBidHistoryReportOpenApiResponseResponseInterface {
  /**
   * @description: 列表信息
   * @type: PddAdQueryUnitBidHistoryReportOpenApiResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddAdQueryUnitBidHistoryReportOpenApiResponseResultResponseInterface[];

  /**
   * @description: 总数
   * @type: string | number
   * @default:
   **/
  total: string | number;
}

/**
 * @description 列表信息
 * @default
 * @example
 **/
export interface PddAdQueryUnitBidHistoryReportOpenApiResponseResultResponseInterface {
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
   * @description: 分天数据日期
   * @type: string
   * @default:
   **/
  date: string;

  /**
   * @description: 定向状态。0表示未删除，1表示已删除。分天查询时该字段无值
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: targetType值为6时表示兴趣点名称，targetType值为7时表示人群包名称，targetType值为8时表示地域名称。分天查询时该字段无值
   * @type: string
   * @default:
   **/
  sub_level_target_name: string;

  /**
   * @description: targetType值为6时表示兴趣点ID，targetType值为7时表示人群包ID，targetType值为8时表示地域ID。分天查询时该字段无值
   * @type: string | number
   * @default:
   **/
  sub_level_target_id: string | number;

  /**
   * @description: 定向类型
   * @type: number
   * @default:
   **/
  targetType: number;

  /**
   * @description: 定向id
   * @type: string | number
   * @default:
   **/
  target_id: string | number;

  /**
   * @description: 单元id
   * @type: string | number
   * @default:
   **/
  unit_id: string | number;

  /**
   * @description: 计划id
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
}
