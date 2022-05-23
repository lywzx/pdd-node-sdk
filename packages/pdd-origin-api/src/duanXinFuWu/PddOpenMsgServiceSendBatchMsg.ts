export const PDD_OPEN_MSG_SERVICE_SEND_BATCH_MSG = 'pdd.open.msg.service.send.batch.msg';

/**
 * 接口名称：短信批量发送接口
 * 接口标识：pdd.open.msg.service.send.batch.msg
 * 接口使用场景：短信批量发送接口
 **/
export interface PddOpenMsgServiceSendBatchMsgRequestInterface {
  /**
   * @description: 业务请求唯一标识
   * @type: string
   * @default:
   **/
  out_id?: string;

  /**
   * @description: 接收短信的手机号码列表（仅允许密文）,["密文1", "密文2"]
   * @type: string[]
   * @default:
   **/
  phone_numbers: string[];

  /**
   * @description: 短信签名名称
   * @type: string
   * @default:
   **/
  sign_name: string;

  /**
   * @description: 上行短信扩展码
   * @type: string
   * @default:
   **/
  sms_up_extend_code?: string;

  /**
   * @description: 短信模板CODE
   * @type: string | number
   * @default:
   **/
  template_code: string | number;

  /**
   * @description: 短信模板变量JSON集合(与手机号对应)
   * @type: PddOpenMsgServiceSendBatchMsgTemplateParamJsonRequestInterface[]
   * @default:
   *
   **/
  template_param_json?: PddOpenMsgServiceSendBatchMsgTemplateParamJsonRequestInterface[];
}

/**
 * @description 短信模板变量JSON集合(与手机号对应)
 * @default
 * @example [{"name":"TemplateParamJson"},{"name":"TemplateParamJson"}]
 **/
export interface PddOpenMsgServiceSendBatchMsgTemplateParamJsonRequestInterface {
  /**
   * @description: 模板变量名
   * @type: string
   * @default:
   **/
  $key?: string;

  /**
   * @description: 模板变量值
   * @type: string
   * @default:
   **/
  $value?: string;
}

/**
 * 接口名称：短信批量发送接口
 * 接口标识：pdd.open.msg.service.send.batch.msg
 * 接口使用场景：短信批量发送接口
 **/
export interface PddOpenMsgServiceSendBatchMsgResponseInterface {
  /**
   * @description: 回执id
   * @type: string
   * @default:
   **/
  biz_id: string;

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
