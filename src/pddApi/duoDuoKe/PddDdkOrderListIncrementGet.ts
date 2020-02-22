export const PDD_DDK_ORDER_LIST_INCREMENT_GET = 'PDD_DDK_ORDER_LIST_INCREMENT_GET';

/**
 * 接口名称：最后更新时间段增量同步推广订单信息
 * 接口标识：pdd.ddk.order.list.increment.get
 * 接口使用场景：按照时间段获取授权多多客下面所有多多客的推广订单信息
 **/
export interface PddDdkOrderListIncrementGetRequestInterface {
  /**
   * @description: 最近90天内多多进宝商品订单更新时间--查询时间开始。note：此时间为时间戳，指格林威治时间 1970 年01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)起至现在的总秒数
   * @type: string
   * @default:
   **/
  start_update_time?: string;

  /**
   * @description: 查询结束时间，和开始时间相差不能超过24小时。note：此时间为时间戳，指格林威治时间 1970 年01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)起至现在的总秒数
   * @type: string
   * @default:
   **/
  end_update_time?: string;

  /**
   * @description: 返回的每页结果订单数，默认为100，范围为10到100，建议使用40~50，可以提高成功率，减少超时数量。
   * @type: number
   * @default:
   **/
  page_size: number;

  /**
   * @description: 第几页，从1到10000，默认1，注：使用最后更新时间范围增量同步时，必须采用倒序的分页方式（从最后一页往回取）才能避免漏单问题。
   * @type: number
   * @default:
   **/
  page: number;

  /**
   * @description: 是否返回总数，默认为true，如果指定false, 则返回的结果中不包含总记录数，通过此种方式获取增量数据，效率在原有的基础上有80%的提升。
   * @type: boolean
   * @default:
   **/
  return_count: boolean;
}

/**
 * 接口名称：最后更新时间段增量同步推广订单信息
 * 接口标识：pdd.ddk.order.list.increment.get
 * 接口使用场景：按照时间段获取授权多多客下面所有多多客的推广订单信息
 **/
export interface PddDdkOrderListIncrementGetResponseInterface {
  /**
   * @description: order_list_get_response
   * @type: PddDdkOrderListIncrementGetOrderListGetResponseResponseInterface
   * @default:
   *
   **/
  order_list_get_response: PddDdkOrderListIncrementGetOrderListGetResponseResponseInterface;
}

/**
 * @description order_list_get_response
 * @default
 * @example
 **/
export interface PddDdkOrderListIncrementGetOrderListGetResponseResponseInterface {
  /**
   * @description: 多多进宝推广位对象列表
   * @type: PddDdkOrderListIncrementGetOrderListGetResponseOrderListResponseInterface[]
   * @default:
   *
   **/
  order_list: PddDdkOrderListIncrementGetOrderListGetResponseOrderListResponseInterface[];

  /**
   * @description: 请求到的结果数
   * @type: string
   * @default:
   **/
  total_count: string;
}

/**
 * @description 多多进宝推广位对象列表
 * @default
 * @example
 **/
export interface PddDdkOrderListIncrementGetOrderListGetResponseOrderListResponseInterface {
  /**
   * @description: 推广订单编号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 商品ID
   * @type: string
   * @default:
   **/
  goods_id: string;

  /**
   * @description: 商品标题
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
   * @description: 购买商品的数量
   * @type: string
   * @default:
   **/
  goods_quantity: string;

  /**
   * @description: 订单中sku的单件价格，单位为分
   * @type: string
   * @default:
   **/
  goods_price: string;

  /**
   * @description: 实际支付金额，单位为分
   * @type: string
   * @default:
   **/
  order_amount: string;

  /**
   * @description: 推广位ID
   * @type: string
   * @default:
   **/
  p_id: string;

  /**
   * @description: 佣金比例，千分比
   * @type: string
   * @default:
   **/
  promotion_rate: string;

  /**
   * @description: 佣金金额，单位为分
   * @type: string
   * @default:
   **/
  promotion_amount: string;

  /**
   * @description: 订单状态： -1 未支付; 0-已支付；1-已成团；2-确认收货；3-审核成功；4-审核失败（不可提现）；5-已经结算；8-非多多进宝商品（无佣金订单）
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
   * @description: 订单生成时间，UNIX时间戳
   * @type: string
   * @default:
   **/
  order_create_time: string;

  /**
   * @description: 支付时间
   * @type: string
   * @default:
   **/
  order_pay_time: string;

  /**
   * @description: 成团时间
   * @type: string
   * @default:
   **/
  order_group_success_time: string;

  /**
   * @description: 审核时间
   * @type: string
   * @default:
   **/
  order_verify_time: string;

  /**
   * @description: 最后更新时间
   * @type: string
   * @default:
   **/
  order_modify_at: string;

  /**
   * @description: 自定义参数
   * @type: string
   * @default:
   **/
  custom_parameters: string;

  /**
   * @description: 是否是 cpa 新用户，1表示是，0表示否
   * @type: number
   * @default:
   **/
  cpa_new: number;

  /**
   * @description: 订单推广类型
   * @type: number
   * @default:
   **/
  type: number;

  /**
   * @description: 结算时间
   * @type: string
   * @default:
   **/
  order_settle_time: string;

  /**
   * @description: 多多客工具id
   * @type: string
   * @default:
   **/
  auth_duo_id: string;

  /**
   * @description: 结算批次号
   * @type: string
   * @default:
   **/
  batch_no: string;

  /**
   * @description: 确认收货时间
   * @type: string
   * @default:
   **/
  order_receive_time: string;

  /**
   * @description: 成团编号
   * @type: string
   * @default:
   **/
  group_id: string;

  /**
   * @description: 审核失败原因
   * @type: string
   * @default:
   **/
  fail_reason: string;

  /**
   * @description: 订单ID
   * @type: string
   * @default:
   **/
  order_id: string;

  /**
   * @description: 招商多多客id
   * @type: string
   * @default:
   **/
  zs_duo_id: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_DDK_ORDER_LIST_INCREMENT_GET]: {
    requestInterface: PddDdkOrderListIncrementGetRequestInterface;
    responseInterface: PddDdkOrderListIncrementGetResponseInterface;
  };
}
