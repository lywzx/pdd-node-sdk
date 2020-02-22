export const PDD_SMS_SELL_DELETING = 'PDD_SMS_SELL_DELETING';

/**
 * 接口名称：删除任务
 * 接口标识：pdd.sms.sell.deleting
 * 接口使用场景：删除任务
 **/
export interface PddSmsSellDeletingRequestInterface {
  /**
   * @description: 任务id
   * @type: string
   * @default:
   **/
  id?: string;
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

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_SMS_SELL_DELETING]: {
    requestInterface: PddSmsSellDeletingRequestInterface;
    responseInterface: PddSmsSellDeletingResponseInterface;
  };
}
