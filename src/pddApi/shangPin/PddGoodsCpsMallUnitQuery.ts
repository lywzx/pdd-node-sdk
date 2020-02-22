export const PDD_GOODS_CPS_MALL_UNIT_QUERY = 'PDD_GOODS_CPS_MALL_UNIT_QUERY';

/**
 * 接口名称：查询全店推广API
 * 接口标识：pdd.goods.cps.mall.unit.query
 * 接口使用场景：查询全店推广计划
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddGoodsCpsMallUnitQueryRequestInterface {}

/**
 * 接口名称：查询全店推广API
 * 接口标识：pdd.goods.cps.mall.unit.query
 * 接口使用场景：查询全店推广计划
 **/
export interface PddGoodsCpsMallUnitQueryResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsCpsMallUnitQueryGoodsCpsMallUnitQueryResponseResponseInterface
   * @default:
   *
   **/
  goods_cps_mall_unit_query_response: PddGoodsCpsMallUnitQueryGoodsCpsMallUnitQueryResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGoodsCpsMallUnitQueryGoodsCpsMallUnitQueryResponseResponseInterface {
  /**
   * @description: 全店推广计划佣金比（千分比）
   * @type: number
   * @default:
   **/
  rate: number;

  /**
   * @description: 修改后生效的佣金费率（千分比）
   * @type: number
   * @default:
   **/
  rate_to_be: number;

  /**
   * @description: 全店推广计划状态：1-推广中，2-暂停推广
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 修改后生效的状态，1-推广中，2-暂停，3-删除
   * @type: string
   * @default:
   **/
  status_to_be: string;

  /**
   * @description: 全店推广计划佣金生效时间
   * @type: string
   * @default:
   **/
  rate_to_be_day: string;

  /**
   * @description: 全店推广计划状态生效时间
   * @type: string
   * @default:
   **/
  status_to_be_day: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_GOODS_CPS_MALL_UNIT_QUERY]: {
    requestInterface: PddGoodsCpsMallUnitQueryRequestInterface;
    responseInterface: PddGoodsCpsMallUnitQueryResponseInterface;
  };
}
