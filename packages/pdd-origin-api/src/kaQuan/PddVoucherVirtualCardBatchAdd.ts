export const PDD_VOUCHER_VIRTUAL_CARD_BATCH_ADD = 'pdd.voucher.virtual.card.batch.add';

/**
 * 接口名称：批量添加卡券
 * 接口标识：pdd.voucher.virtual.card.batch.add
 * 接口使用场景：供应商批量添加卡券
 **/
export interface PddVoucherVirtualCardBatchAddRequestInterface {
  /**
   * @description: 业务数据
   * @type: PddVoucherVirtualCardBatchAddDataRequestInterface
   * @default:
   *
   **/
  data?: PddVoucherVirtualCardBatchAddDataRequestInterface;
}

/**
 * @description 业务数据
 * @default
 * @example
 **/
export interface PddVoucherVirtualCardBatchAddDataRequestInterface {
  /**
   * @description: 充值地址
   * @type: string
   * @default:
   **/
  chargeAddress?: string;

  /**
   * @description: 卡密信息列表，一次请求最多5000条卡密
   * @type: PddVoucherVirtualCardBatchAddDataDataListRequestInterface[]
   * @default:
   *
   **/
  dataList: PddVoucherVirtualCardBatchAddDataDataListRequestInterface[];

  /**
   * @description: 商品Id
   * @type: string | number
   * @default:
   **/
  goodsId: string | number;

  /**
   * @description: skuId
   * @type: string | number
   * @default:
   **/
  skuId: string | number;
}

/**
 * @description 卡密信息列表，一次请求最多5000条卡密
 * @default
 * @example
 **/
export interface PddVoucherVirtualCardBatchAddDataDataListRequestInterface {
  /**
   * @description: 卡密卡号，商家卡密必填
   * @type: string
   * @default:
   **/
  cardNo?: string;

  /**
   * @description: 用户核销卡密加密串，加密所使用public key向对接小二获取（加密算法"RSA"，填充方式"RSA/ECB/PKCS1Padding"）
   * @type: string
   * @default:
   **/
  encryptPassword: string;
}

/**
 * 接口名称：批量添加卡券
 * 接口标识：pdd.voucher.virtual.card.batch.add
 * 接口使用场景：供应商批量添加卡券
 **/
export interface PddVoucherVirtualCardBatchAddResponseInterface {
  /**
   * @description: 响应体
   * @type: PddVoucherVirtualCardBatchAddResponseResponseInterface
   * @default:
   *
   **/
  response: PddVoucherVirtualCardBatchAddResponseResponseInterface;
}

/**
 * @description 响应体
 * @default
 * @example
 **/
export interface PddVoucherVirtualCardBatchAddResponseResponseInterface {
  /**
   * @description: 状态码
   * @type: number
   * @default:
   **/
  code: number;

  /**
   * @description: 错误信息
   * @type: string
   * @default:
   **/
  message: string;

  /**
   * @description: 响应信息
   * @type: PddVoucherVirtualCardBatchAddResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddVoucherVirtualCardBatchAddResponseResultResponseInterface;
}

/**
 * @description 响应信息
 * @default
 * @example
 **/
export interface PddVoucherVirtualCardBatchAddResponseResultResponseInterface {
  /**
   * @description: 卡密批次Id
   * @type: string | number
   * @default:
   **/
  batchId: string | number;

  /**
   * @description: 充值地址
   * @type: string
   * @default:
   **/
  chargeAddress: string;

  /**
   * @description: 店铺Id
   * @type: string | number
   * @default:
   **/
  mallId: string | number;

  /**
   * @description: 批次添加的卡密数量
   * @type: number
   * @default:
   **/
  totalNum: number;
}
