export const PDD_CLOUD_SECURITY_EVENT_TRACKING_LOGIN = 'pdd.cloud.security.event.tracking.login';

/**
 * 接口名称：多多云ISV用户登录事件上报接口
 * 接口标识：pdd.cloud.security.event.tracking.login
 * 接口使用场景：多多云安全，用于ISV用户登录事件上报记录
 **/
export interface PddCloudSecurityEventTrackingLoginRequestInterface {
  /**
   * @description: 如果登录成功，可以填"success", 否则可以填写登录失败的原因
   * @type: string
   * @default:
   **/
  loginMessage?: string;

  /**
   * @description: 登录结果
   * @type: boolean
   * @default:
   **/
  loginResult: boolean;

  /**
   * @description: 店铺id列表
   * @type: Array<string | number>
   * @default:
   **/
  mallIdList: Array<string | number>;

  /**
   * @description: cookie中的_pati值
   * @type: string
   * @default:
   **/
  pati: string;

  /**
   * @description: 事件时间（毫秒级别的时间戳）
   * @type: string | number
   * @default:
   **/
  timestamp: string | number;

  /**
   * @description: 用户唯一标识
   * @type: string
   * @default:
   **/
  userId: string;

  /**
   * @description: 用户IP
   * @type: string
   * @default:
   **/
  userIp: string;
}

/**
 * 接口名称：多多云ISV用户登录事件上报接口
 * 接口标识：pdd.cloud.security.event.tracking.login
 * 接口使用场景：多多云安全，用于ISV用户登录事件上报记录
 **/
export interface PddCloudSecurityEventTrackingLoginResponseInterface {
  /**
   * @description:
   * @type: PddCloudSecurityEventTrackingLoginResponseResponseInterface
   * @default:
   *
   **/
  response: PddCloudSecurityEventTrackingLoginResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddCloudSecurityEventTrackingLoginResponseResponseInterface {
  /**
   * @description:
   * @type: number
   * @default:
   **/
  errorCode: number;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  errorMessage: string;

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
