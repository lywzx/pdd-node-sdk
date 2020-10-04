export const PDD_PROMOTION_MERCHANT_COUPON_LIST_GET = 'pdd.promotion.merchant.coupon.list.get';
export const PDD_PROMOTION_MERCHANT_COUPON_LIST_GET_RESPONSE_KEY = 'merchant_coupon_batch_list_response';
export const PDD_PROMOTION_MERCHANT_COUPON_LIST_GET_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 60,
    times: 3000,
  },
];

/**
 * 接口名称：店铺优惠券批次列表接口
 * 接口标识：pdd.promotion.merchant.coupon.list.get
 * 接口使用场景：店铺优惠券批次列表接口
 **/
export interface PddPromotionMerchantCouponListGetRequestInterface {
  /**
   * @description: 页码，默认1
   * @type: number
   * @default:
   **/
  page?: number;

  /**
   * @description: 每页数量，默认100
   * @type: number
   * @default:
   **/
  page_size?: number;

  /**
   * @description: 批次开始时间（范围开始）
   * @type: string | number
   * @default:
   **/
  batch_start_time_from?: string | number;

  /**
   * @description: 批次开始时间（范围结束）
   * @type: string | number
   * @default:
   **/
  batch_start_time_to?: string | number;

  /**
   * @description: 批次状态	1 领取中，2 已领完，3 已结束
   * @type: number
   * @default:
   **/
  batch_status?: number;

  /**
   * @description: 排序	1 创建时间正序，2 创建时间倒序，3 开始时间正序，4 开始时间倒序，5 初始数量正序， 6 初始数量倒序，7 领取数量正序，8 领取数量倒序；默认2
   * @type: number
   * @default:
   **/
  sort_by?: number;
}

/**
 * 接口名称：店铺优惠券批次列表接口
 * 接口标识：pdd.promotion.merchant.coupon.list.get
 * 接口使用场景：店铺优惠券批次列表接口
 **/
export interface PddPromotionMerchantCouponListGetResponseInterface {
  /**
   * @description: 返回店铺优惠券批次列表
   * @type: PddPromotionMerchantCouponListGetMerchantCouponBatchListResponseResponseInterface
   * @default:
   *
   **/
  merchant_coupon_batch_list_response: PddPromotionMerchantCouponListGetMerchantCouponBatchListResponseResponseInterface;
}

/**
 * @description 返回店铺优惠券批次列表
 * @default
 * @example
 **/
export interface PddPromotionMerchantCouponListGetMerchantCouponBatchListResponseResponseInterface {
  /**
   * @description: 返回店铺优惠券批次数量
   * @type: number
   * @default:
   **/
  total_size: number;

  /**
   * @description: 返回店铺优惠券批次对象
   * @type: PddPromotionMerchantCouponListGetMerchantCouponBatchListResponseCouponBatchListResponseInterface[]
   * @default:
   *
   **/
  coupon_batch_list: PddPromotionMerchantCouponListGetMerchantCouponBatchListResponseCouponBatchListResponseInterface[];
}

/**
 * @description 返回店铺优惠券批次对象
 * @default
 * @example
 **/
export interface PddPromotionMerchantCouponListGetMerchantCouponBatchListResponseCouponBatchListResponseInterface {
  /**
   * @description: 批次ID
   * @type: string | number
   * @default:
   **/
  id: string | number;

  /**
   * @description: 批次名
   * @type: string
   * @default:
   **/
  batch_name: string;

  /**
   * @description: 批次描述
   * @type: string
   * @default:
   **/
  batch_desc: string;

  /**
   * @description: 折扣类型，1 代表满减券，2 代表折扣券
   * @type: number
   * @default:
   **/
  discount_type: number;

  /**
   * @description: 折扣参数，为请求中传入的discount_amount，表示折扣金额，单位: 分
   * @type: string | number
   * @default:
   **/
  discount_param: string | number;

  /**
   * @description: 初始数量
   * @type: string | number
   * @default:
   **/
  init_quantity: string | number;

  /**
   * @description: 剩余数量
   * @type: string | number
   * @default:
   **/
  remain_quantity: string | number;

  /**
   * @description: 已使用数量
   * @type: string | number
   * @default:
   **/
  used_quantity: string | number;

  /**
   * @description: 用户限领张数，-1 代表不限制
   * @type: string | number
   * @default:
   **/
  user_limit: string | number;

  /**
   * @description: 最大折扣金额
   * @type: string | number
   * @default:
   **/
  max_discount_amount: string | number;

  /**
   * @description: 券有效时长
   * @type: string | number
   * @default:
   **/
  duration: string | number;

  /**
   * @description: 券有效期时长的单位，0 代表天，2 代表小时
   * @type: number
   * @default:
   **/
  period_type: number;

  /**
   * @description: 批次开始时间
   * @type: string | number
   * @default:
   **/
  batch_start_time: string | number;

  /**
   * @description: 批次结束时间
   * @type: string | number
   * @default:
   **/
  batch_end_time: string | number;

  /**
   * @description: 券来源类型，16 店铺直接领券，41 店铺精选评价优惠券，66 商家短信营销优惠券
   * @type: number
   * @default:
   **/
  source_type: number;

  /**
   * @description: 券类型，固定为8，代表商家券
   * @type: number
   * @default:
   **/
  type: number;

  /**
   * @description: 批次状态，1 领取中，2 已领完，3 已结束
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 用券条件
   * @type: string
   * @default:
   **/
  rules: string;

  /**
   * @description: 券展示类型，固定为8，代表商家券
   * @type: number
   * @default:
   **/
  display_type: number;

  /**
   * @description: 批次创建时间
   * @type: string | number
   * @default:
   **/
  created_at: string | number;
}
