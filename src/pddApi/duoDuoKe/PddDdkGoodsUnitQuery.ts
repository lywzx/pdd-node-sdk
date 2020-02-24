export const PDD_DDK_GOODS_UNIT_QUERY = 'pdd.ddk.goods.unit.query';
export const PDD_DDK_GOODS_UNIT_QUERY_RESPONSE_KEY = 'ddk_goods_unit_query_response';

/**
 * 接口名称：查询商品的推广计划
 * 接口标识：pdd.ddk.goods.unit.query
 * 接口使用场景：查询商品的推广计划
 **/
export interface PddDdkGoodsUnitQueryRequestInterface {
  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id?: string;

  /**
   * @description: 招商duoId
   * @type: string
   * @default:
   **/
  zs_duo_id: string;
}

/**
 * 接口名称：查询商品的推广计划
 * 接口标识：pdd.ddk.goods.unit.query
 * 接口使用场景：查询商品的推广计划
 **/
export interface PddDdkGoodsUnitQueryResponseInterface {
  /**
   * @description: ddk_goods_unit_query_response
   * @type: PddDdkGoodsUnitQueryDdkGoodsUnitQueryResponseResponseInterface
   * @default:
   *
   **/
  ddk_goods_unit_query_response: PddDdkGoodsUnitQueryDdkGoodsUnitQueryResponseResponseInterface;
}

/**
 * @description ddk_goods_unit_query_response
 * @default
 * @example
 **/
export interface PddDdkGoodsUnitQueryDdkGoodsUnitQueryResponseResponseInterface {
  /**
   * @description: 优惠券结束时间，单位：秒
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
   * @description: 优惠券开始时间，单位：秒
   * @type: string
   * @default:
   **/
  coupon_start_time: string;

  /**
   * @description: 优惠券面额，单位：厘
   * @type: number
   * @default:
   **/
  discount: number;

  /**
   * @description: 优惠券总数量
   * @type: string
   * @default:
   **/
  init_quantity: string;

  /**
   * @description: 商品的佣金比例，单位：千分位，比如100，表示10%
   * @type: number
   * @default:
   **/
  rate: number;

  /**
   * @description: 优惠券剩余数量
   * @type: string
   * @default:
   **/
  remain_quantity: string;

  /**
   * @description: 商品的推广计划类型，1-通用推广，2-专属推广，3-招商推广，4-全店推广
   * @type: number
   * @default:
   **/
  unit_type: number;
}
