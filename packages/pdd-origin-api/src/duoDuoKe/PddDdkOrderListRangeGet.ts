export const PDD_DDK_ORDER_LIST_RANGE_GET = 'pdd.ddk.order.list.range.get';
export const PDD_DDK_ORDER_LIST_RANGE_GET_RESPONSE_KEY = 'order_list_get_response';

/**
 * 接口名称：用时间段查询推广订单接口
 * 接口标识：pdd.ddk.order.list.range.get
 * 接口使用场景：用时间段查询推广订单接口
 **/
export interface PddDdkOrderListRangeGetRequestInterface {
  /**
   * @description: 是否为礼金订单，查询礼金订单时，订单类型不填（默认推广订单）。
   * @type: boolean
   * @default:
   **/
  cash_gift_order?: boolean;

  /**
   * @description: 支付结束时间，格式: "yyyy-MM-dd HH:mm:ss" ，比如 "2020-12-01 00:00:00"
   * @type: string
   * @default:
   **/
  end_time: string;

  /**
   * @description: 上一次的迭代器id(第一次不填)
   * @type: string
   * @default:
   **/
  last_order_id?: string;

  /**
   * @description: 每次请求多少条，建议300
   * @type: number
   * @default:
   **/
  page_size?: number;

  /**
   * @description: 订单类型：1-推广订单；2-直播间订单
   * @type: number
   * @default: 1
   **/
  query_order_type?: number;

  /**
   * @description: 支付起始时间，格式: "yyyy-MM-dd HH:mm:ss" ，比如 "2020-12-01 00:00:00"
   * @type: string
   * @default:
   **/
  start_time: string;
}

/**
 * 接口名称：用时间段查询推广订单接口
 * 接口标识：pdd.ddk.order.list.range.get
 * 接口使用场景：用时间段查询推广订单接口
 **/
export interface PddDdkOrderListRangeGetResponseInterface {
  /**
   * @description: order_list_get_response
   * @type: PddDdkOrderListRangeGetOrderListGetResponseResponseInterface
   * @default:
   *
   **/
  order_list_get_response: PddDdkOrderListRangeGetOrderListGetResponseResponseInterface;
}

/**
 * @description order_list_get_response
 * @default
 * @example
 **/
export interface PddDdkOrderListRangeGetOrderListGetResponseResponseInterface {
  /**
   * @description: last_order_id
   * @type: string
   * @default:
   **/
  last_order_id: string;

  /**
   * @description: 多多进宝推广位对象列表
   * @type: PddDdkOrderListRangeGetOrderListGetResponseOrderListResponseInterface[]
   * @default:
   *
   **/
  order_list: PddDdkOrderListRangeGetOrderListGetResponseOrderListResponseInterface[];
}

/**
 * @description 多多进宝推广位对象列表
 * @default
 * @example
 **/
export interface PddDdkOrderListRangeGetOrderListGetResponseOrderListResponseInterface {
  /**
   * @description: 多多客工具id
   * @type: string | number
   * @default:
   **/
  auth_duo_id: string | number;

  /**
   * @description: 结算批次号
   * @type: string
   * @default:
   **/
  batch_no: string;

  /**
   * @description: 订单关联礼金活动Id
   * @type: string | number
   * @default:
   **/
  cash_gift_id: string | number;

  /**
   * @description: 商品一~四级类目ID列表
   * @type: Array<string | number>
   * @default:
   **/
  cat_ids: Array<string | number>;

  /**
   * @description: 是否是 cpa 新用户，1表示是，0表示否
   * @type: number
   * @default:
   **/
  cpa_new: number;

  /**
   * @description: 自定义参数
   * @type: string
   * @default:
   **/
  custom_parameters: string;

  /**
   * @description: 订单审核失败原因
   * @type: string
   * @default:
   **/
  fail_reason: string;

  /**
   * @description: 商品ID
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 商品标题
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 订单中sku的单件价格，单位为分
   * @type: string | number
   * @default:
   **/
  goods_price: string | number;

