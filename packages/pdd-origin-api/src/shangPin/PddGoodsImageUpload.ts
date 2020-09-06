export const PDD_GOODS_IMAGE_UPLOAD = 'pdd.goods.image.upload';
export const PDD_GOODS_IMAGE_UPLOAD_RESPONSE_KEY = 'goods_image_upload_response';
export const PDD_GOODS_IMAGE_UPLOAD_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 60,
    times: 3000,
  },
  {
    limiterLevel: 3,
    timeRange: 10,
    times: 125000,
  },
  {
    limiterLevel: 4,
    timeRange: 10,
    times: 5000,
  },
];

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
  image: string;
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
