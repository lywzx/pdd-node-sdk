export const PDD_CLOUDPRINT_CUSTOMARES_GET = 'pdd.cloudprint.customares.get';
export const PDD_CLOUDPRINT_CUSTOMARES_GET_RESPONSE_KEY = 'pdd_cloudprint_customares_get_response';

/**
 * 接口名称：获取商家的自定义区模板信息
 * 接口标识：pdd.cloudprint.customares.get
 * 接口使用场景：供isv使用，获取商家的自定义区的模板信息
 **/
export interface PddCloudprintCustomaresGetRequestInterface {
  /**
   * @description: 1
   * @type: number
   * @default:
   **/
  template_id: number;
}

/**
 * 接口名称：获取商家的自定义区模板信息
 * 接口标识：pdd.cloudprint.customares.get
 * 接口使用场景：供isv使用，获取商家的自定义区的模板信息
 **/
export interface PddCloudprintCustomaresGetResponseInterface {
  /**
   * @description: response
   * @type: PddCloudprintCustomaresGetPddCloudprintCustomaresGetResponseResponseInterface
   * @default:
   *
   **/
  pdd_cloudprint_customares_get_response: PddCloudprintCustomaresGetPddCloudprintCustomaresGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example 1
 **/
export interface PddCloudprintCustomaresGetPddCloudprintCustomaresGetResponseResponseInterface {
  /**
   * @description: result
   * @type: PddCloudprintCustomaresGetPddCloudprintCustomaresGetResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddCloudprintCustomaresGetPddCloudprintCustomaresGetResponseResultResponseInterface;
}

/**
 * @description result
 * @default
 * @example
 **/
export interface PddCloudprintCustomaresGetPddCloudprintCustomaresGetResponseResultResponseInterface {
  /**
   * @description: datas
   * @type: PddCloudprintCustomaresGetPddCloudprintCustomaresGetResponseResultDatasResponseInterface[]
   * @default:
   *
   **/
  datas: PddCloudprintCustomaresGetPddCloudprintCustomaresGetResponseResultDatasResponseInterface[];
}

/**
 * @description datas
 * @default
 * @example
 **/
export interface PddCloudprintCustomaresGetPddCloudprintCustomaresGetResponseResultDatasResponseInterface {
  /**
   * @description: custom_area_id
   * @type: string | number
   * @default:
   **/
  custom_area_id: string | number;

  /**
   * @description: custom_area_name
   * @type: string
   * @default:
   **/
  custom_area_name: string;

  /**
   * @description: custom_area_url
   * @type: string
   * @default:
   **/
  custom_area_url: string;

  /**
   * @description: keys
   * @type: string[]
   * @default:
   **/
  keys: string[];
}
