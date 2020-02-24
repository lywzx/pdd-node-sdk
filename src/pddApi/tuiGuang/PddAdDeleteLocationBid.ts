export const PDD_AD_DELETE_LOCATION_BID = 'pdd.ad.delete.location.bid';
export const PDD_AD_DELETE_LOCATION_BID_RESPONSE_KEY = 'open_api_response';

/**
 * 接口名称：推广单元取消资源位
 * 接口标识：pdd.ad.delete.location.bid
 * 接口使用场景：推广单元取消资源位
 **/
export interface PddAdDeleteLocationBidRequestInterface {
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
   * @description: 资源位ID, List<Long>的json string
   * @type: string
   * @default:
   **/
  location_bid_ids?: string;
}

/**
 * 接口名称：推广单元取消资源位
 * 接口标识：pdd.ad.delete.location.bid
 * 接口使用场景：推广单元取消资源位
 **/
export interface PddAdDeleteLocationBidResponseInterface {
  /**
   * @description: 开平返回
   * @type: PddAdDeleteLocationBidOpenApiResponseResponseInterface
   * @default:
   *
   **/
  open_api_response: PddAdDeleteLocationBidOpenApiResponseResponseInterface;
}

/**
 * @description 开平返回
 * @default
 * @example
 **/
export interface PddAdDeleteLocationBidOpenApiResponseResponseInterface {
  /**
   * @description: 执行标识， true 成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
