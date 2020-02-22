export const PDD_STOCK_WARE_SKU_UPDATE = 'PDD_STOCK_WARE_SKU_UPDATE';

/**
 * 接口名称：货品关联sku
 * 接口标识：pdd.stock.ware.sku.update
 * 接口使用场景：家电分仓库存-货品关联sku
 **/
export interface PddStockWareSkuUpdateRequestInterface {
  /**
   * @description: 货品id
   * @type: string
   * @default:
   **/
  ware_id?: string;

  /**
   * @description: 组合货品中子货品的关联关系
   * @type: PddStockWareSkuUpdateWareSkusRequestInterface[]
   * @default:
   *
   **/
  ware_skus?: PddStockWareSkuUpdateWareSkusRequestInterface[];
}

/**
 * @description 组合货品中子货品的关联关系
 * @default
 * @example
 **/
export interface PddStockWareSkuUpdateWareSkusRequestInterface {
  /**
   * @description: sku id
   * @type: string
   * @default:
   **/
  sku_id?: string;

  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id?: string;
}

/**
 * 接口名称：货品关联sku
 * 接口标识：pdd.stock.ware.sku.update
 * 接口使用场景：家电分仓库存-货品关联sku
 **/
export interface PddStockWareSkuUpdateResponseInterface {
  /**
   * @description: 操作成功：true
   * @type: boolean
   * @default:
   **/
  open_api_response: boolean;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_STOCK_WARE_SKU_UPDATE]: {
    requestInterface: PddStockWareSkuUpdateRequestInterface;
    responseInterface: PddStockWareSkuUpdateResponseInterface;
  };
}
