export const PDD_GOODS_CPS_MALL_UNIT_CREATE = 'pdd.goods.cps.mall.unit.create';

export const PDD_GOODS_CPS_MALL_UNIT_CREATE_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 60,
    times: 60,
    callSourceType: 0,
  },
];

/**
 * 接口名称：设置全店推广API
 * 接口标识：pdd.goods.cps.mall.unit.create
 * 接口使用场景：设置全店推广API
 **/
export interface PddGoodsCpsMallUnitCreateRequestInterface {
  /**
   * @description: 合作方code
   * @type: string
   * @default:
   **/
  erp_code?: string;

  /**
   * @description: 佣金比（千分比）
   * @type: string | number
   * @default:
   **/
  rate: string | number;
}

/**
 * 接口名称：设置全店推广API
 * 接口标识：pdd.goods.cps.mall.unit.create
 * 接口使用场景：设置全店推广API
 **/
export interface PddGoodsCpsMallUnitCreateResponseInterface {
  /**
   * @description: 是否创建成功
   * @type: boolean
   * @default:
   **/
  is_create_success: boolean;
}
