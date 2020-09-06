export const PDD_DDK_COUPON_INFO_QUERY = 'pdd.ddk.coupon.info.query';
export const PDD_DDK_COUPON_INFO_QUERY_RESPONSE_KEY = 'ddk_coupon_info_query_response';
export const PDD_DDK_COUPON_INFO_QUERY_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 3600,
    times: 3000000,
  },
];

/**
 * 接口名称：查询优惠券信息
 * 接口标识：pdd.ddk.coupon.info.query
 * 接口使用场景：查询优惠券信息
 **/
export interface PddDdkCouponInfoQueryRequestInterface {
  /**
   * @description: 优惠券id
   * @type: string[]
   * @default:
   **/
  coupon_ids: string[];

  /**
   * @description: 店铺id
   * @type: Array<string | number>
   * @default:
   **/
  mall_ids?: Array<string | number>;
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
   * @type: string | number
   * @default:
   **/
  coupon_end_time: string | number;

  /**
   * @description: 优惠券id
   * @type: string
   * @default:
   **/
  coupon_id: string;

  /**
   * @description: 优惠券开始时间
   * @type: string | number
   * @default:
   **/
  coupon_start_time: string | number;

  /**
   * @description: 优惠券类型
   * @type: number
   * @default:
   **/
  coupon_type: number;

  /**
   * @description: 优惠券面额 单位：厘
   * @type: string | number
   * @default:
   **/
  discount: string | number;

  /**
   * @description: 优惠券总量
   * @type: string | number
   * @default:
   **/
  init_quantity: string | number;

  /**
   * @description: 优惠券剩余数量
   * @type: string | number
   * @default:
   **/
  remain_quantity: string | number;
}
