export const PDD_OPEN_DECRYPT_MASK_BATCH = 'pdd.open.decrypt.mask.batch';
export const PDD_OPEN_DECRYPT_MASK_BATCH_RESPONSE_KEY = 'open_kms_decrypt_batch_response';

/**
 * 接口名称：批量数据解密脱敏接口
 * 接口标识：pdd.open.decrypt.mask.batch
 * 接口使用场景：批量数据解密脱敏
 **/
export interface PddOpenDecryptMaskBatchRequestInterface {
  /**
   * @description: 数据列表, 默认列表大小不超过100
   * @type: PddOpenDecryptMaskBatchDataListRequestInterface[]
   * @default:
   *
   **/
  data_list: PddOpenDecryptMaskBatchDataListRequestInterface[];
}

/**
 * @description 数据列表, 默认列表大小不超过100
 * @default
 * @example
 **/
export interface PddOpenDecryptMaskBatchDataListRequestInterface {
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
 * 接口名称：批量数据解密脱敏接口
 * 接口标识：pdd.open.decrypt.mask.batch
 * 接口使用场景：批量数据解密脱敏
 **/
export interface PddOpenDecryptMaskBatchResponseInterface {
  /**
   * @description: response
   * @type: PddOpenDecryptMaskBatchOpenKmsDecryptBatchResponseResponseInterface
   * @default:
   *
   **/
  open_kms_decrypt_batch_response: PddOpenDecryptMaskBatchOpenKmsDecryptBatchResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddOpenDecryptMaskBatchOpenKmsDecryptBatchResponseResponseInterface {
  /**
   * @description: list
   * @type: PddOpenDecryptMaskBatchOpenKmsDecryptBatchResponseDataDecryptListResponseInterface[]
   * @default:
   *
   **/
  data_decrypt_list: PddOpenDecryptMaskBatchOpenKmsDecryptBatchResponseDataDecryptListResponseInterface[];
}

/**
 * @description list
 * @default
 * @example
 **/
export interface PddOpenDecryptMaskBatchOpenKmsDecryptBatchResponseDataDecryptListResponseInterface {
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
