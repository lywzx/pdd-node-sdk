export const PDD_AD_API_UNIT_CREATIVE_QUERY_LIST = 'pdd.ad.api.unit.creative.query.list';

export const PDD_AD_API_UNIT_CREATIVE_QUERY_LIST_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
  },
];

/**
 * 接口名称：查询创意列表
 * 接口标识：pdd.ad.api.unit.creative.query.list
 * 接口使用场景：查询创意列表
 **/
export interface PddAdApiUnitCreativeQueryListRequestInterface {
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
 * 接口名称：查询创意列表
 * 接口标识：pdd.ad.api.unit.creative.query.list
 * 接口使用场景：查询创意列表
 **/
export interface PddAdApiUnitCreativeQueryListResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitCreativeQueryListResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitCreativeQueryListResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitCreativeQueryListResponseResponseInterface {
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
   * @type: PddAdApiUnitCreativeQueryListResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddAdApiUnitCreativeQueryListResponseResultResponseInterface[];

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
export interface PddAdApiUnitCreativeQueryListResponseResultResponseInterface {
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
   * @description: 创意类型。2表示静态创意创意，3表示智能创意。
   * @type: number
   * @default:
   **/
  creativeType: number;

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
   * @description: 启用状态。1表示启用，2表示暂停。
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
   * @description: 创意图片高
   * @type: number
   * @default:
   **/
  imageHeight: number;

  /**
   * @description: 创意图片链接
   * @type: string
   * @default:
   **/
  imageUrl: string;

  /**
   * @description: 创意图片宽
   * @type: number
   * @default:
   **/
  imageWidth: number;

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
   * @description: 广告消耗，单位厘
   * @type: string | number
   * @default:
   **/
  spend: string | number;

  /**
   * @description: 创意单元状态。1表示推广中，2表示手动暂停，3表示已删除，4表示待发布，5表示已驳回。
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 状态描述，当状态是驳回时显示驳回原因
   * @type: string
   * @default:
   **/
  statusDesc: string;

  /**
   * @description: 创意标题
   * @type: string
   * @default:
   **/
  title: string;

  /**
   * @description: 转化成本
   * @type: string
   * @default:
   **/
  transactionCost: string;

  /**
   * @description: 创意单元Id
   * @type: string | number
   * @default:
   **/
  unitCreativeId: string | number;
}
