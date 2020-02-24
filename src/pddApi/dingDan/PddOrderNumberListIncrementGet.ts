export const PDD_ORDER_NUMBER_LIST_INCREMENT_GET = 'pdd.order.number.list.increment.get';
export const PDD_ORDER_NUMBER_LIST_INCREMENT_GET_RESPONSE_KEY = 'order_sn_increment_get_response';

/**
 * 接口名称：订单增量接口
 * 接口标识：pdd.order.number.list.increment.get
 * 接口使用场景：查询订单增量，注：虚拟订单充值手机号信息无法通过此接口获取，请联系虚拟类目运营人员。
 * 拉取卖家已卖出的增量交易数据（只能获取到成交时间三个月以内的交易信息）
 * ①. 一次请求只能查询时间跨度为30分钟的增量交易记录，即end_updated_at - start_updated_at<= 30min。
 * ②. 通过从后往前翻页的方式以及结束时间不小于拼多多系统时间前3min可以避免漏单问题。
 **/
export interface PddOrderNumberListIncrementGetRequestInterface {
  /**
   * @description: 订单类型（是否抽奖订单），0-全部，1-非抽奖订单，2-抽奖订单
   * @type: number
   * @default:
   **/
  is_lucky_flag?: number;

  /**
   * @description: 发货状态，1-待发货，2-已发货待签收，3-已签收，5-全部
   * @type: number
   * @default:
   **/
  order_status?: number;

  /**
   * @description: 必填，最后更新时间开始时间的时间戳，指格林威治时间 1970 年01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)起至现在的总秒数
   * @type: string
   * @default:
   **/
  start_updated_at?: string;

  /**
   * @description: 必填，最后更新时间结束时间的时间戳，指格林威治时间 1970 年 01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时
   * 00 分 00 秒)起至现在的总秒数
   * PS：开始时间结束时间间距不超过 30 分钟
   * @type: string
   * @default:
   **/
  end_updated_at?: string;

  /**
   * @description: 返回数量，默认 100。最大 100
   * @type: number
   * @default:
   **/
  page_size: number;

  /**
   * @description: 返回页码，默认 1，页码从 1 开始 PS：当前采用分页返回，数量和页数会一起传，如果不传，则采用 默认值；注：必须采用倒序的分页方式（从最后一页往回取）才能避免漏单问题。
   * @type: number
   * @default:
   **/
  page?: number;

  /**
   * @description: 售后状态，1-无售后或售后关闭，2-售后处理中，3-退款中，4-退款成功 5-全部
   * @type: number
   * @default:
   **/
  refund_status?: number;

  /**
   * @description: 订单类型： 0-普通订单、1-定金订单 不传为全部
   * @type: number
   * @default:
   **/
  trade_type: number;

  /**
   * @description: 是否启用has_next的分页方式，如果指定true,则返回的结果中不包含总记录数，但是会新增一个是否存在下一页的的字段，通过此种方式获取增量交易，效率在原有的基础上有80%的提升。
   * @type: boolean
   * @default:
   **/
  use_has_next: boolean;
}

/**
 * 接口名称：订单增量接口
 * 接口标识：pdd.order.number.list.increment.get
 * 接口使用场景：查询订单增量，注：虚拟订单充值手机号信息无法通过此接口获取，请联系虚拟类目运营人员。
 * 拉取卖家已卖出的增量交易数据（只能获取到成交时间三个月以内的交易信息）
 * ①. 一次请求只能查询时间跨度为30分钟的增量交易记录，即end_updated_at - start_updated_at<= 30min。
 * ②. 通过从后往前翻页的方式以及结束时间不小于拼多多系统时间前3min可以避免漏单问题。
 **/
