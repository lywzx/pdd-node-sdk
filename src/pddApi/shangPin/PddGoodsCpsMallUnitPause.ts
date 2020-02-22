export const PDD_GOODS_CPS_MALL_UNIT_PAUSE = 'PDD_GOODS_CPS_MALL_UNIT_PAUSE';

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
   * @type: PddGoodsCpsMallUnitPauseGoodsCpsMallUnitQueryResponseResponseInterface
   * @default:
   *
   **/
  goods_cps_mall_unit_query_response: PddGoodsCpsMallUnitPauseGoodsCpsMallUnitQueryResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGoodsCpsMallUnitPauseGoodsCpsMallUnitQueryResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  result: boolean;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_GOODS_CPS_MALL_UNIT_PAUSE]: {
    requestInterface: PddGoodsCpsMallUnitPauseRequestInterface;
    responseInterface: PddGoodsCpsMallUnitPauseResponseInterface;
  };
}
