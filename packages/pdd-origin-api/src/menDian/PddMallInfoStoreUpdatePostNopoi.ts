export const PDD_MALL_INFO_STORE_UPDATE_POST_NOPOI = 'pdd.mall.info.store.update.post.nopoi';

/**
 * 接口名称：开放平台无PoiId编辑门店
 * 接口标识：pdd.mall.info.store.update.post.nopoi
 * 接口使用场景：开放平台途虎等头部商家使用无PoiId的方式编辑门店
 **/
export interface PddMallInfoStoreUpdatePostNopoiRequestInterface {
  /**
   * @description: 门店营业状态
   * @type: number
   * @default:
   **/
  business_status: number;

  /**
   * @description: 一周营业时间
   * @type: number[]
   * @default:
   **/
  business_week_list: number[];

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
   * @description: 结束营业时间
   * @type: string
   * @default:
   **/
  end_business_hour: string;

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
   * @description: 起始营业时间
   * @type: string
   * @default:
   **/
  start_business_hour: string;

  /**
   * @description: 详细地址
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
  store_number?: string;

  /**
   * @description: 门店电话
   * @type: string
   * @default:
   **/
  store_phone: string;

  /**
   * @description: 门店行业（1-男女装，2-运动户外，3-服饰配件，4-厨具电器，5-汽车，8-全屋定制）
   * @type: number
   * @default:
   **/
  trade_type: number;
}

/**
 * 接口名称：开放平台无PoiId编辑门店
 * 接口标识：pdd.mall.info.store.update.post.nopoi
 * 接口使用场景：开放平台途虎等头部商家使用无PoiId的方式编辑门店
 **/
export interface PddMallInfoStoreUpdatePostNopoiResponseInterface {
  /**
   * @description:
   * @type: void
   * @default:
   **/
  res: void;
}
