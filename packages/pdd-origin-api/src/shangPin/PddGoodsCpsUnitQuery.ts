export const PDD_GOODS_CPS_UNIT_QUERY = 'pdd.goods.cps.unit.query';

export const PDD_GOODS_CPS_UNIT_QUERY_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 60,
    times: 60,
  },
];

/**
 * 接口名称：查询商品推广API
 * 接口标识：pdd.goods.cps.unit.query
 * 接口使用场景：查询商品推广API
 **/
export interface PddGoodsCpsUnitQueryRequestInterface {
  /**
   * @description: 商品id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;
}

/**
 * 接口名称：查询商品推广API
 * 接口标识：pdd.goods.cps.unit.query
 * 接口使用场景：查询商品推广API
 **/
export interface PddGoodsCpsUnitQueryResponseInterface {
  /**
   * @description: 计划使用的优惠券信息。商品没有优惠券将返回null，有优惠券将返回优惠券信息，包括优惠券起始结束时间，优惠券数量，剩余数量，金额等
   * @type: PddGoodsCpsUnitQueryCouponVoResponseInterface
   * @default:
   *
   **/
  coupon_vo: PddGoodsCpsUnitQueryCouponVoResponseInterface;

  /**
   * @description: 商品id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 佣金比例（千分比）
   * @type: number
   * @default:
   **/
  rate: number;

  /**
   * @description: 即将生效的全店推广计划佣金比（千分比），若没有则为null
   * @type: number
   * @default:
   **/
  rate_to_be: number;

  /**
   * @description: 通用推广计划佣金生效时间
   * @type: string
   * @default:
   **/
  rate_to_be_day: string;

  /**
   * @description: 商品状态，1-推广中，2-暂停，3-删除
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 即将生效的全店推广计划状态：1-推广中，2-暂停推广，若没有则为null
   * @type: number
   * @default:
   **/
  status_to_be: number;

  /**
   * @description: 通用推广计划状态生效时间
   * @type: string
   * @default:
   **/
  status_to_be_day: string;

  /**
   * @description: 单品推广计划单元id
   * @type: string | number
   * @default:
   **/
  unit_id: string | number;
}

/**
 * @description 计划使用的优惠券信息。商品没有优惠券将返回null，有优惠券将返回优惠券信息，包括优惠券起始结束时间，优惠券数量，剩余数量，金额等
 * @default
 * @example
 **/
export interface PddGoodsCpsUnitQueryCouponVoResponseInterface {
  /**
   * @description: coupon_end_time
   * @type: string
   * @default:
   **/
  coupon_end_time: string;

  /**
   * @description: coupon_id
   * @type: string | number
   * @default:
   **/
  coupon_id: string | number;

  /**
   * @description: coupon_start_time
   * @type: string
   * @default:
   **/
  coupon_start_time: string;

  /**
   * @description: discount
   * @type: number
   * @default:
   **/
  discount: number;

  /**
   * @description: init_quantity
   * @type: string | number
   * @default:
   **/
  init_quantity: string | number;

  /**
   * @description: remain_quantity
   * @type: string | number
   * @default:
   **/
  remain_quantity: string | number;
}
