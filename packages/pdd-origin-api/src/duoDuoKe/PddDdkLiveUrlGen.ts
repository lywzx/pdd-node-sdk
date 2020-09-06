export const PDD_DDK_LIVE_URL_GEN = 'pdd.ddk.live.url.gen';
export const PDD_DDK_LIVE_URL_GEN_RESPONSE_KEY = 'live_promotion_url_generate_response';

/**
 * 接口名称：生成直播间推广链接
 * 接口标识：pdd.ddk.live.url.gen
 * 接口使用场景：支持生成推广达人、店铺、预约直播间推广链接
 **/
export interface PddDdkLiveUrlGenRequestInterface {
  /**
   * @description: 自定义参数，为链接打上自定义标签；自定义参数最长限制64个字节；格式为：{"uid":"11111","sid":"22222"} ，其中 uid 为用户唯一标识，可自行加密后传入，每个用户仅且对应一个标识，必填； sid 上下文信息标识，例如sessionId等，非必填。该json字符串中也可以加入其他自定义的key。授权绑定备案支持优先对该自定义参数里面uid的解析绑定。
   * @type: string
   * @default:
   **/
  custom_parameters: string;

  /**
   * @description: 是否生成唤起拼多多APP链接，默认true
   * @type: boolean
   * @default: true
   **/
  generate_mobile?: boolean;

  /**
   * @description: 是否返回 schema URL
   * @type: boolean
   * @default: false
   **/
  generate_schema_url?: boolean;

  /**
   * @description: 是否生成短链接，默认true
   * @type: boolean
   * @default: true
   **/
  generate_short_url?: boolean;

  /**
   * @description: 是否生成小程序推广，默认false
   * @type: boolean
   * @default: false
   **/
  generate_we_app?: boolean;

  /**
   * @description: 直播间类型；1-达人，2-店铺，3-预约直播间；默认1
   * @type: number
   * @default: 1
   **/
  live_type: number;

  /**
   * @description: 推广位ID
   * @type: string
   * @default:
   **/
  p_id: string;

  /**
   * @description: 直播间id或者店铺id
   * @type: string
   * @default:
   **/
  room_id: string;
}

/**
 * 接口名称：生成直播间推广链接
 * 接口标识：pdd.ddk.live.url.gen
 * 接口使用场景：支持生成推广达人、店铺、预约直播间推广链接
 **/
export interface PddDdkLiveUrlGenResponseInterface {
  /**
   * @description:
   * @type: PddDdkLiveUrlGenLivePromotionUrlGenerateResponseResponseInterface
   * @default:
   *
   **/
  live_promotion_url_generate_response: PddDdkLiveUrlGenLivePromotionUrlGenerateResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddDdkLiveUrlGenLivePromotionUrlGenerateResponseResponseInterface {
  /**
   * @description: 唤醒拼多多app的推广短链接
   * @type: string
   * @default:
   **/
  mobile_short_url: string;

  /**
   * @description: 唤醒拼多多app的推广长链接
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
   * @description: 推广短链接
   * @type: string
   * @default:
   **/
  short_url: string;

  /**
   * @description: 推广长链接
   * @type: string
   * @default:
   **/
  url: string;

  /**
   * @description: 小程序信息
   * @type: PddDdkLiveUrlGenLivePromotionUrlGenerateResponseWeAppInfoResponseInterface
   * @default:
   *
   **/
  we_app_info: PddDdkLiveUrlGenLivePromotionUrlGenerateResponseWeAppInfoResponseInterface;
}

/**
 * @description 小程序信息
 * @default
 * @example
 **/
export interface PddDdkLiveUrlGenLivePromotionUrlGenerateResponseWeAppInfoResponseInterface {
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
   * @description: 小程序图片
   * @type: string
   * @default:
   **/
  we_app_icon_url: string;
}
