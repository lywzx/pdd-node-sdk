export const PDD_WAYBILL_SEARCH = 'PDD_WAYBILL_SEARCH';

/**
 * 接口名称：查询面单服务订购及面单使用情况
 * 接口标识：pdd.waybill.search
 * 接口使用场景：查询面单服务订购及面单使用情况
 **/
export interface PddWaybillSearchRequestInterface {
  /**
   * @description: 物流公司code
   * @type: string
   * @default:
   **/
  wp_code: string;
}

/**
 * 接口名称：查询面单服务订购及面单使用情况
 * 接口标识：pdd.waybill.search
 * 接口使用场景：查询面单服务订购及面单使用情况
 **/
export interface PddWaybillSearchResponseInterface {
  /**
   * @description: response
   * @type: PddWaybillSearchPddWaybillSearchResponseResponseInterface
   * @default:
   *
   **/
  pdd_waybill_search_response: PddWaybillSearchPddWaybillSearchResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddWaybillSearchPddWaybillSearchResponseResponseInterface {
  /**
   * @description: WP网点信息及对应的商家的发货信息
   * @type: PddWaybillSearchPddWaybillSearchResponseWaybillApplySubscriptionColsResponseInterface[]
   * @default:
   *
   **/
  waybill_apply_subscription_cols: PddWaybillSearchPddWaybillSearchResponseWaybillApplySubscriptionColsResponseInterface[];
}

/**
 * @description WP网点信息及对应的商家的发货信息
 * @default
 * @example
 **/
export interface PddWaybillSearchPddWaybillSearchResponseWaybillApplySubscriptionColsResponseInterface {
  /**
   * @description: wp网点信息及对应的商家的发货信息
   * @type: PddWaybillSearchPddWaybillSearchResponseWaybillApplySubscriptionColsBranchAccountColsResponseInterface[]
   * @default:
   *
   **/
  branch_account_cols: PddWaybillSearchPddWaybillSearchResponseWaybillApplySubscriptionColsBranchAccountColsResponseInterface[];

  /**
   * @description: 快递公司ID
   * @type: string
   * @default:
   **/
  wp_code: string;

  /**
   * @description: 物流服务商业务类型
   * @type: number
   * @default:
   **/
  wp_type: number;
}

/**
 * @description wp网点信息及对应的商家的发货信息
 * @default
 * @example
 **/
export interface PddWaybillSearchPddWaybillSearchResponseWaybillApplySubscriptionColsBranchAccountColsResponseInterface {
  /**
   * @description: 已用面单数量
   * @type: string
   * @default:
   **/
  allocated_quantity: string;

  /**
   * @description: 网点Code
   * @type: string
   * @default:
   **/
  branch_code: string;

  /**
   * @description: 网点名称
   * @type: string
   * @default:
   **/
  branch_name: string;

  /**
   * @description: 取消的面单总数
   * @type: string
   * @default:
   **/
  cancel_quantity: string;

  /**
   * @description: 电子面单余额数量
   * @type: string
   * @default:
   **/
  quantity: string;

  /**
   * @description: 已回收用面单数量
   * @type: string
   * @default:
   **/
  recycled_quantity: string;

  /**
   * @description: 服务类型列表
   * @type: PddWaybillSearchPddWaybillSearchResponseWaybillApplySubscriptionColsBranchAccountColsServiceInfoColsResponseInterface[]
   * @default:
   *
   **/
  service_info_cols: PddWaybillSearchPddWaybillSearchResponseWaybillApplySubscriptionColsBranchAccountColsServiceInfoColsResponseInterface[];

  /**
   * @description: 当前网点下的发货地址
   * @type: PddWaybillSearchPddWaybillSearchResponseWaybillApplySubscriptionColsBranchAccountColsShippAddressColsResponseInterface[]
   * @default:
   *
   **/
  shipp_address_cols: PddWaybillSearchPddWaybillSearchResponseWaybillApplySubscriptionColsBranchAccountColsShippAddressColsResponseInterface[];
}

/**
 * @description 服务类型列表
 * @default
 * @example
 **/
export interface PddWaybillSearchPddWaybillSearchResponseWaybillApplySubscriptionColsBranchAccountColsServiceInfoColsResponseInterface {
  /**
   * @description: 是否必须
   * @type: boolean
   * @default:
   **/
  required: boolean;

  /**
   * @description: 服务属性类型列表
   * @type: PddWaybillSearchPddWaybillSearchResponseWaybillApplySubscriptionColsBranchAccountColsServiceInfoColsServiceAttributesResponseInterface[]
   * @default:
   *
   **/
  service_attributes: PddWaybillSearchPddWaybillSearchResponseWaybillApplySubscriptionColsBranchAccountColsServiceInfoColsServiceAttributesResponseInterface[];

  /**
   * @description: 服务code
   * @type: string
   * @default:
   **/
  service_code: string;

  /**
   * @description: 服务描述
   * @type: string
   * @default:
   **/
  service_desc: string;

  /**
   * @description: 服务名称
   * @type: string
   * @default:
   **/
  service_name: string;
}

/**
 * @description 服务属性类型列表
 * @default
 * @example
 **/
export interface PddWaybillSearchPddWaybillSearchResponseWaybillApplySubscriptionColsBranchAccountColsServiceInfoColsServiceAttributesResponseInterface {
  /**
   * @description: 属性code
   * @type: string
   * @default:
   **/
  attribute_code: string;

  /**
   * @description: 属性名称
   * @type: string
   * @default:
   **/
  attribute_name: string;

  /**
   * @description: 属性类型
   * @type: string
   * @default:
   **/
  attribute_type: string;

  /**
   * @description: 属性描述
   * @type: string
   * @default:
   **/
  type_desc: string;
}

/**
 * @description 当前网点下的发货地址
 * @default
 * @example
 **/
export interface PddWaybillSearchPddWaybillSearchResponseWaybillApplySubscriptionColsBranchAccountColsShippAddressColsResponseInterface {
  /**
   * @description: 市名称（二级地址）
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
   * @description: 区名称（三级地址）
   * @type: string
   * @default:
   **/
  district: string;

  /**
   * @description: 省名称（一级地址）
   * @type: string
   * @default:
   **/
  province: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_WAYBILL_SEARCH]: {
    requestInterface: PddWaybillSearchRequestInterface;
    responseInterface: PddWaybillSearchResponseInterface;
  };
}
