export const PDD_SMS_CUSTOM_SETTING = 'pdd.sms.custom.setting';
export const PDD_SMS_CUSTOM_SETTING_RESPONSE_KEY = 'sms_custom_setting_response';

/**
 * 接口名称：指定号码短信发送设置（自定义）
 * 接口标识：pdd.sms.custom.setting
 * 接口使用场景：指定号码短信发送设置（自定义）
 **/
export interface PddSmsCustomSettingRequestInterface {
  /**
   * @description: 模板id
   * @type: string | number
   * @default:
   **/
  template_id: string | number;

  /**
   * @description: 待发送手机号，["15671551276"]
   * @type: string[]
   * @default:
   **/
  phones: string[];

  /**
   * @description: 发送时间
   * @type: string
   * @default:
   **/
  send_time: string;

  /**
   * @description: //短信模版类型， 1-官方模版，2-自定义模版
   * @type: number
   * @default:
   **/
  template_type: number;
}

/**
 * 接口名称：指定号码短信发送设置（自定义）
 * 接口标识：pdd.sms.custom.setting
 * 接口使用场景：指定号码短信发送设置（自定义）
 **/
export interface PddSmsCustomSettingResponseInterface {
  /**
   * @description: response
   * @type: PddSmsCustomSettingSmsCustomSettingResponseResponseInterface
   * @default:
   *
   **/
  sms_custom_setting_response: PddSmsCustomSettingSmsCustomSettingResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddSmsCustomSettingSmsCustomSettingResponseResponseInterface {
  /**
   * @description: 结果
   * @type: string | number
   * @default:
   **/
  result: string | number;
}
