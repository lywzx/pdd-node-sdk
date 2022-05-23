export const PDD_DDK_RESOURCE_URL_GEN = 'pdd.ddk.resource.url.gen';
export const PDD_DDK_RESOURCE_URL_GEN_RESPONSE_KEY = 'resource_url_response';
export const PDD_DDK_RESOURCE_URL_GEN_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 50,
    times: 33450,
    callSourceType: 0,
  },
];

/**
 * 接口名称：生成多多进宝频道推广
 * 接口标识：pdd.ddk.resource.url.gen
 * 接口使用场景：生成拼多多主站频道推广
 **/
export interface PddDdkResourceUrlGenRequestInterface {
  /**
   * @description: 自定义参数，为链接打上自定义标签；自定义参数最长限制64个字节；格式为： {"uid":"11111","sid":"22222"} ，其中 uid 用户唯一标识，可自行加密后传入，每个用户仅且对应一个标识，必填； sid 上下文信息标识，例如sessionId等，非必填。该json字符串中也可以加入其他自定义的key
   * @type: string
   * @default:
   **/
  custom_parameters?: string;

  /**
   * @description: 是否返回 schema URL
   * @type: boolean
   * @default: false
   **/
  generate_schema_url?: boolean;

  /**
   * @description: 是否生成拼多多福利券微信小程序推广信息
   * @type: boolean
   * @default: false
   **/
  generate_we_app?: boolean;

  /**
   * @description: 推广位
   * @type: string
   * @default:
   **/
  pid: string;

  /**
   * @description: 频道来源：4-限时秒杀,39997-充值中心, 39998-活动转链，39996-百亿补贴，39999-电器城，40000-领券中心，50005-火车票
   * @type: number
   * @default:
   **/
  resource_type?: number;

  /**
   * @description: 原链接
   * @type: string
   * @default:
   **/
  url?: string;
}

/**
 * 接口名称：生成多多进宝频道推广
 * 接口标识：pdd.ddk.resource.url.gen
 * 接口使用场景：生成拼多多主站频道推广
 **/
export interface PddDdkResourceUrlGenResponseInterface {
  /**
   * @description: resource_url_response
   * @type: PddDdkResourceUrlGenResourceUrlResponseResponseInterface
   * @default:
   *
   **/
  resource_url_response: PddDdkResourceUrlGenResourceUrlResponseResponseInterface;
}

/**
 * @description resource_url_response
 * @default
 * @example
 **/
export interface PddDdkResourceUrlGenResourceUrlResponseResponseInterface {
  /**
   * @description: 多人团链接
   * @type: PddDdkResourceUrlGenResourceUrlResponseMultiUrlListResponseInterface
   * @default:
   *
   **/
  multi_url_list: PddDdkResourceUrlGenResourceUrlResponseMultiUrlListResponseInterface;

  /**
   * @description: sign
   * @type: string
   * @default:
   **/
  sign: string;

  /**
   * @description: 单人团链接
   * @type: PddDdkResourceUrlGenResourceUrlResponseSingleUrlListResponseInterface
   * @default:
   *
   **/
  single_url_list: PddDdkResourceUrlGenResourceUrlResponseSingleUrlListResponseInterface;

  /**
   * @description: 拼多多福利券微信小程序信息
   * @type: PddDdkResourceUrlGenResourceUrlResponseWeAppInfoResponseInterface
   * @default:
   *
   **/
  we_app_info: PddDdkResourceUrlGenResourceUrlResponseWeAppInfoResponseInterface;
}

/**
 * @description 多人团链接
 * @default
 * @example
 **/
export interface PddDdkResourceUrlGenResourceUrlResponseMultiUrlListResponseInterface {
  /**
   * @description: 对应出参url的短链接，与url功能一致。
   * @type: string
   * @default:
   **/
  short_url: string;

  /**
   * @description: 频道推广长链接，唤起H5页面
   * @type: string
   * @default:
   **/
  url: string;
}

/**
 * @description 单人团链接
 * @default
 * @example
 **/
export interface PddDdkResourceUrlGenResourceUrlResponseSingleUrlListResponseInterface {
  /**
   * @description: 对应出参url的短链接，与url功能一致。
   * @type: string
   * @default:
   **/
  short_url: string;

  /**
   * @description: 频道推广长链接，唤起H5页面
   * @type: string
   * @default:
   **/
  url: string;
}

/**
 * @description 拼多多福利券微信小程序信息
 * @default
 * @example
 **/
export interface PddDdkResourceUrlGenResourceUrlResponseWeAppInfoResponseInterface {
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
