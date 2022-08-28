export const PDD_VOUCHER_REALTIME_ORDERNO_GET = 'pdd.voucher.realtime.orderno.get';

export const PDD_VOUCHER_REALTIME_ORDERNO_GET_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 86400,
    times: 1000,
    callSourceType: 0,
  },
];

/**
 * 接口名称：实时卡券查询外部订单号
 * 接口标识：pdd.voucher.realtime.orderno.get
 * 接口使用场景：商家需要查询卡券制码的信息
 **/
export interface PddVoucherRealtimeOrdernoGetRequestInterface {
  /**
   * @description: 请求体
   * @type: PddVoucherRealtimeOrdernoGetDataRequestInterface
   * @default:
   *
   **/
  data?: PddVoucherRealtimeOrdernoGetDataRequestInterface;
}

/**
 * @description 请求体
 * @default
 * @example
 **/
export interface PddVoucherRealtimeOrdernoGetDataRequestInterface {
  /**
   * @description: 拼多多订单号
   * @type: string
   * @default:
   **/
  order_sn: string;
}

/**
 * 接口名称：实时卡券查询外部订单号
 * 接口标识：pdd.voucher.realtime.orderno.get
 * 接口使用场景：商家需要查询卡券制码的信息
 **/
export interface PddVoucherRealtimeOrdernoGetResponseInterface {
  /**
   * @description:
   * @type: PddVoucherRealtimeOrdernoGetResponseResponseInterface
   * @default:
   *
   **/
  response: PddVoucherRealtimeOrdernoGetResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddVoucherRealtimeOrdernoGetResponseResponseInterface {
  /**
   * @description:
   * @type: number
   * @default:
   **/
  code: number;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  message: string;

  /**
   * @description:
   * @type: PddVoucherRealtimeOrdernoGetResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddVoucherRealtimeOrdernoGetResponseResultResponseInterface[];
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddVoucherRealtimeOrdernoGetResponseResultResponseInterface {
  /**
   * @description: 外部订单号
   * @type: string
   * @default:
   **/
  external_order_no: string;

  /**
   * @description: 总可核销次数
   * @type: number
   * @default:
   **/
  total_times: number;

  /**
   * @description:
   * @type: PddVoucherRealtimeOrdernoGetResponseResultVerifyListResponseInterface[]
   * @default:
   *
   **/
  verify_list: PddVoucherRealtimeOrdernoGetResponseResultVerifyListResponseInterface[];
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddVoucherRealtimeOrdernoGetResponseResultVerifyListResponseInterface {
  /**
   * @description: 核销流水号
   * @type: string
   * @default:
   **/
  verify_serial_no: string;

  /**
   * @description: 核销时间，13位时间戳
   * @type: string | number
   * @default:
   **/
  verify_time: string | number;

  /**
   * @description: 核销次数
   * @type: number
   * @default:
   **/
  verify_times: number;
}
