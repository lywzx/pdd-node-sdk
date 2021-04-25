export const PDD_DDK_GOODS_RECOMMEND_GET = 'pdd.ddk.goods.recommend.get';
export const PDD_DDK_GOODS_RECOMMEND_GET_RESPONSE_KEY = 'goods_basic_detail_response';
export const PDD_DDK_GOODS_RECOMMEND_GET_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 50,
    times: 33450,
  },
];

/**
 * 接口名称：多多进宝商品推荐API
 * 接口标识：pdd.ddk.goods.recommend.get
 * 接口使用场景：多多进宝商品推荐API
 **/
export interface PddDdkGoodsRecommendGetRequestInterface {
  /**
   * @description: 活动商品标记数组，例：[4,7]，4-秒杀，7-百亿补贴，10851-千万补贴，31-品牌黑标，10564-精选爆品-官方直推爆款，10584-精选爆品-团长推荐，24-品牌高佣，其他的值请忽略
   * @type: number[]
   * @default:
   **/
  activity_tags?: number[];

  /**
   * @description: 猜你喜欢场景的商品类目，20100-百货，20200-母婴，20300-食品，20400-女装，20500-电器，20600-鞋包，20700-内衣，20800-美妆，20900-男装，21000-水果，21100-家纺，21200-文具,21300-运动,21400-虚拟,21500-汽车,21600-家装,21700-家具,21800-医药;
   * @type: string | number
   * @default:
   **/
  cat_id?: string | number;

  /**
   * @description: 进宝频道推广商品: 1-今日销量榜,3-相似商品推荐,4-猜你喜欢(和进宝网站精选一致),5-实时热销榜,6-实时收益榜。默认值5
   * @type: number
   * @default:
   **/
  channel_type?: number;

  /**
   * @description: 自定义参数，为链接打上自定义标签；自定义参数最长限制64个字节；格式为： {"uid":"11111","sid":"22222"} ，其中 uid 为用户唯一标识，可自行加密后传入，每个用户仅且对应一个标识，必填； sid 为上下文信息标识，例如sessionId等，非必填。该json字符串中也可以加入其他自定义的key。
   * @type: string
   * @default:
   **/
  custom_parameters?: string;

  /**
   * @description: 商品goodsSign列表，相似商品推荐场景时必传，仅取数组的第一位，例如：["c9r2omogKFFAc7WBwvbZU1ikIb16_J3CTa8HNN"]。goodsSign是加密后的goodsId, goodsId已下线，请使用goodsSign来替代。使用说明：https://jinbao.pinduoduo.com/qa-system?questionId=252
   * @type: string[]
   * @default:
   **/
  goods_sign_list?: string[];

  /**
   * @description: 一页请求数量；默认值 ： 20
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
   * @description: 商品活动标记数组，例：[4,7]，4-秒杀 7-百亿补贴等
   * @type: number[]
   * @default:
   **/
  activity_tags: number[];

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
   * @description: 额外优惠券
   * @type: string | number
   * @default:
   **/
  extra_coupon_amount: string | number;

  /**
   * @description: 商品描述
   * @type: string
   * @default:
   **/
  goods_desc: string;

  /**
   * @description: 商品主图
   * @type: string
   * @default:
   **/
  goods_image_url: string;

  /**
   * @description: 商品特殊标签列表。例: [1]，1-APP专享
   * @type: number[]
   * @default:
   **/
  goods_labels: number[];

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
   * @description: 商品goodsSign，支持通过goodsSign查询商品。goodsSign是加密后的goodsId, goodsId已下线，请使用goodsSign来替代。使用说明：https://jinbao.pinduoduo.com/qa-system?questionId=252
   * @type: string
   * @default:
   **/
  goods_sign: string;

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
   * @description: 比价行为预判定佣金，需要用户备案
   * @type: string | number
   * @default:
   **/
  predict_promotion_rate: string | number;

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
   * @description: 商品近1小时在多多进宝的实时销量（仅实时热销榜提供）
   * @type: string
   * @default:
   **/
  realtime_sales_tip: string;

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

  /**
   * @description: 招商分成服务费比例，千分比
   * @type: number
   * @default:
   **/
  share_rate: number;

  /**
   * @description: 优势渠道专属商品补贴金额。针对优质渠道的补贴活动，指定优势渠道可通过推广该商品获取相应补贴。补贴活动入口：[进宝网站-官方活动-千万补贴]，报名入口：https://jinbao.pinduoduo.com/ten-million-subsidy/entry
   * @type: number
   * @default:
   **/
  subsidy_amount: number;

  /**
   * @description: 优惠标签列表，包括："X元券","比全网低X元","服务费","精选素材","近30天低价","同款低价","同款好评","同款热销","旗舰店","一降到底","招商优选","商家优选","好价再降X元","全站销量XX","实时热销榜第X名","实时好评榜第X名","额外补X元"等
   * @type: string[]
   * @default:
   **/
  unified_tags: string[];
}
