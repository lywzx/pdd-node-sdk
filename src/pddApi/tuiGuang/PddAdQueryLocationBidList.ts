export const PDD_AD_QUERY_LOCATION_BID_LIST = 'PDD_AD_QUERY_LOCATION_BID_LIST';

/**
 * 接口名称：根据推广单元id获取现有资源位列表
 * 接口标识：pdd.ad.query.location.bid.list
 * 接口使用场景：根据推广单元id获取现有资源位列表
 **/

export interface PddAdQueryLocationBidListRequestInterface {
  /**
   * @description: 推广类型  2-展示推广
   * @type: number
   * @default:
   **/
  scene_type?: number;

  /**
   * @description: 单元id
   * @type: string
   * @default:
   **/
  unit_id?: string;
}

/**
 * 接口名称：根据推广单元id获取现有资源位列表
 * 接口标识：pdd.ad.query.location.bid.list
 * 接口使用场景：根据推广单元id获取现有资源位列表
 **/

export interface PddAdQueryLocationBidListResponseInterface {
  /**
   * @description: 开平返回
   * @type: PddAdQueryLocationBidListOpenApiResponseResponseInterface[]
   * @default:
   *
   **/
  open_api_response: PddAdQueryLocationBidListOpenApiResponseResponseInterface[];
}

/**
 * @description 开平返回
 * @default
 * @example
 **/

export interface PddAdQueryLocationBidListOpenApiResponseResponseInterface {
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
   * @description: 溢价比例
   * @type: number
   * @default:
   **/
  bid_premium_rate: number;

  /**
   * @description: 资源位类型。0表示基础流量包，1表示类目商品页，2表示商品详情页，3表示营销活动页，4表示店铺收藏页，5表示订单评价页，6表示优选活动页
   * @type: number
   * @default:
   **/
  location_type: number;

  /**
   * @description: 资源位ID（基础流量包没有ID）
   * @type: string
   * @default:
   **/
  location_bid_id: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_AD_QUERY_LOCATION_BID_LIST]: {
    requestInterface: PddAdQueryLocationBidListRequestInterface;
    responseInterface: PddAdQueryLocationBidListResponseInterface;
  };
}
