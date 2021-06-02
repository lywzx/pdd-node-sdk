export const PDD_DDK_GOODS_SEARCH = 'pdd.ddk.goods.search';
export const PDD_DDK_GOODS_SEARCH_RESPONSE_KEY = 'goods_search_response';
export const PDD_DDK_GOODS_SEARCH_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 10,
    times: 66900,
  },
];

/**
 * 接口名称：多多进宝商品查询
 * 接口标识：pdd.ddk.goods.search
 * 接口使用场景：多多进宝商品查询
 **/
export interface PddDdkGoodsSearchRequestInterface {
  /**
   * @description: 活动商品标记数组，例：[4,7]，4-秒杀，7-百亿补贴，10851-千万补贴，31-品牌黑标，10564-精选爆品-官方直推爆款，10584-精选爆品-团长推荐，24-品牌高佣，其他的值请忽略
   * @type: number[]
   * @default:
   **/
  activity_tags?: number[];

  /**
   * @description: 自定义屏蔽一级/二级/三级类目ID，自定义数量不超过20个;使用pdd.goods.cats.get接口获取cat_id
   * @type: number[]
   * @default:
   **/
  block_cats?: number[];

  /**
   * @description: 屏蔽商品类目包：1-拼多多小程序屏蔽的类目&关键词;2-虚拟类目;3-医疗器械;4-处方药;5-非处方药
   * @type: number[]
   * @default:
   **/
  block_cat_packages?: number[];

  /**
   * @description: 商品类目ID，使用pdd.goods.cats.get接口获取
   * @type: string | number
   * @default:
   **/
  cat_id?: string | number;

  /**
   * @description: 自定义参数，为链接打上自定义标签；自定义参数最长限制64个字节；格式为： {"uid":"11111","sid":"22222"} ，其中 uid 为用户唯一标识，可自行加密后传入，每个用户仅且对应一个标识，必填； sid 为上下文信息标识，例如sessionId等，非必填。该json字符串中也可以加入其他自定义的key。
   * @type: string
   * @default:
   **/
  custom_parameters?: string;

  /**
   * @description: 商品goodsSign列表，例如：["c9r2omogKFFAc7WBwvbZU1ikIb16_J3CTa8HNN"]，支持通过goodsSign查询商品。goodsSign是加密后的goodsId, goodsId已下线，请使用goodsSign来替代。使用说明：https://jinbao.pinduoduo.com/qa-system?questionId=252
   * @type: string[]
   * @default:
   **/
  goods_sign_list?: string[];

  /**
   * @description: 是否为品牌商品
   * @type: boolean
   * @default:
   **/
  is_brand_goods?: boolean;

  /**
   * @description: 商品关键词，与opt_id字段选填一个或全部填写。可支持goods_id、拼多多链接（即拼多多app商详的链接）、进宝长链/短链（即为pdd.ddk.goods.promotion.url.generate接口生成的长短链）
   * @type: string
   * @default:
   **/
  keyword?: string;

  /**
   * @description: 翻页时建议填写前页返回的list_id值
   * @type: string
   * @default:
   **/
  list_id?: string;

  /**
   * @description: 店铺类型，1-个人，2-企业，3-旗舰店，4-专卖店，5-专营店，6-普通店（未传为全部）
   * @type: number
   * @default:
   **/
  merchant_type?: number;

  /**
   * @description: 店铺类型数组，例如：[1,2]
   * @type: number[]
   * @default:
   **/
  merchant_type_list?: number[];

  /**
   * @description: 商品标签类目ID，使用pdd.goods.opt.get获取
   * @type: string | number
   * @default:
   **/
  opt_id?: string | number;

  /**
   * @description: 默认值1，商品分页数
   * @type: number
   * @default:
   **/
  page?: number;

  /**
   * @description: 默认100，每页商品数量
   * @type: number
   * @default:
   **/
  page_size?: number;

  /**
   * @description: 推广位id
   * @type: string
   * @default:
   **/
  pid?: string;

  /**
   * @description: 筛选范围列表 样例：[{"range_id":0,"range_from":1,"range_to":1500},{"range_id":1,"range_from":1,"range_to":1500}]
   * @type: PddDdkGoodsSearchRangeListRequestInterface[]
   * @default:
   *
   **/
  range_list?: PddDdkGoodsSearchRangeListRequestInterface[];

  /**
   * @description: 排序方式:0-综合排序;1-按佣金比率升序;2-按佣金比例降序;3-按价格升序;4-按价格降序;5-按销量升序;6-按销量降序;7-优惠券金额排序升序;8-优惠券金额排序降序;9-券后价升序排序;10-券后价降序排序;11-按照加入多多进宝时间升序;12-按照加入多多进宝时间降序;13-按佣金金额升序排序;14-按佣金金额降序排序;15-店铺描述评分升序;16-店铺描述评分降序;17-店铺物流评分升序;18-店铺物流评分降序;19-店铺服务评分升序;20-店铺服务评分降序;27-描述评分击败同类店铺百分比升序，28-描述评分击败同类店铺百分比降序，29-物流评分击败同类店铺百分比升序，30-物流评分击败同类店铺百分比降序，31-服务评分击败同类店铺百分比升序，32-服务评分击败同类店铺百分比降序
   * @type: number
   * @default:
   **/
  sort_type?: number;

