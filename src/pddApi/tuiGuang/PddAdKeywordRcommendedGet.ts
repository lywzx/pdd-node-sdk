export const PDD_AD_KEYWORD_RCOMMENDED_GET = 'pdd.ad.keyword.rcommended.get';

/**
 * 接口名称：系统推荐关键词
 * 接口标识：pdd.ad.keyword.rcommended.get
 * 接口使用场景：系统推荐关键词，提供商品id可获取系统在“添加关键词”功能中所推荐的关键词
 **/
export interface PddAdKeywordRcommendedGetRequestInterface {
  /**
   * @description: 0--搜索广告,1--明星店铺,2--定向广告,3--首页Banner广告（目前只支持0，暂不支持1、2、3）
   * @type: number
   * @default:
   **/
  scene_type?: number;

  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id?: string;
}

/**
 * 接口名称：系统推荐关键词
 * 接口标识：pdd.ad.keyword.rcommended.get
 * 接口使用场景：系统推荐关键词，提供商品id可获取系统在“添加关键词”功能中所推荐的关键词
 **/
export interface PddAdKeywordRcommendedGetResponseInterface {
  /**
   * @description: 返回response
   * @type: PddAdKeywordRcommendedGetAdRecommendedKeywordListResponseResponseInterface
   * @default:
   *
   **/
  ad_recommended_keyword_list_response: PddAdKeywordRcommendedGetAdRecommendedKeywordListResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/
export interface PddAdKeywordRcommendedGetAdRecommendedKeywordListResponseResponseInterface {
  /**
   * @description: 推荐关键字列表
   * @type: PddAdKeywordRcommendedGetAdRecommendedKeywordListResponseRecommendedKeywordListResponseInterface[]
   * @default:
   *
   **/
  recommended_keyword_list: PddAdKeywordRcommendedGetAdRecommendedKeywordListResponseRecommendedKeywordListResponseInterface[];
}

/**
 * @description 推荐关键字列表
 * @default
 * @example
 **/
export interface PddAdKeywordRcommendedGetAdRecommendedKeywordListResponseRecommendedKeywordListResponseInterface {
  /**
   * @description: 分数
   * @type: string
   * @default:
   **/
  score: string;

  /**
   * @description: 热度
   * @type: string
   * @default:
   **/
  heat: string;

  /**
   * @description: 趋势
   * @type: string
   * @default:
   **/
  trend: string;

  /**
   * @description: 竞争力
   * @type: string
   * @default:
   **/
  compete: string;

  /**
   * @description: 平均出价
   * @type: string
   * @default:
   **/
  avg_bid: string;

  /**
   * @description: 相关性
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
