export const PDD_DDK_CMS_PROM_URL_GENERATE = 'PDD_DDK_CMS_PROM_URL_GENERATE';

/**
 * 接口名称：生成商城-频道推广链接
 * 接口标识：pdd.ddk.cms.prom.url.generate
 * 接口使用场景：生成商城推广链接接口
 **/

export interface PddDdkCmsPromUrlGenerateRequestInterface {
  /**
   * @description: 是否生成短链接，true-是，false-否
   * @type: boolean
   * @default:
   **/
  generate_short_url: boolean;

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
  we_app_web_view_short_url?: boolean;

  /**
   * @description: 唤起微信app推广链接
   * @type: boolean
   * @default:
   **/
  we_app_web_view_url?: boolean;

  /**
   * @description: 0, "1.9包邮"；1, "今日爆款"； 2, "品牌清仓"； 4,"PC端专属商城"
   * @type: number
   * @default:
   **/
  channel_type: number;

  /**
   * @description: 推广位列表，例如：["60005_612"]
   * @type: string
   * @default:
   **/
  p_id_list?: string;

  /**
   * @description: 是否返回 schema URL
   * @type: boolean
   * @default: false
   **/
  generate_schema_url: boolean;
}

/**
 * 接口名称：生成商城-频道推广链接
 * 接口标识：pdd.ddk.cms.prom.url.generate
 * 接口使用场景：生成商城推广链接接口
 **/

export interface PddDdkCmsPromUrlGenerateResponseInterface {
  /**
   * @description: 商城推广链接返回对象
   * @type: PddDdkCmsPromUrlGenerateCmsPromotionUrlGenerateResponseResponseInterface
   * @default:
   *
   **/
  cms_promotion_url_generate_response: PddDdkCmsPromUrlGenerateCmsPromotionUrlGenerateResponseResponseInterface;
}

/**
 * @description 商城推广链接返回对象
 * @default
 * @example
 **/

export interface PddDdkCmsPromUrlGenerateCmsPromotionUrlGenerateResponseResponseInterface {
  /**
   * @description: total
   * @type: number
   * @default:
   **/
  total: number;

  /**
   * @description: 链接列表
   * @type: PddDdkCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListResponseInterface[]
   * @default:
   *
   **/
  url_list: PddDdkCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListResponseInterface[];
}

/**
 * @description 链接列表
 * @default
 * @example
 **/

export interface PddDdkCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListResponseInterface {
  /**
   * @description: 多人团唤醒微信推广长链接
   * @type: string
   * @default:
   **/
  multi_we_app_web_view_url: string;

  /**
   * @description: 双人团链接列表
   * @type: PddDdkCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListMultiUrlListResponseInterface
   * @default:
   *
   **/
  multi_url_list: PddDdkCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListMultiUrlListResponseInterface;

  /**
   * @description: 多人团唤醒拼多多app链接
   * @type: string
   * @default:
   **/
  multi_group_mobile_short_url: string;

  /**
   * @description: 唤醒拼多多app链接
   * @type: string
   * @default:
   **/
  mobile_url: string;

  /**
   * @description: CPSsign
   * @type: string
   * @default:
   **/
  sign: string;

  /**
   * @description: 多人团唤醒微信推广短链接
   * @type: string
   * @default:
   **/
  multi_we_app_web_view_short_url: string;

  /**
   * @description: 多人团唤醒拼多多app长链接
   * @type: string
   * @default:
   **/
  multi_group_mobile_url: string;

  /**
   * @description: h5长链接
   * @type: string
   * @default:
   **/
  url: string;

  /**
   * @description: h5短链接
   * @type: string
   * @default:
   **/
  short_url: string;

  /**
   * @description: 单人团链接列表
   * @type: PddDdkCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListSingleUrlListResponseInterface
   * @default:
   *
   **/
  single_url_list: PddDdkCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListSingleUrlListResponseInterface;

  /**
   * @description: 多人团长链
   * @type: string
   * @default:
   **/
  multi_group_url: string;

  /**
   * @description: 多人团短链
   * @type: string
   * @default:
   **/
  multi_group_short_url: string;

  /**
   * @description: 唤醒拼多多app短链
   * @type: string
   * @default:
   **/
  mobile_short_url: string;

  /**
   * @description: 唤醒微信长链
   * @type: string
   * @default:
   **/
  we_app_web_view_url: string;

  /**
   * @description: 唤醒微信短链
   * @type: string
   * @default:
   **/
  we_app_web_view_short_url: string;
}

/**
 * @description 双人团链接列表
 * @default
 * @example
 **/

export interface PddDdkCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListMultiUrlListResponseInterface {
  /**
   * @description: 双人团唤醒拼多多app长链接
   * @type: string
   * @default:
   **/
  mobile_url: string;

  /**
   * @description: 双人团唤醒拼多多app短链接
   * @type: string
   * @default:
   **/
  mobile_short_url: string;

  /**
   * @description: 双人团唤醒微信链接
   * @type: string
   * @default:
   **/
  we_app_web_view_url: string;

  /**
   * @description: 双人团长链接
   * @type: string
   * @default:
   **/
  url: string;

  /**
   * @description: 双人团短链接
   * @type: string
   * @default:
   **/
  short_url: string;

  /**
   * @description: 双人团唤醒微信短链接
   * @type: string
   * @default:
   **/
  we_app_web_view_short_url: string;

  /**
   * @description: schema的链接
   * @type: string
   * @default:
   **/
  schema_url: string;
}

/**
 * @description 单人团链接列表
 * @default
 * @example
 **/

export interface PddDdkCmsPromUrlGenerateCmsPromotionUrlGenerateResponseUrlListSingleUrlListResponseInterface {
  /**
   * @description: 唤醒拼多多app长链接
   * @type: string
   * @default:
   **/
  mobile_url: string;

  /**
   * @description: 唤醒拼多多app短链接
   * @type: string
   * @default:
   **/
  mobile_short_url: string;

  /**
   * @description: 唤醒微信链接
   * @type: string
   * @default:
   **/
  we_app_web_view_url: string;

  /**
   * @description: 长链接
   * @type: string
   * @default:
   **/
  url: string;

  /**
   * @description: 短链接
   * @type: string
   * @default:
   **/
  short_url: string;

  /**
   * @description: 唤醒微信短链接
   * @type: string
   * @default:
   **/
  we_app_web_view_short_url: string;

  /**
   * @description: schema的链接
   * @type: string
   * @default:
   **/
  schema_url: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_DDK_CMS_PROM_URL_GENERATE]: {
    requestInterface: PddDdkCmsPromUrlGenerateRequestInterface;
    responseInterface: PddDdkCmsPromUrlGenerateResponseInterface;
  };
}
