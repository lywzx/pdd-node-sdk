export const PDD_EXPRESS_ADD_DEPOT = 'PDD_EXPRESS_ADD_DEPOT';

/**
 * 接口名称：增加仓库
 * 接口标识：pdd.express.add.depot
 * 接口使用场景：增加仓库
 **/
export interface PddExpressAddDepotRequestInterface {
  /**
   * @description: 联系人姓名
   * @type: string
   * @default:
   **/
  contact_name: string;

  /**
   * @description: 仓库详细地址5-20字
   * @type: string
   * @default:
   **/
  depot_address?: string;

  /**
   * @description: 别名
   * @type: string
   * @default:
   **/
  depot_alias?: string;

  /**
   * @description: 所在市id
   * @type: number
   * @default:
   **/
  depot_city_id?: number;

  /**
   * @description: 仓库编码
   * @type: string
   * @default:
   **/
  depot_code?: string;

  /**
   * @description: 所在区id
   * @type: number
   * @default:
   **/
  depot_district_id?: number;

  /**
   * @description: 仓库名称
   * @type: string
   * @default:
   **/
  depot_name?: string;

  /**
   * @description: 所在省id
   * @type: number
   * @default:
   **/
  depot_province_id?: number;

  /**
   * @description: 仓库区域（ 省->市->区id列表）例如：{"34":{"396":[3383]}}Map<Integer, Map<Integer, List<Integer>>>
   * {
   * 1:{
   *   2:[3,4]
   *   }
   * }
   * @type: PddExpressAddDepotDepotRegionRequestInterface
   * @default:
   *
   **/
  depot_region?: PddExpressAddDepotDepotRegionRequestInterface;

  /**
   * @description: 联系人电话
   * @type: string
   * @default:
   **/
  telephone: string;

  /**
   * @description: 邮编
   * @type: string
   * @default:
   **/
  zip_code: string;
}

/**
 * @description 仓库区域（ 省->市->区id列表）例如：{"34":{"396":[3383]}}Map<Integer, Map<Integer, List<Integer>>>
 * {
 * 1:{
 *   2:[3,4]
 *   }
 * }
 * @default
 * @example
 **/
export interface PddExpressAddDepotDepotRegionRequestInterface {
  /**
   * @description: 省份id
   * @type: string
   * @default:
   **/
  key?: string;

  /**
   * @description: 市 -> 区id列表
   * @type: PddExpressAddDepotDepotRegionValueRequestInterface
   * @default:
   *
   **/
  value?: PddExpressAddDepotDepotRegionValueRequestInterface;
}

/**
 * @description 市 -> 区id列表
 * @default
 * @example
 **/
export interface PddExpressAddDepotDepotRegionValueRequestInterface {
  /**
   * @description: 城市id
   * @type: string
   * @default:
   **/
  key?: string;

  /**
   * @description: 区id列表
   * @type: string
   * @default:
   **/
  value?: string;
}

/**
 * 接口名称：增加仓库
 * 接口标识：pdd.express.add.depot
 * 接口使用场景：增加仓库
 **/
export interface PddExpressAddDepotResponseInterface {
  /**
   * @description: 操作成功
   * @type: string
   * @default:
   **/
  open_api_response: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_EXPRESS_ADD_DEPOT]: {
    requestInterface: PddExpressAddDepotRequestInterface;
    responseInterface: PddExpressAddDepotResponseInterface;
  };
}
