export const PDD_AD_KEYWORD_CREATE = 'pdd.ad.keyword.create';
export const PDD_AD_KEYWORD_CREATE_RESPONSE_KEY = 'ad_keyword_create_response';

/**
 * 接口名称：推广单元添加关键词
 * 接口标识：pdd.ad.keyword.create
 * 接口使用场景：推广单元添加关键词，单元内关键词上限200
 **/
export interface PddAdKeywordCreateRequestInterface {
  /**
   * @description: 0--搜索广告,1--明星店铺,2--定向广告,3--首页Banner广告（目前只支持0，暂不支持1、2、3）
   * @type: number
   * @default:
   **/
  scene_type?: number;

  /**
   * @description: 单元id
   * @type: string
   * @default:
   **/
  unit_id?: string;

  /**
   * @description: [{"word":"test","bid":200}]
   * @type: PddAdKeywordCreateKeywordsRequestInterface[]
   * @default:
   *
   **/
  keywords?: PddAdKeywordCreateKeywordsRequestInterface[];
}

/**
 * @description [{"word":"test","bid":200}]
 * @default
 * @example
 **/
export interface PddAdKeywordCreateKeywordsRequestInterface {
  /**
   * @description: 关键字出价（厘）范围需在0.10~99.0元区间内
   * @type: string
   * @default:
   **/
  bid?: string;

  /**
   * @description: 关键词
   * @type: string
   * @default:
   **/
  word?: string;
}

/**
 * 接口名称：推广单元添加关键词
 * 接口标识：pdd.ad.keyword.create
 * 接口使用场景：推广单元添加关键词，单元内关键词上限200
 **/
export interface PddAdKeywordCreateResponseInterface {
  /**
   * @description: 返回response
   * @type: PddAdKeywordCreateAdKeywordCreateResponseResponseInterface
   * @default:
   *
   **/
  ad_keyword_create_response: PddAdKeywordCreateAdKeywordCreateResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/
export interface PddAdKeywordCreateAdKeywordCreateResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
