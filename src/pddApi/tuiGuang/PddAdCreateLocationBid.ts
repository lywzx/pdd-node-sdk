export const PDD_AD_CREATE_LOCATION_BID = 'pdd.ad.create.location.bid';
export const PDD_AD_CREATE_LOCATION_BID_RESPONSE_KEY = 'open_api_response';

/**
 * 接口名称：推广单元新增资源位信息（批量）
 * 接口标识：pdd.ad.create.location.bid
 * 接口使用场景：推广单元新增资源位信息（批量）
 **/
export interface PddAdCreateLocationBidRequestInterface {
  /**
   * @description: 推广类型  2-展示推广
   * @type: number
   * @default:
   **/
  scene_type?: number;

  /**
   * @description: 单元ID
   * @type: string | number
   * @default:
   **/
  unit_id?: string | number;

  /**
   * @description: location_bids
   * @type: PddAdCreateLocationBidLocationBidsRequestInterface[]
   * @default:
   *
   **/
  location_bids?: PddAdCreateLocationBidLocationBidsRequestInterface[];
}

/**
 * @description location_bids
 * @default
 * @example
 **/
export interface PddAdCreateLocationBidLocationBidsRequestInterface {
  /**
   * @description: 溢价比例，存储的是整数，100 表示 1%，支持设置 1%-300%
   * @type: number
   * @default:
   **/
  bid_premium_rate?: number;

  /**
   * @description: 资源位类型。0表示基础流量包，1表示类目商品页，2表示商品详情页，3表示营销活动页，4表示店铺关注页，5表示订单评价页，6表示优选活动页
   * @type: number
   * @default:
   **/
  location_type?: number;
}

/**
 * 接口名称：推广单元新增资源位信息（批量）
 * 接口标识：pdd.ad.create.location.bid
 * 接口使用场景：推广单元新增资源位信息（批量）
 **/
export interface PddAdCreateLocationBidResponseInterface {
  /**
   * @description: 开平返回
   * @type: PddAdCreateLocationBidOpenApiResponseResponseInterface
   * @default:
   *
   **/
  open_api_response: PddAdCreateLocationBidOpenApiResponseResponseInterface;
}

/**
 * @description 开平返回
 * @default
 * @example
 **/
export interface PddAdCreateLocationBidOpenApiResponseResponseInterface {
  /**
   * @description: 执行标识 true为成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
