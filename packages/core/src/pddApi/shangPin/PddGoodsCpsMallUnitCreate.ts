export const PDD_GOODS_CPS_MALL_UNIT_CREATE = 'pdd.goods.cps.mall.unit.create';

/**
 * 接口名称：设置全店推广API
 * 接口标识：pdd.goods.cps.mall.unit.create
 * 接口使用场景：设置全店推广API
 **/
export interface PddGoodsCpsMallUnitCreateRequestInterface {
  /**
   * @description: 佣金比（千分比）
   * @type: string | number
   * @default:
   **/
  rate: string | number;

  /**
   * @description: 合作方code
   * @type: string
   * @default:
   **/
  erp_code?: string;
}

/**
 * 接口名称：设置全店推广API
 * 接口标识：pdd.goods.cps.mall.unit.create
 * 接口使用场景：设置全店推广API
 **/
export interface PddGoodsCpsMallUnitCreateResponseInterface {
  /**
   * @description: 是否设置成功
   * @type: boolean
   * @default:
   **/
  is_create_success: boolean;
}
