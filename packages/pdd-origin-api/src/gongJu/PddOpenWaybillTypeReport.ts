export const PDD_OPEN_WAYBILL_TYPE_REPORT = 'pdd.open.waybill.type.report';
export const PDD_OPEN_WAYBILL_TYPE_REPORT_RESPONSE_KEY = 'open_waybill_type_report_response';

/**
 * 接口名称：非拼面单报备接口
 * 接口标识：pdd.open.waybill.type.report
 * 接口使用场景：解密前，需要先报备面单类型。
 **/
export interface PddOpenWaybillTypeReportRequestInterface {
  /**
   * @description: 订单号列表, 默认列表大小不超过100
   * @type: string[]
   * @default:
   **/
  order_sn_list: string[];

  /**
   * @description: 面单类型(0-拼多多面单,1-友商平台面单,2-快递公司面单,99-其他)
   * @type: number
   * @default:
   **/
  waybill_type: number;
}

/**
 * 接口名称：非拼面单报备接口
 * 接口标识：pdd.open.waybill.type.report
 * 接口使用场景：解密前，需要先报备面单类型。
 **/
export interface PddOpenWaybillTypeReportResponseInterface {
  /**
   * @description:
   * @type: PddOpenWaybillTypeReportOpenWaybillTypeReportResponseResponseInterface
   * @default:
   *
   **/
  open_waybill_type_report_response: PddOpenWaybillTypeReportOpenWaybillTypeReportResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddOpenWaybillTypeReportOpenWaybillTypeReportResponseResponseInterface {
  /**
   * @description: 结果列表
   * @type: PddOpenWaybillTypeReportOpenWaybillTypeReportResponseResultListResponseInterface[]
   * @default:
   *
   **/
  result_list: PddOpenWaybillTypeReportOpenWaybillTypeReportResponseResultListResponseInterface[];
}

/**
 * @description 结果列表
 * @default
 * @example
 **/
export interface PddOpenWaybillTypeReportOpenWaybillTypeReportResponseResultListResponseInterface {
  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: true：报备成功，false：报备失败
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
