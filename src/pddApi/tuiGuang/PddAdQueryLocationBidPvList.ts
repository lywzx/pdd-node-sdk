export const PDD_AD_QUERY_LOCATION_BID_PV_LIST = 'pdd.ad.query.location.bid.pv.list';
export const PDD_AD_QUERY_LOCATION_BID_PV_LIST_RESPONSE_KEY = 'open_api_response';

/**
 * 接口名称：获取可选资源位信息（日均可竞流量）
 * 接口标识：pdd.ad.query.location.bid.pv.list
 * 接口使用场景：获取可选资源位信息（日均可竞流量）
 **/
export interface PddAdQueryLocationBidPvListRequestInterface {
  /**
   * @description: 推广类型  2-展示推广
   * @type: number
   * @default:
   **/
  scene_type: number;
}

/**
 * 接口名称：获取可选资源位信息（日均可竞流量）
 * 接口标识：pdd.ad.query.location.bid.pv.list
 * 接口使用场景：获取可选资源位信息（日均可竞流量）
 **/
export interface PddAdQueryLocationBidPvListResponseInterface {
  /**
   * @description: 开平出参
   * @type: PddAdQueryLocationBidPvListOpenApiResponseResponseInterface[]
   * @default:
   *
   **/
  open_api_response: PddAdQueryLocationBidPvListOpenApiResponseResponseInterface[];
}

/**
 * @description 开平出参
 * @default
 * @example
 **/
export interface PddAdQueryLocationBidPvListOpenApiResponseResponseInterface {
  /**
   * @description: 日均可竞流量
   * @type: string | number
   * @default:
   **/
  location_pv: string | number;

  /**
   * @description: 资源位类型描述
   * @type: string
   * @default:
   **/
  location_type_desc: string;

  /**
   * @description: 资源位类型。0表示基础流量包，1表示类目商品页，2表示商品详情页，3表示营销活动页，4表示店铺收藏页，5表示订单评价页，6表示优选活动页
   * @type: number
   * @default:
   **/
  location_type: number;
}
