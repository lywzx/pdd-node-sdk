export const PDD_CUSTOMS_SEND_DATA_RECEIPT = 'pdd.customs.send.data.receipt';
export const PDD_CUSTOMS_SEND_DATA_RECEIPT_RESPONSE_KEY = 'custom_receipt_response';

/**
 * 接口名称：海关数据上报和回执数据接收
 * 接口标识：pdd.customs.send.data.receipt
 * 接口使用场景：海关数据上报和回执数据接收
 **/
export interface PddCustomsSendDataReceiptRequestInterface {
  /**
   * @description: 业务单证名称，例如：CEB311，CEB621，枚举见：CEBNameEnum
   * @type: string
   * @default:
   **/
  ceb_name: string;

  /**
   * @description: 回执时间的timestamp，dataType=2-报关回执数据，此字段必填
   * @type: string | number
   * @default:
   **/
  ceb_receipt_time?: string | number;

  /**
   * @description: 业务单证报关数据回执，dataType=2-报关回执数据，此字段必填
   * @type: string
   * @default:
   **/
  ceb_receipt_xml?: string;

  /**
   * @description: 业务单证报关数据，dataType=1-报关数据，此字段必填
   * @type: string
   * @default:
   **/
  ceb_request_xml?: string;

  /**
   * @description: 数据类型：1-报关数据，2-报关回执数据
   * @type: number
   * @default:
   **/
  data_type: number;

  /**
   * @description: 实际发货仓海关备案号，比如：****W60TQ6
   * @type: string
   * @default:
   **/
  delivery_warehouse_code: string;

  /**
   * @description: 实际发货仓名称，例如****仓
   * @type: string
   * @default:
   **/
  delivery_warehouse_name: string;

  /**
   * @description: 快递承运公司全称，例如中通快递
   * @type: string
   * @default:
   **/
  express_company: string;

  /**
   * @description: 运单申报公司全称，例如**快递
   * @type: string
   * @default:
   **/
  express_declare_company: string;

  /**
   * @description: 运单申报公司海关备案号，比如：****W60TQ6
   * @type: string
   * @default:
   **/
  express_declare_company_code: string;

  /**
   * @description: 快递发货运单号
   * @type: string
   * @default:
   **/
  express_no: string;

  /**
   * @description: 拼多多订单号，dataType=1-报关数据，此字段必填
   * @type: string
   * @default:
   **/
  order_sn?: string;

  /**
   * @description: 清关状态，dataType=2-报关回执数据，此字段必填，枚举见：ClearanceStatusEnum
   * @type: string
   * @default:
   **/
  receipt_status?: string;

  /**
   * @description: 清关状态描述，dataType=2-报关回执数据，此字段必填，枚举见：ClearanceStatusEnum
   * @type: string
   * @default:
   **/
  receipt_status_desc?: string;

  /**
   * @description: 报关商的一次请求的id，建议使用UUID.randomUUID().toString()生成，不能超过50个字符
   * @type: string
   * @default:
   **/
  trace_id: string;

  /**
   * @description: XP开头的交易的单号
   * @type: string
   * @default:
   **/
  trade_no: string;

  /**
   * @description: 申报服务仓地址
   * @type: string
   * @default:
   **/
  warehouse_address: string;

  /**
   * @description: 申报服务仓海关备案号，例如：****W60TQ6
   * @type: string
   * @default:
   **/
  warehouse_code: string;

  /**
   * @description: 申报服务仓所属服务商公司全称
   * @type: string
   * @default:
   **/
  warehouse_company: string;

  /**
   * @description: 申报服务仓名称，例如：东莞虎门保税******仓
   * @type: string
   * @default:
   **/
  warehouse_name: string;
}

/**
 * 接口名称：海关数据上报和回执数据接收
 * 接口标识：pdd.customs.send.data.receipt
 * 接口使用场景：海关数据上报和回执数据接收
 **/
export interface PddCustomsSendDataReceiptResponseInterface {
  /**
   * @description: 返回的结果
   * @type: PddCustomsSendDataReceiptCustomReceiptResponseResponseInterface
   * @default:
   *
   **/
  custom_receipt_response: PddCustomsSendDataReceiptCustomReceiptResponseResponseInterface;
}

/**
 * @description 返回的结果
 * @default
 * @example
 **/
export interface PddCustomsSendDataReceiptCustomReceiptResponseResponseInterface {
  /**
   * @description: 上报成功失败状态：0-失败，1-成功，不成功请重试3次
   * @type: number
   * @default:
   **/
  report_status: number;

  /**
   * @description: 报关商的一次请求的id
   * @type: string
   * @default:
   **/
  trace_id: string;
}
