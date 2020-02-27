export const PDD_UTIL_DIVIDE_BASE64_IMAGE = 'pdd.util.divide.base64.image';

/**
 * 接口名称：图片切割接口
 * 接口标识：pdd.util.divide.base64.image
 * 接口使用场景：图片自动切割接口
 **/
export interface PddUtilDivideBase64ImageRequestInterface {
  /**
   * @description: 支持格式有：jpg/jpeg、png等图片格式，入参为图片的base64编码，最大支持2M
   * @type: string
   * @default:
   **/
  img_data: string;
}

/**
 * 接口名称：图片切割接口
 * 接口标识：pdd.util.divide.base64.image
 * 接口使用场景：图片自动切割接口
 **/
export interface PddUtilDivideBase64ImageResponseInterface {
  /**
   * @description: 切图后的地址列表
   * @type: string[]
   * @default:
   **/
  open_api_response: string[];
}
