export const PDD_MALL_INFO_STORE_CREATE_POST = 'pdd.mall.info.store.create.post';
export const PDD_MALL_INFO_STORE_CREATE_POST_RESPONSE_KEY = 'mall_info_store_create_post_response';

/**
 * 接口名称：创建店铺门店
 * 接口标识：pdd.mall.info.store.create.post
 * 接口使用场景：创建店铺门店
 **/
export interface PddMallInfoStoreCreatePostRequestInterface {
  /**
   * @description: 门店营业状态
   * @type: number
   * @default:
   **/
  business_status?: number;

  /**
   * @description: 营业天数
   * @type: number[]
   * @default:
   **/
  business_week_list?: number[];

  /**
   * @description: 省市区三级地址-市名
   * @type: string
   * @default:
   **/
  city?: string;

  /**
   * @description: 省市区三级地址-区名
   * @type: string
   * @default:
   **/
  district?: string;

  /**
   * @description: 结束营业时间段
   * @type: string
   * @default:
   **/
  end_business_hour?: string;

  /**
   * @description: 腾讯地图POI信息ID
   * @type: string
   * @default:
   **/
  poi_id?: string;

  /**
   * @description: 门店纬度
   * @type: string
   * @default:
   **/
  poi_latitude?: string;

  /**
   * @description: 门店经度
   * @type: string
   * @default:
   **/
  poi_longitude?: string;

  /**
   * @description: 省市区三级地址-省名
   * @type: string
   * @default:
   **/
  province?: string;

  /**
   * @description: 起始营业时间段
   * @type: string
   * @default:
   **/
  start_business_hour?: string;

  /**
   * @description: 门店名称
   * @type: string
   * @default:
   **/
  store_name?: string;

  /**
   * @description: 门店自有编号
   * @type: string
   * @default:
   **/
  store_number: string;

  /**
   * @description: 门店电话
   * @type: string
   * @default:
   **/
  store_phone?: string;
}

/**
 * 接口名称：创建店铺门店
 * 接口标识：pdd.mall.info.store.create.post
 * 接口使用场景：创建店铺门店
 **/
export interface PddMallInfoStoreCreatePostResponseInterface {
  /**
   * @description:
   * @type: PddMallInfoStoreCreatePostMallInfoStoreCreatePostResponseResponseInterface
   * @default:
   *
   **/
  mall_info_store_create_post_response: PddMallInfoStoreCreatePostMallInfoStoreCreatePostResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddMallInfoStoreCreatePostMallInfoStoreCreatePostResponseResponseInterface {
  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
