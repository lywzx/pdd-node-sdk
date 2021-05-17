export const PDD_CLOUD_WMS_ORDER_SEND = 'pdd.cloud.wms.order.send';
export const PDD_CLOUD_WMS_ORDER_SEND_RESPONSE_KEY = 'send_response';

/**
 * 接口名称：云内下发wms订单接口
 * 接口标识：pdd.cloud.wms.order.send
 * 接口使用场景：云内下发wms订单接口
 **/
export interface PddCloudWmsOrderSendRequestInterface {
  /**
   * @description: 订单下发wms请求
   * @type: PddCloudWmsOrderSendWmsOrderSendRequestRequestInterface
   * @default:
   *
   **/
  wms_order_send_request?: PddCloudWmsOrderSendWmsOrderSendRequestRequestInterface;
}

/**
 * @description 订单下发wms请求
 * @default
 * @example
 **/
export interface PddCloudWmsOrderSendWmsOrderSendRequestRequestInterface {
  /**
   * @description: 货主编码
   * @type: string
   * @default:
   **/
  owner_code?: string;

  /**
   * @description: 货主名称
   * @type: string
   * @default:
   **/
  owner_name?: string;

  /**
   * @description: 仓库编码
   * @type: string
   * @default:
   **/
  warehouse_code?: string;

  /**
   * @description: 仓库类型
   * @type: string
   * @default:
   **/
  warehouse_type?: string;

  /**
   * @description: 单据类型
   * @type: string
   * @default:
   **/
  order_type?: string;

  /**
   * @description: 出库单号
   * @type: string
   * @default:
   **/
  delivery_order_code?: string;

  /**
   * @description: 原始平台单号
   * @type: string
   * @default:
   **/
  source_order_code?: string;

  /**
   * @description: 订单来源平台编码
   * @type: string
   * @default:
   **/
  source_platform_code?: string;

  /**
   * @description: 卖家店铺名称
   * @type: string
   * @default:
   **/
  shop_nick?: string;

  /**
   * @description: 卖家名称
   * @type: string
   * @default:
   **/
  seller_nick?: string;

  /**
   * @description: 买家名称
   * @type: string
   * @default:
   **/
  buyer_nick?: string;

  /**
   * @description: 创建时间
   * @type: string
   * @default:
   **/
  create_time?: string;

  /**
   * @description: 下单时间
   * @type: string
   * @default:
   **/
  order_time?: string;

  /**
   * @description: 付款时间
   * @type: string
   * @default:
   **/
  pay_time?: string;

  /**
   * @description: 操作(审核)时间
   * @type: string
   * @default:
   **/
  operate_time?: string;

  /**
   * @description: 订单标记(用字符串格式来表示订单标记列表
   * @type: string
   * @default:
   **/
  order_flag?: string;

  /**
   * @description: 订单总金额
   * @type: number
   * @default:
   **/
  total_amount?: number;

  /**
   * @description: 订单折扣金额
   * @type: number
   * @default:
   **/
  discount_amount?: number;

  /**
   * @description: 快递费
   * @type: number
   * @default:
   **/
  freight?: number;

  /**
   * @description: 实收金额
   * @type: number
   * @default:
   **/
  actual_amount?: number;

  /**
   * @description: 快递公司编码
   * @type: string
   * @default:
   **/
  logistics_code?: string;

  /**
   * @description: 快递单号
   * @type: string
   * @default:
   **/
  logistics_no?: string;

  /**
   * @description: 卖家留言
   * @type: string
   * @default:
   **/
  seller_message?: string;

  /**
   * @description: 买家留言
   * @type: string
   * @default:
   **/
  buyer_message?: string;

  /**
   * @description: 是否需要发票
   * @type: boolean
   * @default:
   **/
  invoice_flag?: boolean;

  /**
   * @description: 发票
   * @type: PddCloudWmsOrderSendWmsOrderSendRequestInvoiceInfoRequestInterface
   * @default:
   *
   **/
  invoice_info?: PddCloudWmsOrderSendWmsOrderSendRequestInvoiceInfoRequestInterface;

  /**
   * @description: 备注信息
   * @type: string
   * @default:
   **/
  remark?: string;

  /**
   * @description: 无库存标记 预售
   * @type: string
   * @default:
   **/
  no_stack_tag?: string;

