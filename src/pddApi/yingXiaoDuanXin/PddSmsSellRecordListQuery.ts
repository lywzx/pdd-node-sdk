export const PDD_SMS_SELL_RECORD_LIST_QUERY = 'pdd.sms.sell.record.list.query';

/**
 * 接口名称：查询短信发送任务列表
 * 接口标识：pdd.sms.sell.record.list.query
 * 接口使用场景：查询短信发送任务列表
 **/
export interface PddSmsSellRecordListQueryRequestInterface {
  /**
   * @description: 全部不传status
   * 待发送 status 1
   * 已发送 status2
   * 已取消 status3
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: //排序  1-升序 2-倒序
   * @type: number
   * @default:
   **/
  order_by_send_time: number;

  /**
   * @description: 页码数
   * @type: number
   * @default:
   **/
  page_number: number;

  /**
   * @description: 单页条目数
   * @type: number
   * @default:
   **/
  page_size: number;
}

/**
 * 接口名称：查询短信发送任务列表
 * 接口标识：pdd.sms.sell.record.list.query
 * 接口使用场景：查询短信发送任务列表
 **/
export interface PddSmsSellRecordListQueryResponseInterface {
  /**
   * @description: response
   * @type: PddSmsSellRecordListQuerySmsSellRecordListQueryResponseResponseInterface
   * @default:
   *
   **/
  sms_sell_record_list_query_response: PddSmsSellRecordListQuerySmsSellRecordListQueryResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddSmsSellRecordListQuerySmsSellRecordListQueryResponseResponseInterface {
  /**
   * @description: 总量
   * @type: number
   * @default:
   **/
  total: number;

  /**
   * @description: 结果
   * @type: PddSmsSellRecordListQuerySmsSellRecordListQueryResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddSmsSellRecordListQuerySmsSellRecordListQueryResponseResultResponseInterface;
}

/**
 * @description 结果
 * @default
 * @example
 **/
export interface PddSmsSellRecordListQuerySmsSellRecordListQueryResponseResultResponseInterface {
  /**
   * @description: 删除用的id
   * @type: string
   * @default:
   **/
  id: string;

  /**
   * @description: 任务名称
   * @type: string
   * @default:
   **/
  name: string;

  /**
   * @description: 短信类型
   * @type: number
   * @default:
   **/
  scene: number;

  /**
   * @description: 计划时间
   * @type: string
   * @default:
   **/
  send_time: string;

  /**
   * @description: 发送状态
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 发送总数
   * @type: number
   * @default:
   **/
  send_num: number;

  /**
   * @description: 发送失败总数
   * @type: number
   * @default:
   **/
  send_failed_num: number;

  /**
   * @description: 是否开启
   * @type: number
   * @default:
   **/
  open: number;
}
