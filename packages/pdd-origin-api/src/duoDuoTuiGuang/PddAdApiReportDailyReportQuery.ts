export const PDD_AD_API_REPORT_DAILY_REPORT_QUERY = 'pdd.ad.api.report.daily.report.query';

/**
 * 接口名称：广告主分天报表查询
 * 接口标识：pdd.ad.api.report.daily.report.query
 * 接口使用场景：查询广告主的各维度的分天报表，当前支持广告主，计划，单元，创意，关键词，定向，资源位等维度，当前仅支持单实体的查询，不支持批量实体的查询，返回的结果按天分组
 **/
export interface PddAdApiReportDailyReportQueryRequestInterface {
  /**
   * @description: 结束日期的字符串，格式类似'2020-02-02'，当前支持查询90天内数据
   * @type: string
   * @default:
   **/
  endDateString: string;

  /**
   * @description: 各维度查询的主体id，查询计划维度传计划id，查询单元维度传单元id，查询关键词维度传关键词id，查询创意传创意id，查询广告主维度，资源位和定向维度不用传此参数
   * @type: string | number
   * @default:
   **/
  entityId?: string | number;

  /**
   * @description: 额外的查询条件，查询关键词，创意维度的的时候要在此传单元id(adId)的信息，查询资源位的时候要传单元id(adId）和资源位类型(bidReferenceId),查询定向维度要传单元id(adId),定向类型(bidReferenceId)，如果是查二级定向，需要传二级定向id(subBidReferenceId)
   * @type: PddAdApiReportDailyReportQueryExternalParamMapRequestInterface
   * @default:
   *
   **/
  externalParamMap?: PddAdApiReportDailyReportQueryExternalParamMapRequestInterface;

  /**
   * @description: 查询维度，0-广告主，1-计划，2-单元，3-定向，4-创意，5-资源位，6-关键词
   * @type: number
   * @default:
   **/
  queryDimensionType: number;

  /**
   * @description: 场景类型,0-搜索，2-场景展示
   * @type: number
   * @default:
   **/
  scenesType: number;

  /**
   * @description: 开始日期的字符串，格式类似'2020-02-02'，如果查询今日，startDateString和endDateString传今日的字符串，如果查询历史，startDateString和endDateString分别传开始和结束字符串，不能跨今日和历史查询
   * @type: string
   * @default:
   **/
  startDateString: string;
}

/**
 * @description 额外的查询条件，查询关键词，创意维度的的时候要在此传单元id(adId)的信息，查询资源位的时候要传单元id(adId）和资源位类型(bidReferenceId),查询定向维度要传单元id(adId),定向类型(bidReferenceId)，如果是查二级定向，需要传二级定向id(subBidReferenceId)
 * @default
 * @example {"bidReferenceId":"8","subBidReferenceId":"34034","adId":"25053158"}
 **/
export interface PddAdApiReportDailyReportQueryExternalParamMapRequestInterface {
  /**
   * @description: key
   * @type: string
   * @default:
   **/
  $key?: string;

  /**
   * @description: value
   * @type: string
   * @default:
   **/
  $value?: string;
}

/**
 * 接口名称：广告主分天报表查询
 * 接口标识：pdd.ad.api.report.daily.report.query
 * 接口使用场景：查询广告主的各维度的分天报表，当前支持广告主，计划，单元，创意，关键词，定向，资源位等维度，当前仅支持单实体的查询，不支持批量实体的查询，返回的结果按天分组
 **/
export interface PddAdApiReportDailyReportQueryResponseInterface {
  /**
   * @description:
   * @type: PddAdApiReportDailyReportQueryResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiReportDailyReportQueryResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiReportDailyReportQueryResponseResponseInterface {
  /**
   * @description:
   * @type: number
   * @default:
   **/
  errorCode: number;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  errorMsg: string;

  /**
   * @description:
   * @type: PddAdApiReportDailyReportQueryResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddAdApiReportDailyReportQueryResponseResultResponseInterface;

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  success: boolean;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiReportDailyReportQueryResponseResultResponseInterface {
  /**
   * @description: 分天报表数据列表
   * @type: PddAdApiReportDailyReportQueryResponseResultDailyReportListResponseInterface[]
   * @default:
   *
   **/
  dailyReportList: PddAdApiReportDailyReportQueryResponseResultDailyReportListResponseInterface[];

