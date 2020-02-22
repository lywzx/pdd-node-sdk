export const PDD_SMS_REMAIN_SETTING = 'PDD_SMS_REMAIN_SETTING';

/**
 * 接口名称：提醒买家付款的任务设置
 * 接口标识：pdd.sms.remain.setting
 * 接口使用场景：提醒买家付款的任务设置
 **/

export interface PddSmsRemainSettingRequestInterface {
  /**
   * @description: 买家未付款时间，单位为分钟。例，unpaid_duration=3，买家下单后3分钟未付款，即发送短信提醒买家付款
   * @type: string
   * @default:
   **/
  unpaid_duration: string;

  /**
   * @description: 指定的短信任务的模板id
   * @type: string
   * @default:
   **/
  template_id: string;

  /**
   * @description: 该提醒任务是否处于处于打开状态，0-关闭，此时提醒任务被关闭，1-打开，此时提醒任务打开
   * @type: number
   * @default:
   **/
  open?: number;

  /**
   * @description: 该任务对应的场景//1-提醒付款 3-召唤买家成团
   * @type: number
   * @default:
   **/
  scene?: number;

  /**
   * @description: operate_type// 1-开启任务   2-编辑
   * @type: number
   * @default:
   **/
  operate_type?: number;
}

/**
 * 接口名称：提醒买家付款的任务设置
 * 接口标识：pdd.sms.remain.setting
 * 接口使用场景：提醒买家付款的任务设置
 **/

export interface PddSmsRemainSettingResponseInterface {
  /**
   * @description: response
   * @type: PddSmsRemainSettingSmsRemainSettingResponseResponseInterface
   * @default:
   *
   **/
  sms_remain_setting_response: PddSmsRemainSettingSmsRemainSettingResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/

export interface PddSmsRemainSettingSmsRemainSettingResponseResponseInterface {
  /**
   * @description: 结果
   * @type: string
   * @default:
   **/
  result: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_SMS_REMAIN_SETTING]: {
    requestInterface: PddSmsRemainSettingRequestInterface;
    responseInterface: PddSmsRemainSettingResponseInterface;
  };
}
