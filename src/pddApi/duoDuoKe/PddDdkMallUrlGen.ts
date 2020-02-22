export const PDD_DDK_MALL_URL_GEN = 'PDD_DDK_MALL_URL_GEN';

/**
 * 接口名称：多多客生成店铺推广链接API
 * 接口标识：pdd.ddk.mall.url.gen
 * 接口使用场景：多多客工具生成店铺推广链接API
 **/

export interface PddDdkMallUrlGenRequestInterface {
  /**
   * @description: 店铺id
   * @type: string
   * @default:
   **/
  mall_id?: string;

  /**
   * @description: 推广位
   * @type: string
   * @default:
   **/
  pid?: string;

  /**
   * @description: 是否生成唤起微信客户端链接，true-是，false-否，默认false
   * @type: boolean
   * @default:
   **/
  generate_weapp_webview: boolean;

  /**
   * @description: 是否生成短链接，true-是，false-否
   * @type: boolean
   * @default:
   **/
  generate_short_url: boolean;

  /**
   * @description: true--生成多人团推广链接 false--生成单人团推广链接（默认false）1、单人团推广链接：用户访问单人团推广链接，可直接购买商品无需拼团。2、多人团推广链接：用户访问双人团推广链接开团，若用户分享给他人参团，则开团者和参团者的佣金均结算给推手
   * @type: boolean
   * @default:
   **/
  multi_group: boolean;

  /**
   * @description: 自定义参数，为链接打上自定义标签。自定义参数最长限制64个字节
   * @type: string
   * @default:
   **/
  custom_parameters: string;

  /**
   * @description: 是否生成店铺收藏券推广链接
   * @type: boolean
   * @default:
   **/
  generate_mall_collect_coupon: boolean;

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
 * 接口名称：多多客生成店铺推广链接API
 * 接口标识：pdd.ddk.mall.url.gen
 * 接口使用场景：多多客工具生成店铺推广链接API
 **/

export interface PddDdkMallUrlGenResponseInterface {
  /**
   * @description: mall_coupon_generate_url_response
   * @type: PddDdkMallUrlGenMallCouponGenerateUrlResponseResponseInterface
   * @default:
   *
   **/
  mall_coupon_generate_url_response: PddDdkMallUrlGenMallCouponGenerateUrlResponseResponseInterface;
}

/**
 * @description mall_coupon_generate_url_response
 * @default
 * @example
 **/

export interface PddDdkMallUrlGenMallCouponGenerateUrlResponseResponseInterface {
  /**
   * @description: 推广链接
   * @type: PddDdkMallUrlGenMallCouponGenerateUrlResponseListResponseInterface[]
   * @default:
   *
   **/
  list: PddDdkMallUrlGenMallCouponGenerateUrlResponseListResponseInterface[];
}

/**
 * @description 推广链接
 * @default
 * @example
 **/

export interface PddDdkMallUrlGenMallCouponGenerateUrlResponseListResponseInterface {
  /**
   * @description: 推广长链接
   * @type: string
   * @default:
   **/
  url: string;

  /**
   * @description: 推广短链接
   * @type: string
   * @default:
   **/
  short_url: string;

  /**
   * @description: 唤醒拼多多app的推广长链接
   * @type: string
   * @default:
   **/
  mobile_url: string;

  /**
   * @description: 唤醒拼多多app的推广短链接
   * @type: string
   * @default:
   **/
  mobile_short_url: string;

  /**
   * @description: 唤起微信app推广链接
   * @type: string
   * @default:
   **/
  we_app_web_view_url: string;

  /**
   * @description: 唤起微信app推广短链接
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

  /**
   * @description: qq小程序信息
   * @type: PddDdkMallUrlGenMallCouponGenerateUrlResponseListQqAppInfoResponseInterface
   * @default:
   *
   **/
  qq_app_info: PddDdkMallUrlGenMallCouponGenerateUrlResponseListQqAppInfoResponseInterface;
}

/**
 * @description qq小程序信息
 * @default
 * @example
 **/

export interface PddDdkMallUrlGenMallCouponGenerateUrlResponseListQqAppInfoResponseInterface {
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

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_DDK_MALL_URL_GEN]: {
    requestInterface: PddDdkMallUrlGenRequestInterface;
    responseInterface: PddDdkMallUrlGenResponseInterface;
  };
}
