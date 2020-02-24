export const PDD_AD_UNIT_OPT_STATUS_UPDATE = 'pdd.ad.unit.opt.status.update';
export const PDD_AD_UNIT_OPT_STATUS_UPDATE_RESPONSE_KEY = 'ad_unit_opt_status_update_response';

/**
 * 接口名称：暂停、开启推广单元
 * 接口标识：pdd.ad.unit.opt.status.update
 * 接口使用场景：暂停、开启推广单元，可输入多个单元id，进行批量设置
 **/
export interface PddAdUnitOptStatusUpdateRequestInterface {
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

  /**
   * @description: 1 已启用,2 已暂停
   * @type: number
   * @default:
   **/
  opt_status?: number;
}

/**
 * 接口名称：暂停、开启推广单元
 * 接口标识：pdd.ad.unit.opt.status.update
 * 接口使用场景：暂停、开启推广单元，可输入多个单元id，进行批量设置
 **/
export interface PddAdUnitOptStatusUpdateResponseInterface {
  /**
   * @description: 返回response
   * @type: PddAdUnitOptStatusUpdateAdUnitOptStatusUpdateResponseResponseInterface
   * @default:
   *
   **/
  ad_unit_opt_status_update_response: PddAdUnitOptStatusUpdateAdUnitOptStatusUpdateResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/
export interface PddAdUnitOptStatusUpdateAdUnitOptStatusUpdateResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
