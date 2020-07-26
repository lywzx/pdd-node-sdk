export const PDD_AD_API_REPORT_ENTITY_REPORT_QUERY = 'pdd.ad.api.report.entity.report.query';

export const PDD_AD_API_REPORT_ENTITY_REPORT_QUERY_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
  },
  {
    limiterLevel: 4,
    timeRange: 1,
    times: 50,
  },
];

/**
 * 接口名称：广告主报表分级查询接口
 * 接口标识：pdd.ad.api.report.entity.report.query
 * 接口使用场景：用于查询广告主报表某个实体下子级实体报表数据，返回的结果按查询的子实体维度分组，每条记录为子实体一段时间的汇总数据，例如查询广告主（查询实体）下所有计划（子实体）某一时段的报表信息，返回的记录按计划分组，每条记录为每个计划这段时间的汇总报表数据。
 **/
export interface PddAdApiReportEntityReportQueryRequestInterface {
  /**
   * @description: 结束日期的字符串，格式类似'2020-02-02'，当前支持查询90天内数据
   * @type: string
   * @default:
   **/
  endDateString: string;

  /**
   * @description: entityId的维度(当前只支持0-广告主，1-计划，2-单元维度),例如根据单元查询资源位的分级数据，entityId传单元id，entityDimensionType传单元维度，queryDimensionType传资源位维度
   * @type: number
   * @default:
   **/
  entityDimensionType?: number;

  /**
   * @description: 各维度查询的主体id，查询计划维度传计划id，查询单元维度传单元id
   * @type: string | number
   * @default:
   **/
  entityId?: string | number;

  /**
   * @description: 额外的查询条件，entityDimensionType维度为单元时，须加上父级计划id（planId）的信息
   * @type: PddAdApiReportEntityReportQueryExternalParamMapRequestInterface
   * @default:
   *
   **/
  externalParamMap?: PddAdApiReportEntityReportQueryExternalParamMapRequestInterface;

  /**
   * @description: 排序规则，0-曝光，1-点击，2-点击率，3-cpc,4-花费，5-订单量,6-gmv，7-roi,8-日期，9-cpm,10-店铺收藏，11-商品收藏
   * @type: number
   * @default:
   **/
  orderBy?: number;

  /**
   * @description: 排序顺序，0-降序，1-升序
   * @type: number
   * @default:
   **/
  orderType?: number;

  /**
   * @description: 查询维度，0-广告主，1-计划，2-单元，3-定向，4-创意，5-资源位，6-关键词
   * @type: number
   * @default:
   **/
  queryDimensionType: number;

  /**
   * @description: 分页字段,不传不分页
   * @type: PddAdApiReportEntityReportQueryQueryRangeRequestInterface
   * @default:
   *
   **/
  queryRange: PddAdApiReportEntityReportQueryQueryRangeRequestInterface;

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
 * @description 额外的查询条件，entityDimensionType维度为单元时，须加上父级计划id（planId）的信息
 * @default
 * @example {"planId":"25053158"}
 **/
export interface PddAdApiReportEntityReportQueryExternalParamMapRequestInterface {
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
 * @description 分页字段,不传不分页
 * @default
 * @example
 **/
export interface PddAdApiReportEntityReportQueryQueryRangeRequestInterface {
  /**
   * @description: 页数
   * @type: number
   * @default:
   **/
  pageNumber: number;

  /**
   * @description: 每页的数量
   * @type: number
   * @default:
   **/
  pageSize: number;
}

/**
 * 接口名称：广告主报表分级查询接口
 * 接口标识：pdd.ad.api.report.entity.report.query
 * 接口使用场景：用于查询广告主报表某个实体下子级实体报表数据，返回的结果按查询的子实体维度分组，每条记录为子实体一段时间的汇总数据，例如查询广告主（查询实体）下所有计划（子实体）某一时段的报表信息，返回的记录按计划分组，每条记录为每个计划这段时间的汇总报表数据。
 **/
export interface PddAdApiReportEntityReportQueryResponseInterface {
  /**
   * @description:
   * @type: PddAdApiReportEntityReportQueryResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiReportEntityReportQueryResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiReportEntityReportQueryResponseResponseInterface {
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
   * @type: PddAdApiReportEntityReportQueryResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddAdApiReportEntityReportQueryResponseResultResponseInterface;

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
export interface PddAdApiReportEntityReportQueryResponseResultResponseInterface {
  /**
   * @description: 单页报表数据列表
   * @type: PddAdApiReportEntityReportQueryResponseResultEntityReportListResponseInterface[]
   * @default:
   *
   **/
  entityReportList: PddAdApiReportEntityReportQueryResponseResultEntityReportListResponseInterface[];

  /**
   * @description: 分页数据汇总
   * @type: PddAdApiReportEntityReportQueryResponseResultSumReportResponseInterface
   * @default:
   *
   **/
  sumReport: PddAdApiReportEntityReportQueryResponseResultSumReportResponseInterface;

  /**
   * @description: 报表记录总数
   * @type: string | number
   * @default:
   **/
  total: string | number;
}

/**
 * @description 单页报表数据列表
 * @default
 * @example
 **/
export interface PddAdApiReportEntityReportQueryResponseResultEntityReportListResponseInterface {
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
   * @description: 查询的维度
   * @type: number
   * @default:
   **/
  dimensionType: number;

  /**
   * @description: 查询维度的主体id
   * @type: string | number
   * @default:
   **/
  entityId: string | number;

  /**
   * @description: 业务数据说明
   * @type: PddAdApiReportEntityReportQueryResponseResultEntityReportListExternalFieldValuesResponseInterface
   * @default:
   *
   **/
  externalFieldValues: PddAdApiReportEntityReportQueryResponseResultEntityReportListExternalFieldValuesResponseInterface;

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
 * @description 业务数据说明
 * @default
 * @example
 **/
export interface PddAdApiReportEntityReportQueryResponseResultEntityReportListExternalFieldValuesResponseInterface {
  /**
   * @description: key
   * @type: string
   * @default:
   **/
  $key: string;

  /**
   * @description: value
   * @type: string
   * @default:
   **/
  $value: string;
}

/**
 * @description 分页数据汇总
 * @default
 * @example
 **/
export interface PddAdApiReportEntityReportQueryResponseResultSumReportResponseInterface {
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
