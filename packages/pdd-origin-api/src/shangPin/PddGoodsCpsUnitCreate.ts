export const PDD_GOODS_CPS_UNIT_CREATE = 'pdd.goods.cps.unit.create';

export const PDD_GOODS_CPS_UNIT_CREATE_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 60,
    times: 60,
  },
  {
    limiterLevel: 3,
    timeRange: 1,
    times: 30,
  },
];

/**
 * 接口名称：设置单品推广API
 * 接口标识：pdd.goods.cps.unit.create
 * 接口使用场景：批量设置商品推广API，其中创建或修改优惠券均应用于该商品所有生效的推广计划
 **/
export interface PddGoodsCpsUnitCreateRequestInterface {
  /**
   * @description: 批量设置商品字符串，按照此格式来填写，具体参数见下。注意：创建优惠券时，必须优惠券几个参数都填，否则商品能创建成功,但是默认没有优惠券：[{"goods_id":10000,"rate":2,"coupon_id":123456,"coupon_start_time":1572345,"coupon_end_time":1576482,"discount":300,"init_quantity":600,"remain_quantity":560,"duration":30},{...}........]
   * @type: PddGoodsCpsUnitCreateUnitsRequestInterface[]
   * @default:
   *
   **/
  units: PddGoodsCpsUnitCreateUnitsRequestInterface[];
}

/**
 * @description 批量设置商品字符串，按照此格式来填写，具体参数见下。注意：创建优惠券时，必须优惠券几个参数都填，否则商品能创建成功,但是默认没有优惠券：[{"goods_id":10000,"rate":2,"coupon_id":123456,"coupon_start_time":1572345,"coupon_end_time":1576482,"discount":300,"init_quantity":600,"remain_quantity":560,"duration":30},{...}........]
 * @default
 * @example
 **/
export interface PddGoodsCpsUnitCreateUnitsRequestInterface {
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
   * @description: 优惠券开始时间，商品售价>=10元必传
   * @type: string
   * @default:
   **/
  coupon_start_time?: string;

  /**
   * @description: 优惠券结束时间，商品售价>=10元必传
   * @type: string
   * @default:
   **/
  coupon_end_time?: string;

  /**
   * @description: 优惠券面额（单位为分），商品售价>=10元必传
   * @type: string | number
   * @default:
   **/
  discount?: string | number;

  /**
   * @description: 设置的优惠券张数，商品售价>=10元必传
   * @type: string | number
   * @default:
   **/
  init_quantity?: string | number;

  /**
   * @description: 剩余的优惠券张数，商品售价>=10元必传
   * @type: string | number
   * @default:
   **/
  remain_quantity?: string | number;

  /**
   * @description: 优惠券领取后的有效使用时间天数
   * @type: number
   * @default:
   **/
  duration?: number;
}

/**
 * 接口名称：设置单品推广API
 * 接口标识：pdd.goods.cps.unit.create
 * 接口使用场景：批量设置商品推广API，其中创建或修改优惠券均应用于该商品所有生效的推广计划
 **/
export interface PddGoodsCpsUnitCreateResponseInterface {
  /**
   * @description: 失败原因列表对象，创建成功则此参数为空
   * @type: PddGoodsCpsUnitCreateFailedVosResponseInterface[]
   * @default:
   *
   **/
  failed_vos: PddGoodsCpsUnitCreateFailedVosResponseInterface[];
}

/**
 * @description 失败原因列表对象，创建成功则此参数为空
 * @default
 * @example
 **/
export interface PddGoodsCpsUnitCreateFailedVosResponseInterface {
  /**
   * @description: 创建失败的商品id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 创建失败原因
   * @type: string
   * @default:
   **/
  reason: string;
}
