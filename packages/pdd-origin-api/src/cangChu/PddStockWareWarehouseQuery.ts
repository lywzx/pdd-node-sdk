export const PDD_STOCK_WARE_WAREHOUSE_QUERY = 'pdd.stock.ware.warehouse.query';

/**
 * 接口名称：货品仓库库存信息查询
 * 接口标识：pdd.stock.ware.warehouse.query
 * 接口使用场景：通过货品编码查询货品和库存信息
 **/
export interface PddStockWareWarehouseQueryRequestInterface {
  /**
   * @description: 请求对象
   * @type: PddStockWareWarehouseQueryRequestRequestInterface
   * @default:
   *
   **/
  request: PddStockWareWarehouseQueryRequestRequestInterface;
}

/**
 * @description 请求对象
 * @default
 * @example 请求对象
 **/
export interface PddStockWareWarehouseQueryRequestRequestInterface {
  /**
   * @description: 当前页数
   * @type: number
   * @default:
   **/
  page: number;

  /**
   * @description: 页显示数据条数
   * @type: number
   * @default:
   **/
  page_size: number;

  /**
   * @description: 货品编码列表
   * @type: string[]
   * @default:
   **/
  ware_sn_list: string[];
}

/**
 * 接口名称：货品仓库库存信息查询
 * 接口标识：pdd.stock.ware.warehouse.query
 * 接口使用场景：通过货品编码查询货品和库存信息
 **/
export interface PddStockWareWarehouseQueryResponseInterface {
  /**
   * @description: 查询结果
   * @type: PddStockWareWarehouseQueryResultResponseInterface
   * @default:
   *
   **/
  result: PddStockWareWarehouseQueryResultResponseInterface;
}

/**
 * @description 查询结果
 * @default
 * @example 查询结果
 **/
export interface PddStockWareWarehouseQueryResultResponseInterface {
  /**
   * @description: 总数
   * @type: string | number
   * @default:
   **/
  total: string | number;

  /**
   * @description: 查询结果
   * @type: PddStockWareWarehouseQueryResultWareSnWarehouseInfoResponseInterface
   * @default:
   *
   **/
  ware_sn_warehouse_info: PddStockWareWarehouseQueryResultWareSnWarehouseInfoResponseInterface;
}

/**
 * @description 查询结果
 * @default
 * @example 查询结果
 **/
export interface PddStockWareWarehouseQueryResultWareSnWarehouseInfoResponseInterface {
  /**
   * @description: 货品编码
   * @type: string
   * @default:
   **/
  $key: string;

  /**
   * @description: 库存信息列表
   * @type: PddStockWareWarehouseQueryResultWareSnWarehouseInfoValueResponseInterface[]
   * @default:
   *
   **/
  $value: PddStockWareWarehouseQueryResultWareSnWarehouseInfoValueResponseInterface[];
}

/**
 * @description 库存信息列表
 * @default
 * @example 库存信息列表
 **/
export interface PddStockWareWarehouseQueryResultWareSnWarehouseInfoValueResponseInterface {
  /**
   * @description: 库存数量
   * @type: string | number
   * @default:
   **/
  quantity: string | number;

  /**
   * @description: 仓库名称
   * @type: string
   * @default:
   **/
  warehouse_name: string;

  /**
   * @description: 仓库编码
   * @type: string
   * @default:
   **/
  warehouse_sn: string;
}
