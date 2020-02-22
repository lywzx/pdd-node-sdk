export const PDD_SMS_CREATE_CUSTOM_TEMPLATE = 'PDD_SMS_CREATE_CUSTOM_TEMPLATE';

/**
 * 接口名称：创建自定义模板
 * 接口标识：pdd.sms.create.custom.template
 * 接口使用场景：创建自定义短信模板
 **/

export interface PddSmsCreateCustomTemplateRequestInterface {
  /**
   * @description: 短信模板名称
   * @type: string
   * @default:
   **/
  name?: string;

  /**
   * @description: 拼接短信内容
   * @type: PddSmsCreateCustomTemplateContentRequestInterface[]
   * @default:
   *
   **/
  content?: PddSmsCreateCustomTemplateContentRequestInterface[];
}

/**
 * @description 拼接短信内容
 * @default
 * @example
 **/

export interface PddSmsCreateCustomTemplateContentRequestInterface {
  /**
   * @description: 短信内容
   * @type: string
   * @default:
   **/
  value?: string;

  /**
   * @description: 文本类型。1：自定义短信内容，2：店铺短链接，3：商品短链接，4：优惠券面额，5：优惠券到期时间
   * @type: number
   * @default:
   **/
  type?: number;
}

/**
 * 接口名称：创建自定义模板
 * 接口标识：pdd.sms.create.custom.template
 * 接口使用场景：创建自定义短信模板
 **/

export interface PddSmsCreateCustomTemplateResponseInterface {
  /**
   * @description: 创建结果
   * @type: PddSmsCreateCustomTemplateSmsCreateCustomTemplateResponseResponseInterface
   * @default:
   *
   **/
  sms_create_custom_template_response: PddSmsCreateCustomTemplateSmsCreateCustomTemplateResponseResponseInterface;
}

/**
 * @description 创建结果
 * @default
 * @example
 **/

export interface PddSmsCreateCustomTemplateSmsCreateCustomTemplateResponseResponseInterface {
  /**
   * @description: 请求结果
   * @type: string
   * @default:
   **/
  result: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_SMS_CREATE_CUSTOM_TEMPLATE]: {
    requestInterface: PddSmsCreateCustomTemplateRequestInterface;
    responseInterface: PddSmsCreateCustomTemplateResponseInterface;
  };
}
