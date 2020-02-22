export const PDD_DDK_WEAPP_QRCODE_URL_GEN = 'PDD_DDK_WEAPP_QRCODE_URL_GEN';

/**
 * 接口名称：多多客生成单品推广小程序二维码url
 * 接口标识：pdd.ddk.weapp.qrcode.url.gen
 * 接口使用场景：多多客生成单品推广小程序二维码url
 **/
export interface PddDdkWeappQrcodeUrlGenRequestInterface {
  /**
   * @description: 推广位ID
   * @type: string
   * @default:
   **/
  p_id?: string;

  /**
   * @description: 商品ID，仅支持单个查询
   * @type: string
   * @default:
   **/
  goods_id_list?: string;

  /**
   * @description: 自定义参数，为链接打上自定义标签。自定义参数最长限制64个字节。
   * @type: string
   * @default:
   **/
  custom_parameters: string;

  /**
   * @description: 招商多多客ID
   * @type: string
   * @default:
   **/
  zs_duo_id: string;

  /**
   * @description: 是否生成店铺收藏券推广链接
   * @type: boolean
   * @default: false
   **/
  generate_mall_collect_coupon: boolean;
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

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_DDK_WEAPP_QRCODE_URL_GEN]: {
    requestInterface: PddDdkWeappQrcodeUrlGenRequestInterface;
    responseInterface: PddDdkWeappQrcodeUrlGenResponseInterface;
  };
}
