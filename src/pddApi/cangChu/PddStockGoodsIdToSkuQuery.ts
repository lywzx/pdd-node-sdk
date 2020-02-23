export const PDD_STOCK_GOODS_ID_TO_SKU_QUERY = 'pdd.stock.goods.id.to.sku.query';

/**
 * 接口名称：根据商品id查询sku信息
 * 接口标识：pdd.stock.goods.id.to.sku.query
 * 接口使用场景：家电分仓库存-根据商品id查询sku信息
 **/
export interface PddStockGoodsIdToSkuQueryRequestInterface {
  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id?: string;

  /**
   * @description: 货品id
   * @type: string
   * @default:
   **/
  ware_id?: string;
}

/**
 * 接口名称：根据商品id查询sku信息
 * 接口标识：pdd.stock.goods.id.to.sku.query
 * 接口使用场景：家电分仓库存-根据商品id查询sku信息
 **/
export interface PddStockGoodsIdToSkuQueryResponseInterface {
  /**
   * @description: response
   * @type: PddStockGoodsIdToSkuQueryOpenApiResponseResponseInterface
   * @default:
   *
   **/
  open_api_response: PddStockGoodsIdToSkuQueryOpenApiResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddStockGoodsIdToSkuQueryOpenApiResponseResponseInterface {
  /**
   * @description: 总数
   * @type: number
   * @default:
   **/
  total: number;

  /**
   * @description: sku信息
   * @type: PddStockGoodsIdToSkuQueryOpenApiResponseSkusResponseInterface[]
   * @default:
   *
   **/
  skus: PddStockGoodsIdToSkuQueryOpenApiResponseSkusResponseInterface[];
}

/**
 * @description sku信息
 * @default
 * @example
 **/
export interface PddStockGoodsIdToSkuQueryOpenApiResponseSkusResponseInterface {
  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id: string;

  /**
   * @description: sku_id
   * @type: string
   * @default:
   **/
  sku_id: string;

  /**
   * @description: 货品id
   * @type: string
   * @default:
   **/
  ware_id: string;

  /**
   * @description: 是否已经绑定货品false/true
   * @type: boolean
   * @default:
   **/
  exist_ware: boolean;

  /**
   * @description: 上下架状态，true表示上架，false表示下架
   * @type: boolean
   * @default:
   **/
  is_onsale: boolean;

  /**
   * @description: 规格信息
   * @type: PddStockGoodsIdToSkuQueryOpenApiResponseSkusSpecsResponseInterface[]
   * @default:
   *
   **/
  specs: PddStockGoodsIdToSkuQueryOpenApiResponseSkusSpecsResponseInterface[];
}

/**
 * @description 规格信息
 * @default
 * @example
 **/
export interface PddStockGoodsIdToSkuQueryOpenApiResponseSkusSpecsResponseInterface {
  /**
   * @description: 规格id
   * @type: string
   * @default:
   **/
  spec_id: string;

  /**
   * @description: 规格名称
   * @type: string
   * @default:
   **/
  spec_key: string;

  /**
   * @description: 规格值
   * @type: string
   * @default:
   **/
  spec_value: string;
}
