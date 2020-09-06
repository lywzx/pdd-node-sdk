export const PDD_GOODS_SIZESPEC_META_GET = 'pdd.goods.sizespec.meta.get';

/**
 * 接口名称：尺码组和尺码参数查询
 * 接口标识：pdd.goods.sizespec.meta.get
 * 接口使用场景：创建尺码表需要查询尺码表分类支持的尺码组和尺码参数（元数据）
 **/
export interface PddGoodsSizespecMetaGetRequestInterface {
  /**
   * @description: 尺码分类id
   * @type: number
   * @default:
   **/
  class_id: number;
}

/**
 * 接口名称：尺码组和尺码参数查询
 * 接口标识：pdd.goods.sizespec.meta.get
 * 接口使用场景：创建尺码表需要查询尺码表分类支持的尺码组和尺码参数（元数据）
 **/
export interface PddGoodsSizespecMetaGetResponseInterface {
  /**
   * @description: 响应
   * @type: PddGoodsSizespecMetaGetResponseResponseInterface
   * @default:
   *
   **/
  response: PddGoodsSizespecMetaGetResponseResponseInterface;
}

/**
 * @description 响应
 * @default
 * @example
 **/
export interface PddGoodsSizespecMetaGetResponseResponseInterface {
  /**
   * @description: 错误码
   * @type: number
   * @default:
   **/
  error_code: number;

  /**
   * @description: 错误消息
   * @type: string
   * @default:
   **/
  error_msg: string;

  /**
   * @description: 结果
   * @type: PddGoodsSizespecMetaGetResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddGoodsSizespecMetaGetResponseResultResponseInterface;

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
export interface PddGoodsSizespecMetaGetResponseResultResponseInterface {
  /**
   * @description: 可批量的尺码元素id
   * @type: number[]
   * @default:
   **/
  batchable_element_ids: number[];

  /**
   * @description: 尺码元素
   * @type: PddGoodsSizespecMetaGetResponseResultElementsResponseInterface[]
   * @default:
   *
   **/
  elements: PddGoodsSizespecMetaGetResponseResultElementsResponseInterface[];

  /**
   * @description: 尺码组
   * @type: PddGoodsSizespecMetaGetResponseResultGroupsResponseInterface[]
   * @default:
   *
   **/
  groups: PddGoodsSizespecMetaGetResponseResultGroupsResponseInterface[];
}

/**
 * @description 尺码元素
 * @default
 * @example
 **/
export interface PddGoodsSizespecMetaGetResponseResultElementsResponseInterface {
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
export interface PddGoodsSizespecMetaGetResponseResultGroupsResponseInterface {
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
