export const PDD_PROMOTION_LIMITED_DISCOUNT_LIST_GET = 'pdd.promotion.limited.discount.list.get';

/**
 * 接口名称：限时限量购活动列表查询
 * 接口标识：pdd.promotion.limited.discount.list.get
 * 接口使用场景：查询已创建的限时限量购活动列表
 **/
export interface PddPromotionLimitedDiscountListGetRequestInterface {
  /**
   * @description: 支持多个活动类型的查询。3-限量折扣；12-限时折扣。
   * @type: number[]
   * @default:
   **/
  activity_types: number[];

  /**
   * @description: 商品id列表
   * @type: Array<string | number>
   * @default:
   **/
  goods_id_list?: Array<string | number>;

  /**
   * @description: 默认false。true-仅返回活动数量；false-返回活动数量和活动设置数据
   * @type: boolean
   * @default:
   **/
  just_count?: boolean;

  /**
   * @description: 0:创建时间升序  1:创建时间降序
   * @type: number
   * @default:
   **/
  order?: number;

  /**
   * @description: 页码，默认1
   * @type: number
   * @default:
   **/
  page_no?: number;

  /**
   * @description: 页大小，默认10
   * @type: number
   * @default:
   **/
  page_size?: number;

  /**
   * @description: 支持多个活动状态的查询。1-未开始，2-进行中，3-结束|系统结束，4-结束|商家结束，5-提前结束，6-商品处罚中（屏蔽中）。其中3,4,5都算是结束状态。
   * @type: number[]
   * @default:
   **/
  status_list: number[];
}

/**
 * 接口名称：限时限量购活动列表查询
 * 接口标识：pdd.promotion.limited.discount.list.get
 * 接口使用场景：查询已创建的限时限量购活动列表
 **/
export interface PddPromotionLimitedDiscountListGetResponseInterface {
  /**
   * @description: 还在线（包括已开始和未开始）的活动数量
   * @type: string | number
   * @default:
   **/
  online_sum: string | number;

  /**
   * @description: 活动信息
   * @type: PddPromotionLimitedDiscountListGetOpenGoodsActivityListResponseInterface[]
   * @default:
   *
   **/
  open_goods_activity_list: PddPromotionLimitedDiscountListGetOpenGoodsActivityListResponseInterface[];

  /**
   * @description: 0:生成时间升序  1:生成时间降序
   * @type: number
   * @default:
   **/
  order: number;

  /**
   * @description: 页码
   * @type: string | number
   * @default:
   **/
  page_no: string | number;

  /**
   * @description: 页大小
   * @type: string | number
   * @default:
   **/
  page_size: string | number;

  /**
   * @description: 报名的活动总量
   * @type: string | number
   * @default:
   **/
  record_sum: string | number;
}

/**
 * @description 活动信息
 * @default
 * @example
 **/
export interface PddPromotionLimitedDiscountListGetOpenGoodsActivityListResponseInterface {
  /**
   * @description: 活动id
   * @type: string | number
   * @default:
   **/
  activity_id: string | number;

  /**
   * @description: 活动名称
   * @type: string
   * @default:
   **/
  activity_name: string;

  /**
   * @description: 活动类型
   * @type: number
   * @default:
   **/
  activity_type: number;

  /**
   * @description: 结束操作来源：  0: 活动时间到了，活动结束  1: 商家在MMS后台人为点击结束  2: 活动被系统结束
   * @type: number
   * @default:
   **/
  end_operation_source: number;

  /**
   * @description: 结束时间（单位：s）
   * @type: string | number
   * @default:
   **/
  end_time: string | number;

  /**
   * @description: 商品id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 商品名称
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 商品剩余库存
   * @type: string | number
   * @default:
   **/
  online_quantity: string | number;

  /**
   * @description: 价格信息
   * @type: PddPromotionLimitedDiscountListGetOpenGoodsActivityListPriceInfoResponseInterface[]
   * @default:
   *
   **/
  price_info: PddPromotionLimitedDiscountListGetOpenGoodsActivityListPriceInfoResponseInterface[];

  /**
   * @description: 开始时间（单位：s）
   * @type: string | number
   * @default:
   **/
  start_time: string | number;

  /**
   * @description: 活动状态
   * @type: number
   * @default:
   **/
  status: number;
}

/**
 * @description 价格信息
 * @default
 * @example
 **/
export interface PddPromotionLimitedDiscountListGetOpenGoodsActivityListPriceInfoResponseInterface {
  /**
   * @description: 活动报名库存
   * @type: string | number
   * @default:
   **/
  activity_quantity: string | number;

  /**
   * @description: 活动剩余库存
   * @type: string | number
   * @default:
   **/
  activity_stock_quantity: string | number;

  /**
   * @description: 活动 ID
   * @type: string | number
   * @default:
   **/
  detail_id: string | number;

  /**
   * @description: 折扣比例。实际折扣为：discount/1000，例如：300表示3折
   * @type: string | number
   * @default:
   **/
  discount: string | number;

  /**
   * @description: 折扣范围
   * @type: string
   * @default:
   **/
  discount_range: string;

  /**
   * @description: 最大的sku活动拼团价
   * @type: string | number
   * @default:
   **/
  max_pre_sale_price: string | number;

  /**
   * @description: 最小的sku活动拼团价
   * @type: string | number
   * @default:
   **/
  min_pre_sale_price: string | number;

  /**
   * @description: sku维度的活动信息
   * @type: PddPromotionLimitedDiscountListGetOpenGoodsActivityListPriceInfoOpenSkuPricesResponseInterface[]
   * @default:
   *
   **/
  open_sku_prices: PddPromotionLimitedDiscountListGetOpenGoodsActivityListPriceInfoOpenSkuPricesResponseInterface[];

  /**
   * @description: 活动价生效时用户限购数量 0:不限购
   * @type: string | number
   * @default:
   **/
  user_activity_limit: string | number;
}

/**
 * @description sku维度的活动信息
 * @default
 * @example
 **/
export interface PddPromotionLimitedDiscountListGetOpenGoodsActivityListPriceInfoOpenSkuPricesResponseInterface {
  /**
   * @description: 活动拼团价（单位：分）
   * @type: string | number
   * @default:
   **/
  activity_price: string | number;

  /**
   * @description: 折扣比例
   * @type: string
   * @default:
   **/
  discount: string;

  /**
   * @description: 原拼团价（单位：分）
   * @type: string | number
   * @default:
   **/
  group_price: string | number;

  /**
   * @description: skuid
   * @type: string | number
   * @default:
   **/
  sku_id: string | number;

  /**
   * @description: sku名称
   * @type: string
   * @default:
   **/
  sku_name: string;
}
