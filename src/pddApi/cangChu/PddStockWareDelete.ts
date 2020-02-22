export const PDD_STOCK_WARE_DELETE = 'PDD_STOCK_WARE_DELETE';

/**
 * 接口名称：删除货品
 * 接口标识：pdd.stock.ware.delete
 * 接口使用场景：家电分仓库存-删除货品
 **/
export interface PddStockWareDeleteRequestInterface {
  /**
   * @description: 货品id
   * @type: string
   * @default:
   **/
  ware_id?: string;
}

/**
 * 接口名称：删除货品
 * 接口标识：pdd.stock.ware.delete
 * 接口使用场景：家电分仓库存-删除货品
 **/
export interface PddStockWareDeleteResponseInterface {
  /**
   * @description: 操作成功：true
   * @type: boolean
   * @default:
   **/
  open_api_response: boolean;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_STOCK_WARE_DELETE]: {
    requestInterface: PddStockWareDeleteRequestInterface;
    responseInterface: PddStockWareDeleteResponseInterface;
  };
}
