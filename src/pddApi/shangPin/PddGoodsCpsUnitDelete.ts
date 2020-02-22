export const PDD_GOODS_CPS_UNIT_DELETE = 'PDD_GOODS_CPS_UNIT_DELETE';

/**
 * 接口名称：删除单品计划接口
 * 接口标识：pdd.goods.cps.unit.delete
 * 接口使用场景：删除单品计划功能
 **/
export interface PddGoodsCpsUnitDeleteRequestInterface {
  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id?: string;
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

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_GOODS_CPS_UNIT_DELETE]: {
    requestInterface: PddGoodsCpsUnitDeleteRequestInterface;
    responseInterface: PddGoodsCpsUnitDeleteResponseInterface;
  };
}
