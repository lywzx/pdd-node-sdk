export const PDD_CLOUD_WAYBILL_GET = 'pdd.cloud.waybill.get';
export const PDD_CLOUD_WAYBILL_GET_RESPONSE_KEY = 'pdd_waybill_get_response';

/**
 * 接口名称：云内电子面单获取接口
 * 接口标识：pdd.cloud.waybill.get
 * 接口使用场景：友商云调用部署在云内的电子面单接口
 **/
export interface PddCloudWaybillGetRequestInterface {
  /**
   * @description: 入参信息
   * @type: PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestRequestInterface
   * @default:
   *
   **/
  param_waybill_cloud_print_apply_new_request: PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestRequestInterface;
}

/**
 * @description 入参信息
 * @default
 * @example
 **/
export interface PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestRequestInterface {
  /**
   * @description: 设定取号返回的云打印报文是否加密
   * @type: boolean
   * @default:
   **/
  need_encrypt?: boolean;

  /**
   * @description: 发货人信息
   * @type: PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestSenderRequestInterface
   * @default:
   *
   **/
  sender: PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestSenderRequestInterface;

  /**
   * @description: 请求面单信息，数量限制为10
   * @type: PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosRequestInterface[]
   * @default:
   *
   **/
  trade_order_info_dtos?: PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosRequestInterface[];

  /**
   * @description: 物流公司Code
   * @type: string
   * @default:
   **/
  wp_code?: string;

  /**
   * @description: 第三方授权token
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
  extendProps?: string;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn?: string;
}

/**
 * @description 发货人信息
 * @default
 * @example
 **/
export interface PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestSenderRequestInterface {
  /**
   * @description: 地址
   * @type: PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestSenderAddressRequestInterface
   * @default:
   *
   **/
  address?: PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestSenderAddressRequestInterface;

  /**
   * @description: 手机号
   * @type: string
   * @default:
   **/
  mobile?: string;

  /**
   * @description: 姓名
   * @type: string
   * @default:
   **/
  name: string;

  /**
   * @description: 电话
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
export interface PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestSenderAddressRequestInterface {
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
  detail: string;

  /**
   * @description: 街道
   * @type: string
   * @default:
   **/
  district?: string;

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
  town?: string;

  /**
   * @description: 地区/国家
   * @type: string
   * @default:
   **/
  country?: string;
}

/**
 * @description 请求面单信息，数量限制为10
 * @default
 * @example
 **/
export interface PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosRequestInterface {
  /**
   * @description: 物流服务内容链接
   * @type: string
   * @default:
   **/
  logistics_services?: string;

  /**
   * @description: 请求id
   * @type: string
   * @default:
   **/
  object_id?: string;

  /**
   * @description: 订单信息
   * @type: PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosOrderInfoRequestInterface
   * @default:
   *
   **/
  order_info?: PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosOrderInfoRequestInterface;

  /**
   * @description: 包裹信息
   * @type: PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosPackageInfoRequestInterface
   * @default:
   *
   **/
  package_info?: PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosPackageInfoRequestInterface;

  /**
   * @description: 收件人信息
   * @type: PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosRecipientRequestInterface
   * @default:
   *
   **/
  recipient?: PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosRecipientRequestInterface;

  /**
   * @description: 使用者ID
   * @type: string
   * @default:
   **/
  user_id?: string;

  /**
   * @description: 标准模板模板URL
   * @type: string
   * @default:
   **/
  template_url?: string;
}

/**
 * @description 订单信息
 * @default
 * @example
 **/
export interface PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosOrderInfoRequestInterface {
  /**
   * @description: 订单渠道平台编码
   * @type: string
   * @default:
   **/
  order_channels_type?: string;

  /**
   * @description: 订单号,数量限制100
   * @type: string[]
   * @default:
   **/
  trade_order_list?: string[];
}

/**
 * @description 包裹信息
 * @default
 * @example
 **/
export interface PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosPackageInfoRequestInterface {
  /**
   * @description: 快运货品描述
   * @type: string
   * @default:
   **/
  goods_description?: string;

  /**
   * @description: 包裹id,拆合单使用
   * @type: string
   * @default:
   **/
  id?: string;

  /**
   * @description: 商品信息,数量限制为100
   * @type: PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosPackageInfoItemsRequestInterface[]
   * @default:
   *
   **/
  items?: PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosPackageInfoItemsRequestInterface[];

  /**
   * @description: 快运包装方式描述
   * @type: string
   * @default:
   **/
  packaging_description?: string;

  /**
   * @description: 子母件总包裹数
   * @type: string
   * @default:
   **/
  total_packages_count?: string;

  /**
   * @description: 体积, 单位 ml
   * @type: string
   * @default:
   **/
  volume?: string;

  /**
   * @description: 重量,单位 g
   * @type: string
   * @default:
   **/
  weight?: string;
}

/**
 * @description 商品信息,数量限制为100
 * @default
 * @example
 **/
export interface PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosPackageInfoItemsRequestInterface {
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
}

/**
 * @description 收件人信息
 * @default
 * @example
 **/
export interface PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosRecipientRequestInterface {
  /**
   * @description: 地址
   * @type: PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosRecipientAddressRequestInterface
   * @default:
   *
   **/
  address?: PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosRecipientAddressRequestInterface;

  /**
   * @description: 手机号
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
   * @description: 电话
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
export interface PddCloudWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosRecipientAddressRequestInterface {
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
   * @description: 街道
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
   * @description: 镇
   * @type: string
   * @default:
   **/
  town?: string;

  /**
   * @description: 地区/国家
   * @type: string
   * @default:
   **/
  country?: string;
}

/**
 * 接口名称：云内电子面单获取接口
 * 接口标识：pdd.cloud.waybill.get
 * 接口使用场景：友商云调用部署在云内的电子面单接口
 **/
export interface PddCloudWaybillGetResponseInterface {
  /**
   * @description: 响应结果
   * @type: PddCloudWaybillGetPddWaybillGetResponseResponseInterface
   * @default:
   *
   **/
  pdd_waybill_get_response: PddCloudWaybillGetPddWaybillGetResponseResponseInterface;
}

/**
 * @description 响应结果
 * @default
 * @example
 **/
export interface PddCloudWaybillGetPddWaybillGetResponseResponseInterface {
  /**
   * @description: 结果集
   * @type: PddCloudWaybillGetPddWaybillGetResponseModulesResponseInterface[]
   * @default:
   *
   **/
  modules: PddCloudWaybillGetPddWaybillGetResponseModulesResponseInterface[];

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

/**
 * @description 结果集
 * @default
 * @example
 **/
export interface PddCloudWaybillGetPddWaybillGetResponseModulesResponseInterface {
  /**
   * @description: 请求id
   * @type: string
   * @default:
   **/
  object_id: string;

  /**
   * @description: 快运母单号
   * @type: string
   * @default:
   **/
  parent_waybill_code: string;

  /**
   * @description: 面单信息
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