export interface PddOrderNumberListIncrementGetResponseInterface {
  /**
   * @description: response
   * @type: PddOrderNumberListIncrementGetOrderSnIncrementGetResponseResponseInterface
   * @default:
   *
   **/
  order_sn_increment_get_response: PddOrderNumberListIncrementGetOrderSnIncrementGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddOrderNumberListIncrementGetOrderSnIncrementGetResponseResponseInterface {
  /**
   * @description: 返回订单的总数
   * @type: number
   * @default:
   **/
  total_count: number;

  /**
   * @description: 订单列表对象
   * @type: PddOrderNumberListIncrementGetOrderSnIncrementGetResponseOrderSnListResponseInterface[]
   * @default:
   *
   **/
  order_sn_list: PddOrderNumberListIncrementGetOrderSnIncrementGetResponseOrderSnListResponseInterface[];

  /**
   * @description: 是否有下一页
   * @type: boolean
   * @default:
   **/
  has_next: boolean;
}

/**
 * @description 订单列表对象
 * @default
 * @example
 **/
export interface PddOrderNumberListIncrementGetOrderSnIncrementGetResponseOrderSnListResponseInterface {
  /**
   * @description: 送货入户并安装费用 单位：元
   * @type: string
   * @default:
   **/
  delivery_install_value: string;

  /**
   * @description: 送货入户费用 单位：元
   * @type: string
   * @default:
   **/
  delivery_home_value: string;

  /**
   * @description: 上门安装费用 单位：元
   * @type: string
   * @default:
   **/
  home_install_value: string;

  /**
   * @description: 卡号信息列表
   * @type: PddOrderNumberListIncrementGetOrderSnIncrementGetResponseOrderSnListCardInfoListResponseInterface[]
   * @default:
   *
   **/
  card_info_list: PddOrderNumberListIncrementGetOrderSnIncrementGetResponseOrderSnListCardInfoListResponseInterface[];

  /**
   * @description: 送货入户并安装服务 0-不支持送货，1-送货入户不安装，2-送货入户并安装
   * @type: number
   * @default:
   **/
  home_delivery_type: number;

  /**
   * @description: 是否顺丰包邮，1-是 0-否
   * @type: number
   * @default:
   **/
  free_sf: number;

  /**
   * @description: 成团状态：0：拼团中、1：已成团、2：团失败
   * @type: number
   * @default:
   **/
  group_status: number;

  /**
   * @description: 成交状态：0：未成交、1：已成交、2：已取消
   * @type: number
   * @default:
   **/
  confirm_status: number;

  /**
   * @description: 定金订单信息，非定金订单为null
   * @type: PddOrderNumberListIncrementGetOrderSnIncrementGetResponseOrderSnListStepOrderInfoResponseInterface
   * @default:
   *
   **/
  step_order_info: PddOrderNumberListIncrementGetOrderSnIncrementGetResponseOrderSnListStepOrderInfoResponseInterface;

  /**
   * @description: 订单类型：0-普通订单、1-定金订单
   * @type: number
   * @default:
   **/
  trade_type: number;

  /**
   * @description: 仓库信息
   * @type: PddOrderNumberListIncrementGetOrderSnIncrementGetResponseOrderSnListOrderDepotInfoResponseInterface
   * @default:
   *
   **/
  order_depot_info: PddOrderNumberListIncrementGetOrderSnIncrementGetResponseOrderSnListOrderDepotInfoResponseInterface;

  /**
   * @description: 支付时间
   * @type: string
   * @default:
   **/
  pay_time: string;

  /**
   * @description: 全国联保，1:是，0:否
   * @type: number
   * @default:
   **/
  support_nationwide_warranty: number;

  /**
   * @description: 退货包运费，1:是，0:否
   * @type: number
   * @default:
   **/
  return_freight_payer: number;

  /**
   * @description: 只换不修，1:是，0:否
   * @type: number
   * @default:
   **/
  only_support_replace: number;

