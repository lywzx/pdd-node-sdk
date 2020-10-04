export const PDD_PROMOTION_COUPON_QUANTITY_ADD = 'pdd.promotion.coupon.quantity.add';
export const PDD_PROMOTION_COUPON_QUANTITY_ADD_RESPONSE_KEY = 'coupon_quantity_add_response';
export const PDD_PROMOTION_COUPON_QUANTITY_ADD_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 60,
    times: 3000,
  },
];

/**
 * 接口名称：增加优惠券发行数量接口
 * 接口标识：pdd.promotion.coupon.quantity.add
 * 接口使用场景：增加优惠券发行数量接口
 **/
export interface PddPromotionCouponQuantityAddRequestInterface {
  /**
   * @description: 券批次ID
   * @type: string | number
   * @default:
   **/
  batch_id: string | number;

  /**
   * @description: 要增加的数量
   * @type: string | number
   * @default:
   **/
  add_quantity: string | number;
}

/**
 * 接口名称：增加优惠券发行数量接口
 * 接口标识：pdd.promotion.coupon.quantity.add
 * 接口使用场景：增加优惠券发行数量接口
 **/
export interface PddPromotionCouponQuantityAddResponseInterface {
  /**
   * @description: 增加优惠券发行数量响应对象
   * @type: PddPromotionCouponQuantityAddCouponQuantityAddResponseResponseInterface
   * @default:
   *
   **/
  coupon_quantity_add_response: PddPromotionCouponQuantityAddCouponQuantityAddResponseResponseInterface;
}

/**
 * @description 增加优惠券发行数量响应对象
 * @default
 * @example
 **/
export interface PddPromotionCouponQuantityAddCouponQuantityAddResponseResponseInterface {
  /**
   * @description: 是否增加成功，true-成功，false-失败
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
