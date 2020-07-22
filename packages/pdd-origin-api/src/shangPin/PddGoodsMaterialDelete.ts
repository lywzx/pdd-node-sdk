export const PDD_GOODS_MATERIAL_DELETE = 'pdd.goods.material.delete';

/**
 * 接口名称：商品素材删除接口
 * 接口标识：pdd.goods.material.delete
 * 接口使用场景：删除素材
 **/
export interface PddGoodsMaterialDeleteRequestInterface {
  /**
   * @description: 素材id
   * @type: string | number
   * @default:
   **/
  material_id: string | number;
}

/**
 * 接口名称：商品素材删除接口
 * 接口标识：pdd.goods.material.delete
 * 接口使用场景：删除素材
 **/
export interface PddGoodsMaterialDeleteResponseInterface {
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
   * @description: 返回非0代表删除成功
   * @type: number
   * @default:
   **/
  result: number;

  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
