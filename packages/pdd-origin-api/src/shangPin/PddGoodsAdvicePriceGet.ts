export const PDD_GOODS_ADVICE_PRICE_GET = 'pdd.goods.advice.price.get';
export const PDD_GOODS_ADVICE_PRICE_GET_RESPONSE_KEY = 'goods_advice_price_get_response';

/**
 * 接口名称：商品建议价格获取接口
 * 接口标识：pdd.goods.advice.price.get
 * 接口使用场景：商家可通过此接口查询店铺内所有上架商品的建议价格
 **/
export interface PddGoodsAdvicePriceGetRequestInterface {
  /**
   * @description: 获取商品建议价格请求参数
   * @type: PddGoodsAdvicePriceGetRequestRequestInterface
   * @default:
   *
   **/
  request: PddGoodsAdvicePriceGetRequestRequestInterface;
}

/**
 * @description 获取商品建议价格请求参数
 * @default
 * @example
 **/
export interface PddGoodsAdvicePriceGetRequestRequestInterface {
  /**
   * @description: 页码，默认1
   * @type: number
   * @default:
   **/
  page?: number;

  /**
   * @description: 每页数量，默认100，最大100
   * @type: number
   * @default:
   **/
  page_size?: number;
}

/**
 * 接口名称：商品建议价格获取接口
 * 接口标识：pdd.goods.advice.price.get
 * 接口使用场景：商家可通过此接口查询店铺内所有上架商品的建议价格
 **/
export interface PddGoodsAdvicePriceGetResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsAdvicePriceGetGoodsAdvicePriceGetResponseResponseInterface
   * @default:
   *
   **/
  goods_advice_price_get_response: PddGoodsAdvicePriceGetGoodsAdvicePriceGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGoodsAdvicePriceGetGoodsAdvicePriceGetResponseResponseInterface {
  /**
   * @description: 商品建议价列表
   * @type: PddGoodsAdvicePriceGetGoodsAdvicePriceGetResponseAdvicePriceListResponseInterface[]
   * @default:
   *
   **/
  advice_price_list: PddGoodsAdvicePriceGetGoodsAdvicePriceGetResponseAdvicePriceListResponseInterface[];

  /**
   * @description: 商品建议价数据总数
   * @type: number
   * @default:
   **/
  total: number;
}

/**
 * @description 商品建议价列表
 * @default
 * @example
 **/
export interface PddGoodsAdvicePriceGetGoodsAdvicePriceGetResponseAdvicePriceListResponseInterface {
  /**
   * @description: sku建议价，单位为分
   * @type: string | number
   * @default:
   **/
  advice_price: string | number;

  /**
   * @description: 商品ID
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 商品标题
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: sku拼单价，单位为分
   * @type: string | number
   * @default:
   **/
  group_price: string | number;

  /**
   * @description: skuID
   * @type: string | number
   * @default:
   **/
  sku_id: string | number;

  /**
   * @description: sku名
   * @type: string
   * @default:
   **/
  sku_name: string;
}
