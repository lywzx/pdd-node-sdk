export const PDD_GOODS_FILESPACE_IMAGE_UPLOAD = 'pdd.goods.filespace.image.upload';
export const PDD_GOODS_FILESPACE_IMAGE_UPLOAD_RESPONSE_KEY = 'goods_filespace_image_upload_response';

/**
 * 接口名称：图片上传到图片空间
 * 接口标识：pdd.goods.filespace.image.upload
 * 接口使用场景：图片上传到图片空间
 **/
export interface PddGoodsFilespaceImageUploadRequestInterface {
  /**
   * @description: 图片文件流
   * @type: Buffer
   * @default:
   **/
  file: Buffer;
}

/**
 * 接口名称：图片上传到图片空间
 * 接口标识：pdd.goods.filespace.image.upload
 * 接口使用场景：图片上传到图片空间
 **/
export interface PddGoodsFilespaceImageUploadResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsFilespaceImageUploadGoodsFilespaceImageUploadResponseResponseInterface
   * @default:
   *
   **/
  goods_filespace_image_upload_response: PddGoodsFilespaceImageUploadGoodsFilespaceImageUploadResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGoodsFilespaceImageUploadGoodsFilespaceImageUploadResponseResponseInterface {
  /**
   * @description: 文件id
   * @type: string | number
   * @default:
   **/
  file_id: string | number;

  /**
   * @description: url
   * @type: string
   * @default:
   **/
  url: string;
}
