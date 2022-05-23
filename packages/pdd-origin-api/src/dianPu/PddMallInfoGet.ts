export const PDD_MALL_INFO_GET = 'pdd.mall.info.get';
export const PDD_MALL_INFO_GET_RESPONSE_KEY = 'mall_info_get_response';
export const PDD_MALL_INFO_GET_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 1,
    times: 450,
    callSourceType: 0,
  },
];

/**
 * 接口名称：店铺信息接口
 * 接口标识：pdd.mall.info.get
 * 接口使用场景：通过此接口获取店铺信息
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddMallInfoGetRequestInterface {}

/**
 * 接口名称：店铺信息接口
 * 接口标识：pdd.mall.info.get
 * 接口使用场景：通过此接口获取店铺信息
 **/
export interface PddMallInfoGetResponseInterface {
  /**
   * @description: response
   * @type: PddMallInfoGetMallInfoGetResponseResponseInterface
   * @default:
   *
   **/
  mall_info_get_response: PddMallInfoGetMallInfoGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddMallInfoGetMallInfoGetResponseResponseInterface {
  /**
   * @description: 店铺logo
   * @type: string
   * @default:
   **/
  logo: string;

  /**
   * @description: 店铺描述
   * @type: string
   * @default:
   **/
  mall_desc: string;

  /**
   * @description: 店铺id
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;

  /**
   * @description: 店铺名称
   * @type: string
   * @default:
   **/
  mall_name: string;

  /**
   * @description: 店铺类型,1:个人 2:企业 3:旗舰店 4:专卖店 5:专营店 6:普通店
   * @type: number
   * @default:
   **/
  merchant_type: number;

  /**
   * @description: 店铺身份,0:厂商 1:分销商 2:都不是 3:都是
   * @type: number
   * @default:
   **/
  mall_character: number;
}
