export const PDD_GOODS_SIZESPEC_TEMPLATE_UPDATE = 'pdd.goods.sizespec.template.update';

/**
 * 接口名称：更新自定义尺码表模版
 * 接口标识：pdd.goods.sizespec.template.update
 * 接口使用场景：管理尺码表模板时需要更新自定义尺码表模版
 **/
export interface PddGoodsSizespecTemplateUpdateRequestInterface {
  /**
   * @description: 尺码表
   * @type: PddGoodsSizespecTemplateUpdateSizeSpecDtoRequestInterface
   * @default:
   *
   **/
  size_spec_dto: PddGoodsSizespecTemplateUpdateSizeSpecDtoRequestInterface;
}

/**
 * @description 尺码表
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplateUpdateSizeSpecDtoRequestInterface {
  /**
   * @description: 尺码表分类id，pdd.goods.sizespec.class.get得到
   * @type: number
   * @default:
   **/
  class_id: number;

  /**
   * @description: 尺码表内容
   * @type: PddGoodsSizespecTemplateUpdateSizeSpecDtoContentRequestInterface
   * @default:
   *
   **/
  content: PddGoodsSizespecTemplateUpdateSizeSpecDtoContentRequestInterface;

  /**
   * @description: 尺码表id
   * @type: string | number
   * @default:
   **/
  id: string | number;

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
export interface PddGoodsSizespecTemplateUpdateSizeSpecDtoContentRequestInterface {
  /**
   * @description: 尺码表元数据（表头），pdd.goods.sizespec.meta.get得到
   * @type: PddGoodsSizespecTemplateUpdateSizeSpecDtoContentMetaRequestInterface
   * @default:
   *
   **/
  meta: PddGoodsSizespecTemplateUpdateSizeSpecDtoContentMetaRequestInterface;

  /**
   * @description: 尺码表行数据
   * @type: PddGoodsSizespecTemplateUpdateSizeSpecDtoContentRecordsRequestInterface[]
   * @default:
   *
   **/
  records: PddGoodsSizespecTemplateUpdateSizeSpecDtoContentRecordsRequestInterface[];
}

/**
 * @description 尺码表元数据（表头），pdd.goods.sizespec.meta.get得到
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplateUpdateSizeSpecDtoContentMetaRequestInterface {
  /**
   * @description: 尺码元素
   * @type: PddGoodsSizespecTemplateUpdateSizeSpecDtoContentMetaElementsRequestInterface[]
   * @default:
   *
   **/
  elements: PddGoodsSizespecTemplateUpdateSizeSpecDtoContentMetaElementsRequestInterface[];

  /**
   * @description: 尺码组
   * @type: PddGoodsSizespecTemplateUpdateSizeSpecDtoContentMetaGroupsRequestInterface[]
   * @default:
   *
   **/
  groups: PddGoodsSizespecTemplateUpdateSizeSpecDtoContentMetaGroupsRequestInterface[];
}

/**
 * @description 尺码元素
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplateUpdateSizeSpecDtoContentMetaElementsRequestInterface {
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
export interface PddGoodsSizespecTemplateUpdateSizeSpecDtoContentMetaGroupsRequestInterface {
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
export interface PddGoodsSizespecTemplateUpdateSizeSpecDtoContentRecordsRequestInterface {
  /**
   * @description: 尺码组和尺码表元素的值
   * @type: PddGoodsSizespecTemplateUpdateSizeSpecDtoContentRecordsValuesRequestInterface
   * @default:
   *
   **/
  values: PddGoodsSizespecTemplateUpdateSizeSpecDtoContentRecordsValuesRequestInterface;
}

/**
 * @description 尺码组和尺码表元素的值
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplateUpdateSizeSpecDtoContentRecordsValuesRequestInterface {
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
 * 接口名称：更新自定义尺码表模版
 * 接口标识：pdd.goods.sizespec.template.update
 * 接口使用场景：管理尺码表模板时需要更新自定义尺码表模版
 **/
export interface PddGoodsSizespecTemplateUpdateResponseInterface {
  /**
   * @description: 响应
   * @type: PddGoodsSizespecTemplateUpdateResponseResponseInterface
   * @default:
   *
   **/
  response: PddGoodsSizespecTemplateUpdateResponseResponseInterface;
}

/**
 * @description 响应
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplateUpdateResponseResponseInterface {
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
   * @description: 更新成功
   * @type: boolean
   * @default:
   **/
  result: boolean;

  /**
   * @description: 请求成功
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
