export const PDD_PMC_USER_GET = 'pdd.pmc.user.get';
export const PDD_PMC_USER_GET_RESPONSE_KEY = 'pmc_user_get_response';

/**
 * 接口名称：获取用户已开通消息
 * 接口标识：pdd.pmc.user.get
 * 接口使用场景：获取用户已开通消息
 **/
export interface PddPmcUserGetRequestInterface {
  /**
   * @description: 用户唯一id
   * @type: string
   * @default:
   **/
  owner_id: string;
}

/**
 * 接口名称：获取用户已开通消息
 * 接口标识：pdd.pmc.user.get
 * 接口使用场景：获取用户已开通消息
 **/
export interface PddPmcUserGetResponseInterface {
  /**
   * @description: response
   * @type: PddPmcUserGetPmcUserGetResponseResponseInterface
   * @default:
   *
   **/
  pmc_user_get_response: PddPmcUserGetPmcUserGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddPmcUserGetPmcUserGetResponseResponseInterface {
  /**
   * @description: 开通的用户数据
   * @type: PddPmcUserGetPmcUserGetResponsePmcUserResponseInterface
   * @default:
   *
   **/
  pmc_user: PddPmcUserGetPmcUserGetResponsePmcUserResponseInterface;
}

/**
 * @description 开通的用户数据
 * @default
 * @example
 **/
export interface PddPmcUserGetPmcUserGetResponsePmcUserResponseInterface {
  /**
   * @description: 用户首次开通时间
   * @type: string
   * @default:
   **/
  created: string;

  /**
   * @description: 用户授权是否有效，0表示授权有效，1表示授权过期
   * @type: number
   * @default:
   **/
  is_expire: number;

  /**
   * @description: 用户最后开通时间
   * @type: string
   * @default:
   **/
  modified: string;

  /**
   * @description: 用户ID
   * @type: string
   * @default:
   **/
  owner_id: string;

  /**
   * @description: 用户开通的消息类型列表。如果为空表示应用开通的所有类型
   * @type: string[]
   * @default:
   **/
  topics: string[];
}
