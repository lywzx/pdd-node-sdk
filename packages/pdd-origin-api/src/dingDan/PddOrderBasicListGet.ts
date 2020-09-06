export const PDD_ORDER_BASIC_LIST_GET = 'pdd.order.basic.list.get';
export const PDD_ORDER_BASIC_LIST_GET_RESPONSE_KEY = 'order_basic_list_get_response';

/**
 * 接口名称：订单基础信息列表查询接口（根据成交时间）
 * 接口标识：pdd.order.basic.list.get
 * 接口使用场景：根据成团时间查询订单列表，只有订单基础信息，不包含消费者信息
 **/
export interface PddOrderBasicListGetRequestInterface {
  /**
   * @description: 必填，成交时间结束时间的时间戳，指格林威治时间 1970 年 01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)起至现在的总秒数 PS：开始时间结束时间间距不超过 24 小时
   * @type: number
   * @default:
   **/
  end_confirm_at: number;

  /**
   * @description: 发货状态，1：待发货，2：已发货待签收，3：已签收 5：全部
   * @type: number
   * @default:
   **/
  order_status: number;

  /**
   * @description: 返回页码 默认 1，页码从 1 开始 PS：当前采用分页返回，数量和页数会一起传，如果不传，则采用 默认值
   * @type: number
   * @default:
   **/
  page: number;

  /**
   * @description: 返回数量，默认 100。最大 100
   * @type: number
   * @default:
   **/
  page_size: number;

  /**
   * @description: 售后状态 1：无售后或售后关闭，2：售后处理中，3：退款中，4： 退款成功 5：全部
   * @type: number
   * @default:
   **/
  refund_status: number;

  /**
   * @description: 必填，成交时间开始时间的时间戳，指格林威治时间 1970 年 01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)起至现在的总秒数
   * @type: number
   * @default:
   **/
  start_confirm_at: number;

  /**
   * @description: 订单类型 0-普通订单 ，1- 定金订单
   * @type: number
   * @default:
   **/
  trade_type?: number;

  /**
   * @description: 是否启用has_next的分页方式，如果指定true,则返回的结果中不包含总记录数，但是会新增一个是否存在下一页的的字段，通过此种方式获取增量交易，效率在原有的基础上有80%的提升。
   * @type: boolean
   * @default:
   **/
  use_has_next?: boolean;
}

/**
 * 接口名称：订单基础信息列表查询接口（根据成交时间）
 * 接口标识：pdd.order.basic.list.get
 * 接口使用场景：根据成团时间查询订单列表，只有订单基础信息，不包含消费者信息
 **/
export interface PddOrderBasicListGetResponseInterface {
  /**
   * @description: 请求response
   * @type: PddOrderBasicListGetOrderBasicListGetResponseResponseInterface
   * @default:
   *
   **/
  order_basic_list_get_response: PddOrderBasicListGetOrderBasicListGetResponseResponseInterface;
}

/**
 * @description 请求response
 * @default
 * @example 1
 **/
export interface PddOrderBasicListGetOrderBasicListGetResponseResponseInterface {
  /**
   * @description: 是否存在下一页
   * @type: boolean
   * @default:
   **/
  has_next: boolean;

  /**
   * @description: 订单信息列表
   * @type: PddOrderBasicListGetOrderBasicListGetResponseOrderListResponseInterface[]
   * @default:
   *
   **/
  order_list: PddOrderBasicListGetOrderBasicListGetResponseOrderListResponseInterface[];

  /**
   * @description: 订单总数
   * @type: number
   * @default:
   **/
  total_count: number;
}

/**
 * @description 订单信息列表
 * @default
 * @example 1
 **/
export interface PddOrderBasicListGetOrderBasicListGetResponseOrderListResponseInterface {
  /**
   * @description: 商品一级分类
   * @type: string | number
   * @default:
   **/
  cat_id_1: string | number;

  /**
   * @description: 商品二级分类
   * @type: string | number
   * @default:
   **/
  cat_id_2: string | number;

  /**
   * @description: 商品三级分类
   * @type: string | number
   * @default:
   **/
  cat_id_3: string | number;

  /**
   * @description: 商品四级分类
   * @type: string | number
   * @default:
   **/
  cat_id_4: string | number;

  /**
   * @description: 成交时间
   * @type: string
   * @default:
   **/
  confirm_time: string;

  /**
   * @description: 送货入户费用 单位：元
   * @type: string
   * @default:
   **/
  delivery_home_value: string;

  /**
   * @description: 送货入户并安装费用 单位：元
   * @type: string
   * @default:
   **/
  delivery_install_value: string;

  /**
   * @description: 折扣金额，单位：元，折扣金额=平台优惠+商家优惠+团长免单优惠金额
   * @type: string
   * @default:
   **/
  discount_amount: string;