  /**
   * @description: 购买商品的数量
   * @type: string | number
   * @default:
   **/
  goods_quantity: string | number;

  /**
   * @description: goodsSign是加密后的goodsId，goodsId已下线，请使用goodsSign来替代。需要注意的是：推广链接带有goodsSign信息时，订单会返回原goodsSign；反之，会生成新的goodsSign返回。
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
   * @description: 成团编号
   * @type: string | number
   * @default:
   **/
  group_id: string | number;

  /**
   * @description: 是否直推 ，1表示是，0表示否
   * @type: number
   * @default:
   **/
  is_direct: number;

  /**
   * @description: 实际支付金额，单位为分
   * @type: string | number
   * @default:
   **/
  order_amount: string | number;

  /**
   * @description: 订单生成时间，UNIX时间戳
   * @type: string | number
   * @default:
   **/
  order_create_time: string | number;

  /**
   * @description: 成团时间
   * @type: string | number
   * @default:
   **/
  order_group_success_time: string | number;

  /**
   * @description: 最后更新时间
   * @type: string | number
   * @default:
   **/
  order_modify_at: string | number;

  /**
   * @description: 支付时间
   * @type: string | number
   * @default:
   **/
  order_pay_time: string | number;

  /**
   * @description: 确认收货时间
   * @type: string | number
   * @default:
   **/
  order_receive_time: string | number;

  /**
   * @description: 结算时间
   * @type: string | number
   * @default:
   **/
  order_settle_time: string | number;

  /**
   * @description: 推广订单编号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 订单状态：0-已支付；1-已成团；2-确认收货；3-审核成功；4-审核失败（不可提现）；5-已经结算 ;10-已处罚
   * @type: number
   * @default:
   **/
  order_status: number;

  /**
   * @description: 订单状态描述
   * @type: string
   * @default:
   **/
  order_status_desc: string;

  /**
   * @description: 审核时间
   * @type: string | number
   * @default:
   **/
  order_verify_time: string | number;

  /**
   * @description: 比价状态：0：正常，1：比价
   * @type: number
   * @default:
   **/
  price_compare_status: number;

  /**
   * @description: 佣金金额，单位为分
   * @type: string | number
   * @default:
   **/
  promotion_amount: string | number;

  /**
   * @description: 佣金比例，千分比
   * @type: string | number
   * @default:
   **/
  promotion_rate: string | number;

  /**
   * @description: 推广位ID
   * @type: string
   * @default:
   **/
  p_id: string;

  /**
   * @description: 直播间订单推广duoId
   * @type: string | number
   * @default:
   **/
  sep_duo_id: string | number;

  /**
   * @description: 直播间推广佣金
   * @type: number
   * @default:
   **/
  sep_market_fee: number;

  /**
   * @description: 直播间推广自定义参数
   * @type: string
   * @default:
   **/
  sep_parameters: string;

  /**
   * @description: 直播间订单推广位
   * @type: string
   * @default:
   **/
  sep_pid: string;

  /**
   * @description: 直播间推广佣金比例
   * @type: number
   * @default:
   **/
  sep_rate: number;

  /**
   * @description: 招商分成服务费金额，单位为分
   * @type: number
   * @default:
   **/
  share_amount: number;

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
   * @description: 等级补贴给渠道的收入补贴，不允许直接给下级代理展示，单位为分
   * @type: number
   * @default:
   **/
  subsidy_duo_amount_level: number;

  /**
   * @description: 千万补贴给渠道的收入补贴，不允许直接给下级代理展示，单位为分
   * @type: number
   * @default:
   **/
  subsidy_duo_amount_ten_million: number;

  /**
   * @description: 订单补贴类型：0-非补贴订单，1-千万补贴，2-社群补贴
   * @type: number
   * @default:
   **/
  subsidy_type: number;

  /**
   * @description: 订单类型：0：领券页面， 1： 红包页， 2：领券页， 3： 题页
   * @type: number
   * @default:
   **/
  type: number;

  /**
   * @description: 招商多多客id
   * @type: string | number
   * @default:
   **/
  zs_duo_id: string | number;
}
