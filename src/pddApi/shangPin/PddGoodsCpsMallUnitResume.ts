export const PDD_GOODS_CPS_MALL_UNIT_RESUME = 'PDD_GOODS_CPS_MALL_UNIT_RESUME';

/**
 * 接口名称：恢复全店推广API
 * 接口标识：pdd.goods.cps.mall.unit.resume
 * 接口使用场景：恢复全店推广计划
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddGoodsCpsMallUnitResumeRequestInterface {}

/**
 * 接口名称：恢复全店推广API
 * 接口标识：pdd.goods.cps.mall.unit.resume
 * 接口使用场景：恢复全店推广计划
 **/

export interface PddGoodsCpsMallUnitResumeResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsCpsMallUnitResumeGoodsCpsMallUnitResumeResponseResponseInterface
   * @default:
   *
   **/
  goods_cps_mall_unit_resume_response: PddGoodsCpsMallUnitResumeGoodsCpsMallUnitResumeResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/

export interface PddGoodsCpsMallUnitResumeGoodsCpsMallUnitResumeResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  result: boolean;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_GOODS_CPS_MALL_UNIT_RESUME]: {
    requestInterface: PddGoodsCpsMallUnitResumeRequestInterface;
    responseInterface: PddGoodsCpsMallUnitResumeResponseInterface;
  };
}
