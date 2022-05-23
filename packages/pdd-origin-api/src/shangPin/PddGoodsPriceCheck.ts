export const PDD_GOODS_PRICE_CHECK = 'pdd.goods.price.check';
export const PDD_GOODS_PRICE_CHECK_RESPONSE_KEY = 'goodsid_price_check_response';

/**
 * 接口名称：商品价格核实
 * 接口标识：pdd.goods.price.check
 * 接口使用场景：提供商品价格核实功能
 **/
export interface PddGoodsPriceCheckRequestInterface {
  /**
   * @description: 商品id，long值，大于0
   * @type: string | number
   * @default:
   **/
  goodsId: string | number;
}

/**
 * 接口名称：商品价格核实
 * 接口标识：pdd.goods.price.check
 * 接口使用场景：提供商品价格核实功能
 **/
export interface PddGoodsPriceCheckResponseInterface {
  /**
   * @description:
   * @type: PddGoodsPriceCheckGoodsidPriceCheckResponseResponseInterface
   * @default:
   *
   **/
  goodsid_price_check_response: PddGoodsPriceCheckGoodsidPriceCheckResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddGoodsPriceCheckGoodsidPriceCheckResponseResponseInterface {
  /**
   * @description:
   * @type: string | number
   * @default:
   **/
  result: string | number;
}
