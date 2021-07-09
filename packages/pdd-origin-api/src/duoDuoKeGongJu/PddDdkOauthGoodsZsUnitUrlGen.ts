export const PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN = 'pdd.ddk.oauth.goods.zs.unit.url.gen';
export const PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN_RESPONSE_KEY = 'goods_zs_unit_generate_response';

/**
 * 接口名称：多多进宝转链接口
 * 接口标识：pdd.ddk.oauth.goods.zs.unit.url.gen
 * 接口使用场景：本功能适用于采集群等场景。将其他推广者的推广链接转换成自己的；通过此api，可以将他人的招商推广链接，转换成自己的招商推广链接。
 **/
export interface PddDdkOauthGoodsZsUnitUrlGenRequestInterface {
  /**
   * @description: 自定义参数，为链接打上自定义标签；自定义参数最长限制64个字节；格式为：  {"uid":"11111","sid":"22222"} ，其中 uid 用户唯一标识，可自行加密后传入，每个用户仅且对应一个标识，必填； sid 上下文信息标识，例如sessionId等，非必填。该json字符串中也可以加入其他自定义的key。（如果使用GET请求，请使用URLEncode处理参数）
   * @type: string
   * @default:
   **/
  custom_parameters?: string;

  /**
   * @description: 是否返回 schema URL
   * @type: boolean
   * @default:
   **/
  generate_schema_url?: boolean;

  /**
   * @description: 渠道id
   * @type: string
   * @default:
   **/
  pid: string;

  /**
   * @description: 需转链的链接，支持拼多多商品链接、进宝长链/短链（即为pdd.ddk.goods.promotion.url.generate接口生成的长短链）
   * @type: string
   * @default:
   **/
  source_url: string;
}

/**
 * 接口名称：多多进宝转链接口
 * 接口标识：pdd.ddk.oauth.goods.zs.unit.url.gen
 * 接口使用场景：本功能适用于采集群等场景。将其他推广者的推广链接转换成自己的；通过此api，可以将他人的招商推广链接，转换成自己的招商推广链接。
 **/
export interface PddDdkOauthGoodsZsUnitUrlGenResponseInterface {
  /**
   * @description: goods_zs_unit_generate_response
   * @type: PddDdkOauthGoodsZsUnitUrlGenGoodsZsUnitGenerateResponseResponseInterface
   * @default:
   *
   **/
  goods_zs_unit_generate_response: PddDdkOauthGoodsZsUnitUrlGenGoodsZsUnitGenerateResponseResponseInterface;
}

/**
 * @description goods_zs_unit_generate_response
 * @default
 * @example
 **/
export interface PddDdkOauthGoodsZsUnitUrlGenGoodsZsUnitGenerateResponseResponseInterface {
  /**
   * @description: 推广短链接（可唤起拼多多app）
   * @type: string
   * @default:
   **/
  mobile_short_url: string;

  /**
   * @description: 推广长链接（唤起拼多多app）
   * @type: string
   * @default:
   **/
  mobile_url: string;

  /**
   * @description: 推广短链接（唤起拼多多app）
   * @type: string
   * @default:
   **/
  multi_group_mobile_short_url: string;

  /**
   * @description: 推广长链接（可唤起拼多多app）
   * @type: string
   * @default:
   **/
  multi_group_mobile_url: string;

  /**
   * @description: 双人团推广短链接
   * @type: string
   * @default:
   **/
  multi_group_short_url: string;

  /**
   * @description: 双人团推广长链接
   * @type: string
   * @default:
   **/
  multi_group_url: string;

  /**
   * @description: schema的链接
   * @type: string
   * @default:
   **/
  schema_url: string;

  /**
   * @description: 单人团推广短链接
   * @type: string
   * @default:
   **/
  short_url: string;

  /**
   * @description: 单人团推广长链接
   * @type: string
   * @default:
   **/
  url: string;
}
