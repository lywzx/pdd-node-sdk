export const PDD_CLOUDPRINT_CUSTOMARES_GET = 'PDD_CLOUDPRINT_CUSTOMARES_GET';

/**
 * 接口名称：获取商家的自定义区模板信息
 * 接口标识：pdd.cloudprint.customares.get
 * 接口使用场景：供isv使用，获取商家的自定义区的模板信息
 **/

export interface PddCloudprintCustomaresGetRequestInterface {
  /**
   * @description: 用户使用的模板id，即pdd.cloudprint.stdtemplates.get接口中的standard_template_id
   * @type: string
   * @default:
   **/
  template_id?: string;
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
 * @example
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
   * @description:
   * @type: PddCloudprintCustomaresGetPddCloudprintCustomaresGetResponseResultDatasResponseInterface[]
   * @default:
   *
   **/
  datas: PddCloudprintCustomaresGetPddCloudprintCustomaresGetResponseResultDatasResponseInterface[];
}

/**
 * @description
 * @default
 * @example
 **/

export interface PddCloudprintCustomaresGetPddCloudprintCustomaresGetResponseResultDatasResponseInterface {
  /**
   * @description:
   * @type: number
   * @default:
   **/
  custom_area_id: number;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  custom_area_name: string;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  custom_area_url: string;

  /**
   * @description:
   * @type: PddCloudprintCustomaresGetPddCloudprintCustomaresGetResponseResultDatasKeysResponseInterface[]
   * @default:
   *
   **/
  keys: PddCloudprintCustomaresGetPddCloudprintCustomaresGetResponseResultDatasKeysResponseInterface[];
}

/**
 * @description
 * @default
 * @example
 **/

export interface PddCloudprintCustomaresGetPddCloudprintCustomaresGetResponseResultDatasKeysResponseInterface {
  /**
   * @description:
   * @type: string
   * @default:
   **/
  key_name: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_CLOUDPRINT_CUSTOMARES_GET]: {
    requestInterface: PddCloudprintCustomaresGetRequestInterface;
    responseInterface: PddCloudprintCustomaresGetResponseInterface;
  };
}
