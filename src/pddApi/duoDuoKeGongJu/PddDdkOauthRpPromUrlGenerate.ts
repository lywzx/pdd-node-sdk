export const PDD_DDK_OAUTH_RP_PROM_URL_GENERATE = 'PDD_DDK_OAUTH_RP_PROM_URL_GENERATE';

/**
 * 接口名称：生成营销工具推广链接
 * 接口标识：pdd.ddk.oauth.rp.prom.url.generate
 * 接口使用场景：生成营销工具推广链接
 **/
export interface PddDdkOauthRpPromUrlGenerateRequestInterface {
  /**
   * @description: 0-默认红包，2–新人红包，3-刮刮卡，4-转盘 ，5-员工内购
   * @type: number
   * @default:
   **/
  channel_type: number;

  /**
   * @description: 自定义参数，为链接打上自定义标签。自定义参数最长限制64个字节。
   * @type: string
   * @default:
   **/
  custom_parameters: string;

  /**
   * @description: 是否生成qq小程序
   * @type: boolean
   * @default: false
   **/
  generate_qq_app: boolean;

  /**
   * @description: 是否返回 schema URL
   * @type: boolean
   * @default: false
   **/
  generate_schema_url: boolean;

  /**
   * @description: 是否生成短链接。true-是，false-否，默认false
   * @type: boolean
   * @default:
   **/
  generate_short_url: boolean;

  /**
   * @description: 是否唤起微信客户端， 默认false 否，true 是
   * @type: boolean
   * @default:
   **/
  generate_weapp_webview?: boolean;

  /**
   * @description: 是否生成小程序推广
   * @type: boolean
   * @default:
   **/
  generate_we_app: boolean;

  /**
   * @description: 推广位列表，例如：["60005_612"]
   * @type: string
   * @default:
   **/
  p_id_list?: string;

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
   * @description: 转盘自定义参数
   * @type: PddDdkOauthRpPromUrlGenerateDiyLotteryParamRequestInterface
   * @default:
   *
   **/
  diy_lottery_param: PddDdkOauthRpPromUrlGenerateDiyLotteryParamRequestInterface;

  /**
   * @description: 红包自定义参数
   * @type: PddDdkOauthRpPromUrlGenerateDiyRedPacketParamRequestInterface
   * @default:
   *
   **/
  diy_red_packet_param: PddDdkOauthRpPromUrlGenerateDiyRedPacketParamRequestInterface;
}

/**
 * @description 转盘自定义参数
 * @default
 * @example
 **/
export interface PddDdkOauthRpPromUrlGenerateDiyLotteryParamRequestInterface {
  /**
   * @description: 优先展示类目
   * @type: number
   * @default:
   **/
  opt_id: number;

  /**
   * @description: 自定义价格和商品佣金区间
   * @type: PddDdkOauthRpPromUrlGenerateDiyLotteryParamRangeItemsRequestInterface
   * @default:
   *
   **/
  range_items: PddDdkOauthRpPromUrlGenerateDiyLotteryParamRangeItemsRequestInterface;
}

/**
 * @description 自定义价格和商品佣金区间
 * @default
 * @example
 **/
export interface PddDdkOauthRpPromUrlGenerateDiyLotteryParamRangeItemsRequestInterface {
  /**
   * @description: 区间的开始值
   * @type: string
   * @default:
   **/
  range_from: string;

  /**
   * @description: range_id为1表示价格（单位分）， range_id为2表示商品佣金（单位千分之几)
   * @type: number
   * @default:
   **/
  range_id: number;

  /**
   * @description: 区间的结束值
   * @type: string
   * @default:
   **/
  range_to: string;
}

/**
 * @description 红包自定义参数
 * @default
 * @example
 **/
export interface PddDdkOauthRpPromUrlGenerateDiyRedPacketParamRequestInterface {
  /**
   * @description: 红包金额列表，200、300、500、1000、2000，单位分。红包金额和红包抵后价设置只能二选一，默认设置了红包金额会忽略红包抵后价设置
   * @type: string
   * @default:
   **/
  amount_probability: string;

  /**
   * @description: 设置玩法，false-现金红包, true-现金券
   * @type: boolean
   * @default:
   **/
  dis_text: boolean;

  /**
   * @description: 推广页设置，false-红包开启页, true-红包领取页
   * @type: boolean
   * @default:
   **/
  not_show_background: boolean;

  /**
   * @description: 优先展示类目
   * @type: number
   * @default:
   **/
  opt_id: number;

