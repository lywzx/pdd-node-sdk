export const PDD_SMS_SHORT_STATISTIC_QUERY = 'pdd.sms.short.statistic.query';
export const PDD_SMS_SHORT_STATISTIC_QUERY_RESPONSE_KEY = 'sms_short_msg_statistic_query_response';

/**
 * 接口名称：查看任务数据
 * 接口标识：pdd.sms.short.statistic.query
 * 接口使用场景：查看任务数据
 **/
export interface PddSmsShortStatisticQueryRequestInterface {
  /**
   * @description: 任务id
   * @type: string | number
   * @default:
   **/
  setting_id?: string | number;
}

/**
 * 接口名称：查看任务数据
 * 接口标识：pdd.sms.short.statistic.query
 * 接口使用场景：查看任务数据
 **/
export interface PddSmsShortStatisticQueryResponseInterface {
  /**
   * @description: response
   * @type: PddSmsShortStatisticQuerySmsShortMsgStatisticQueryResponseResponseInterface
   * @default:
   *
   **/
  sms_short_msg_statistic_query_response: PddSmsShortStatisticQuerySmsShortMsgStatisticQueryResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddSmsShortStatisticQuerySmsShortMsgStatisticQueryResponseResponseInterface {
  /**
   * @description: return
   * @type: PddSmsShortStatisticQuerySmsShortMsgStatisticQueryResponseSettingAndCrowdReturnVoResponseInterface
   * @default:
   *
   **/
  setting_and_crowd_return_vo: PddSmsShortStatisticQuerySmsShortMsgStatisticQueryResponseSettingAndCrowdReturnVoResponseInterface;

  /**
   * @description: statistic_vo
   * @type: PddSmsShortStatisticQuerySmsShortMsgStatisticQueryResponseStatisticVoResponseInterface
   * @default:
   *
   **/
  statistic_vo: PddSmsShortStatisticQuerySmsShortMsgStatisticQueryResponseStatisticVoResponseInterface;
}

/**
 * @description return
 * @default
 * @example
 **/
export interface PddSmsShortStatisticQuerySmsShortMsgStatisticQueryResponseSettingAndCrowdReturnVoResponseInterface {
  /**
   * @description: 人群id
   * @type: string | number
   * @default:
   **/
  id: string | number;

  /**
   * @description: 人群名称
   * @type: string
   * @default:
   **/
  name: string;

  /**
   * @description: 人群数量
   * @type: string | number
   * @default:
   **/
  people_num: string | number;

  /**
   * @description: 发送时间
   * @type: string | number
   * @default:
   **/
  send_time: string | number;
}

/**
 * @description statistic_vo
 * @default
 * @example
 **/
export interface PddSmsShortStatisticQuerySmsShortMsgStatisticQueryResponseStatisticVoResponseInterface {
  /**
   * @description: 商家店铺id
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;

  /**
   * @description: 批次id
   * @type: string | number
   * @default:
   **/
  setting_id: string | number;

  /**
   * @description: 场景id
   * @type: string | number
   * @default:
   **/
  scene: string | number;

  /**
   * @description: 成功触达人数
   * @type: string | number
   * @default:
   **/
  sms_succ_cnt_1d: string | number;

  /**
   * @description: 进店人数
   * @type: string | number
   * @default:
   **/
  online_mall_cnt: string | number;

  /**
   * @description: 支付订单数量
   * @type: string | number
   * @default:
   **/
  pay_mall_cnt: string | number;

  /**
   * @description: 支付订单数
   * @type: string
   * @default:
   **/
  pay_mall_amt: string;

  /**
   * @description: 支付订单金额
   * @type: string
   * @default:
   **/
  online_mall_rto: string;

  /**
   * @description: 进店转化率
   * @type: string
   * @default:
   **/
  pay_mall_rto: string;
}