  /**
   * @description: 售后状态 0：无售后 2：买家申请退款，待商家处理 3：退货退款，待商家处理 4：商家同意退款，退款中 5：平台同意退款，退款中 6：驳回退款， 待买家处理 7：已同意退货退款,待用户发货 8：平台处理中 9：平台拒 绝退款，退款关闭 10：退款成功 11：买家撤销 12：买家逾期未处 理，退款失败 13：买家逾期，超过有效期 14 : 换货补寄待商家处理 15:换货补寄待用户处理 16:换货补寄成功 17:换货补寄失败 18:换货补寄待用户确认完成
   * @type: number
   * @default:
   **/
  after_sales_status: number;

  /**
   * @description: 是否为预售商品 1表示是 0表示否
   * @type: number
   * @default:
   **/
  is_pre_sale: number;

  /**
   * @description: 预售时间
   * @type: string
   * @default:
   **/
  pre_sale_time: string;

  /**
   * @description: 发票申请,1代表有 0代表无
   * @type: number
   * @default:
   **/
  invoice_status: number;

  /**
   * @description: 买家留言信息
   * @type: string
   * @default:
   **/
  buyer_memo: string;

  /**
   * @description: 支付申报订单号（多多国际清关请使用此字段，单号以XP开头）
   * @type: string
   * @default:
   **/
  inner_transaction_id: string;

  /**
   * @description: 商品一级分类
   * @type: string
   * @default:
   **/
  cat_id_1: string;

  /**
   * @description: 商品二级分类
   * @type: string
   * @default:
   **/
  cat_id_2: string;

  /**
   * @description: 商品三级分类
   * @type: string
   * @default:
   **/
  cat_id_3: string;

  /**
   * @description: 商品四级分类
   * @type: string
   * @default:
   **/
  cat_id_4: string;

  /**
   * @description: 缺货处理状态，-1:无缺货处理 0: 缺货待处理 1缺货已处理
   * @type: number
   * @default:
   **/
  stock_out_handle_status: number;

  /**
   * @description: 是否缺货 0-无缺货处理 1： 有缺货处理
   * @type: number
   * @default:
   **/
  is_stock_out: number;

  /**
   * @description: 国家或地区编码
   * @type: number
   * @default:
   **/
  country_id: number;

  /**
   * @description: 省份编码
   * @type: number
   * @default:
   **/
  province_id: number;

  /**
   * @description: 城市编码
   * @type: number
   * @default:
   **/
  city_id: number;

  /**
   * @description: 区县编码
   * @type: number
   * @default:
   **/
  town_id: number;

  /**
   * @description: 确认收货时间
   * @type: string
   * @default:
   **/
  receive_time: string;

  /**
   * @description: 团长免单优惠金额，只在团长免单活动中才会返回优惠金额
   * @type: string
   * @default:
   **/
  capital_free_discount: string;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 成交时间
   * @type: string
   * @default:
   **/
  confirm_time: string;

  /**
   * @description: 收件人姓名
   * @type: string
   * @default:
   **/
  receiver_name: string;

  /**
   * @description: 创建时间
   * @type: string
   * @default:
   **/
  created_time: string;

  /**
   * @description: 收件地国家或地区
   * @type: string
   * @default:
   **/
  country: string;

  /**
   * @description: 收件地省份
   * @type: string
   * @default:
   **/
  province: string;

  /**
   * @description: 收件地城市
   * @type: string
   * @default:
   **/
  city: string;

  /**
   * @description: 收件地区县
   * @type: string
   * @default:
   **/
  town: string;

  /**
   * @description: 收件详细地址
   * @type: string
   * @default:
   **/
  address: string;

  /**
   * @description: 收件人电话，仅订单状态为待发货状态下返回明文，其他状态下返回脱敏手机号，例如“1387677****”
   * @type: string
   * @default:
   **/
  receiver_phone: string;

  /**
   * @description: 支付金额（元），支付金额=商品金额-折扣金额+邮费
   * @type: string
   * @default:
   **/
  pay_amount: string;

