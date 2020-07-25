export const PDD_DDK_ORDER_DETAIL_GET = 'pdd.ddk.order.detail.get';
export const PDD_DDK_ORDER_DETAIL_GET_RESPONSE_KEY = 'order_detail_response';

/**
 * 接口名称：查询订单详情
 * 接口标识：pdd.ddk.order.detail.get
 * 接口使用场景：查询订单详情
 **/
export interface PddDdkOrderDetailGetRequestInterface {
  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 订单类型：1-推广订单；2-直播间订单
   * @type: number
   * @default: 1
   **/
  query_order_type?: number;
}

/**
 * 接口名称：查询订单详情
 * 接口标识：pdd.ddk.order.detail.get
 * 接口使用场景：查询订单详情
 **/
export interface PddDdkOrderDetailGetResponseInterface {
  /**
   * @description: order_detail_response
   * @type: PddDdkOrderDetailGetOrderDetailResponseResponseInterface
   * @default:
   *
   **/
  order_detail_response: PddDdkOrderDetailGetOrderDetailResponseResponseInterface;
}

/**
 * @description order_detail_response
 * @default
 * @example
 **/
export interface PddDdkOrderDetailGetOrderDetailResponseResponseInterface {
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
   * @description: 是否是 cpa 新用户，1表示是，0表示否
   * @type: number
   * @default:
   **/
  cpa_new: number;

  /**
   * @description: CPS_Sign
   * @type: string
   * @default:
   **/
  cps_sign: string;

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
   * @description: 商品价格（分）
   * @type: string | number
   * @default:
   **/
  goods_price: string | number;

  /**
   * @description: 商品数量
   * @type: string | number
   * @default:
   **/
  goods_quantity: string | number;

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
   * @description: 订单价格（分）
   * @type: string | number
   * @default:
   **/
  order_amount: string | number;

  /**
   * @description: 订单创建时间（UNIX时间戳）
   * @type: string | number
   * @default:
   **/
  order_create_time: string | number;

  /**
   * @description: 订单成团时间（UNIX时间戳）
   * @type: string | number
   * @default:
   **/
  order_group_success_time: string | number;

  /**
   * @description: 订单最后更新时间（UNIX时间戳）
   * @type: string | number
   * @default:
   **/
  order_modify_at: string | number;

  /**
   * @description: 订单支付时间（UNIX时间戳）
   * @type: string | number
   * @default:
   **/
  order_pay_time: string | number;

  /**
   * @description: 订单确认收货时间（UNIX时间戳）
   * @type: string | number
   * @default:
   **/
  order_receive_time: string | number;

  /**
   * @description: 订单结算时间（UNIX时间戳）
   * @type: string | number
   * @default:
   **/
  order_settle_time: string | number;

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
   * @description: 订单状态描述（ -1 未支付; 0-已支付；1-已成团；2-确认收货；3-审核成功；4-审核失败（不可提现）；5-已经结算；8-非多多进宝商品（无佣金订单）;10-已处罚）
   * @type: string
   * @default:
   **/
  order_status_desc: string;

  /**
   * @description: 订单审核时间（UNIX时间戳）
   * @type: string | number
   * @default:
   **/
  order_verify_time: string | number;

  /**
   * @description: 推广位id
   * @type: string
   * @default:
   **/
  pid: string;

  /**
   * @description: 打点时间
   * @type: string | number
   * @default:
   **/
  point_time: string | number;

  /**
   * @description: 佣金（分）
   * @type: string | number
   * @default:
   **/
  promotion_amount: string | number;

  /**
   * @description: 佣金比例 千分比
   * @type: string | number
   * @default:
   **/
  promotion_rate: string | number;

  /**
   * @description: 售后状态：0：无，1：售后中，2：售后完成
   * @type: number
   * @default:
   **/
  return_status: number;

  /**
   * @description: 订单类型：0：领券页面， 1： 红包页， 2：领券页， 3： 题页
   * @type: number
   * @default:
   **/
  type: number;

  /**
   * @description: 链接最后一次生产时间
   * @type: string | number
   * @default:
   **/
  url_last_generate_time: string | number;

  /**
   * @description: 招商多多客id
   * @type: string | number
   * @default:
   **/
  zs_duo_id: string | number;

  /**
   * @description: 商品一~四级类目ID列表
   * @type: Array<string | number>
   * @default:
   **/
  cat_ids: Array<string | number>;

  /**
   * @description: 是否直推 ，1表示是，0表示否
   * @type: number
   * @default:
   **/
  is_direct: number;

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
   * @description: 直播间推广自定义参数
   * @type: string
   * @default:
   **/
  sep_parameters: string;
}