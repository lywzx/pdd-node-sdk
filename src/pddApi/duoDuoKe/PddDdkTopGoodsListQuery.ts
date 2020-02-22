export const PDD_DDK_TOP_GOODS_LIST_QUERY = 'PDD_DDK_TOP_GOODS_LIST_QUERY';

/**
 * 接口名称：多多客获取爆款排行商品接口
 * 接口标识：pdd.ddk.top.goods.list.query
 * 接口使用场景：获取热销商品列表
 **/

export interface PddDdkTopGoodsListQueryRequestInterface {
  /**
   * @description: 推广位id
   * @type: string
   * @default:
   **/
  p_id: string;

  /**
   * @description: 从多少位置开始请求；默认值 ： 0，offset需是limit的整数倍，仅支持整页翻页
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
   * @description: 返回商品总数
   * @type: string
   * @default:
   **/
  total: string;

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

export interface PddDdkTopGoodsListQueryTopGoodsListGetResponseListResponseInterface {
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
   * @description: 最小拼团价（单位为分）
   * @type: string
   * @default:
   **/
  min_group_price: string;

  /**
   * @description: 最小单买价格（单位为分）
   * @type: string
   * @default:
   **/
  min_normal_price: string;

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
   * @description: 商品标签ID，使用pdd.goods.opts.get接口获取
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
   * @description: 商品标签id
   * @type: string
   * @default:
   **/
  opt_ids: string;

  /**
   * @description: 商品类目id
   * @type: string
   * @default:
   **/
  cat_ids: string;

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
   * @type: string
   * @default:
   **/
  coupon_min_order_amount: string;

  /**
   * @description: 优惠券面额，单位为分
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
   * @description: 优惠券生效时间，UNIX时间戳
   * @type: string
   * @default:
   **/
  coupon_start_time: string;

  /**
   * @description: 优惠券失效时间，UNIX时间戳
   * @type: string
   * @default:
   **/
  coupon_end_time: string;

  /**
   * @description: 佣金比例，千分比
   * @type: string
   * @default:
   **/
  promotion_rate: string;

  /**
   * @description: 商品评价数量
   * @type: string
   * @default:
   **/
  goods_eval_count: string;

  /**
   * @description: 已售卖件数
   * @type: string
   * @default:
   **/
  sales_tip: string;

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

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_DDK_TOP_GOODS_LIST_QUERY]: {
    requestInterface: PddDdkTopGoodsListQueryRequestInterface;
    responseInterface: PddDdkTopGoodsListQueryResponseInterface;
  };
}
