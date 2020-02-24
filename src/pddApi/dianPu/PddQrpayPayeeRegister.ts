export const PDD_QRPAY_PAYEE_REGISTER = 'pdd.qrpay.payee.register';
export const PDD_QRPAY_PAYEE_REGISTER_RESPONSE_KEY = 'qrpay_payee_register_response';

/**
 * 接口名称：交易二维码-参数注册接口
 * 接口标识：pdd.qrpay.payee.register
 * 接口使用场景：交易二维码订单同店铺下需要记录订单来源的业务场景，可以将参数定义为门店、柜员、店员等
 **/
export interface PddQrpayPayeeRegisterRequestInterface {
  /**
   * @description: 参数列表
   * @type: PddQrpayPayeeRegisterPayeeListRequestInterface[]
   * @default:
   *
   **/
  payee_list?: PddQrpayPayeeRegisterPayeeListRequestInterface[];
}

/**
 * @description 参数列表
 * @default
 * @example
 **/
export interface PddQrpayPayeeRegisterPayeeListRequestInterface {
  /**
   * @description: 参数名，用于注册到名单，并生成对应URL
   * @type: string
   * @default:
   **/
  payee?: string;
}

/**
 * 接口名称：交易二维码-参数注册接口
 * 接口标识：pdd.qrpay.payee.register
 * 接口使用场景：交易二维码订单同店铺下需要记录订单来源的业务场景，可以将参数定义为门店、柜员、店员等
 **/
export interface PddQrpayPayeeRegisterResponseInterface {
  /**
   * @description: response
   * @type: PddQrpayPayeeRegisterQrpayPayeeRegisterResponseResponseInterface
   * @default:
   *
   **/
  qrpay_payee_register_response: PddQrpayPayeeRegisterQrpayPayeeRegisterResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddQrpayPayeeRegisterQrpayPayeeRegisterResponseResponseInterface {
  /**
   * @description: 参数注册结果
   * @type: PddQrpayPayeeRegisterQrpayPayeeRegisterResponsePayeeResultListResponseInterface[]
   * @default:
   *
   **/
  payee_result_list: PddQrpayPayeeRegisterQrpayPayeeRegisterResponsePayeeResultListResponseInterface[];
}

/**
 * @description 参数注册结果
 * @default
 * @example
 **/
export interface PddQrpayPayeeRegisterQrpayPayeeRegisterResponsePayeeResultListResponseInterface {
  /**
   * @description: 参数名
   * @type: string
   * @default:
   **/
  payee: string;

  /**
   * @description: 参数id
   * @type: string | number
   * @default:
   **/
  payee_id: string | number;

  /**
   * @description: 交易二维码图片UR
   * @type: string
   * @default:
   **/
  qr_image_url: string;

  /**
   * @description: 交易二维码页面URL
   * @type: string
   * @default:
   **/
  qr_pay_page_url: string;
}
