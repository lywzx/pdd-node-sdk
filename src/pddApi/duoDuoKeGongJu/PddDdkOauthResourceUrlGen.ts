export const PDD_DDK_OAUTH_RESOURCE_URL_GEN = 'pdd.ddk.oauth.resource.url.gen';
export const PDD_DDK_OAUTH_RESOURCE_URL_GEN_RESPONSE_KEY = 'resource_url_response';

/**
 * 接口名称：拼多多主站频道推广接口
 * 接口标识：pdd.ddk.oauth.resource.url.gen
 * 接口使用场景：生成拼多多主站频道推广
 **/
export interface PddDdkOauthResourceUrlGenRequestInterface {
  /**
   * @description: 自定义参数，为链接打上自定义标签。自定义参数最长限制64个字节
   * @type: string
   * @default:
   **/
  custom_parameters?: string;

  /**
   * @description: 是否生成小程序
   * @type: boolean
   * @default: false
   **/
  generate_we_app?: boolean;

  /**
   * @description: 推广位
   * @type: string
   * @default:
   **/
  pid: string;

  /**
   * @description: 频道来源：4-限时秒杀,39997-充值中心, 39998-转链type，39999-电器城，39996-百亿补贴
   * @type: number
   * @default:
   **/
  resource_type?: number;

  /**
   * @description: 原链接
   * @type: string
   * @default:
   **/
  url?: string;

  /**
   * @description: 是否返回 schema URL
   * @type: boolean
   * @default: false
   **/
  generate_schema_url?: boolean;

  /**
   * @description: 是否生成qq小程序
   * @type: boolean
   * @default: false
   **/
  generate_qq_app?: boolean;
}

/**
 * 接口名称：拼多多主站频道推广接口
 * 接口标识：pdd.ddk.oauth.resource.url.gen
 * 接口使用场景：生成拼多多主站频道推广
 **/
export interface PddDdkOauthResourceUrlGenResponseInterface {
  /**
   * @description: resource_url_response
   * @type: PddDdkOauthResourceUrlGenResourceUrlResponseResponseInterface
   * @default:
   *
   **/
  resource_url_response: PddDdkOauthResourceUrlGenResourceUrlResponseResponseInterface;
}

/**
 * @description resource_url_response
 * @default
 * @example
 **/
export interface PddDdkOauthResourceUrlGenResourceUrlResponseResponseInterface {
  /**
   * @description: 多人团链接
   * @type: PddDdkOauthResourceUrlGenResourceUrlResponseMultiUrlListResponseInterface
   * @default:
   *
   **/
  multi_url_list: PddDdkOauthResourceUrlGenResourceUrlResponseMultiUrlListResponseInterface;

  /**
   * @description: sign
   * @type: string
   * @default:
   **/
  sign: string;

  /**
   * @description: qq小程序信息
   * @type: PddDdkOauthResourceUrlGenResourceUrlResponseQqAppInfoResponseInterface
   * @default:
   *
   **/
  qq_app_info: PddDdkOauthResourceUrlGenResourceUrlResponseQqAppInfoResponseInterface;

  /**
   * @description: 单人团链接
   * @type: PddDdkOauthResourceUrlGenResourceUrlResponseSingleUrlListResponseInterface
   * @default:
   *
   **/
  single_url_list: PddDdkOauthResourceUrlGenResourceUrlResponseSingleUrlListResponseInterface;

  /**
   * @description: 小程序信息
   * @type: PddDdkOauthResourceUrlGenResourceUrlResponseWeAppInfoResponseInterface
   * @default:
   *
   **/
  we_app_info: PddDdkOauthResourceUrlGenResourceUrlResponseWeAppInfoResponseInterface;
}

/**
 * @description 多人团链接
 * @default
 * @example
 **/
export interface PddDdkOauthResourceUrlGenResourceUrlResponseMultiUrlListResponseInterface {
  /**
   * @description: 频道推广唤醒拼多多APP短链接
   * @type: string
   * @default:
   **/
  mobile_short_url: string;

