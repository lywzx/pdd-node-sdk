export const PDD_GOODS_CPS_UNIT_DELETE = 'pdd.goods.cps.unit.delete';
export const PDD_GOODS_CPS_UNIT_DELETE_RESPONSE_KEY = 'goods_cps_unit_delete_response';

/**
 * 接口名称：删除单品计划接口
 * 接口标识：pdd.goods.cps.unit.delete
 * 接口使用场景：删除单品计划功能
 **/
export interface PddGoodsCpsUnitDeleteRequestInterface {
  /**
   * @description: 商品id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;
}

/**
 * 接口名称：删除单品计划接口
 * 接口标识：pdd.goods.cps.unit.delete
 * 接口使用场景：删除单品计划功能
 **/
export interface PddGoodsCpsUnitDeleteResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsCpsUnitDeleteGoodsCpsUnitDeleteResponseResponseInterface
   * @default:
   *
   **/
  goods_cps_unit_delete_response: PddGoodsCpsUnitDeleteGoodsCpsUnitDeleteResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGoodsCpsUnitDeleteGoodsCpsUnitDeleteResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
