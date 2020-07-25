export const PDD_DDK_GOODS_PROMOTION_URL_GENERATE = 'pdd.ddk.goods.promotion.url.generate';
export const PDD_DDK_GOODS_PROMOTION_URL_GENERATE_RESPONSE_KEY = 'goods_promotion_url_generate_response';

/**
 * 接口名称：多多进宝推广链接生成
 * 接口标识：pdd.ddk.goods.promotion.url.generate
 * 接口使用场景：生成普通商品推广链接
 **/
export interface PddDdkGoodsPromotionUrlGenerateRequestInterface {
  /**
   * @description: 自定义参数，为链接打上自定义标签；自定义参数最长限制64个字节；格式为：  {"uid":"11111","sid":"22222"} ，其中 uid 用户唯一标识，可自行加密后传入，每个用户仅且对应一个标识，必填； sid 上下文信息标识，例如sessionId等，非必填。该json字符串中也可以加入其他自定义的key
   * @type: string
   * @default:
   **/
  custom_parameters?: string;

  /**
   * @description: 是否生成店铺收藏券推广链接
   * @type: boolean
   * @default:
   **/
  generate_mall_collect_coupon?: boolean;

  /**
   * @description: 是否生成qq小程序
   * @type: boolean
   * @default: false
   **/
  generate_qq_app?: boolean;

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
   * @description: 是否生成唤起微信客户端链接，true-是，false-否，默认false
   * @type: boolean
   * @default:
   **/
  generate_weapp_webview?: boolean;

  /**
   * @description: 是否生成微博推广链接
   * @type: boolean
   * @default: false
   **/
  generate_weiboapp_webview?: boolean;

  /**
   * @description: 是否生成小程序推广
   * @type: boolean
   * @default:
   **/
  generate_we_app?: boolean;

  /**
   * @description: 商品ID，仅支持单个查询
   * @type: Array<string | number>
   * @default:
   **/
  goods_id_list: Array<string | number>;

  /**
   * @description: true--生成多人团推广链接 false--生成单人团推广链接（默认false）1、单人团推广链接：用户访问单人团推广链接，可直接购买商品无需拼团。2、多人团推广链接：用户访问双人团推广链接开团，若用户分享给他人参团，则开团者和参团者的佣金均结算给推手
   * @type: boolean
   * @default:
   **/
  multi_group?: boolean;

  /**
   * @description: 推广位ID
   * @type: string
   * @default:
   **/
  p_id: string;

  /**
   * @description: 搜索id，建议填写，提高收益。来自pdd.ddk.goods.recommend.get、pdd.ddk.goods.search、pdd.ddk.top.goods.list.query等接口
   * @type: string
   * @default:
   **/
  search_id?: string;

  /**
   * @description: 招商多多客ID
   * @type: string | number
   * @default:
   **/
  zs_duo_id?: string | number;

  /**
   * @description: 直播间id列表，如果生成直播间推广链接该参数必填，goods_id_list填[1]
   * @type: string[]
   * @default:
   **/
  room_id_list?: string[];

  /**
   * @description: 直播预约id列表，如果生成直播间预约推广链接该参数必填，goods_id_list填[1]，room_id_list不填
   * @type: string[]
   * @default:
   **/
  target_id_list?: string[];
}

/**
 * 接口名称：多多进宝推广链接生成
 * 接口标识：pdd.ddk.goods.promotion.url.generate
 * 接口使用场景：生成普通商品推广链接
 **/
export interface PddDdkGoodsPromotionUrlGenerateResponseInterface {
  /**
   * @description: response
   * @type: PddDdkGoodsPromotionUrlGenerateGoodsPromotionUrlGenerateResponseResponseInterface
   * @default:
   *
   **/
  goods_promotion_url_generate_response: PddDdkGoodsPromotionUrlGenerateGoodsPromotionUrlGenerateResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddDdkGoodsPromotionUrlGenerateGoodsPromotionUrlGenerateResponseResponseInterface {
  /**
   * @description: 多多进宝推广链接对象列表
   * @type: PddDdkGoodsPromotionUrlGenerateGoodsPromotionUrlGenerateResponseGoodsPromotionUrlListResponseInterface[]
   * @default:
   *
   **/
  goods_promotion_url_list: PddDdkGoodsPromotionUrlGenerateGoodsPromotionUrlGenerateResponseGoodsPromotionUrlListResponseInterface[];
}

/**
 * @description 多多进宝推广链接对象列表
 * @default
 * @example
 **/
export interface PddDdkGoodsPromotionUrlGenerateGoodsPromotionUrlGenerateResponseGoodsPromotionUrlListResponseInterface {
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
   * @description: qq小程序信息
   * @type: PddDdkGoodsPromotionUrlGenerateGoodsPromotionUrlGenerateResponseGoodsPromotionUrlListQqAppInfoResponseInterface
   * @default:
   *
   **/
  qq_app_info: PddDdkGoodsPromotionUrlGenerateGoodsPromotionUrlGenerateResponseGoodsPromotionUrlListQqAppInfoResponseInterface;

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
   * @description: 微博推广短链接
   * @type: string
   * @default:
   **/
  weibo_app_web_view_short_url: string;

  /**
   * @description: 微博推广链接
   * @type: string
   * @default:
   **/
  weibo_app_web_view_url: string;

  /**
   * @description: 小程序信息
   * @type: PddDdkGoodsPromotionUrlGenerateGoodsPromotionUrlGenerateResponseGoodsPromotionUrlListWeAppInfoResponseInterface
   * @default:
   *
   **/
  we_app_info: PddDdkGoodsPromotionUrlGenerateGoodsPromotionUrlGenerateResponseGoodsPromotionUrlListWeAppInfoResponseInterface;

  /**
   * @description: 唤起微信app推广短链接
   * @type: string
   * @default:
   **/
  we_app_web_view_short_url: string;

  /**
   * @description: 唤起微信app推广链接
   * @type: string
   * @default:
   **/
  we_app_web_view_url: string;
}

/**
 * @description qq小程序信息
 * @default
 * @example
 **/
export interface PddDdkGoodsPromotionUrlGenerateGoodsPromotionUrlGenerateResponseGoodsPromotionUrlListQqAppInfoResponseInterface {
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
export interface PddDdkGoodsPromotionUrlGenerateGoodsPromotionUrlGenerateResponseGoodsPromotionUrlListWeAppInfoResponseInterface {
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