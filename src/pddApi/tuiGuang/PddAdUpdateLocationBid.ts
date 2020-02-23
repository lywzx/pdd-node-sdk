export const PDD_AD_UPDATE_LOCATION_BID = 'pdd.ad.update.location.bid';

/**
 * 接口名称：推广单元修改资源位溢价（批量）
 * 接口标识：pdd.ad.update.location.bid
 * 接口使用场景：推广单元修改资源位溢价（批量）
 **/
export interface PddAdUpdateLocationBidRequestInterface {
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

  /**
   * @description:
   * @type: PddAdUpdateLocationBidLocationBidListRequestInterface[]
   * @default:
   *
   **/
  location_bid_list?: PddAdUpdateLocationBidLocationBidListRequestInterface[];
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdUpdateLocationBidLocationBidListRequestInterface {
  /**
   * @description: 溢价比例，例如2013，实际表示的是溢价20.13%，支持设置 1%-300%
   * @type: number
   * @default:
   **/
  bid_premium_rate?: number;

  /**
   * @description: 资源位id
   * @type: string
   * @default:
   **/
  location_bid_id?: string;
}

/**
 * 接口名称：推广单元修改资源位溢价（批量）
 * 接口标识：pdd.ad.update.location.bid
 * 接口使用场景：推广单元修改资源位溢价（批量）
 **/
export interface PddAdUpdateLocationBidResponseInterface {
  /**
   * @description: 开平返回
   * @type: PddAdUpdateLocationBidOpenApiResponseResponseInterface
   * @default:
   *
   **/
  open_api_response: PddAdUpdateLocationBidOpenApiResponseResponseInterface;
}

/**
 * @description 开平返回
 * @default
 * @example
 **/
export interface PddAdUpdateLocationBidOpenApiResponseResponseInterface {
  /**
   * @description: 执行标识 true为成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
