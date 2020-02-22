export const PDD_OPEN_MSG_SERVICE_QUERY_EXPRESS_MSG_RECORD = 'PDD_OPEN_MSG_SERVICE_QUERY_EXPRESS_MSG_RECORD';

/**
 * 接口名称：根据运单号查询短信发送记录
 * 接口标识：pdd.open.msg.service.query.express.msg.record
 * 接口使用场景：根据运单号查询短信发送记录
 **/
export interface PddOpenMsgServiceQueryExpressMsgRecordRequestInterface {
  /**
   * @description: 短信发送流水
   * @type: string
   * @default:
   **/
  biz_id: string;

  /**
   * @description: 分页参数，每页数量。最大值50
   * @type: number
   * @default:
   **/
  page_number?: number;

  /**
   * @description: 分页参数,页码
   * @type: number
   * @default:
   **/
  page_size?: number;

  /**
   * @description: 短信发送日期，支持近30天记录查询，格式yyyyMMdd
   * @type: string
   * @default:
   **/
  send_date?: string;

  /**
   * @description: 查询的物流编号
   * @type: string
   * @default:
   **/
  waybill_code?: string;

  /**
   * @description: 物流公司编号
   * @type: string
   * @default:
   **/
  wp_code?: string;
}

/**
 * 接口名称：根据运单号查询短信发送记录
 * 接口标识：pdd.open.msg.service.query.express.msg.record
 * 接口使用场景：根据运单号查询短信发送记录
 **/
export interface PddOpenMsgServiceQueryExpressMsgRecordResponseInterface {
  /**
   * @description: 请求ID
   * @type: string
   * @default:
   **/
  request_id: string;

  /**
   * @description: 请求状态码
   * @type: string
   * @default:
   **/
  result_code: string;

  /**
   * @description: 状态码描述
   * @type: string
   * @default:
   **/
  result_message: string;

  /**
   * @description: 短信发送明细列表
   * @type: PddOpenMsgServiceQueryExpressMsgRecordSmsSendDetailsResponseInterface[]
   * @default:
   *
   **/
  sms_send_details: PddOpenMsgServiceQueryExpressMsgRecordSmsSendDetailsResponseInterface[];

  /**
   * @description: 短信发送总条数
   * @type: number
   * @default:
   **/
  total_count: number;
}

/**
 * @description 短信发送明细列表
 * @default
 * @example
 **/
export interface PddOpenMsgServiceQueryExpressMsgRecordSmsSendDetailsResponseInterface {
  /**
   * @description: 模板内容
   * @type: string
   * @default:
   **/
  content: string;

  /**
   * @description: 错误码
   * @type: number
   * @default:
   **/
  error_code: number;

  /**
   * @description: 外部id
   * @type: string
   * @default:
   **/
  out_id: string;

  /**
   * @description: 手机号码
   * @type: string
   * @default:
   **/
  phone_number: string;

  /**
   * @description: 接收时间
   * @type: string
   * @default:
   **/
  receive_time: string;

  /**
   * @description: 发送状态
   * @type: number
   * @default:
   **/
  send_status: number;

  /**
   * @description: 发送时间
   * @type: string
   * @default:
   **/
  send_time: string;

  /**
   * @description: 模板ID
   * @type: string
   * @default:
   **/
  template_code: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_OPEN_MSG_SERVICE_QUERY_EXPRESS_MSG_RECORD]: {
    requestInterface: PddOpenMsgServiceQueryExpressMsgRecordRequestInterface;
    responseInterface: PddOpenMsgServiceQueryExpressMsgRecordResponseInterface;
  };
}
