export const PDD_SMS_SELL_SETTING = 'PDD_SMS_SELL_SETTING';

/**
 * 接口名称：营销类短信设置
 * 接口标识：pdd.sms.sell.setting
 * 接口使用场景：营销类短信设置
 **/

export interface PddSmsSellSettingRequestInterface {
  /**
   * @description: 4-新客转化 5-老客转回 6-流失唤醒 8-个性化营销
   * @type: number
   * @default:
   **/
  scene?: number;

  /**
   * @description: 人群id，个性化营销短信必填
   * @type: string
   * @default:
   **/
  crowd_id: string;

  /**
   * @description: 发送时间 必填
   * @type: string
   * @default:
   **/
  send_time?: string;

  /**
   * @description: 短信模板id
   * @type: number
   * @default:
   **/
  template_id?: number;

  /**
   * @description: 短信模版类型， 1-官方模版，2-自定义模版
   * @type: number
   * @default:
   **/
  template_type?: number;
}

/**
 * 接口名称：营销类短信设置
 * 接口标识：pdd.sms.sell.setting
 * 接口使用场景：营销类短信设置
 **/

export interface PddSmsSellSettingResponseInterface {
  /**
   * @description: 返回结果
   * @type: PddSmsSellSettingSmsSellSettingResponseResponseInterface
   * @default:
   *
   **/
  sms_sell_setting_response: PddSmsSellSettingSmsSellSettingResponseResponseInterface;
}

/**
 * @description 返回结果
 * @default
 * @example
 **/

export interface PddSmsSellSettingSmsSellSettingResponseResponseInterface {
  /**
   * @description: 请求结果
   * @type: string
   * @default:
   **/
  result: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_SMS_SELL_SETTING]: {
    requestInterface: PddSmsSellSettingRequestInterface;
    responseInterface: PddSmsSellSettingResponseInterface;
  };
}
