export const PDD_STOCK_DEPOT_PRIORITY_UPDATE = 'pdd.stock.depot.priority.update';

/**
 * 接口名称：批量更新仓库优先级
 * 接口标识：pdd.stock.depot.priority.update
 * 接口使用场景：批量更新仓库优先级
 **/
export interface PddStockDepotPriorityUpdateRequestInterface {
  /**
   * @description: 示例：[{"depot_id":1,"province_id":12,"city_id":34,"district_id":56,"priority":5}]
   * @type: PddStockDepotPriorityUpdatePriorityListRequestInterface[]
   * @default:
   *
   **/
  priority_list?: PddStockDepotPriorityUpdatePriorityListRequestInterface[];
}

/**
 * @description 示例：[{"depot_id":1,"province_id":12,"city_id":34,"district_id":56,"priority":5}]
 * @default
 * @example
 **/
export interface PddStockDepotPriorityUpdatePriorityListRequestInterface {
  /**
   * @description: 优先级 范围是1 - 999
   * @type: number
   * @default:
   **/
  priority?: number;

  /**
   * @description: 区id
   * @type: number
   * @default:
   **/
  district_id?: number;

  /**
   * @description: 市id
   * @type: number
   * @default:
   **/
  city_id?: number;

  /**
   * @description: 省id
   * @type: number
   * @default:
   **/
  province_id?: number;

  /**
   * @description: 仓库id
   * @type: string | number
   * @default:
   **/
  depot_id?: string | number;
}

/**
 * 接口名称：批量更新仓库优先级
 * 接口标识：pdd.stock.depot.priority.update
 * 接口使用场景：批量更新仓库优先级
 **/
export interface PddStockDepotPriorityUpdateResponseInterface {
  /**
   * @description: 请求结果
   * @type: string
   * @default:
   **/
  open_api_response: string;
}
