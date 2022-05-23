export const PDD_GOODS_IMG_UPLOAD = 'pdd.goods.img.upload';
export const PDD_GOODS_IMG_UPLOAD_RESPONSE_KEY = 'goods_img_upload_response';

/**
 * 接口名称：商品图片上传接口
 * 接口标识：pdd.goods.img.upload
 * 接口使用场景：商品图片上传
 **/
export interface PddGoodsImgUploadRequestInterface {
  /**
   * @description: 商品图片文件流
   * @type: Buffer
   * @default:
   **/
  file: Buffer;
}

/**
 * 接口名称：商品图片上传接口
 * 接口标识：pdd.goods.img.upload
 * 接口使用场景：商品图片上传
 **/
export interface PddGoodsImgUploadResponseInterface {
  /**
   * @description:
   * @type: PddGoodsImgUploadGoodsImgUploadResponseResponseInterface
   * @default:
   *
   **/
  goods_img_upload_response: PddGoodsImgUploadGoodsImgUploadResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddGoodsImgUploadGoodsImgUploadResponseResponseInterface {
  /**
   * @description:
   * @type: string
   * @default:
   **/
  url: string;
}
