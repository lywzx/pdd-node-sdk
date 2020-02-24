export const PDD_SMS_TEMPLATE_QUERY = 'pdd.sms.template.query';
export const PDD_SMS_TEMPLATE_QUERY_RESPONSE_KEY = 'sms_template_query_response';

/**
 * 接口名称：查询官方模板
 * 接口标识：pdd.sms.template.query
 * 接口使用场景：查询官方模板
 **/
export interface PddSmsTemplateQueryRequestInterface {
  /**
   * @description: 0, "优惠券",
   * 1, "提醒付款",
   * 2, "活动营销",
   * 3, "召唤买家成团",
   * 4, "新客转化",
   * 5, "老客召回",
   * 6, "流失唤醒",
   * 7, "用户自定义",
   * 8, "个性化营销",
   * 9, "精准客户推送"
   * @type: number
   * @default:
   **/
  scene?: number;
}

/**
 * 接口名称：查询官方模板
 * 接口标识：pdd.sms.template.query
 * 接口使用场景：查询官方模板
 **/
export interface PddSmsTemplateQueryResponseInterface {
  /**
   * @description: response
   * @type: PddSmsTemplateQuerySmsTemplateQueryResponseResponseInterface
   * @default:
   *
   **/
  sms_template_query_response: PddSmsTemplateQuerySmsTemplateQueryResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddSmsTemplateQuerySmsTemplateQueryResponseResponseInterface {
  /**
   * @description: 列表
   * @type: PddSmsTemplateQuerySmsTemplateQueryResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddSmsTemplateQuerySmsTemplateQueryResponseResultResponseInterface[];
}

/**
 * @description 列表
 * @default
 * @example
 **/
export interface PddSmsTemplateQuerySmsTemplateQueryResponseResultResponseInterface {
  /**
   * @description: 编号
   * @type: string | number
   * @default:
   **/
  code: string | number;

  /**
   * @description: 描述
   * @type: string
   * @default:
   **/
  desc: string;
}
