export const PDD_EXPRESS_DEPOT_LIST_GET = 'pdd.express.depot.list.get';

/**
 * 接口名称：仓库列表
 * 接口标识：pdd.express.depot.list.get
 * 接口使用场景：仓库列表
 **/
export interface PddExpressDepotListGetRequestInterface {
  /**
   * @description: 分页数据size
   * @type: string
   * @default:
   **/
  length?: string;

  /**
   * @description: 分页数据起始位置
   * @type: string
   * @default:
   **/
  start?: string;
}

/**
 * 接口名称：仓库列表
 * 接口标识：pdd.express.depot.list.get
 * 接口使用场景：仓库列表
 **/
export interface PddExpressDepotListGetResponseInterface {
  /**
   * @description: 返回结果
   * @type: PddExpressDepotListGetOpenApiResponseResponseInterface
   * @default:
   *
   **/
  open_api_response: PddExpressDepotListGetOpenApiResponseResponseInterface;
}

/**
 * @description 返回结果
 * @default
 * @example
 **/
export interface PddExpressDepotListGetOpenApiResponseResponseInterface {
  /**
   * @description: 仓库数量
   * @type: number
   * @default:
   **/
  count: number;

  /**
   * @description: 仓库列表
   * @type: PddExpressDepotListGetOpenApiResponseDepotListResponseInterface[]
   * @default:
   *
   **/
  depot_list: PddExpressDepotListGetOpenApiResponseDepotListResponseInterface[];
}

/**
 * @description 仓库列表
 * @default
 * @example
 **/
export interface PddExpressDepotListGetOpenApiResponseDepotListResponseInterface {
  /**
   * @description: 仓库详细地址
   * @type: string
   * @default:
   **/
  address: string;

  /**
   * @description: 仓库别名
   * @type: string
   * @default:
   **/
  alias: string;

  /**
   * @description: 仓库所在市
   * @type: number
   * @default:
   **/
  city: number;

  /**
   * @description: 仓库编码
   * @type: string
   * @default:
   **/
  code: string;

  /**
   * @description: 联系人名字
   * @type: string
   * @default:
   **/
  contact_name: string;

  /**
   * @description: 联系人电话
   * @type: string
   * @default:
   **/
  contact_tel: string;

  /**
   * @description: 仓库Id
   * @type: string
   * @default:
   **/
  depot_id: string;

  /**
   * @description: 仓库所在区
   * @type: number
   * @default:
   **/
  district: number;

  /**
   * @description: 仓库Id2
   * @type: string
   * @default:
   **/
  id_str: string;

  /**
   * @description: 仓库名称
   * @type: string
   * @default:
   **/
  name: string;

  /**
   * @description: 仓库所在省
   * @type: number
   * @default:
   **/
  province: number;

  /**
   * @description: 覆盖信息,key是覆盖的省id;value中1表示局部，2表示全部覆盖
   * @type: PddExpressDepotListGetOpenApiResponseDepotListProvinceMapResponseInterface
   * @default:
   *
   **/
  province_map: PddExpressDepotListGetOpenApiResponseDepotListProvinceMapResponseInterface;

  /**
   * @description: 仓库类型
   * @type: number
   * @default:
   **/
  type: number;

  /**
   * @description: 邮编
   * @type: string
   * @default:
   **/
  zip: string;
}

/**
 * @description 覆盖信息,key是覆盖的省id;value中1表示局部，2表示全部覆盖
 * @default
 * @example
 **/
export interface PddExpressDepotListGetOpenApiResponseDepotListProvinceMapResponseInterface {
  /**
   * @description: 省份id
   * @type: string
   * @default:
   **/
  key: string;

  /**
   * @description: 1表示局部，2表示全部覆盖
   * @type: number
   * @default:
   **/
  value: number;
}
