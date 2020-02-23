export const PDD_PROMOTION_HOME_COUPON_CREATE = 'pdd.promotion.home.coupon.create';

/**
 * 接口名称：创建店铺首页优惠券批次接口
 * 接口标识：pdd.promotion.home.coupon.create
 * 接口使用场景：创建店铺首页优惠券批次接口
 **/
export interface PddPromotionHomeCouponCreateRequestInterface {
  /**
   * @description: 描述
   * @type: string
   * @default:
   **/
  batch_desc?: string;

  /**
   * @description: 开始时间，指到格林威治时间 1970 年 01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)的总毫秒数
   * @type: string
   * @default:
   **/
  batch_start_time?: string;

  /**
   * @description: 结束时间，指到格林威治时间 1970 年 01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)的总毫秒数
   * @type: string
   * @default:
   **/
  batch_end_time?: string;

  /**
   * @description: 优惠金额	单位: 分
   * @type: string
   * @default:
   **/
  discount?: string;

  /**
   * @description: 使用优惠的订单最小金额	单位: 分
   * @type: string
   * @default:
   **/
  min_order_amount?: string;

  /**
   * @description: 可领取数量
   * @type: string
   * @default:
   **/
  init_quantity?: string;

  /**
   * @description: 每个用户限领张数
   * @type: string
   * @default:
   **/
  user_limit?: string;
}

/**
 * 接口名称：创建店铺首页优惠券批次接口
 * 接口标识：pdd.promotion.home.coupon.create
 * 接口使用场景：创建店铺首页优惠券批次接口
 **/
export interface PddPromotionHomeCouponCreateResponseInterface {
  /**
   * @description: 创建店铺首页优惠券批次对象
   * @type: PddPromotionHomeCouponCreateHomeCouponBatchCreateResponseResponseInterface
   * @default:
   *
   **/
  home_coupon_batch_create_response: PddPromotionHomeCouponCreateHomeCouponBatchCreateResponseResponseInterface;
}

/**
 * @description 创建店铺首页优惠券批次对象
 * @default
 * @example
 **/
export interface PddPromotionHomeCouponCreateHomeCouponBatchCreateResponseResponseInterface {
  /**
   * @description: 批次id
   * @type: string
   * @default:
   **/
  batch_id: string;
}
