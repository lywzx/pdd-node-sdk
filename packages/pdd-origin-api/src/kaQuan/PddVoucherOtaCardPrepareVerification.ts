export const PDD_VOUCHER_OTA_CARD_PREPARE_VERIFICATION = 'pdd.voucher.ota.card.prepare.verification';

/**
 * 接口名称：平台卡密核销验券
 * 接口标识：pdd.voucher.ota.card.prepare.verification
 * 接口使用场景：查询平台生成卡密对应的卡券信息、商品信息和订单信息
 **/
export interface PddVoucherOtaCardPrepareVerificationRequestInterface {
  /**
   * @description: 请求体
   * @type: PddVoucherOtaCardPrepareVerificationRequestRequestInterface
   * @default:
   *
   **/
  request: PddVoucherOtaCardPrepareVerificationRequestRequestInterface;
}

/**
 * @description 请求体
 * @default
 * @example
 **/
export interface PddVoucherOtaCardPrepareVerificationRequestRequestInterface {
  /**
   * @description: 卡密
   * @type: string
   * @default:
   **/
  card_no: string;

  /**
   * @description: 门店id
   * @type: string | number
   * @default:
   **/
  store_id?: string | number;
}

/**
 * 接口名称：平台卡密核销验券
 * 接口标识：pdd.voucher.ota.card.prepare.verification
 * 接口使用场景：查询平台生成卡密对应的卡券信息、商品信息和订单信息
 **/
export interface PddVoucherOtaCardPrepareVerificationResponseInterface {
  /**
   * @description: 响应体
   * @type: PddVoucherOtaCardPrepareVerificationResponseResponseInterface
   * @default:
   *
   **/
  response: PddVoucherOtaCardPrepareVerificationResponseResponseInterface;
}

/**
 * @description 响应体
 * @default
 * @example
 **/
export interface PddVoucherOtaCardPrepareVerificationResponseResponseInterface {
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
   * @description: 卡密和订单信息
   * @type: PddVoucherOtaCardPrepareVerificationResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddVoucherOtaCardPrepareVerificationResponseResultResponseInterface;

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  success: boolean;
}

/**
 * @description 卡密和订单信息
 * @default
 * @example
 **/
export interface PddVoucherOtaCardPrepareVerificationResponseResultResponseInterface {
  /**
   * @description: 卡券信息
   * @type: PddVoucherOtaCardPrepareVerificationResponseResultCardVoResponseInterface
   * @default:
   *
   **/
  card_vo: PddVoucherOtaCardPrepareVerificationResponseResultCardVoResponseInterface;

  /**
   * @description: 商品信息
   * @type: PddVoucherOtaCardPrepareVerificationResponseResultOrderGoodsVoResponseInterface
   * @default:
   *
   **/
  order_goods_vo: PddVoucherOtaCardPrepareVerificationResponseResultOrderGoodsVoResponseInterface;

  /**
   * @description: 订单信息
   * @type: PddVoucherOtaCardPrepareVerificationResponseResultOrderVoResponseInterface
   * @default:
   *
   **/
  order_vo: PddVoucherOtaCardPrepareVerificationResponseResultOrderVoResponseInterface;
}

/**
 * @description 卡券信息
 * @default
 * @example
 **/
export interface PddVoucherOtaCardPrepareVerificationResponseResultCardVoResponseInterface {
  /**
   * @description: 卡券有效期结束时间，单位秒
   * @type: string | number
   * @default:
   **/
  available_end_time: string | number;

  /**
   * @description: 卡券有效期开始时间，单位秒
   * @type: string | number
   * @default:
   **/
  available_start_time: string | number;

  /**
   * @description: 打码卡密
   * @type: string
   * @default:
   **/
  mask_card_no: string;

  /**
   * @description: 剩余可用次数
   * @type: number
   * @default:
   **/
  remain_times: number;

  /**
   * @description: 券状态码。1-未核销，2-已核销， 3-已过期，4-已销毁
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 状态文案
   * @type: string
   * @default:
   **/
  status_tips: string;

  /**
   * @description: 总次数
   * @type: number
   * @default:
   **/
  total_times: number;
}

/**
 * @description 商品信息
 * @default
 * @example
 **/
export interface PddVoucherOtaCardPrepareVerificationResponseResultOrderGoodsVoResponseInterface {
  /**
   * @description: 商品标题
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 购买商品数
   * @type: number
   * @default:
   **/
  goods_number: number;

  /**
   * @description: 外部商品编码
   * @type: string
   * @default:
   **/
  out_goods_sn: string;

  /**
   * @description: 外部sku编码
   * @type: string
   * @default:
   **/
  out_sku_sn: string;

  /**
   * @description: 规格
   * @type: string
   * @default:
   **/
  spec: string;
}

/**
 * @description 订单信息
 * @default
 * @example
 **/
export interface PddVoucherOtaCardPrepareVerificationResponseResultOrderVoResponseInterface {
  /**
   * @description: 用户实付金额
   * @type: string | number
   * @default:
   **/
  order_amount_fen: string | number;

  /**
   * @description: 订单编号
   * @type: string
   * @default:
   **/
  order_sn: string;
}
