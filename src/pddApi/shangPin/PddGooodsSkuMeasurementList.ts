export const PDD_GOOODS_SKU_MEASUREMENT_LIST = 'PDD_GOOODS_SKU_MEASUREMENT_LIST';

/**
 * 接口名称：商品sku计量单位枚举
 * 接口标识：pdd.gooods.sku.measurement.list
 * 接口使用场景：商品sku计量单位枚举
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddGooodsSkuMeasurementListRequestInterface {}

/**
 * 接口名称：商品sku计量单位枚举
 * 接口标识：pdd.gooods.sku.measurement.list
 * 接口使用场景：商品sku计量单位枚举
 **/
export interface PddGooodsSkuMeasurementListResponseInterface {
  /**
   * @description: response
   * @type: PddGooodsSkuMeasurementListGooodsSkuMeasurementListResponseResponseInterface
   * @default:
   *
   **/
  gooods_sku_measurement_list_response: PddGooodsSkuMeasurementListGooodsSkuMeasurementListResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGooodsSkuMeasurementListGooodsSkuMeasurementListResponseResponseInterface {
  /**
   * @description: 列表
   * @type: PddGooodsSkuMeasurementListGooodsSkuMeasurementListResponseMeasurementListResponseInterface[]
   * @default:
   *
   **/
  measurement_list: PddGooodsSkuMeasurementListGooodsSkuMeasurementListResponseMeasurementListResponseInterface[];
}

/**
 * @description 列表
 * @default
 * @example
 **/
export interface PddGooodsSkuMeasurementListGooodsSkuMeasurementListResponseMeasurementListResponseInterface {
  /**
   * @description: 描述
   * @type: string
   * @default:
   **/
  desc: string;

  /**
   * @description: 编码
   * @type: string
   * @default:
   **/
  code: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_GOOODS_SKU_MEASUREMENT_LIST]: {
    requestInterface: PddGooodsSkuMeasurementListRequestInterface;
    responseInterface: PddGooodsSkuMeasurementListResponseInterface;
  };
}
