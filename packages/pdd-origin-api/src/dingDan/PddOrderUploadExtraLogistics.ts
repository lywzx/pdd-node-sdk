export const PDD_ORDER_UPLOAD_EXTRA_LOGISTICS = 'pdd.order.upload.extra.logistics';
export const PDD_ORDER_UPLOAD_EXTRA_LOGISTICS_RESPONSE_KEY = 'upload_extra_logistics_response';

/**
 * 接口名称：订单额外运单信息上传
 * 接口标识：pdd.order.upload.extra.logistics
 * 接口使用场景：针对一笔订单分多笔物流发货的场景，将支持商家额外上传运单号，额外运单作为补充信息仅用作消费者查看。
 **/
export interface PddOrderUploadExtraLogisticsRequestInterface {
  /**
   * @description: 订单多包裹发货时使用的其他发货快递信息
   * @type: PddOrderUploadExtraLogisticsExtraTrackListRequestInterface[]
   * @default:
   *
   **/
  extra_track_list: PddOrderUploadExtraLogisticsExtraTrackListRequestInterface[];

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
export interface PddOrderUploadExtraLogisticsExtraTrackListRequestInterface {
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
 * 接口名称：订单额外运单信息上传
 * 接口标识：pdd.order.upload.extra.logistics
 * 接口使用场景：针对一笔订单分多笔物流发货的场景，将支持商家额外上传运单号，额外运单作为补充信息仅用作消费者查看。
 **/
export interface PddOrderUploadExtraLogisticsResponseInterface {
  /**
   * @description:
   * @type: PddOrderUploadExtraLogisticsUploadExtraLogisticsResponseResponseInterface
   * @default:
   *
   **/
  upload_extra_logistics_response: PddOrderUploadExtraLogisticsUploadExtraLogisticsResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddOrderUploadExtraLogisticsUploadExtraLogisticsResponseResponseInterface {
  /**
   * @description: 是否成功，false-失败，true-成功
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
