export const PDD_WAYBILL_UPDATE = 'pdd.waybill.update';
export const PDD_WAYBILL_UPDATE_RESPONSE_KEY = 'pdd_waybill_update_response';

/**
 * 接口名称：电子面单云打印更新接口
 * 接口标识：pdd.waybill.update
 * 接口使用场景：电子面单云打印更新接口
 **/
export interface PddWaybillUpdateRequestInterface {
  /**
   * @description: param_waybill_cloud_print_update_request
   * @type: PddWaybillUpdateParamWaybillCloudPrintUpdateRequestRequestInterface
   * @default:
   *
   **/
  param_waybill_cloud_print_update_request?: PddWaybillUpdateParamWaybillCloudPrintUpdateRequestRequestInterface;
}

/**
 * @description param_waybill_cloud_print_update_request
 * @default
 * @example
 **/
export interface PddWaybillUpdateParamWaybillCloudPrintUpdateRequestRequestInterface {
  /**
   * @description: 请求表示id
   * @type: string
   * @default:
   **/
  object_id: string;

  /**
   * @description: 包裹信息
   * @type: PddWaybillUpdateParamWaybillCloudPrintUpdateRequestPackageInfoRequestInterface
   * @default:
   *
   **/
  package_info: PddWaybillUpdateParamWaybillCloudPrintUpdateRequestPackageInfoRequestInterface;

  /**
   * @description: 收件信息
   * @type: PddWaybillUpdateParamWaybillCloudPrintUpdateRequestRecipientRequestInterface
   * @default:
   *
   **/
  recipient: PddWaybillUpdateParamWaybillCloudPrintUpdateRequestRecipientRequestInterface;

  /**
   * @description: 发件信息
   * @type: PddWaybillUpdateParamWaybillCloudPrintUpdateRequestSenderRequestInterface
   * @default:
   *
   **/
  sender: PddWaybillUpdateParamWaybillCloudPrintUpdateRequestSenderRequestInterface;

  /**
   * @description: 模板URL
   * @type: string
   * @default:
   **/
  template_url: string;

  /**
   * @description: 面单号
   * @type: string
   * @default:
   **/
  waybill_code?: string;

  /**
   * @description: 物流公司CODE
   * @type: string
   * @default:
   **/
  wp_code?: string;
}

/**
 * @description 包裹信息
 * @default
 * @example
 **/
export interface PddWaybillUpdateParamWaybillCloudPrintUpdateRequestPackageInfoRequestInterface {
  /**
   * @description: 商品
   * @type: PddWaybillUpdateParamWaybillCloudPrintUpdateRequestPackageInfoItemsRequestInterface[]
   * @default:
   *
   **/
  items: PddWaybillUpdateParamWaybillCloudPrintUpdateRequestPackageInfoItemsRequestInterface[];

  /**
   * @description: 体积
   * @type: string | number
   * @default:
   **/
  volume: string | number;

  /**
   * @description: 重量
   * @type: string | number
   * @default:
   **/
  weight: string | number;
}

/**
 * @description 商品
 * @default
 * @example
 **/
export interface PddWaybillUpdateParamWaybillCloudPrintUpdateRequestPackageInfoItemsRequestInterface {
  /**
   * @description: 数量
   * @type: number
   * @default:
   **/
  count: number;

  /**
   * @description: 名称
   * @type: string
   * @default:
   **/
  name: string;
}

/**
 * @description 收件信息
 * @default
 * @example
 **/
export interface PddWaybillUpdateParamWaybillCloudPrintUpdateRequestRecipientRequestInterface {
  /**
   * @description: 地址
   * @type: PddWaybillUpdateParamWaybillCloudPrintUpdateRequestRecipientAddressRequestInterface
   * @default:
   *
   **/
  address: PddWaybillUpdateParamWaybillCloudPrintUpdateRequestRecipientAddressRequestInterface;

  /**
   * @description: 手机号码
   * @type: string
   * @default:
   **/
  mobile: string;

  /**
   * @description: 姓名
   * @type: string
   * @default:
   **/
  name: string;

  /**
   * @description: 固定电话
   * @type: string
   * @default:
   **/
  phone: string;
}

/**
 * @description 地址
 * @default
 * @example
 **/
export interface PddWaybillUpdateParamWaybillCloudPrintUpdateRequestRecipientAddressRequestInterface {
  /**
   * @description: 城市
   * @type: string
   * @default:
   **/
  city: string;

  /**
   * @description: 详细地址
   * @type: string
   * @default:
   **/
  detail: string;

  /**
   * @description: 区地址
   * @type: string
   * @default:
   **/
  district: string;

  /**
   * @description: 省
   * @type: string
   * @default:
   **/
  province: string;

  /**
   * @description: 街道
   * @type: string
   * @default:
   **/
  town: string;

  /**
   * @description: 国家/地区
   * @type: string
   * @default:
   **/
  country: string;
}

/**
 * @description 发件信息
 * @default
 * @example
 **/
export interface PddWaybillUpdateParamWaybillCloudPrintUpdateRequestSenderRequestInterface {
  /**
   * @description: 手机号码
   * @type: string
   * @default:
   **/
  mobile: string;

  /**
   * @description: 姓名
   * @type: string
   * @default:
   **/
  name: string;

  /**
   * @description: 固定电话
   * @type: string
   * @default:
   **/
  phone: string;
}

/**
 * 接口名称：电子面单云打印更新接口
 * 接口标识：pdd.waybill.update
 * 接口使用场景：电子面单云打印更新接口
 **/
export interface PddWaybillUpdateResponseInterface {
  /**
   * @description: response
   * @type: PddWaybillUpdatePddWaybillUpdateResponseResponseInterface
   * @default:
   *
   **/
  pdd_waybill_update_response: PddWaybillUpdatePddWaybillUpdateResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddWaybillUpdatePddWaybillUpdateResponseResponseInterface {
  /**
   * @description: 模板内容
   * @type: string
   * @default:
   **/
  print_data: string;

  /**
   * @description: 面单号
   * @type: string
   * @default:
   **/
  waybill_code: string;
}
