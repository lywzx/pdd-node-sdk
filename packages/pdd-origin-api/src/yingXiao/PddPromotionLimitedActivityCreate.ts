export const PDD_PROMOTION_LIMITED_ACTIVITY_CREATE = 'pdd.promotion.limited.activity.create';

/**
 * 接口名称：限时限量购活动创建接口
 * 接口标识：pdd.promotion.limited.activity.create
 * 接口使用场景：创建限时限量购活动（包括限时折扣和限量折扣）
 **/
export interface PddPromotionLimitedActivityCreateRequestInterface {
  /**
   * @description: 创建请求
   * @type: PddPromotionLimitedActivityCreateRequestRequestInterface[]
   * @default:
   *
   **/
  request: PddPromotionLimitedActivityCreateRequestRequestInterface[];
}

/**
 * @description 创建请求
 * @default
 * @example
 **/
export interface PddPromotionLimitedActivityCreateRequestRequestInterface {
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
   * @description: 折扣比例，实际折扣为：discount/1000。例：300，表示3折
   * @type: string | number
   * @default:
   **/
  discount?: string | number;

  /**
   * @description: 限时折扣必填。结束时间（单位：s）
   * @type: string | number
   * @default:
   **/
  end_time?: string | number;

  /**
   * @description: 商品id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 活动库存的数量（限量活动时，必填）
   * @type: string | number
   * @default:
   **/
  quantity?: string | number;

  /**
   * @description: 参与活动的sku数据列表
   * @type: PddPromotionLimitedActivityCreateRequestSkuPriceListRequestInterface[]
   * @default:
   *
   **/
  sku_price_list: PddPromotionLimitedActivityCreateRequestSkuPriceListRequestInterface[];

  /**
   * @description: 限时折扣必填。开始时间（单位：s）
   * @type: string | number
   * @default:
   **/
  start_time?: string | number;

  /**
   * @description: 用户限购数量(0:不限购)
   * @type: string | number
   * @default:
   **/
  user_activity_limit?: string | number;
}

/**
 * @description 参与活动的sku数据列表
 * @default
 * @example
 **/
export interface PddPromotionLimitedActivityCreateRequestSkuPriceListRequestInterface {
  /**
   * @description: sku活动价格
   * @type: string | number
   * @default:
   **/
  activity_price: string | number;

  /**
   * @description: skuid
   * @type: string | number
   * @default:
   **/
  sku_id: string | number;
}

/**
 * 接口名称：限时限量购活动创建接口
 * 接口标识：pdd.promotion.limited.activity.create
 * 接口使用场景：创建限时限量购活动（包括限时折扣和限量折扣）
 **/
export interface PddPromotionLimitedActivityCreateResponseInterface {
  /**
   * @description: 结果列表
   * @type: PddPromotionLimitedActivityCreateResultListResponseInterface[]
   * @default:
   *
   **/
  result_list: PddPromotionLimitedActivityCreateResultListResponseInterface[];
}

/**
 * @description 结果列表
 * @default
 * @example
 **/
export interface PddPromotionLimitedActivityCreateResultListResponseInterface {
  /**
   * @description: 创建失败时的失败原因
   * @type: string
   * @default:
   **/
  fail_reason: string;

  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id: string;

  /**
   * @description: 商品是否创建成功。0代表成功，非0代表失败
   * @type: number
   * @default:
   **/
  status: number;
}