  /**
   * @description: 商品金额，单位：元，商品金额=商品销售价格*商品数量-改价金额（接口暂无该字段）
   * @type: string
   * @default:
   **/
  goods_amount: string;

  /**
   * @description: 送货入户并安装服务 0-不支持送货，1-送货入户不安装，2-送货入户并安装
   * @type: number
   * @default:
   **/
  home_delivery_type: number;

  /**
   * @description: 上门安装费用 单位：元
   * @type: string
   * @default:
   **/
  home_install_value: string;

  /**
   * @description: 是否是抽奖订单，1-非抽奖订单，2-抽奖订单
   * @type: number
   * @default:
   **/
  is_lucky_flag: number;

  /**
   * @description: 订单商品列表
   * @type: PddOrderBasicListGetOrderBasicListGetResponseOrderListItemListResponseInterface[]
   * @default:
   *
   **/
  item_list: PddOrderBasicListGetOrderBasicListGetResponseOrderListItemListResponseInterface[];

  /**
   * @description: 订单编号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 订单状态
   * @type: number
   * @default:
   **/
  order_status: number;

  /**
   * @description: 支付金额，单位：元，支付金额=商品金额-折扣金额+邮费
   * @type: string
   * @default:
   **/
  pay_amount: string;

  /**
   * @description: 平台优惠金额，单位：元
   * @type: string
   * @default:
   **/
  platform_discount: string;

  /**
   * @description: 邮费，单位：元
   * @type: string
   * @default:
   **/
  postage: string;

  /**
   * @description: 售后状态
   * @type: number
   * @default:
   **/
  refund_status: number;

  /**
   * @description: 订单审核状态（0-正常订单， 1-审核中订单）
   * @type: number
   * @default:
   **/
  risk_control_status: number;

  /**
   * @description: 商家优惠金额，单位：元
   * @type: string
   * @default:
   **/
  seller_discount: string;

  /**
   * @description: { "step_discount_amount":4, "advanced_paid_fee":1, "step_paid_fee":1.1, "step_trade_status":2 }
   * @type: PddOrderBasicListGetOrderBasicListGetResponseOrderListStepOrderInfoResponseInterface
   * @default:
   *
   **/
  step_order_info: PddOrderBasicListGetOrderBasicListGetResponseOrderListStepOrderInfoResponseInterface;

  /**
   * @description: 订单类型 0-普通订单 ，1- 定金订单
   * @type: number
   * @default:
   **/
  trade_type: number;

  /**
   * @description: 订单的更新时间
   * @type: string
   * @default:
   **/
  updated_at: string;
}

/**
 * @description 订单商品列表
 * @default
 * @example 1
 **/
export interface PddOrderBasicListGetOrderBasicListGetResponseOrderListItemListResponseInterface {
  /**
   * @description: 商品数量
   * @type: number
   * @default:
   **/
  goods_count: number;

  /**
   * @description: 商品编码
   * @type: string
   * @default:
   **/
  goods_id: string;

  /**
   * @description: 商品图片
   * @type: string
   * @default:
   **/
  goods_img: string;

  /**
   * @description: 商品名称
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 商品单件 单价：元
   * @type: string
   * @default:
   **/
  goods_price: string;

  /**
   * @description: 商品规格
   * @type: string
   * @default:
   **/
  goods_spec: string;

  /**
   * @description: 商品维度外部编码，注意：编辑商品后必须等待商品审核通过后方可生效，订单中商品信息为交易快照的商品信息。
   * @type: string
   * @default:
   **/
  outer_goods_id: string;

  /**
   * @description: sku维度商家外部编码，注意：编辑商品后必须等待商品审核通过后方可生效，订单中商品信息为交易快照的商品信息。
   * @type: string
   * @default:
   **/
  outer_id: string;

  /**
   * @description: 商品sku编码
   * @type: string
   * @default:
   **/
  sku_id: string;
}

/**
 * @description { "step_discount_amount":4, "advanced_paid_fee":1, "step_paid_fee":1.1, "step_trade_status":2 }
 * @default
 * @example 1
 **/
export interface PddOrderBasicListGetOrderBasicListGetResponseOrderListStepOrderInfoResponseInterface {
  /**
   * @description: 已付定金 单位：元
   * @type: string
   * @default:
   **/
  advanced_paid_fee: string;

  /**
   * @description: 膨胀金额 单位：元
   * @type: string
   * @default:
   **/
  step_discount_amount: string;

  /**
   * @description: 分阶段已付金额 单位：元
   * @type: string
   * @default:
   **/
  step_paid_fee: string;

  /**
   * @description: 定金订单状态：step_trade_status 枚举：0-定金未付尾款未付、1-定金已付尾款未付、2-定金已付尾款已付
   * @type: number
   * @default:
   **/
  step_trade_status: number;
}
