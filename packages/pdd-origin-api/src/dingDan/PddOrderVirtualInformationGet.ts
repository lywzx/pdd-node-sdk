export const PDD_ORDER_VIRTUAL_INFORMATION_GET = 'pdd.order.virtual.information.get';
export const PDD_ORDER_VIRTUAL_INFORMATION_GET_RESPONSE_KEY = 'order_virtual_information_response';

/**
 * 接口名称：虚拟业务信息查询接口
 * 接口标识：pdd.order.virtual.information.get
 * 接口使用场景：该接口用于查询虚拟业务订单的特有字段
 **/
export interface PddOrderVirtualInformationGetRequestInterface {
  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;
}

/**
 * 接口名称：虚拟业务信息查询接口
 * 接口标识：pdd.order.virtual.information.get
 * 接口使用场景：该接口用于查询虚拟业务订单的特有字段
 **/
export interface PddOrderVirtualInformationGetResponseInterface {
  /**
   * @description:
   * @type: PddOrderVirtualInformationGetOrderVirtualInformationResponseResponseInterface
   * @default:
   *
   **/
  order_virtual_information_response: PddOrderVirtualInformationGetOrderVirtualInformationResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddOrderVirtualInformationGetOrderVirtualInformationResponseResponseInterface {
  /**
   * @description: 联系人手机号
   * @type: string
   * @default:
   **/
  contact_phone: string;

  /**
   * @description: 身份证名
   * @type: string
   * @default:
   **/
  id_card_name: string;

  /**
   * @description: 身份证号
   * @type: string
   * @default:
   **/
  id_card_num: string;

  /**
   * @description: 选号卡号
   * @type: string
   * @default:
   **/
  phone_number_chosen_by_user: string;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;
}
