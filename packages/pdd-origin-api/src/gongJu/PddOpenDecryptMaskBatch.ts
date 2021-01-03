export const PDD_OPEN_DECRYPT_MASK_BATCH = 'pdd.open.decrypt.mask.batch';
export const PDD_OPEN_DECRYPT_MASK_BATCH_RESPONSE_KEY = 'open_decrypt_mask_batch_response';
export const PDD_OPEN_DECRYPT_MASK_BATCH_LIMITERS = [
  {
    limiterLevel: 4,
    timeRange: 10,
    times: 15000,
  },
  {
    limiterLevel: 3,
    timeRange: 10,
    times: 60000,
  },
];

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
   * @type: PddOpenDecryptMaskBatchOpenDecryptMaskBatchResponseResponseInterface
   * @default:
   *
   **/
  open_decrypt_mask_batch_response: PddOpenDecryptMaskBatchOpenDecryptMaskBatchResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddOpenDecryptMaskBatchOpenDecryptMaskBatchResponseResponseInterface {
  /**
   * @description: list
   * @type: PddOpenDecryptMaskBatchOpenDecryptMaskBatchResponseDataDecryptListResponseInterface[]
   * @default:
   *
   **/
  data_decrypt_list: PddOpenDecryptMaskBatchOpenDecryptMaskBatchResponseDataDecryptListResponseInterface[];
}

/**
 * @description list
 * @default
 * @example
 **/
export interface PddOpenDecryptMaskBatchOpenDecryptMaskBatchResponseDataDecryptListResponseInterface {
  /**
   * @description: 解密tag，对于订单数据是订单号
   * @type: string
   * @default:
   **/
  data_tag: string;

  /**
   * @description: 1、虚拟卡密;2、虚拟卡号;3、支付商品编码;4、支付单号;5、收件人;6、收件人手机号;7、收件人完整地址;8、收件人详细地址;9、快递单号;10、身份证号;11、身份证姓名
   * @type: number
   * @default:
   **/
  data_type: number;

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
