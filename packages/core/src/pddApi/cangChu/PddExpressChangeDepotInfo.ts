export const PDD_EXPRESS_CHANGE_DEPOT_INFO = 'pdd.express.change.depot.info';

/**
 * 接口名称：修改仓库信息
 * 接口标识：pdd.express.change.depot.info
 * 接口使用场景：修改仓库信息
 **/
export interface PddExpressChangeDepotInfoRequestInterface {
  /**
   * @description: 仓库id
   * @type: string | number
   * @default:
   **/
  depot_id: string | number;

  /**
   * @description: 仓库编码
   * @type: string
   * @default:
   **/
  depot_code?: string;

  /**
   * @description: 仓库名称
   * @type: string
   * @default:
   **/
  depot_name?: string;

  /**
   * @description: 别名
   * @type: string
   * @default:
   **/
  depot_alias?: string;

  /**
   * @description: 所在省id
   * @type: number
   * @default:
   **/
  depot_province_id?: number;

  /**
   * @description: 所在市id
   * @type: number
   * @default:
   **/
  depot_city_id?: number;

  /**
   * @description: 所在区id
   * @type: number
   * @default:
   **/
  depot_district_id?: number;

  /**
   * @description: 仓库详细地址 5-20字
   * @type: string
   * @default:
   **/
  depot_address?: string;

  /**
   * @description: 联系人姓名
   * @type: string
   * @default:
   **/
  contact_name?: string;

  /**
   * @description: 联系人电话
   * @type: string
   * @default:
   **/
  telephone?: string;

  /**
   * @description: 仓库区域（ 省->市->区id列表）例如：{"34":{"396":[3383]}}Map<Integer, Map<Integer, List<Integer>>>
   * @type: string
   * @default:
   **/
  depot_region?: string;
}

/**
 * 接口名称：修改仓库信息
 * 接口标识：pdd.express.change.depot.info
 * 接口使用场景：修改仓库信息
 **/
export interface PddExpressChangeDepotInfoResponseInterface {
  /**
   * @description: 响应结果
   * @type: string
   * @default:
   **/
  open_api_response: string;
}
