export const PDD_OPEN_MSG_SERVICE_SEND_MSG = 'PDD_OPEN_MSG_SERVICE_SEND_MSG';

/**
 * 接口名称：短信发送接口
 * 接口标识：pdd.open.msg.service.send.msg
 * 接口使用场景：开平短信服务发送短信接口
 **/
export interface PddOpenMsgServiceSendMsgRequestInterface {
  /**
   * @description: 接收短信的手机号码列表,["15900000000", "17600000000"]
   * @type: string
   * @default:
   **/
  phone_numbers?: string;

  /**
   * @description: 短信签名名称
   * @type: string
   * @default:
   **/
  sign_name?: string;

  /**
   * @description: 短信模板ID
   * @type: string
   * @default:
   **/
  template_code?: string;

  /**
   * @description: 短信模板变量对应的实际值，JSON格式
   * @type: PddOpenMsgServiceSendMsgTemplateParamRequestInterface
   * @default:
   *
   **/
  template_param: PddOpenMsgServiceSendMsgTemplateParamRequestInterface;

  /**
   * @description: 业务请求唯一标识
   * @type: string
   * @default:
   **/
  out_id: string;
}

/**
 * @description 短信模板变量对应的实际值，JSON格式
 * @default
 * @example
 **/
export interface PddOpenMsgServiceSendMsgTemplateParamRequestInterface {
  /**
   * @description: 模板变量名
   * @type: string
   * @default:
   **/
  $key: string;

  /**
   * @description: 模板变量值
   * @type: string
   * @default:
   **/
  $value: string;
}

/**
 * 接口名称：短信发送接口
 * 接口标识：pdd.open.msg.service.send.msg
 * 接口使用场景：开平短信服务发送短信接口
 **/
export interface PddOpenMsgServiceSendMsgResponseInterface {
  /**
   * @description: 状态码
   * @type: number
   * @default:
   **/
  code: number;

  /**
   * @description: 状态原因
   * @type: string
   * @default:
   **/
  message: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_OPEN_MSG_SERVICE_SEND_MSG]: {
    requestInterface: PddOpenMsgServiceSendMsgRequestInterface;
    responseInterface: PddOpenMsgServiceSendMsgResponseInterface;
  };
}
