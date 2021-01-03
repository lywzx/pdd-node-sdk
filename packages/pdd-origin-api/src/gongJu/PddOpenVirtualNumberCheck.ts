export const PDD_OPEN_VIRTUAL_NUMBER_CHECK = 'pdd.open.virtual.number.check';
export const PDD_OPEN_VIRTUAL_NUMBER_CHECK_RESPONSE_KEY = 'open_virtual_number_check_response';

/**
 * 接口名称：虚拟号查询接口
 * 接口标识：pdd.open.virtual.number.check
 * 接口使用场景：检查入参号码是否订单所绑定的虚拟号
 **/
export interface PddOpenVirtualNumberCheckRequestInterface {
  /**
   * @description: 分机号，非必填，4位数字字符
   * @type: string
   * @default:
   **/
  identify_number?: string;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 虚拟号，11位数字字符
   * @type: string
   * @default:
   **/
  virtual_number: string;
}

/**
 * 接口名称：虚拟号查询接口
 * 接口标识：pdd.open.virtual.number.check
 * 接口使用场景：检查入参号码是否订单所绑定的虚拟号
 **/
export interface PddOpenVirtualNumberCheckResponseInterface {
  /**
   * @description:
   * @type: PddOpenVirtualNumberCheckOpenVirtualNumberCheckResponseResponseInterface
   * @default:
   *
   **/
  open_virtual_number_check_response: PddOpenVirtualNumberCheckOpenVirtualNumberCheckResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddOpenVirtualNumberCheckOpenVirtualNumberCheckResponseResponseInterface {
  /**
   * @description:
   * @type: PddOpenVirtualNumberCheckOpenVirtualNumberCheckResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddOpenVirtualNumberCheckOpenVirtualNumberCheckResponseResultResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddOpenVirtualNumberCheckOpenVirtualNumberCheckResponseResultResponseInterface {
  /**
   * @description: 虚拟号绑定的时间戳
   * @type: string | number
   * @default:
   **/
  bind_timestamp: string | number;

  /**
   * @description: 错误码, 0:成功
   * @type: number
   * @default:
   **/
  error_code: number;

  /**
   * @description: 错误信息
   * @type: string
   * @default:
   **/
  error_msg: string;

  /**
   * @description: 虚拟号过期的时间戳
   * @type: string | number
   * @default:
   **/
  expired_timestamp: string | number;

  /**
   * @description: 是否订单所绑定的虚拟号，true是，false否
   * @type: boolean
   * @default:
   **/
  match: boolean;

  /**
   * @description: 11位入参号码是否是虚拟号
   * @type: boolean
   * @default:
   **/
  virtual: boolean;
}
