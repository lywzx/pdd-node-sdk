export const PDD_DDK_CASHGIFT_STATUS_UPDATE = 'pdd.ddk.cashgift.status.update';
export const PDD_DDK_CASHGIFT_STATUS_UPDATE_RESPONSE_KEY = 'update_cashgift_response';

/**
 * 接口名称：多多礼金状态更新
 * 接口标识：pdd.ddk.cashgift.status.update
 * 接口使用场景：多多客暂停或恢复多多礼金推广
 **/
export interface PddDdkCashgiftStatusUpdateRequestInterface {
  /**
   * @description: 多多礼金ID
   * @type: string | number
   * @default:
   **/
  cash_gift_id: string | number;

  /**
   * @description: 礼金更新类型：0-停止礼金推广，1-恢复礼金推广
   * @type: number
   * @default:
   **/
  update_type: number;
}

/**
 * 接口名称：多多礼金状态更新
 * 接口标识：pdd.ddk.cashgift.status.update
 * 接口使用场景：多多客暂停或恢复多多礼金推广
 **/
export interface PddDdkCashgiftStatusUpdateResponseInterface {
  /**
   * @description: response
   * @type: PddDdkCashgiftStatusUpdateUpdateCashgiftResponseResponseInterface
   * @default:
   *
   **/
  update_cashgift_response: PddDdkCashgiftStatusUpdateUpdateCashgiftResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddDdkCashgiftStatusUpdateUpdateCashgiftResponseResponseInterface {
  /**
   * @description: 多多礼金ID
   * @type: string | number
   * @default:
   **/
  cash_gift_id: string | number;
}
