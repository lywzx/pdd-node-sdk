export const PDD_LOGISTICS_ADDRESS_GET = 'pdd.logistics.address.get';
export const PDD_LOGISTICS_ADDRESS_GET_RESPONSE_KEY = 'logistics_address_get_response';

/**
 * 接口名称：获取拼多多标准国家地址库
 * 接口标识：pdd.logistics.address.get
 * 接口使用场景：获取拼多多标准国家地址库
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddLogisticsAddressGetRequestInterface {}

/**
 * 接口名称：获取拼多多标准国家地址库
 * 接口标识：pdd.logistics.address.get
 * 接口使用场景：获取拼多多标准国家地址库
 **/
export interface PddLogisticsAddressGetResponseInterface {
  /**
   * @description: response
   * @type: PddLogisticsAddressGetLogisticsAddressGetResponseResponseInterface
   * @default:
   *
   **/
  logistics_address_get_response: PddLogisticsAddressGetLogisticsAddressGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddLogisticsAddressGetLogisticsAddressGetResponseResponseInterface {
  /**
   * @description: 地址对象列表
   * @type: PddLogisticsAddressGetLogisticsAddressGetResponseLogisticsAddressListResponseInterface[]
   * @default:
   *
   **/
  logistics_address_list: PddLogisticsAddressGetLogisticsAddressGetResponseLogisticsAddressListResponseInterface[];
}

/**
 * @description 地址对象列表
 * @default
 * @example
 **/
export interface PddLogisticsAddressGetLogisticsAddressGetResponseLogisticsAddressListResponseInterface {
  /**
   * @description: 是否有效，0-无效，1-有效
   * @type: number
   * @default:
   **/
  is_enabled: number;

  /**
   * @description: 地区邮编
   * @type: string
   * @default:
   **/
  national_code: string;

  /**
   * @description: 地区层级，1-省份，2-市级，3-区级
   * @type: number
   * @default:
   **/
  region_type: number;

  /**
   * @description: 地区名称
   * @type: string
   * @default:
   **/
  region_name: string;

  /**
   * @description: 父地区ID，顶点id为0
   * @type: string | number
   * @default:
   **/
  parent_id: string | number;

  /**
   * @description: 地区ID
   * @type: string | number
   * @default:
   **/
  id: string | number;
}
