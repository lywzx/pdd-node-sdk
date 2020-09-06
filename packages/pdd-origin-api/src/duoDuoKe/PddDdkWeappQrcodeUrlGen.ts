export const PDD_DDK_WEAPP_QRCODE_URL_GEN = 'pdd.ddk.weapp.qrcode.url.gen';
export const PDD_DDK_WEAPP_QRCODE_URL_GEN_RESPONSE_KEY = 'weapp_qrcode_generate_response';
export const PDD_DDK_WEAPP_QRCODE_URL_GEN_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 3600,
    times: 3000000,
  },
];

/**
 * 接口名称：多多客生成单品推广小程序二维码url
 * 接口标识：pdd.ddk.weapp.qrcode.url.gen
 * 接口使用场景：多多客生成单品推广小程序二维码url
 **/
export interface PddDdkWeappQrcodeUrlGenRequestInterface {
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
   * @description: 商品ID，仅支持单个查询
   * @type: Array<string | number>
   * @default:
   **/
  goods_id_list: Array<string | number>;

  /**
   * @description: 推广位ID
   * @type: string
   * @default:
   **/
  p_id: string;

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
 * 接口名称：多多客生成单品推广小程序二维码url
 * 接口标识：pdd.ddk.weapp.qrcode.url.gen
 * 接口使用场景：多多客生成单品推广小程序二维码url
 **/
export interface PddDdkWeappQrcodeUrlGenResponseInterface {
  /**
   * @description: response
   * @type: PddDdkWeappQrcodeUrlGenWeappQrcodeGenerateResponseResponseInterface
   * @default:
   *
   **/
  weapp_qrcode_generate_response: PddDdkWeappQrcodeUrlGenWeappQrcodeGenerateResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddDdkWeappQrcodeUrlGenWeappQrcodeGenerateResponseResponseInterface {
  /**
   * @description: 单品推广小程序二维码url
   * @type: string
   * @default:
   **/
  url: string;
}
