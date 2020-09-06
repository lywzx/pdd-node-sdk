export const PDD_GOODS_SIZESPEC_TEMPLATE_ADD = 'pdd.goods.sizespec.template.add';

/**
 * 接口名称：新增自定义尺码表模版
 * 接口标识：pdd.goods.sizespec.template.add
 * 接口使用场景：管理尺码表模板时需要新增自定义尺码表模版
 **/
export interface PddGoodsSizespecTemplateAddRequestInterface {
  /**
   * @description: 尺码表
   * @type: PddGoodsSizespecTemplateAddSizeSpecDtoRequestInterface
   * @default:
   *
   **/
  size_spec_dto: PddGoodsSizespecTemplateAddSizeSpecDtoRequestInterface;
}

/**
 * @description 尺码表
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplateAddSizeSpecDtoRequestInterface {
  /**
   * @description: 尺码表分类id，pdd.goods.sizespec.class.get得到
   * @type: number
   * @default:
   **/
  class_id: number;

  /**
   * @description: 尺码表内容
   * @type: PddGoodsSizespecTemplateAddSizeSpecDtoContentRequestInterface
   * @default:
   *
   **/
  content: PddGoodsSizespecTemplateAddSizeSpecDtoContentRequestInterface;

  /**
   * @description: 尺码表名称
   * @type: string
   * @default:
   **/
  name: string;
}

/**
 * @description 尺码表内容
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplateAddSizeSpecDtoContentRequestInterface {
  /**
   * @description: 尺码表元数据（表头），pdd.goods.sizespec.meta.get得到
   * @type: PddGoodsSizespecTemplateAddSizeSpecDtoContentMetaRequestInterface
   * @default:
   *
   **/
  meta: PddGoodsSizespecTemplateAddSizeSpecDtoContentMetaRequestInterface;

  /**
   * @description: 尺码表行数据
   * @type: PddGoodsSizespecTemplateAddSizeSpecDtoContentRecordsRequestInterface[]
   * @default:
   *
   **/
  records: PddGoodsSizespecTemplateAddSizeSpecDtoContentRecordsRequestInterface[];
}

/**
 * @description 尺码表元数据（表头），pdd.goods.sizespec.meta.get得到
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplateAddSizeSpecDtoContentMetaRequestInterface {
  /**
   * @description: 尺码元素
   * @type: PddGoodsSizespecTemplateAddSizeSpecDtoContentMetaElementsRequestInterface[]
   * @default:
   *
   **/
  elements: PddGoodsSizespecTemplateAddSizeSpecDtoContentMetaElementsRequestInterface[];

  /**
   * @description: 尺码组
   * @type: PddGoodsSizespecTemplateAddSizeSpecDtoContentMetaGroupsRequestInterface[]
   * @default:
   *
   **/
  groups: PddGoodsSizespecTemplateAddSizeSpecDtoContentMetaGroupsRequestInterface[];
}

/**
 * @description 尺码元素
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplateAddSizeSpecDtoContentMetaElementsRequestInterface {
  /**
   * @description: 尺码元数据id
   * @type: number
   * @default:
   **/
  id: number;

  /**
   * @description: 尺码元数据名称
   * @type: string
   * @default:
   **/
  name: string;
}

/**
 * @description 尺码组
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplateAddSizeSpecDtoContentMetaGroupsRequestInterface {
  /**
   * @description: 尺码元数据id
   * @type: number
   * @default:
   **/
  id: number;

  /**
   * @description: 尺码元数据名称
   * @type: string
   * @default:
   **/
  name: string;
}

/**
 * @description 尺码表行数据
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplateAddSizeSpecDtoContentRecordsRequestInterface {
  /**
   * @description: 尺码组和尺码表元素的值
   * @type: PddGoodsSizespecTemplateAddSizeSpecDtoContentRecordsValuesRequestInterface
   * @default:
   *
   **/
  values: PddGoodsSizespecTemplateAddSizeSpecDtoContentRecordsValuesRequestInterface;
}

/**
 * @description 尺码组和尺码表元素的值
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplateAddSizeSpecDtoContentRecordsValuesRequestInterface {
  /**
   * @description: 尺码组和尺码表元素的id
   * @type: number
   * @default:
   **/
  $key: number;

  /**
   * @description: 尺码组和尺码表元素的值
   * @type: string
   * @default:
   **/
  $value: string;
}

/**
 * 接口名称：新增自定义尺码表模版
 * 接口标识：pdd.goods.sizespec.template.add
 * 接口使用场景：管理尺码表模板时需要新增自定义尺码表模版
 **/
export interface PddGoodsSizespecTemplateAddResponseInterface {
  /**
   * @description: 响应
   * @type: PddGoodsSizespecTemplateAddResponseResponseInterface
   * @default:
   *
   **/
  response: PddGoodsSizespecTemplateAddResponseResponseInterface;
}

/**
 * @description 响应
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplateAddResponseResponseInterface {
  /**
   * @description: 错误码
   * @type: number
   * @default:
   **/
  error_code: number;

  /**
   * @description: 错误描述
   * @type: string
   * @default:
   **/
  error_msg: string;

  /**
   * @description: 新建尺码表id
   * @type: string | number
   * @default:
   **/
  result: string | number;

  /**
   * @description: 请求成功
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
