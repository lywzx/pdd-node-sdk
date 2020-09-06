export const PDD_OPEN_KMS_ENCRYPT_BATCH = 'pdd.open.kms.encrypt.batch';
export const PDD_OPEN_KMS_ENCRYPT_BATCH_RESPONSE_KEY = 'open_kms_encrypt_batch_response';

/**
 * 接口名称：批量加密
 * 接口标识：pdd.open.kms.encrypt.batch
 * 接口使用场景：批量加密
 **/
export interface PddOpenKmsEncryptBatchRequestInterface {
  /**
   * @description: 要加密的数据列表, 列表大小不超过100
   * @type: PddOpenKmsEncryptBatchDataListRequestInterface[]
   * @default:
   *
   **/
  data_list: PddOpenKmsEncryptBatchDataListRequestInterface[];
}

/**
 * @description 要加密的数据列表, 列表大小不超过100
 * @default
 * @example
 **/
export interface PddOpenKmsEncryptBatchDataListRequestInterface {
  /**
   * @description: 明文数据
   * @type: string
   * @default:
   **/
  data: string;

  /**
   * @description: 是否支持搜索
   * @type: boolean
   * @default: true
   **/
  search: boolean;

  /**
   * @description: 敏感信息类型. id: 身份证号, phone: 手机号码, simple: 昵称, 地址等
   * @type: string
   * @default:
   **/
  type: string;
}

/**
 * 接口名称：批量加密
 * 接口标识：pdd.open.kms.encrypt.batch
 * 接口使用场景：批量加密
 **/
export interface PddOpenKmsEncryptBatchResponseInterface {
  /**
   * @description: response
   * @type: PddOpenKmsEncryptBatchOpenKmsEncryptBatchResponseResponseInterface
   * @default:
   *
   **/
  open_kms_encrypt_batch_response: PddOpenKmsEncryptBatchOpenKmsEncryptBatchResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddOpenKmsEncryptBatchOpenKmsEncryptBatchResponseResponseInterface {
  /**
   * @description: list
   * @type: PddOpenKmsEncryptBatchOpenKmsEncryptBatchResponseDataEncryptListResponseInterface[]
   * @default:
   *
   **/
  data_encrypt_list: PddOpenKmsEncryptBatchOpenKmsEncryptBatchResponseDataEncryptListResponseInterface[];
}

/**
 * @description list
 * @default
 * @example
 **/
export interface PddOpenKmsEncryptBatchOpenKmsEncryptBatchResponseDataEncryptListResponseInterface {
  /**
   * @description: 加密结果
   * @type: string
   * @default:
   **/
  data_encrypt: string;

  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  success: boolean;

  /**
   * @description: 明文数据
   * @type: string
   * @default:
   **/
  data: string;

  /**
   * @description: 是否支持搜索
   * @type: boolean
   * @default:
   **/
  search: boolean;

  /**
   * @description: 敏感信息类型. id: 身份证号, phone: 手机号码, simple: 昵称, 地址等
   * @type: string
   * @default:
   **/
  type: string;
}
