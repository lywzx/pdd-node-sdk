export const PDD_OPEN_DECRYPT_BATCH = 'pdd.open.decrypt.batch';
export const PDD_OPEN_DECRYPT_BATCH_RESPONSE_KEY = 'open_kms_decrypt_batch_response';

/**
 * 接口名称：批量数据解密接口
 * 接口标识：pdd.open.decrypt.batch
 * 接口使用场景：批量数据解密
 **/
export interface PddOpenDecryptBatchRequestInterface {
  /**
   * @description: 数据列表, 默认列表大小不超过100
   * @type: PddOpenDecryptBatchDataListRequestInterface[]
   * @default:
   *
   **/
  data_list: PddOpenDecryptBatchDataListRequestInterface[];
}

/**
 * @description 数据列表, 默认列表大小不超过100
 * @default
 * @example
 **/
export interface PddOpenDecryptBatchDataListRequestInterface {
  /**
   * @description: 解密tag，对于订单数据是订单号
   * @type: string
   * @default:
   **/
  data_tag: string;

  /**
   * @description: 密文
   * @type: string
   * @default:
   **/
  encrypted_data: string;
}

/**
 * 接口名称：批量数据解密接口
 * 接口标识：pdd.open.decrypt.batch
 * 接口使用场景：批量数据解密
 **/
export interface PddOpenDecryptBatchResponseInterface {
  /**
   * @description: response
   * @type: PddOpenDecryptBatchOpenKmsDecryptBatchResponseResponseInterface
   * @default:
   *
   **/
  open_kms_decrypt_batch_response: PddOpenDecryptBatchOpenKmsDecryptBatchResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddOpenDecryptBatchOpenKmsDecryptBatchResponseResponseInterface {
  /**
   * @description: list
   * @type: PddOpenDecryptBatchOpenKmsDecryptBatchResponseDataDecryptListResponseInterface[]
   * @default:
   *
   **/
  data_decrypt_list: PddOpenDecryptBatchOpenKmsDecryptBatchResponseDataDecryptListResponseInterface[];
}

/**
 * @description list
 * @default
 * @example
 **/
export interface PddOpenDecryptBatchOpenKmsDecryptBatchResponseDataDecryptListResponseInterface {
  /**
   * @description: 解密结果
   * @type: string
   * @default:
   **/
  decrypted_data: string;

  /**
   * @description: 加密数据
   * @type: string
   * @default:
   **/
  encrypted_data: string;

  /**
   * @description: 错误码, 0:成功
   * @type: number
   * @default:
   **/
  error_code: number;

  /**
   * @description: 错误信息
   * @type: string
   * @default:
   **/
  error_msg: string;
}
