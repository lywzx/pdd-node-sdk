export const PDD_CLOUDPRINT_PORTABLEPRINTER_GET = 'pdd.cloudprint.portableprinter.get';
export const PDD_CLOUDPRINT_PORTABLEPRINTER_GET_RESPONSE_KEY = 'pdd_cloudprint_portableprinter_get_response';

/**
 * 接口名称：获取所有已支持便携式打印机
 * 接口标识：pdd.cloudprint.portableprinter.get
 * 接口使用场景：获取所有已支持便携式打印机相关信息
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddCloudprintPortableprinterGetRequestInterface {}

/**
 * 接口名称：获取所有已支持便携式打印机
 * 接口标识：pdd.cloudprint.portableprinter.get
 * 接口使用场景：获取所有已支持便携式打印机相关信息
 **/
export interface PddCloudprintPortableprinterGetResponseInterface {
  /**
   * @description:
   * @type: PddCloudprintPortableprinterGetPddCloudprintPortableprinterGetResponseResponseInterface
   * @default:
   *
   **/
  pdd_cloudprint_portableprinter_get_response: PddCloudprintPortableprinterGetPddCloudprintPortableprinterGetResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddCloudprintPortableprinterGetPddCloudprintPortableprinterGetResponseResponseInterface {
  /**
   * @description:
   * @type: PddCloudprintPortableprinterGetPddCloudprintPortableprinterGetResponsePortableprinterListResponseInterface[]
   * @default:
   *
   **/
  portableprinter_list: PddCloudprintPortableprinterGetPddCloudprintPortableprinterGetResponsePortableprinterListResponseInterface[];
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddCloudprintPortableprinterGetPddCloudprintPortableprinterGetResponsePortableprinterListResponseInterface {
  /**
   * @description: 蓝牙打印机品牌
   * @type: string
   * @default:
   **/
  brand: string;

  /**
   * @description: 蓝牙打印机型号
   * @type: string
   * @default:
   **/
  portableprinter_name: string;

  /**
   * @description: 蓝牙打印机协议，如CPCL, TSPL
   * @type: string
   * @default:
   **/
  protocol_name: string;

  /**
   * @description: 描述备注
   * @type: string
   * @default:
   **/
  remark: string;
}
