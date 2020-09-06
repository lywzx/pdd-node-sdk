export const PDD_GOODS_SIZESPEC_TEMPLATES_GET = 'pdd.goods.sizespec.templates.get';

/**
 * 接口名称：自定义尺码表模版列表
 * 接口标识：pdd.goods.sizespec.templates.get
 * 接口使用场景：管理尺码表模板时需要查询尺码表模板列表
 **/
export interface PddGoodsSizespecTemplatesGetRequestInterface {
  /**
   * @description: 尺码表分类id，pdd.goods.sizespec.class.get得到
   * @type: string | number
   * @default:
   **/
  class_id: string | number;

  /**
   * @description: 限制数量
   * @type: string | number
   * @default:
   **/
  limit: string | number;

  /**
   * @description: 偏移量
   * @type: string | number
   * @default:
   **/
  offset: string | number;
}

/**
 * 接口名称：自定义尺码表模版列表
 * 接口标识：pdd.goods.sizespec.templates.get
 * 接口使用场景：管理尺码表模板时需要查询尺码表模板列表
 **/
export interface PddGoodsSizespecTemplatesGetResponseInterface {
  /**
   * @description: 响应
   * @type: PddGoodsSizespecTemplatesGetResponseResponseInterface
   * @default:
   *
   **/
  response: PddGoodsSizespecTemplatesGetResponseResponseInterface;
}

/**
 * @description 响应
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplatesGetResponseResponseInterface {
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
   * @type: PddGoodsSizespecTemplatesGetResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddGoodsSizespecTemplatesGetResponseResultResponseInterface;

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
export interface PddGoodsSizespecTemplatesGetResponseResultResponseInterface {
  /**
   * @description: 尺码表列表
   * @type: PddGoodsSizespecTemplatesGetResponseResultDataResponseInterface[]
   * @default:
   *
   **/
  data: PddGoodsSizespecTemplatesGetResponseResultDataResponseInterface[];

  /**
   * @description: limit
   * @type: number
   * @default:
   **/
  limit: number;

  /**
   * @description: offset
   * @type: number
   * @default:
   **/
  offset: number;

  /**
   * @description: 尺码表模板总数
   * @type: string | number
   * @default:
   **/
  total_count: string | number;
}

/**
 * @description 尺码表列表
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplatesGetResponseResultDataResponseInterface {
  /**
   * @description: 尺码表分类id
   * @type: string | number
   * @default:
   **/
  class_id: string | number;

  /**
   * @description: 尺码表内容
   * @type: PddGoodsSizespecTemplatesGetResponseResultDataContentResponseInterface
   * @default:
   *
   **/
  content: PddGoodsSizespecTemplatesGetResponseResultDataContentResponseInterface;

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
export interface PddGoodsSizespecTemplatesGetResponseResultDataContentResponseInterface {
  /**
   * @description: 尺码表元数据（表头）
   * @type: PddGoodsSizespecTemplatesGetResponseResultDataContentMetaResponseInterface
   * @default:
   *
   **/
  meta: PddGoodsSizespecTemplatesGetResponseResultDataContentMetaResponseInterface;

  /**
   * @description: 尺码表图片
   * @type: string
   * @default:
   **/
  pic_url: string;

  /**
   * @description: 尺码表行数据
   * @type: PddGoodsSizespecTemplatesGetResponseResultDataContentRecordsResponseInterface[]
   * @default:
   *
   **/
  records: PddGoodsSizespecTemplatesGetResponseResultDataContentRecordsResponseInterface[];
}

/**
 * @description 尺码表元数据（表头）
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplatesGetResponseResultDataContentMetaResponseInterface {
  /**
   * @description: 可批量的尺码元素id
   * @type: number[]
   * @default:
   **/
  batchable_element_ids: number[];

  /**
   * @description: 尺码元素
   * @type: PddGoodsSizespecTemplatesGetResponseResultDataContentMetaElementsResponseInterface[]
   * @default:
   *
   **/
  elements: PddGoodsSizespecTemplatesGetResponseResultDataContentMetaElementsResponseInterface[];

  /**
   * @description: 尺码组
   * @type: PddGoodsSizespecTemplatesGetResponseResultDataContentMetaGroupsResponseInterface[]
   * @default:
   *
   **/
  groups: PddGoodsSizespecTemplatesGetResponseResultDataContentMetaGroupsResponseInterface[];
}

/**
 * @description 尺码元素
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplatesGetResponseResultDataContentMetaElementsResponseInterface {
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
export interface PddGoodsSizespecTemplatesGetResponseResultDataContentMetaGroupsResponseInterface {
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
export interface PddGoodsSizespecTemplatesGetResponseResultDataContentRecordsResponseInterface {
  /**
   * @description: 尺码组和尺码表元素的值
   * @type: PddGoodsSizespecTemplatesGetResponseResultDataContentRecordsValuesResponseInterface
   * @default:
   *
   **/
  values: PddGoodsSizespecTemplatesGetResponseResultDataContentRecordsValuesResponseInterface;
}

/**
 * @description 尺码组和尺码表元素的值
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplatesGetResponseResultDataContentRecordsValuesResponseInterface {
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
