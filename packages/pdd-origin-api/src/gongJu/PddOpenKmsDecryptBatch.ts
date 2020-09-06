export const PDD_OPEN_KMS_DECRYPT_BATCH = 'pdd.open.kms.decrypt.batch';
export const PDD_OPEN_KMS_DECRYPT_BATCH_RESPONSE_KEY = 'open_kms_decrypt_batch_response';

/**
 * 接口名称：批量解密
 * 接口标识：pdd.open.kms.decrypt.batch
 * 接口使用场景：批量解密
 **/
export interface PddOpenKmsDecryptBatchRequestInterface {
  /**
   * @description: 数据列表, 默认列表大小不超过100
   * @type: string[]
   * @default:
   **/
  data_list: string[];
}

/**
 * 接口名称：批量解密
 * 接口标识：pdd.open.kms.decrypt.batch
 * 接口使用场景：批量解密
 **/
export interface PddOpenKmsDecryptBatchResponseInterface {
  /**
   * @description: response
   * @type: PddOpenKmsDecryptBatchOpenKmsDecryptBatchResponseResponseInterface
   * @default:
   *
   **/
  open_kms_decrypt_batch_response: PddOpenKmsDecryptBatchOpenKmsDecryptBatchResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddOpenKmsDecryptBatchOpenKmsDecryptBatchResponseResponseInterface {
  /**
   * @description: list
   * @type: PddOpenKmsDecryptBatchOpenKmsDecryptBatchResponseDataDecryptListResponseInterface[]
   * @default:
   *
   **/
  data_decrypt_list: PddOpenKmsDecryptBatchOpenKmsDecryptBatchResponseDataDecryptListResponseInterface[];
}

/**
 * @description list
 * @default
 * @example
 **/
export interface PddOpenKmsDecryptBatchOpenKmsDecryptBatchResponseDataDecryptListResponseInterface {
  /**
   * @description: 解密结果
   * @type: string
   * @default:
   **/
  data_decrypt: string;

  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
