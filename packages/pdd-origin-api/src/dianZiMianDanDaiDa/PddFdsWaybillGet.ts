export const PDD_FDS_WAYBILL_GET = 'pdd.fds.waybill.get';
export const PDD_FDS_WAYBILL_GET_RESPONSE_KEY = 'pdd_fds_waybill_get_response';
export const PDD_FDS_WAYBILL_GET_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 1,
    times: 1000,
    callSourceType: 0,
  },
];

/**
 * 接口名称：电子面单取号
 * 接口标识：pdd.fds.waybill.get
 * 接口使用场景：使用商家订单上的收件人信息电子面单取号
 **/
export interface PddFdsWaybillGetRequestInterface {
  /**
   * @description: 入参信息
   * @type: PddFdsWaybillGetParamFdsWaybillGetRequestRequestInterface
   * @default:
   *
   **/
  param_fds_waybill_get_request: PddFdsWaybillGetParamFdsWaybillGetRequestRequestInterface;
}

/**
 * @description 入参信息
 * @default
 * @example
 **/
export interface PddFdsWaybillGetParamFdsWaybillGetRequestRequestInterface {
  /**
   * @description: 发货人信息
   * @type: PddFdsWaybillGetParamFdsWaybillGetRequestSenderRequestInterface
   * @default:
   *
   **/
  sender: PddFdsWaybillGetParamFdsWaybillGetRequestSenderRequestInterface;

  /**
   * @description: 取号列表
   * @type: PddFdsWaybillGetParamFdsWaybillGetRequestTradeOrderInfoDtosRequestInterface[]
   * @default:
   *
   **/
  trade_order_info_dtos: PddFdsWaybillGetParamFdsWaybillGetRequestTradeOrderInfoDtosRequestInterface[];

  /**
   * @description: 物流公司 Code ，枚举： YTO- 圆通，ZTO-中通，YUNDA-韵达，STO-申通
   * @type: string
   * @default:
   **/
  wp_code: string;
}

/**
 * @description 发货人信息
 * @default
 * @example
 **/
export interface PddFdsWaybillGetParamFdsWaybillGetRequestSenderRequestInterface {
  /**
   * @description: 发货地址，需要入参与 search 接口中的发货人地址信息一致
   * @type: PddFdsWaybillGetParamFdsWaybillGetRequestSenderAddressRequestInterface
   * @default:
   *
   **/
  address: PddFdsWaybillGetParamFdsWaybillGetRequestSenderAddressRequestInterface;

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
 * @description 发货地址，需要入参与 search 接口中的发货人地址信息一致
 * @default
 * @example
 **/
export interface PddFdsWaybillGetParamFdsWaybillGetRequestSenderAddressRequestInterface {
  /**
   * @description: 市
   * @type: string
   * @default:
   **/
  city: string;

  /**
   * @description: 国家/地区
   * @type: string
   * @default:
   **/
  country?: string;

  /**
   * @description: 详细地址
   * @type: string
   * @default:
   **/
  detail: string;

  /**
   * @description: 区
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
  town?: string;
}

/**
 * @description 取号列表
 * @default
 * @example
 **/
export interface PddFdsWaybillGetParamFdsWaybillGetRequestTradeOrderInfoDtosRequestInterface {
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
  object_id: string;

  /**
   * @description: 订单信息
   * @type: PddFdsWaybillGetParamFdsWaybillGetRequestTradeOrderInfoDtosOrderInfoRequestInterface
   * @default:
   *
   **/
  order_info: PddFdsWaybillGetParamFdsWaybillGetRequestTradeOrderInfoDtosOrderInfoRequestInterface;

  /**
   * @description: 包裹信息
   * @type: PddFdsWaybillGetParamFdsWaybillGetRequestTradeOrderInfoDtosPackageInfoRequestInterface
   * @default:
   *
   **/
  package_info: PddFdsWaybillGetParamFdsWaybillGetRequestTradeOrderInfoDtosPackageInfoRequestInterface;

  /**
   * @description: 标准模板模板URL
   * @type: string
   * @default:
   **/
  template_url: string;

  /**
   * @description: 使用者ID
   * @type: string | number
   * @default:
   **/
  user_id: string | number;
}

/**
 * @description 订单信息
 * @default
 * @example
 **/
export interface PddFdsWaybillGetParamFdsWaybillGetRequestTradeOrderInfoDtosOrderInfoRequestInterface {
  /**
   * @description: 订单渠道平台编码
   * @type: string
   * @default:
   **/
  order_channels_type: string;

  /**
   * @description: 订单列表，限制100个
   * @type: PddFdsWaybillGetParamFdsWaybillGetRequestTradeOrderInfoDtosOrderInfoTradeOrderListRequestInterface[]
   * @default:
   *
   **/
  trade_order_list: PddFdsWaybillGetParamFdsWaybillGetRequestTradeOrderInfoDtosOrderInfoTradeOrderListRequestInterface[];
}

/**
 * @description 订单列表，限制100个
 * @default
 * @example
 **/
export interface PddFdsWaybillGetParamFdsWaybillGetRequestTradeOrderInfoDtosOrderInfoTradeOrderListRequestInterface {
  /**
   * @description: 代打店铺id
   * @type: string
   * @default:
   **/
  mall_mask_id: string;

  /**
   * @description: 代打订单号
   * @type: string
   * @default:
   **/
  order_mask_sn: string;
}

/**
 * @description 包裹信息
 * @default
 * @example
 **/
export interface PddFdsWaybillGetParamFdsWaybillGetRequestTradeOrderInfoDtosPackageInfoRequestInterface {
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
   * @type: PddFdsWaybillGetParamFdsWaybillGetRequestTradeOrderInfoDtosPackageInfoItemsRequestInterface[]
   * @default:
   *
   **/
  items: PddFdsWaybillGetParamFdsWaybillGetRequestTradeOrderInfoDtosPackageInfoItemsRequestInterface[];

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
   * @type: number
   * @default:
   **/
  volume?: number;

  /**
   * @description: 重量,单位 g
   * @type: number
   * @default:
   **/
  weight?: number;
}

/**
 * @description 商品信息,数量限制为100
 * @default
 * @example
 **/
export interface PddFdsWaybillGetParamFdsWaybillGetRequestTradeOrderInfoDtosPackageInfoItemsRequestInterface {
  /**
   * @description: 数量
   * @type: number
   * @default:
   **/
  count: number;

  /**
   * @description: 商品名称
   * @type: string
   * @default:
   **/
  name: string;
}

/**
 * 接口名称：电子面单取号
 * 接口标识：pdd.fds.waybill.get
 * 接口使用场景：使用商家订单上的收件人信息电子面单取号
 **/
export interface PddFdsWaybillGetResponseInterface {
  /**
   * @description: response
   * @type: PddFdsWaybillGetPddFdsWaybillGetResponseResponseInterface
   * @default:
   *
   **/
  pdd_fds_waybill_get_response: PddFdsWaybillGetPddFdsWaybillGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddFdsWaybillGetPddFdsWaybillGetResponseResponseInterface {
  /**
   * @description: 系统自动生成
   * @type: PddFdsWaybillGetPddFdsWaybillGetResponseModulesResponseInterface[]
   * @default:
   *
   **/
  modules: PddFdsWaybillGetPddFdsWaybillGetResponseModulesResponseInterface[];
}

/**
 * @description 系统自动生成
 * @default
 * @example
 **/
export interface PddFdsWaybillGetPddFdsWaybillGetResponseModulesResponseInterface {
  /**
   * @description: 请求 id
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
   * @description: 模板内容（模板内容加密，只需透传至打印组件
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
