export const PDD_TRACE_SOURCE_UPLOAD_CODE_INFO = 'pdd.trace.source.upload.code.info';

/**
 * 接口名称：溯源服务商上传溯源码信息
 * 接口标识：pdd.trace.source.upload.code.info
 * 接口使用场景：溯源服务商上传溯源码信息
 **/
export interface PddTraceSourceUploadCodeInfoRequestInterface {
  /**
   * @description: 溯源码列表
   * @type: PddTraceSourceUploadCodeInfoSerialNumListRequestInterface[]
   * @default:
   *
   **/
  serial_num_list: PddTraceSourceUploadCodeInfoSerialNumListRequestInterface[];
}

/**
 * @description 溯源码列表
 * @default
 * @example
 **/
export interface PddTraceSourceUploadCodeInfoSerialNumListRequestInterface {
  /**
   * @description: 溯源码（处理后）
   * @type: string
   * @default:
   **/
  encoded_serial_num: string;

  /**
   * @description: 溯源码
   * @type: string
   * @default:
   **/
  serial_num: string;
}

/**
 * 接口名称：溯源服务商上传溯源码信息
 * 接口标识：pdd.trace.source.upload.code.info
 * 接口使用场景：溯源服务商上传溯源码信息
 **/
export interface PddTraceSourceUploadCodeInfoResponseInterface {
  /**
   * @description: 1成功，0失败
   * @type: number
   * @default:
   **/
  status: number;
}
