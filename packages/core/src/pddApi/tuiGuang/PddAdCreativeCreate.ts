export const PDD_AD_CREATIVE_CREATE = 'pdd.ad.creative.create';
export const PDD_AD_CREATIVE_CREATE_RESPONSE_KEY = 'open_api_response';

/**
 * 接口名称：推广单元增加创意
 * 接口标识：pdd.ad.creative.create
 * 接口使用场景：推广单元增加创意（目前最多可添加4个创意）
 **/
export interface PddAdCreativeCreateRequestInterface {
  /**
   * @description: 单元id
   * @type: string | number
   * @default:
   **/
  unit_id: string | number;

  /**
   * @description: 0:搜索广告
   * @type: number
   * @default:
   **/
  scene_type: number;

  /**
   * @description: jsonObject 的json string。示例：{"title":"ceshi","image_url":"https://img12.360buyimg.com/n7/g14/M07/16/00/rBEhVlJfpdwIAAAAAADurQhBHX0AAETNABbGNkAAO7F355.jpg"}
   * @type: PddAdCreativeCreateCreativeRequestInterface
   * @default:
   *
   **/
  creative: PddAdCreativeCreateCreativeRequestInterface;
}

/**
 * @description jsonObject 的json string。示例：{"title":"ceshi","image_url":"https://img12.360buyimg.com/n7/g14/M07/16/00/rBEhVlJfpdwIAAAAAADurQhBHX0AAETNABbGNkAAO7F355.jpg"}
 * @default
 * @example
 **/
export interface PddAdCreativeCreateCreativeRequestInterface {
  /**
   * @description:
   * @type: string
   * @default:
   **/
  title: string;

  /**
   * @description: 图片地址
   * @type: string
   * @default:
   **/
  image_url: string;
}

/**
 * 接口名称：推广单元增加创意
 * 接口标识：pdd.ad.creative.create
 * 接口使用场景：推广单元增加创意（目前最多可添加4个创意）
 **/
export interface PddAdCreativeCreateResponseInterface {
  /**
   * @description: response
   * @type: PddAdCreativeCreateOpenApiResponseResponseInterface
   * @default:
   *
   **/
  open_api_response: PddAdCreativeCreateOpenApiResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddAdCreativeCreateOpenApiResponseResponseInterface {
  /**
   * @description: 是否请求成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
