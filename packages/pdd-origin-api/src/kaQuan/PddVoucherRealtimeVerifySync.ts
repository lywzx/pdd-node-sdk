export const PDD_VOUCHER_REALTIME_VERIFY_SYNC = 'pdd.voucher.realtime.verify.sync';

/**
 * 接口名称：卡券API核销券码
 * 接口标识：pdd.voucher.realtime.verify.sync
 * 接口使用场景：用户使用券码时，商家需要实时给PDD侧回传券码核销结果
 **/
export interface PddVoucherRealtimeVerifySyncRequestInterface {
  /**
   * @description: 请求入参
   * @type: PddVoucherRealtimeVerifySyncRequestRequestInterface
   * @default:
   *
   **/
  request: PddVoucherRealtimeVerifySyncRequestRequestInterface;
}

/**
 * @description 请求入参
 * @default
 * @example
 **/
export interface PddVoucherRealtimeVerifySyncRequestRequestInterface {
  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 备注
   * @type: string
   * @default:
   **/
  remark?: string;

  /**
   * @description: ISV核销流水号
   * @type: string
   * @default:
   **/
  serial_no: string;

  /**
   * @description: 门店名称
   * @type: string
   * @default:
   **/
  shop_name?: string;

  /**
   * @description: 门店编号
   * @type: string
   * @default:
   **/
  shop_no?: string;

  /**
   * @description: 卡券核销时间（13 位毫秒）
   * @type: string | number
   * @default:
   **/
  verify_time: string | number;

  /**
   * @description: 卡券编号
   * @type: string
   * @default:
   **/
  out_voucher_id: string;
}

/**
 * 接口名称：卡券API核销券码
 * 接口标识：pdd.voucher.realtime.verify.sync
 * 接口使用场景：用户使用券码时，商家需要实时给PDD侧回传券码核销结果
 **/
export interface PddVoucherRealtimeVerifySyncResponseInterface {
  /**
   * @description: 错误码
   * @type: number
   * @default:
   **/
  code: number;

  /**
   * @description: 错误描述
   * @type: string
   * @default:
   **/
  message: string;
}
