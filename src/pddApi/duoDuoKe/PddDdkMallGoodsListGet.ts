export const PDD_DDK_MALL_GOODS_LIST_GET = 'pdd.ddk.mall.goods.list.get';
export const PDD_DDK_MALL_GOODS_LIST_GET_RESPONSE_KEY = 'goods_info_list_response';

/**
 * 接口名称：查询店铺商品
 * 接口标识：pdd.ddk.mall.goods.list.get
 * 接口使用场景：查询店铺商品
 **/
export interface PddDdkMallGoodsListGetRequestInterface {
  /**
   * @description: 店铺id
   * @type: string
   * @default:
   **/
  mall_id?: string;

  /**
   * @description: 分页数
   * @type: number
   * @default:
   **/
  page_number?: number;

  /**
   * @description: 每页商品数量
   * @type: number
   * @default:
   **/
  page_size?: number;
}

/**
 * 接口名称：查询店铺商品
 * 接口标识：pdd.ddk.mall.goods.list.get
 * 接口使用场景：查询店铺商品
 **/
export interface PddDdkMallGoodsListGetResponseInterface {
  /**
   * @description: goods_info_list_response
   * @type: PddDdkMallGoodsListGetGoodsInfoListResponseResponseInterface
   * @default:
   *
   **/
  goods_info_list_response: PddDdkMallGoodsListGetGoodsInfoListResponseResponseInterface;
}

/**
 * @description goods_info_list_response
 * @default
 * @example
 **/
export interface PddDdkMallGoodsListGetGoodsInfoListResponseResponseInterface {
  /**
   * @description: 返回商品总数
   * @type: number
   * @default:
   **/
  total: number;

  /**
   * @description: 商品信息列表，具体信息见下（注：目前仅返回商品基础信息，其余为空，凡示例中为null的目前均返回为空，获取这些字段请调用pdd.ddk.goods,detail接口）
   * @type: PddDdkMallGoodsListGetGoodsInfoListResponseGoodsListResponseInterface[]
   * @default:
   *
   **/
  goods_list: PddDdkMallGoodsListGetGoodsInfoListResponseGoodsListResponseInterface[];
}

/**
 * @description 商品信息列表，具体信息见下（注：目前仅返回商品基础信息，其余为空，凡示例中为null的目前均返回为空，获取这些字段请调用pdd.ddk.goods,detail接口）
 * @default
 * @example
 **/
export interface PddDdkMallGoodsListGetGoodsInfoListResponseGoodsListResponseInterface {
  /**
   * @description: 商品创建时间（UNIX时间戳）
   * @type: string
   * @default:
   **/
  create_at: string;

  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id: string;

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
   * @type: string
   * @default:
   **/
  goods_gallery_urls: string;

  /**
   * @description: 已售卖件数
   * @type: string
   * @default:
   **/
  sales_tip: string;

  /**
   * @description: 商品市场价（单位为分）
   * @type: string
   * @default:
   **/
  goods_mark_price: string;

  /**
   * @description: 商品实际价格（单位为分）
   * @type: string
   * @default:
   **/
  goods_fact_price: string;

  /**
   * @description: 商品拼团价（单位为分）
   * @type: string
   * @default:
   **/
  min_group_price: string;

  /**
   * @description: 商品单买价（单位为分）
   * @type: string
   * @default:
   **/
  min_normal_price: string;

  /**
   * @description: 店铺id
   * @type: string
   * @default:
   **/
  mall_id: string;

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
   * @description: 商品类目id
   * @type: string
   * @default:
   **/
  category_id: string;

  /**
   * @description: 商品类目名
   * @type: string
   * @default:
   **/
  category_name: string;

  /**
   * @description: 商品标签id
   * @type: string
   * @default:
   **/
  opt_id: string;

  /**
   * @description: 商品标签名
   * @type: string
   * @default:
   **/
  opt_name: string;

  /**
   * @description: 商品标签ID
   * @type: string[]
   * @default:
   **/
  opt_ids: string[];

  /**
   * @description: 商品标签ID（多级）
   * @type: string[]
   * @default:
   **/
  cat_ids: string[];

  /**
   * @description: 商品类型，1-普通商品，2-进口商品，3-直供，4-直邮
   * @type: number
   * @default:
   **/
  goods_type: number;

  /**
   * @description: 是否有优惠券
   * @type: boolean
   * @default:
   **/
  has_coupon: boolean;

  /**
   * @description: 优惠券ID
   * @type: string
   * @default:
   **/
  coupon_id: string;

  /**
   * @description: 优惠券最小门槛价（单位为分）
   * @type: string
   * @default:
   **/
  coupon_min_order_amount: string;

  /**
   * @description: 优惠券面额（单位为分）
   * @type: string
   * @default:
   **/
  coupon_discount: string;

  /**
   * @description: 优惠券总数量
   * @type: string
   * @default:
   **/
  coupon_total_quantity: string;

  /**
   * @description: 优惠券剩余数量
   * @type: string
   * @default:
   **/
  coupon_remain_quantity: string;

  /**
   * @description: 优惠券开始时间（unix时间戳）
   * @type: string
   * @default:
   **/
  coupon_start_time: string;

  /**
   * @description: 优惠券结束时间（unix时间戳）
   * @type: string
   * @default:
   **/
  coupon_end_time: string;

  /**
   * @description: 佣金比（千分比）
   * @type: string
   * @default:
   **/
  promotion_rate: string;

  /**
   * @description: 优惠券面额
   * @type: string
   * @default:
   **/
  coupon_price: string;

  /**
   * @description: 商品佣金比（千分比）
   * @type: string
   * @default:
   **/
  goods_rate: string;

  /**
   * @description: 佣金（单位为分）
   * @type: string
   * @default:
   **/
  market_fee: string;

  /**
   * @description: 该商品所在店铺是否参与全店推广，0：否，1：是
   * @type: number
   * @default:
   **/
  mall_cps: number;

  /**
   * @description: 商品评价数
   * @type: string
   * @default:
   **/
  goods_eval_count: string;

  /**
   * @description: 商品类目ID
   * @type: string
   * @default:
   **/
  cat_id: string;

  /**
   * @description: 分享文案
   * @type: string
   * @default:
   **/
  share_desc: string;

  /**
   * @description: 聊天二维码图片url
   * @type: string
   * @default:
   **/
  qr_code_image_url: string;

  /**
   * @description: 全店推广店铺佣金比（千分比）
   * @type: string
   * @default:
   **/
  mall_rate: string;

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
}
