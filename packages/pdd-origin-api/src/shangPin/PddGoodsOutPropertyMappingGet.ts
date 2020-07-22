export const PDD_GOODS_OUT_PROPERTY_MAPPING_GET = 'pdd.goods.out.property.mapping.get';
export const PDD_GOODS_OUT_PROPERTY_MAPPING_GET_RESPONSE_KEY = 'out_property_mapping_get_response';

/**
 * 接口名称：站内外属性映射接口
 * 接口标识：pdd.goods.out.property.mapping.get
 * 接口使用场景：开平侧商家在搬家，根据入参类目+站外属性/站外属性值返回启用的站内外属性映射中的站内属性/站内属性值
 **/
export interface PddGoodsOutPropertyMappingGetRequestInterface {
  /**
   * @description: 拼多多叶子类目id
   * @type: string | number
   * @default:
   **/
  cat_id: string | number;

  /**
   * @description: 外部平台属性名称
   * @type: string
   * @default:
   **/
  out_property_name: string;

  /**
   * @description: 外部平台属性值名称
   * @type: string
   * @default:
   **/
  out_property_value_name?: string;
}

/**
 * 接口名称：站内外属性映射接口
 * 接口标识：pdd.goods.out.property.mapping.get
 * 接口使用场景：开平侧商家在搬家，根据入参类目+站外属性/站外属性值返回启用的站内外属性映射中的站内属性/站内属性值
 **/
export interface PddGoodsOutPropertyMappingGetResponseInterface {
  /**
   * @description:
   * @type: PddGoodsOutPropertyMappingGetOutPropertyMappingGetResponseResponseInterface
   * @default:
   *
   **/
  out_property_mapping_get_response: PddGoodsOutPropertyMappingGetOutPropertyMappingGetResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddGoodsOutPropertyMappingGetOutPropertyMappingGetResponseResponseInterface {
  /**
   * @description:
   * @type: PddGoodsOutPropertyMappingGetOutPropertyMappingGetResponsePropertyResponseInterface[]
   * @default:
   *
   **/
  property: PddGoodsOutPropertyMappingGetOutPropertyMappingGetResponsePropertyResponseInterface[];
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddGoodsOutPropertyMappingGetOutPropertyMappingGetResponsePropertyResponseInterface {
  /**
   * @description:
   * @type: string
   * @default:
   **/
  out_property_name: string;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  out_property_value_name: string;

  /**
   * @description:
   * @type: string | number
   * @default:
   **/
  property_value_id: string | number;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  property_value_name: string;

  /**
   * @description:
   * @type: string | number
   * @default:
   **/
  ref_property_id: string | number;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  ref_property_name: string;
}
