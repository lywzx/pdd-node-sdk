export const PDD_SMS_REMAIN_DETAIL_QUERY = 'PDD_SMS_REMAIN_DETAIL_QUERY';

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
   * @type: string
   * @default:
   **/
  remain_money: string;

  /**
   * @description: 剩余数量
   * @type: string
   * @default:
   **/
  remain_number: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_SMS_REMAIN_DETAIL_QUERY]: {
    requestInterface: PddSmsRemainDetailQueryRequestInterface;
    responseInterface: PddSmsRemainDetailQueryResponseInterface;
  };
}