  /**
   * @description: 商品金额（元），商品金额=商品销售价格*商品数量-改价金额（接口暂无该字段）
   * @type: string
   * @default:
   **/
  goods_amount: string;

  /**
   * @description: 折扣金额（元），折扣金额=平台优惠+商家优惠+团长免单优惠金额
   * @type: string
   * @default:
   **/
  discount_amount: string;

  /**
   * @description: 邮费
   * @type: string
   * @default:
   **/
  postage: string;

  /**
   * @description: 支付单号
   * @type: string
   * @default:
   **/
  pay_no: string;

  /**
   * @description: 支付方式，枚举值：QQ,WEIXIN,ALIPAY,LIANLIANPAY
   * @type: string
   * @default:
   **/
  pay_type: string;

  /**
   * @description: 快递公司编号
   * @type: string
   * @default:
   **/
  logistics_id: string;

  /**
   * @description: 快递运单号
   * @type: string
   * @default:
   **/
  tracking_number: string;

  /**
   * @description: 发货时间
   * @type: string
   * @default:
   **/
  shipping_time: string;

  /**
   * @description: 发货状态，枚举值：1：待发货，2：已发货待签收，3：已签收
   * @type: number
   * @default:
   **/
  order_status: number;

  /**
   * @description: 是否抽奖订单，1-非抽奖订单，2-抽奖订单
   * @type: number
   * @default:
   **/
  is_lucky_flag: number;

  /**
   * @description: 退款状态，枚举值：1：无售后或售后关闭，2：售后处理中，3：退款中，4： 退款成功
   * @type: number
   * @default:
   **/
  refund_status: number;

  /**
   * @description: 订单最近一次更新时间
   * @type: string
   * @default:
   **/
  updated_at: string;

  /**
   * @description: 订单承诺发货时间
   * @type: string
   * @default:
   **/
  last_ship_time: string;

  /**
   * @description: 商家订单备注
   * @type: string
   * @default:
   **/
  remark: string;

  /**
   * @description: 商品规格对象
   * @type: PddOrderNumberListIncrementGetOrderSnIncrementGetResponseOrderSnListItemListResponseInterface[]
   * @default:
   *
   **/
  item_list: PddOrderNumberListIncrementGetOrderSnIncrementGetResponseOrderSnListItemListResponseInterface[];

  /**
   * @description: 平台优惠金额
   * @type: string
   * @default:
   **/
  platform_discount: string;

  /**
   * @description: 店铺优惠金额
   * @type: string
   * @default:
   **/
  seller_discount: string;

  /**
   * @description: 收件人地址,不拼接省市区
   * @type: string
   * @default:
   **/
  receiver_address: string;

  /**
   * @description: 是否门店自提，1-是，0-否
   * @type: number
   * @default:
   **/
  self_contained: number;

  /**
   * @description: 风控订单状态(0-正常订单， 1-风控中订单)
   * @type: number
   * @default:
   **/
  risk_control_status: number;
}

/**
 * @description 卡号信息列表
 * @default
 * @example
 **/
export interface PddOrderNumberListIncrementGetOrderSnIncrementGetResponseOrderSnListCardInfoListResponseInterface {
  /**
   * @description: 卡号
   * @type: string
   * @default:
   **/
  card_no: string;

  /**
   * @description: 卡密
   * @type: string
   * @default:
   **/
  mask_password: string;
}

/**
 * @description 定金订单信息，非定金订单为null
 * @default
 * @example
 **/
export interface PddOrderNumberListIncrementGetOrderSnIncrementGetResponseOrderSnListStepOrderInfoResponseInterface {
  /**
   * @description: 分阶段已付定金 单位：元
   * @type: string
   * @default:
   **/
  advanced_paid_fee: string;

  /**
   * @description: 分阶段已付金额 单位：元
   * @type: string
   * @default:
   **/
  step_paid_fee: string;

  /**
   * @description: 膨胀金额 单位：元
   * @type: string
   * @default:
   **/
  step_discount_amount: string;

