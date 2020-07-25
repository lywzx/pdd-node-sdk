export const PDD_DDK_GOODS_RECOMMEND_GET = 'pdd.ddk.goods.recommend.get';
export const PDD_DDK_GOODS_RECOMMEND_GET_RESPONSE_KEY = 'goods_basic_detail_response';

/**
 * 接口名称：多多进宝商品推荐API
 * 接口标识：pdd.ddk.goods.recommend.get
 * 接口使用场景：多多进宝商品推荐API
 **/
export interface PddDdkGoodsRecommendGetRequestInterface {
  /**
   * @description: 0-1.9包邮, 1-今日爆款, 2-品牌清仓,3-相似商品推荐,4-猜你喜欢,5-实时热销,6-实时收益,7-今日畅销,8-高佣榜单，默认1
   * @type: number
   * @default:
   **/
  channel_type?: number;

  /**
   * @description: 自定义参数，为链接打上自定义标签；自定义参数最长限制64个字节；格式为：  {"uid":"11111","sid":"22222"} ，其中 uid 用户唯一标识，可自行加密后传入，每个用户仅且对应一个标识，必填； sid 上下文信息标识，例如sessionId等，非必填。该json字符串中也可以加入其他自定义的key
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
   * @description: 从多少位置开始请求；默认值 ： 0，offset需是limit的整数倍，仅支持整页翻页
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

  /**
   * @description: 猜你喜欢场景的商品类目，20100-百货，20200-母婴，20300-食品，20400-女装，20500-电器，20600-鞋包，20700-内衣，20800-美妆，20900-男装，21000-水果，21100-家纺，21200-文具,21300-运动,21400-虚拟,21500-汽车,21600-家装,21700-家具,21800-医药;
   * @type: string | number
   * @default:
   **/
  cat_id?: string | number;

  /**
   * @description: 相似商品推荐场景时必传。商品Id，请求相似商品时，仅取数组的第一位
   * @type: Array<string | number>
   * @default:
   **/
  goods_ids?: Array<string | number>;
}

/**
 * 接口名称：多多进宝商品推荐API
 * 接口标识：pdd.ddk.goods.recommend.get
 * 接口使用场景：多多进宝商品推荐API
 **/
export interface PddDdkGoodsRecommendGetResponseInterface {
  /**
   * @description: goods_basic_detail_response
   * @type: PddDdkGoodsRecommendGetGoodsBasicDetailResponseResponseInterface
   * @default:
   *
   **/
  goods_basic_detail_response: PddDdkGoodsRecommendGetGoodsBasicDetailResponseResponseInterface;
}

/**
 * @description goods_basic_detail_response
 * @default
 * @example
 **/
export interface PddDdkGoodsRecommendGetGoodsBasicDetailResponseResponseInterface {
  /**
   * @description: 列表
   * @type: PddDdkGoodsRecommendGetGoodsBasicDetailResponseListResponseInterface[]
   * @default:
   *
   **/
  list: PddDdkGoodsRecommendGetGoodsBasicDetailResponseListResponseInterface[];

  /**
   * @description: 翻页时必填前页返回的list_id值
   * @type: string
   * @default:
   **/
  list_id: string;

  /**
   * @description: 搜索id，建议生成推广链接时候填写，提高收益。
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
export interface PddDdkGoodsRecommendGetGoodsBasicDetailResponseListResponseInterface {
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
   * @description: 商品实际价格
   * @type: string | number
   * @default:
   **/
  goods_fact_price: string | number;

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
   * @description: 商品标准价格
   * @type: string | number
   * @default:
   **/
  goods_mark_price: string | number;

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
   * @description: 二维码主图
   * @type: string
   * @default:
   **/
  qr_code_image_url: string;

  /**
   * @description: 销售量
   * @type: string
   * @default:
   **/
  sales_tip: string;

  /**
   * @description: 搜索id，建议生成推广链接时候填写，提高收益。
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
}