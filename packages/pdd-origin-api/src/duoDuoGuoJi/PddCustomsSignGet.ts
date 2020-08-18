export const PDD_CUSTOMS_SIGN_GET = 'pdd.customs.sign.get';

/**
 * 接口名称：海关数据加签
 * 接口标识：pdd.customs.sign.get
 * 接口使用场景：海关数据加签
 **/
export interface PddCustomsSignGetRequestInterface {
  /**
   * @description: 业务单证名称，例如：CEB311，CEB621，枚举见：CEBNameEnum
   * @type: string
   * @default:
   **/
  ceb_name: string;

  /**
   * @description: 企业的类型，1-报关本企业，2-报关物流企业，用于区分使用的密钥
   * @type: string
   * @default:
   **/
  company_type: string;

  /**
   * @description: 要加签的数据
   * @type: string
   * @default:
   **/
  data_to_sign: string;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: trace_id不能为空，用于请求的唯一性标示和问题排查，请在日志中打印，同时此字段也用于数据的去重，建议使用UUID.randomUUID().toString()生成，不能超过50个字符
   * @type: string
   * @default: 1
   **/
  trace_id: string;

  /**
   * @description: XP开头的交易的单号不能为空
   * @type: string
   * @default:
   **/
  trade_no: string;

  /**
   * @description: 报关仓名称
   * @type: string
   * @default:
   **/
  warehouse_name: string;
}

/**
 * 接口名称：海关数据加签
 * 接口标识：pdd.customs.sign.get
 * 接口使用场景：海关数据加签
 **/
export interface PddCustomsSignGetResponseInterface {
  /**
   * @description:
   * @type: PddCustomsSignGetCustomsSignGetResonpseResponseInterface
   * @default:
   *
   **/
  customs_sign_get_resonpse: PddCustomsSignGetCustomsSignGetResonpseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddCustomsSignGetCustomsSignGetResonpseResponseInterface {
  /**
   * @description: 数据的签名
   * @type: string
   * @default:
   **/
  data_signature: string;

  /**
   * @description: 报关商的一次请求的id
   * @type: string
   * @default:
   **/
  trace_id: string;
}
