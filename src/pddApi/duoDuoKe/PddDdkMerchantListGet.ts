export const PDD_DDK_MERCHANT_LIST_GET = 'pdd.ddk.merchant.list.get';
export const PDD_DDK_MERCHANT_LIST_GET_RESPONSE_KEY = 'merchant_list_response';

/**
 * 接口名称：多多客查店铺列表接口
 * 接口标识：pdd.ddk.merchant.list.get
 * 接口使用场景：多多客查店铺列表接口
 **/
export interface PddDdkMerchantListGetRequestInterface {
  /**
   * @description: 商品类目ID，使用pdd.goods.cats.get接口获取
   * @type: string | number
   * @default:
   **/
  cat_id: string | number;

  /**
   * @description: 是否有店铺收藏券 （0 所有；1 必须有券）
   * @type: boolean
   * @default:
   **/
  has_clt_cpn: boolean;

  /**
   * @description: 是否有优惠券 （0 所有；1 必须有券。）
   * @type: number
   * @default:
   **/
  has_coupon: number;

  /**
   * @description: 店铺id
   * @type: Array<string | number>
   * @default:
   **/
  mall_id_list: Array<string | number>;

  /**
   * @description: 店铺类型
   * @type: number[]
   * @default:
   **/
  merchant_type_list: number[];

  /**
   * @description: 每页数量
   * @type: number
   * @default:
   **/
  page_number: number;

  /**
   * @description: 分页数
   * @type: number
   * @default:
   **/
  page_size: number;

  /**
   * @description: 查询范围0----商品拼团价格区间；1----商品券后价价格区间；2----佣金比例区间；3----优惠券金额区间；4----加入多多进宝时间区间；5----销量区间；6----佣金金额区间
   * @type: number
   * @default:
   **/
  query_range_str: number;

  /**
   * @description: 筛选范围
   * @type: string
   * @default:
   **/
  range_vo_list: string;
}

/**
 * 接口名称：多多客查店铺列表接口
 * 接口标识：pdd.ddk.merchant.list.get
 * 接口使用场景：多多客查店铺列表接口
 **/
export interface PddDdkMerchantListGetResponseInterface {
  /**
   * @description: result
   * @type: PddDdkMerchantListGetMerchantListResponseResponseInterface
   * @default:
   *
   **/
  merchant_list_response: PddDdkMerchantListGetMerchantListResponseResponseInterface;
}

/**
 * @description result
 * @default
 * @example
 **/
export interface PddDdkMerchantListGetMerchantListResponseResponseInterface {
  /**
   * @description: 店铺列表
   * @type: PddDdkMerchantListGetMerchantListResponseMallSearchInfoVoListResponseInterface[]
   * @default:
   *
   **/
  mall_search_info_vo_list: PddDdkMerchantListGetMerchantListResponseMallSearchInfoVoListResponseInterface[];

  /**
   * @description: 总数
   * @type: number
   * @default:
   **/
  total: number;
}

/**
 * @description 店铺列表
 * @default
 * @example
 **/
export interface PddDdkMerchantListGetMerchantListResponseMallSearchInfoVoListResponseInterface {
  /**
   * @description: 商品类目列表
   * @type: number[]
   * @default:
   **/
  cat_id_list: number[];

  /**
   * @description: 店铺收藏券ID
   * @type: string
   * @default:
   **/
  clt_cpn_batch_sn: string;

  /**
   * @description: 店铺收藏券券面额
   * @type: string | number
   * @default:
   **/
  clt_cpn_discount: string | number;

  /**
   * @description: 店铺收藏券失效时间
   * @type: string | number
   * @default:
   **/
  clt_cpn_end_time: string | number;

  /**
   * @description: 店铺收藏券使用门槛
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
   * @description: 店铺收藏券生效时间
   * @type: string | number
   * @default:
   **/
  clt_cpn_start_time: string | number;

  /**
   * @description: 描述评分
   * @type: string
   * @default:
   **/
  desc_txt: string;

