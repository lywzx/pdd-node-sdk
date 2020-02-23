export const PDD_OPEN_MSG_SERVICE_SEND_EXPRESS_MSG = 'pdd.open.msg.service.send.express.msg';

/**
 * 接口名称：根据运单号发短信
 * 接口标识：pdd.open.msg.service.send.express.msg
 * 接口使用场景：快递派送过程中根据物流编号发送短信通知
 **/
export interface PddOpenMsgServiceSendExpressMsgRequestInterface {
  /**
   * @description: 短信签名名称
   * @type: string
   * @default:
   **/
  sign_name?: string;

  /**
   * @description: 短信模板CODE
   * @type: string
   * @default:
   **/
  template_code?: string;

  /**
   * @description: 短信模板变量JSON集合(与手机号对应)与按照手机号发短信一致key变量名 value变量值
   * @type: PddOpenMsgServiceSendExpressMsgTemplateParamJsonRequestInterface[]
   * @default:
   *
   **/
  template_param_json: PddOpenMsgServiceSendExpressMsgTemplateParamJsonRequestInterface[];

  /**
   * @description: 物流单号集合
   * @type: string
   * @default:
   **/
  waybill_codes?: string;

  /**
   * @description: 快递公司编码
   * @type: string
   * @default:
   **/
  wp_code?: string;

  /**
   * @description: 业务请求唯一标识
   * @type: string
   * @default:
   **/
  out_id: string;
}

/**
 * @description 短信模板变量JSON集合(与手机号对应)与按照手机号发短信一致key变量名 value变量值
 * @default
 * @example
 **/
export interface PddOpenMsgServiceSendExpressMsgTemplateParamJsonRequestInterface {
  /**
   * @description: 模板变量key
   * @type: string
   * @default:
   **/
  $key: string;

  /**
   * @description: 模板变量value
   * @type: string
   * @default:
   **/
  $value: string;
}

/**
 * 接口名称：根据运单号发短信
 * 接口标识：pdd.open.msg.service.send.express.msg
 * 接口使用场景：快递派送过程中根据物流编号发送短信通知
 **/
export interface PddOpenMsgServiceSendExpressMsgResponseInterface {
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

  /**
   * @description: 回执id
   * @type: string
   * @default:
   **/
  biz_id: string;
}
