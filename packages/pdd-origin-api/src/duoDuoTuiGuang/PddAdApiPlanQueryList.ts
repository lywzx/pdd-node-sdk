export const PDD_AD_API_PLAN_QUERY_LIST = 'pdd.ad.api.plan.query.list';

export const PDD_AD_API_PLAN_QUERY_LIST_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
  },
];

/**
 * 接口名称：查询计划列表页
 * 接口标识：pdd.ad.api.plan.query.list
 * 接口使用场景：查询计划列表页
 **/
export interface PddAdApiPlanQueryListRequestInterface {
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
 * 接口名称：查询计划列表页
 * 接口标识：pdd.ad.api.plan.query.list
 * 接口使用场景：查询计划列表页
 **/
export interface PddAdApiPlanQueryListResponseInterface {
  /**
   * @description:
   * @type: PddAdApiPlanQueryListResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiPlanQueryListResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiPlanQueryListResponseResponseInterface {
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
   * @type: PddAdApiPlanQueryListResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddAdApiPlanQueryListResponseResultResponseInterface[];

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
export interface PddAdApiPlanQueryListResponseResultResponseInterface {
  /**
   * @description: 计划日限额今日剩余可修改次数。一个计划一天可修改五次日限额。
   * @type: number
   * @default:
   **/
  availableBudgetChangeNumberToday: number;

  /**
   * @description: 每笔成交金额(average pay amount)，单位厘
   * @type: string
   * @default:
   **/
  avgPayAmount: string;

  /**
   * @description: 计划日限额今日已修改次数
   * @type: number
   * @default:
   **/
  budgetChangedNumberToday: number;

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
   * @description: 分时折扣比例。千分比。
   * @type: number
   * @default:
   **/
  discountRate: number;

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
   * @description: 日消耗上限。单位厘
   * @type: string | number
   * @default:
   **/
  maxCost: string | number;

  /**
   * @description: 广告主账户状态。1表示余额充足，2表示余额不足，3表示超出消耗上限。
   * @type: number
   * @default:
   **/
  merchantAccountStatus: number;

  /**
   * @description: 操作状态。1表示开启，2表示暂停。
   * @type: number
   * @default:
   **/
  merchantOperateStatus: number;

  /**
   * @description: 广告转化支付订单量
   * @type: string | number
   * @default:
   **/
  orderNum: string | number;

  /**
   * @description: 计划ID
   * @type: string | number
   * @default:
   **/
  planId: string | number;

  /**
   * @description: 计划名称
   * @type: string
   * @default:
   **/
  planName: string;

  /**
   * @description: 推广策略。1表示自定义推广，2表示智能推广。
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
   * @description: 单元状态。1表示推广中，2表示手动暂停，3表示余额不足，4表示到达日限额，5表示无推广中单元，6表示已删除，7表示系统暂停-投放已结束，8表示系统暂停-投放未开始，9表示不在投放时段，10表示待确认推广单，11表示推广费用待锁定，12表示合约已失效，13表示限制推广，14表示部分推广中，15表示店铺限制推广。
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
   * @description: 计划下的单元数量
   * @type: number
   * @default:
   **/
  unitNum: number;
}