  /**
   * @description: 商品信息列表
   * @type: PddDdkMerchantListGetMerchantListResponseMallSearchInfoVoListGoodsDetailVoListResponseInterface[]
   * @default:
   *
   **/
  goods_detail_vo_list: PddDdkMerchantListGetMerchantListResponseMallSearchInfoVoListGoodsDetailVoListResponseInterface[];

  /**
   * @description: 商品数
   * @type: number
   * @default:
   **/
  goods_num: number;

  /**
   * @description: 店铺logo
   * @type: string
   * @default:
   **/
  img_url: string;

  /**
   * @description: 物流评分
   * @type: string
   * @default:
   **/
  lgst_txt: string;

  /**
   * @description: 店铺券列表
   * @type: PddDdkMerchantListGetMerchantListResponseMallSearchInfoVoListMallCouponInfoListResponseInterface[]
   * @default:
   *
   **/
  mall_coupon_info_list: PddDdkMerchantListGetMerchantListResponseMallSearchInfoVoListMallCouponInfoListResponseInterface[];

  /**
   * @description: 店铺id
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
   * @description: 全店推广佣金
   * @type: number
   * @default:
   **/
  mall_rate: number;

  /**
   * @description: 店铺类型，1-个人，2-企业，3-旗舰店，4-专卖店，5-专营店，6-普通店
   * @type: number
   * @default:
   **/
  merchant_type: number;

  /**
   * @description: 销量
   * @type: string
   * @default:
   **/
  sales_tip: string;

  /**
   * @description: 服务评分
   * @type: string
   * @default:
   **/
  serv_txt: string;
}

/**
 * @description 商品信息列表
 * @default
 * @example
 **/
export interface PddDdkMerchantListGetMerchantListResponseMallSearchInfoVoListGoodsDetailVoListResponseInterface {
  /**
   * @description: 活动类型
   * @type: number
   * @default:
   **/
  activity_type: number;

  /**
   * @description: 商品标签，与optId一样，兼容老版本
   * @type: string | number
   * @default:
   **/
  category_id: string | number;

  /**
   * @description: 商品标签名，与optName一样，兼容老版本
   * @type: string
   * @default:
   **/
  category_name: string;

  /**
   * @description: 未赋值，无用字段，兼容老版本
   * @type: string | number
   * @default:
   **/
  cat_id: string | number;

  /**
   * @description: 商品标签列表，与optIds一样，兼容老版本
   * @type: number[]
   * @default:
   **/
  cat_ids: number[];

  /**
   * @description: 店铺收藏券ID
   * @type: string
   * @default:
   **/
  clt_cpn_batch_sn: string;

  /**
   * @description: 店铺收藏券折扣
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
   * @description: 店铺收藏券使用门槛
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
   * @description: 单品优惠券面额（单位为分）
   * @type: string | number
   * @default:
   **/
  coupon_discount: string | number;

  /**
   * @description: 单品优惠券结束时间
   * @type: string | number
   * @default:
   **/
  coupon_end_time: string | number;

  /**
   * @description: 使用单品优惠券的门槛金额（单位为分）
   * @type: string | number
   * @default:
   **/
  coupon_min_order_amount: string | number;

  /**
   * @description: 单品优惠券剩余数量
   * @type: string | number
   * @default:
   **/
  coupon_remain_quantity: string | number;

  /**
   * @description: 单品优惠券开始时间
   * @type: string | number
   * @default:
   **/
  coupon_start_time: string | number;

  /**
   * @description: 单品优惠券总数量
   * @type: string | number
   * @default:
   **/
  coupon_total_quantity: string | number;

  /**
   * @description: cpsSign
   * @type: string
   * @default:
   **/
  cps_sign: string;

  /**
   * @description: 创建时间
   * @type: string | number
   * @default:
   **/
  create_at: string | number;

  /**
   * @description: 店铺近30天申请售后率
   * @type: string
   * @default:
   **/
  crt_rf_ordr_rto1m: string;

  /**
   * @description: 描述评分
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
   * @description: 商品评价数
   * @type: string | number
   * @default:
   **/
  goods_eval_count: string | number;

  /**
   * @description: 商品详情图
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
   * @description: 是否有单品券
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
   * @description: 物流评分
   * @type: string
   * @default:
   **/
  lgst_txt: string;

