export const PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE = 'pdd.ddk.oauth.cms.prom.url.generate';
export const PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE_RESPONSE_KEY = 'cms_promotion_url_generate_response';

/**
 * 接口名称：生成商城推广链接接口
 * 接口标识：pdd.ddk.oauth.cms.prom.url.generate
 * 接口使用场景：生成商城推广链接接口
 **/
export interface PddDdkOauthCmsPromUrlGenerateRequestInterface {
  /**
   * @description: 0, "1.9包邮"；1, "今日爆款"； 2, "品牌清仓"； 4,"PC端专属商城"
   * @type: number
   * @default:
   **/
  channel_type?: number;

  /**
   * @description: 自定义参数，为链接打上自定义标签；自定义参数最长限制64个字节；格式为：  {"uid":"11111","sid":"22222"} ，其中 uid 用户唯一标识，可自行加密后传入，每个用户仅且对应一个标识，必填； sid 上下文信息标识，例如sessionId等，非必填。该json字符串中也可以加入其他自定义的key
   * @type: string
   * @default:
   **/
  custom_parameters?: string;

  /**
   * @description: 是否生成手机跳转链接。true-是，false-否，默认false
   * @type: boolean
   * @default:
   **/
  generate_mobile?: boolean;

  /**
   * @description: 是否返回 schema URL
   * @type: boolean
   * @default: false
   **/
  generate_schema_url?: boolean;

  /**
   * @description: 是否生成短链接，true-是，false-否
   * @type: boolean
   * @default:
   **/
  generate_short_url?: boolean;

  /**
   * @description: 是否生成拼多多福利券微信小程序推广信息
   * @type: boolean
   * @default:
   **/
  generate_we_app?: boolean;

  /**
   * @description: 搜索关键词
   * @type: string
   * @default:
   **/
  keyword?: string;

  /**
   * @description: 单人团多人团标志。true-多人团，false-单人团 默认false
   * @type: boolean
   * @default:
   **/
  multi_group?: boolean;

  /**
   * @description: 推广位列表，例如：["60005_612"]
   * @type: string[]
   * @default:
   **/
  p_id_list: string[];
}

/**
 * 接口名称：生成商城推广链接接口
 * 接口标识：pdd.ddk.oauth.cms.prom.url.generate
 * 接口使用场景：生成商城推广链接接口
 **/
export interface PddDdkOauthCmsPromUrlGenerateResponseInterface {
  /**
   * @description: 商城推广链接返回对象
   * @type: PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseResponseInterface
   * @default:
   *
   **/
  cms_promotion_url_generate_response: PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseResponseInterface;
}

/**
 * @description 商城推广链接返回对象
 * @default
 * @example
 **/
export interface PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseResponseInterface {
  /**
   * @description: total
   * @type: number
   * @default:
   **/
  total: number;

  /**
   * @description: 链接列表
   * @type: PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListResponseInterface[]
   * @default:
   *
   **/
  url_list: PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListResponseInterface[];
}

/**
 * @description 链接列表
 * @default
 * @example
 **/
export interface PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListResponseInterface {
  /**
   * @description: 唤醒拼多多app短链
   * @type: string
   * @default:
   **/
  mobile_short_url: string;

  /**
   * @description: 唤醒拼多多app链接
   * @type: string
   * @default:
   **/
  mobile_url: string;

  /**
   * @description: 多人团唤醒拼多多app链接
   * @type: string
   * @default:
   **/
  multi_group_mobile_short_url: string;

  /**
   * @description: 多人团唤醒拼多多app长链接
   * @type: string
   * @default:
   **/
  multi_group_mobile_url: string;

  /**
   * @description: 多人团短链，唤起H5页面
   * @type: string
   * @default:
   **/
  multi_group_short_url: string;

  /**
   * @description: 多人团长链，唤起H5页面
   * @type: string
   * @default:
   **/
  multi_group_url: string;

  /**
   * @description: 双人团链接列表
   * @type: PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListMultiUrlListResponseInterface
   * @default:
   *
   **/
  multi_url_list: PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListMultiUrlListResponseInterface;

  /**
   * @description: h5短链接
   * @type: string
   * @default:
   **/
  short_url: string;

  /**
   * @description: CPSsign
   * @type: string
   * @default:
   **/
  sign: string;

  /**
   * @description: 单人团链接列表
   * @type: PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListSingleUrlListResponseInterface
   * @default:
   *
   **/
  single_url_list: PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListSingleUrlListResponseInterface;

  /**
   * @description: 普通推广长链接，唤起H5页面
   * @type: string
   * @default:
   **/
  url: string;

  /**
   * @description: 拼多多福利券微信小程序信息
   * @type: PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListWeAppInfoResponseInterface
   * @default:
   *
   **/
  we_app_info: PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListWeAppInfoResponseInterface;
}

/**
 * @description 双人团链接列表
 * @default
 * @example
 **/
export interface PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListMultiUrlListResponseInterface {
  /**
   * @description: 双人团唤醒拼多多app短链接
   * @type: string
   * @default:
   **/
  mobile_short_url: string;

  /**
   * @description: 双人团唤醒拼多多app长链接
   * @type: string
   * @default:
   **/
  mobile_url: string;

  /**
   * @description: schema链接，用户安装拼多多APP的情况下会唤起APP（需客户端支持schema跳转协议）
   * @type: string
   * @default:
   **/
  schema_url: string;

  /**
   * @description: 双人团短链接
   * @type: string
   * @default:
   **/
  short_url: string;

  /**
   * @description: 使用此推广链接，用户安装多多团长APP的情况下会唤起APP（需客户端支持schema跳转协议）
   * @type: string
   * @default:
   **/
  tz_schema_url: string;

  /**
   * @description: 双人团长链接，唤起H5页面
   * @type: string
   * @default:
   **/
  url: string;
}

/**
 * @description 单人团链接列表
 * @default
 * @example
 **/
export interface PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListSingleUrlListResponseInterface {
  /**
   * @description: 唤醒拼多多app短链接
   * @type: string
   * @default:
   **/
  mobile_short_url: string;

  /**
   * @description: 唤醒拼多多app长链接
   * @type: string
   * @default:
   **/
  mobile_url: string;

  /**
   * @description: schema链接，用户安装拼多多APP的情况下会唤起APP（需客户端支持schema跳转协议）
   * @type: string
   * @default:
   **/
  schema_url: string;

  /**
   * @description: 对应出参url的短链接，与url功能一致。
   * @type: string
   * @default:
   **/
  short_url: string;

  /**
   * @description: 使用此推广链接，用户安装多多团长APP的情况下会唤起APP（需客户端支持schema跳转协议）
   * @type: string
   * @default:
   **/
  tz_schema_url: string;

  /**
   * @description: 普通推广长链接，唤起H5页面
   * @type: string
   * @default:
   **/
  url: string;
}

/**
 * @description 拼多多福利券微信小程序信息
 * @default
 * @example
 **/
export interface PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListWeAppInfoResponseInterface {
  /**
   * @description: 小程序id
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
   * @description: 小程序图片
   * @type: string
   * @default:
   **/
  we_app_icon_url: string;
}
