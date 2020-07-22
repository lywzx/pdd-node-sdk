export const PDD_GOODS_CPS_UNIT_CREATE = 'pdd.goods.cps.unit.create';

/**
 * 接口名称：设置单品推广API
 * 接口标识：pdd.goods.cps.unit.create
 * 接口使用场景：批量设置商品推广API
 **/
export interface PddGoodsCpsUnitCreateRequestInterface {
  /**
   * @description: 批量设置商品字符串，按照此格式来填写，具体参数见下。注意：创建优惠券时，必须优惠券几个参数都填，否则商品能创建成功,但是默认没有优惠券：[{"goods_id":10000,"rate":2,"coupon_id":123456,"coupon_start_time":1572345,"coupon_end_time":1576482,"discount":300,"init_quantity":600,"remain_quantity":560},{...}........]
   * @type: PddGoodsCpsUnitCreateUnitsRequestInterface[]
   * @default:
   *
   **/
  units: PddGoodsCpsUnitCreateUnitsRequestInterface[];
}

/**
 * @description 批量设置商品字符串，按照此格式来填写，具体参数见下。注意：创建优惠券时，必须优惠券几个参数都填，否则商品能创建成功,但是默认没有优惠券：[{"goods_id":10000,"rate":2,"coupon_id":123456,"coupon_start_time":1572345,"coupon_end_time":1576482,"discount":300,"init_quantity":600,"remain_quantity":560},{...}........]
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
   * @description: 剩余的优惠券张数
   * @type: string | number
   * @default:
   **/
  remain_quantity?: string | number;
}

/**
 * 接口名称：设置单品推广API
 * 接口标识：pdd.goods.cps.unit.create
 * 接口使用场景：批量设置商品推广API
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
