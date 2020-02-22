export const PDD_STOCK_DEPOT_PRIORITY_LIST = 'PDD_STOCK_DEPOT_PRIORITY_LIST';

/**
 * 接口名称：仓库优先级列表
 * 接口标识：pdd.stock.depot.priority.list
 * 接口使用场景：获取仓库优先级列表
 **/

export interface PddStockDepotPriorityListRequestInterface {
  /**
   * @description: 省id
   * @type: number
   * @default:
   **/
  province_id: number;

  /**
   * @description: 市id
   * @type: number
   * @default:
   **/
  city_id: number;

  /**
   * @description: 区id
   * @type: number
   * @default:
   **/
  district_id: number;

  /**
   * @description: 仓库编码
   * @type: string
   * @default:
   **/
  depot_code: string;

  /**
   * @description: 每页数据显示数量
   * @type: number
   * @default:
   **/
  page_size?: number;

  /**
   * @description: 当前页数 从1开始
   * @type: number
   * @default:
   **/
  page_num?: number;
}

/**
 * 接口名称：仓库优先级列表
 * 接口标识：pdd.stock.depot.priority.list
 * 接口使用场景：获取仓库优先级列表
 **/

export interface PddStockDepotPriorityListResponseInterface {
  /**
   * @description: 响应内容
   * @type: PddStockDepotPriorityListOpenApiResponseResponseInterface
   * @default:
   *
   **/
  open_api_response: PddStockDepotPriorityListOpenApiResponseResponseInterface;
}

/**
 * @description 响应内容
 * @default
 * @example
 **/

export interface PddStockDepotPriorityListOpenApiResponseResponseInterface {
  /**
   * @description: 总数
   * @type: number
   * @default:
   **/
  count: number;

  /**
   * @description: 仓库列表
   * @type: PddStockDepotPriorityListOpenApiResponseDepotListResponseInterface[]
   * @default:
   *
   **/
  depot_list: PddStockDepotPriorityListOpenApiResponseDepotListResponseInterface[];
}

/**
 * @description 仓库列表
 * @default
 * @example
 **/

export interface PddStockDepotPriorityListOpenApiResponseDepotListResponseInterface {
  /**
   * @description: 仓库id
   * @type: string
   * @default:
   **/
  depot_id: string;

  /**
   * @description: 仓库地址（省编号）
   * @type: number
   * @default:
   **/
  province_id: number;

  /**
   * @description: 仓库地址（市编号）
   * @type: number
   * @default:
   **/
  city_id: number;

  /**
   * @description: 仓库地址（区编号）
   * @type: number
   * @default:
   **/
  district_id: number;

  /**
   * @description: 仓库编码
   * @type: string
   * @default:
   **/
  depot_code: string;

  /**
   * @description: 仓库名称
   * @type: string
   * @default:
   **/
  depot_name: string;

  /**
   * @description: 优先级
   * @type: number
   * @default:
   **/
  priority: number;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_STOCK_DEPOT_PRIORITY_LIST]: {
    requestInterface: PddStockDepotPriorityListRequestInterface;
    responseInterface: PddStockDepotPriorityListResponseInterface;
  };
}
