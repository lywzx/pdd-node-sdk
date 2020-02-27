export const PDD_SMS_SEND_RECORD_LIST_QUERY = 'pdd.sms.send.record.list.query';
export const PDD_SMS_SEND_RECORD_LIST_QUERY_RESPONSE_KEY = 'sms_send_record_list_query_response';

/**
 * 接口名称：短信发送记录列表
 * 接口标识：pdd.sms.send.record.list.query
 * 接口使用场景：短信发送记录列表
 **/
export interface PddSmsSendRecordListQueryRequestInterface {
  /**
   * @description: 场景id,见前面枚举值用户关怀传[1,3]  ,智能营销[4, 5, 6, 8，9] 不传的话全部
   * @type: Array<string | number>
   * @default:
   **/
  scene?: Array<string | number>;

  /**
   * @description: 开始时间 2018-08-09 15:20:12
   * @type: string
   * @default:
   **/
  start_time: string;

  /**
   * @description: 结束时间 2018-08-09 15:20:12
   * @type: string
   * @default:
   **/
  end_time: string;

  /**
   * @description: 1-成功 2-失败 全部-不传
   * @type: number
   * @default:
   **/
  status?: number;

  /**
   * @description: 页码
   * @type: number
   * @default:
   **/
  page_number?: number;

  /**
   * @description: 每页数量
   * @type: number
   * @default:
   **/
  page_size?: number;
}

/**
 * 接口名称：短信发送记录列表
 * 接口标识：pdd.sms.send.record.list.query
 * 接口使用场景：短信发送记录列表
 **/
export interface PddSmsSendRecordListQueryResponseInterface {
  /**
   * @description: response
   * @type: PddSmsSendRecordListQuerySmsSendRecordListQueryResponseResponseInterface
   * @default:
   *
   **/
  sms_send_record_list_query_response: PddSmsSendRecordListQuerySmsSendRecordListQueryResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddSmsSendRecordListQuerySmsSendRecordListQueryResponseResponseInterface {
  /**
   * @description: 总量
   * @type: number
   * @default:
   **/
  total: number;

  /**
   * @description: 结果
   * @type: PddSmsSendRecordListQuerySmsSendRecordListQueryResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddSmsSendRecordListQuerySmsSendRecordListQueryResponseResultResponseInterface[];
}

/**
 * @description 结果
 * @default
 * @example
 **/
export interface PddSmsSendRecordListQuerySmsSendRecordListQueryResponseResultResponseInterface {
  /**
   * @description: 收件人
   * @type: string
   * @default:
   **/
  receiver: string;

  /**
   * @description: 手机号
   * @type: string
   * @default:
   **/
  phone: string;

  /**
   * @description: 发送时间
   * @type: string | number
   * @default:
   **/
  send_time: string | number;

  /**
   * @description: 短信内容
   * @type: string
   * @default:
   **/
  content: string;

  /**
   * @description: 条数
   * @type: string | number
   * @default:
   **/
  items_num: string | number;

  /**
   * @description: 字数
   * @type: string | number
   * @default:
   **/
  words_num: string | number;

  /**
   * @description: 发送状态
   * @type: number
   * @default:
   **/
  status: number;
}
