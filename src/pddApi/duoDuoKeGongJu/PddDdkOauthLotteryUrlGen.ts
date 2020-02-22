export const PDD_DDK_OAUTH_LOTTERY_URL_GEN = 'PDD_DDK_OAUTH_LOTTERY_URL_GEN';

/**
 * 接口名称：多多客工具生成转盘抽免单url
 * 接口标识：pdd.ddk.oauth.lottery.url.gen
 * 接口使用场景：多多客工具生成转盘抽免单url
 **/
export interface PddDdkOauthLotteryUrlGenRequestInterface {
  /**
   * @description: 推广位
   * @type: string
   * @default:
   **/
  pid_list?: string;

  /**
   * @description: 是否生成唤起微信客户端链接，true-是，false-否，默认false
   * @type: boolean
   * @default:
   **/
  generate_weapp_webview: boolean;

  /**
   * @description: 是否生成短链接，true-是，false-否
   * @type: string
   * @default:
   **/
  generate_short_url: string;

  /**
   * @description: true--生成多人团推广链接 false--生成单人团推广链接（默认false）1、单人团推广链接：用户访问单人团推广链接，可直接购买商品无需拼团。2、多人团推广链接：用户访问双人团推广链接开团，若用户分享给他人参团，则开团者和参团者的佣金均结算给推手
   * @type: boolean
   * @default:
   **/
  multi_group: boolean;

  /**
   * @description: 自定义参数，为链接打上自定义标签。自定义参数最长限制64个字节。
   * @type: string
   * @default:
   **/
  custom_parameters: string;

  /**
   * @description: 是否生成小程序链接
   * @type: boolean
   * @default:
   **/
  generate_we_app: boolean;

  /**
   * @description: 是否返回 schema URL
   * @type: boolean
   * @default: false
   **/
  generate_schema_url: boolean;

  /**
   * @description: 是否生成qq小程序
   * @type: boolean
   * @default: false
   **/
  generate_qq_app: boolean;
}

/**
 * 接口名称：多多客工具生成转盘抽免单url
 * 接口标识：pdd.ddk.oauth.lottery.url.gen
 * 接口使用场景：多多客工具生成转盘抽免单url
 **/
export interface PddDdkOauthLotteryUrlGenResponseInterface {
  /**
   * @description: lottery_url_response
   * @type: PddDdkOauthLotteryUrlGenLotteryUrlResponseResponseInterface
   * @default:
   *
   **/
  lottery_url_response: PddDdkOauthLotteryUrlGenLotteryUrlResponseResponseInterface;
}

/**
 * @description lottery_url_response
 * @default
 * @example
 **/
export interface PddDdkOauthLotteryUrlGenLotteryUrlResponseResponseInterface {
  /**
   * @description: 返回总数
   * @type: number
   * @default:
   **/
  total: number;

  /**
   * @description: 推广链接
   * @type: PddDdkOauthLotteryUrlGenLotteryUrlResponseUrlListResponseInterface[]
   * @default:
   *
   **/
  url_list: PddDdkOauthLotteryUrlGenLotteryUrlResponseUrlListResponseInterface[];
}

/**
 * @description 推广链接
 * @default
 * @example
 **/
export interface PddDdkOauthLotteryUrlGenLotteryUrlResponseUrlListResponseInterface {
  /**
   * @description: 转盘抽免单单人团链接
   * @type: PddDdkOauthLotteryUrlGenLotteryUrlResponseUrlListSingleUrlListResponseInterface
   * @default:
   *
   **/
  single_url_list: PddDdkOauthLotteryUrlGenLotteryUrlResponseUrlListSingleUrlListResponseInterface;

  /**
   * @description: 转盘抽免单多人团链接
   * @type: PddDdkOauthLotteryUrlGenLotteryUrlResponseUrlListMultiUrlListResponseInterface
   * @default:
   *
   **/
  multi_url_list: PddDdkOauthLotteryUrlGenLotteryUrlResponseUrlListMultiUrlListResponseInterface;

  /**
   * @description: 自定义参数
   * @type: string
   * @default:
   **/
  sign: string;

