export const PDD_GOODS_COUNTRY_GET = 'pdd.goods.country.get';
export const PDD_GOODS_COUNTRY_GET_RESPONSE_KEY = 'goods_country_get_response';

/**
 * 接口名称：商品国家接口
 * 接口标识：pdd.goods.country.get
 * 接口使用场景：获取指定国家或地区信息
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddGoodsCountryGetRequestInterface {}

/**
 * 接口名称：商品国家接口
 * 接口标识：pdd.goods.country.get
 * 接口使用场景：获取指定国家或地区信息
 **/
export interface PddGoodsCountryGetResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsCountryGetGoodsCountryGetResponseResponseInterface
   * @default:
   *
   **/
  goods_country_get_response: PddGoodsCountryGetGoodsCountryGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGoodsCountryGetGoodsCountryGetResponseResponseInterface {
  /**
   * @description: 国家或地区对象列表
   * @type: PddGoodsCountryGetGoodsCountryGetResponseCountryListResponseInterface[]
   * @default:
   *
   **/
  country_list: PddGoodsCountryGetGoodsCountryGetResponseCountryListResponseInterface[];
}

/**
 * @description 国家或地区对象列表
 * @default
 * @example
 **/
export interface PddGoodsCountryGetGoodsCountryGetResponseCountryListResponseInterface {
  /**
   * @description: 国家或地区对应的ID
   * @type: string | number
   * @default:
   **/
  country_id: string | number;

  /**
   * @description: 对应ID下的国家或地区名称
   * @type: string
   * @default:
   **/
  country_name: string;
}
