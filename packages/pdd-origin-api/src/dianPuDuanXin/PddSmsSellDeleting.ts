export const PDD_SMS_SELL_DELETING = 'pdd.sms.sell.deleting';
export const PDD_SMS_SELL_DELETING_RESPONSE_KEY = 'sms_sell_deleting_response';

/**
 * 接口名称：删除任务
 * 接口标识：pdd.sms.sell.deleting
 * 接口使用场景：删除任务
 **/
export interface PddSmsSellDeletingRequestInterface {
  /**
   * @description: 任务id
   * @type: string | number
   * @default:
   **/
  id: string | number;
}

/**
 * 接口名称：删除任务
 * 接口标识：pdd.sms.sell.deleting
 * 接口使用场景：删除任务
 **/
export interface PddSmsSellDeletingResponseInterface {
  /**
   * @description: response
   * @type: PddSmsSellDeletingSmsSellDeletingResponseResponseInterface
   * @default:
   *
   **/
  sms_sell_deleting_response: PddSmsSellDeletingSmsSellDeletingResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddSmsSellDeletingSmsSellDeletingResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
