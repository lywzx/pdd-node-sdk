export const PDD_GOODS_SKU_PRICE_UPDATE = 'pdd.goods.sku.price.update';
export const PDD_GOODS_SKU_PRICE_UPDATE_RESPONSE_KEY = 'goods_update_sku_price_response';
export const PDD_GOODS_SKU_PRICE_UPDATE_LIMITERS = [
  {
    limiterLevel: 4,
    timeRange: 10,
    times: 1200,
    callSourceType: 0,
  },
  {
    limiterLevel: 3,
    timeRange: 10,
    times: 4000,
    callSourceType: 0,
  },
];

/**
 * 接口名称：修改商品sku价格
 * 接口标识：pdd.goods.sku.price.update
 * 接口使用场景：修改商品sku价格
 **/
export interface PddGoodsSkuPriceUpdateRequestInterface {
  /**
   * @description: 商品id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 是否获取商品发布警告信息，默认为忽略
   * @type: boolean
   * @default:
   **/
  ignore_edit_warn?: boolean;

  /**
   * @description: 参考价 （单位分）
   * @type: string | number
   * @default:
   **/
  market_price?: string | number;

  /**
   * @description: 参考价 （单位元）
   * @type: string
   * @default:
   **/
  market_price_in_yuan?: string;

  /**
   * @description: 待修改的sku价格
   * @type: PddGoodsSkuPriceUpdateSkuPriceListRequestInterface[]
   * @default:
   *
   **/
  sku_price_list: PddGoodsSkuPriceUpdateSkuPriceListRequestInterface[];

  /**
   * @description: 提交后上架状态，0:上架,1:保持原样
   * @type: number
   * @default:
   **/
  sync_goods_operate?: number;

  /**
   * @description: 满2件折扣，可选范围0-100, 0表示取消，95表示95折，设置需先查询规则接口获取实际可填范围
   * @type: number
   * @default:
   **/
  two_pieces_discount?: number;
}

/**
 * @description 待修改的sku价格
 * @default
 * @example
 **/
export interface PddGoodsSkuPriceUpdateSkuPriceListRequestInterface {
  /**
   * @description: 拼团购买价格（单位分）
   * @type: string | number
   * @default:
   **/
  group_price?: string | number;

  /**
   * @description: sku上架状态，0-已下架，1-上架中
   * @type: number
   * @default:
   **/
  is_onsale?: number;

  /**
   * @description: 单独购买价格（单位分）
   * @type: string | number
   * @default:
   **/
  single_price?: string | number;

  /**
   * @description: sku标识
   * @type: string | number
   * @default:
   **/
  sku_id: string | number;
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
   * @description:
   * @type: string | number
   * @default:
   **/
  goods_commit_id: string | number;

  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
