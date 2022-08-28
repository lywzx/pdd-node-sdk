export const PDD_LOGISTICS_TICKET_IMAGE_UPLOAD = 'pdd.logistics.ticket.image.upload';
export const PDD_LOGISTICS_TICKET_IMAGE_UPLOAD_RESPONSE_KEY = 'logistics_ticket_image_upload_response';
export const PDD_LOGISTICS_TICKET_IMAGE_UPLOAD_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 60,
    times: 3000,
    callSourceType: 0,
  },
];

/**
 * 接口名称：工单图片上传接口
 * 接口标识：pdd.logistics.ticket.image.upload
 * 接口使用场景：快递公司处理结果回调接口 附件图片url生成
 **/
export interface PddLogisticsTicketImageUploadRequestInterface {
  /**
   * @description: 支持格式有：jpg/jpeg、png等图片格式，入参为图片的base64编码，最大支持1M
   * @type: string
   * @default:
   **/
  image: string;
}

/**
 * 接口名称：工单图片上传接口
 * 接口标识：pdd.logistics.ticket.image.upload
 * 接口使用场景：快递公司处理结果回调接口 附件图片url生成
 **/
export interface PddLogisticsTicketImageUploadResponseInterface {
  /**
   * @description: 返回response
   * @type: PddLogisticsTicketImageUploadLogisticsTicketImageUploadResponseResponseInterface
   * @default:
   *
   **/
  logistics_ticket_image_upload_response: PddLogisticsTicketImageUploadLogisticsTicketImageUploadResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/
export interface PddLogisticsTicketImageUploadLogisticsTicketImageUploadResponseResponseInterface {
  /**
   * @description: 图片url
   * @type: string
   * @default:
   **/
  image_url: string;
}
