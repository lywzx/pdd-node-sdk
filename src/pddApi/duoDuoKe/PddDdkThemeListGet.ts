export const PDD_DDK_THEME_LIST_GET = 'PDD_DDK_THEME_LIST_GET';

/**
 * 接口名称：多多进宝主题列表查询
 * 接口标识：pdd.ddk.theme.list.get
 * 接口使用场景：查询多多进宝主题列表
 **/

export interface PddDdkThemeListGetRequestInterface {
  /**
   * @description: 返回的一页数据数量
   * @type: number
   * @default:
   **/
  page_size: number;

  /**
   * @description: 返回的页码
   * @type: number
   * @default:
   **/
  page: number;
}

/**
 * 接口名称：多多进宝主题列表查询
 * 接口标识：pdd.ddk.theme.list.get
 * 接口使用场景：查询多多进宝主题列表
 **/

export interface PddDdkThemeListGetResponseInterface {
  /**
   * @description: 主题列表返回对象
   * @type: PddDdkThemeListGetThemeListGetResponseResponseInterface
   * @default:
   *
   **/
  theme_list_get_response: PddDdkThemeListGetThemeListGetResponseResponseInterface;
}

/**
 * @description 主题列表返回对象
 * @default
 * @example
 **/

export interface PddDdkThemeListGetThemeListGetResponseResponseInterface {
  /**
   * @description: 返回的元素数量
   * @type: number
   * @default:
   **/
  total: number;

  /**
   * @description: 返回的主题列表
   * @type: PddDdkThemeListGetThemeListGetResponseThemeListResponseInterface[]
   * @default:
   *
   **/
  theme_list: PddDdkThemeListGetThemeListGetResponseThemeListResponseInterface[];
}

/**
 * @description 返回的主题列表
 * @default
 * @example
 **/

export interface PddDdkThemeListGetThemeListGetResponseThemeListResponseInterface {
  /**
   * @description: 主题ID
   * @type: string
   * @default:
   **/
  id: string;

  /**
   * @description: 主题图片
   * @type: string
   * @default:
   **/
  image_url: string;

  /**
   * @description: 主题名称
   * @type: string
   * @default:
   **/
  name: string;

  /**
   * @description: 主题包含的商品数量
   * @type: string
   * @default:
   **/
  goods_num: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_DDK_THEME_LIST_GET]: {
    requestInterface: PddDdkThemeListGetRequestInterface;
    responseInterface: PddDdkThemeListGetResponseInterface;
  };
}
