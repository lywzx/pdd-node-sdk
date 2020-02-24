export const PDD_STOCK_WARE_UPDATE = 'pdd.stock.ware.update';

/**
 * 接口名称：编辑货品
 * 接口标识：pdd.stock.ware.update
 * 接口使用场景：家电分仓库存-编辑货品
 **/
export interface PddStockWareUpdateRequestInterface {
  /**
   * @description: 货品id
   * @type: string | number
   * @default:
   **/
  id?: string | number;

  /**
   * @description: 类型 0:单独货品。1:组合货品
   * @type: number
   * @default:
   **/
  ware_type?: number;

  /**
   * @description: 组合货品中子货品的关联关系, ware_type为1时必填；
   * @type: PddStockWareUpdateWareInfosRequestInterface[]
   * @default:
   *
   **/
  ware_infos: PddStockWareUpdateWareInfosRequestInterface[];

  /**
   * @description: 货品编码
   * @type: string
   * @default:
   **/
  ware_sn?: string;

  /**
   * @description: 货品名称
   * @type: string
   * @default:
   **/
  ware_name?: string;

  /**
   * @description: 备注
   * @type: string
   * @default:
   **/
  note: string;

  /**
   * @description: 高低值服务
   * @type: number
   * @default:
   **/
  service_quality: number;

  /**
   * @description: 体积：立方毫米，只精确到100（即：最末两位为0）
   * @type: number
   * @default:
   **/
  volume: number;

  /**
   * @description: 长：毫米，精确到1
   * @type: number
   * @default:
   **/
  length: number;

  /**
   * @description: 宽：毫米，精确到1
   * @type: number
   * @default:
   **/
  width: number;

  /**
   * @description: 高：毫米，精确到1
   * @type: number
   * @default:
   **/
  height: number;

  /**
   * @description: 重量：g，精确到10（即：末位为0）
   * @type: number
   * @default:
   **/
  weight?: number;

  /**
   * @description: 毛重：g，精确到10（即：末位为0）
   * @type: number
   * @default:
   **/
  gross_weight: number;

  /**
   * @description: 净重：g，精确到10（即：末位为0）
   * @type: number
   * @default:
   **/
  net_weight: number;

  /**
   * @description: 皮重：g，精确到10（即：末位为0）
   * @type: number
   * @default:
   **/
  tare_weight: number;

  /**
   * @description: 单价：分，精确到10（即：末位为0）
   * @type: number
   * @default:
   **/
  price: number;

  /**
   * @description: 颜色
   * @type: string
   * @default:
   **/
  color: string;

  /**
   * @description: 包材
   * @type: string
   * @default:
   **/
  packing: string;
}

/**
 * @description 组合货品中子货品的关联关系, ware_type为1时必填；
 * @default
 * @example
 **/
export interface PddStockWareUpdateWareInfosRequestInterface {
  /**
   * @description: 子货品id
   * @type: string | number
   * @default:
   **/
  ware_id?: string | number;

  /**
   * @description: 子货品数量
   * @type: number
   * @default:
   **/
  ware_quantity?: number;
}

/**
 * 接口名称：编辑货品
 * 接口标识：pdd.stock.ware.update
 * 接口使用场景：家电分仓库存-编辑货品
 **/
export interface PddStockWareUpdateResponseInterface {
  /**
   * @description: 货品id
   * @type: string | number
   * @default:
   **/
  open_api_response: string | number;
}
