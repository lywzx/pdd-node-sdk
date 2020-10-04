export const PDD_PROMOTION_LIMITED_ACTIVITY_CANCEL = 'pdd.promotion.limited.activity.cancel';

/**
 * 接口名称：限时限量购活动结束接口
 * 接口标识：pdd.promotion.limited.activity.cancel
 * 接口使用场景：结束已创建的限时限量购活动
 **/
export interface PddPromotionLimitedActivityCancelRequestInterface {
  /**
   * @description: 活动id
   * @type: string | number
   * @default:
   **/
  detail_id: string | number;

  /**
   * @description: 商品id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;
}

/**
 * 接口名称：限时限量购活动结束接口
 * 接口标识：pdd.promotion.limited.activity.cancel
 * 接口使用场景：结束已创建的限时限量购活动
 **/
export interface PddPromotionLimitedActivityCancelResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  result: boolean;
}
