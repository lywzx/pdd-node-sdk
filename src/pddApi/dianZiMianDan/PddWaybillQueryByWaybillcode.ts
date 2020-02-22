export const PDD_WAYBILL_QUERY_BY_WAYBILLCODE = 'PDD_WAYBILL_QUERY_BY_WAYBILLCODE';

/**
 * 接口名称：通过面单号查询面单信息
 * 接口标识：pdd.waybill.query.by.waybillcode
 * 接口使用场景：通过面单号查询面单信息
 **/
export interface PddWaybillQueryByWaybillcodeRequestInterface {
  /**
   * @description: 系统自动生成
   * @type: PddWaybillQueryByWaybillcodeParamListRequestInterface[]
   * @default:
   *
   **/
  param_list?: PddWaybillQueryByWaybillcodeParamListRequestInterface[];
}

/**
 * @description 系统自动生成
 * @default
 * @example
 **/
export interface PddWaybillQueryByWaybillcodeParamListRequestInterface {
  /**
   * @description: 请求id
   * @type: string
   * @default:
   **/
  object_id?: string;

  /**
   * @description: 电子面单号
   * @type: string
   * @default:
   **/
  waybill_code?: string;

  /**
   * @description: 快递公司code
   * @type: string
   * @default:
   **/
  wp_code?: string;
}

/**
 * 接口名称：通过面单号查询面单信息
 * 接口标识：pdd.waybill.query.by.waybillcode
 * 接口使用场景：通过面单号查询面单信息
 **/
export interface PddWaybillQueryByWaybillcodeResponseInterface {
  /**
   * @description: response
   * @type: PddWaybillQueryByWaybillcodePddWaybillQueryByWaybillcodeResponseResponseInterface
   * @default:
   *
   **/
  pdd_waybill_query_by_waybillcode_response: PddWaybillQueryByWaybillcodePddWaybillQueryByWaybillcodeResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddWaybillQueryByWaybillcodePddWaybillQueryByWaybillcodeResponseResponseInterface {
  /**
   * @description: 查询返回值
   * @type: PddWaybillQueryByWaybillcodePddWaybillQueryByWaybillcodeResponseModulesResponseInterface[]
   * @default:
   *
   **/
  modules: PddWaybillQueryByWaybillcodePddWaybillQueryByWaybillcodeResponseModulesResponseInterface[];
}

/**
 * @description 查询返回值
 * @default
 * @example
 **/
export interface PddWaybillQueryByWaybillcodePddWaybillQueryByWaybillcodeResponseModulesResponseInterface {
  /**
   * @description: 面单查询结构体
   * @type: PddWaybillQueryByWaybillcodePddWaybillQueryByWaybillcodeResponseModulesWaybillCloudPrintResponseResponseInterface
   * @default:
   *
   **/
  waybill_cloud_print_response: PddWaybillQueryByWaybillcodePddWaybillQueryByWaybillcodeResponseModulesWaybillCloudPrintResponseResponseInterface;
}

/**
 * @description 面单查询结构体
 * @default
 * @example
 **/
export interface PddWaybillQueryByWaybillcodePddWaybillQueryByWaybillcodeResponseModulesWaybillCloudPrintResponseResponseInterface {
  /**
   * @description: 请求id
   * @type: string
   * @default:
   **/
  object_id: string;

  /**
   * @description: 面单信息
   * @type: string
   * @default:
   **/
  print_data: string;

  /**
   * @description: 面单号
   * @type: string
   * @default:
   **/
  waybill_code: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_WAYBILL_QUERY_BY_WAYBILLCODE]: {
    requestInterface: PddWaybillQueryByWaybillcodeRequestInterface;
    responseInterface: PddWaybillQueryByWaybillcodeResponseInterface;
  };
}
