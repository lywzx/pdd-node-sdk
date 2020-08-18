export const PDD_DDK_LIVE_LIST = 'pdd.ddk.live.list';
export const PDD_DDK_LIVE_LIST_RESPONSE_KEY = 'live_list_get_response';

/**
 * 接口名称：查询直播间列表
 * 接口标识：pdd.ddk.live.list
 * 接口使用场景：查询账号下绑定的直播间信息
 **/
export interface PddDdkLiveListRequestInterface {
  /**
   * @description: 商品数量，默认3，最多5个
   * @type: number
   * @default:
   **/
  goods_page_size?: number;

  /**
   * @description: 是否返回商品信息，默认false
   * @type: boolean
   * @default:
   **/
  need_goods_info?: boolean;

  /**
   * @description: 分页数
   * @type: number
   * @default:
   **/
  page?: number;

  /**
   * @description: 每页数量
   * @type: number
   * @default:
   **/
  page_size?: number;
}

/**
 * 接口名称：查询直播间列表
 * 接口标识：pdd.ddk.live.list
 * 接口使用场景：查询账号下绑定的直播间信息
 **/
export interface PddDdkLiveListResponseInterface {
  /**
   * @description: response
   * @type: PddDdkLiveListLiveListGetResponseResponseInterface
   * @default:
   *
   **/
  live_list_get_response: PddDdkLiveListLiveListGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddDdkLiveListLiveListGetResponseResponseInterface {
  /**
   * @description: 直播间列表
   * @type: PddDdkLiveListLiveListGetResponseRoomInfoListResponseInterface[]
   * @default:
   *
   **/
  room_info_list: PddDdkLiveListLiveListGetResponseRoomInfoListResponseInterface[];

  /**
   * @description: 直播间数量
   * @type: number
   * @default:
   **/
  total: number;
}

/**
 * @description 直播间列表
 * @default
 * @example
 **/
export interface PddDdkLiveListLiveListGetResponseRoomInfoListResponseInterface {
  /**
   * @description: 商品列表
   * @type: PddDdkLiveListLiveListGetResponseRoomInfoListGoodsInfoListResponseInterface[]
   * @default:
   *
   **/
  goods_info_list: PddDdkLiveListLiveListGetResponseRoomInfoListGoodsInfoListResponseInterface[];

  /**
   * @description: 商品总数
   * @type: number
   * @default:
   **/
  goods_total: number;

  /**
   * @description: 直播间信息
   * @type: PddDdkLiveListLiveListGetResponseRoomInfoListLiveShowInfoResponseInterface
   * @default:
   *
   **/
  live_show_info: PddDdkLiveListLiveListGetResponseRoomInfoListLiveShowInfoResponseInterface;
}

/**
 * @description 商品列表
 * @default
 * @example
 **/
export interface PddDdkLiveListLiveListGetResponseRoomInfoListGoodsInfoListResponseInterface {
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

  /**
   * @description: 商品主图
   * @type: string
   * @default:
   **/
  goods_image_url: string;
}

/**
 * @description 直播间信息
 * @default
 * @example
 **/
export interface PddDdkLiveListLiveListGetResponseRoomInfoListLiveShowInfoResponseInterface {
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
