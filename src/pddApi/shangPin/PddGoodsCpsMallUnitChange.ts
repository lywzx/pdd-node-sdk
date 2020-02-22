export const PDD_GOODS_CPS_MALL_UNIT_CHANGE = 'PDD_GOODS_CPS_MALL_UNIT_CHANGE';

/**
 * 接口名称：修改全店推广API
 * 接口标识：pdd.goods.cps.mall.unit.change
 * 接口使用场景：修改全店推广计划
 **/

export interface PddGoodsCpsMallUnitChangeRequestInterface {
  /**
   * @description: 全店推广计划佣金比（千分比）
   * @type: number
   * @default:
   **/
  rate: number;
}

/**
 * 接口名称：修改全店推广API
 * 接口标识：pdd.goods.cps.mall.unit.change
 * 接口使用场景：修改全店推广计划
 **/

export interface PddGoodsCpsMallUnitChangeResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsCpsMallUnitChangeGoodsCpsMallUnitChangeResponseResponseInterface
   * @default:
   *
   **/
  goods_cps_mall_unit_change_response: PddGoodsCpsMallUnitChangeGoodsCpsMallUnitChangeResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/

export interface PddGoodsCpsMallUnitChangeGoodsCpsMallUnitChangeResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  result: boolean;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_GOODS_CPS_MALL_UNIT_CHANGE]: {
    requestInterface: PddGoodsCpsMallUnitChangeRequestInterface;
    responseInterface: PddGoodsCpsMallUnitChangeResponseInterface;
  };
}
