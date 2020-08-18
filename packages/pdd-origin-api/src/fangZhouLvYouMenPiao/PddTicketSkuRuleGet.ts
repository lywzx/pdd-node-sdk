export const PDD_TICKET_SKU_RULE_GET = 'pdd.ticket.sku.rule.get';

/**
 * 接口名称：旅游门票商品履约生效规则查询
 * 接口标识：pdd.ticket.sku.rule.get
 * 接口使用场景：商品履约生效规则查询
 **/
export interface PddTicketSkuRuleGetRequestInterface {
  /**
   * @description: 商户履约规则 id
   * @type: string
   * @default:
   **/
  out_rule_id?: string;

  /**
   * @description: 上传商品的上传序列 ID
   * @type: string
   * @default:
   **/
  rule_id?: string;
}

/**
 * 接口名称：旅游门票商品履约生效规则查询
 * 接口标识：pdd.ticket.sku.rule.get
 * 接口使用场景：商品履约生效规则查询
 **/
export interface PddTicketSkuRuleGetResponseInterface {
  /**
   * @description:
   * @type: PddTicketSkuRuleGetResponseResponseInterface
   * @default:
   *
   **/
  response: PddTicketSkuRuleGetResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddTicketSkuRuleGetResponseResponseInterface {
  /**
   * @description: 下单人信息设置
   * @type: PddTicketSkuRuleGetResponseBookerInfoLimitationResponseInterface
   * @default:
   *
   **/
  booker_info_limitation: PddTicketSkuRuleGetResponseBookerInfoLimitationResponseInterface;

  /**
   * @description: 预定须知
   * @type: PddTicketSkuRuleGetResponseBookingNoticeResponseInterface
   * @default:
   *
   **/
  booking_notice: PddTicketSkuRuleGetResponseBookingNoticeResponseInterface;

  /**
   * @description: 下单限制
   * @type: PddTicketSkuRuleGetResponseOrderLimitationResponseInterface
   * @default:
   *
   **/
  order_limitation: PddTicketSkuRuleGetResponseOrderLimitationResponseInterface;

  /**
   * @description: 商户rule ID
   * @type: string
   * @default:
   **/
  out_rule_id: string;

  /**
   * @description: 服务商联系方式
   * @type: PddTicketSkuRuleGetResponseProviderContactInfoResponseInterface
   * @default:
   *
   **/
  provider_contact_info: PddTicketSkuRuleGetResponseProviderContactInfoResponseInterface;

  /**
   * @description: 退款规则
   * @type: PddTicketSkuRuleGetResponseRefundLimitationsResponseInterface
   * @default:
   *
   **/
  refund_limitations: PddTicketSkuRuleGetResponseRefundLimitationsResponseInterface;

  /**
   * @description: 拼多多 rule ID
   * @type: string
   * @default:
   **/
  rule_id: string;

  /**
   * @description: 商户rule 名称
   * @type: string
   * @default:
   **/
  rule_name: string;

  /**
   * @description: 规则版本
   * @type: string
   * @default:
   **/
  rule_version: string;

  /**
   * @description: 游玩人信息
   * @type: PddTicketSkuRuleGetResponseTravelerInfoLimitationResponseInterface
   * @default:
   *
   **/
  traveler_info_limitation: PddTicketSkuRuleGetResponseTravelerInfoLimitationResponseInterface;

  /**
   * @description: 卡券有效期设置
   * @type: PddTicketSkuRuleGetResponseValidLimitationResponseInterface
   * @default:
   *
   **/
  valid_limitation: PddTicketSkuRuleGetResponseValidLimitationResponseInterface;
}

/**
 * @description 下单人信息设置
 * @default
 * @example
 **/
export interface PddTicketSkuRuleGetResponseBookerInfoLimitationResponseInterface {
  /**
   * @description: 需要下单人信息
   * @type: number
   * @default:
   **/
  booker_required: number;

  /**
   * @description: 下单人手机
   * @type: number
   * @default:
   **/
  mobile: number;
}

/**
 * @description 预定须知
 * @default
 * @example
 **/
export interface PddTicketSkuRuleGetResponseBookingNoticeResponseInterface {
  /**
   * @description: 入园地址
   * @type: string
   * @default:
   **/
  enter_address: string;

  /**
   * @description: 入园时间
   * @type: PddTicketSkuRuleGetResponseBookingNoticeEnterTimeResponseInterface[]
   * @default:
   *
   **/
  enter_time: PddTicketSkuRuleGetResponseBookingNoticeEnterTimeResponseInterface[];

  /**
   * @description: 入园方式
   * @type: string
   * @default:
   **/
  enter_ways: string;

  /**
   * @description: 补充说明
   * @type: string
   * @default:
   **/
  extra_desc: string;

  /**
   * @description: 费用包含
   * @type: string
   * @default:
   **/
  fee_include: string;

  /**
   * @description: 费用不包含
   * @type: string
   * @default:
   **/
  fee_not_include: string;

  /**
   * @description: 重要提示
   * @type: string
   * @default:
   **/
  important_notice: string;

  /**
   * @description: 通关限制时间
   * @type: number
   * @default:
   **/
  pass_time_limit: number;

  /**
   * @description: 换票地址
   * @type: string
   * @default:
   **/
  ticket_place: string;