  /**
   * @description: 定金订单状态：0-定金未付尾款未付、1-定金已付尾款未付、2-定金已付尾款已付
   * @type: number
   * @default:
   **/
  step_trade_status: number;
}

/**
 * @description 仓库信息
 * @default
 * @example
 **/
export interface PddOrderNumberListIncrementGetOrderSnIncrementGetResponseOrderSnListOrderDepotInfoResponseInterface {
  /**
   * @description: 子货品列表（组合货品才会有子货品信息）
   * @type: PddOrderNumberListIncrementGetOrderSnIncrementGetResponseOrderSnListOrderDepotInfoWareSubInfoListResponseInterface[]
   * @default:
   *
   **/
  ware_sub_info_list: PddOrderNumberListIncrementGetOrderSnIncrementGetResponseOrderSnListOrderDepotInfoWareSubInfoListResponseInterface[];

  /**
   * @description: 货品编码
   * @type: string
   * @default:
   **/
  ware_sn: string;

  /**
   * @description: 货品类型（0：普通货品:1：组合货品）
   * @type: number
   * @default:
   **/
  ware_type: number;

  /**
   * @description: 货品名称
   * @type: string
   * @default:
   **/
  ware_name: string;

  /**
   * @description: 货品id
   * @type: string
   * @default:
   **/
  ware_id: string;

  /**
   * @description: 仓库编码
   * @type: string
   * @default:
   **/
  depot_code: string;

  /**
   * @description: 仓库名称
   * @type: string
   * @default:
   **/
  depot_name: string;

  /**
   * @description: 仓库id
   * @type: string
   * @default:
   **/
  depot_id: string;

  /**
   * @description: 仓库类型，1：自有仓 2：订阅仓 两者都不是则传空
   * @type: number
   * @default:
   **/
  depot_type: number;
}

/**
 * @description 子货品列表（组合货品才会有子货品信息）
 * @default
 * @example
 **/
export interface PddOrderNumberListIncrementGetOrderSnIncrementGetResponseOrderSnListOrderDepotInfoWareSubInfoListResponseInterface {
  /**
   * @description: 子货品编码
   * @type: string
   * @default:
   **/
  ware_sn: string;

  /**
   * @description: 子货品数量
   * @type: string
   * @default:
   **/
  ware_quantity: string;

  /**
   * @description: 子货品名称
   * @type: string
   * @default:
   **/
  ware_name: string;

  /**
   * @description: 子货品1id
   * @type: string
   * @default:
   **/
  ware_id: string;
}

/**
 * @description 商品规格对象
 * @default
 * @example
 **/
export interface PddOrderNumberListIncrementGetOrderSnIncrementGetResponseOrderSnListItemListResponseInterface {
  /**
   * @description: 商品编号
   * @type: string
   * @default:
   **/
  goods_id: string;

  /**
   * @description: 商品规格编码
   * @type: string
   * @default:
   **/
  sku_id: string;

  /**
   * @description: 商家外部编码（sku），注意：编辑商品后必须等待商品审核通过后方可生效，订单中商品信息为交易快照的商品信息。
   * @type: string
   * @default:
   **/
  outer_id: string;

  /**
   * @description: 商家外部编码（商品），注意：编辑商品后必须等待商品审核通过后方可生效，订单中商品信息为交易快照的商品信息。
   * @type: string
   * @default:
   **/
  outer_goods_id: string;

  /**
   * @description: 商品名称
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 商品销售价格
   * @type: string
   * @default:
   **/
  goods_price: string;

  /**
   * @description: 商品规格，使用（规格值1,规格值2）组合作为sku的表示，中间以英文逗号隔开
   * @type: string
   * @default:
   **/
  goods_spec: string;

  /**
   * @description: 商品数量
   * @type: string
   * @default:
   **/
  goods_count: string;

  /**
   * @description: 商品图片
   * @type: string
   * @default:
   **/
  goods_img: string;
}
