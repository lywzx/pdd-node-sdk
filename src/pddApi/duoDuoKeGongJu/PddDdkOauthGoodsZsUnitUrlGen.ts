export const PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN = 'pdd.ddk.oauth.goods.zs.unit.url.gen';

/**
 * 接口名称：生成招商推广链接
 * 接口标识：pdd.ddk.oauth.goods.zs.unit.url.gen
 * 接口使用场景：本功能适用于采集群等场景。将其他推广者的推广链接转换成自己的；通过此api，可以将他人的招商推广链接，转换成自己的招商推广链接。
 **/
export interface PddDdkOauthGoodsZsUnitUrlGenRequestInterface {
  /**
   * @description: 需转链的链接
   * @type: string
   * @default:
   **/
  source_url?: string;

  /**
   * @description: 渠道id
   * @type: string
   * @default:
   **/
  pid?: string;

  /**
   * @description: 是否返回 schema URL
   * @type: string
   * @default: false
   **/
  generate_schema_url: string;
}

/**
 * 接口名称：生成招商推广链接
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
   * @description: 单人团推广长链接
   * @type: string
   * @default:
   **/
  url: string;

  /**
   * @description: 单人团推广短链接
   * @type: string
   * @default:
   **/
  short_url: string;

  /**
   * @description: 推广长链接（唤起拼多多app）
   * @type: string
   * @default:
   **/
  mobile_url: string;

  /**
   * @description: 推广短链接（可唤起拼多多app）
   * @type: string
   * @default:
   **/
  mobile_short_url: string;

  /**
   * @description: 双人团推广长链接
   * @type: string
   * @default:
   **/
  multi_group_url: string;

  /**
   * @description: 双人团推广短链接
   * @type: string
   * @default:
   **/
  multi_group_short_url: string;

  /**
   * @description: 推广长链接（可唤起拼多多app）
   * @type: string
   * @default:
   **/
  multi_group_mobile_url: string;

  /**
   * @description: 推广短链接（唤起拼多多app）
   * @type: string
   * @default:
   **/
  multi_group_mobile_short_url: string;

  /**
   * @description: schema的链接
   * @type: string
   * @default:
   **/
  schema_url: string;
}
