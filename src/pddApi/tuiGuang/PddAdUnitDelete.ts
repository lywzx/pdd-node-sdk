export const PDD_AD_UNIT_DELETE = 'pdd.ad.unit.delete';
export const PDD_AD_UNIT_DELETE_RESPONSE_KEY = 'ad_unit_delete_response';

/**
 * 接口名称：删除推广单元-批量
 * 接口标识：pdd.ad.unit.delete
 * 接口使用场景：删除推广单元-批量，可输入多个单元id，进行批量删除
 **/
export interface PddAdUnitDeleteRequestInterface {
  /**
   * @description: 0--搜索广告,1--明星店铺,2--定向广告,3--首页Banner广告（目前只支持0，暂不支持1、2、3）
   * @type: number
   * @default:
   **/
  scene_type?: number;

  /**
   * @description: unit_id列表，[1,2]
   * @type: Array<string | number>
   * @default:
   **/
  unit_ids?: Array<string | number>;
}

/**
 * 接口名称：删除推广单元-批量
 * 接口标识：pdd.ad.unit.delete
 * 接口使用场景：删除推广单元-批量，可输入多个单元id，进行批量删除
 **/
export interface PddAdUnitDeleteResponseInterface {
  /**
   * @description: 返回response
   * @type: PddAdUnitDeleteAdUnitDeleteResponseResponseInterface
   * @default:
   *
   **/
  ad_unit_delete_response: PddAdUnitDeleteAdUnitDeleteResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/
export interface PddAdUnitDeleteAdUnitDeleteResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