  /**
   * @description: 发件人信息
   * @type: PddCloudWmsOrderSendWmsOrderSendRequestSenderInfoRequestInterface
   * @default:
   *
   **/
  senderInfo?: PddCloudWmsOrderSendWmsOrderSendRequestSenderInfoRequestInterface;

  /**
   * @description: 收件人信息
   * @type: PddCloudWmsOrderSendWmsOrderSendRequestReceiverInfoRequestInterface
   * @default:
   *
   **/
  receiverInfo?: PddCloudWmsOrderSendWmsOrderSendRequestReceiverInfoRequestInterface;

  /**
   * @description: 订单列表，商品明细
   * @type: PddCloudWmsOrderSendWmsOrderSendRequestOrderLineListRequestInterface[]
   * @default:
   *
   **/
  order_line_list?: PddCloudWmsOrderSendWmsOrderSendRequestOrderLineListRequestInterface[];

  /**
   * @description: 自定义字段
   * @type: string
   * @default:
   **/
  extendProps?: string;

  /**
   * @description: 第三方token
   * @type: string
   * @default:
   **/
  token?: string;

  /**
   * @description: 客户编码
   * @type: string
   * @default:
   **/
  customerId?: string;
}

/**
 * @description 发票
 * @default
 * @example
 **/
export interface PddCloudWmsOrderSendWmsOrderSendRequestInvoiceInfoRequestInterface {
  /**
   * @description: 发票类型
   * @type: string
   * @default:
   **/
  invoice_type?: string;

  /**
   * @description: 发票抬头
   * @type: string
   * @default:
   **/
  invoice_head?: string;

  /**
   * @description: 发票内容
   * @type: string
   * @default:
   **/
  invoice_content?: string;

  /**
   * @description: 税号
   * @type: string
   * @default:
   **/
  invoice_tax_number?: string;

  /**
   * @description: 扩展字段
   * @type: string
   * @default:
   **/
  invoice_ext_fields?: string;
}

/**
 * @description 发件人信息
 * @default
 * @example
 **/
export interface PddCloudWmsOrderSendWmsOrderSendRequestSenderInfoRequestInterface {
  /**
   * @description: 地址信息
   * @type: PddCloudWmsOrderSendWmsOrderSendRequestSenderInfoAddressRequestInterface
   * @default:
   *
   **/
  address?: PddCloudWmsOrderSendWmsOrderSendRequestSenderInfoAddressRequestInterface;

  /**
   * @description: 电话
   * @type: string
   * @default:
   **/
  mobile?: string;

  /**
   * @description: 姓名
   * @type: string
   * @default:
   **/
  name?: string;

  /**
   * @description: 手机
   * @type: string
   * @default:
   **/
  phone?: string;

  /**
   * @description: 邮编
   * @type: string
   * @default:
   **/
  zipcode?: string;
}

/**
 * @description 地址信息
 * @default
 * @example
 **/
export interface PddCloudWmsOrderSendWmsOrderSendRequestSenderInfoAddressRequestInterface {
  /**
   * @description: 城市
   * @type: string
   * @default:
   **/
  city?: string;

  /**
   * @description: 详细地址
   * @type: string
   * @default:
   **/
  detail?: string;

  /**
   * @description: 街道
   * @type: string
   * @default:
   **/
  district?: string;

  /**
   * @description: 省
   * @type: string
   * @default:
   **/
  province?: string;

  /**
   * @description: 镇
   * @type: string
   * @default:
   **/
  town?: string;

  /**
   * @description: 国家
   * @type: string
   * @default:
   **/
  country?: string;
}

/**
 * @description 收件人信息
 * @default
 * @example
 **/
export interface PddCloudWmsOrderSendWmsOrderSendRequestReceiverInfoRequestInterface {
  /**
   * @description: 地址信息
   * @type: PddCloudWmsOrderSendWmsOrderSendRequestReceiverInfoAddressRequestInterface
   * @default:
   *
   **/
  address?: PddCloudWmsOrderSendWmsOrderSendRequestReceiverInfoAddressRequestInterface;

  /**
   * @description: 电话
   * @type: string
   * @default:
   **/
  mobile?: string;

  /**
   * @description: 姓名
   * @type: string
   * @default:
   **/
  name?: string;

  /**
   * @description: 手机
   * @type: string
   * @default:
   **/
  phone?: string;

  /**
   * @description: 邮编
   * @type: string
   * @default:
   **/
  zipcode?: string;
}

/**
 * @description 地址信息
 * @default
 * @example
 **/
