export const PDD_CLOUD_WEBSESSION_SEND = 'pdd.cloud.websession.send';
export const PDD_CLOUD_WEBSESSION_SEND_RESPONSE_KEY = 'send_response';

/**
 * 接口名称：会话同步接口
 * 接口标识：pdd.cloud.websession.send
 * 接口使用场景：同步友商云的会话信息
 **/
export interface PddCloudWebsessionSendRequestInterface {
  /**
   * @description: 缓存类型
   * @type: string
   * @default:
   **/
  cache_type?: string;

  /**
   * @description: 会话列表
   * @type: PddCloudWebsessionSendSessionInfoListRequestInterface[]
   * @default:
   *
   **/
  session_info_list?: PddCloudWebsessionSendSessionInfoListRequestInterface[];
}

/**
 * @description 会话列表
 * @default
 * @example
 **/
export interface PddCloudWebsessionSendSessionInfoListRequestInterface {
  /**
   * @description: 建名称
   * @type: string
   * @default:
   **/
  key?: string;

  /**
   * @description: 值
   * @type: string
   * @default:
   **/
  value?: string;

  /**
   * @description: 过期时间
   * @type: string | number
   * @default:
   **/
  expir_time?: string | number;

  /**
   * @description: 操作
   * @type: string
   * @default:
   **/
  function?: string;
}

/**
 * 接口名称：会话同步接口
 * 接口标识：pdd.cloud.websession.send
 * 接口使用场景：同步友商云的会话信息
 **/
export interface PddCloudWebsessionSendResponseInterface {
  /**
   * @description: 响应
   * @type: PddCloudWebsessionSendSendResponseResponseInterface
   * @default:
   *
   **/
  send_response: PddCloudWebsessionSendSendResponseResponseInterface;
}

/**
 * @description 响应
 * @default
 * @example
 **/
export interface PddCloudWebsessionSendSendResponseResponseInterface {
  /**
   * @description: 响应列表
   * @type: PddCloudWebsessionSendSendResponseResListResponseInterface[]
   * @default:
   *
   **/
  res_list: PddCloudWebsessionSendSendResponseResListResponseInterface[];

  /**
   * @description: 是否成功，false-失败，true-成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;

  /**
   * @description: 错误信息
   * @type: string
   * @default:
   **/
  error_msg: string;

  /**
   * @description: 子错误信息
   * @type: string
   * @default:
   **/
  sub_msg: string;

  /**
   * @description: 错误码
   * @type: number
   * @default:
   **/
  sub_code: number;

  /**
   * @description: 子错误码
   * @type: number
   * @default:
   **/
  error_code: number;
}

/**
 * @description 响应列表
 * @default
 * @example
 **/
export interface PddCloudWebsessionSendSendResponseResListResponseInterface {
  /**
   * @description: 健名
   * @type: string
   * @default:
   **/
  key: string;

  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  success: boolean;

  /**
   * @description: 错误异常
   * @type: string
   * @default:
   **/
  error_info: string;
}
