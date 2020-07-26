export const PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION = 'pdd.voucher.virtual.card.verification';
export const PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION_RESPONSE_KEY = 'voucher_voucher_info_verify_response';
export const PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 60,
    times: 2500,
  },
];

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
  order_sn: string;

  /**
   * @description: 券信息列表
   * @type: PddVoucherVirtualCardVerificationVoucherDataListRequestInterface[]
   * @default:
   *
   **/
  voucher_data_list: PddVoucherVirtualCardVerificationVoucherDataListRequestInterface[];
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
  out_trans_no: string;

  /**
   * @description: 券状态更改时间
   * @type: string | number
   * @default:
   **/
  voucher_time: string | number;

  /**
   * @description: 券状态 1：已核销；2：已销毁
   * @type: number
   * @default:
   **/
  voucher_status: number;

  /**
   * @description: 券号
   * @type: string
   * @default:
   **/
  voucher_no: string;
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
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 商品属性id
   * @type: string | number
   * @default:
   **/
  sku_id: string | number;

  /**
   * @description: 店铺id
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;

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
   * @type: string | number
   * @default:
   **/
  verification_at: string | number;
}
