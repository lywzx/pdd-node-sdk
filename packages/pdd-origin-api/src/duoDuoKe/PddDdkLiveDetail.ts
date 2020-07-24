export const PDD_DDK_LIVE_DETAIL = 'pdd.ddk.live.detail';
export const PDD_DDK_LIVE_DETAIL_RESPONSE_KEY = 'live_detail_get_response';

/**
 * 接口名称：查询直播间详情
 * 接口标识：pdd.ddk.live.detail
 * 接口使用场景：在获得直播间ID的情况下，查询该直播间的详情数据
 **/
export interface PddDdkLiveDetailRequestInterface {
  /**
   * @description: 分页数
   * @type: number
   * @default:
   **/
  goods_page?: number;

  /**
   * @description: 每页商品数量
   * @type: number
   * @default:
   **/
  goods_page_size?: number;

  /**
   * @description: 是否返回商品信息，默认true
   * @type: boolean
   * @default:
   **/
  need_goods_info?: boolean;

  /**
   * @description: 直播间id
   * @type: string
   * @default:
   **/
  room_id: string;
}

/**
 * 接口名称：查询直播间详情
 * 接口标识：pdd.ddk.live.detail
 * 接口使用场景：在获得直播间ID的情况下，查询该直播间的详情数据
 **/
export interface PddDdkLiveDetailResponseInterface {
  /**
   * @description: response
   * @type: PddDdkLiveDetailLiveDetailGetResponseResponseInterface
   * @default:
   *
   **/
  live_detail_get_response: PddDdkLiveDetailLiveDetailGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddDdkLiveDetailLiveDetailGetResponseResponseInterface {
  /**
   * @description: 直播间详情
   * @type: PddDdkLiveDetailLiveDetailGetResponseRoomInfoResponseInterface
   * @default:
   *
   **/
  room_info: PddDdkLiveDetailLiveDetailGetResponseRoomInfoResponseInterface;
}

/**
 * @description 直播间详情
 * @default
 * @example
 **/
export interface PddDdkLiveDetailLiveDetailGetResponseRoomInfoResponseInterface {
  /**
   * @description: 商品列表
   * @type: PddDdkLiveDetailLiveDetailGetResponseRoomInfoGoodsInfoListResponseInterface[]
   * @default:
   *
   **/
  goods_info_list: PddDdkLiveDetailLiveDetailGetResponseRoomInfoGoodsInfoListResponseInterface[];

  /**
   * @description: 商品总数
   * @type: number
   * @default:
   **/
  goods_total: number;

  /**
   * @description: 直播间信息
   * @type: PddDdkLiveDetailLiveDetailGetResponseRoomInfoLiveShowInfoResponseInterface
   * @default:
   *
   **/
  live_show_info: PddDdkLiveDetailLiveDetailGetResponseRoomInfoLiveShowInfoResponseInterface;
}

/**
 * @description 商品列表
 * @default
 * @example
 **/
export interface PddDdkLiveDetailLiveDetailGetResponseRoomInfoGoodsInfoListResponseInterface {
  /**
   * @description: 券面额
   * @type: string | number
   * @default:
   **/
  coupon_discount: string | number;

  /**
   * @description: 券失效时间
   * @type: string | number
   * @default:
   **/
  coupon_end_time: string | number;

  /**
   * @description: 券门槛价格
   * @type: string | number
   * @default:
   **/
  coupon_min_order_amount: string | number;

  /**
   * @description: 券剩余数量
   * @type: string | number
   * @default:
   **/
  coupon_remain_quantity: string | number;

  /**
   * @description: 券生效时间
   * @type: string | number
   * @default:
   **/
  coupon_start_time: string | number;

  /**
   * @description: 优惠券总数量
   * @type: string | number
   * @default:
   **/
  coupon_total_quantity: string | number;

  /**
   * @description: 商品Id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 商品名称
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 商品缩略图
   * @type: string
   * @default:
   **/
  goods_thumbnail_url: string;

  /**
   * @description: 最小拼团价格
   * @type: string | number
   * @default:
   **/
  min_group_price: string | number;

  /**
   * @description: 商品标签 ID
   * @type: string | number
   * @default:
   **/
  opt_id: string | number;

  /**
   * @description: 佣金比例
   * @type: string | number
   * @default:
   **/
  promotion_rate: string | number;

  /**
   * @description: 招商团长ID
   * @type: string | number
   * @default:
   **/
  zs_duo_id: string | number;
}

/**
 * @description 直播间信息
 * @default
 * @example
 **/
export interface PddDdkLiveDetailLiveDetailGetResponseRoomInfoLiveShowInfoResponseInterface {
  /**
   * @description: 直播间观看人次
   * @type: number
   * @default:
   **/
  audience_count: number;

  /**
   * @description: 直播封面
   * @type: string
   * @default:
   **/
  live_image: string;

  /**
   * @description: 直播间标题
   * @type: string
   * @default:
   **/
  live_title: string;

  /**
   * @description: 直播间信息
   * @type: string
   * @default:
   **/
  room_id: string;

  /**
   * @description: 当前直播状态；0-未开始，1-直播中
   * @type: number
   * @default:
   **/
  status: number;
}
