export const PDD_AD_QUERY_BID_LIST = 'pdd.ad.query.bid.list';

/**
 * 接口名称：根据推广单元id获取现有定向
 * 接口标识：pdd.ad.query.bid.list
 * 接口使用场景：根据推广单元id获取现有定向
 * 定向列表：定向id、定向信息、出价/溢价
 **/
export interface PddAdQueryBidListRequestInterface {
  /**
   * @description: 推广类型  2-展示推广
   * @type: number
   * @default:
   **/
  scene_type?: number;

  /**
   * @description: 单元ID
   * @type: string
   * @default:
   **/
  unit_id?: string;
}

/**
 * 接口名称：根据推广单元id获取现有定向
 * 接口标识：pdd.ad.query.bid.list
 * 接口使用场景：根据推广单元id获取现有定向
 * 定向列表：定向id、定向信息、出价/溢价
 **/
export interface PddAdQueryBidListResponseInterface {
  /**
   * @description: 开平返回
   * @type: PddAdQueryBidListOpenApiResponseResponseInterface[]
   * @default:
   *
   **/
  open_api_response: PddAdQueryBidListOpenApiResponseResponseInterface[];
}

/**
 * @description 开平返回
 * @default
 * @example
 **/
export interface PddAdQueryBidListOpenApiResponseResponseInterface {
  /**
   * @description: 店铺收藏数
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
   * @description: 溢价比例（非通投时使用）
   * @type: number
   * @default:
   **/
  bid_premium_rate: number;

  /**
   * @description: 溢价绝对值，单位厘（targetType=1，通投时使用这个值）
   * @type: string
   * @default:
   **/
  bid: string;

  /**
   * @description: targetType值为6时表示兴趣点名称，targetType值为7时表示人群包名称，targetType值为8时表示地域名称
   * @type: string
   * @default:
   **/
  sub_level_target_name: string;

  /**
   * @description: targetType值为6时表示兴趣点ID，targetType值为7时表示人群包ID，targetType值为8时表示地域ID
   * @type: string
   * @default:
   **/
  sub_level_target_id: string;

  /**
   * @description: 定向类型。1表示通投，2表示访客重定向，3表示相似商品定向，4表示叶子类目定向，5表示相似店铺定向，6表示兴趣点定向，7表示人群包定向，8表示地域定向人群，9表示商品高潜人群，10表示高品质商品偏好人群，11表示大促偏好人群，12表示爱分享人群
   * @type: number
   * @default:
   **/
  target_type: number;

  /**
   * @description: 定向ID
   * @type: string
   * @default:
   **/
  bid_id: string;
}
