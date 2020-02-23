export const PDD_DDK_COUPON_INFO_QUERY = 'pdd.ddk.coupon.info.query';

/**
 * 接口名称：查询优惠券信息
 * 接口标识：pdd.ddk.coupon.info.query
 * 接口使用场景：查询优惠券信息
 **/
export interface PddDdkCouponInfoQueryRequestInterface {
  /**
   * @description: 优惠券id
   * @type: string
   * @default:
   **/
  coupon_ids?: string;
}

/**
 * 接口名称：查询优惠券信息
 * 接口标识：pdd.ddk.coupon.info.query
 * 接口使用场景：查询优惠券信息
 **/
export interface PddDdkCouponInfoQueryResponseInterface {
  /**
   * @description: ddk_coupon_info_query
   * @type: PddDdkCouponInfoQueryDdkCouponInfoQueryResponseResponseInterface
   * @default:
   *
   **/
  ddk_coupon_info_query_response: PddDdkCouponInfoQueryDdkCouponInfoQueryResponseResponseInterface;
}

/**
 * @description ddk_coupon_info_query
 * @default
 * @example
 **/
export interface PddDdkCouponInfoQueryDdkCouponInfoQueryResponseResponseInterface {
  /**
   * @description: list
   * @type: PddDdkCouponInfoQueryDdkCouponInfoQueryResponseListResponseInterface[]
   * @default:
   *
   **/
  list: PddDdkCouponInfoQueryDdkCouponInfoQueryResponseListResponseInterface[];
}

/**
 * @description list
 * @default
 * @example
 **/
export interface PddDdkCouponInfoQueryDdkCouponInfoQueryResponseListResponseInterface {
  /**
   * @description: 优惠券结束时间
   * @type: string
   * @default:
   **/
  coupon_end_time: string;

  /**
   * @description: 优惠券id
   * @type: string
   * @default:
   **/
  coupon_id: string;

  /**
   * @description: 优惠券开始时间
   * @type: string
   * @default:
   **/
  coupon_start_time: string;

  /**
   * @description: 优惠券类型
   * @type: number
   * @default:
   **/
  coupon_type: number;

  /**
   * @description: 优惠券面额 单位：厘
   * @type: string
   * @default:
   **/
  discount: string;

  /**
   * @description: 优惠券总量
   * @type: string
   * @default:
   **/
  init_quantity: string;

  /**
   * @description: 优惠券剩余数量
   * @type: string
   * @default:
   **/
  remain_quantity: string;
}
