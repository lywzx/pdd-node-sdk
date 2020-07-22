export const PDD_DDK_THEME_PROM_URL_GENERATE = 'pdd.ddk.theme.prom.url.generate';
export const PDD_DDK_THEME_PROM_URL_GENERATE_RESPONSE_KEY = 'theme_promotion_url_generate_response';

/**
 * 接口名称：多多进宝主题推广链接生成
 * 接口标识：pdd.ddk.theme.prom.url.generate
 * 接口使用场景：多多进宝主题活动推广链接生成
 **/
export interface PddDdkThemePromUrlGenerateRequestInterface {
  /**
   * @description: 推广位ID
   * @type: string
   * @default:
   **/
  pid: string;

  /**
   * @description: 主题ID列表,例如[1,235]
   * @type: Array<string | number>
   * @default:
   **/
  theme_id_list: Array<string | number>;

  /**
   * @description: 是否生成短链接,true-是,false-否
   * @type: boolean
   * @default:
   **/
  generate_short_url?: boolean;

  /**
   * @description: 是否生成手机跳转链接。true-是,false-否,默认false
   * @type: boolean
   * @default:
   **/
  generate_mobile?: boolean;

  /**
   * @description: 自定义参数,为链接打上自定义标签。自定义参数最长限制64个字节。
   * @type: string
   * @default:
   **/
  custom_parameters?: string;

  /**
   * @description: 是否唤起微信客户端， 默认false 否，true 是
   * @type: boolean
   * @default:
   **/
  generate_weapp_webview?: boolean;

  /**
   * @description: 唤起微信app推广短链接
   * @type: boolean
   * @default:
   **/
  we_app_web_view_short_url?: boolean;

  /**
   * @description: 唤起微信app推广链接
   * @type: boolean
   * @default:
   **/
  we_app_web_wiew_url?: boolean;

  /**
   * @description: 是否生成小程序链接
   * @type: boolean
   * @default:
   **/
  generate_we_app?: boolean;

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
 * 接口名称：多多进宝主题推广链接生成
 * 接口标识：pdd.ddk.theme.prom.url.generate
 * 接口使用场景：多多进宝主题活动推广链接生成
 **/
export interface PddDdkThemePromUrlGenerateResponseInterface {
  /**
   * @description: 主题活动推广返回对象
   * @type: PddDdkThemePromUrlGenerateThemePromotionUrlGenerateResponseResponseInterface
   * @default:
   *
   **/
  theme_promotion_url_generate_response: PddDdkThemePromUrlGenerateThemePromotionUrlGenerateResponseResponseInterface;
}

/**
 * @description 主题活动推广返回对象
 * @default
 * @example
 **/
export interface PddDdkThemePromUrlGenerateThemePromotionUrlGenerateResponseResponseInterface {
  /**
   * @description: 主题活动推广url列表
   * @type: PddDdkThemePromUrlGenerateThemePromotionUrlGenerateResponseUrlListResponseInterface[]
   * @default:
   *
   **/
  url_list: PddDdkThemePromUrlGenerateThemePromotionUrlGenerateResponseUrlListResponseInterface[];
}

/**
 * @description 主题活动推广url列表
 * @default
 * @example
 **/
export interface PddDdkThemePromUrlGenerateThemePromotionUrlGenerateResponseUrlListResponseInterface {
  /**
   * @description: 主题活动推广链接
   * @type: string
   * @default:
   **/
  url: string;

  /**
   * @description: 主题活动推广短链
   * @type: string
   * @default:
   **/
  short_url: string;

  /**
   * @description: 主题活动推广移动链接
   * @type: string
   * @default:
   **/
  mobile_url: string;

  /**
   * @description: 主题活动推广移动短链接
   * @type: string
   * @default:
   **/
  mobile_short_url: string;

  /**
   * @description: 主题活动推广开团链接
   * @type: string
   * @default:
   **/
  multi_group_url: string;

  /**
   * @description: 主题活动推广开团短链接
   * @type: string
   * @default:
   **/
  multi_group_short_url: string;

  /**
   * @description: 主题活动推广开团移动端链接
   * @type: string
   * @default:
   **/
  multi_group_mobile_url: string;

  /**
   * @description: 主题活动推广开团移动端短链接
   * @type: string
   * @default:
   **/
  multi_group_mobile_short_url: string;

  /**
   * @description: 小程序信息
   * @type: PddDdkThemePromUrlGenerateThemePromotionUrlGenerateResponseUrlListWeAppInfoResponseInterface
   * @default:
   *
   **/
  we_app_info: PddDdkThemePromUrlGenerateThemePromotionUrlGenerateResponseUrlListWeAppInfoResponseInterface;

  /**
   * @description: schema的链接
   * @type: string
   * @default:
   **/
  schema_url: string;

  /**
   * @description: qq小程序信息
   * @type: PddDdkThemePromUrlGenerateThemePromotionUrlGenerateResponseUrlListQqAppInfoResponseInterface
   * @default:
   *
   **/
  qq_app_info: PddDdkThemePromUrlGenerateThemePromotionUrlGenerateResponseUrlListQqAppInfoResponseInterface;
}

/**
 * @description 小程序信息
 * @default
 * @example
 **/
export interface PddDdkThemePromUrlGenerateThemePromotionUrlGenerateResponseUrlListWeAppInfoResponseInterface {
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
   * @type: number
   * @default:
   **/
  title: number;

  /**
   * @description: 拼多多小程序id
   * @type: number
   * @default:
   **/
  app_id: number;
}

/**
 * @description qq小程序信息
 * @default
 * @example
 **/
export interface PddDdkThemePromUrlGenerateThemePromotionUrlGenerateResponseUrlListQqAppInfoResponseInterface {
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
