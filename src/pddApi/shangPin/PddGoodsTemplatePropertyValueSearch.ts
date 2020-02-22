export const PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH = 'PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH';

/**
 * 接口名称：模板属性值搜索接口
 * 接口标识：pdd.goods.template.property.value.search
 * 接口使用场景：商品发布过程中，填写商品属性时，用于模糊搜索属性模板上可填属性值
 **/
export interface PddGoodsTemplatePropertyValueSearchRequestInterface {
  /**
   * @description: 类目id
   * @type: string
   * @default:
   **/
  cat_id?: string;

  /**
   * @description: 页码 从1开始
   * @type: number
   * @default:
   **/
  page_num: number;

  /**
   * @description: 1页查询的最大数据 [1，500], 默认100
   * @type: number
   * @default:
   **/
  page_size: number;

  /**
   * @description: 父属性值id
   * @type: string
   * @default:
   **/
  parent_vid: string;

  /**
   * @description: 模板属性id
   * @type: string
   * @default:
   **/
  template_pid?: string;

  /**
   * @description: 需要模糊搜索的属性值
   * @type: string
   * @default:
   **/
  value?: string;
}

/**
 * 接口名称：模板属性值搜索接口
 * 接口标识：pdd.goods.template.property.value.search
 * 接口使用场景：商品发布过程中，填写商品属性时，用于模糊搜索属性模板上可填属性值
 **/
export interface PddGoodsTemplatePropertyValueSearchResponseInterface {
  /**
   * @description: resposne
   * @type: PddGoodsTemplatePropertyValueSearchGoodsTemplatePropValSearchResponseResponseInterface
   * @default:
   *
   **/
  goods_template_prop_val_search_response: PddGoodsTemplatePropertyValueSearchGoodsTemplatePropValSearchResponseResponseInterface;
}

/**
 * @description resposne
 * @default
 * @example
 **/
export interface PddGoodsTemplatePropertyValueSearchGoodsTemplatePropValSearchResponseResponseInterface {
  /**
   * @description: list
   * @type: PddGoodsTemplatePropertyValueSearchGoodsTemplatePropValSearchResponseListResponseInterface[]
   * @default:
   *
   **/
  list: PddGoodsTemplatePropertyValueSearchGoodsTemplatePropValSearchResponseListResponseInterface[];
}

/**
 * @description list
 * @default
 * @example
 **/
export interface PddGoodsTemplatePropertyValueSearchGoodsTemplatePropValSearchResponseListResponseInterface {
  /**
   * @description: 属性值
   * @type: string
   * @default:
   **/
  value: string;

  /**
   * @description: 属性值id
   * @type: string
   * @default:
   **/
  vid: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH]: {
    requestInterface: PddGoodsTemplatePropertyValueSearchRequestInterface;
    responseInterface: PddGoodsTemplatePropertyValueSearchResponseInterface;
  };
}
