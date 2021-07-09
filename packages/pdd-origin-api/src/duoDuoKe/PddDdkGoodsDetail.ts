export const PDD_DDK_GOODS_DETAIL = 'pdd.ddk.goods.detail';
export const PDD_DDK_GOODS_DETAIL_RESPONSE_KEY = 'goods_detail_response';
export const PDD_DDK_GOODS_DETAIL_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 10,
    times: 66900,
  },
];

/**
 * 接口名称：多多进宝商品详情查询
 * 接口标识：pdd.ddk.goods.detail
 * 接口使用场景：查询多多进宝商品详情
 **/
export interface PddDdkGoodsDetailRequestInterface {
  /**
   * @description: 自定义参数，为链接打上自定义标签；自定义参数最长限制64个字节；格式为：  {"uid":"11111","sid":"22222"} ，其中 uid 用户唯一标识，可自行加密后传入，每个用户仅且对应一个标识，必填； sid 上下文信息标识，例如sessionId等，非必填。该json字符串中也可以加入其他自定义的key。（如果使用GET请求，请使用URLEncode处理参数）
   * @type: string
   * @default:
   **/
  custom_parameters?: string;

  /**
   * @description: 商品主图类型：1-场景图，2-白底图，默认为0
   * @type: number
   * @default:
   **/
  goods_img_type?: number;

  /**
   * @description: 商品goodsSign，支持通过goodsSign查询商品。goodsSign是加密后的goodsId, goodsId已下线，请使用goodsSign来替代。使用说明：https://jinbao.pinduoduo.com/qa-system?questionId=252
   * @type: string
   * @default:
   **/
  goods_sign?: string;

  /**
   * @description: 推广位id
   * @type: string
   * @default:
   **/
  pid?: string;

  /**
   * @description: 搜索id，建议填写，提高收益。来自pdd.ddk.goods.recommend.get、pdd.ddk.goods.search、pdd.ddk.top.goods.list.query等接口
   * @type: string
   * @default:
   **/
  search_id?: string;

  /**
   * @description: 招商多多客ID
   * @type: string | number
   * @default:
   **/
  zs_duo_id?: string | number;
}

/**
 * 接口名称：多多进宝商品详情查询
 * 接口标识：pdd.ddk.goods.detail
 * 接口使用场景：查询多多进宝商品详情
 **/
export interface PddDdkGoodsDetailResponseInterface {
  /**
   * @description: response
   * @type: PddDdkGoodsDetailGoodsDetailResponseResponseInterface
   * @default:
   *
   **/
  goods_detail_response: PddDdkGoodsDetailGoodsDetailResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddDdkGoodsDetailGoodsDetailResponseResponseInterface {
  /**
   * @description: 多多进宝商品对象列表
   * @type: PddDdkGoodsDetailGoodsDetailResponseGoodsDetailsResponseInterface[]
   * @default:
   *
   **/
  goods_details: PddDdkGoodsDetailGoodsDetailResponseGoodsDetailsResponseInterface[];
}

/**
 * @description 多多进宝商品对象列表
 * @default
 * @example
 **/
export interface PddDdkGoodsDetailGoodsDetailResponseGoodsDetailsResponseInterface {
  /**
   * @description: 活动佣金比例，千分比（特定活动期间的佣金比例）
   * @type: string | number
   * @default:
   **/
  activity_promotion_rate: string | number;

  /**
   * @description: 商品活动标记数组，例：[4,7]，4-秒杀 7-百亿补贴等
   * @type: number[]
   * @default:
   **/
  activity_tags: number[];

  /**
   * @description: 商品品牌词信息，如“苹果”、“阿迪达斯”、“李宁”等
   * @type: string
   * @default:
   **/
  brand_name: string;

  /**
   * @description: 商品类目ID，使用pdd.goods.cats.get接口获取
   * @type: string | number
   * @default:
   **/
  cat_id: string | number;

  /**
   * @description: 商品一~四级类目ID列表
   * @type: number[]
   * @default:
   **/
  cat_ids: number[];

  /**
   * @description: 店铺收藏券id
   * @type: string
   * @default:
   **/
  clt_cpn_batch_sn: string;

  /**
   * @description: 店铺收藏券面额,单位为分
   * @type: string | number
   * @default:
   **/
  clt_cpn_discount: string | number;

  /**
   * @description: 店铺收藏券截止时间
   * @type: string | number
   * @default:
   **/
  clt_cpn_end_time: string | number;

  /**
   * @description: 店铺收藏券使用门槛价格,单位为分
   * @type: string | number
   * @default:
   **/
  clt_cpn_min_amt: string | number;

  /**
   * @description: 店铺收藏券总量
   * @type: string | number
   * @default:
   **/
  clt_cpn_quantity: string | number;

  /**
   * @description: 店铺收藏券剩余量
   * @type: string | number
   * @default:
   **/
  clt_cpn_remain_quantity: string | number;

  /**
   * @description: 店铺收藏券起始时间
   * @type: string | number
   * @default:
   **/
  clt_cpn_start_time: string | number;

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
   * @description: 优惠券门槛金额，单位为分
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
   * @description: 创建时间（unix时间戳）
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
   * @description: 参与多多进宝的商品描述
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
   * @description: 多多进宝商品主图
   * @type: string
   * @default:
   **/
  goods_image_url: string;

