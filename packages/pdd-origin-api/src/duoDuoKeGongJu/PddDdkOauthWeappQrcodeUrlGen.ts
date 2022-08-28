export const PDD_DDK_OAUTH_WEAPP_QRCODE_URL_GEN = 'pdd.ddk.oauth.weapp.qrcode.url.gen';
export const PDD_DDK_OAUTH_WEAPP_QRCODE_URL_GEN_RESPONSE_KEY = 'weapp_qrcode_generate_response';
export const PDD_DDK_OAUTH_WEAPP_QRCODE_URL_GEN_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 60,
    times: 15000,
    callSourceType: 0,
  },
];

/**
 * 接口名称：多多客工具生成单品推广小程序二维码
 * 接口标识：pdd.ddk.oauth.weapp.qrcode.url.gen
 * 接口使用场景：多多客工具生成单品推广小程序二维码url
 **/
export interface PddDdkOauthWeappQrcodeUrlGenRequestInterface {
  /**
   * @description: 自定义参数，为链接打上自定义标签。自定义参数最长限制64个字节。
   * @type: string
   * @default:
   **/
  custom_parameters?: string;

  /**
   * @description: 商品ID，仅支持单个查询
   * @type: Array<string | number>
   * @default:
   **/
  goods_id_list?: Array<string | number>;

  /**
   * @description: 商品goodsSign列表，支持通过goodsSign查询商品。goodsSign是加密后的goodsId, goodsId已下线，请使用goodsSign来替代。使用说明：https://jinbao.pinduoduo.com/qa-system?questionId=252
   * @type: string[]
   * @default:
   **/
  goods_sign_list?: string[];

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
}

/**
 * 接口名称：多多客工具生成单品推广小程序二维码
 * 接口标识：pdd.ddk.oauth.weapp.qrcode.url.gen
 * 接口使用场景：多多客工具生成单品推广小程序二维码url
 **/
export interface PddDdkOauthWeappQrcodeUrlGenResponseInterface {
  /**
   * @description: response
   * @type: PddDdkOauthWeappQrcodeUrlGenWeappQrcodeGenerateResponseResponseInterface
   * @default:
   *
   **/
  weapp_qrcode_generate_response: PddDdkOauthWeappQrcodeUrlGenWeappQrcodeGenerateResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddDdkOauthWeappQrcodeUrlGenWeappQrcodeGenerateResponseResponseInterface {
  /**
   * @description: 单品推广小程序二维码url
   * @type: string
   * @default:
   **/
  url: string;
}
