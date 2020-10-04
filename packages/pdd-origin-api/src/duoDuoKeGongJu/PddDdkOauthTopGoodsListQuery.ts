export const PDD_DDK_OAUTH_TOP_GOODS_LIST_QUERY = 'pdd.ddk.oauth.top.goods.list.query';
export const PDD_DDK_OAUTH_TOP_GOODS_LIST_QUERY_RESPONSE_KEY = 'top_goods_list_get_response';

/**
 * 接口名称：多多客工具获取爆款排行商品接口
 * 接口标识：pdd.ddk.oauth.top.goods.list.query
 * 接口使用场景：获取热销商品列表
 **/
export interface PddDdkOauthTopGoodsListQueryRequestInterface {
  /**
   * @description: 请求数量；默认值 ： 400
   * @type: number
   * @default:
   **/
  limit?: number;

  /**
   * @description: 翻页时建议填写前页返回的list_id值
   * @type: string
   * @default:
   **/
  list_id?: string;

  /**
   * @description: 从多少位置开始请求；默认值 ： 0
   * @type: number
   * @default:
   **/
  offset?: number;

  /**
   * @description: 推广位id
   * @type: string
   * @default:
   **/
  p_id?: string;

  /**
   * @description: 1-实时热销榜；2-实时收益榜
   * @type: number
   * @default:
   **/
  sort_type?: number;

  /**
   * @description: 自定义参数，为链接打上自定义标签；自定义参数最长限制64个字节；格式为： {"uid":"11111","sid":"22222","new":1} ，其中 uid 为用户唯一标识，可自行加密后传入，每个用户仅且对应一个标识，必填； sid 为上下文信息标识，例如sessionId等，非必填。new字段标识是否是新用户，如果为新用户，uid请传入用户唯一标识，例如小程序的openid、app的设备号等（可自行加密）。该json字符串中也可以加入其他自定义的key。
   * @type: string
   * @default:
   **/
  custom_parameters?: string;
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
   * @description: 翻页时建议填写前页返回的list_id值
   * @type: string
   * @default:
   **/
  list_id: string;

  /**
   * @description: 搜索id，建议生成推广链接时候填写，提高收益
   * @type: string
   * @default:
   **/
  search_id: string;

  /**
   * @description: 返回商品总数
   * @type: string | number
   * @default:
   **/
  total: string | number;
}

/**
 * @description 商品列表
 * @default
 * @example
 **/
export interface PddDdkOauthTopGoodsListQueryTopGoodsListGetResponseListResponseInterface {
  /**
   * @description: 商品类目id
   * @type: Array<string | number>
   * @default:
   **/
  cat_ids: Array<string | number>;

  /**
   * @description: 优惠券面额，单位为分
   * @type: string | number
   * @default:
   **/
  coupon_discount: string | number;

  /**
   * @description: 优惠券失效时间，UNIX时间戳
   * @type: string | number
   * @default:
   **/
  coupon_end_time: string | number;

  /**
   * @description: 优惠券门槛价格，单位为分
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
   * @description: 优惠券生效时间，UNIX时间戳
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
   * @description: 商品轮播图
   * @type: string[]
   * @default:
   **/
  goods_gallery_urls: string[];

  /**
   * @description: 商品id
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
   * @description: 服务分
   * @type: string
   * @default:
   **/
  lgst_txt: string;

  /**
   * @description: 店铺id
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;

  /**
   * @description: 店铺名字
   * @type: string
   * @default:
   **/
  mall_name: string;

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
   * @description: 商品标签ID，使用pdd.goods.opts.get接口获取
   * @type: string | number
   * @default:
   **/
  opt_id: string | number;

  /**
   * @description: 商品标签id
   * @type: Array<string | number>
   * @default:
   **/
  opt_ids: Array<string | number>;

  /**
   * @description: 商品标签名
   * @type: string
   * @default:
   **/
  opt_name: string;

  /**
   * @description: 佣金比例，千分比
   * @type: string | number
   * @default:
   **/
  promotion_rate: string | number;

  /**
   * @description: 搜索id，建议生成推广链接时候填写，提高收益
   * @type: string
   * @default:
   **/
  search_id: string;

  /**
   * @description: 物流分
   * @type: string
   * @default:
   **/
  serv_txt: string;

  /**
   * @description: 已售卖件数
   * @type: string | number
   * @default:
   **/
  sold_quantity: string | number;

  /**
   * @description: 比价行为预判定佣金，需要用户备案
   * @type: string | number
   * @default:
   **/
  predict_promotion_rate: string | number;
}
