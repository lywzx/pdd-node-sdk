export const PDD_AD_KEYWORD_RELEVANCE_GET = 'pdd.ad.keyword.relevance.get';

/**
 * 接口名称：关键词商品相关性
 * 接口标识：pdd.ad.keyword.relevance.get
 * 接口使用场景：关键词商品相关性，给出商品下的关键词，即可返回该关键词与该商品的相关性值
 **/
export interface PddAdKeywordRelevanceGetRequestInterface {
  /**
   * @description: 0--搜索广告,1--明星店铺,2--定向广告,3--首页Banner广告（目前只支持0，暂不支持1、2、3）
   * @type: number
   * @default:
   **/
  scene_type?: number;

  /**
   * @description: ["test"]
   * @type: string
   * @default:
   **/
  words?: string;

  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id?: string;
}

/**
 * 接口名称：关键词商品相关性
 * 接口标识：pdd.ad.keyword.relevance.get
 * 接口使用场景：关键词商品相关性，给出商品下的关键词，即可返回该关键词与该商品的相关性值
 **/
export interface PddAdKeywordRelevanceGetResponseInterface {
  /**
   * @description: 返回response
   * @type: PddAdKeywordRelevanceGetAdKeywordRelevanceListResponseResponseInterface
   * @default:
   *
   **/
  ad_keyword_relevance_list_response: PddAdKeywordRelevanceGetAdKeywordRelevanceListResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/
export interface PddAdKeywordRelevanceGetAdKeywordRelevanceListResponseResponseInterface {
  /**
   * @description: 关键词相关新列表
   * @type: PddAdKeywordRelevanceGetAdKeywordRelevanceListResponseKeywordRelevanceListResponseInterface[]
   * @default:
   *
   **/
  keyword_relevance_list: PddAdKeywordRelevanceGetAdKeywordRelevanceListResponseKeywordRelevanceListResponseInterface[];
}

/**
 * @description 关键词相关新列表
 * @default
 * @example
 **/
export interface PddAdKeywordRelevanceGetAdKeywordRelevanceListResponseKeywordRelevanceListResponseInterface {
  /**
   * @description: 相关性
   * @type: string
   * @default:
   **/
  relevance: string;

  /**
   * @description: 关键词
   * @type: string
   * @default:
   **/
  word: string;
}
