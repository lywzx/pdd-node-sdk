export const PDD_DDK_RP_PROM_URL_GENERATE = 'pdd.ddk.rp.prom.url.generate';
export const PDD_DDK_RP_PROM_URL_GENERATE_RESPONSE_KEY = 'rp_promotion_url_generate_response';
export const PDD_DDK_RP_PROM_URL_GENERATE_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 3600,
    times: 3000000,
  },
];

/**
 * 接口名称：生成营销工具推广链接
 * 接口标识：pdd.ddk.rp.prom.url.generate
 * 接口使用场景：生成营销工具推广链接
 **/
export interface PddDdkRpPromUrlGenerateRequestInterface {
  /**
   * @description: -1-活动列表，0-默认红包，2–新人红包，3-刮刮卡，5-员工内购，6-购物车，7-大促会场，8-直播间列表集合页，10-生成绑定备案链接
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
   * @description: 转盘自定义参数
   * @type: PddDdkRpPromUrlGenerateDiyLotteryParamRequestInterface
   * @default:
   *
   **/
  diy_lottery_param?: PddDdkRpPromUrlGenerateDiyLotteryParamRequestInterface;

  /**
   * @description: 红包自定义参数
   * @type: PddDdkRpPromUrlGenerateDiyRedPacketParamRequestInterface
   * @default:
   *
   **/
  diy_red_packet_param?: PddDdkRpPromUrlGenerateDiyRedPacketParamRequestInterface;

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
   * @description: 是否生成短链接。true-是，false-否，默认false
   * @type: boolean
   * @default:
   **/
  generate_short_url?: boolean;

  /**
   * @description: 是否生成小程序推广
   * @type: boolean
   * @default:
   **/
  generate_we_app?: boolean;

  /**
   * @description: 推广位列表，例如：["60005_612"]
   * @type: string[]
   * @default:
   **/
  p_id_list: string[];
}

/**
 * @description 转盘自定义参数
 * @default
 * @example
 **/
export interface PddDdkRpPromUrlGenerateDiyLotteryParamRequestInterface {
  /**
   * @description: 优先展示类目
   * @type: number
   * @default:
   **/
  opt_id?: number;

  /**
   * @description: 自定义价格和商品佣金区间
   * @type: PddDdkRpPromUrlGenerateDiyLotteryParamRangeItemsRequestInterface[]
   * @default:
   *
   **/
  range_items?: PddDdkRpPromUrlGenerateDiyLotteryParamRangeItemsRequestInterface[];
}

/**
 * @description 自定义价格和商品佣金区间
 * @default
 * @example
 **/
export interface PddDdkRpPromUrlGenerateDiyLotteryParamRangeItemsRequestInterface {
  /**
   * @description: 区间的开始值
   * @type: string | number
   * @default:
   **/
  range_from?: string | number;

  /**
   * @description: range_id为1表示价格（单位分）， range_id为2表示商品佣金（单位千分之几)
   * @type: number
   * @default:
   **/
  range_id?: number;

  /**
   * @description: 区间的结束值
   * @type: string | number
   * @default:
   **/
  range_to?: string | number;
}

/**
 * @description 红包自定义参数
 * @default
 * @example
 **/
export interface PddDdkRpPromUrlGenerateDiyRedPacketParamRequestInterface {
  /**
   * @description: 红包金额列表，200、300、500、1000、2000，单位分。红包金额和红包抵后价设置只能二选一，默认设置了红包金额会忽略红包抵后价设置
   * @type: Array<string | number>
   * @default:
   **/
  amount_probability?: Array<string | number>;

  /**
   * @description: 设置玩法，false-现金红包, true-现金券
   * @type: boolean
   * @default:
   **/
  dis_text?: boolean;

  /**
   * @description: 推广页设置，false-红包开启页, true-红包领取页
   * @type: boolean
   * @default:
   **/
  not_show_background?: boolean;

  /**
   * @description: 优先展示类目
   * @type: number
   * @default:
   **/
  opt_id?: number;

  /**
   * @description: 自定义红包抵后价和商品佣金区间对象数组
   * @type: PddDdkRpPromUrlGenerateDiyRedPacketParamRangeItemsRequestInterface[]
   * @default:
   *
   **/
  range_items?: PddDdkRpPromUrlGenerateDiyRedPacketParamRangeItemsRequestInterface[];
}

/**
 * @description 自定义红包抵后价和商品佣金区间对象数组
 * @default
 * @example
 **/
export interface PddDdkRpPromUrlGenerateDiyRedPacketParamRangeItemsRequestInterface {
  /**
   * @description: 区间的开始值
   * @type: string | number
   * @default:
   **/
  range_from?: string | number;

  /**
   * @description: range_id为1表示红包抵后价（单位分）， range_id为2表示佣金比例（单位千分之几)
   * @type: number
   * @default:
   **/
  range_id?: number;

  /**
   * @description: 区间的结束值
   * @type: string | number
   * @default:
   **/
  range_to?: string | number;
}

/**
 * 接口名称：生成营销工具推广链接
 * 接口标识：pdd.ddk.rp.prom.url.generate
 * 接口使用场景：生成营销工具推广链接
 **/
export interface PddDdkRpPromUrlGenerateResponseInterface {
  /**
   * @description: 推广链接返回对象
   * @type: PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseResponseInterface
   * @default:
   *
   **/
  rp_promotion_url_generate_response: PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseResponseInterface;
}

/**
 * @description 推广链接返回对象
 * @default
 * @example
 **/
export interface PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseResponseInterface {
  /**
   * @description: resource_list
   * @type: PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseResourceListResponseInterface[]
   * @default:
   *
   **/
  resource_list: PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseResourceListResponseInterface[];

  /**
   * @description: url_list
   * @type: PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseUrlListResponseInterface[]
   * @default:
   *
   **/
  url_list: PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseUrlListResponseInterface[];
}

/**
 * @description resource_list
 * @default
 * @example
 **/
export interface PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseResourceListResponseInterface {
  /**
   * @description: 活动描述
   * @type: string
   * @default:
   **/
  desc: string;

  /**
   * @description: 活动地址
   * @type: string
   * @default:
   **/
  url: string;
}

/**
 * @description url_list
 * @default
 * @example
 **/
export interface PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseUrlListResponseInterface {
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
   * @type: PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseUrlListQqAppInfoResponseInterface
   * @default:
   *
   **/
  qq_app_info: PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseUrlListQqAppInfoResponseInterface;

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
   * @type: PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseUrlListWeAppInfoResponseInterface
   * @default:
   *
   **/
  we_app_info: PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseUrlListWeAppInfoResponseInterface;
}

/**
 * @description qq小程序信息
 * @default
 * @example
 **/
export interface PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseUrlListQqAppInfoResponseInterface {
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
export interface PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseUrlListWeAppInfoResponseInterface {
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
