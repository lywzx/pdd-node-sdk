export const PDD_AD_KEYWORD_DELETE = 'pdd.ad.keyword.delete';
export const PDD_AD_KEYWORD_DELETE_RESPONSE_KEY = 'ad_keyword_delete_response';

/**
 * 接口名称：推广单元删除关键词
 * 接口标识：pdd.ad.keyword.delete
 * 接口使用场景：推广单元删除关键词（传入关键词id列表，统一删除)，可输入多个关键词，进行批量删除
 **/
export interface PddAdKeywordDeleteRequestInterface {
  /**
   * @description: 0--搜索广告,1--明星店铺,2--定向广告,3--首页Banner广告（目前只支持0，暂不支持1、2、3）
   * @type: number
   * @default:
   **/
  scene_type: number;

  /**
   * @description: keyword_id列表，[1,2]
   * @type: Array<string | number>
   * @default:
   **/
  keyword_ids: Array<string | number>;
}

/**
 * 接口名称：推广单元删除关键词
 * 接口标识：pdd.ad.keyword.delete
 * 接口使用场景：推广单元删除关键词（传入关键词id列表，统一删除)，可输入多个关键词，进行批量删除
 **/
export interface PddAdKeywordDeleteResponseInterface {
  /**
   * @description: 返回response
   * @type: PddAdKeywordDeleteAdKeywordDeleteResponseResponseInterface
   * @default:
   *
   **/
  ad_keyword_delete_response: PddAdKeywordDeleteAdKeywordDeleteResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/
export interface PddAdKeywordDeleteAdKeywordDeleteResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
