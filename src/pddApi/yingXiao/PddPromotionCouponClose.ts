export const PDD_PROMOTION_COUPON_CLOSE = 'pdd.promotion.coupon.close';
export const PDD_PROMOTION_COUPON_CLOSE_RESPONSE_KEY = 'promotion_coupon_batch_close_response';

/**
 * 接口名称：关闭批次接口
 * 接口标识：pdd.promotion.coupon.close
 * 接口使用场景：关闭批次接口
 **/
export interface PddPromotionCouponCloseRequestInterface {
  /**
   * @description: 券批次ID
   * @type: string | number
   * @default:
   **/
  batch_id?: string | number;
}

/**
 * 接口名称：关闭批次接口
 * 接口标识：pdd.promotion.coupon.close
 * 接口使用场景：关闭批次接口
 **/
export interface PddPromotionCouponCloseResponseInterface {
  /**
   * @description: 关闭批次接口响应对象
   * @type: PddPromotionCouponClosePromotionCouponBatchCloseResponseResponseInterface
   * @default:
   *
   **/
  promotion_coupon_batch_close_response: PddPromotionCouponClosePromotionCouponBatchCloseResponseResponseInterface;
}

/**
 * @description 关闭批次接口响应对象
 * @default
 * @example
 **/
export interface PddPromotionCouponClosePromotionCouponBatchCloseResponseResponseInterface {
  /**
   * @description: 是否关闭成功，true-成功，false-失败
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
