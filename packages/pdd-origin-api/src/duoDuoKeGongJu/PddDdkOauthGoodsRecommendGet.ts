export const PDD_DDK_OAUTH_GOODS_RECOMMEND_GET = 'pdd.ddk.oauth.goods.recommend.get';
export const PDD_DDK_OAUTH_GOODS_RECOMMEND_GET_RESPONSE_KEY = 'goods_basic_detail_response';

/**
 * 接口名称：运营频道商品查询API
 * 接口标识：pdd.ddk.oauth.goods.recommend.get
 * 接口使用场景：运营频道商品查询
 **/
export interface PddDdkOauthGoodsRecommendGetRequestInterface {
  /**
   * @description: 频道类型；0, "1.9包邮", 1, "今日爆款", 2, "品牌清仓", 3, "默认商城", 非必填 ,默认是1
   * @type: number
   * @default:
   **/
  channel_type?: number;

  /**
   * @description: 自定义参数，为链接打上自定义标签；自定义参数最长限制64个字节；格式为： {"uid":"11111","sid":"22222","new":1} ，其中 uid 为用户唯一标识，可自行加密后传入，每个用户仅且对应一个标识，必填； sid 为上下文信息标识，例如sessionId等，非必填。new字段标识是否是新用户，如果为新用户，uid请传入用户唯一标识，例如小程序的openid、app的设备号等（可自行加密）。该json字符串中也可以加入其他自定义的key。
   * @type: string
   * @default:
   **/
  custom_parameters?: string;

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
  pid?: string;
}

/**
 * 接口名称：运营频道商品查询API
 * 接口标识：pdd.ddk.oauth.goods.recommend.get
 * 接口使用场景：运营频道商品查询
 **/
export interface PddDdkOauthGoodsRecommendGetResponseInterface {
  /**
   * @description: goods_basic_detail_response
   * @type: PddDdkOauthGoodsRecommendGetGoodsBasicDetailResponseResponseInterface
   * @default:
   *
   **/
  goods_basic_detail_response: PddDdkOauthGoodsRecommendGetGoodsBasicDetailResponseResponseInterface;
}

/**
 * @description goods_basic_detail_response
 * @default
 * @example
 **/
export interface PddDdkOauthGoodsRecommendGetGoodsBasicDetailResponseResponseInterface {
  /**
   * @description: 列表
   * @type: PddDdkOauthGoodsRecommendGetGoodsBasicDetailResponseListResponseInterface[]
   * @default:
   *
   **/
  list: PddDdkOauthGoodsRecommendGetGoodsBasicDetailResponseListResponseInterface[];

  /**
   * @description: 翻页时必填前页返回的list_id值
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
   * @description: total
   * @type: number
   * @default:
   **/
  total: number;
}

/**
 * @description 列表
 * @default
 * @example
 **/
export interface PddDdkOauthGoodsRecommendGetGoodsBasicDetailResponseListResponseInterface {
  /**
   * @description: 类目id
   * @type: string
   * @default:
   **/
  category_id: string;

  /**
   * @description: 分类名称
   * @type: string
   * @default:
   **/
  category_name: string;

  /**
   * @description: 商品类目id
   * @type: string
   * @default:
   **/
  cat_id: string;

  /**
   * @description: 商品一~四级类目ID列表
   * @type: Array<string | number>
   * @default:
   **/
  cat_ids: Array<string | number>;

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
   * @description: 优惠券金额
   * @type: string | number
   * @default:
   **/
  coupon_price: string | number;

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
   * @description: 创建时间
   * @type: string | number
   * @default:
   **/
  create_at: string | number;

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
   * @type: string
   * @default:
   **/
  goods_gallery_urls: string;

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
   * @description: 商品等级
   * @type: string | number
   * @default:
   **/
  goods_rate: string | number;

  /**
   * @description: 商品缩略图
   * @type: string
   * @default:
   **/
  goods_thumbnail_url: string;

  /**
   * @description: 商品类型
   * @type: number
   * @default:
   **/
  goods_type: number;

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
   * @description: 商家id
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;

  /**
   * @description: 店铺名称
   * @type: string
   * @default:
   **/
  mall_name: string;

  /**
   * @description: 市场服务费
   * @type: string | number
   * @default:
   **/
  market_fee: string | number;

  /**
   * @description: 商家类型
   * @type: string
   * @default:
   **/
  merchant_type: string;

  /**
   * @description: 最小成团价格，单位分
   * @type: string | number
   * @default:
   **/
  min_group_price: string | number;

  /**
   * @description: 最小单买价格，单位分
   * @type: string | number
   * @default:
   **/
  min_normal_price: string | number;

  /**
   * @description: 商品标签类目ID,使用pdd.goods.opt.get获取
   * @type: string
   * @default:
   **/
  opt_id: string;

  /**
   * @description: 商品一~四级标签类目ID列表
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
   * @description: 佣金比例,千分比
   * @type: string | number
   * @default:
   **/
  promotion_rate: string | number;

  /**
   * @description: 销售量
   * @type: string
   * @default:
   **/
  sales_tip: string;

  /**
   * @description: 搜索id，建议生成推广链接时候填写，提高收益
   * @type: string
   * @default:
   **/
  search_id: string;

  /**
   * @description: 服务分
   * @type: string
   * @default:
   **/
  serv_txt: string;

  /**
   * @description: 分享描述
   * @type: string
   * @default:
   **/
  share_desc: string;

  /**
   * @description: 比价行为预判定佣金，需要用户备案
   * @type: string | number
   * @default:
   **/
  predict_promotion_rate: string | number;
}
