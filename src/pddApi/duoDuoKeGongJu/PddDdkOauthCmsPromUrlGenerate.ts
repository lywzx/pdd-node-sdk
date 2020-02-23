export const PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE = 'pdd.ddk.oauth.cms.prom.url.generate';

/**
 * 接口名称：生成商城推广链接接口
 * 接口标识：pdd.ddk.oauth.cms.prom.url.generate
 * 接口使用场景：生成商城推广链接接口
 **/
export interface PddDdkOauthCmsPromUrlGenerateRequestInterface {
  /**
   * @description: 是否生成短链接。true-是，false-否，默认false
   * @type: boolean
   * @default:
   **/
  generate_short_url: boolean;

  /**
   * @description: 推广位列表，例如：["60005_612"]
   * @type: string
   * @default:
   **/
  p_id_list?: string;

  /**
   * @description: 是否生成手机跳转链接。true-是，false-否，默认false
   * @type: boolean
   * @default:
   **/
  generate_mobile: boolean;

  /**
   * @description: 单人团多人团标志。true-多人团，false-单人团 默认false
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
   * @description: 是否唤起微信客户端， 默认false 否，true 是
   * @type: boolean
   * @default:
   **/
  generate_weapp_webview: boolean;

  /**
   * @description: 唤起微信app推广短链接
   * @type: boolean
   * @default:
   **/
  we_app_web_view_short_url: boolean;

  /**
   * @description: 唤起微信app推广链接
   * @type: boolean
   * @default:
   **/
  we_app_web_wiew_url: boolean;

  /**
   * @description: 0, "1.9包邮"；1, "今日爆款"； 2, "品牌清仓"； 4,"PC端专属商城"
   * @type: number
   * @default:
   **/
  channel_type?: number;

  /**
   * @description: 是否返回 schema URL
   * @type: string
   * @default: false
   **/
  generate_schema_url: string;
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
   * @description: url_list
   * @type: PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListResponseInterface[]
   * @default:
   *
   **/
  url_list: PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListResponseInterface[];
}

/**
 * @description url_list
 * @default
 * @example
 **/
export interface PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListResponseInterface {
  /**
   * @description: 商城推广链接
   * @type: string
   * @default:
   **/
  url: string;

  /**
   * @description: 商城推广短链接
   * @type: string
   * @default:
   **/
  short_url: string;

  /**
   * @description: 商城推广移动链接
   * @type: string
   * @default:
   **/
  mobile_url: string;

  /**
   * @description: 商城推广移动短链接
   * @type: string
   * @default:
   **/
  mobile_short_url: string;

  /**
   * @description: 商城推广多人团链接
   * @type: string
   * @default:
   **/
  multi_group_url: string;

  /**
   * @description: 商城推广多人团短链接
   * @type: string
   * @default:
   **/
  multi_group_short_url: string;

  /**
   * @description: 商城推广多人团移动链接
   * @type: string
   * @default:
   **/
  multi_group_mobile_url: string;

  /**
   * @description: 商城推广多人团移动短链接
   * @type: string
   * @default:
   **/
  multi_group_mobile_short_url: string;

  /**
   * @description: schema的链接
   * @type: string
   * @default:
   **/
  schema_url: string;
}
