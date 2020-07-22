export const PDD_GOODS_SIZESPEC_TEMPLATE_GET = 'pdd.goods.sizespec.template.get';

/**
 * 接口名称：根据尺码表模板id查询自定义尺码表模版
 * 接口标识：pdd.goods.sizespec.template.get
 * 接口使用场景：管理尺码表模板时需要单独查询尺码表模板
 **/
export interface PddGoodsSizespecTemplateGetRequestInterface {
  /**
   * @description: 尺码表id
   * @type: string | number
   * @default:
   **/
  id: string | number;
}

/**
 * 接口名称：根据尺码表模板id查询自定义尺码表模版
 * 接口标识：pdd.goods.sizespec.template.get
 * 接口使用场景：管理尺码表模板时需要单独查询尺码表模板
 **/
export interface PddGoodsSizespecTemplateGetResponseInterface {
  /**
   * @description: 响应
   * @type: PddGoodsSizespecTemplateGetResponseResponseInterface
   * @default:
   *
   **/
  response: PddGoodsSizespecTemplateGetResponseResponseInterface;
}

/**
 * @description 响应
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplateGetResponseResponseInterface {
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
   * @description: 结果
   * @type: PddGoodsSizespecTemplateGetResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddGoodsSizespecTemplateGetResponseResultResponseInterface;

  /**
   * @description: 请求成功
   * @type: boolean
   * @default:
   **/
  success: boolean;
}

/**
 * @description 结果
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplateGetResponseResultResponseInterface {
  /**
   * @description: 尺码表分类id
   * @type: string | number
   * @default:
   **/
  class_id: string | number;

  /**
   * @description: 尺码表内容
   * @type: PddGoodsSizespecTemplateGetResponseResultContentResponseInterface
   * @default:
   *
   **/
  content: PddGoodsSizespecTemplateGetResponseResultContentResponseInterface;

  /**
   * @description: 创建时间
   * @type: string | number
   * @default:
   **/
  create_at: string | number;

  /**
   * @description: 扩展类型
   * @type: number
   * @default:
   **/
  extend_type: number;

  /**
   * @description: 尺码表id
   * @type: string | number
   * @default:
   **/
  id: string | number;

  /**
   * @description: 是否尺码表分类默认
   * @type: boolean
   * @default:
   **/
  is_default: boolean;

  /**
   * @description: 尺码表属于的店铺
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;

  /**
   * @description: 尺码表名称
   * @type: string
   * @default:
   **/
  name: string;

  /**
   * @description: 是否可复用
   * @type: boolean
   * @default:
   **/
  reusable: boolean;

  /**
   * @description: 更新时间
   * @type: string | number
   * @default:
   **/
  update_at: string | number;

  /**
   * @description: 使用的商品数
   * @type: string | number
   * @default:
   **/
  used: string | number;
}

/**
 * @description 尺码表内容
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplateGetResponseResultContentResponseInterface {
  /**
   * @description: 尺码表元数据（表头）
   * @type: PddGoodsSizespecTemplateGetResponseResultContentMetaResponseInterface
   * @default:
   *
   **/
  meta: PddGoodsSizespecTemplateGetResponseResultContentMetaResponseInterface;

  /**
   * @description: 尺码表图片
   * @type: string
   * @default:
   **/
  pic_url: string;

  /**
   * @description: 尺码表行数据
   * @type: PddGoodsSizespecTemplateGetResponseResultContentRecordsResponseInterface[]
   * @default:
   *
   **/
  records: PddGoodsSizespecTemplateGetResponseResultContentRecordsResponseInterface[];
}

/**
 * @description 尺码表元数据（表头）
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplateGetResponseResultContentMetaResponseInterface {
  /**
   * @description: 可批量的尺码元素id
   * @type: number[]
   * @default:
   **/
  batchable_element_ids: number[];

  /**
   * @description: 尺码元素
   * @type: PddGoodsSizespecTemplateGetResponseResultContentMetaElementsResponseInterface[]
   * @default:
   *
   **/
  elements: PddGoodsSizespecTemplateGetResponseResultContentMetaElementsResponseInterface[];

  /**
   * @description: 尺码组
   * @type: PddGoodsSizespecTemplateGetResponseResultContentMetaGroupsResponseInterface[]
   * @default:
   *
   **/
  groups: PddGoodsSizespecTemplateGetResponseResultContentMetaGroupsResponseInterface[];
}

/**
 * @description 尺码元素
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplateGetResponseResultContentMetaElementsResponseInterface {
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
export interface PddGoodsSizespecTemplateGetResponseResultContentMetaGroupsResponseInterface {
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
export interface PddGoodsSizespecTemplateGetResponseResultContentRecordsResponseInterface {
  /**
   * @description: 尺码组和尺码表元素的值
   * @type: PddGoodsSizespecTemplateGetResponseResultContentRecordsValuesResponseInterface
   * @default:
   *
   **/
  values: PddGoodsSizespecTemplateGetResponseResultContentRecordsValuesResponseInterface;
}

/**
 * @description 尺码组和尺码表元素的值
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplateGetResponseResultContentRecordsValuesResponseInterface {
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
