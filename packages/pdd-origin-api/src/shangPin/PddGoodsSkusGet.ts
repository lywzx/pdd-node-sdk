export const PDD_GOODS_SKUS_GET = 'pdd.goods.skus.get';
export const PDD_GOODS_SKUS_GET_RESPONSE_KEY = 'goods_sku_get_response';
export const PDD_GOODS_SKUS_GET_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 1,
    times: 1000,
    callSourceType: 0,
  },
];

/**
 * 接口名称：根据skuId查询sku详情
 * 接口标识：pdd.goods.skus.get
 * 接口使用场景：库存同步、改价等场景
 **/
export interface PddGoodsSkusGetRequestInterface {
  /**
   * @description: 商品Id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: sku id
   * @type: string | number
   * @default:
   **/
  sku_id: string | number;
}

/**
 * 接口名称：根据skuId查询sku详情
 * 接口标识：pdd.goods.skus.get
 * 接口使用场景：库存同步、改价等场景
 **/
export interface PddGoodsSkusGetResponseInterface {
  /**
   * @description: sku信息
   * @type: PddGoodsSkusGetGoodsSkuGetResponseResponseInterface
   * @default:
   *
   **/
  goods_sku_get_response: PddGoodsSkusGetGoodsSkuGetResponseResponseInterface;
}

/**
 * @description sku信息
 * @default
 * @example
 **/
export interface PddGoodsSkusGetGoodsSkuGetResponseResponseInterface {
  /**
   * @description: 该sku所在的商品ID
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 上下架状态，1=上架，0=下架
   * @type: number
   * @default:
   **/
  is_onsale: number;

  /**
   * @description: 团购价，单位分
   * @type: string | number
   * @default:
   **/
  multi_price: string | number;

  /**
   * @description: SKU维度商家外部编码
   * @type: string
   * @default:
   **/
  out_sku_sn: string;

  /**
   * @description: 库存
   * @type: string | number
   * @default:
   **/
  quantity: string | number;

  /**
   * @description: 预扣库存
   * @type: string | number
   * @default:
   **/
  reserve_quantity: string | number;

  /**
   * @description: 单买价，单位分
   * @type: string | number
   * @default:
   **/
  single_price: string | number;

  /**
   * @description: skuId
   * @type: string | number
   * @default:
   **/
  sku_id: string | number;

  /**
   * @description: 规格列表
   * @type: PddGoodsSkusGetGoodsSkuGetResponseSpecResponseInterface[]
   * @default:
   *
   **/
  spec: PddGoodsSkusGetGoodsSkuGetResponseSpecResponseInterface[];
}

/**
 * @description 规格列表
 * @default
 * @example
 **/
export interface PddGoodsSkusGetGoodsSkuGetResponseSpecResponseInterface {
  /**
   * @description: 规格项ID
   * @type: string | number
   * @default:
   **/
  parent_spec_id: string | number;

  /**
   * @description: 规格项
   * @type: string
   * @default:
   **/
  parent_spec_name: string;

  /**
   * @description: 规格ID
   * @type: string | number
   * @default:
   **/
  spec_id: string | number;

  /**
   * @description: 规格值
   * @type: string
   * @default:
   **/
  spec_name: string;
}
