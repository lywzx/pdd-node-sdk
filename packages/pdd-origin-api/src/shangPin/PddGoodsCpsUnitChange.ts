export const PDD_GOODS_CPS_UNIT_CHANGE = 'pdd.goods.cps.unit.change';

/**
 * 接口名称：修改商品推广API
 * 接口标识：pdd.goods.cps.unit.change
 * 接口使用场景：修改推广商品API
 **/
export interface PddGoodsCpsUnitChangeRequestInterface {
  /**
   * @description: 商品id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 佣金比例（千分比）
   * @type: string | number
   * @default:
   **/
  rate: string | number;

  /**
   * @description: 优惠券id
   * @type: string | number
   * @default:
   **/
  coupon_id?: string | number;

  /**
   * @description: 优惠券开始时间
   * @type: string
   * @default:
   **/
  coupon_start_time?: string;

  /**
   * @description: 优惠券结束时间
   * @type: string
   * @default:
   **/
  coupon_end_time?: string;

  /**
   * @description: 优惠券面额（单位为分）
   * @type: string | number
   * @default:
   **/
  discount?: string | number;

  /**
   * @description: 设置的优惠券张数
   * @type: string | number
   * @default:
   **/
  init_quantity?: string | number;

  /**
   * @description: 优惠券剩余数量
   * @type: string | number
   * @default:
   **/
  remain_quantity?: string | number;
}

/**
 * 接口名称：修改商品推广API
 * 接口标识：pdd.goods.cps.unit.change
 * 接口使用场景：修改推广商品API
 **/
export interface PddGoodsCpsUnitChangeResponseInterface {
  /**
   * @description: 是否修改成功
   * @type: boolean
   * @default:
   **/
  is_change_success: boolean;
}
