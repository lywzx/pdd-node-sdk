export const PDD_DDK_OAUTH_TOP_GOODS_LIST_QUERY = 'pdd.ddk.oauth.top.goods.list.query';
export const PDD_DDK_OAUTH_TOP_GOODS_LIST_QUERY_RESPONSE_KEY = 'top_goods_list_get_response';

/**
 * 接口名称：多多客工具获取爆款排行商品接口
 * 接口标识：pdd.ddk.oauth.top.goods.list.query
 * 接口使用场景：获取热销商品列表
 **/
export interface PddDdkOauthTopGoodsListQueryRequestInterface {
  /**
   * @description: 推广位id
   * @type: string
   * @default:
   **/
  p_id: string;

  /**
   * @description: 从多少位置开始请求；默认值 ： 0
   * @type: number
   * @default:
   **/
  offset: number;

  /**
   * @description: 1-实时热销榜；2-实时收益榜
   * @type: number
   * @default:
   **/
  sort_type: number;

  /**
   * @description: 请求数量；默认值 ： 400
   * @type: number
   * @default:
   **/
  limit: number;
}

/**
 * 接口名称：多多客工具获取爆款排行商品接口
 * 接口标识：pdd.ddk.oauth.top.goods.list.query
 * 接口使用场景：获取热销商品列表
 **/
export interface PddDdkOauthTopGoodsListQueryResponseInterface {
  /**
   * @description: response
   * @type: PddDdkOauthTopGoodsListQueryTopGoodsListGetResponseResponseInterface
   * @default:
   *
   **/
  top_goods_list_get_response: PddDdkOauthTopGoodsListQueryTopGoodsListGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddDdkOauthTopGoodsListQueryTopGoodsListGetResponseResponseInterface {
  /**
   * @description: 商品列表
   * @type: PddDdkOauthTopGoodsListQueryTopGoodsListGetResponseListResponseInterface[]
   * @default:
   *
   **/
  list: PddDdkOauthTopGoodsListQueryTopGoodsListGetResponseListResponseInterface[];

  /**
   * @description: 返回商品总数
   * @type: string | number
   * @default:
   **/
  total: string | number;

  /**
   * @description: 搜索id
   * @type: string
   * @default:
   **/
  search_id: string;
}

/**
 * @description 商品列表
 * @default
 * @example
 **/
export interface PddDdkOauthTopGoodsListQueryTopGoodsListGetResponseListResponseInterface {
  /**
   * @description: 商品id
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
   * @description: 商品描述
   * @type: string
   * @default:
   **/
  goods_desc: string;

  /**
   * @description: 商品缩略图
   * @type: string
   * @default:
   **/
  goods_thumbnail_url: string;

  /**
   * @description: 商品主图
   * @type: string
   * @default:
   **/
  goods_image_url: string;

  /**
   * @description: 商品轮播图
   * @type: string[]
   * @default:
   **/
  goods_gallery_urls: string[];

  /**
   * @description: 已售卖件数
   * @type: string | number
   * @default:
   **/
  sales_tip: string | number;

  /**
   * @description: 最小拼团价（单位为分）
   * @type: string | number
   * @default:
   **/
  min_group_price: string | number;

  /**
   * @description: 最小单买价格（单位为分）
   * @type: string | number
   * @default:
   **/
  min_normal_price: string | number;

  /**
   * @description: 店铺名字
   * @type: string
   * @default:
   **/
  mall_name: string;

  /**
   * @description: 店铺类型，1-个人，2-企业，3-旗舰店，4-专卖店，5-专营店，6-普通店
   * @type: number
   * @default:
   **/
  merchant_type: number;

  /**
   * @description: 商品类目ID，使用pdd.goods.cats.get接口获取
   * @type: string | number
   * @default:
   **/
  category_id: string | number;

  /**
   * @description: 商品类目名
   * @type: string
   * @default:
   **/
  category_name: string;

  /**
   * @description: 商品标签ID，使用pdd.goods.opts.get接口获取
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
   * @description: 商品标签id
   * @type: Array<string | number>
   * @default:
   **/
  opt_ids: Array<string | number>;

  /**
   * @description: 商品类目id
   * @type: Array<string | number>
   * @default:
   **/
  cat_ids: Array<string | number>;

  /**
   * @description: 该商品所在店铺是否参与全店推广，0：否，1：是
   * @type: number
   * @default:
   **/
  mall_cps: number;

  /**
   * @description: 商品是否有优惠券 true-有，false-没有
   * @type: boolean
   * @default:
   **/
  has_coupon: boolean;

  /**
   * @description: 优惠券门槛价格，单位为分
   * @type: string | number
   * @default:
   **/
  coupon_min_order_amount: string | number;

  /**
   * @description: 优惠券面额，单位为分
   * @type: string | number
   * @default:
   **/
  coupon_discount: string | number;

  /**
   * @description: 优惠券总数量
   * @type: string | number
   * @default:
   **/
  coupon_total_quantity: string | number;

  /**
   * @description: 优惠券剩余数量
   * @type: string | number
   * @default:
   **/
  coupon_remain_quantity: string | number;

  /**
   * @description: 优惠券生效时间，UNIX时间戳
   * @type: string | number
   * @default:
   **/
  coupon_start_time: string | number;

  /**
   * @description: 优惠券失效时间，UNIX时间戳
   * @type: string | number
   * @default:
   **/
  coupon_end_time: string | number;

  /**
   * @description: 佣金比例，千分比
   * @type: string | number
   * @default:
   **/
  promotion_rate: string | number;

  /**
   * @description: 商品评价数量
   * @type: string | number
   * @default:
   **/
  goods_eval_count: string | number;

  /**
   * @description: 描述分
   * @type: string
   * @default:
   **/
  desc_txt: string;

  /**
   * @description: 服务分
   * @type: string
   * @default:
   **/
  serv_txt: string;

  /**
   * @description: 物流分
   * @type: string
   * @default:
   **/
  lgst_txt: string;

  /**
   * @description: 搜索id
   * @type: string
   * @default:
   **/
  search_id: string;
}
