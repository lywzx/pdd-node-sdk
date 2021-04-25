export const PDD_PMC_USER_CANCEL = 'pdd.pmc.user.cancel';
export const PDD_PMC_USER_CANCEL_RESPONSE_KEY = 'tmc_user_cancel_response';

/**
 * 接口名称：取消用户的消息服务
 * 接口标识：pdd.pmc.user.cancel
 * 接口使用场景：取消用户的消息服务
 **/
export interface PddPmcUserCancelRequestInterface {
  /**
   * @description: 用户唯一id
   * @type: string
   * @default:
   **/
  owner_id: string;
}

/**
 * 接口名称：取消用户的消息服务
 * 接口标识：pdd.pmc.user.cancel
 * 接口使用场景：取消用户的消息服务
 **/
export interface PddPmcUserCancelResponseInterface {
  /**
   * @description: response
   * @type: PddPmcUserCancelTmcUserCancelResponseResponseInterface
   * @default:
   *
   **/
  tmc_user_cancel_response: PddPmcUserCancelTmcUserCancelResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddPmcUserCancelTmcUserCancelResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
