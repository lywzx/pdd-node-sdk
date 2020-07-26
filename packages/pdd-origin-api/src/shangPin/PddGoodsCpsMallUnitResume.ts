export const PDD_GOODS_CPS_MALL_UNIT_RESUME = 'pdd.goods.cps.mall.unit.resume';
export const PDD_GOODS_CPS_MALL_UNIT_RESUME_RESPONSE_KEY = 'goods_cps_mall_unit_resume_response';
export const PDD_GOODS_CPS_MALL_UNIT_RESUME_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 60,
    times: 60,
  },
];

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
