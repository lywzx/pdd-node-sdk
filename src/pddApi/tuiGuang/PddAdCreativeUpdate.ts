export const PDD_AD_CREATIVE_UPDATE = 'PDD_AD_CREATIVE_UPDATE';

/**
 * 接口名称：推广单元修改创意图片、创意标题
 * 接口标识：pdd.ad.creative.update
 * 接口使用场景：推广单元修改创意图片、创意标题
 **/
export interface PddAdCreativeUpdateRequestInterface {
  /**
   * @description:
   * @type: string
   * @default:
   **/
  creative_id?: string;

  /**
   * @description: 0:搜索广告
   * @type: number
   * @default:
   **/
  scene_type?: number;

  /**
   * @description: jsonObject 的json string。 示例：{"title":"ceshi","image_url":"https://img12.360buyimg.com/n7/g14/M07/16/00/rBEhVlJfpdwIAAAAAADurQhBHX0AAETNABbGNkAAO7F355.jpg"}
   * @type: PddAdCreativeUpdateCreativeRequestInterface
   * @default:
   *
   **/
  creative?: PddAdCreativeUpdateCreativeRequestInterface;
}

/**
 * @description jsonObject 的json string。 示例：{"title":"ceshi","image_url":"https://img12.360buyimg.com/n7/g14/M07/16/00/rBEhVlJfpdwIAAAAAADurQhBHX0AAETNABbGNkAAO7F355.jpg"}
 * @default
 * @example
 **/
export interface PddAdCreativeUpdateCreativeRequestInterface {
  /**
   * @description: 图片地址
   * @type: string
   * @default:
   **/
  image_url?: string;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  title?: string;
}

/**
 * 接口名称：推广单元修改创意图片、创意标题
 * 接口标识：pdd.ad.creative.update
 * 接口使用场景：推广单元修改创意图片、创意标题
 **/
export interface PddAdCreativeUpdateResponseInterface {
  /**
   * @description: true or false
   * @type: boolean
   * @default:
   **/
  open_api_response: boolean;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_AD_CREATIVE_UPDATE]: {
    requestInterface: PddAdCreativeUpdateRequestInterface;
    responseInterface: PddAdCreativeUpdateResponseInterface;
  };
}
