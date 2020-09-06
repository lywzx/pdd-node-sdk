export const PDD_SMS_CUSTOM_TEMPLATE_QUERY = 'pdd.sms.custom.template.query';
export const PDD_SMS_CUSTOM_TEMPLATE_QUERY_RESPONSE_KEY = 'sms_custom_template_list_query_response';

/**
 * 接口名称：自定义模板查询
 * 接口标识：pdd.sms.custom.template.query
 * 接口使用场景：自定义模板查询
 **/
export interface PddSmsCustomTemplateQueryRequestInterface {
  /**
   * @description: //1-审核中  2-审核驳回  3-审核通过
   * @type: number
   * @default:
   **/
  status?: number;

  /**
   * @description: true or false//审核通过的排前面，在模版选择的时候调用
   * @type: boolean
   * @default:
   **/
  order_by_status?: boolean;

  /**
   * @description: 页码
   * @type: number
   * @default:
   **/
  page_number?: number;

  /**
   * @description: 每页大小
   * @type: number
   * @default:
   **/
  page_size?: number;

  /**
   * @description: 自定义模板类型
   * 0,正常模板
   * 1,需要带优惠券类型的模板
   * @type: number
   * @default:
   **/
  template_type?: number;
}

/**
 * 接口名称：自定义模板查询
 * 接口标识：pdd.sms.custom.template.query
 * 接口使用场景：自定义模板查询
 **/
export interface PddSmsCustomTemplateQueryResponseInterface {
  /**
   * @description: response
   * @type: PddSmsCustomTemplateQuerySmsCustomTemplateListQueryResponseResponseInterface
   * @default:
   *
   **/
  sms_custom_template_list_query_response: PddSmsCustomTemplateQuerySmsCustomTemplateListQueryResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddSmsCustomTemplateQuerySmsCustomTemplateListQueryResponseResponseInterface {
  /**
   * @description: 总数量
   * @type: number
   * @default:
   **/
  total: number;

  /**
   * @description: 结果
   * @type: PddSmsCustomTemplateQuerySmsCustomTemplateListQueryResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddSmsCustomTemplateQuerySmsCustomTemplateListQueryResponseResultResponseInterface[];
}

/**
 * @description 结果
 * @default
 * @example
 **/
export interface PddSmsCustomTemplateQuerySmsCustomTemplateListQueryResponseResultResponseInterface {
  /**
   * @description: 模板id
   * @type: string | number
   * @default:
   **/
  id: string | number;

  /**
   * @description: 店铺id
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;

  /**
   * @description: 模板名称
   * @type: string
   * @default:
   **/
  name: string;

  /**
   * @description: 更新时间
   * @type: string | number
   * @default:
   **/
  updated_time: string | number;

  /**
   * @description: 内容
   * @type: PddSmsCustomTemplateQuerySmsCustomTemplateListQueryResponseResultContentResponseInterface[]
   * @default:
   *
   **/
  content: PddSmsCustomTemplateQuerySmsCustomTemplateListQueryResponseResultContentResponseInterface[];

  /**
   * @description: 状态
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 原因
   * @type: string
   * @default:
   **/
  reason: string;
}

/**
 * @description 内容
 * @default
 * @example
 **/
export interface PddSmsCustomTemplateQuerySmsCustomTemplateListQueryResponseResultContentResponseInterface {
  /**
   * @description: 类型
   * @type: number
   * @default:
   **/
  type: number;

  /**
   * @description: 属性值
   * @type: string
   * @default:
   **/
  value: string;

  /**
   * @description: id
   * @type: number
   * @default:
   **/
  id: number;
}
