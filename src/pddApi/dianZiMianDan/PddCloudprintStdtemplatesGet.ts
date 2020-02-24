export const PDD_CLOUDPRINT_STDTEMPLATES_GET = 'pdd.cloudprint.stdtemplates.get';
export const PDD_CLOUDPRINT_STDTEMPLATES_GET_RESPONSE_KEY = 'pdd_cloudprint_stdtemplates_get_response';

/**
 * 接口名称：获取所有标准电子面单模板
 * 接口标识：pdd.cloudprint.stdtemplates.get
 * 接口使用场景：获取所有标准电子面单模板
 **/
export interface PddCloudprintStdtemplatesGetRequestInterface {
  /**
   * @description: 快递公司code
   * @type: string
   * @default:
   **/
  wp_code: string;
}

/**
 * 接口名称：获取所有标准电子面单模板
 * 接口标识：pdd.cloudprint.stdtemplates.get
 * 接口使用场景：获取所有标准电子面单模板
 **/
export interface PddCloudprintStdtemplatesGetResponseInterface {
  /**
   * @description: Response
   * @type: PddCloudprintStdtemplatesGetPddCloudprintStdtemplatesGetResponseResponseInterface
   * @default:
   *
   **/
  pdd_cloudprint_stdtemplates_get_response: PddCloudprintStdtemplatesGetPddCloudprintStdtemplatesGetResponseResponseInterface;
}

/**
 * @description Response
 * @default
 * @example
 **/
export interface PddCloudprintStdtemplatesGetPddCloudprintStdtemplatesGetResponseResponseInterface {
  /**
   * @description: 结果集
   * @type: PddCloudprintStdtemplatesGetPddCloudprintStdtemplatesGetResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddCloudprintStdtemplatesGetPddCloudprintStdtemplatesGetResponseResultResponseInterface;
}

/**
 * @description 结果集
 * @default
 * @example
 **/
export interface PddCloudprintStdtemplatesGetPddCloudprintStdtemplatesGetResponseResultResponseInterface {
  /**
   * @description: 所有wp的标准模板
   * @type: PddCloudprintStdtemplatesGetPddCloudprintStdtemplatesGetResponseResultDatasResponseInterface[]
   * @default:
   *
   **/
  datas: PddCloudprintStdtemplatesGetPddCloudprintStdtemplatesGetResponseResultDatasResponseInterface[];
}

/**
 * @description 所有wp的标准模板
 * @default
 * @example
 **/
export interface PddCloudprintStdtemplatesGetPddCloudprintStdtemplatesGetResponseResultDatasResponseInterface {
  /**
   * @description: 该wp的所有标准模板
   * @type: PddCloudprintStdtemplatesGetPddCloudprintStdtemplatesGetResponseResultDatasStandardTemplatesResponseInterface[]
   * @default:
   *
   **/
  standard_templates: PddCloudprintStdtemplatesGetPddCloudprintStdtemplatesGetResponseResultDatasStandardTemplatesResponseInterface[];

  /**
   * @description: wp编码
   * @type: string
   * @default:
   **/
  wp_code: string;
}

/**
 * @description 该wp的所有标准模板
 * @default
 * @example
 **/
export interface PddCloudprintStdtemplatesGetPddCloudprintStdtemplatesGetResponseResultDatasStandardTemplatesResponseInterface {
  /**
   * @description: 模板名称
   * @type: string
   * @default:
   **/
  standard_template_name: string;

  /**
   * @description: 模板url
   * @type: string
   * @default:
   **/
  standard_template_url: string;

  /**
   * @description: 模版类型
   * @type: number
   * @default:
   **/
  standard_waybill_type: number;

  /**
   * @description: 标准模板id
   * @type: string
   * @default:
   **/
  standard_template_id: string;
}
