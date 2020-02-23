export const PDD_EXPRESS_SEARCH_DEPOT = 'pdd.express.search.depot';

/**
 * 接口名称：根据仓库名称和仓库编码查询仓库
 * 接口标识：pdd.express.search.depot
 * 接口使用场景：根据仓库名称和仓库编码查询仓库
 **/
export interface PddExpressSearchDepotRequestInterface {
  /**
   * @description: 仓库编码
   * @type: string
   * @default:
   **/
  code?: string;

  /**
   * @description: 10 分页数据size
   * @type: number
   * @default:
   **/
  length?: number;

  /**
   * @description: 仓库名称
   * @type: string
   * @default:
   **/
  name?: string;

  /**
   * @description: 0 分页数据起始位置
   * @type: number
   * @default:
   **/
  start?: number;
}

/**
 * 接口名称：根据仓库名称和仓库编码查询仓库
 * 接口标识：pdd.express.search.depot
 * 接口使用场景：根据仓库名称和仓库编码查询仓库
 **/
export interface PddExpressSearchDepotResponseInterface {
  /**
   * @description: response
   * @type: PddExpressSearchDepotOpenApiResponseResponseInterface
   * @default:
   *
   **/
  open_api_response: PddExpressSearchDepotOpenApiResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddExpressSearchDepotOpenApiResponseResponseInterface {
  /**
   * @description: 数量
   * @type: string
   * @default:
   **/
  count: string;

  /**
   * @description: 仓库列表
   * @type: PddExpressSearchDepotOpenApiResponseDepotListResponseInterface[]
   * @default:
   *
   **/
  depot_list: PddExpressSearchDepotOpenApiResponseDepotListResponseInterface[];
}

/**
 * @description 仓库列表
 * @default
 * @example
 **/
export interface PddExpressSearchDepotOpenApiResponseDepotListResponseInterface {
  /**
   * @description: 详细地址
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
   * @description: 仓库地址（市编号）
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
   * @description: 联系人姓名
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
   * @description: 仓库id
   * @type: string
   * @default:
   **/
  depot_id: string;

  /**
   * @description: 仓库地址（区编号）
   * @type: number
   * @default:
   **/
  district: number;

  /**
   * @description: 仓库id（string）
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
   * @description: 仓库地址（省编号）
   * @type: number
   * @default:
   **/
  province: number;

  /**
   * @description: 覆盖信息，省：全覆盖
   * @type: PddExpressSearchDepotOpenApiResponseDepotListProvinceMapResponseInterface
   * @default:
   *
   **/
  province_map: PddExpressSearchDepotOpenApiResponseDepotListProvinceMapResponseInterface;

  /**
   * @description: 仓库类型，暂时只有1
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
 * @description 覆盖信息，省：全覆盖
 * @default
 * @example
 **/
export interface PddExpressSearchDepotOpenApiResponseDepotListProvinceMapResponseInterface {
  /**
   * @description: 省份id
   * @type: string
   * @default:
   **/
  key: string;

  /**
   * @description: 1 半覆盖， 2 全覆盖
   * @type: string
   * @default:
   **/
  value: string;
}
