export const PDD_AD_API_KEYWORD_RELEVANCE_GET = 'pdd.ad.api.keyword.relevance.get';

/**
 * 接口名称：关键词相关性查询
 * 接口标识：pdd.ad.api.keyword.relevance.get
 * 接口使用场景：关键词相关性查询
 **/
export interface PddAdApiKeywordRelevanceGetRequestInterface {
  /**
   * @description: 商品Id
   * @type: string | number
   * @default:
   **/
  goodsId: string | number;

  /**
   * @description: 关键词数组
   * @type: string[]
   * @default:
   **/
  words: string[];
}

/**
 * 接口名称：关键词相关性查询
 * 接口标识：pdd.ad.api.keyword.relevance.get
 * 接口使用场景：关键词相关性查询
 **/
export interface PddAdApiKeywordRelevanceGetResponseInterface {
  /**
   * @description:
   * @type: PddAdApiKeywordRelevanceGetResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiKeywordRelevanceGetResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiKeywordRelevanceGetResponseResponseInterface {
  /**
   * @description:
   * @type: number
   * @default:
   **/
  errorCode: number;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  errorMsg: string;

  /**
   * @description:
   * @type: PddAdApiKeywordRelevanceGetResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddAdApiKeywordRelevanceGetResponseResultResponseInterface[];

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  success: boolean;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiKeywordRelevanceGetResponseResultResponseInterface {
  /**
   * @description: 相关性指标，5最高，值越大相关度越高
   * @type: number
   * @default:
   **/
  relevance: number;

  /**
   * @description: 关键词
   * @type: string
   * @default:
   **/
  word: string;
}
