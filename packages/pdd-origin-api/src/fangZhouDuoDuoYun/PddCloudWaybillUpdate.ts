export const PDD_CLOUD_WAYBILL_UPDATE = 'pdd.cloud.waybill.update';
export const PDD_CLOUD_WAYBILL_UPDATE_RESPONSE_KEY = 'pdd_waybill_update_response';

/**
 * 接口名称：云内电子面单更新接口
 * 接口标识：pdd.cloud.waybill.update
 * 接口使用场景：云内电子面单更新接口
 **/
export interface PddCloudWaybillUpdateRequestInterface {
  /**
   * @description: 订单面单更新接口
   * @type: PddCloudWaybillUpdateWaybillCloudPrintUpdateRequestRequestInterface
   * @default:
   *
   **/
  waybill_cloud_print_update_request?: PddCloudWaybillUpdateWaybillCloudPrintUpdateRequestRequestInterface;
}

/**
 * @description 订单面单更新接口
 * @default
 * @example
 **/
export interface PddCloudWaybillUpdateWaybillCloudPrintUpdateRequestRequestInterface {
  /**
   * @description: 请求表示id
   * @type: string
   * @default:
   **/
  object_id?: string;

  /**
   * @description: 包裹信息
   * @type: PddCloudWaybillUpdateWaybillCloudPrintUpdateRequestPackageInfoRequestInterface
   * @default:
   *
   **/
  package_info?: PddCloudWaybillUpdateWaybillCloudPrintUpdateRequestPackageInfoRequestInterface;

  /**
   * @description: 收件信息
   * @type: PddCloudWaybillUpdateWaybillCloudPrintUpdateRequestRecipientRequestInterface
   * @default:
   *
   **/
  recipient?: PddCloudWaybillUpdateWaybillCloudPrintUpdateRequestRecipientRequestInterface;

  /**
   * @description: 发件信息
   * @type: PddCloudWaybillUpdateWaybillCloudPrintUpdateRequestSenderRequestInterface
   * @default:
   *
   **/
  sender?: PddCloudWaybillUpdateWaybillCloudPrintUpdateRequestSenderRequestInterface;

  /**
   * @description: 模板URL
   * @type: string
   * @default:
   **/
  template_url?: string;

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

  /**
   * @description: 第三方token
   * @type: string
   * @default:
   **/
  token?: string;

  /**
   * @description: 扩展字段
   * @type: string | number
   * @default:
   **/
  ext_id?: string | number;

  /**
   * @description: 扩展字段
   * @type: string
   * @default:
   **/
  ext_fields?: string;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn?: string;
}

/**
 * @description 包裹信息
 * @default
 * @example
 **/
export interface PddCloudWaybillUpdateWaybillCloudPrintUpdateRequestPackageInfoRequestInterface {
  /**
   * @description: 商品
   * @type: PddCloudWaybillUpdateWaybillCloudPrintUpdateRequestPackageInfoItemsRequestInterface[]
   * @default:
   *
   **/
  items?: PddCloudWaybillUpdateWaybillCloudPrintUpdateRequestPackageInfoItemsRequestInterface[];

  /**
   * @description: 体积
   * @type: string | number
   * @default:
   **/
  volume?: string | number;

  /**
   * @description: 重量
   * @type: string | number
   * @default:
   **/
  weight?: string | number;
}

/**
 * @description 商品
 * @default
 * @example
 **/
export interface PddCloudWaybillUpdateWaybillCloudPrintUpdateRequestPackageInfoItemsRequestInterface {
  /**
   * @description: 数量
   * @type: number
   * @default:
   **/
  count?: number;

  /**
   * @description: 名称
   * @type: string
   * @default:
   **/
  name?: string;

  /**
   * @description: 扩展
   * @type: string
   * @default:
   **/
  ext_json?: string;
}

/**
 * @description 收件信息
 * @default
 * @example
 **/
export interface PddCloudWaybillUpdateWaybillCloudPrintUpdateRequestRecipientRequestInterface {
  /**
   * @description: 地址
   * @type: PddCloudWaybillUpdateWaybillCloudPrintUpdateRequestRecipientAddressRequestInterface
   * @default:
   *
   **/
  address?: PddCloudWaybillUpdateWaybillCloudPrintUpdateRequestRecipientAddressRequestInterface;

  /**
   * @description: 手机号码
   * @type: string
   * @default:
   **/
  mobile?: string;

  /**
   * @description: 姓名
   * @type: string
   * @default:
   **/
  name?: string;

  /**
   * @description: 固定电话
   * @type: string
   * @default:
   **/
  phone?: string;
}

/**
 * @description 地址
 * @default
 * @example
 **/
export interface PddCloudWaybillUpdateWaybillCloudPrintUpdateRequestRecipientAddressRequestInterface {
  /**
   * @description: 城市
   * @type: string
   * @default:
   **/
  city?: string;

  /**
   * @description: 详细地址
   * @type: string
   * @default:
   **/
  detail?: string;

  /**
   * @description: 区地址
   * @type: string
   * @default:
   **/
  district?: string;

  /**
   * @description: 省
   * @type: string
   * @default:
   **/
  province?: string;

  /**
   * @description: 街道
   * @type: string
   * @default:
   **/
  town?: string;

  /**
   * @description: 国家/地区
   * @type: string
   * @default:
   **/
  country?: string;
}

/**
 * @description 发件信息
 * @default
 * @example
 **/
export interface PddCloudWaybillUpdateWaybillCloudPrintUpdateRequestSenderRequestInterface {
  /**
   * @description: 手机号码
   * @type: string
   * @default:
   **/
  mobile?: string;

  /**
   * @description: 姓名
   * @type: string
   * @default:
   **/
  name?: string;

  /**
   * @description: 固定电话
   * @type: string
   * @default:
   **/
  phone?: string;
}

/**
 * 接口名称：云内电子面单更新接口
 * 接口标识：pdd.cloud.waybill.update
 * 接口使用场景：云内电子面单更新接口
 **/
export interface PddCloudWaybillUpdateResponseInterface {
  /**
   * @description: 响应
   * @type: PddCloudWaybillUpdatePddWaybillUpdateResponseResponseInterface
   * @default:
   *
   **/
  pdd_waybill_update_response: PddCloudWaybillUpdatePddWaybillUpdateResponseResponseInterface;
}

/**
 * @description 响应
 * @default
 * @example
 **/
export interface PddCloudWaybillUpdatePddWaybillUpdateResponseResponseInterface {
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

  /**
   * @description: 是否成功，false-失败，true-成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;

  /**
   * @description: 错误信息
   * @type: string
   * @default:
   **/
  error_msg: string;

  /**
   * @description: 子错误信息
   * @type: string
   * @default:
   **/
  sub_msg: string;

  /**
   * @description: 错误码
   * @type: number
   * @default:
   **/
  sub_code: number;

  /**
   * @description: 子错误码
   * @type: number
   * @default:
   **/
  error_code: number;
}
