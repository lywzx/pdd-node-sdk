export const PDD_DDK_THEME_GOODS_SEARCH = 'pdd.ddk.theme.goods.search';
export const PDD_DDK_THEME_GOODS_SEARCH_RESPONSE_KEY = 'theme_list_get_response';

/**
 * 接口名称：多多进宝主题商品查询
 * 接口标识：pdd.ddk.theme.goods.search
 * 接口使用场景：多多进宝主题商品查询
 **/
export interface PddDdkThemeGoodsSearchRequestInterface {
  /**
   * @description: 主题ID
   * @type: string | number
   * @default:
   **/
  theme_id: string | number;
}

/**
 * 接口名称：多多进宝主题商品查询
 * 接口标识：pdd.ddk.theme.goods.search
 * 接口使用场景：多多进宝主题商品查询
 **/
export interface PddDdkThemeGoodsSearchResponseInterface {
  /**
   * @description: 主题列表返回对象
   * @type: PddDdkThemeGoodsSearchThemeListGetResponseResponseInterface
   * @default:
   *
   **/
  theme_list_get_response: PddDdkThemeGoodsSearchThemeListGetResponseResponseInterface;
}

/**
 * @description 主题列表返回对象
 * @default
 * @example
 **/
export interface PddDdkThemeGoodsSearchThemeListGetResponseResponseInterface {
  /**
   * @description: 商品列表对象
   * @type: PddDdkThemeGoodsSearchThemeListGetResponseGoodsListResponseInterface[]
   * @default:
   *
   **/
  goods_list: PddDdkThemeGoodsSearchThemeListGetResponseGoodsListResponseInterface[];

  /**
   * @description: 返回商品总数
   * @type: string | number
   * @default:
   **/
  total: string | number;
}

/**
 * @description 商品列表对象
 * @default
 * @example
 **/
export interface PddDdkThemeGoodsSearchThemeListGetResponseGoodsListResponseInterface {
  /**
   * @description: 商品一~四级类目ID列表
   * @type: number[]
   * @default:
   **/
  cat_ids: number[];

  /**
   * @description: 优惠券面额,单位为分
   * @type: string | number
   * @default:
   **/
  coupon_discount: string | number;

  /**
   * @description: 优惠券失效时间,UNIX时间戳
   * @type: string | number
   * @default:
   **/
  coupon_end_time: string | number;

  /**
   * @description: 优惠券门槛价格,单位为分
   * @type: string | number
   * @default:
   **/
  coupon_min_order_amount: string | number;

  /**
   * @description: 优惠券剩余数量
   * @type: string | number
   * @default:
   **/
  coupon_remain_quantity: string | number;

  /**
   * @description: 优惠券生效时间,UNIX时间戳
   * @type: string | number
   * @default:
   **/
  coupon_start_time: string | number;

  /**
   * @description: 优惠券总数量
   * @type: string | number
   * @default:
   **/
  coupon_total_quantity: string | number;

  /**
   * @description: 描述分
   * @type: string
   * @default:
   **/
  desc_txt: string;

  /**
   * @description: 商品描述
   * @type: string
   * @default:
   **/
  goods_desc: string;

  /**
   * @description: 商品详情图列表
   * @type: string[]
   * @default:
   **/
  goods_gallery_urls: string[];

  /**
   * @description: 商品编码
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 商品主图
   * @type: string
   * @default:
   **/
  goods_image_url: string;

  /**
   * @description: 商品名称
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 商品缩略图
   * @type: string
   * @default:
   **/
  goods_thumbnail_url: string;

  /**
   * @description: 商品是否带券,true-带券,false-不带券
   * @type: boolean
   * @default:
   **/
  has_coupon: boolean;

  /**
   * @description: 物流分
   * @type: string
   * @default:
   **/
  lgst_txt: string;

  /**
   * @description: 店铺名称
   * @type: string
   * @default:
   **/
  mall_name: string;

  /**
   * @description: 最小拼团价格,单位为分
   * @type: string | number
   * @default:
   **/
  min_group_price: string | number;

  /**
   * @description: 最小单买价格,单位为分
   * @type: string | number
   * @default:
   **/
  min_normal_price: string | number;

  /**
   * @description: 商品标签类目ID,使用pdd.goods.opt.get获取
   * @type: string | number
   * @default:
   **/
  opt_id: string | number;

  /**
   * @description: 商品标签名
   * @type: string
   * @default:
   **/
  opt_name: string;

  /**
   * @description: 佣金比例,千分比
   * @type: string | number
   * @default:
   **/
  promotion_rate: string | number;

  /**
   * @description: 已售卖件数
   * @type: string
   * @default:
   **/
  sales_tip: string;

  /**
   * @description: 服务分
   * @type: string
   * @default:
   **/
  serv_txt: string;
}