export interface PddCloudWmsOrderSendWmsOrderSendRequestReceiverInfoAddressRequestInterface {
  /**
   * @description: 城市
   * @type: string
   * @default:
   **/
  city?: string;

  /**
   * @description: 详细地址
   * @type: string
   * @default:
   **/
  detail?: string;

  /**
   * @description: 街道
   * @type: string
   * @default:
   **/
  district?: string;

  /**
   * @description: 省
   * @type: string
   * @default:
   **/
  province?: string;

  /**
   * @description: 镇
   * @type: string
   * @default:
   **/
  town?: string;

  /**
   * @description: 国家
   * @type: string
   * @default:
   **/
  country?: string;
}

/**
 * @description 订单列表，商品明细
 * @default
 * @example
 **/
export interface PddCloudWmsOrderSendWmsOrderSendRequestOrderLineListRequestInterface {
  /**
   * @description: 单据行号
   * @type: string
   * @default:
   **/
  order_line_no?: string;

  /**
   * @description: 交易平台订单
   * @type: string
   * @default:
   **/
  source_order_code?: string;

  /**
   * @description: 子交易单号
   * @type: string
   * @default:
   **/
  sub_source_order_code?: string;

  /**
   * @description: 货主编码
   * @type: string
   * @default:
   **/
  owner_code?: string;

  /**
   * @description: 仓储系统商品编码
   * @type: string
   * @default:
   **/
  item_id?: string;

  /**
   * @description: 商品编码
   * @type: string
   * @default:
   **/
  item_code?: string;

  /**
   * @description: 商品名称
   * @type: string
   * @default:
   **/
  item_name?: string;

  /**
   * @description: 应发商品数量
   * @type: number
   * @default:
   **/
  item_quantity?: number;

  /**
   * @description: 零售价
   * @type: string
   * @default:
   **/
  retail_price?: string;

  /**
   * @description: 实际成交价
   * @type: string
   * @default:
   **/
  actual_price?: string;

  /**
   * @description: 单件商品折扣金额
   * @type: string
   * @default:
   **/
  discount_amount?: string;

  /**
   * @description: 批次编码
   * @type: string
   * @default:
   **/
  batch_code?: string;

  /**
   * @description: 备注
   * @type: string
   * @default:
   **/
  remark?: string;

  /**
   * @description: 商品扩展字段
   * @type: string
   * @default:
   **/
  order_ext_fields?: string;
}

/**
 * 接口名称：云内下发wms订单接口
 * 接口标识：pdd.cloud.wms.order.send
 * 接口使用场景：云内下发wms订单接口
 **/
export interface PddCloudWmsOrderSendResponseInterface {
  /**
   * @description: 响应
   * @type: PddCloudWmsOrderSendSendResponseResponseInterface
   * @default:
   *
   **/
  send_response: PddCloudWmsOrderSendSendResponseResponseInterface;
}

/**
 * @description 响应
 * @default
 * @example
 **/
export interface PddCloudWmsOrderSendSendResponseResponseInterface {
  /**
   * @description: 响应数据
   * @type: PddCloudWmsOrderSendSendResponseDataResponseInterface
   * @default:
   *
   **/
  data: PddCloudWmsOrderSendSendResponseDataResponseInterface;

  /**
   * @description: 是否成功，false-失败，true-成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;

  /**
   * @description: 错误信息
   * @type: string
   * @default:
   **/
  error_msg: string;

  /**
   * @description: 子错误信息
   * @type: string
   * @default:
   **/
  sub_msg: string;

  /**
   * @description: 子错误码
   * @type: number
   * @default:
   **/
  sub_code: number;

  /**
   * @description: 错误码
   * @type: number
   * @default:
   **/
  error_code: number;
}

/**
 * @description 响应数据
 * @default
 * @example
 **/
export interface PddCloudWmsOrderSendSendResponseDataResponseInterface {
  /**
   * @description: 出库单仓储系统编码
   * @type: string
   * @default:
   **/
  delivery_order_id: string;

  /**
   * @description: 物流公司编码
   * @type: string
   * @default:
   **/
  logistics_code: string;

  /**
   * @description: 仓库编码
   * @type: string
   * @default:
   **/
  warehouse_code: string;

  /**
   * @description: 仓库类型
   * @type: string
   * @default:
   **/
  warehouse_type: string;

  /**
   * @description: 订单创建时间(YYYY-MM-DD HH:MM:SS)
   * @type: string
   * @default:
   **/
  create_time: string;
}
