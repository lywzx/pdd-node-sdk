export const PDD_AD_API_KEYWORD_QUERY_LIST = 'pdd.ad.api.keyword.query.list';

export const PDD_AD_API_KEYWORD_QUERY_LIST_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
  },
];

/**
 * 接口名称：查询关键词列表
 * 接口标识：pdd.ad.api.keyword.query.list
 * 接口使用场景：查询关键词列表
 **/
export interface PddAdApiKeywordQueryListRequestInterface {
  /**
   * @description: 广告单元Id
   * @type: string | number
   * @default:
   **/
  adId: string | number;

  /**
   * @description: 报表数据开始日期
   * @type: string
   * @default:
   **/
  beginDate: string;

  /**
   * @description: 报表数据截止日期
   * @type: string
   * @default:
   **/
  endDate: string;

  /**
   * @description: 排序字段。0表示按曝光量排序，1表示按点击量排序，2表示按点击率排序，3表示按点击单价排序，4表示按消耗排序，5表示按订单数排序，6表示按交易额排序，7表示按产出比排序，8表示按日期排序，9表示按千次曝光单价排序，10表示按店铺收藏数排序，11表示按商品收藏数排序，12表示按点击转化率排序，13表示按转化成本排序，14表示按平均成交金额排序。
   * @type: number
   * @default:
   **/
  orderBy?: number;

  /**
   * @description: 排序类型。0表示降序，1表示升序。
   * @type: number
   * @default:
   **/
  sortBy?: number;
}

/**
 * 接口名称：查询关键词列表
 * 接口标识：pdd.ad.api.keyword.query.list
 * 接口使用场景：查询关键词列表
 **/
export interface PddAdApiKeywordQueryListResponseInterface {
  /**
   * @description:
   * @type: PddAdApiKeywordQueryListResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiKeywordQueryListResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiKeywordQueryListResponseResponseInterface {
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
   * @type: PddAdApiKeywordQueryListResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddAdApiKeywordQueryListResponseResultResponseInterface[];

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
export interface PddAdApiKeywordQueryListResponseResultResponseInterface {
  /**
   * @description: 每笔成交金额(average pay amount)，单位厘
   * @type: string
   * @default:
   **/
  avgPayAmount: string;

  /**
   * @description: 出价
   * @type: string | number
   * @default:
   **/
  bid: string | number;

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
   * @description: 曝光状态。1表示正常，2表示15天之内无展现。
   * @type: number
   * @default:
   **/
  impressionStatus: number;

  /**
   * @description: 平均推广位置
   * @type: string
   * @default:
   **/
  keywordAdIdx: string;

  /**
   * @description: 关键词Id
   * @type: string | number
   * @default:
   **/
  keywordId: string | number;

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
   * @description: 溢价比例。万分比
   * @type: string | number
   * @default:
   **/
  premiumRate: string | number;

  /**
   * @description: 溢价报表
   * @type: PddAdApiKeywordQueryListResponseResultPremiumReportDataResponseInterface
   * @default:
   *
   **/
  premiumReportData: PddAdApiKeywordQueryListResponseResultPremiumReportDataResponseInterface;

  /**
   * @description: 质量分
   * @type: number
   * @default:
   **/
  qualityScore: number;

  /**
   * @description: 广告排名（平均数）
   * @type: string
   * @default:
   **/
  rankAverage: string;

  /**
   * @description: 广告排名（中位数）
   * @type: string
   * @default:
   **/
  rankMedian: string;

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
   * @description: 关键词状态。1表示推广中，2表示已删除。
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 转化成本
   * @type: string
   * @default:
   **/
  transactionCost: string;

  /**
   * @description: 关键词
   * @type: string
   * @default:
   **/
  word: string;
}

/**
 * @description 溢价报表
 * @default
 * @example
 **/
export interface PddAdApiKeywordQueryListResponseResultPremiumReportDataResponseInterface {
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
   * @description: er 千次展现成本
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
   * @description: 平均推广位置
   * @type: string
   * @default:
   **/
  keywordAdIdx: string;

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
   * @description: 广告排名（平均数）
   * @type: string
   * @default:
   **/
  rankAverage: string;

  /**
   * @description: 广告排名（中位数）
   * @type: string
   * @default:
   **/
  rankMedian: string;

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
