export const PDD_GOODS_SIZESPEC_TEMPLATE_DELETE = 'pdd.goods.sizespec.template.delete';

/**
 * 接口名称：删除自定义尺码表模版
 * 接口标识：pdd.goods.sizespec.template.delete
 * 接口使用场景：管理尺码表模板时需要删除自定义尺码表模板
 **/
export interface PddGoodsSizespecTemplateDeleteRequestInterface {
  /**
   * @description: 尺码表模板id
   * @type: string | number
   * @default:
   **/
  id: string | number;
}

/**
 * 接口名称：删除自定义尺码表模版
 * 接口标识：pdd.goods.sizespec.template.delete
 * 接口使用场景：管理尺码表模板时需要删除自定义尺码表模板
 **/
export interface PddGoodsSizespecTemplateDeleteResponseInterface {
  /**
   * @description: 响应
   * @type: PddGoodsSizespecTemplateDeleteResponseResponseInterface
   * @default:
   *
   **/
  response: PddGoodsSizespecTemplateDeleteResponseResponseInterface;
}

/**
 * @description 响应
 * @default
 * @example
 **/
export interface PddGoodsSizespecTemplateDeleteResponseResponseInterface {
  /**
   * @description: 错误码
   * @type: number
   * @default:
   **/
  errorCode: number;

  /**
   * @description: 错误描述
   * @type: string
   * @default:
   **/
  errorMsg: string;

  /**
   * @description: 删除成功
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