  /**
   * @description: 店铺折扣券折扣
   * @type: number
   * @default:
   **/
  mall_coupon_discount_pct: number;

  /**
   * @description: 店铺折扣券失效时间
   * @type: string | number
   * @default:
   **/
  mall_coupon_end_time: string | number;

  /**
   * @description: 店铺折扣券Id
   * @type: string | number
   * @default:
   **/
  mall_coupon_id: string | number;

  /**
   * @description: 店铺券减免上限金额（单位为分）
   * @type: number
   * @default:
   **/
  mall_coupon_max_discount_amount: number;

  /**
   * @description: 店铺折扣券使用门槛（单位为分）
   * @type: number
   * @default:
   **/
  mall_coupon_min_order_amount: number;

  /**
   * @description: 店铺折扣券余量
   * @type: string | number
   * @default:
   **/
  mall_coupon_remain_quantity: string | number;

  /**
   * @description: 店铺折扣券生效时间
   * @type: string | number
   * @default:
   **/
  mall_coupon_start_time: string | number;

  /**
   * @description: 店铺折扣券总量
   * @type: string | number
   * @default:
   **/
  mall_coupon_total_quantity: string | number;

  /**
   * @description: 商品所在店铺是否开通全店推广 0：否，1：是
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
   * @description: 店铺名称
   * @type: string
   * @default:
   **/
  mall_name: string;

  /**
   * @description: 全店推广佣金比例
   * @type: number
   * @default:
   **/
  mall_rate: number;

  /**
   * @description: 店铺类型，1-个人，2-企业，3-旗舰店，4-专卖店，5-专营店，6-普通店
   * @type: number
   * @default:
   **/
  merchant_type: number;

  /**
   * @description: 商品最小成团价（单位为分）
   * @type: string | number
   * @default:
   **/
  min_group_price: string | number;

  /**
   * @description: 商品单买价（单位为分）
   * @type: string | number
   * @default:
   **/
  min_normal_price: string | number;

  /**
   * @description: 商品标签
   * @type: string | number
   * @default:
   **/
  opt_id: string | number;

  /**
   * @description: 商品标签列表
   * @type: number[]
   * @default:
   **/
  opt_ids: number[];

  /**
   * @description: 商品标签名
   * @type: string
   * @default:
   **/
  opt_name: string;

  /**
   * @description: 单品推广佣金
   * @type: string | number
   * @default:
   **/
  promotion_rate: string | number;

  /**
   * @description: 销量
   * @type: string
   * @default:
   **/
  sales_tip: string;

  /**
   * @description: 服务类型
   * @type: number[]
   * @default:
   **/
  service_tags: number[];

  /**
   * @description: 服务评分
   * @type: string
   * @default:
   **/
  serv_txt: string;
}

/**
 * @description 店铺券列表
 * @default
 * @example
 **/
export interface PddDdkMerchantListGetMerchantListResponseMallSearchInfoVoListMallCouponInfoListResponseInterface {
  /**
   * @description: 店铺券失效时间
   * @type: string | number
   * @default:
   **/
  coupon_end_time: string | number;

  /**
   * @description: 店铺折扣券ID
   * @type: string | number
   * @default:
   **/
  coupon_id: string | number;

  /**
   * @description: 店铺券总量
   * @type: string | number
   * @default:
   **/
  coupon_quantity: string | number;

  /**
   * @description: 店铺券剩余量
   * @type: string | number
   * @default:
   **/
  coupon_remain_quantity: string | number;

  /**
   * @description: 店铺券生效时间
   * @type: string | number
   * @default:
   **/
  coupon_start_time: string | number;

  /**
   * @description: 店铺折扣券类型
   * @type: number
   * @default:
   **/
  coupon_type: number;

  /**
   * @description: 店铺折扣券折扣
   * @type: number
   * @default:
   **/
  discount: number;

  /**
   * @description: 店铺id
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;

  /**
   * @description: 店铺券减免上限金额（单位为分）
   * @type: number
   * @default:
   **/
  max_discount_amount: number;

  /**
   * @description: 店铺折扣券使用门槛（单位为分）
   * @type: number
   * @default:
   **/
  min_order_amount: number;
}
