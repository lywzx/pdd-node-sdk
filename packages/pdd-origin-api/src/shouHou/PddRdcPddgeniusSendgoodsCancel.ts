export const PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL = 'pdd.rdc.pddgenius.sendgoods.cancel';
export const PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL_RESPONSE_KEY = 'rdc_pddgenius_sendgoods_cancel_response';
export const PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 1,
    times: 1200,
    callSourceType: 0,
  },
];

/**
 * 接口名称：取消发货
 * 接口标识：pdd.rdc.pddgenius.sendgoods.cancel
 * 接口使用场景：用于未发货仅退款服务商通知拼多多PG取消成功
 **/
export interface PddRdcPddgeniusSendgoodsCancelRequestInterface {
  /**
   * @description: param
   * @type: PddRdcPddgeniusSendgoodsCancelParamRequestInterface
   * @default:
   *
   **/
  param: PddRdcPddgeniusSendgoodsCancelParamRequestInterface;
}

/**
 * @description param
 * @default
 * @example
 **/
export interface PddRdcPddgeniusSendgoodsCancelParamRequestInterface {
  /**
   * @description: 错误码：1001 错误场景：该订单未同步，无法取消发货 实际含义：订单未同步到isv; 错误码：1002 错误场景：该订单已发货，无法取消发货 实际含义：订单已经发货; 错误码：1003 错误场景：该订单已发货，无法取消发货 实际含义：订单已打印电子面单
   * @type: number
   * @default:
   **/
  fail_reason_code?: number;

  /**
   * @description: 描述
   * @type: string
   * @default:
   **/
  msg?: string;

  /**
   * @description: 操作时间戳（毫秒）
   * @type: string | number
   * @default:
   **/
  operate_time?: string | number;

  /**
   * @description: 退款金额 单位 分
   * @type: number
   * @default:
   **/
  refund_fee?: number;

  /**
   * @description: 退款单ID
   * @type: string | number
   * @default:
   **/
  refund_id: string | number;

  /**
   * @description: 状态SUCCESS、FAIL
   * @type: string
   * @default:
   **/
  status: string;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  tid: string;
}

/**
 * 接口名称：取消发货
 * 接口标识：pdd.rdc.pddgenius.sendgoods.cancel
 * 接口使用场景：用于未发货仅退款服务商通知拼多多PG取消成功
 **/
export interface PddRdcPddgeniusSendgoodsCancelResponseInterface {
  /**
   * @description: response
   * @type: PddRdcPddgeniusSendgoodsCancelRdcPddgeniusSendgoodsCancelResponseResponseInterface
   * @default:
   *
   **/
  rdc_pddgenius_sendgoods_cancel_response: PddRdcPddgeniusSendgoodsCancelRdcPddgeniusSendgoodsCancelResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddRdcPddgeniusSendgoodsCancelRdcPddgeniusSendgoodsCancelResponseResponseInterface {
  /**
   * @description: result
   * @type: PddRdcPddgeniusSendgoodsCancelRdcPddgeniusSendgoodsCancelResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddRdcPddgeniusSendgoodsCancelRdcPddgeniusSendgoodsCancelResponseResultResponseInterface;
}

/**
 * @description result
 * @default
 * @example
 **/
export interface PddRdcPddgeniusSendgoodsCancelRdcPddgeniusSendgoodsCancelResponseResultResponseInterface {
  /**
   * @description: result_data
   * @type: PddRdcPddgeniusSendgoodsCancelRdcPddgeniusSendgoodsCancelResponseResultResultDataResponseInterface
   * @default:
   *
   **/
  result_data: PddRdcPddgeniusSendgoodsCancelRdcPddgeniusSendgoodsCancelResponseResultResultDataResponseInterface;
}

/**
 * @description result_data
 * @default
 * @example
 **/
export interface PddRdcPddgeniusSendgoodsCancelRdcPddgeniusSendgoodsCancelResponseResultResultDataResponseInterface {
  /**
   * @description: 退款单ID
   * @type: string | number
   * @default:
   **/
  refund_id: string | number;
}
