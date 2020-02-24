export const PDD_PROMOTION_GOODS_COUPON_CREATE = 'pdd.promotion.goods.coupon.create';
export const PDD_PROMOTION_GOODS_COUPON_CREATE_RESPONSE_KEY = 'goods_coupon_batch_create_response';

/**
 * 接口名称：创建无门槛商品劵批次接口
 * 接口标识：pdd.promotion.goods.coupon.create
 * 接口使用场景：创建无门槛商品劵批次接口
 **/
export interface PddPromotionGoodsCouponCreateRequestInterface {
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

  /**
   * @description: 商品ID
   * @type: string
   * @default:
   **/
  goods_id?: string;
}

/**
 * 接口名称：创建无门槛商品劵批次接口
 * 接口标识：pdd.promotion.goods.coupon.create
 * 接口使用场景：创建无门槛商品劵批次接口
 **/
export interface PddPromotionGoodsCouponCreateResponseInterface {
  /**
   * @description: 创建无门槛商品劵批次对象
   * @type: PddPromotionGoodsCouponCreateGoodsCouponBatchCreateResponseResponseInterface
   * @default:
   *
   **/
  goods_coupon_batch_create_response: PddPromotionGoodsCouponCreateGoodsCouponBatchCreateResponseResponseInterface;
}

/**
 * @description 创建无门槛商品劵批次对象
 * @default
 * @example
 **/
export interface PddPromotionGoodsCouponCreateGoodsCouponBatchCreateResponseResponseInterface {
  /**
   * @description: 创建的无门槛商品劵批次id
   * @type: string
   * @default:
   **/
  batch_id: string;
}