  /**
   * @description: 换票时间
   * @type: PddTicketSkuRuleGetResponseBookingNoticeTicketTimeResponseInterface[]
   * @default:
   *
   **/
  ticket_time: PddTicketSkuRuleGetResponseBookingNoticeTicketTimeResponseInterface[];
}

/**
 * @description 入园时间
 * @default
 * @example
 **/
export interface PddTicketSkuRuleGetResponseBookingNoticeEnterTimeResponseInterface {
  /**
   * @description: 备注
   * @type: string
   * @default:
   **/
  comment: string;

  /**
   * @description: 入园结束时间
   * @type: string
   * @default:
   **/
  end_at: string;

  /**
   * @description: 入园开始时间
   * @type: string
   * @default:
   **/
  start_at: string;
}

/**
 * @description 换票时间
 * @default
 * @example
 **/
export interface PddTicketSkuRuleGetResponseBookingNoticeTicketTimeResponseInterface {
  /**
   * @description: 备注
   * @type: string
   * @default:
   **/
  comment: string;

  /**
   * @description: 换票结束时间
   * @type: string
   * @default:
   **/
  end_at: string;

  /**
   * @description: 换票开始时间
   * @type: string
   * @default:
   **/
  start_at: string;
}

/**
 * @description 下单限制
 * @default
 * @example
 **/
export interface PddTicketSkuRuleGetResponseOrderLimitationResponseInterface {
  /**
   * @description: 周期长度
   * @type: number
   * @default:
   **/
  cycle_length: number;

  /**
   * @description: 限制类型
   * @type: number
   * @default:
   **/
  limitation_type: number;

  /**
   * @description: 周期类型
   * @type: number
   * @default:
   **/
  limit_cycle: number;

  /**
   * @description: 限购数量
   * @type: number
   * @default:
   **/
  limit_num: number;
}

/**
 * @description 服务商联系方式
 * @default
 * @example
 **/
export interface PddTicketSkuRuleGetResponseProviderContactInfoResponseInterface {
  /**
   * @description: 服务时间
   * @type: PddTicketSkuRuleGetResponseProviderContactInfoProviderBusinessHourResponseInterface[]
   * @default:
   *
   **/
  provider_business_hour: PddTicketSkuRuleGetResponseProviderContactInfoProviderBusinessHourResponseInterface[];

  /**
   * @description: 服务商名称
   * @type: string
   * @default:
   **/
  provider_name: string;

  /**
   * @description: 服务商联系电话
   * @type: string
   * @default:
   **/
  provider_telephone: string;
}

/**
 * @description 服务时间
 * @default
 * @example
 **/
export interface PddTicketSkuRuleGetResponseProviderContactInfoProviderBusinessHourResponseInterface {
  /**
   * @description: 结束时间
   * @type: string
   * @default:
   **/
  close_at: string;

  /**
   * @description: 开始时间
   * @type: string
   * @default:
   **/
  open_at: string;

  /**
   * @description: 描述
   * @type: string
   * @default:
   **/
  time_info: string;
}

/**
 * @description 退款规则
 * @default
 * @example
 **/
export interface PddTicketSkuRuleGetResponseRefundLimitationsResponseInterface {
  /**
   * @description: 是否可退
   * @type: number
   * @default:
   **/
  is_refundable: number;

  /**
   * @description: 退款规则
   * @type: PddTicketSkuRuleGetResponseRefundLimitationsRefundRulesResponseInterface[]
   * @default:
   *
   **/
  refund_rules: PddTicketSkuRuleGetResponseRefundLimitationsRefundRulesResponseInterface[];
}

/**
 * @description 退款规则
 * @default
 * @example
 **/
export interface PddTicketSkuRuleGetResponseRefundLimitationsRefundRulesResponseInterface {
  /**
   * @description: 游玩日 0 点提前 或之后分钟数
   * @type: number
   * @default:
   **/
  ahead_time: number;

  /**
   * @description: 扣费值
   * @type: number
   * @default:
   **/
  deduction_fee: number;

  /**
   * @description: 费率单位
   * @type: number
   * @default:
   **/
  deduction_unit: number;

  /**
   * @description: 规则类型
   * @type: number
   * @default:
   **/
  type: number;
}

/**
 * @description 游玩人信息
 * @default
 * @example
 **/
export interface PddTicketSkuRuleGetResponseTravelerInfoLimitationResponseInterface {
  /**
   * @description: 游玩人证件
   * @type: number
   * @default:
   **/
  credential: number;

  /**
   * @description: 游玩人名字
   * @type: number
   * @default:
   **/
  name: number;

  /**
   * @description: 出游人信息设置
   * @type: number
   * @default:
   **/
  traveler_required: number;
}

/**
 * @description 卡券有效期设置
 * @default
 * @example
 **/
export interface PddTicketSkuRuleGetResponseValidLimitationResponseInterface {
  /**
   * @description: 天数内有效
   * @type: number
   * @default:
   **/
  days_time: number;

  /**
   * @description: 结束时间
   * @type: string | number
   * @default:
   **/
  end_time: string | number;

  /**
   * @description: 开始时间
   * @type: string | number
   * @default:
   **/
  start_time: string | number;

  /**
   * @description: 有效期时间类型
   * @type: number
   * @default:
   **/
  time_type: number;
}
