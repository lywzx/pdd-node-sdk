export const PDD_GOODS_SKU_PRICE_UPDATE = 'pdd.goods.sku.price.update';
export const PDD_GOODS_SKU_PRICE_UPDATE_RESPONSE_KEY = 'goods_update_sku_price_response';

/**
 * 接口名称：修改商品sku价格
 * 接口标识：pdd.goods.sku.price.update
 * 接口使用场景：修改商品sku价格
 **/
export interface PddGoodsSkuPriceUpdateRequestInterface {
  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id?: string;

  /**
   * @description: 待修改的sku价格
   * @type: PddGoodsSkuPriceUpdateSkuPriceListRequestInterface[]
   * @default:
   *
   **/
  sku_price_list?: PddGoodsSkuPriceUpdateSkuPriceListRequestInterface[];

  /**
   * @description: 市场价 （单位分）
   * @type: string
   * @default:
   **/
  market_price: string;

  /**
   * @description: 市场价 （单位元）
   * @type: string
   * @default:
   **/
  market_price_in_yuan: string;

  /**
   * @description: 提交后上架状态，0:上架,1:保持原样
   * @type: number
   * @default:
   **/
  sync_goods_operate: number;
}

/**
 * @description 待修改的sku价格
 * @default
 * @example
 **/
export interface PddGoodsSkuPriceUpdateSkuPriceListRequestInterface {
  /**
   * @description: sku上架状态，0-已下架，1-上架中
   * @type: number
   * @default:
   **/
  is_onsale: number;

  /**
   * @description: 单独购买价格（单位分）
   * @type: string
   * @default:
   **/
  single_price?: string;

  /**
   * @description: 拼团购买价格（单位分）
   * @type: string
   * @default:
   **/
  group_price?: string;

  /**
   * @description: sku标识
   * @type: string
   * @default:
   **/
  sku_id?: string;
}

/**
 * 接口名称：修改商品sku价格
 * 接口标识：pdd.goods.sku.price.update
 * 接口使用场景：修改商品sku价格
 **/
export interface PddGoodsSkuPriceUpdateResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsSkuPriceUpdateGoodsUpdateSkuPriceResponseResponseInterface
   * @default:
   *
   **/
  goods_update_sku_price_response: PddGoodsSkuPriceUpdateGoodsUpdateSkuPriceResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGoodsSkuPriceUpdateGoodsUpdateSkuPriceResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
