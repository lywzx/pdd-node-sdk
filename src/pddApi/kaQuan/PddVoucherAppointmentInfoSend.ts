export const PDD_VOUCHER_APPOINTMENT_INFO_SEND = 'PDD_VOUCHER_APPOINTMENT_INFO_SEND';

/**
 * 接口名称：卡券预约提货接口
 * 接口标识：pdd.voucher.appointment.info.send
 * 接口使用场景：第三方ISV将消费者的预约提货信息同步给平台
 **/

export interface PddVoucherAppointmentInfoSendRequestInterface {
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
   * @description: 优惠券信息列表,例子[{"voucher_id":"test voucher_id","voucher_no":"test voucher_no"}]
   * @type: PddVoucherAppointmentInfoSendVoucherListRequestInterface[]
   * @default:
   *
   **/
  voucher_list?: PddVoucherAppointmentInfoSendVoucherListRequestInterface[];

  /**
   * @description: 物流方式  1  物流发货   2 自提
   * @type: number
   * @default:
   **/
  logistics_type?: number;

  /**
   * @description: 预约时间, 距离格林威治时间 1970 年 01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)起至现在的总毫秒数
   * @type: string
   * @default:
   **/
  appointment_time?: string;
}

/**
 * @description 优惠券信息列表,例子[{"voucher_id":"test voucher_id","voucher_no":"test voucher_no"}]
 * @default
 * @example
 **/

export interface PddVoucherAppointmentInfoSendVoucherListRequestInterface {
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
 * 接口名称：卡券预约提货接口
 * 接口标识：pdd.voucher.appointment.info.send
 * 接口使用场景：第三方ISV将消费者的预约提货信息同步给平台
 **/

export interface PddVoucherAppointmentInfoSendResponseInterface {
  /**
   * @description: voucher_appointment_info_send_response
   * @type: PddVoucherAppointmentInfoSendVoucherAppointmentInfoSendResponseResponseInterface
   * @default:
   *
   **/
  voucher_appointment_info_send_response: PddVoucherAppointmentInfoSendVoucherAppointmentInfoSendResponseResponseInterface;
}

/**
 * @description voucher_appointment_info_send_response
 * @default
 * @example
 **/

export interface PddVoucherAppointmentInfoSendVoucherAppointmentInfoSendResponseResponseInterface {
  /**
   * @description: is_success
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_VOUCHER_APPOINTMENT_INFO_SEND]: {
    requestInterface: PddVoucherAppointmentInfoSendRequestInterface;
    responseInterface: PddVoucherAppointmentInfoSendResponseInterface;
  };
}
