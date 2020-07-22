export const PDD_AD_API_KEYWORD_UPDATE = 'pdd.ad.api.keyword.update';

/**
 * 接口名称：批量修改关键词
 * 接口标识：pdd.ad.api.keyword.update
 * 接口使用场景：批量修改关键词
 **/
export interface PddAdApiKeywordUpdateRequestInterface {
  /**
   * @description: 广告单元Id
   * @type: string | number
   * @default:
   **/
  adId: string | number;

  /**
   * @description: 关键词列表
   * @type: PddAdApiKeywordUpdateKeywordsRequestInterface[]
   * @default:
   *
   **/
  keywords: PddAdApiKeywordUpdateKeywordsRequestInterface[];
}

/**
 * @description 关键词列表
 * @default
 * @example
 **/
export interface PddAdApiKeywordUpdateKeywordsRequestInterface {
  /**
   * @description: 关键词出价
   * @type: string | number
   * @default:
   **/
  bid: string | number;

  /**
   * @description: 关键词Id
   * @type: string | number
   * @default:
   **/
  keywordId: string | number;

  /**
   * @description: 关键词溢价比例。万分比。
   * @type: string | number
   * @default:
   **/
  premiumRate?: string | number;
}

/**
 * 接口名称：批量修改关键词
 * 接口标识：pdd.ad.api.keyword.update
 * 接口使用场景：批量修改关键词
 **/
export interface PddAdApiKeywordUpdateResponseInterface {
  /**
   * @description:
   * @type: PddAdApiKeywordUpdateResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiKeywordUpdateResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiKeywordUpdateResponseResponseInterface {
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
   * @description: 是否更新成功
   * @type: boolean
   * @default:
   **/
  result: boolean;

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
