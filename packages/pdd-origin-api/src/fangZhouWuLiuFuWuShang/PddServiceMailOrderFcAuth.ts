export const PDD_SERVICE_MAIL_ORDER_FC_AUTH = 'pdd.service.mail.order.fc.auth';

/**
 * 接口名称：获取丰巢开平的access_token
 * 接口标识：pdd.service.mail.order.fc.auth
 * 接口使用场景：获取丰巢开平的access_token
 **/
export interface PddServiceMailOrderFcAuthRequestInterface {
  /**
   * @description: 拼接到url的参数
   * @type: PddServiceMailOrderFcAuthUrlParamsRequestInterface
   * @default:
   *
   **/
  urlParams?: PddServiceMailOrderFcAuthUrlParamsRequestInterface;

  /**
   * @description: 请求方法
   * @type: string
   * @default:
   **/
  httpMethod?: string;
}

/**
 * @description 拼接到url的参数
 * @default
 * @example
 **/
export interface PddServiceMailOrderFcAuthUrlParamsRequestInterface {
  /**
   * @description: 丰巢开平app_key
   * @type: string
   * @default:
   **/
  app_key?: string;

  /**
   * @description: 丰巢开平app_secret
   * @type: string
   * @default:
   **/
  app_secret?: string;
}

/**
 * 接口名称：获取丰巢开平的access_token
 * 接口标识：pdd.service.mail.order.fc.auth
 * 接口使用场景：获取丰巢开平的access_token
 **/
export interface PddServiceMailOrderFcAuthResponseInterface {
  /**
   * @description:
   * @type: string
   * @default:
   **/
  access_token: string;

  /**
   * @description:
   * @type: number
   * @default:
   **/
  expires_in: number;
}
