export const PDD_AD_API_KEYWORD_CREATE = 'pdd.ad.api.keyword.create';

export const PDD_AD_API_KEYWORD_CREATE_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
  },
];

/**
 * 接口名称：批量创建关键词
 * 接口标识：pdd.ad.api.keyword.create
 * 接口使用场景：批量创建关键词
 **/
export interface PddAdApiKeywordCreateRequestInterface {
  /**
   * @description: 广告单元Id
   * @type: string | number
   * @default:
   **/
  adId: string | number;

  /**
   * @description: 关键词创建信息列表
   * @type: PddAdApiKeywordCreateKeywordListRequestInterface[]
   * @default:
   *
   **/
  keywordList: PddAdApiKeywordCreateKeywordListRequestInterface[];
}

/**
 * @description 关键词创建信息列表
 * @default
 * @example
 **/
export interface PddAdApiKeywordCreateKeywordListRequestInterface {
  /**
   * @description: 关键词出价
   * @type: string | number
   * @default:
   **/
  bid: string | number;

  /**
   * @description: 关键词溢价比例。万分比。
   * @type: string | number
   * @default:
   **/
  premiumRate?: string | number;

  /**
   * @description: 关键词
   * @type: string
   * @default:
   **/
  word: string;
}

/**
 * 接口名称：批量创建关键词
 * 接口标识：pdd.ad.api.keyword.create
 * 接口使用场景：批量创建关键词
 **/
export interface PddAdApiKeywordCreateResponseInterface {
  /**
   * @description:
   * @type: PddAdApiKeywordCreateResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiKeywordCreateResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiKeywordCreateResponseResponseInterface {
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
   * @description: 是否创建成功
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
