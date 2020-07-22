export const PDD_MALL_CPS_PROTOCOL_STATUS_QUERY = 'pdd.mall.cps.protocol.status.query';
export const PDD_MALL_CPS_PROTOCOL_STATUS_QUERY_RESPONSE_KEY = 'mall_cps_protocol_status_query_response';

/**
 * 接口名称：查询店铺是否签署多多进宝协议接口
 * 接口标识：pdd.mall.cps.protocol.status.query
 * 接口使用场景：查询店铺是否签署多多进宝协议接口
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddMallCpsProtocolStatusQueryRequestInterface {}

/**
 * 接口名称：查询店铺是否签署多多进宝协议接口
 * 接口标识：pdd.mall.cps.protocol.status.query
 * 接口使用场景：查询店铺是否签署多多进宝协议接口
 **/
export interface PddMallCpsProtocolStatusQueryResponseInterface {
  /**
   * @description: mall_cps_protocol_status_query_response
   * @type: PddMallCpsProtocolStatusQueryMallCpsProtocolStatusQueryResponseResponseInterface
   * @default:
   *
   **/
  mall_cps_protocol_status_query_response: PddMallCpsProtocolStatusQueryMallCpsProtocolStatusQueryResponseResponseInterface;
}

/**
 * @description mall_cps_protocol_status_query_response
 * @default
 * @example
 **/
export interface PddMallCpsProtocolStatusQueryMallCpsProtocolStatusQueryResponseResponseInterface {
  /**
   * @description: 是否签署协议
   * @type: boolean
   * @default:
   **/
  status: boolean;
}
