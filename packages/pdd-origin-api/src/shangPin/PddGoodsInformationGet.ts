export const PDD_GOODS_INFORMATION_GET = 'pdd.goods.information.get';
export const PDD_GOODS_INFORMATION_GET_RESPONSE_KEY = 'goods_info_get_response';
export const PDD_GOODS_INFORMATION_GET_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 60,
    times: 3000,
  },
];

/**
 * 接口名称：商品详情接口
 * 接口标识：pdd.goods.information.get
 * 接口使用场景：商品详情（此接口后续不再维护，请使用pdd.goods.detail.get接口）
 **/
export interface PddGoodsInformationGetRequestInterface {
  /**
   * @description: 商品编码
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;
}

/**
 * 接口名称：商品详情接口
 * 接口标识：pdd.goods.information.get
 * 接口使用场景：商品详情（此接口后续不再维护，请使用pdd.goods.detail.get接口）
 **/
export interface PddGoodsInformationGetResponseInterface {
  /**
   * @description: 商品详情响应对象
   * @type: PddGoodsInformationGetGoodsInfoGetResponseResponseInterface
   * @default:
   *
   **/
  goods_info_get_response: PddGoodsInformationGetGoodsInfoGetResponseResponseInterface;
}

/**
 * @description 商品详情响应对象
 * @default
 * @example
 **/
export interface PddGoodsInformationGetGoodsInfoGetResponseResponseInterface {
  /**
   * @description: 商品详情对象
   * @type: PddGoodsInformationGetGoodsInfoGetResponseGoodsInfoResponseInterface
   * @default:
   *
   **/
  goods_info: PddGoodsInformationGetGoodsInfoGetResponseGoodsInfoResponseInterface;
}

/**
 * @description 商品详情对象
 * @default
 * @example
 **/
export interface PddGoodsInformationGetGoodsInfoGetResponseGoodsInfoResponseInterface {
  /**
   * @description: 商品编码
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 商品序列编码
   * @type: string
   * @default:
   **/
  goods_sn: string;

  /**
   * @description: 1-国内普通商品，2-进口，3-国外海淘，4-直邮 ,5-流量,6-话费,7,优惠券;8-QQ充值,9-加油卡,18-CC行邮
   * @type: number
   * @default:
   **/
  goods_type: number;

  /**
   * @description: 商品一级类目
   * @type: string
   * @default:
   **/
  goods_category: string;

  /**
   * @description: 叶子类目
   * @type: string
   * @default:
   **/
  last_category: string;

  /**
   * @description: 是否七天无理由售后，0-不支持，1-支持
   * @type: number
   * @default:
   **/
  is_refundable: number;

  /**
   * @description: 承诺发货时间
   * @type: string | number
   * @default:
   **/
  shipment_limit_second: string | number;

  /**
   * @description: 商品名称
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 商品图片 url
   * @type: string
   * @default:
   **/
  image_url: string;

  /**
   * @description: 商品库存
   * @type: number
   * @default:
   **/
  goods_quantity: number;

  /**
   * @description: 商品是否上架，0-下架，1-上架；
   * @type: number
   * @default:
   **/
  is_onsale: number;

  /**
   * @description: 商品是否全新，0-全新商品，1-二手商品
   * @type: number
   * @default:
   **/
  second_hand: number;

  /**
   * @description: 成团人数
   * @type: string | number
   * @default:
   **/
  group_required_customer_num: string | number;

  /**
   * @description: sku列表对象
   * @type: PddGoodsInformationGetGoodsInfoGetResponseGoodsInfoSkuListResponseInterface[]
   * @default:
   *
   **/
  sku_list: PddGoodsInformationGetGoodsInfoGetResponseGoodsInfoSkuListResponseInterface[];
}

/**
 * @description sku列表对象
 * @default
 * @example
 **/
export interface PddGoodsInformationGetGoodsInfoGetResponseGoodsInfoSkuListResponseInterface {
  /**
   * @description: 商品规格名称
   * @type: string
   * @default:
   **/
  spec: string;

  /**
   * @description: 商品sku编码
   * @type: string | number
   * @default:
   **/
  sku_id: string | number;

  /**
   * @description: 商品sku库存
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
   * @description: sku预览图
   * @type: string
   * @default:
   **/
  sku_img: string;

  /**
   * @description: 拼团价格（元）
   * @type: string
   * @default:
   **/
  group_price: string;

  /**
   * @description: 单买价格（元）
   * @type: string
   * @default:
   **/
  single_price: string;

  /**
   * @description: 商品sku是否上架，0-下架，1-上架
   * @type: number
   * @default:
   **/
  is_sku_onsale: number;
}
