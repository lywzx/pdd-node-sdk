export const PDD_AD_API_UNIT_QUERY_LIST = 'pdd.ad.api.unit.query.list';

/**
 * 接口名称：查询单元列表页
 * 接口标识：pdd.ad.api.unit.query.list
 * 接口使用场景：查询单元列表页
 **/
export interface PddAdApiUnitQueryListRequestInterface {
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
   * @description: 广告计划ID。
   * @type: string | number
   * @default:
   **/
  planId: string | number;

  /**
   * @description: 场景类型。0表示搜索，2表示展示。
   * @type: number
   * @default:
   **/
  scenesType: number;

  /**
   * @description: 排序类型。0表示降序，1表示升序。
   * @type: number
   * @default:
   **/
  sortBy?: number;
}

/**
 * 接口名称：查询单元列表页
 * 接口标识：pdd.ad.api.unit.query.list
 * 接口使用场景：查询单元列表页
 **/
export interface PddAdApiUnitQueryListResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitQueryListResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitQueryListResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitQueryListResponseResponseInterface {
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
   * @type: PddAdApiUnitQueryListResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddAdApiUnitQueryListResponseResultResponseInterface[];

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
export interface PddAdApiUnitQueryListResponseResultResponseInterface {
  /**
   * @description: 每笔成交金额(average pay amount)，单位厘
   * @type: string
   * @default:
   **/
  avgPayAmount: string;

  /**
   * @description: 广告单元出价。单位厘
   * @type: string | number
   * @default:
   **/
  bid: string | number;

  /**
   * @description: 类目ID
   * @type: string | number
   * @default:
   **/
  catId: string | number;

  /**
   * @description: 类目名称
   * @type: string
   * @default:
   **/
  catName: string;

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
   * @description: 智能推广数据积累状态。0表示未知，1表示智能投放期，2表示数据积累期，3表示数据积累缓慢。
   * @type: number
   * @default:
   **/
  dataAccumulationStatus: number;

  /**
   * @description: 操作状态。0表示未知，1表示启用，2表示暂停。
   * @type: number
   * @default:
   **/
  dataOperateStatus: number;

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
   * @description: 商品ID
   * @type: string | number
   * @default:
   **/
  goodsId: string | number;

  /**
   * @description: 商品名称
   * @type: string
   * @default:
   **/
  goodsName: string;

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
   * @description: 广告主ID
   * @type: string | number
   * @default:
   **/
  mallId: string | number;

  /**
   * @description: 最大团购价。单位厘
   * @type: string | number
   * @default:
   **/
  maxGroupPrice: string | number;

  /**
   * @description: 最小团购价。单位厘
   * @type: string | number
   * @default:
   **/
  minGroupPrice: string | number;

  /**
   * @description: OCPC开启日期
   * @type: string
   * @default:
   **/
  ocpcStartDate: string;

  /**
   * @description: 优化目标。0表示不优化。1表示优化ROI，2表示优化转化成本。
   * @type: number
   * @default:
   **/
  optimizationGoal: number;

  /**
   * @description: 智能优化广告相关
   * @type: PddAdApiUnitQueryListResponseResultOptimizationOutputMessageResponseInterface
   * @default:
   *
   **/
  optimizationOutputMessage: PddAdApiUnitQueryListResponseResultOptimizationOutputMessageResponseInterface;

  /**
   * @description: 广告转化支付订单量
   * @type: string | number
   * @default:
   **/
  orderNum: string | number;

  /**
   * @description: 广告计划ID
   * @type: string | number
   * @default:
   **/
  planId: string | number;

  /**
   * @description: 广告计划名称
   * @type: string
   * @default:
   **/
  planName: string;

  /**
   * @description: 推广策略。0表示未知，1表示自定义推广，2表示智能推广。
   * @type: number
   * @default:
   **/
  planStrategy: number;

  /**
   * @description: 广告惩罚原因
   * @type: string
   * @default:
   **/
  punishReason: string;

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
   * @description: 单元状态。1表示推广中，2表示手动暂停，3表示商品售罄，4表示商品下架，5表示限制推广，6表示已删除，7表示审核中，8表示无推广中创意，9表示审核驳回。
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 商品图
   * @type: string
   * @default:
   **/
  thumbUrl: string;

  /**
   * @description: 转化成本
   * @type: string
   * @default:
   **/
  transactionCost: string;

  /**
   * @description: 广告单元ID
   * @type: string | number
   * @default:
   **/
  unitId: string | number;

  /**
   * @description: 广告单元名称
   * @type: string
   * @default:
   **/
  unitName: string;
}

/**
 * @description 智能优化广告相关
 * @default
 * @example
 **/
export interface PddAdApiUnitQueryListResponseResultOptimizationOutputMessageResponseInterface {
  /**
   * @description: 优化出价
   * @type: string | number
   * @default:
   **/
  optimizationBid: string | number;

  /**
   * @description: 优化启用时间。启用优化时未必立即开始，取决于数据积累状态。
   * @type: string
   * @default:
   **/
  optimizationEnableTime: string;

  /**
   * @description: 优化目标。0表示不优化。1表示优化ROI，2表示优化转化成本。
   * @type: number
   * @default:
   **/
  optimizationGoal: number;

  /**
   * @description: 优化方式。0表示不优化，1表示ECPC，2表示OCPC。
   * @type: number
   * @default:
   **/
  optimizationMethod: number;

  /**
   * @description: 优化开始时间
   * @type: string
   * @default:
   **/
  optimizationStartTime: string;
}