  /**
   * @description: 参与多多进宝的商品标题
   * @type: string
   * @default:
   **/
  goods_name: string;

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
   * @description: 商品是否有优惠券 true-有，false-没有
   * @type: boolean
   * @default:
   **/
  has_coupon: boolean;

  /**
   * @description: 是否有店铺券
   * @type: boolean
   * @default:
   **/
  has_mall_coupon: boolean;

  /**
   * @description: 物流分
   * @type: string
   * @default:
   **/
  lgst_txt: string;

  /**
   * @description: 店铺折扣
   * @type: number
   * @default:
   **/
  mall_coupon_discount_pct: number;

  /**
   * @description: 店铺券使用结束时间
   * @type: string | number
   * @default:
   **/
  mall_coupon_end_time: string | number;

  /**
   * @description: 最大使用金额
   * @type: number
   * @default:
   **/
  mall_coupon_max_discount_amount: number;

  /**
   * @description: 最小使用金额
   * @type: number
   * @default:
   **/
  mall_coupon_min_order_amount: number;

  /**
   * @description: 店铺券余量
   * @type: string | number
   * @default:
   **/
  mall_coupon_remain_quantity: string | number;

  /**
   * @description: 店铺券使用开始时间
   * @type: string | number
   * @default:
   **/
  mall_coupon_start_time: string | number;

  /**
   * @description: 店铺券总量
   * @type: string | number
   * @default:
   **/
  mall_coupon_total_quantity: string | number;

  /**
   * @description: 该商品所在店铺是否参与全店推广，0：否，1：是
   * @type: number
   * @default:
   **/
  mall_cps: number;

  /**
   * @description: 商家id
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;

  /**
   * @description: 店铺logo图
   * @type: string
   * @default:
   **/
  mall_img_url: string;

  /**
   * @description: 店铺名称
   * @type: string
   * @default:
   **/
  mall_name: string;

  /**
   * @description: 店铺类型，1-个人，2-企业，3-旗舰店，4-专卖店，5-专营店，6-普通店（未传为全部）
   * @type: number
   * @default:
   **/
  merchant_type: number;

  /**
   * @description: 最低价sku的拼团价，单位为分
   * @type: string | number
   * @default:
   **/
  min_group_price: string | number;

  /**
   * @description: 最低价sku的单买价，单位为分
   * @type: string | number
   * @default:
   **/
  min_normal_price: string | number;

  /**
   * @description: 快手专享
   * @type: boolean
   * @default:
   **/
  only_scene_auth: boolean;

  /**
   * @description: 商品标签ID，使用pdd.goods.opt.get接口获取
   * @type: string | number
   * @default:
   **/
  opt_id: string | number;

  /**
   * @description: 商品标签ID
   * @type: number[]
   * @default:
   **/
  opt_ids: number[];

  /**
   * @description: 商品标签名称
   * @type: string
   * @default:
   **/
  opt_name: string;

  /**
   * @description: 推广计划类型: 1-全店推广 2-单品推广 3-定向推广 4-招商推广 5-分销推广
   * @type: number
   * @default:
   **/
  plan_type: number;

  /**
   * @description: 比价行为预判定佣金，需要用户备案
   * @type: string | number
   * @default:
   **/
  predict_promotion_rate: string | number;

  /**
   * @description: 佣金比例，千分比
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
   * @description: 服务标签: 4-送货入户并安装,5-送货入户,6-电子发票,9-坏果包赔,11-闪电退款,12-24小时发货,13-48小时发货,17-顺丰包邮,18-只换不修,1可定制化,29-预约配送,1000001-正品发票,1000002-送货入户并安装
   * @type: number[]
   * @default:
   **/
  service_tags: number[];

  /**
   * @description: 服务分
   * @type: string
   * @default:
   **/
  serv_txt: string;

  /**
   * @description: 招商分成服务费比例，千分比
   * @type: number
   * @default:
   **/
  share_rate: number;

  /**
   * @description: 优势渠道专属商品补贴金额，单位为分。针对优质渠道的补贴活动，指定优势渠道可通过推广该商品获取相应补贴。补贴活动入口：[进宝网站-官方活动-千万补贴]，报名入口：https://jinbao.pinduoduo.com/ten-million-subsidy/entry
   * @type: number
   * @default:
   **/
  subsidy_amount: number;

  /**
   * @description: 千万补贴给渠道的收入补贴，不允许直接给下级代理展示，单位为分
   * @type: number
   * @default:
   **/
  subsidy_duo_amount_ten_million: number;

  /**
   * @description: 优惠标签列表，包括："X元券","比全网低X元","服务费","精选素材","近30天低价","同款低价","同款好评","同款热销","旗舰店","一降到底","招商优选","商家优选","好价再降X元","全站销量XX","实时热销榜第X名","实时好评榜第X名","额外补X元"等
   * @type: string[]
   * @default:
   **/
  unified_tags: string[];

  /**
   * @description: 商品视频url
   * @type: string[]
   * @default:
   **/
  video_urls: string[];

  /**
   * @description: 招商团长id
   * @type: string | number
   * @default:
   **/
  zs_duo_id: string | number;
}
