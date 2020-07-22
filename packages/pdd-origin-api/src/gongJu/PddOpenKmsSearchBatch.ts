export const PDD_OPEN_KMS_SEARCH_BATCH = 'pdd.open.kms.search.batch';
export const PDD_OPEN_KMS_SEARCH_BATCH_RESPONSE_KEY = 'open_kms_search_batch_response';

/**
 * 接口名称：获取搜索索引
 * 接口标识：pdd.open.kms.search.batch
 * 接口使用场景：获取搜索索引
 **/
export interface PddOpenKmsSearchBatchRequestInterface {
  /**
   * @description: 数据列表, 列表大小不超过100
   * @type: PddOpenKmsSearchBatchInputListRequestInterface[]
   * @default:
   *
   **/
  input_list: PddOpenKmsSearchBatchInputListRequestInterface[];
}

/**
 * @description 数据列表, 列表大小不超过100
 * @default
 * @example
 **/
export interface PddOpenKmsSearchBatchInputListRequestInterface {
  /**
   * @description: 搜索内容
   * @type: string
   * @default:
   **/
  input: string;

  /**
   * @description: 敏感信息类型. id: 身份证号, phone: 手机号码, simple: 昵称, 地址等
   * @type: string
   * @default:
   **/
  type: string;
}

/**
 * 接口名称：获取搜索索引
 * 接口标识：pdd.open.kms.search.batch
 * 接口使用场景：获取搜索索引
 **/
export interface PddOpenKmsSearchBatchResponseInterface {
  /**
   * @description: response
   * @type: PddOpenKmsSearchBatchOpenKmsSearchBatchResponseResponseInterface
   * @default:
   *
   **/
  open_kms_search_batch_response: PddOpenKmsSearchBatchOpenKmsSearchBatchResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddOpenKmsSearchBatchOpenKmsSearchBatchResponseResponseInterface {
  /**
   * @description: list
   * @type: PddOpenKmsSearchBatchOpenKmsSearchBatchResponseSearchTextListResponseInterface[]
   * @default:
   *
   **/
  search_text_list: PddOpenKmsSearchBatchOpenKmsSearchBatchResponseSearchTextListResponseInterface[];
}

/**
 * @description list
 * @default
 * @example
 **/
export interface PddOpenKmsSearchBatchOpenKmsSearchBatchResponseSearchTextListResponseInterface {
  /**
   * @description: search_text
   * @type: string
   * @default:
   **/
  search_text: string;

  /**
   * @description: success
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
