export const PDD_DDK_OAUTH_PID_MEDIAID_BIND = 'pdd.ddk.oauth.pid.mediaid.bind';
export const PDD_DDK_OAUTH_PID_MEDIAID_BIND_RESPONSE_KEY = 'p_id_bind_response';

/**
 * 接口名称：批量绑定推广位的媒体id
 * 接口标识：pdd.ddk.oauth.pid.mediaid.bind
 * 接口使用场景：批量对pid与媒体id进行绑定
 **/
export interface PddDdkOauthPidMediaidBindRequestInterface {
  /**
   * @description: 媒体id
   * @type: string | number
   * @default:
   **/
  media_id: string | number;

  /**
   * @description: 推广位列表，例如：["60005_612"]，最多支持同时传入1000个
   * @type: string[]
   * @default:
   **/
  pid_list: string[];
}

/**
 * 接口名称：批量绑定推广位的媒体id
 * 接口标识：pdd.ddk.oauth.pid.mediaid.bind
 * 接口使用场景：批量对pid与媒体id进行绑定
 **/
export interface PddDdkOauthPidMediaidBindResponseInterface {
  /**
   * @description: response
   * @type: PddDdkOauthPidMediaidBindPIdBindResponseResponseInterface
   * @default:
   *
   **/
  p_id_bind_response: PddDdkOauthPidMediaidBindPIdBindResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddDdkOauthPidMediaidBindPIdBindResponseResponseInterface {
  /**
   * @description: 绑定结果
   * @type: PddDdkOauthPidMediaidBindPIdBindResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddDdkOauthPidMediaidBindPIdBindResponseResultResponseInterface;
}

/**
 * @description 绑定结果
 * @default
 * @example
 **/
export interface PddDdkOauthPidMediaidBindPIdBindResponseResultResponseInterface {
  /**
   * @description: 绑定结果信息提示
   * @type: string
   * @default:
   **/
  msg: string;

  /**
   * @description: 绑定结果
   * @type: boolean
   * @default:
   **/
  result: boolean;
}
