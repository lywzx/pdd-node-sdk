export const PDD_STOCK_WARE_SKU_UPDATE = 'pdd.stock.ware.sku.update';

/**
 * 接口名称：货品关联sku
 * 接口标识：pdd.stock.ware.sku.update
 * 接口使用场景：家电分仓库存-货品关联sku
 **/
export interface PddStockWareSkuUpdateRequestInterface {
  /**
   * @description: 货品id
   * @type: string | number
   * @default:
   **/
  ware_id: string | number;

  /**
   * @description: 组合货品中子货品的关联关系
   * @type: PddStockWareSkuUpdateWareSkusRequestInterface[]
   * @default:
   *
   **/
  ware_skus: PddStockWareSkuUpdateWareSkusRequestInterface[];
}

/**
 * @description 组合货品中子货品的关联关系
 * @default
 * @example
 **/
export interface PddStockWareSkuUpdateWareSkusRequestInterface {
  /**
   * @description: sku id
   * @type: string | number
   * @default:
   **/
  sku_id: string | number;

  /**
   * @description: 商品id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;
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
