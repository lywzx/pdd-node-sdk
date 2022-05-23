export const PDD_DDK_RP_PROM_URL_GENERATE = 'pdd.ddk.rp.prom.url.generate';
export const PDD_DDK_RP_PROM_URL_GENERATE_RESPONSE_KEY = 'rp_promotion_url_generate_response';
export const PDD_DDK_RP_PROM_URL_GENERATE_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 50,
    times: 33450,
    callSourceType: 0,
  },
];

/**
 * 接口名称：生成营销工具推广链接
 * 接口标识：pdd.ddk.rp.prom.url.generate
 * 接口使用场景：生成营销工具推广链接
 **/
export interface PddDdkRpPromUrlGenerateRequestInterface {
  /**
   * @description: 初始金额（单位分），有效金额枚举值：300、500、700、1100和1600，默认300
   * @type: string | number
   * @default:
   **/
  amount?: string | number;

  /**
   * @description: 营销工具类型，必填：-1-活动列表，0-红包(需申请推广权限)，2–新人红包，3-刮刮卡，5-员工内购，10-生成绑定备案链接，12-砸金蛋，14-千万补贴B端页面，15-充值中心B端页面，16-千万补贴C端页面，17-千万补贴投票页面，23-超级红包，24-礼金全场N折活动B端页面，27-带货赢千万，28-满减券活动B端页面，29-满减券活动C端页面，30-免单B端页面，31-免单C端页面，32-转盘得现金B端页面，33-转盘得现金C端页面，34-千万神券C端页面，35-千万神券B端页面；红包推广权限申请流程链接：https://jinbao.pinduoduo.com/qa-system?questionId=289
   * @type: number
   * @default:
   **/
  channel_type?: number;

  /**
   * @description: 自定义参数，为链接打上自定义标签；自定义参数最长限制64个字节；格式为：  {"uid":"11111","sid":"22222"} ，其中 uid 用户唯一标识，可自行加密后传入，每个用户仅且对应一个标识，必填； sid 上下文信息标识，例如sessionId等，非必填。该json字符串中也可以加入其他自定义的key。（如果使用GET请求，请使用URLEncode处理参数）
   * @type: string
   * @default:
   **/
  custom_parameters?: string;

  /**
   * @description: 一元购自定义参数，json格式，例如:{"goods_sign":"Y9b2_0uSWMFPGSaVwvfZAlm_y2ADLWZl_JQ7UYaS80K"}
   * @type: PddDdkRpPromUrlGenerateDiyOneYuanParamRequestInterface
   * @default:
   *
   **/
  diy_one_yuan_param?: PddDdkRpPromUrlGenerateDiyOneYuanParamRequestInterface;

  /**
   * @description: 红包自定义参数，json格式
   * @type: PddDdkRpPromUrlGenerateDiyRedPacketParamRequestInterface
   * @default:
   *
   **/
  diy_red_packet_param?: PddDdkRpPromUrlGenerateDiyRedPacketParamRequestInterface;

  /**
   * @description: 超级红包自定义参数，json格式
   * @type: PddDdkRpPromUrlGenerateDiySpRedPacketParamRequestInterface
   * @default:
   *
   **/
  diy_sp_red_packet_param?: PddDdkRpPromUrlGenerateDiySpRedPacketParamRequestInterface;

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
   * @description: 是否生成拼多多福利券微信小程序推广信息
   * @type: boolean
   * @default:
   **/
  generate_we_app?: boolean;

  /**
   * @description: 推广位列表，长度最大为1，例如：["60005_612"]。活动页生链要求传入授权备案信息，不支持批量生链。
   * @type: string[]
   * @default:
   **/
  p_id_list: string[];

  /**
   * @description: 刮刮卡指定金额（单位分），可指定2-100元间数值，即有效区间为：[200,10000]
   * @type: string | number
   * @default:
   **/
  scratch_card_amount?: string | number;

  /**
   * @description: 招商DuoID
   * @type: string | number
   * @default:
   **/
  zs_duo_id?: string | number;
}

/**
 * @description 一元购自定义参数，json格式，例如:{"goods_sign":"Y9b2_0uSWMFPGSaVwvfZAlm_y2ADLWZl_JQ7UYaS80K"}
 * @default
 * @example
 **/
export interface PddDdkRpPromUrlGenerateDiyOneYuanParamRequestInterface {
  /**
   * @description: 商品goodsSign，支持通过goodsSign查询商品。goodsSign是加密后的goodsId, goodsId已下线，请使用goodsSign来替代。使用说明：https://jinbao.pinduoduo.com/qa-system?questionId=252
   * @type: string
   * @default:
   **/
  goods_sign?: string;
}

/**
 * @description 红包自定义参数，json格式
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
 * @description 超级红包自定义参数，json格式
 * @default
 * @example
 **/
export interface PddDdkRpPromUrlGenerateDiySpRedPacketParamRequestInterface {
  /**
   * @description: 商品goodsSign，支持通过goodsSign置顶落地页商品。使用说明：https://jinbao.pinduoduo.com/qa-system?questionId=252
   * @type: string
   * @default:
   **/
  goods_sign?: string;
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
   * @description: 推广移动短链接，对应出参mobile_url的短链接，与mobile_url功能一致。
   * @type: string
   * @default:
   **/
  mobile_short_url: string;

  /**
   * @description: 推广移动链接，用户安装拼多多APP的情况下会唤起APP，否则唤起H5页面
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
   * @description: 推广多人团移动链接，用户安装拼多多APP的情况下会唤起APP，否则唤起H5页面
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
   * @description: 推广多人团链接，唤起H5页面
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
   * @description: schema链接，用户安装拼多多APP的情况下会唤起APP（需客户端支持schema跳转协议）
   * @type: string
   * @default:
   **/
  schema_url: string;

  /**
   * @description: 推广短链接，对应出参url的短链接，与url功能一致
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

  /**
   * @description: 拼多多福利券微信小程序信息
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
 * @description 拼多多福利券微信小程序信息
 * @default
 * @example
 **/
export interface PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseUrlListWeAppInfoResponseInterface {
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
   * @description: 小程序icon
   * @type: string
   * @default:
   **/
  we_app_icon_url: string;
}
