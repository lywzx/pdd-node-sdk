export const PDD_AD_KEYWORD_UPDATE = 'PDD_AD_KEYWORD_UPDATE';

/**
 * 接口名称：推广单元修改关键词出价
 * 接口标识：pdd.ad.keyword.update
 * 接口使用场景：推广单元修改关键词出价（传入关键词id列表，统一修改出价)，所有关键词出价范围需在0.1~99.00元之间
 **/
export interface PddAdKeywordUpdateRequestInterface {
  /**
   * @description: 0--搜索广告,1--明星店铺,2--定向广告,3--首页Banner广告（目前只支持0，暂不支持1、2、3）
   * @type: number
   * @default:
   **/
  scene_type?: number;

  /**
   * @description:
   * @type: PddAdKeywordUpdateKeywordsRequestInterface[]
   * @default:
   *
   **/
  keywords?: PddAdKeywordUpdateKeywordsRequestInterface[];
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdKeywordUpdateKeywordsRequestInterface {
  /**
   * @description: 关键字出价（厘）范围需在0.10~99.0元区间内
   * @type: string
   * @default:
   **/
  bid?: string;

  /**
   * @description: 关键词id
   * @type: string
   * @default:
   **/
  keyword_id?: string;
}

/**
 * 接口名称：推广单元修改关键词出价
 * 接口标识：pdd.ad.keyword.update
 * 接口使用场景：推广单元修改关键词出价（传入关键词id列表，统一修改出价)，所有关键词出价范围需在0.1~99.00元之间
 **/
export interface PddAdKeywordUpdateResponseInterface {
  /**
   * @description: 返回response
   * @type: PddAdKeywordUpdateAdKeywordUpdateResponseResponseInterface
   * @default:
   *
   **/
  ad_keyword_update_response: PddAdKeywordUpdateAdKeywordUpdateResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/
export interface PddAdKeywordUpdateAdKeywordUpdateResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_AD_KEYWORD_UPDATE]: {
    requestInterface: PddAdKeywordUpdateRequestInterface;
    responseInterface: PddAdKeywordUpdateResponseInterface;
  };
}
