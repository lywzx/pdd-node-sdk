export const PDD_SERVICE_MAIL_SERVICE_TIME_QUERY = 'pdd.service.mail.service.time.query';

/**
 * 接口名称：服务时间查询接口
 * 接口标识：pdd.service.mail.service.time.query
 * 接口使用场景：服务时间查询
 **/
export interface PddServiceMailServiceTimeQueryRequestInterface {
  /**
   * @description: 请求参数
   * @type: PddServiceMailServiceTimeQueryRequestRequestInterface
   * @default:
   *
   **/
  request?: PddServiceMailServiceTimeQueryRequestRequestInterface;
}

/**
 * @description 请求参数
 * @default
 * @example
 **/
export interface PddServiceMailServiceTimeQueryRequestRequestInterface {
  /**
   * @description: 省名称
   * @type: string
   * @default:
   **/
  provName?: string;

  /**
   * @description: 市名称
   * @type: string
   * @default:
   **/
  cityName?: string;

  /**
   * @description: 区名称
   * @type: string
   * @default:
   **/
  districtName?: string;

  /**
   * @description: 街道名称
   * @type: string
   * @default:
   **/
  streetName?: string;

  /**
   * @description: 寄件类型
   * @type: string
   * @default:
   **/
  postType?: string;

  /**
   * @description: 收件省名称
   * @type: string
   * @default:
   **/
  receiveProvName?: string;

  /**
   * @description: 收件市名称
   * @type: string
   * @default:
   **/
  receiveCityName?: string;

  /**
   * @description: 收件区名称
   * @type: string
   * @default:
   **/
  receiveDistrictName?: string;

  /**
   * @description: 收件街道名称
   * @type: string
   * @default:
   **/
  receiveStreetName?: string;

  /**
   * @description: 收件详细地址
   * @type: string
   * @default:
   **/
  receiveAddrDetail?: string;

  /**
   * @description: 扩展信息； options如果不存在，说明不需要对发货地收货地校验
   * @type: string
   * @default:
   **/
  attributes?: string;
}

/**
 * 接口名称：服务时间查询接口
 * 接口标识：pdd.service.mail.service.time.query
 * 接口使用场景：服务时间查询
 **/
export interface PddServiceMailServiceTimeQueryResponseInterface {
  /**
   * @description:
   * @type: PddServiceMailServiceTimeQueryResponseResponseInterface
   * @default:
   *
   **/
  response: PddServiceMailServiceTimeQueryResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddServiceMailServiceTimeQueryResponseResponseInterface {
  /**
   * @description:
   * @type: number
   * @default:
   **/
  errorCode: number;

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  flag: boolean;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  errorMsg: string;

  /**
   * @description:
   * @type: PddServiceMailServiceTimeQueryResponseServiceTimesResponseInterface[]
   * @default:
   *
   **/
  serviceTimes: PddServiceMailServiceTimeQueryResponseServiceTimesResponseInterface[];

  /**
   * @description:
   * @type: PddServiceMailServiceTimeQueryResponseServiceOptionsResponseInterface
   * @default:
   *
   **/
  serviceOptions: PddServiceMailServiceTimeQueryResponseServiceOptionsResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddServiceMailServiceTimeQueryResponseServiceTimesResponseInterface {
  /**
   * @description: 开始服务时间
   * @type: string
   * @default:
   **/
  startTime: string;

  /**
   * @description: 结束服务时间
   * @type: string
   * @default:
   **/
  endTime: string;

  /**
   * @description: 服务日期
   * @type: string
   * @default:
   **/
  serviceDate: string;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddServiceMailServiceTimeQueryResponseServiceOptionsResponseInterface {
  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  canSend: boolean;

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  canReceivce: boolean;
}
