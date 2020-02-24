export const PDD_AD_CREATE_UNIT_BID = 'pdd.ad.create.unit.bid';
export const PDD_AD_CREATE_UNIT_BID_RESPONSE_KEY = 'open_api_response';

/**
 * 接口名称：推广单元增加定向（“定向”包括兴趣点）
 * 接口标识：pdd.ad.create.unit.bid
 * 接口使用场景：新建定向，bids列表中必须有通投（全体人群）出价信息
 **/
export interface PddAdCreateUnitBidRequestInterface {
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
   * @description: 定向人群列表
   * @type: PddAdCreateUnitBidBidsRequestInterface[]
   * @default:
   *
   **/
  bids?: PddAdCreateUnitBidBidsRequestInterface[];
}

/**
 * @description 定向人群列表
 * @default
 * @example
 **/
export interface PddAdCreateUnitBidBidsRequestInterface {
  /**
   * @description: 非通投时填
   * 溢价比例，存储的是整数，比如2013，实际表示的是溢价20.13%
   *
   * 溢价比例最低值为10%，最高为300%
   * @type: number
   * @default:
   **/
  bid_premium_rate?: number;

  /**
   * @description: 通投时填 , 溢价绝对值，单位厘
   * @type: string | number
   * @default:
   **/
  bid: string | number;

  /**
   * @description: 兴趣点ID，targetType不为6/7时，传 0
   * @type: string | number
   * @default:
   **/
  sub_level_target_id?: string | number;

  /**
   * @description: 定向类型。1表示通投，2表示访客重定向，3表示相似商品定向，4表示叶子类目定向，5表示相似店铺定向，6表示兴趣点定向，7表示人群包定向，8表示地域定向人群，9表示商品高潜人群，10表示高品质商品偏好人群，11表示大促偏好人群，12表示爱分享人群
   * @type: number
   * @default:
   **/
  target_type?: number;
}

/**
 * 接口名称：推广单元增加定向（“定向”包括兴趣点）
 * 接口标识：pdd.ad.create.unit.bid
 * 接口使用场景：新建定向，bids列表中必须有通投（全体人群）出价信息
 **/
export interface PddAdCreateUnitBidResponseInterface {
  /**
   * @description: 开平返回
   * @type: PddAdCreateUnitBidOpenApiResponseResponseInterface
   * @default:
   *
   **/
  open_api_response: PddAdCreateUnitBidOpenApiResponseResponseInterface;
}

/**
 * @description 开平返回
 * @default
 * @example
 **/
export interface PddAdCreateUnitBidOpenApiResponseResponseInterface {
  /**
   * @description: 执行标识 true为成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
