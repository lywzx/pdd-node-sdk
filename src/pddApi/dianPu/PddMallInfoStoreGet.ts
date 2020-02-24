export const PDD_MALL_INFO_STORE_GET = 'pdd.mall.info.store.get';

/**
 * 接口名称：开放平台查询门店信息
 * 接口标识：pdd.mall.info.store.get
 * 接口使用场景：开放平台根据条件查询门店信息
 **/
export interface PddMallInfoStoreGetRequestInterface {
  /**
   * @description: 市
   * @type: string
   * @default:
   **/
  city: string;

  /**
   * @description: 区
   * @type: string
   * @default:
   **/
  district: string;

  /**
   * @description: 分页
   * @type: number
   * @default:
   **/
  page_number?: number;

  /**
   * @description: 分页大小
   * @type: number
   * @default:
   **/
  page_size?: number;

  /**
   * @description: 省
   * @type: string
   * @default:
   **/
  province: string;

  /**
   * @description: 门店Id
   * @type: string | number
   * @default:
   **/
  store_id: string | number;

  /**
   * @description: 门店名称
   * @type: string
   * @default:
   **/
  store_name: string;

  /**
   * @description: 门店自有编号
   * @type: string
   * @default:
   **/
  store_number: string;
}

/**
 * 接口名称：开放平台查询门店信息
 * 接口标识：pdd.mall.info.store.get
 * 接口使用场景：开放平台根据条件查询门店信息
 **/
export interface PddMallInfoStoreGetResponseInterface {
  /**
   * @description: 返回结构体
   * @type: PddMallInfoStoreGetResResponseInterface
   * @default:
   *
   **/
  res: PddMallInfoStoreGetResResponseInterface;
}

/**
 * @description 返回结构体
 * @default
 * @example
 **/
export interface PddMallInfoStoreGetResResponseInterface {
  /**
   * @description: 返回结构体
   * @type: PddMallInfoStoreGetResMallStoreVOListResponseInterface[]
   * @default:
   *
   **/
  mallStoreVOList: PddMallInfoStoreGetResMallStoreVOListResponseInterface[];
}

/**
 * @description 返回结构体
 * @default
 * @example
 **/
export interface PddMallInfoStoreGetResMallStoreVOListResponseInterface {
  /**
   * @description: 审核状态
   * @type: number
   * @default:
   **/
  audit_status: number;

  /**
   * @description: 市
   * @type: string
   * @default:
   **/
  city: string;

  /**
   * @description: 区
   * @type: string
   * @default:
   **/
  district: string;

  /**
   * @description: 店铺id
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;

  /**
   * @description: 门店纬度
   * @type: string
   * @default:
   **/
  poi_latitude: string;

  /**
   * @description: 门店经度
   * @type: string
   * @default:
   **/
  poi_longitude: string;

  /**
   * @description: 省
   * @type: string
   * @default:
   **/
  province: string;

  /**
   * @description: 门店详细地址
   * @type: string
   * @default:
   **/
  store_address: string;

  /**
   * @description: 门店id
   * @type: string | number
   * @default:
   **/
  store_id: string | number;

  /**
   * @description: 门店名称
   * @type: string
   * @default:
   **/
  store_name: string;

  /**
   * @description: 门店自有编号
   * @type: string
   * @default:
   **/
  store_number: string;
}
