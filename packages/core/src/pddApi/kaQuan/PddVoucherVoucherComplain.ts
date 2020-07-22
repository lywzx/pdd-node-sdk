export const PDD_VOUCHER_VOUCHER_COMPLAIN = 'pdd.voucher.voucher.complain';
export const PDD_VOUCHER_VOUCHER_COMPLAIN_RESPONSE_KEY = 'voucher_voucher_complain_response';

/**
 * 接口名称：卡券投诉接口
 * 接口标识：pdd.voucher.voucher.complain
 * 接口使用场景：卡券投诉接口
 **/
export interface PddVoucherVoucherComplainRequestInterface {
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
   * @type: PddVoucherVoucherComplainVoucherListRequestInterface[]
   * @default:
   *
   **/
  voucher_list?: PddVoucherVoucherComplainVoucherListRequestInterface[];

  /**
   * @description: 投诉人
   * @type: string
   * @default:
   **/
  complain_user: string;

  /**
   * @description: 投诉人电话
   * @type: string
   * @default:
   **/
  complain_user_mobile: string;

  /**
   * @description: 投诉内容
   * @type: string
   * @default:
   **/
  complain_content: string;

  /**
   * @description: ["http://testimg.yangkeduo.com/pdd_oms/2018-01-16/411068e948835ae053a86c13f8ebb5ee.jpg"]
   * @type: string[]
   * @default:
   **/
  complain_attachment_list: string[];

  /**
   * @description: 枚举值1、大闸蟹死蟹或者少蟹 ；2、大闸蟹重量不符；3、大闸蟹公母数量不符；4、大闸蟹产地不符；5、欺诈发货（收到的产品非大闸蟹）；6、蟹券无法提货
   * 7、其他质量问题
   * @type: number
   * @default:
   **/
  complain_type: number;
}

/**
 * @description 优惠券信息列表,例子[{"voucher_id":"test voucher_id","voucher_no":"test voucher_no"}]
 * @default
 * @example
 **/
export interface PddVoucherVoucherComplainVoucherListRequestInterface {
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
 * 接口名称：卡券投诉接口
 * 接口标识：pdd.voucher.voucher.complain
 * 接口使用场景：卡券投诉接口
 **/
export interface PddVoucherVoucherComplainResponseInterface {
  /**
   * @description: response
   * @type: PddVoucherVoucherComplainVoucherVoucherComplainResponseResponseInterface
   * @default:
   *
   **/
  voucher_voucher_complain_response: PddVoucherVoucherComplainVoucherVoucherComplainResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddVoucherVoucherComplainVoucherVoucherComplainResponseResponseInterface {
  /**
   * @description: 是否请求成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