  /**
   * @description: 自定义红包抵后价和商品佣金区间对象数组
   * @type: PddDdkOauthRpPromUrlGenerateDiyRedPacketParamRangeItemsRequestInterface[]
   * @default:
   *
   **/
  range_items: PddDdkOauthRpPromUrlGenerateDiyRedPacketParamRangeItemsRequestInterface[];
}

/**
 * @description 自定义红包抵后价和商品佣金区间对象数组
 * @default
 * @example
 **/
export interface PddDdkOauthRpPromUrlGenerateDiyRedPacketParamRangeItemsRequestInterface {
  /**
   * @description: 区间的开始值
   * @type: string
   * @default:
   **/
  range_from: string;

  /**
   * @description: range_id为1表示红包抵后价（单位分）， range_id为2表示佣金比例（单位千分之几)
   * @type: number
   * @default:
   **/
  range_id: number;

  /**
   * @description: 区间的结束值
   * @type: string
   * @default:
   **/
  range_to: string;
}

/**
 * 接口名称：生成营销工具推广链接
 * 接口标识：pdd.ddk.oauth.rp.prom.url.generate
 * 接口使用场景：生成营销工具推广链接
 **/
export interface PddDdkOauthRpPromUrlGenerateResponseInterface {
  /**
   * @description: 推广链接返回对象
   * @type: PddDdkOauthRpPromUrlGenerateRpPromotionUrlGenerateResponseResponseInterface
   * @default:
   *
   **/
  rp_promotion_url_generate_response: PddDdkOauthRpPromUrlGenerateRpPromotionUrlGenerateResponseResponseInterface;
}

/**
 * @description 推广链接返回对象
 * @default
 * @example
 **/
export interface PddDdkOauthRpPromUrlGenerateRpPromotionUrlGenerateResponseResponseInterface {
  /**
   * @description: url_list
   * @type: PddDdkOauthRpPromUrlGenerateRpPromotionUrlGenerateResponseUrlListResponseInterface[]
   * @default:
   *
   **/
  url_list: PddDdkOauthRpPromUrlGenerateRpPromotionUrlGenerateResponseUrlListResponseInterface[];
}

/**
 * @description url_list
 * @default
 * @example
 **/
export interface PddDdkOauthRpPromUrlGenerateRpPromotionUrlGenerateResponseUrlListResponseInterface {
  /**
   * @description: 推广移动短链接
   * @type: string
   * @default:
   **/
  mobile_short_url: string;

  /**
   * @description: 推广移动链接
   * @type: string
   * @default:
   **/
  mobile_url: string;

  /**
   * @description: 推广多人团移动短链接
   * @type: string
   * @default:
   **/
  multi_group_mobile_short_url: string;

  /**
   * @description: 推广多人团移动链接
   * @type: string
   * @default:
   **/
  multi_group_mobile_url: string;

  /**
   * @description: 推广多人团短链接
   * @type: string
   * @default:
   **/
  multi_group_short_url: string;

  /**
   * @description: 推广多人团链接
   * @type: string
   * @default:
   **/
  multi_group_url: string;

  /**
   * @description: qq小程序信息
   * @type: PddDdkOauthRpPromUrlGenerateRpPromotionUrlGenerateResponseUrlListQqAppInfoResponseInterface
   * @default:
   *
   **/
  qq_app_info: PddDdkOauthRpPromUrlGenerateRpPromotionUrlGenerateResponseUrlListQqAppInfoResponseInterface;

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
   * @description: 推广链接
   * @type: string
   * @default:
   **/
  url: string;

  /**
   * @description: 小程序信息
   * @type: PddDdkOauthRpPromUrlGenerateRpPromotionUrlGenerateResponseUrlListWeAppInfoResponseInterface
   * @default:
   *
   **/
  we_app_info: PddDdkOauthRpPromUrlGenerateRpPromotionUrlGenerateResponseUrlListWeAppInfoResponseInterface;
}

/**
 * @description qq小程序信息
 * @default
 * @example
 **/
export interface PddDdkOauthRpPromUrlGenerateRpPromotionUrlGenerateResponseUrlListQqAppInfoResponseInterface {
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
export interface PddDdkOauthRpPromUrlGenerateRpPromotionUrlGenerateResponseUrlListWeAppInfoResponseInterface {
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
   * @description: 小程序icon
   * @type: string
   * @default:
   **/
  we_app_icon_url: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_DDK_OAUTH_RP_PROM_URL_GENERATE]: {
    requestInterface: PddDdkOauthRpPromUrlGenerateRequestInterface;
    responseInterface: PddDdkOauthRpPromUrlGenerateResponseInterface;
  };
}
