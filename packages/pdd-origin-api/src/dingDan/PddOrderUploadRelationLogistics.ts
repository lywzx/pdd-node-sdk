export const PDD_ORDER_UPLOAD_RELATION_LOGISTICS = 'pdd.order.upload.relation.logistics';
export const PDD_ORDER_UPLOAD_RELATION_LOGISTICS_RESPONSE_KEY = 'upload_extra_logistics_response';

/**
 * 接口名称：订单关联运单信息上传
 * 接口标识：pdd.order.upload.relation.logistics
 * 接口使用场景：针对一笔订单存在多次发货的场景使用，包括但不仅限于补发，换货，分批次发货，线下手工订单等能够匹配到拼多多平台订单号的场景。商家将关联的发货运单号上传后，将用作提升消费者末端取件体验。
 **/
export interface PddOrderUploadRelationLogisticsRequestInterface {
  /**
   * @description: 订单多包裹发货时使用的其他发货快递信息
   * @type: PddOrderUploadRelationLogisticsExtraTrackListRequestInterface[]
   * @default:
   *
   **/
  extra_track_list: PddOrderUploadRelationLogisticsExtraTrackListRequestInterface[];

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;
}

/**
 * @description 订单多包裹发货时使用的其他发货快递信息
 * @default
 * @example
 **/
export interface PddOrderUploadRelationLogisticsExtraTrackListRequestInterface {
  /**
   * @description: 快递公司id
   * @type: number
   * @default:
   **/
  shipping_id: number;

  /**
   * @description: 快递单号
   * @type: string
   * @default:
   **/
  tracking_number: string;
}

/**
 * 接口名称：订单关联运单信息上传
 * 接口标识：pdd.order.upload.relation.logistics
 * 接口使用场景：针对一笔订单存在多次发货的场景使用，包括但不仅限于补发，换货，分批次发货，线下手工订单等能够匹配到拼多多平台订单号的场景。商家将关联的发货运单号上传后，将用作提升消费者末端取件体验。
 **/
export interface PddOrderUploadRelationLogisticsResponseInterface {
  /**
   * @description:
   * @type: PddOrderUploadRelationLogisticsUploadExtraLogisticsResponseResponseInterface
   * @default:
   *
   **/
  upload_extra_logistics_response: PddOrderUploadRelationLogisticsUploadExtraLogisticsResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddOrderUploadRelationLogisticsUploadExtraLogisticsResponseResponseInterface {
  /**
   * @description: 是否成功，false-失败，true-成功
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
