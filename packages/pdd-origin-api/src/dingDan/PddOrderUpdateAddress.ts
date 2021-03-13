export const PDD_ORDER_UPDATE_ADDRESS = 'pdd.order.update.address';

/**
 * 接口名称：修改订单收件地址接口
 * 接口标识：pdd.order.update.address
 * 接口使用场景：修改订单收件地址 注：风险订单或订单已发货后不可修改
 **/
export interface PddOrderUpdateAddressRequestInterface {
  /**
   * @description: 收件详细地址
   * @type: string
   * @default:
   **/
  address?: string;

  /**
   * @description: 收件地城市
   * @type: string
   * @default:
   **/
  city: string;

  /**
   * @description: 城市编码
   * @type: number
   * @default:
   **/
  city_id: number;

  /**
   * @description: 订单编号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 收件地省份
   * @type: string
   * @default:
   **/
  province: string;

  /**
   * @description: 省份编码
   * @type: number
   * @default:
   **/
  province_id: number;

  /**
   * @description: 收件人姓名
   * @type: string
   * @default:
   **/
  receiver_name?: string;

  /**
   * @description: 收件人电话，明文
   * @type: string
   * @default:
   **/
  receiver_phone?: string;

  /**
   * @description: 收件地区县
   * @type: string
   * @default:
   **/
  town: string;

  /**
   * @description: 区县编码
   * @type: number
   * @default:
   **/
  town_id: number;
}

/**
 * 接口名称：修改订单收件地址接口
 * 接口标识：pdd.order.update.address
 * 接口使用场景：修改订单收件地址 注：风险订单或订单已发货后不可修改
 **/
export interface PddOrderUpdateAddressResponseInterface {
  /**
   * @description: 请求响应
   * @type: PddOrderUpdateAddressResponseResponseInterface
   * @default:
   *
   **/
  response: PddOrderUpdateAddressResponseResponseInterface;
}

/**
 * @description 请求响应
 * @default
 * @example
 **/
export interface PddOrderUpdateAddressResponseResponseInterface {
  /**
   * @description: 请求返回结果
   * @type: PddOrderUpdateAddressResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddOrderUpdateAddressResponseResultResponseInterface;

  /**
   * @description: 是否请求成功
   * @type: boolean
   * @default:
   **/
  success: boolean;

  /**
   * @description: 错误码
   * @type: number
   * @default:
   **/
  errorCode: number;

  /**
   * @description: 错误信息
   * @type: string
   * @default:
   **/
  errorMsg: string;
}

/**
 * @description 请求返回结果
 * @default
 * @example
 **/
export interface PddOrderUpdateAddressResponseResultResponseInterface {
  /**
   * @description: 提示文案
   * @type: string
   * @default:
   **/
  msg: string;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;
}
