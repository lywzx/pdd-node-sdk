export const PDD_AD_UPDATE_BID = 'pdd.ad.update.bid';

/**
 * 接口名称：【定向】推广单元修改通投出价、定向溢价
 * 接口标识：pdd.ad.update.bid
 * 接口使用场景：【定向】推广单元修改通投出价、定向溢价
 **/
export interface PddAdUpdateBidRequestInterface {
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
   * @description: 定向列表
   * @type: PddAdUpdateBidBidListRequestInterface
   * @default:
   *
   **/
  bid_list?: PddAdUpdateBidBidListRequestInterface;
}

/**
 * @description 定向列表
 * @default
 * @example
 **/
export interface PddAdUpdateBidBidListRequestInterface {
  /**
   * @description: 非通投必填
   * 溢价比例，存储的是整数，比如2013，实际表示的是溢价20.13%
   *
   * 溢价比例最低值为10%，最高为300%
   * @type: number
   * @default:
   **/
  bid_premium_rate: number;

  /**
   * @description: 通投必填	溢价绝对值，单位厘，通投时，使用这个值，其他情况使用bid_premium_rate
   * @type: string
   * @default:
   **/
  bid: string;

  /**
   * @description: 定向ID
   * @type: string
   * @default:
   **/
  bid_id?: string;
}

/**
 * 接口名称：【定向】推广单元修改通投出价、定向溢价
 * 接口标识：pdd.ad.update.bid
 * 接口使用场景：【定向】推广单元修改通投出价、定向溢价
 **/
export interface PddAdUpdateBidResponseInterface {
  /**
   * @description: 返回结果
   * @type: PddAdUpdateBidOpenApiResponseResponseInterface
   * @default:
   *
   **/
  open_api_response: PddAdUpdateBidOpenApiResponseResponseInterface;
}

/**
 * @description 返回结果
 * @default
 * @example
 **/
export interface PddAdUpdateBidOpenApiResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
