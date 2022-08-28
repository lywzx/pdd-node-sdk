export const PDD_REFUND_ADDRESS_LIST_GET = 'pdd.refund.address.list.get';
export const PDD_REFUND_ADDRESS_LIST_GET_RESPONSE_KEY = 'refund_address_list_get_response';
export const PDD_REFUND_ADDRESS_LIST_GET_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 60,
    times: 3000,
    callSourceType: 0,
  },
  {
    limiterLevel: 3,
    timeRange: 1,
    times: 1040,
    callSourceType: 0,
  },
];

/**
 * 接口名称：获取商家退货地址库
 * 接口标识：pdd.refund.address.list.get
 * 接口使用场景：获取商家退货地址库
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddRefundAddressListGetRequestInterface {}

/**
 * 接口名称：获取商家退货地址库
 * 接口标识：pdd.refund.address.list.get
 * 接口使用场景：获取商家退货地址库
 **/
export interface PddRefundAddressListGetResponseInterface {
  /**
   * @description: response
   * @type: PddRefundAddressListGetRefundAddressListGetResponseResponseInterface
   * @default:
   *
   **/
  refund_address_list_get_response: PddRefundAddressListGetRefundAddressListGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddRefundAddressListGetRefundAddressListGetResponseResponseInterface {
  /**
   * @description: 退货地址列表
   * @type: PddRefundAddressListGetRefundAddressListGetResponseRefundAddressListResponseInterface[]
   * @default:
   *
   **/
  refund_address_list: PddRefundAddressListGetRefundAddressListGetResponseRefundAddressListResponseInterface[];
}

/**
 * @description 退货地址列表
 * @default
 * @example
 **/
export interface PddRefundAddressListGetRefundAddressListGetResponseRefundAddressListResponseInterface {
  /**
   * @description: 退货地址所在城市ID
   * @type: number
   * @default:
   **/
  city_id: number;

  /**
   * @description: 退货地址所在城市名字
   * @type: string
   * @default:
   **/
  city_name: string;

  /**
   * @description: 退货地址所在区ID
   * @type: number
   * @default:
   **/
  district_id: number;

  /**
   * @description: 退货地址所在区名字
   * @type: string
   * @default:
   **/
  district_name: string;

  /**
   * @description: 退货地址ID
   * @type: string | number
   * @default:
   **/
  id: string | number;

  /**
   * @description: 是否为默认退货地址
   * @type: string
   * @default:
   **/
  is_default: string;

  /**
   * @description: 退货地址是否合法
   * @type: boolean
   * @default:
   **/
  is_legal: boolean;

  /**
   * @description: 退货地址是否有效
   * @type: boolean
   * @default:
   **/
  is_validated: boolean;

  /**
   * @description: 店铺ID
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;

  /**
   * @description: 退货地址所在省份ID
   * @type: number
   * @default:
   **/
  province_id: number;

  /**
   * @description: 退货地址所在省份名字
   * @type: string
   * @default:
   **/
  province_name: string;

  /**
   * @description: 退货地址
   * @type: string
   * @default:
   **/
  refund_address: string;

  /**
   * @description: refund_id
   * @type: string
   * @default:
   **/
  refund_address_id: string;

  /**
   * @description: 退货收件人名字
   * @type: string
   * @default:
   **/
  refund_name: string;

  /**
   * @description: 退货收件人手机号
   * @type: string
   * @default:
   **/
  refund_phone: string;

  /**
   * @description: 退货收件人固定电话
   * @type: string
   * @default:
   **/
  refund_tel: string;
}
