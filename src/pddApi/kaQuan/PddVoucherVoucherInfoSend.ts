export const PDD_VOUCHER_VOUCHER_INFO_SEND = 'PDD_VOUCHER_VOUCHER_INFO_SEND';

/**
 * 接口名称：卡券信息发送接口
 * 接口标识：pdd.voucher.voucher.info.send
 * 接口使用场景：第三方ISV将消费者购买的卡券信息同步给平台
 **/
export interface PddVoucherVoucherInfoSendRequestInterface {
  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn?: string;

  /**
   * @description: 外部流水号
   * @type: string
   * @default:
   **/
  out_biz_no?: string;

  /**
   * @description: 卡券信息列表,例子[{"voucher_id":"test voucher_id","voucher_no":"test voucher_no"}]
   * @type: PddVoucherVoucherInfoSendVoucherListRequestInterface[]
   * @default:
   *
   **/
  voucher_list?: PddVoucherVoucherInfoSendVoucherListRequestInterface[];
}

/**
 * @description 卡券信息列表,例子[{"voucher_id":"test voucher_id","voucher_no":"test voucher_no"}]
 * @default
 * @example
 **/
export interface PddVoucherVoucherInfoSendVoucherListRequestInterface {
  /**
   * @description: 卡券ID
   * @type: string
   * @default:
   **/
  voucher_id?: string;

  /**
   * @description: 卡券号
   * @type: string
   * @default:
   **/
  voucher_no?: string;
}

/**
 * 接口名称：卡券信息发送接口
 * 接口标识：pdd.voucher.voucher.info.send
 * 接口使用场景：第三方ISV将消费者购买的卡券信息同步给平台
 **/
export interface PddVoucherVoucherInfoSendResponseInterface {
  /**
   * @description: response
   * @type: PddVoucherVoucherInfoSendVoucherVoucherInfoSendResponseResponseInterface
   * @default:
   *
   **/
  voucher_voucher_info_send_response: PddVoucherVoucherInfoSendVoucherVoucherInfoSendResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddVoucherVoucherInfoSendVoucherVoucherInfoSendResponseResponseInterface {
  /**
   * @description: 是否请求成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_VOUCHER_VOUCHER_INFO_SEND]: {
    requestInterface: PddVoucherVoucherInfoSendRequestInterface;
    responseInterface: PddVoucherVoucherInfoSendResponseInterface;
  };
}
