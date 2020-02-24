export const PDD_DDK_GOODS_DETAIL = 'pdd.ddk.goods.detail';
export const PDD_DDK_GOODS_DETAIL_RESPONSE_KEY = 'goods_detail_response';

/**
 * 接口名称：多多进宝商品详情查询
 * 接口标识：pdd.ddk.goods.detail
 * 接口使用场景：查询多多进宝商品详情
 **/
export interface PddDdkGoodsDetailRequestInterface {
  /**
   * @description: 商品ID，仅支持单个查询。例如：[123456]
   * @type: string
   * @default:
   **/
  goods_id_list?: string;

  /**
   * @description: 推广位id
   * @type: string
   * @default:
   **/
  pid: string;

  /**
   * @description: 自定义参数
   * @type: string
   * @default:
   **/
  custom_parameters: string;

  /**
   * @description: 招商多多客ID
   * @type: string
   * @default:
   **/
  zs_duo_id: string;

  /**
   * @description: 佣金优惠券对应推广类型，3：专属 4：招商
   * @type: number
   * @default:
   **/
  plan_type: number;

  /**
   * @description: 搜索id
   * @type: string
   * @default:
   **/
  search_id: string;
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
   * @description: 店铺优惠券id
   * @type: string
   * @default:
   **/
  mall_coupon_id: string;

  /**
   * @description: 店铺折扣
   * @type: number
   * @default:
   **/
  mall_coupon_discount_pct: number;

  /**
   * @description: 最小使用金额
   * @type: number
   * @default:
   **/
  mall_coupon_min_order_amount: number;

  /**
   * @description: 最大使用金额
   * @type: number
   * @default:
   **/
  mall_coupon_max_discount_amount: number;

  /**
   * @description: 店铺券总量
   * @type: string
   * @default:
   **/
  mall_coupon_total_quantity: string;

  /**
   * @description: 店铺券余量
   * @type: string
   * @default:
   **/
  mall_coupon_remain_quantity: string;

  /**
   * @description: 店铺券使用开始时间
   * @type: string
   * @default:
   **/
  mall_coupon_start_time: string;

  /**
   * @description: 店铺券使用结束时间
   * @type: string
   * @default:
   **/
  mall_coupon_end_time: string;

  /**
   * @description: 参与多多进宝的商品ID
   * @type: string
   * @default:
   **/
  goods_id: string;

  /**
   * @description: 参与多多进宝的商品标题
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 参与多多进宝的商品描述
   * @type: string
   * @default:
   **/
  goods_desc: string;

  /**
   * @description: 多多进宝商品主图
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
   * @description: 最低价sku的拼团价，单位为分
   * @type: string
   * @default:
   **/
  min_group_price: string;

  /**
   * @description: 最低价sku的单买价，单位为分
   * @type: string
   * @default:
   **/
  min_normal_price: string;

  /**
   * @description: 店铺名称
   * @type: string
   * @default:
   **/
  mall_name: string;

  /**
   * @description: 商品标签ID，使用pdd.goods.opt.get接口获取
   * @type: string
   * @default:
   **/
  opt_id: string;

  /**
   * @description: 商品标签名称
   * @type: string
   * @default:
   **/
  opt_name: string;

  /**
   * @description: 商品标签ID
   * @type: string
   * @default:
   **/
  opt_ids: string;

  /**
   * @description: 商品一~四级类目ID列表
   * @type: string
   * @default:
   **/
  cat_ids: string;

  /**
   * @description: 优惠券门槛金额，单位为分
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
   * @description: 商品评价数
   * @type: string
   * @default:
   **/
  goods_eval_count: string;

  /**
   * @description: 商品类目ID，使用pdd.goods.cats.get接口获取
   * @type: string
   * @default:
   **/
  cat_id: string;

  /**
   * @description: 已售卖件数
   * @type: string
   * @default:
   **/
  sales_tip: string;

  /**
   * @description: 商家id
   * @type: string
   * @default:
   **/
  mall_id: string;

  /**
   * @description: 服务标签: 4-送货入户并安装,5-送货入户,6-电子发票,9-坏果包赔,11-闪电退款,12-24小时发货,13-48小时发货,17-顺丰包邮,18-只换不修,19-全国联保,20-分期付款,24-极速退款,25-品质保障,26-缺重包退,27-当日发货,28-可定制化,29-预约配送,1000001-正品发票,1000002-送货入户并安装
   * @type: string
   * @default:
   **/
  service_tags: string;

  /**
   * @description: 店铺收藏券id
   * @type: string
   * @default:
   **/
  clt_cpn_batch_sn: string;

  /**
   * @description: 店铺收藏券起始时间
   * @type: string
   * @default:
   **/
  clt_cpn_start_time: string;

  /**
   * @description: 店铺收藏券截止时间
   * @type: string
   * @default:
   **/
  clt_cpn_end_time: string;

  /**
   * @description: 店铺收藏券总量
   * @type: string
   * @default:
   **/
  clt_cpn_quantity: string;

  /**
   * @description: 店铺收藏券剩余量
   * @type: string
   * @default:
   **/
  clt_cpn_remain_quantity: string;

  /**
   * @description: 店铺收藏券面额，单位为分
   * @type: string
   * @default:
   **/
  clt_cpn_discount: string;

  /**
   * @description: 店铺收藏券使用门槛价格，单位为分
   * @type: string
   * @default:
   **/
  clt_cpn_min_amt: string;

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
   * @description: 推广计划类型
   * @type: number
   * @default:
   **/
  plan_type: number;

  /**
   * @description: 招商团长id
   * @type: string
   * @default:
   **/
  zs_duo_id: string;

  /**
   * @description: 快手专享
   * @type: boolean
   * @default:
   **/
  only_scene_auth: boolean;
}
