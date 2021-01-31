export const PDD_VOUCHER_OTA_CARD_VERIFICATION = 'pdd.voucher.ota.card.verification';
export const PDD_VOUCHER_OTA_CARD_VERIFICATION_RESPONSE_KEY = 'voucher_ota_card_verification_response';
export const PDD_VOUCHER_OTA_CARD_VERIFICATION_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 3600,
    times: 10000,
  },
];

/**
 * 接口名称：卡券（电子）核销接口（平台生成卡密）
 * 接口标识：pdd.voucher.ota.card.verification
 * 接口使用场景：平台生成卡密类卡券核销
 **/
export interface PddVoucherOtaCardVerificationRequestInterface {
  /**
   * @description: 待核销的券码
   * @type: string
   * @default:
   **/
  card_no: string;

  /**
   * @description: 核销门店id
   * @type: string | number
   * @default:
   **/
  store_id: string | number;

  /**
   * @description: 核销门店名称
   * @type: string
   * @default:
   **/
  store_name: string;

  /**
   * @description: 拼多多订单编号
   * @type: string
   * @default:
   **/
  order_sn?: string;
}

/**
 * 接口名称：卡券（电子）核销接口（平台生成卡密）
 * 接口标识：pdd.voucher.ota.card.verification
 * 接口使用场景：平台生成卡密类卡券核销
 **/
export interface PddVoucherOtaCardVerificationResponseInterface {
  /**
   * @description:
   * @type: PddVoucherOtaCardVerificationVoucherOtaCardVerificationResponseResponseInterface
   * @default:
   *
   **/
  voucher_ota_card_verification_response: PddVoucherOtaCardVerificationVoucherOtaCardVerificationResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddVoucherOtaCardVerificationVoucherOtaCardVerificationResponseResponseInterface {
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
   * @description:
   * @type: PddVoucherOtaCardVerificationVoucherOtaCardVerificationResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddVoucherOtaCardVerificationVoucherOtaCardVerificationResponseResultResponseInterface;

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  success: boolean;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddVoucherOtaCardVerificationVoucherOtaCardVerificationResponseResultResponseInterface {
  /**
   * @description: 券码
   * @type: string
   * @default:
   **/
  card_no: string;

  /**
   * @description: 店铺编码
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 核销状态（1-未核销，2-已核销， 3-已过期，4-已销毁，99-核销中）
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 门店编码
   * @type: string | number
   * @default:
   **/
  store_id: string | number;

  /**
   * @description: 门店名称
   * @type: string
   * @default:
   **/
  store_name: string;

  /**
   * @description: 核销时间（yyyy-MM-dd HH:mm:ss格式）
   * @type: string
   * @default:
   **/
  verification_time: string;
}
