export const PDD_AD_BID_QUERY_PROFILE = 'PDD_AD_BID_QUERY_PROFILE';

/**
 * 接口名称：【定向】用户数量预估，兴趣点查询等信息
 * 接口标识：pdd.ad.bid.query.profile
 * 接口使用场景：用户数量预估，兴趣点查询等信息 （单元创建定向时，可先查询数量预估及兴趣点信息）
 **/
export interface PddAdBidQueryProfileRequestInterface {
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
 * 接口名称：【定向】用户数量预估，兴趣点查询等信息
 * 接口标识：pdd.ad.bid.query.profile
 * 接口使用场景：用户数量预估，兴趣点查询等信息 （单元创建定向时，可先查询数量预估及兴趣点信息）
 **/
export interface PddAdBidQueryProfileResponseInterface {
  /**
   * @description: 开平返回
   * @type: PddAdBidQueryProfileOpenApiResponseResponseInterface[]
   * @default:
   *
   **/
  open_api_response: PddAdBidQueryProfileOpenApiResponseResponseInterface[];
}

/**
 * @description 开平返回
 * @default
 * @example
 **/
export interface PddAdBidQueryProfileOpenApiResponseResponseInterface {
  /**
   * @description: 兴趣点信息
   * @type: PddAdBidQueryProfileOpenApiResponseFeaturesResponseInterface[]
   * @default:
   *
   **/
  features: PddAdBidQueryProfileOpenApiResponseFeaturesResponseInterface[];

  /**
   * @description: 定向类型。1表示通投，2表示访客重定向，3表示相似商品定向，4表示叶子类目定向，5表示相似店铺定向，6表示兴趣点定向，7表示人群包定向，8表示地域定向人群，9表示商品高潜人群，10表示高品质商品偏好人群，11表示大促偏好人群，12表示爱分享人群
   * @type: number
   * @default:
   **/
  target_type: number;
}

/**
 * @description 兴趣点信息
 * @default
 * @example
 **/
export interface PddAdBidQueryProfileOpenApiResponseFeaturesResponseInterface {
  /**
   * @description: 兴趣点名称
   * @type: string
   * @default:
   **/
  sub_level_target_name: string;

  /**
   * @description: 兴趣点ID
   * @type: string
   * @default:
   **/
  sub_level_target_id: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_AD_BID_QUERY_PROFILE]: {
    requestInterface: PddAdBidQueryProfileRequestInterface;
    responseInterface: PddAdBidQueryProfileResponseInterface;
  };
}
