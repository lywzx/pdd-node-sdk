export const PDD_GOODS_IMAGE_UPLOAD = 'PDD_GOODS_IMAGE_UPLOAD';

/**
 * 接口名称：商品图片上传接口
 * 接口标识：pdd.goods.image.upload
 * 接口使用场景：商品图片上传服务（参数拼接成json串）
 **/

export interface PddGoodsImageUploadRequestInterface {
  /**
   * @description: 支持格式有：jpg/jpeg、png等图片格式，注意入参图片必须转码为base64编码
   * @type: string
   * @default:
   **/
  image?: string;
}

/**
 * 接口名称：商品图片上传接口
 * 接口标识：pdd.goods.image.upload
 * 接口使用场景：商品图片上传服务（参数拼接成json串）
 **/

export interface PddGoodsImageUploadResponseInterface {
  /**
   * @description: 商品图片上传响应对象
   * @type: PddGoodsImageUploadGoodsImageUploadResponseResponseInterface
   * @default:
   *
   **/
  goods_image_upload_response: PddGoodsImageUploadGoodsImageUploadResponseResponseInterface;
}

/**
 * @description 商品图片上传响应对象
 * @default
 * @example
 **/

export interface PddGoodsImageUploadGoodsImageUploadResponseResponseInterface {
  /**
   * @description: 返回图片url
   * @type: string
   * @default:
   **/
  image_url: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_GOODS_IMAGE_UPLOAD]: {
    requestInterface: PddGoodsImageUploadRequestInterface;
    responseInterface: PddGoodsImageUploadResponseInterface;
  };
}
