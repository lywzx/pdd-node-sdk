export const PDD_SMS_SELL_SETTING_RECORD_CANCEL = 'pdd.sms.sell.setting.record.cancel';
export const PDD_SMS_SELL_SETTING_RECORD_CANCEL_RESPONSE_KEY = 'sms_sell_setting_record_cancel_response';

/**
 * 接口名称：取消任务
 * 接口标识：pdd.sms.sell.setting.record.cancel
 * 接口使用场景：取消任务
 **/
export interface PddSmsSellSettingRecordCancelRequestInterface {
  /**
   * @description: 任务id
   * @type: string | number
   * @default:
   **/
  id?: string | number;
}

/**
 * 接口名称：取消任务
 * 接口标识：pdd.sms.sell.setting.record.cancel
 * 接口使用场景：取消任务
 **/
export interface PddSmsSellSettingRecordCancelResponseInterface {
  /**
   * @description: response
   * @type: PddSmsSellSettingRecordCancelSmsSellSettingRecordCancelResponseResponseInterface
   * @default:
   *
   **/
  sms_sell_setting_record_cancel_response: PddSmsSellSettingRecordCancelSmsSellSettingRecordCancelResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddSmsSellSettingRecordCancelSmsSellSettingRecordCancelResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
