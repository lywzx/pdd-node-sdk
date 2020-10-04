export const PDD_GOODS_LIST_GET = 'pdd.goods.list.get';
export const PDD_GOODS_LIST_GET_RESPONSE_KEY = 'goods_list_get_response';
export const PDD_GOODS_LIST_GET_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 60,
    times: 600,
  },
];

/**
 * 接口名称：商品列表接口
 * 接口标识：pdd.goods.list.get
 * 接口使用场景：商品列表查询
 **/
export interface PddGoodsListGetRequestInterface {
  /**
   * @description: 商品外部编码（sku），同其他接口中的outer_id 、out_id、out_sku_sn、outer_sku_sn、out_sku_id、outer_sku_id 都为商家编码（sku维度）。outer_id,is_onsale,goods_name三选一，优先级is_onsale>outer_id>goods_name
   * @type: string
   * @default:
   **/
  outer_id?: string;

  /**
   * @description: 上下架状态，0-下架，1-上架,outer_id,is_onsale,goods_name三选一，优先级is_onsale>outer_id>goods_name
   * @type: number
   * @default:
   **/
  is_onsale?: number;

  /**
   * @description: 商品名称模糊查询,outer_id,is_onsale,goods_name三选一，优先级is_onsale>outer_id>goods_name
   * @type: string
   * @default:
   **/
  goods_name?: string;

  /**
   * @description: 返回数量，默认 100，最大100。
   * @type: number
   * @default:
   **/
  page_size?: number;

  /**
   * @description: 返回页码 默认 1，页码从 1 开始PS：当前采用分页返回，数量和页数会一起传，如果不传，则采用 默认值
   * @type: number
   * @default:
   **/
  page?: number;

  /**
   * @description: 商家外部商品编码，支持多个，用逗号隔开，最多10个
   * @type: string
   * @default:
   **/
  outer_goods_id?: string;

  /**
   * @description: 模版id
   * @type: string | number
   * @default:
   **/
  cost_template_id?: string | number;
}

/**
 * 接口名称：商品列表接口
 * 接口标识：pdd.goods.list.get
 * 接口使用场景：商品列表查询
 **/
export interface PddGoodsListGetResponseInterface {
  /**
   * @description: 商品列表响应对象
   * @type: PddGoodsListGetGoodsListGetResponseResponseInterface
   * @default:
   *
   **/
  goods_list_get_response: PddGoodsListGetGoodsListGetResponseResponseInterface;
}

/**
 * @description 商品列表响应对象
 * @default
 * @example
 **/
export interface PddGoodsListGetGoodsListGetResponseResponseInterface {
  /**
   * @description: 返回商品总数
   * @type: number
   * @default:
   **/
  total_count: number;

  /**
   * @description: 商品列表对象
   * @type: PddGoodsListGetGoodsListGetResponseGoodsListResponseInterface[]
   * @default:
   *
   **/
  goods_list: PddGoodsListGetGoodsListGetResponseGoodsListResponseInterface[];
}

/**
 * @description 商品列表对象
 * @default
 * @example
 **/
export interface PddGoodsListGetGoodsListGetResponseGoodsListResponseInterface {
  /**
   * @description: 商品缩略图
   * @type: string
   * @default:
   **/
  thumb_url: string;

  /**
   * @description: 商品编码
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 商品名称
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 商品图片
   * @type: string
   * @default:
   **/
  image_url: string;

  /**
   * @description: 是否多sku，0-单sku，1-多sku
   * @type: number
   * @default:
   **/
  is_more_sku: number;

  /**
   * @description: 商品总数量
   * @type: string | number
   * @default:
   **/
  goods_quantity: string | number;

  /**
   * @description: 是否在架上，0-下架中，1-架上
   * @type: number
   * @default:
   **/
  is_onsale: number;

  /**
   * @description: sku列表对象
   * @type: PddGoodsListGetGoodsListGetResponseGoodsListSkuListResponseInterface[]
   * @default:
   *
   **/
  sku_list: PddGoodsListGetGoodsListGetResponseGoodsListSkuListResponseInterface[];

  /**
   * @description: 商品预扣库存
   * @type: string | number
   * @default:
   **/
  goods_reserve_quantity: string | number;
}

/**
 * @description sku列表对象
 * @default
 * @example
 **/
export interface PddGoodsListGetGoodsListGetResponseGoodsListSkuListResponseInterface {
  /**
   * @description: 规格名称
   * @type: string
   * @default:
   **/
  spec: string;

  /**
   * @description: sku编码
   * @type: string | number
   * @default:
   **/
  sku_id: string | number;

  /**
   * @description: sku库存
   * @type: string | number
   * @default:
   **/
  sku_quantity: string | number;

  /**
   * @description: 商家外部编码（sku），同其他接口中的outer_id 、out_id、out_sku_sn、outer_sku_sn、out_sku_id、outer_sku_id 都为商家编码（sku维度）。
   * @type: string
   * @default:
   **/
  outer_id: string;

  /**
   * @description: 商家外部编码（商品），同其他接口中的outer_goods_id 、out_goods_id、out_goods_sn、outer_goods_sn 都为商家编码（goods维度）。
   * @type: string
   * @default:
   **/
  outer_goods_id: string;

  /**
   * @description: sku是否在架上，0-下架中，1-架上
   * @type: number
   * @default:
   **/
  is_sku_onsale: number;

  /**
   * @description: sku预扣库存
   * @type: string | number
   * @default:
   **/
  reserve_quantity: string | number;
}
