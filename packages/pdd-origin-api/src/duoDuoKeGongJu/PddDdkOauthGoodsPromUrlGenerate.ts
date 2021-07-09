export const PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE = 'pdd.ddk.oauth.goods.prom.url.generate';
export const PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE_RESPONSE_KEY = 'goods_promotion_url_generate_response';
export const PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 10,
    times: 66900,
  },
];

/**
 * 接口名称：生成多多进宝推广链接
 * 接口标识：pdd.ddk.oauth.goods.prom.url.generate
 * 接口使用场景：生成普通商品推广链接
 **/
export interface PddDdkOauthGoodsPromUrlGenerateRequestInterface {
  /**
   * @description: 多多礼金ID
   * @type: string | number
   * @default:
   **/
  cash_gift_id?: string | number;

  /**
   * @description: 自定义礼金标题，用于向用户展示渠道专属福利，不超过12个字
   * @type: string
   * @default:
   **/
  cash_gift_name?: string;

  /**
   * @description: 自定义参数，为链接打上自定义标签；自定义参数最长限制64个字节；格式为：  {"uid":"11111","sid":"22222"} ，其中 uid 用户唯一标识，可自行加密后传入，每个用户仅且对应一个标识，必填； sid 上下文信息标识，例如sessionId等，非必填。该json字符串中也可以加入其他自定义的key。（如果使用GET请求，请使用URLEncode处理参数）
   * @type: string
   * @default:
   **/
  custom_parameters?: string;

  /**
   * @description: 是否使用多多客专属推广计划
   * @type: boolean
   * @default:
   **/
  force_duo_id?: boolean;

  /**
   * @description: 是否生成带授权的单品链接。如果未授权，则会走授权流程
   * @type: boolean
   * @default:
   **/
  generate_authority_url?: boolean;

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
   * @description: 是否生成拼多多福利券微信小程序推广信息
   * @type: boolean
   * @default:
   **/
  generate_we_app?: boolean;

  /**
   * @description: 商品goodsSign列表，例如：["c9r2omogKFFAc7WBwvbZU1ikIb16_J3CTa8HNN"]，支持批量生链。goodsSign是加密后的goodsId, goodsId已下线，请使用goodsSign来替代。使用说明：https://jinbao.pinduoduo.com/qa-system?questionId=252
   * @type: string[]
   * @default:
   **/
  goods_sign_list?: string[];

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
}

/**
 * 接口名称：生成多多进宝推广链接
 * 接口标识：pdd.ddk.oauth.goods.prom.url.generate
 * 接口使用场景：生成普通商品推广链接
 **/
export interface PddDdkOauthGoodsPromUrlGenerateResponseInterface {
  /**
   * @description: response
   * @type: PddDdkOauthGoodsPromUrlGenerateGoodsPromotionUrlGenerateResponseResponseInterface
   * @default:
   *
   **/
  goods_promotion_url_generate_response: PddDdkOauthGoodsPromUrlGenerateGoodsPromotionUrlGenerateResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddDdkOauthGoodsPromUrlGenerateGoodsPromotionUrlGenerateResponseResponseInterface {
  /**
   * @description: 多多进宝推广链接对象列表
   * @type: PddDdkOauthGoodsPromUrlGenerateGoodsPromotionUrlGenerateResponseGoodsPromotionUrlListResponseInterface[]
   * @default:
   *
   **/
  goods_promotion_url_list: PddDdkOauthGoodsPromUrlGenerateGoodsPromotionUrlGenerateResponseGoodsPromotionUrlListResponseInterface[];
}

/**
 * @description 多多进宝推广链接对象列表
 * @default
 * @example
 **/
export interface PddDdkOauthGoodsPromUrlGenerateGoodsPromotionUrlGenerateResponseGoodsPromotionUrlListResponseInterface {
  /**
   * @description: 对应出参mobile_url的短链接，与mobile_url功能一致。
   * @type: string
   * @default:
   **/
  mobile_short_url: string;

  /**
   * @description: 使用此推广链接，用户安装微信的情况下，默认拉起拼多多福利券微信小程序，否则唤起H5页面
   * @type: string
   * @default:
   **/
  mobile_url: string;

  /**
   * @description: qq小程序信息
   * @type: PddDdkOauthGoodsPromUrlGenerateGoodsPromotionUrlGenerateResponseGoodsPromotionUrlListQqAppInfoResponseInterface
   * @default:
   *
   **/
  qq_app_info: PddDdkOauthGoodsPromUrlGenerateGoodsPromotionUrlGenerateResponseGoodsPromotionUrlListQqAppInfoResponseInterface;

  /**
   * @description: 使用此推广链接，用户安装拼多多APP的情况下会唤起APP（需客户端支持schema跳转协议）
   * @type: string
   * @default:
   **/
  schema_url: string;

  /**
   * @description: 对应出参url的短链接，与url功能一致
   * @type: string
   * @default:
   **/
  short_url: string;

  /**
   * @description: 普通推广长链接，唤起H5页面
   * @type: string
   * @default:
   **/
  url: string;

  /**
   * @description: 拼多多福利券微信小程序信息
   * @type: PddDdkOauthGoodsPromUrlGenerateGoodsPromotionUrlGenerateResponseGoodsPromotionUrlListWeAppInfoResponseInterface
   * @default:
   *
   **/
  we_app_info: PddDdkOauthGoodsPromUrlGenerateGoodsPromotionUrlGenerateResponseGoodsPromotionUrlListWeAppInfoResponseInterface;
}

/**
 * @description qq小程序信息
 * @default
 * @example
 **/
export interface PddDdkOauthGoodsPromUrlGenerateGoodsPromotionUrlGenerateResponseGoodsPromotionUrlListQqAppInfoResponseInterface {
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
 * @description 拼多多福利券微信小程序信息
 * @default
 * @example
 **/
export interface PddDdkOauthGoodsPromUrlGenerateGoodsPromotionUrlGenerateResponseGoodsPromotionUrlListWeAppInfoResponseInterface {
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
