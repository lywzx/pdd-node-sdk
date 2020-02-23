export const PDD_PMC_USER_PERMIT = 'pdd.pmc.user.permit';

/**
 * 接口名称：为已授权的用户开通消息服务
 * 接口标识：pdd.pmc.user.permit
 * 接口使用场景：为已授权的用户开通消息服务
 **/
export interface PddPmcUserPermitRequestInterface {
  /**
   * @description: 消息主题列表，用半角逗号分隔。当用户订阅的topic是应用订阅的子集时才需要设置，不设置表示继承应用所订阅的所有topic，一般情况建议不要设置。
   * @type: string
   * @default:
   **/
  topics: string;
}

/**
 * 接口名称：为已授权的用户开通消息服务
 * 接口标识：pdd.pmc.user.permit
 * 接口使用场景：为已授权的用户开通消息服务
 **/
export interface PddPmcUserPermitResponseInterface {
  /**
   * @description: response
   * @type: PddPmcUserPermitPmcUserPermitResponseResponseInterface
   * @default:
   *
   **/
  pmc_user_permit_response: PddPmcUserPermitPmcUserPermitResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddPmcUserPermitPmcUserPermitResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
