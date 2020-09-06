export const PDD_GOODS_MATERIAL_CREATE = 'pdd.goods.material.create';

/**
 * 接口名称：商品素材创建接口
 * 接口标识：pdd.goods.material.create
 * 接口使用场景：上传白底图长图等素材到商品
 **/
export interface PddGoodsMaterialCreateRequestInterface {
  /**
   * @description: 素材内容（一般为图片链接）
   * @type: string
   * @default:
   **/
  content: string;

  /**
   * @description: 图片空间文件id
   * @type: string | number
   * @default:
   **/
  file_id: string | number;

  /**
   * @description: 商品id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 素材类型（1：白底图；3：长图）
   * @type: number
   * @default:
   **/
  material_type: number;
}

/**
 * 接口名称：商品素材创建接口
 * 接口标识：pdd.goods.material.create
 * 接口使用场景：上传白底图长图等素材到商品
 **/
export interface PddGoodsMaterialCreateResponseInterface {
  /**
   * @description: 错误码
   * @type: number
   * @default:
   **/
  error_code: number;

  /**
   * @description: 错误文案
   * @type: string
   * @default:
   **/
  error_msg: string;

  /**
   * @description: 返回素材id
   * @type: string | number
   * @default:
   **/
  result: string | number;

  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