  /**
   * @description: 分天报表数据汇总
   * @type: PddAdApiReportDailyReportQueryResponseResultSumReportResponseInterface
   * @default:
   *
   **/
  sumReport: PddAdApiReportDailyReportQueryResponseResultSumReportResponseInterface;
}

/**
 * @description 分天报表数据列表
 * @default
 * @example
 **/
export interface PddAdApiReportDailyReportQueryResponseResultDailyReportListResponseInterface {
  /**
   * @description: 每笔成交金额(average pay amount)，单位厘
   * @type: string
   * @default:
   **/
  avgPayAmount: string;

  /**
   * @description: 广告点击量
   * @type: string | number
   * @default:
   **/
  click: string | number;

  /**
   * @description: 平均点击花费，单位厘
   * @type: string
   * @default:
   **/
  cpc: string;

  /**
   * @description: 千次展现成本
   * @type: string
   * @default:
   **/
  cpm: string;

  /**
   * @description: 广告点击率
   * @type: string
   * @default:
   **/
  ctr: string;

  /**
   * @description: 点击转化率
   * @type: string
   * @default:
   **/
  cvr: string;

  /**
   * @description: 日期
   * @type: string
   * @default:
   **/
  date: string;

  /**
   * @description: 广告转化支付金额，单位厘
   * @type: string | number
   * @default:
   **/
  gmv: string | number;

  /**
   * @description: 商品收藏数
   * @type: string | number
   * @default:
   **/
  goodsFavNum: string | number;

  /**
   * @description: 广告曝光量
   * @type: string | number
   * @default:
   **/
  impression: string | number;

  /**
   * @description: 店铺收藏数
   * @type: string | number
   * @default:
   **/
  mallFavNum: string | number;

  /**
   * @description: 广告转化支付订单量
   * @type: string | number
   * @default:
   **/
  orderNum: string | number;

  /**
   * @description: 广告投入产出比
   * @type: string
   * @default:
   **/
  roi: string;

  /**
   * @description: 广告消耗,单位厘
   * @type: string | number
   * @default:
   **/
  spend: string | number;

  /**
   * @description: 转化成本
   * @type: string
   * @default:
   **/
  transactionCost: string;
}

/**
 * @description 分天报表数据汇总
 * @default
 * @example
 **/
export interface PddAdApiReportDailyReportQueryResponseResultSumReportResponseInterface {
  /**
   * @description: 每笔成交金额(average pay amount)，单位厘
   * @type: string
   * @default:
   **/
  avgPayAmount: string;

  /**
   * @description: 广告点击量
   * @type: string | number
   * @default:
   **/
  click: string | number;

  /**
   * @description: 平均点击花费，单位厘
   * @type: string
   * @default:
   **/
  cpc: string;

  /**
   * @description: 千次展现成本
   * @type: string
   * @default:
   **/
  cpm: string;

  /**
   * @description: 广告点击率
   * @type: string
   * @default:
   **/
  ctr: string;

  /**
   * @description: 点击转化率
   * @type: string
   * @default:
   **/
  cvr: string;

  /**
   * @description: 广告转化支付金额，单位厘
   * @type: string | number
   * @default:
   **/
  gmv: string | number;

  /**
   * @description: 商品收藏数
   * @type: string | number
   * @default:
   **/
  goodsFavNum: string | number;

  /**
   * @description: 广告曝光量
   * @type: string | number
   * @default:
   **/
  impression: string | number;

  /**
   * @description: 店铺收藏数
   * @type: string | number
   * @default:
   **/
  mallFavNum: string | number;

  /**
   * @description: 广告转化支付订单量
   * @type: string | number
   * @default:
   **/
  orderNum: string | number;

  /**
   * @description: 广告投入产出比
   * @type: string
   * @default:
   **/
  roi: string;

  /**
   * @description: 广告消耗,单位厘
   * @type: string | number
   * @default:
   **/
  spend: string | number;

  /**
   * @description: 转化成本
   * @type: string
   * @default:
   **/
  transactionCost: string;
}