  /**
   * @description: 频道推广唤醒拼多多APP长链接
   * @type: string
   * @default:
   **/
  mobile_url: string;

  /**
   * @description: 频道推广短链接
   * @type: string
   * @default:
   **/
  short_url: string;

  /**
   * @description: 频道推广长链接
   * @type: string
   * @default:
   **/
  url: string;

  /**
   * @description: 小程序信息
   * @type: string
   * @default:
   **/
  we_app_page_path: string;

  /**
   * @description: 频道推广唤醒微信短链接
   * @type: string
   * @default:
   **/
  we_app_web_view_short_url: string;

  /**
   * @description: 频道推广唤醒微信长链接
   * @type: string
   * @default:
   **/
  we_app_web_view_url: string;

  /**
   * @description: schema的链接
   * @type: string
   * @default:
   **/
  schema_url: string;
}

/**
 * @description qq小程序信息
 * @default
 * @example
 **/
export interface PddDdkOauthResourceUrlGenResourceUrlResponseQqAppInfoResponseInterface {
  /**
   * @description: 拼多多小程序id
   * @type: string
   * @default:
   **/
  app_id: string;

  /**
   * @description: Banner图
   * @type: string
   * @default:
   **/
  banner_url: string;

  /**
   * @description: 描述
   * @type: string
   * @default:
   **/
  desc: string;

  /**
   * @description: 小程序path值
   * @type: string
   * @default:
   **/
  page_path: string;

  /**
   * @description: 小程序icon
   * @type: string
   * @default:
   **/
  qq_app_icon_url: string;

  /**
   * @description: 来源名
   * @type: string
   * @default:
   **/
  source_display_name: string;

  /**
   * @description: 小程序标题
   * @type: string
   * @default:
   **/
  title: string;

  /**
   * @description: 用户名
   * @type: string
   * @default:
   **/
  user_name: string;
}

/**
 * @description 单人团链接
 * @default
 * @example
 **/
export interface PddDdkOauthResourceUrlGenResourceUrlResponseSingleUrlListResponseInterface {
  /**
   * @description: 频道推广唤醒拼多多APP短链接
   * @type: string
   * @default:
   **/
  mobile_short_url: string;

  /**
   * @description: 频道推广唤醒拼多多APP长链接
   * @type: string
   * @default:
   **/
  mobile_url: string;

  /**
   * @description: 频道推广短链接
   * @type: string
   * @default:
   **/
  short_url: string;

  /**
   * @description: 频道推广长链接
   * @type: string
   * @default:
   **/
  url: string;

  /**
   * @description: 小程序信息
   * @type: string
   * @default:
   **/
  we_app_page_path: string;

  /**
   * @description: 频道推广唤醒微信短链接
   * @type: string
   * @default:
   **/
  we_app_web_view_short_url: string;

  /**
   * @description: 频道推广唤醒微信长链接
   * @type: string
   * @default:
   **/
  we_app_web_view_url: string;

  /**
   * @description: schema的链接
   * @type: string
   * @default:
   **/
  schema_url: string;
}

/**
 * @description 小程序信息
 * @default
 * @example
 **/
export interface PddDdkOauthResourceUrlGenResourceUrlResponseWeAppInfoResponseInterface {
  /**
   * @description: 拼多多小程序id
   * @type: string
   * @default:
   **/
  app_id: string;

  /**
   * @description: Banner图
   * @type: string
   * @default:
   **/
  banner_url: string;

  /**
   * @description: 描述
   * @type: string
   * @default:
   **/
  desc: string;

  /**
   * @description: 小程序path值
   * @type: string
   * @default:
   **/
  page_path: string;

  /**
   * @description: 来源名
   * @type: string
   * @default:
   **/
  source_display_name: string;

  /**
   * @description: 小程序标题
   * @type: string
   * @default:
   **/
  title: string;

  /**
   * @description: 用户名
   * @type: string
   * @default:
   **/
  user_name: string;

  /**
   * @description: 小程序icon
   * @type: string
   * @default:
   **/
  we_app_icon_url: string;
}
