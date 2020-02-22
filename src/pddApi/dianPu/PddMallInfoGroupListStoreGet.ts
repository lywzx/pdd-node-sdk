export const PDD_MALL_INFO_GROUP_LIST_STORE_GET = 'PDD_MALL_INFO_GROUP_LIST_STORE_GET';

/**
 * 接口名称：查询门店组下门店
 * 接口标识：pdd.mall.info.group.list.store.get
 * 接口使用场景：查询门店组下门店
 **/
export interface PddMallInfoGroupListStoreGetRequestInterface {
  /**
   * @description: 门店组ID
   * @type: string
   * @default:
   **/
  group_id?: string;

  /**
   * @description: 分页页码
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
}

/**
 * 接口名称：查询门店组下门店
 * 接口标识：pdd.mall.info.group.list.store.get
 * 接口使用场景：查询门店组下门店
 **/
export interface PddMallInfoGroupListStoreGetResponseInterface {
  /**
   * @description:
   * @type: PddMallInfoGroupListStoreGetMallInfoGroupListStoreGetResponseResponseInterface
   * @default:
   *
   **/
  mall_info_group_list_store_get_response: PddMallInfoGroupListStoreGetMallInfoGroupListStoreGetResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddMallInfoGroupListStoreGetMallInfoGroupListStoreGetResponseResponseInterface {
  /**
   * @description: 门店列表
   * @type: PddMallInfoGroupListStoreGetMallInfoGroupListStoreGetResponseMallStoreFinalVoListResponseInterface[]
   * @default:
   *
   **/
  mall_store_final_vo_list: PddMallInfoGroupListStoreGetMallInfoGroupListStoreGetResponseMallStoreFinalVoListResponseInterface[];

  /**
   * @description: 总数
   * @type: number
   * @default:
   **/
  total: number;
}

/**
 * @description 门店列表
 * @default
 * @example
 **/
export interface PddMallInfoGroupListStoreGetMallInfoGroupListStoreGetResponseMallStoreFinalVoListResponseInterface {
  /**
   * @description: 门店经营状态
   * @type: number
   * @default:
   **/
  businessStatus: number;

  /**
   * @description: 省市区三级地址-市
   * @type: string
   * @default:
   **/
  city: string;

  /**
   * @description: 省市区三级地址-区
   * @type: string
   * @default:
   **/
  district: string;

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  exists: boolean;

  /**
   * @description: 省市区三级地址-省
   * @type: string
   * @default:
   **/
  province: string;

  /**
   * @description: 门店地址
   * @type: string
   * @default:
   **/
  storeAddress: string;

  /**
   * @description: 门店ID
   * @type: string
   * @default:
   **/
  storeId: string;

  /**
   * @description: 店铺名称
   * @type: string
   * @default:
   **/
  storeName: string;

  /**
   * @description: 门店自有编号
   * @type: string
   * @default:
   **/
  storeNumber: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_MALL_INFO_GROUP_LIST_STORE_GET]: {
    requestInterface: PddMallInfoGroupListStoreGetRequestInterface;
    responseInterface: PddMallInfoGroupListStoreGetResponseInterface;
  };
}
