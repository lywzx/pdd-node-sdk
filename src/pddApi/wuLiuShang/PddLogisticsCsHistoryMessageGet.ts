export const PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET = 'pdd.logistics.cs.history.message.get';
export const PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET_RESPONSE_KEY = 'logistics_cs_history_message_get_response';

/**
 * 接口名称：客户与机器人的聊天记录获取接口
 * 接口标识：pdd.logistics.cs.history.message.get
 * 接口使用场景：该接口用于获取客户与机器人的聊天记录。
 **/
export interface PddLogisticsCsHistoryMessageGetRequestInterface {
  /**
   * @description: pdd会话id
   * @type: string
   * @default:
   **/
  session_id?: string;
}

/**
 * 接口名称：客户与机器人的聊天记录获取接口
 * 接口标识：pdd.logistics.cs.history.message.get
 * 接口使用场景：该接口用于获取客户与机器人的聊天记录。
 **/
export interface PddLogisticsCsHistoryMessageGetResponseInterface {
  /**
   * @description: response
   * @type: PddLogisticsCsHistoryMessageGetLogisticsCsHistoryMessageGetResponseResponseInterface
   * @default:
   *
   **/
  logistics_cs_history_message_get_response: PddLogisticsCsHistoryMessageGetLogisticsCsHistoryMessageGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddLogisticsCsHistoryMessageGetLogisticsCsHistoryMessageGetResponseResponseInterface {
  /**
   * @description: 消息列表
   * @type: PddLogisticsCsHistoryMessageGetLogisticsCsHistoryMessageGetResponseMessageInfosResponseInterface[]
   * @default:
   *
   **/
  message_infos: PddLogisticsCsHistoryMessageGetLogisticsCsHistoryMessageGetResponseMessageInfosResponseInterface[];
}

/**
 * @description 消息列表
 * @default
 * @example
 **/
export interface PddLogisticsCsHistoryMessageGetLogisticsCsHistoryMessageGetResponseMessageInfosResponseInterface {
  /**
   * @description: 消息id
   * @type: string
   * @default:
   **/
  id: string;

  /**
   * @description: 消息时间戳,样式YYYY-MM-DD HH:MM:SS
   * @type: string
   * @default:
   **/
  msg_ts: string;

  /**
   * @description: 0为用户 1为机器人
   * @type: number
   * @default:
   **/
  from_type: number;

  /**
   * @description: 聊天内容，如果是图片的话，则是图片的url
   * @type: string
   * @default:
   **/
  text: string;
}
