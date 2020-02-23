export const PDD_SMS_REMAIN_SETTING_DETAIL_QUERY = 'pdd.sms.remain.setting.detail.query';

/**
 * 接口名称：提醒类短信设置详情
 * 接口标识：pdd.sms.remain.setting.detail.query
 * 接口使用场景：提醒类短信设置详情
 **/
export interface PddSmsRemainSettingDetailQueryRequestInterface {
  /**
   * @description: //1：提醒付款 ；  3：召唤买家成团
   * @type: number
   * @default:
   **/
  scene?: number;
}

/**
 * 接口名称：提醒类短信设置详情
 * 接口标识：pdd.sms.remain.setting.detail.query
 * 接口使用场景：提醒类短信设置详情
 **/
export interface PddSmsRemainSettingDetailQueryResponseInterface {
  /**
   * @description: response
   * @type: PddSmsRemainSettingDetailQuerySmsRemainSettingDetailQueryResponseResponseInterface
   * @default:
   *
   **/
  sms_remain_setting_detail_query_response: PddSmsRemainSettingDetailQuerySmsRemainSettingDetailQueryResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddSmsRemainSettingDetailQuerySmsRemainSettingDetailQueryResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  success: boolean;

  /**
   * @description: 错误代码
   * @type: string
   * @default:
   **/
  error_code: string;

  /**
   * @description: 错误类型
   * @type: string
   * @default:
   **/
  error_msg: string;

  /**
   * @description: 结果
   * @type: PddSmsRemainSettingDetailQuerySmsRemainSettingDetailQueryResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddSmsRemainSettingDetailQuerySmsRemainSettingDetailQueryResponseResultResponseInterface;
}

/**
 * @description 结果
 * @default
 * @example
 **/
export interface PddSmsRemainSettingDetailQuerySmsRemainSettingDetailQueryResponseResultResponseInterface {
  /**
   * @description: 店铺id
   * @type: string
   * @default:
   **/
  mall_id: string;

  /**
   * @description: 设置类型
   * @type: number
   * @default:
   **/
  scene: number;

  /**
   * @description: 触发状态
   * @type: PddSmsRemainSettingDetailQuerySmsRemainSettingDetailQueryResponseResultTriggerConditionResponseInterface
   * @default:
   *
   **/
  trigger_condition: PddSmsRemainSettingDetailQuerySmsRemainSettingDetailQueryResponseResultTriggerConditionResponseInterface;

  /**
   * @description: 目标
   * @type: PddSmsRemainSettingDetailQuerySmsRemainSettingDetailQueryResponseResultTargetResponseInterface
   * @default:
   *
   **/
  target: PddSmsRemainSettingDetailQuerySmsRemainSettingDetailQueryResponseResultTargetResponseInterface;

  /**
   * @description: 模板id
   * @type: string
   * @default:
   **/
  template_id: string;

  /**
   * @description: 是否开启
   * @type: number
   * @default:
   **/
  open: number;

  /**
   * @description: 全部条数
   * @type: string
   * @default:
   **/
  send_num: string;

  /**
   * @description: 失败条数
   * @type: string
   * @default:
   **/
  send_failed_num: string;
}

/**
 * @description 触发状态
 * @default
 * @example
 **/
export interface PddSmsRemainSettingDetailQuerySmsRemainSettingDetailQueryResponseResultTriggerConditionResponseInterface {
  /**
   * @description: 距离系统自动取消订单，单位分钟
   * @type: string
   * @default:
   **/
  unpaid_duration: string;
}

/**
 * @description 目标
 * @default
 * @example
 **/
export interface PddSmsRemainSettingDetailQuerySmsRemainSettingDetailQueryResponseResultTargetResponseInterface {
  /**
   * @description: 商家实收金额，最低价
   * @type: string
   * @default:
   **/
  min_pay_amount: string;

  /**
   * @description: 商家实收金额，最高价
   * @type: string
   * @default:
   **/
  max_pay_amount: string;

  /**
   * @description: 支付金额是否不限
   * @type: number
   * @default:
   **/
  pay_amount_limit: number;

  /**
   * @description: 地区类型
   * @type: number
   * @default:
   **/
  region_type: number;

  /**
   * @description: 收货地区
   * @type: string
   * @default:
   **/
  region: string;

  /**
   * @description: 商品id列表
   * @type: string
   * @default:
   **/
  goods: string;

  /**
   * @description: 是否排除商品
   * @type: number
   * @default:
   **/
  goods_invert: number;
}
