export const PDD_GOODS_SPEC_ID_GET = 'PDD_GOODS_SPEC_ID_GET';

/**
 * 接口名称：生成商家自定义的规格
 * 接口标识：pdd.goods.spec.id.get
 * 接口使用场景：生成商家自定义的规格
 **/

export interface PddGoodsSpecIdGetRequestInterface {
  /**
   * @description: 拼多多标准规格ID，可以通过pdd.goods.spec.get接口获取
   * @type: string
   * @default:
   **/
  parent_spec_id?: string;

  /**
   * @description: 商家编辑的规格值，如颜色规格下设置白色属性
   * @type: string
   * @default:
   **/
  spec_name?: string;
}

/**
 * 接口名称：生成商家自定义的规格
 * 接口标识：pdd.goods.spec.id.get
 * 接口使用场景：生成商家自定义的规格
 **/

export interface PddGoodsSpecIdGetResponseInterface {
  /**
   * @description: 生成规格响应对象
   * @type: PddGoodsSpecIdGetGoodsSpecIdGetResponseResponseInterface
   * @default:
   *
   **/
  goods_spec_id_get_response: PddGoodsSpecIdGetGoodsSpecIdGetResponseResponseInterface;
}

/**
 * @description 生成规格响应对象
 * @default
 * @example
 **/

export interface PddGoodsSpecIdGetGoodsSpecIdGetResponseResponseInterface {
  /**
   * @description: 自定义规格所属的规格ID
   * @type: string
   * @default:
   **/
  parent_spec_id: string;

  /**
   * @description: 生成的自定义规格名称
   * @type: string
   * @default:
   **/
  spec_name: string;

  /**
   * @description: 生成的自定义规格ID
   * @type: string
   * @default:
   **/
  spec_id: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_GOODS_SPEC_ID_GET]: {
    requestInterface: PddGoodsSpecIdGetRequestInterface;
    responseInterface: PddGoodsSpecIdGetResponseInterface;
  };
}
