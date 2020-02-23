export const PDD_LOGISTICS_CS_MESSAGE_SEND = 'pdd.logistics.cs.message.send';

/**
 * 接口名称：客服给发消息接口
 * 接口标识：pdd.logistics.cs.message.send
 * 接口使用场景：该接口用于客服给客户发消息，发消息的前提是有客服分配。
 **/
export interface PddLogisticsCsMessageSendRequestInterface {
  /**
   * @description: pdd会话id
   * @type: string
   * @default:
   **/
  session_id?: string;

  /**
   * @description: 物流公司会话id
   * @type: string
   * @default:
   **/
  wp_session_id?: string;

  /**
   * @description: 样式YYYY-MM-DD HH:MM:SS
   * @type: string
   * @default:
   **/
  action_time?: string;

  /**
   * @description: 0：文本1：图片
   * @type: number
   * @default:
   **/
  message_type?: number;

  /**
   * @description: message_type为0时不为空
   * @type: string
   * @default:
   **/
  text: string;

  /**
   * @description: message_type为1时不为空
   * @type: string
   * @default:
   **/
  attach: string;

  /**
   * @description: message_type为1时不为空
   * @type: string
   * @default:
   **/
  preview: string;
}

/**
 * 接口名称：客服给发消息接口
 * 接口标识：pdd.logistics.cs.message.send
 * 接口使用场景：该接口用于客服给客户发消息，发消息的前提是有客服分配。
 **/
export interface PddLogisticsCsMessageSendResponseInterface {
  /**
   * @description: response
   * @type: PddLogisticsCsMessageSendLogisticsCsMessageSendResponseResponseInterface
   * @default:
   *
   **/
  logistics_cs_message_send_response: PddLogisticsCsMessageSendLogisticsCsMessageSendResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddLogisticsCsMessageSendLogisticsCsMessageSendResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
