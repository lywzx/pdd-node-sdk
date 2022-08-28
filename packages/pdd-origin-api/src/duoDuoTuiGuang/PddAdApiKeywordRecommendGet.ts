export const PDD_AD_API_KEYWORD_RECOMMEND_GET = 'pdd.ad.api.keyword.recommend.get';

export const PDD_AD_API_KEYWORD_RECOMMEND_GET_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
    callSourceType: 0,
  },
];

/**
 * 接口名称：获取推荐关键词
 * 接口标识：pdd.ad.api.keyword.recommend.get
 * 接口使用场景：获取推荐关键词
 **/
export interface PddAdApiKeywordRecommendGetRequestInterface {
  /**
   * @description: 商品Id
   * @type: string | number
   * @default:
   **/
  goodsId: string | number;
}

/**
 * 接口名称：获取推荐关键词
 * 接口标识：pdd.ad.api.keyword.recommend.get
 * 接口使用场景：获取推荐关键词
 **/
export interface PddAdApiKeywordRecommendGetResponseInterface {
  /**
   * @description:
   * @type: PddAdApiKeywordRecommendGetResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiKeywordRecommendGetResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiKeywordRecommendGetResponseResponseInterface {
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
   * @type: PddAdApiKeywordRecommendGetResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddAdApiKeywordRecommendGetResponseResultResponseInterface[];

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
export interface PddAdApiKeywordRecommendGetResponseResultResponseInterface {
  /**
   * @description: 关键词平均出价
   * @type: string
   * @default:
   **/
  avgBid: string;

  /**
   * @description: 竞争力
   * @type: string
   * @default:
   **/
  compete: string;

  /**
   * @description: 热度
   * @type: string
   * @default:
   **/
  heat: string;

  /**
   * @description: 关键词相关性
   * @type: number
   * @default:
   **/
  relevance: number;

  /**
   * @description: 质量分
   * @type: string
   * @default:
   **/
  score: string;

  /**
   * @description: 关键词趋势
   * @type: string
   * @default:
   **/
  trend: string;

  /**
   * @description: 关键词
   * @type: string
   * @default:
   **/
  word: string;
}
