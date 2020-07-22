export const PDD_AD_CREATIVE_DELETE = 'pdd.ad.creative.delete';

/**
 * 接口名称：推广单元删除创意（至少需保留一个创意）
 * 接口标识：pdd.ad.creative.delete
 * 接口使用场景：推广单元删除创意（至少需保留一个创意）
 **/
export interface PddAdCreativeDeleteRequestInterface {
  /**
   * @description:
   * @type: string | number
   * @default:
   **/
  creative_id: string | number;

  /**
   * @description: 0:搜索广告
   * @type: number
   * @default:
   **/
  scene_type: number;
}

/**
 * 接口名称：推广单元删除创意（至少需保留一个创意）
 * 接口标识：pdd.ad.creative.delete
 * 接口使用场景：推广单元删除创意（至少需保留一个创意）
 **/
export interface PddAdCreativeDeleteResponseInterface {
  /**
   * @description: true or false
   * @type: boolean
   * @default:
   **/
  open_api_response: boolean;
}