  /**
   * @description: 是否只返回优惠券的商品，false返回所有商品，true只返回有优惠券的商品
   * @type: boolean
   * @default:
   **/
  with_coupon?: boolean;
}

/**
 * @description 筛选范围列表 样例：[{"range_id":0,"range_from":1,"range_to":1500},{"range_id":1,"range_from":1,"range_to":1500}]
 * @default
 * @example
 **/
export interface PddDdkGoodsSearchRangeListRequestInterface {
  /**
   * @description: 区间的开始值
   * @type: string | number
   * @default:
   **/
  range_from?: string | number;

  /**
   * @description: 0，最小成团价 1，券后价 2，佣金比例 3，优惠券价格 4，广告创建时间 5，销量 6，佣金金额 7，店铺描述分 8，店铺物流分 9，店铺服务分 10， 店铺描述分击败同行业百分比 11， 店铺物流分击败同行业百分比 12，店铺服务分击败同行业百分比 13，商品分 17 ，优惠券/最小团购价 18，过去两小时pv 19，过去两小时销量
   * @type: number
   * @default:
   **/
  range_id?: number;

  /**
   * @description: 区间的结束值
   * @type: string | number
   * @default:
   **/
  range_to?: string | number;
}

/**
 * 接口名称：多多进宝商品查询
 * 接口标识：pdd.ddk.goods.search
 * 接口使用场景：多多进宝商品查询
 **/
export interface PddDdkGoodsSearchResponseInterface {
  /**
   * @description: response
   * @type: PddDdkGoodsSearchGoodsSearchResponseResponseInterface
   * @default:
   *
   **/
  goods_search_response: PddDdkGoodsSearchGoodsSearchResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddDdkGoodsSearchGoodsSearchResponseResponseInterface {
  /**
   * @description: 商品列表
   * @type: PddDdkGoodsSearchGoodsSearchResponseGoodsListResponseInterface[]
   * @default:
   *
   **/
  goods_list: PddDdkGoodsSearchGoodsSearchResponseGoodsListResponseInterface[];

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
   * @description: 返回商品总数
   * @type: number
   * @default:
   **/
  total_count: number;
}

/**
 * @description 商品列表
 * @default
 * @example
 **/
export interface PddDdkGoodsSearchGoodsSearchResponseGoodsListResponseInterface {
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
   * @description: 活动类型，0-无活动;1-秒杀;3-限量折扣;12-限时折扣;13-大促活动;14-名品折扣;15-品牌清仓;16-食品超市;17-一元幸运团;18-爱逛街;19-时尚穿搭;20-男人帮;21-9块9;22-竞价活动;23-榜单活动;24-幸运半价购;25-定金预售;26-幸运人气购;27-特色主题活动;28-断码清仓;29-一元话费;30-电器城;31-每日好店;32-品牌卡;101-大促搜索池;102-大促品类分会场;
   * @type: number
   * @default:
   **/
  activity_type: number;

  /**
   * @description: 商品品牌词信息，如“苹果”、“阿迪达斯”、“李宁”等
   * @type: string
   * @default:
   **/
  brand_name: string;

  /**
   * @description: 商品类目id
   * @type: Array<string | number>
   * @default:
   **/
  cat_ids: Array<string | number>;

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
   * @description: 店铺券折扣
   * @type: number
   * @default:
   **/
  mall_coupon_discount_pct: number;

  /**
   * @description: 店铺券结束使用时间
   * @type: string | number
   * @default:
   **/
  mall_coupon_end_time: string | number;

  /**
   * @description: 店铺券id
   * @type: string | number
   * @default:
   **/
  mall_coupon_id: string | number;

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
   * @description: 店铺券开始使用时间
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
   * @description: 店铺类型，1-个人，2-企业，3-旗舰店，4-专卖店，5-专营店，6-普通店
   * @type: number
   * @default:
   **/
  merchant_type: number;

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
   * @description: 快手专享
   * @type: boolean
   * @default:
   **/
  only_scene_auth: boolean;

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
   * @description: 搜索id，建议生成推广链接时候填写，提高收益
   * @type: string
   * @default:
   **/
  search_id: string;

  /**
   * @description: 服务标签: 4-送货入户并安装,5-送货入户,6-电子发票,9-坏果包赔,11-闪电退款,12-24小时发货,13-48小时发货,17-顺丰包邮,18-只换不修,19-全国联保,20-分期付款,24-极速退款,25-品质保障,26-缺重包退,27-当日发货,28-可定制化,29-预约配送,1000001-正品发票,1000002-送货入户并安装
   * @type: Array<string | number>
   * @default:
   **/
  service_tags: Array<string | number>;

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
   * @description: 优惠标签列表，包括："X元券","比全网低X元","服务费","精选素材","近30天低价","同款低价","同款好评","同款热销","旗舰店","一降到底","招商优选","商家优选","好价再降X元","全站销量XX","实时热销榜第X名","实时好评榜第X名","额外补X元"等
   * @type: string[]
   * @default:
   **/
  unified_tags: string[];

  /**
   * @description: 招商团长id
   * @type: string | number
   * @default:
   **/
  zs_duo_id: string | number;
}
