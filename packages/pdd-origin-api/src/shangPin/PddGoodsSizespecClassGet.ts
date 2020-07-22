export const PDD_GOODS_SIZESPEC_CLASS_GET = 'pdd.goods.sizespec.class.get';

/**
 * 接口名称：尺码表分类查询
 * 接口标识：pdd.goods.sizespec.class.get
 * 接口使用场景：管理尺码表模板、创建尺码表模板需要使用分类管理
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddGoodsSizespecClassGetRequestInterface {}

/**
 * 接口名称：尺码表分类查询
 * 接口标识：pdd.goods.sizespec.class.get
 * 接口使用场景：管理尺码表模板、创建尺码表模板需要使用分类管理
 **/
export interface PddGoodsSizespecClassGetResponseInterface {
  /**
   * @description: 响应
   * @type: PddGoodsSizespecClassGetResponseResponseInterface
   * @default:
   *
   **/
  response: PddGoodsSizespecClassGetResponseResponseInterface;
}

/**
 * @description 响应
 * @default
 * @example
 **/
export interface PddGoodsSizespecClassGetResponseResponseInterface {
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
   * @type: PddGoodsSizespecClassGetResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddGoodsSizespecClassGetResponseResultResponseInterface[];

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
export interface PddGoodsSizespecClassGetResponseResultResponseInterface {
  /**
   * @description: 尺码表叶分类（二级分类）
   * @type: PddGoodsSizespecClassGetResponseResultChildrenResponseInterface[]
   * @default:
   *
   **/
  children: PddGoodsSizespecClassGetResponseResultChildrenResponseInterface[];

  /**
   * @description: 尺码表分类id
   * @type: number
   * @default:
   **/
  id: number;

  /**
   * @description: 尺码表分类名称
   * @type: string
   * @default:
   **/
  name: string;
}

/**
 * @description 尺码表叶分类（二级分类）
 * @default
 * @example
 **/
export interface PddGoodsSizespecClassGetResponseResultChildrenResponseInterface {
  /**
   * @description: 尺码表分类id
   * @type: number
   * @default:
   **/
  id: number;

  /**
   * @description: 尺码表分类名称
   * @type: string
   * @default:
   **/
  name: string;
}
