export const PDD_SMS_REMAIN_DETAIL_QUERY = 'pdd.sms.remain.detail.query';
export const PDD_SMS_REMAIN_DETAIL_QUERY_RESPONSE_KEY = 'sms_remain_detail_query_response';

/**
 * 接口名称：查询余量
 * 接口标识：pdd.sms.remain.detail.query
 * 接口使用场景：查询余量
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddSmsRemainDetailQueryRequestInterface {}

/**
 * 接口名称：查询余量
 * 接口标识：pdd.sms.remain.detail.query
 * 接口使用场景：查询余量
 **/
export interface PddSmsRemainDetailQueryResponseInterface {
  /**
   * @description: response
   * @type: PddSmsRemainDetailQuerySmsRemainDetailQueryResponseResponseInterface
   * @default:
   *
   **/
  sms_remain_detail_query_response: PddSmsRemainDetailQuerySmsRemainDetailQueryResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddSmsRemainDetailQuerySmsRemainDetailQueryResponseResponseInterface {
  /**
   * @description: 剩余金额
   * @type: string | number
   * @default:
   **/
  remain_money: string | number;

  /**
   * @description: 剩余数量
   * @type: string | number
   * @default:
   **/
  remain_number: string | number;
}
