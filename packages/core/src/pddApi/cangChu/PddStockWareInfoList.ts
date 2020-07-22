export const PDD_STOCK_WARE_INFO_LIST = 'pdd.stock.ware.info.list';
export const PDD_STOCK_WARE_INFO_LIST_RESPONSE_KEY = 'stock_ware_info_list_response';

/**
 * 接口名称：货品列表的查询接口
 * 接口标识：pdd.stock.ware.info.list
 * 接口使用场景：获取货品列表
 **/
export interface PddStockWareInfoListRequestInterface {
  /**
   * @description: 货品编码集合
   * @type: string[]
   * @default:
   **/
  ware_sn_list: string[];
}

/**
 * 接口名称：货品列表的查询接口
 * 接口标识：pdd.stock.ware.info.list
 * 接口使用场景：获取货品列表
 **/
export interface PddStockWareInfoListResponseInterface {
  /**
   * @description: response
   * @type: PddStockWareInfoListStockWareInfoListResponseResponseInterface
   * @default:
   *
   **/
  stock_ware_info_list_response: PddStockWareInfoListStockWareInfoListResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddStockWareInfoListStockWareInfoListResponseResponseInterface {
  /**
   * @description: 货品信息列表
   * @type: PddStockWareInfoListStockWareInfoListResponseWareListResponseInterface[]
   * @default:
   *
   **/
  ware_list: PddStockWareInfoListStockWareInfoListResponseWareListResponseInterface[];
}

/**
 * @description 货品信息列表
 * @default
 * @example
 **/
export interface PddStockWareInfoListStockWareInfoListResponseWareListResponseInterface {
  /**
   * @description: 货品编码
   * @type: string
   * @default:
   **/
  ware_sn: string;

  /**
   * @description: 货品ID
   * @type: string | number
   * @default:
   **/
  ware_id: string | number;

  /**
   * @description: 是否删除
   * @type: boolean
   * @default:
   **/
  is_deleted: boolean;
}
