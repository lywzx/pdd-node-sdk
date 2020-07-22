export const PDD_EXPRESS_DEPOT_INFO_GET = 'pdd.express.depot.info.get';

/**
 * 接口名称：仓库详细信息
 * 接口标识：pdd.express.depot.info.get
 * 接口使用场景：仓库详细信息
 **/
export interface PddExpressDepotInfoGetRequestInterface {
  /**
   * @description: 仓库id
   * @type: string | number
   * @default:
   **/
  depot_id: string | number;
}

/**
 * 接口名称：仓库详细信息
 * 接口标识：pdd.express.depot.info.get
 * 接口使用场景：仓库详细信息
 **/
export interface PddExpressDepotInfoGetResponseInterface {
  /**
   * @description: 详细地址
   * @type: string
   * @default:
   **/
  address: string;

  /**
   * @description: 仓库别名
   * @type: string
   * @default:
   **/
  alias: string;

  /**
   * @description: 仓库地址（市编号）
   * @type: number
   * @default:
   **/
  city: number;

  /**
   * @description: 仓库编码
   * @type: string
   * @default:
   **/
  code: string;

  /**
   * @description: 联系人姓名
   * @type: string
   * @default:
   **/
  contact_name: string;

  /**
   * @description: 联系人电话
   * @type: string
   * @default:
   **/
  contact_tel: string;

  /**
   * @description: 仓库id
   * @type: string | number
   * @default:
   **/
  depot_id: string | number;

  /**
   * @description: 仓库地址（区编号）
   * @type: number
   * @default:
   **/
  district: number;

  /**
   * @description: 仓库id（string）
   * @type: string
   * @default:
   **/
  id_str: string;

  /**
   * @description: 仓库名称
   * @type: string
   * @default:
   **/
  name: string;

  /**
   * @description: 其他仓库覆盖区域列表（外层key为省id；cover为该省份覆盖情况：1 半覆盖，2全覆盖；district为省中覆盖的地址：市id->区id列表）
   * @type: PddExpressDepotInfoGetOtherRegionResponseInterface
   * @default:
   *
   **/
  other_region: PddExpressDepotInfoGetOtherRegionResponseInterface;

  /**
   * @description: 仓库地址（省编号）
   * @type: number
   * @default:
   **/
  province: number;

  /**
   * @description: 该仓库覆盖区域列表（其他仓库覆盖区域列表(外层key为省id；cover为该省份覆盖情况：1 半覆盖，2全覆盖；district为省中覆盖的地址：市id->区id列表)）
   * @type: PddExpressDepotInfoGetRegionResponseInterface
   * @default:
   *
   **/
  region: PddExpressDepotInfoGetRegionResponseInterface;

  /**
   * @description: 仓库类型，暂时只有1
   * @type: number
   * @default:
   **/
  type: number;

  /**
   * @description: 邮编
   * @type: string
   * @default:
   **/
  zip: string;
}

/**
 * @description 其他仓库覆盖区域列表（外层key为省id；cover为该省份覆盖情况：1 半覆盖，2全覆盖；district为省中覆盖的地址：市id->区id列表）
 * @default
 * @example
 **/
export interface PddExpressDepotInfoGetOtherRegionResponseInterface {
  /**
   * @description: 省份id
   * @type: string
   * @default:
   **/
  key: string;

  /**
   * @description: 省份信息
   * @type: PddExpressDepotInfoGetOtherRegionValueResponseInterface
   * @default:
   *
   **/
  value: PddExpressDepotInfoGetOtherRegionValueResponseInterface;
}

/**
 * @description 省份信息
 * @default
 * @example
 **/
export interface PddExpressDepotInfoGetOtherRegionValueResponseInterface {
  /**
   * @description: 1 半覆盖，2 全覆盖
   * @type: number
   * @default:
   **/
  cover: number;

  /**
   * @description: 城市id -> 区id列表
   * @type: PddExpressDepotInfoGetOtherRegionValueDistrictResponseInterface
   * @default:
   *
   **/
  district: PddExpressDepotInfoGetOtherRegionValueDistrictResponseInterface;
}

/**
 * @description 城市id -> 区id列表
 * @default
 * @example
 **/
export interface PddExpressDepotInfoGetOtherRegionValueDistrictResponseInterface {
  /**
   * @description: 城市id
   * @type: string
   * @default:
   **/
  key: string;

  /**
   * @description: 区id列表
   * @type: number[]
   * @default:
   **/
  value: number[];
}

/**
 * @description 该仓库覆盖区域列表（其他仓库覆盖区域列表(外层key为省id；cover为该省份覆盖情况：1 半覆盖，2全覆盖；district为省中覆盖的地址：市id->区id列表)）
 * @default
 * @example
 **/
export interface PddExpressDepotInfoGetRegionResponseInterface {
  /**
   * @description: 省份id
   * @type: string
   * @default:
   **/
  key: string;

  /**
   * @description: 省份信息
   * @type: PddExpressDepotInfoGetRegionValueResponseInterface
   * @default:
   *
   **/
  value: PddExpressDepotInfoGetRegionValueResponseInterface;
}

/**
 * @description 省份信息
 * @default
 * @example
 **/
export interface PddExpressDepotInfoGetRegionValueResponseInterface {
  /**
   * @description: 1 半覆盖，2 全覆盖
   * @type: number
   * @default:
   **/
  cover: number;

  /**
   * @description: 城市id -> 区id列表
   * @type: PddExpressDepotInfoGetRegionValueDistrictResponseInterface
   * @default:
   *
   **/
  district: PddExpressDepotInfoGetRegionValueDistrictResponseInterface;
}

/**
 * @description 城市id -> 区id列表
 * @default
 * @example
 **/
export interface PddExpressDepotInfoGetRegionValueDistrictResponseInterface {
  /**
   * @description: 城市id
   * @type: string
   * @default:
   **/
  key: string;

  /**
   * @description: 区id列表
   * @type: string[]
   * @default:
   **/
  value: string[];
}
