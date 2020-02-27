export const PDD_VOUCHER_PHYSICAL_GOODS_SEND = 'pdd.voucher.physical.goods.send';
export const PDD_VOUCHER_PHYSICAL_GOODS_SEND_RESPONSE_KEY = 'voucher_physical_voucher_send_response';

/**
 * 接口名称：卡券发货（实物）接口
 * 接口标识：pdd.voucher.physical.goods.send
 * 接口使用场景：第三方ISV将商家发货（实物）信息同步给平台
 **/
export interface PddVoucherPhysicalGoodsSendRequestInterface {
  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 外部流水号
   * @type: string
   * @default:
   **/
  out_biz_no: string;

  /**
   * @description: 优惠券信息列表,例子[{"voucher_id":"test voucher_id","voucher_no":"test voucher_no"}]
   * @type: PddVoucherPhysicalGoodsSendVoucherListRequestInterface[]
   * @default:
   *
   **/
  voucher_list: PddVoucherPhysicalGoodsSendVoucherListRequestInterface[];

  /**
   * @description: 物流方式  1  物流发货   2 自提
   * @type: number
   * @default:
   **/
  logistics_type: number;

  /**
   * @description: 收件人
   * @type: string
   * @default:
   **/
  recipient: string;

  /**
   * @description: 收件人电话
   * @type: string
   * @default:
   **/
  recipient_mobile: string;

  /**
   * @description: 收件人地址
   * @type: string
   * @default:
   **/
  recipient_address: string;

  /**
   * @description: 物流单号
   * @type: string
   * @default:
   **/
  logistics_no: string;

  /**
   * @description: 物流公司编号
   * @type: string
   * @default:
   **/
  logistics_company_id: string;

  /**
   * @description: 物流公司名称
   * @type: string
   * @default:
   **/
  logistics_company: string;
}

/**
 * @description 优惠券信息列表,例子[{"voucher_id":"test voucher_id","voucher_no":"test voucher_no"}]
 * @default
 * @example
 **/
export interface PddVoucherPhysicalGoodsSendVoucherListRequestInterface {
  /**
   * @description: 卡券ID
   * @type: string
   * @default:
   **/
  voucher_id: string;

  /**
   * @description: 卡券号
   * @type: string
   * @default:
   **/
  voucher_no: string;
}

/**
 * 接口名称：卡券发货（实物）接口
 * 接口标识：pdd.voucher.physical.goods.send
 * 接口使用场景：第三方ISV将商家发货（实物）信息同步给平台
 **/
export interface PddVoucherPhysicalGoodsSendResponseInterface {
  /**
   * @description: response
   * @type: PddVoucherPhysicalGoodsSendVoucherPhysicalVoucherSendResponseResponseInterface
   * @default:
   *
   **/
  voucher_physical_voucher_send_response: PddVoucherPhysicalGoodsSendVoucherPhysicalVoucherSendResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddVoucherPhysicalGoodsSendVoucherPhysicalVoucherSendResponseResponseInterface {
  /**
   * @description: 请求成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
