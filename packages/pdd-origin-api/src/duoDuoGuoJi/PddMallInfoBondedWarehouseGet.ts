export const PDD_MALL_INFO_BONDED_WAREHOUSE_GET = 'pdd.mall.info.bonded.warehouse.get';
export const PDD_MALL_INFO_BONDED_WAREHOUSE_GET_RESPONSE_KEY = 'mall_info_bonded_warehouse_get_response';
export const PDD_MALL_INFO_BONDED_WAREHOUSE_GET_LIMITERS = [
  {
    limiterLevel: 3,
    timeRange: 3600,
    times: 12000,
  },
];

/**
 * 接口名称：保税仓信息查询接口
 * 接口标识：pdd.mall.info.bonded.warehouse.get
 * 接口使用场景：查询商家的所有保税仓信息
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddMallInfoBondedWarehouseGetRequestInterface {}

/**
 * 接口名称：保税仓信息查询接口
 * 接口标识：pdd.mall.info.bonded.warehouse.get
 * 接口使用场景：查询商家的所有保税仓信息
 **/
export interface PddMallInfoBondedWarehouseGetResponseInterface {
  /**
   * @description: reponse
   * @type: PddMallInfoBondedWarehouseGetMallInfoBondedWarehouseGetResponseResponseInterface
   * @default:
   *
   **/
  mall_info_bonded_warehouse_get_response: PddMallInfoBondedWarehouseGetMallInfoBondedWarehouseGetResponseResponseInterface;
}

/**
 * @description reponse
 * @default
 * @example
 **/
export interface PddMallInfoBondedWarehouseGetMallInfoBondedWarehouseGetResponseResponseInterface {
  /**
   * @description: list
   * @type: PddMallInfoBondedWarehouseGetMallInfoBondedWarehouseGetResponseInfoListResponseInterface[]
   * @default:
   *
   **/
  info_list: PddMallInfoBondedWarehouseGetMallInfoBondedWarehouseGetResponseInfoListResponseInterface[];
}

/**
 * @description list
 * @default
 * @example
 **/
export interface PddMallInfoBondedWarehouseGetMallInfoBondedWarehouseGetResponseInfoListResponseInterface {
  /**
   * @description: 保税仓标识
   * @type: string
   * @default:
   **/
  bonded_warehouse_key: string;

  /**
   * @description: 保税仓名字
   * @type: string
   * @default:
   **/
  bonded_warehouse_name: string;

  /**
   * @description: 清关服务商
   * @type: string[]
   * @default:
   **/
  customs_clearance_service_provider_list: string[];

  /**
   * @description: 报关海关
   * @type: string
   * @default:
   **/
  customs_declaration_location: string;
}
