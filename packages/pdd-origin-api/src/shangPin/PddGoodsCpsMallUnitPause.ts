export const PDD_GOODS_CPS_MALL_UNIT_PAUSE = 'pdd.goods.cps.mall.unit.pause';
export const PDD_GOODS_CPS_MALL_UNIT_PAUSE_RESPONSE_KEY = 'goods_cps_mall_unit_pause_response';

/**
 * 接口名称：暂停全店推广API
 * 接口标识：pdd.goods.cps.mall.unit.pause
 * 接口使用场景：暂停全店推广计划
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddGoodsCpsMallUnitPauseRequestInterface {}

/**
 * 接口名称：暂停全店推广API
 * 接口标识：pdd.goods.cps.mall.unit.pause
 * 接口使用场景：暂停全店推广计划
 **/
export interface PddGoodsCpsMallUnitPauseResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsCpsMallUnitPauseGoodsCpsMallUnitPauseResponseResponseInterface
   * @default:
   *
   **/
  goods_cps_mall_unit_pause_response: PddGoodsCpsMallUnitPauseGoodsCpsMallUnitPauseResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGoodsCpsMallUnitPauseGoodsCpsMallUnitPauseResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  result: boolean;
}