  /**
   * @description: qq小程序信息
   * @type: PddDdkOauthLotteryUrlGenLotteryUrlResponseUrlListQqAppInfoResponseInterface
   * @default:
   *
   **/
  qq_app_info: PddDdkOauthLotteryUrlGenLotteryUrlResponseUrlListQqAppInfoResponseInterface;

  /**
   * @description: 小程序信息
   * @type: PddDdkOauthLotteryUrlGenLotteryUrlResponseUrlListWeAppInfoResponseInterface
   * @default:
   *
   **/
  we_app_info: PddDdkOauthLotteryUrlGenLotteryUrlResponseUrlListWeAppInfoResponseInterface;
}

/**
 * @description 转盘抽免单单人团链接
 * @default
 * @example
 **/
export interface PddDdkOauthLotteryUrlGenLotteryUrlResponseUrlListSingleUrlListResponseInterface {
  /**
   * @description: 转盘抽免单长链接
   * @type: string
   * @default:
   **/
  url: string;

  /**
   * @description: 转盘抽免单短链接
   * @type: string
   * @default:
   **/
  short_url: string;

  /**
   * @description: 转盘抽免单唤醒APP长链接
   * @type: string
   * @default:
   **/
  mobile_url: string;

  /**
   * @description: 转盘抽免单唤醒APP短链接
   * @type: string
   * @default:
   **/
  mobile_short_url: string;

  /**
   * @description: 转盘抽免单唤醒微信长链接
   * @type: string
   * @default:
   **/
  we_app_web_view_url: string;

  /**
   * @description: 转盘抽免单唤醒微信短链接
   * @type: string
   * @default:
   **/
  we_app_web_view_short_url: string;

  /**
   * @description: 转盘抽免单小程序短链接
   * @type: string
   * @default:
   **/
  we_app_page_path: string;

  /**
   * @description: schema的链接
   * @type: string
   * @default:
   **/
  schema_url: string;
}

/**
 * @description 转盘抽免单多人团链接
 * @default
 * @example
 **/
export interface PddDdkOauthLotteryUrlGenLotteryUrlResponseUrlListMultiUrlListResponseInterface {
  /**
   * @description: 转盘抽免单长链接
   * @type: string
   * @default:
   **/
  url: string;

  /**
   * @description: 转盘抽免单短链接
   * @type: string
   * @default:
   **/
  short_url: string;

  /**
   * @description: 转盘抽免单唤醒拼多多APP长链接
   * @type: string
   * @default:
   **/
  mobile_url: string;

  /**
   * @description: 转盘抽免单唤醒拼多多APP短链接
   * @type: string
   * @default:
   **/
  mobile_short_url: string;

  /**
   * @description: 转盘抽免单唤醒微信长链接
   * @type: string
   * @default:
   **/
  we_app_web_view_url: string;

  /**
   * @description: 转盘抽免单唤醒微信短链接
   * @type: string
   * @default:
   **/
  we_app_web_view_short_url: string;

  /**
   * @description: 转盘抽免单小程序链接
   * @type: string
   * @default:
   **/
  we_app_page_path: string;

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
export interface PddDdkOauthLotteryUrlGenLotteryUrlResponseUrlListQqAppInfoResponseInterface {
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
 * @description 小程序信息
 * @default
 * @example
 **/
export interface PddDdkOauthLotteryUrlGenLotteryUrlResponseUrlListWeAppInfoResponseInterface {
  /**
   * @description: 小程序ID
   * @type: string
   * @default:
   **/
  app_id: string;

  /**
   * @description: 小程序图片
   * @type: string
   * @default:
   **/
  we_app_icon_url: string;

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
   * @description: 来源名
   * @type: string
   * @default:
   **/
  source_display_name: string;

  /**
   * @description: 小程序path值
   * @type: string
   * @default:
   **/
  page_path: string;

  /**
   * @description: 用户名
   * @type: string
   * @default:
   **/
  user_name: string;

  /**
   * @description: 小程序标题
   * @type: string
   * @default:
   **/
  title: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_DDK_OAUTH_LOTTERY_URL_GEN]: {
    requestInterface: PddDdkOauthLotteryUrlGenRequestInterface;
    responseInterface: PddDdkOauthLotteryUrlGenResponseInterface;
  };
}
