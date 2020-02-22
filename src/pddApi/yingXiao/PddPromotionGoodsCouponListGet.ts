export const PDD_PROMOTION_GOODS_COUPON_LIST_GET = 'PDD_PROMOTION_GOODS_COUPON_LIST_GET';

/**
 * 接口名称：商品优惠券批次列表查询
 * 接口标识：pdd.promotion.goods.coupon.list.get
 * 接口使用场景：商品优惠券批次列表查询
 **/
export interface PddPromotionGoodsCouponListGetRequestInterface {
  /**
   * @description: 页码，默认1
   * @type: number
   * @default:
   **/
  page: number;

  /**
   * @description: 每页数量，默认100
   * @type: number
   * @default:
   **/
  page_size: number;

  /**
   * @description: 商品ID
   * @type: string
   * @default:
   **/
  goods_id: string;

  /**
   * @description: 查询范围	0 全部，1 多多进宝券，2 无门槛商品券；默认1
   * @type: number
   * @default:
   **/
  query_range: number;

  /**
   * @description: 批次状态	1 领取中，2 已领完，3 已结束，4 已暂停
   * @type: number
   * @default:
   **/
  batch_status: number;

  /**
   * @description: 排序	1 创建时间正序，2 创建时间倒序，3 开始时间正序，4 开始时间倒序，5 初始数量正序， 6 初始数量倒序，7 领取数量正序，8 领取数量倒序；默认2
   * @type: number
   * @default:
   **/
  sort_by: number;
}

/**
 * 接口名称：商品优惠券批次列表查询
 * 接口标识：pdd.promotion.goods.coupon.list.get
 * 接口使用场景：商品优惠券批次列表查询
 **/
export interface PddPromotionGoodsCouponListGetResponseInterface {
  /**
   * @description: 返回商品优惠券批次表
   * @type: PddPromotionGoodsCouponListGetGoodsCouponBatchListResponseResponseInterface
   * @default:
   *
   **/
  goods_coupon_batch_list_response: PddPromotionGoodsCouponListGetGoodsCouponBatchListResponseResponseInterface;
}

/**
 * @description 返回商品优惠券批次表
 * @default
 * @example
 **/
export interface PddPromotionGoodsCouponListGetGoodsCouponBatchListResponseResponseInterface {
  /**
   * @description: 返回商品优惠券对象
   * @type: PddPromotionGoodsCouponListGetGoodsCouponBatchListResponseCouponBatchListResponseInterface[]
   * @default:
   *
   **/
  coupon_batch_list: PddPromotionGoodsCouponListGetGoodsCouponBatchListResponseCouponBatchListResponseInterface[];

  /**
   * @description: 返回的优惠券总数
   * @type: number
   * @default:
   **/
  total_size: number;
}

/**
 * @description 返回商品优惠券对象
 * @default
 * @example
 **/
export interface PddPromotionGoodsCouponListGetGoodsCouponBatchListResponseCouponBatchListResponseInterface {
  /**
   * @description: 批次ID
   * @type: string
   * @default:
   **/
  id: string;

  /**
   * @description: 批次描述
   * @type: string
   * @default:
   **/
  batch_desc: string;

  /**
   * @description: 折扣参数，为请求中传入的discountAmount，表示折扣金额，单位: 分
   * @type: string
   * @default:
   **/
  discount_param: string;

  /**
   * @description: 最小可用订单金额
   * @type: string
   * @default:
   **/
  min_order_amount: string;

  /**
   * @description: 初始数量
   * @type: string
   * @default:
   **/
  init_quantity: string;

  /**
   * @description: 剩余数量
   * @type: string
   * @default:
   **/
  remain_quantity: string;

  /**
   * @description: 已使用数量
   * @type: string
   * @default:
   **/
  used_quantity: string;

  /**
   * @description: 用户限领张数，-1 代表不限制
   * @type: string
   * @default:
   **/
  user_limit: string;

  /**
   * @description: 批次开始时间
   * @type: string
   * @default:
   **/
  batch_start_time: string;

  /**
   * @description: 批次结束时间
   * @type: string
   * @default:
   **/
  batch_end_time: string;

  /**
   * @description: 券来源类型，45 店铺多多进宝商品券，54 无门槛商品券，87 店铺多多进宝大淘客定向商品券，88 店铺多多果园商品券
   * @type: number
   * @default:
   **/
  source_type: number;

  /**
   * @description: 商品ID
   * @type: string
   * @default:
   **/
  goods_id: string;

  /**
   * @description: 商品名
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 图片URL
   * @type: string
   * @default:
   **/
  image_url: string;

  /**
   * @description: 批次状态，1 领取中，2 已领完，3 已结束，4 已暂停
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 批次创建时间
   * @type: string
   * @default:
   **/
  created_at: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_PROMOTION_GOODS_COUPON_LIST_GET]: {
    requestInterface: PddPromotionGoodsCouponListGetRequestInterface;
    responseInterface: PddPromotionGoodsCouponListGetResponseInterface;
  };
}
