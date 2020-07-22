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
   * @description: 是否唤起微信客户端， 默认false 否，true 是
   * @type: boolean
   * @default:
   **/
  generate_weapp_webview?: boolean;

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
   * @description: 多人团短链
   * @type: string
   * @default:
   **/
  multi_group_short_url: string;

  /**
   * @description: 多人团长链
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
   * @description: 多人团唤醒微信推广短链接
   * @type: string
   * @default:
   **/
  multi_we_app_web_view_short_url: string;

  /**
   * @description: 多人团唤醒微信推广长链接
   * @type: string
   * @default:
   **/
  multi_we_app_web_view_url: string;

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
   * @description: h5长链接
   * @type: string
   * @default:
   **/
  url: string;

  /**
   * @description: 唤醒微信短链
   * @type: string
   * @default:
   **/
  we_app_web_view_short_url: string;

  /**
   * @description: 唤醒微信长链
   * @type: string
   * @default:
   **/
  we_app_web_view_url: string;
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
   * @description: schema的链接
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
   * @description: 双人团长链接
   * @type: string
   * @default:
   **/
  url: string;

  /**
   * @description: 双人团唤醒微信短链接
   * @type: string
   * @default:
   **/
  we_app_web_view_short_url: string;

  /**
   * @description: 双人团唤醒微信链接
   * @type: string
   * @default:
   **/
  we_app_web_view_url: string;
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
   * @description: schema的链接
   * @type: string
   * @default:
   **/
  schema_url: string;

  /**
   * @description: 短链接
   * @type: string
   * @default:
   **/
  short_url: string;

  /**
   * @description: 长链接
   * @type: string
   * @default:
   **/
  url: string;

  /**
   * @description: 唤醒微信短链接
   * @type: string
   * @default:
   **/
  we_app_web_view_short_url: string;

  /**
   * @description: 唤醒微信链接
   * @type: string
   * @default:
   **/
  we_app_web_view_url: string;
}
