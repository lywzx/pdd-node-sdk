export const PDD_AD_API_KEYWORD_DELETE = 'pdd.ad.api.keyword.delete';

export const PDD_AD_API_KEYWORD_DELETE_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
    callSourceType: 0,
  },
];

/**
 * 接口名称：批量删除关键词
 * 接口标识：pdd.ad.api.keyword.delete
 * 接口使用场景：批量删除关键词
 **/
export interface PddAdApiKeywordDeleteRequestInterface {
  /**
   * @description: 广告单元Id
   * @type: string | number
   * @default:
   **/
  adId: string | number;

  /**
   * @description: 关键词Id列表
   * @type: Array<string | number>
   * @default:
   **/
  keywordIds: Array<string | number>;
}

/**
 * 接口名称：批量删除关键词
 * 接口标识：pdd.ad.api.keyword.delete
 * 接口使用场景：批量删除关键词
 **/
export interface PddAdApiKeywordDeleteResponseInterface {
  /**
   * @description:
   * @type: PddAdApiKeywordDeleteResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiKeywordDeleteResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiKeywordDeleteResponseResponseInterface {
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
   * @description: 是否删除成功
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
