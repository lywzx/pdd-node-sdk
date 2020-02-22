export const PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION = 'PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION';

/**
 * 接口名称：卡券（电子）核销接口
 * 接口标识：pdd.voucher.virtual.card.verification
 * 接口使用场景：卡券（电子）核销接口
 **/

export interface PddVoucherVirtualCardVerificationRequestInterface {
  /**
   * @description: 拼多多订单号
   * @type: string
   * @default:
   **/
  order_sn?: string;

  /**
   * @description: 券信息列表
   * @type: PddVoucherVirtualCardVerificationVoucherDataListRequestInterface[]
   * @default:
   *
   **/
  voucher_data_list?: PddVoucherVirtualCardVerificationVoucherDataListRequestInterface[];
}

/**
 * @description 券信息列表
 * @default
 * @example
 **/

export interface PddVoucherVirtualCardVerificationVoucherDataListRequestInterface {
  /**
   * @description: 流水号
   * @type: string
   * @default:
   **/
  out_trans_no?: string;

  /**
   * @description: 券状态更改时间
   * @type: string
   * @default:
   **/
  voucher_time?: string;

  /**
   * @description: 券状态 1：已核销；2：已销毁
   * @type: number
   * @default:
   **/
  voucher_status?: number;

  /**
   * @description: 券号
   * @type: string
   * @default:
   **/
  voucher_no?: string;
}

/**
 * 接口名称：卡券（电子）核销接口
 * 接口标识：pdd.voucher.virtual.card.verification
 * 接口使用场景：卡券（电子）核销接口
 **/

export interface PddVoucherVirtualCardVerificationResponseInterface {
  /**
   * @description: response
   * @type: PddVoucherVirtualCardVerificationVoucherVoucherInfoVerifyResponseResponseInterface
   * @default:
   *
   **/
  voucher_voucher_info_verify_response: PddVoucherVirtualCardVerificationVoucherVoucherInfoVerifyResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/

export interface PddVoucherVirtualCardVerificationVoucherVoucherInfoVerifyResponseResponseInterface {
  /**
   * @description: 拼多多订单号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id: string;

  /**
   * @description: 商品属性id
   * @type: string
   * @default:
   **/
  sku_id: string;

  /**
   * @description: 店铺id
   * @type: string
   * @default:
   **/
  mall_id: string;

  /**
   * @description: 券信息数组
   * @type: PddVoucherVirtualCardVerificationVoucherVoucherInfoVerifyResponseVoucherListResponseInterface[]
   * @default:
   *
   **/
  voucher_list: PddVoucherVirtualCardVerificationVoucherVoucherInfoVerifyResponseVoucherListResponseInterface[];
}

/**
 * @description 券信息数组
 * @default
 * @example
 **/

export interface PddVoucherVirtualCardVerificationVoucherVoucherInfoVerifyResponseVoucherListResponseInterface {
  /**
   * @description: 卡号
   * @type: string
   * @default:
   **/
  card_no: string;

  /**
   * @description: 卡密
   * @type: string
   * @default:
   **/
  card_code: string;

  /**
   * @description: 标准密码
   * @type: string
   * @default:
   **/
  mark_password: string;

  /**
   * @description: 状态
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 返回状态
   * @type: number
   * @default:
   **/
  refund_status: number;

  /**
   * @description: 验证处
   * @type: string
   * @default:
   **/
  verification_at: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION]: {
    requestInterface: PddVoucherVirtualCardVerificationRequestInterface;
    responseInterface: PddVoucherVirtualCardVerificationResponseInterface;
  };
}
