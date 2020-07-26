export const PDD_DDK_TOP_GOODS_LIST_QUERY = 'pdd.ddk.top.goods.list.query';
export const PDD_DDK_TOP_GOODS_LIST_QUERY_RESPONSE_KEY = 'top_goods_list_get_response';
export const PDD_DDK_TOP_GOODS_LIST_QUERY_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 3600,
    times: 3000000,
  },
];

/**
 * 接口名称：多多客获取爆款排行商品接口
 * 接口标识：pdd.ddk.top.goods.list.query
 * 接口使用场景：获取热销商品列表
 **/
export interface PddDdkTopGoodsListQueryRequestInterface {
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
}

/**
 * 接口名称：多多客获取爆款排行商品接口
 * 接口标识：pdd.ddk.top.goods.list.query
 * 接口使用场景：获取热销商品列表
 **/
export interface PddDdkTopGoodsListQueryResponseInterface {
  /**
   * @description: response
   * @type: PddDdkTopGoodsListQueryTopGoodsListGetResponseResponseInterface
   * @default:
   *
   **/
  top_goods_list_get_response: PddDdkTopGoodsListQueryTopGoodsListGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddDdkTopGoodsListQueryTopGoodsListGetResponseResponseInterface {
  /**
   * @description: 商品列表
   * @type: PddDdkTopGoodsListQueryTopGoodsListGetResponseListResponseInterface[]
   * @default:
   *
   **/
  list: PddDdkTopGoodsListQueryTopGoodsListGetResponseListResponseInterface[];

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
export interface PddDdkTopGoodsListQueryTopGoodsListGetResponseListResponseInterface {
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
   * @description: 服务评分
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
   * @description: 物流评分
   * @type: string
   * @default:
   **/
  serv_txt: string;
}
