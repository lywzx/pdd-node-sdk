export const PDD_WAYBILL_GET = 'pdd.waybill.get';
export const PDD_WAYBILL_GET_RESPONSE_KEY = 'pdd_waybill_get_response';
export const PDD_WAYBILL_GET_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 1,
    times: 12000,
    callSourceType: 0,
  },
];

/**
 * 接口名称：电子面单云打印接口
 * 接口标识：pdd.waybill.get
 * 接口使用场景：电子面单云打印接口
 **/
export interface PddWaybillGetRequestInterface {
  /**
   * @description: 入参信息
   * @type: PddWaybillGetParamWaybillCloudPrintApplyNewRequestRequestInterface
   * @default:
   *
   **/
  param_waybill_cloud_print_apply_new_request: PddWaybillGetParamWaybillCloudPrintApplyNewRequestRequestInterface;
}

/**
 * @description 入参信息
 * @default
 * @example
 **/
export interface PddWaybillGetParamWaybillCloudPrintApplyNewRequestRequestInterface {
  /**
   * @description: 设定取号返回的云打印报文是否加密
   * @type: boolean
   * @default:
   **/
  need_encrypt?: boolean;

  /**
   * @description: 发货人信息
   * @type: PddWaybillGetParamWaybillCloudPrintApplyNewRequestSenderRequestInterface
   * @default:
   *
   **/
  sender: PddWaybillGetParamWaybillCloudPrintApplyNewRequestSenderRequestInterface;

  /**
   * @description: 请求面单信息，数量限制为10
   * @type: PddWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosRequestInterface[]
   * @default:
   *
   **/
  trade_order_info_dtos?: PddWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosRequestInterface[];

  /**
   * @description: 物流公司Code
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
export interface PddWaybillGetParamWaybillCloudPrintApplyNewRequestSenderRequestInterface {
  /**
   * @description: 地址
   * @type: PddWaybillGetParamWaybillCloudPrintApplyNewRequestSenderAddressRequestInterface
   * @default:
   *
   **/
  address: PddWaybillGetParamWaybillCloudPrintApplyNewRequestSenderAddressRequestInterface;

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
  name: string;

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
export interface PddWaybillGetParamWaybillCloudPrintApplyNewRequestSenderAddressRequestInterface {
  /**
   * @description: 城市，仅支持非空值
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
   * @description: 详细地址，仅支持非空值
   * @type: string
   * @default:
   **/
  detail: string;

  /**
   * @description: 区，仅支持非空值
   * @type: string
   * @default:
   **/
  district: string;

  /**
   * @description: 省，仅支持非空值
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
 * @description 请求面单信息，数量限制为10
 * @default
 * @example
 **/
export interface PddWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosRequestInterface {
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
   * @type: PddWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosOrderInfoRequestInterface
   * @default:
   *
   **/
  order_info: PddWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosOrderInfoRequestInterface;

  /**
   * @description: 包裹信息
   * @type: PddWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosPackageInfoRequestInterface
   * @default:
   *
   **/
  package_info: PddWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosPackageInfoRequestInterface;

  /**
   * @description: 收件人信息
   * @type: PddWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosRecipientRequestInterface
   * @default:
   *
   **/
  recipient?: PddWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosRecipientRequestInterface;

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
export interface PddWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosOrderInfoRequestInterface {
  /**
   * @description: 订单渠道平台编码 拼多多-PDD，淘宝-TB，天猫-TM，京东-JD，阿里巴巴-ALBB，有赞-YZ，微店-WD，蘑菇街-MGJ，云集-YJ，贝贝网-BB，转转-ZZ，快手小店-KS，当当网-DD，小米有品-XMYP，寺库-SK，聚美优品-JM，蜜芽-MY，小红书-XHS，萌推-MT，唯品会-WPH，拍拍-PP，ebay-EBAY，亚马逊-AMAZON，苏宁-SN，国美-GM，1号店-YHD，凡客-VANCL，邮乐-YL，优购-YG，乐蜂-LF，聚尚-JS，拍鞋-PX，银泰-YT，抖音-DY，其他-OTHERS
   * @type: string
   * @default:
   **/
  order_channels_type: string;

  /**
   * @description: 订单号,数量限制100
   * @type: string[]
   * @default:
   **/
  trade_order_list: string[];
}

/**
 * @description 包裹信息
 * @default
 * @example
 **/
export interface PddWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosPackageInfoRequestInterface {
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
   * @type: PddWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosPackageInfoItemsRequestInterface[]
   * @default:
   *
   **/
  items: PddWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosPackageInfoItemsRequestInterface[];

  /**
   * @description: 快运包装方式描述
   * @type: string
   * @default:
   **/
  packaging_description?: string;

  /**
   * @description: 子母件总包裹数
   * @type: number
   * @default:
   **/
  total_packages_count?: number;

  /**
   * @description: 体积, 单位 ml
   * @type: string | number
   * @default:
   **/
  volume?: string | number;

  /**
   * @description: 重量,单位 g
   * @type: string | number
   * @default:
   **/
  weight?: string | number;
}

/**
 * @description 商品信息,数量限制为100
 * @default
 * @example
 **/
export interface PddWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosPackageInfoItemsRequestInterface {
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
 * @description 收件人信息
 * @default
 * @example
 **/
export interface PddWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosRecipientRequestInterface {
  /**
   * @description: 地址
   * @type: PddWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosRecipientAddressRequestInterface
   * @default:
   *
   **/
  address: PddWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosRecipientAddressRequestInterface;

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
  name: string;

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
export interface PddWaybillGetParamWaybillCloudPrintApplyNewRequestTradeOrderInfoDtosRecipientAddressRequestInterface {
  /**
   * @description: 城市，仅支持非空值
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
   * @description: 详细地址，仅支持非空值
   * @type: string
   * @default:
   **/
  detail: string;

  /**
   * @description: 区，仅支持非空值
   * @type: string
   * @default:
   **/
  district: string;

  /**
   * @description: 省，仅支持非空值
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
 * 接口名称：电子面单云打印接口
 * 接口标识：pdd.waybill.get
 * 接口使用场景：电子面单云打印接口
 **/
export interface PddWaybillGetResponseInterface {
  /**
   * @description: response
   * @type: PddWaybillGetPddWaybillGetResponseResponseInterface
   * @default:
   *
   **/
  pdd_waybill_get_response: PddWaybillGetPddWaybillGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddWaybillGetPddWaybillGetResponseResponseInterface {
  /**
   * @description: 系统自动生成
   * @type: PddWaybillGetPddWaybillGetResponseModulesResponseInterface[]
   * @default:
   *
   **/
  modules: PddWaybillGetPddWaybillGetResponseModulesResponseInterface[];
}

/**
 * @description 系统自动生成
 * @default
 * @example
 **/
export interface PddWaybillGetPddWaybillGetResponseModulesResponseInterface {
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
