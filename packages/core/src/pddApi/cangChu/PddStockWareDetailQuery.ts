export const PDD_STOCK_WARE_DETAIL_QUERY = 'pdd.stock.ware.detail.query';
export const PDD_STOCK_WARE_DETAIL_QUERY_RESPONSE_KEY = 'open_api_response';

/**
 * 接口名称：查询货品详情
 * 接口标识：pdd.stock.ware.detail.query
 * 接口使用场景：家电分仓库存-查看货品详情
 **/
export interface PddStockWareDetailQueryRequestInterface {
  /**
   * @description: 货品id
   * @type: string | number
   * @default:
   **/
  ware_id: string | number;
}

/**
 * 接口名称：查询货品详情
 * 接口标识：pdd.stock.ware.detail.query
 * 接口使用场景：家电分仓库存-查看货品详情
 **/
export interface PddStockWareDetailQueryResponseInterface {
  /**
   * @description: response
   * @type: PddStockWareDetailQueryOpenApiResponseResponseInterface
   * @default:
   *
   **/
  open_api_response: PddStockWareDetailQueryOpenApiResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddStockWareDetailQueryOpenApiResponseResponseInterface {
  /**
   * @description: 货品id
   * @type: string | number
   * @default:
   **/
  id: string | number;

  /**
   * @description: 货品类型.0:单独货品  1:组合货品
   * @type: number
   * @default:
   **/
  type: number;

  /**
   * @description: 组合货品中子货品的关联关系
   * @type: PddStockWareDetailQueryOpenApiResponseWareInfosResponseInterface[]
   * @default:
   *
   **/
  ware_infos: PddStockWareDetailQueryOpenApiResponseWareInfosResponseInterface[];

  /**
   * @description: 货品sku信息
   * @type: PddStockWareDetailQueryOpenApiResponseWareSkusResponseInterface[]
   * @default:
   *
   **/
  ware_skus: PddStockWareDetailQueryOpenApiResponseWareSkusResponseInterface[];

  /**
   * @description: 货品编码
   * @type: string
   * @default:
   **/
  ware_sn: string;

  /**
   * @description: 货品名称
   * @type: string
   * @default:
   **/
  ware_name: string;

  /**
   * @description: 备注
   * @type: string
   * @default:
   **/
  note: string;

  /**
   * @description: 高低值服务，0低，1高
   * @type: number
   * @default:
   **/
  service_quality: number;

  /**
   * @description: 体积：立方厘米，精确到一位小数
   * @type: number
   * @default:
   **/
  volume: number;

  /**
   * @description: 长：厘米，精确到一位小数
   * @type: number
   * @default:
   **/
  length: number;

  /**
   * @description: 宽：厘米，精确到一位小数
   * @type: number
   * @default:
   **/
  width: number;

  /**
   * @description: 高：厘米，精确到一位小数
   * @type: number
   * @default:
   **/
  height: number;

  /**
   * @description: 重量：kg，精确到两位小数
   * @type: number
   * @default:
   **/
  weight: number;

  /**
   * @description: 毛重：kg，精确到两位小数
   * @type: number
   * @default:
   **/
  gross_weight: number;

  /**
   * @description: 净重：kg，精确到两位小数
   * @type: number
   * @default:
   **/
  net_weight: number;

  /**
   * @description: 皮重：kg，精确到两位小数
   * @type: number
   * @default:
   **/
  tare_weight: number;

  /**
   * @description: 单价：元，精确到一位小数
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

  /**
   * @description: 库存
   * @type: string | number
   * @default:
   **/
  quantity: string | number;

  /**
   * @description: 创建时间（毫秒）
   * @type: string | number
   * @default:
   **/
  created_at: string | number;

  /**
   * @description: 更新时间毫秒）
   * @type: string | number
   * @default:
   **/
  updated_at: string | number;
}

/**
 * @description 组合货品中子货品的关联关系
 * @default
 * @example
 **/
export interface PddStockWareDetailQueryOpenApiResponseWareInfosResponseInterface {
  /**
   * @description: 子货品编码
   * @type: string
   * @default:
   **/
  ware_sn: string;

  /**
   * @description: 子货品名称
   * @type: string
   * @default:
   **/
  ware_name: string;

  /**
   * @description: 子货品数量
   * @type: string | number
   * @default:
   **/
  ware_quantity: string | number;

  /**
   * @description: 子货品id
   * @type: string | number
   * @default:
   **/
  ware_id: string | number;
}

/**
 * @description 货品sku信息
 * @default
 * @example
 **/
export interface PddStockWareDetailQueryOpenApiResponseWareSkusResponseInterface {
  /**
   * @description: 商品id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: skuid
   * @type: string | number
   * @default:
   **/
  sku_id: string | number;

  /**
   * @description: 货品id
   * @type: string | number
   * @default:
   **/
  ware_id: string | number;

  /**
   * @description: 是否已经绑定货品false/true
   * @type: boolean
   * @default:
   **/
  exist_ware: boolean;

  /**
   * @description: 上下架状态，true表示上架
   * @type: boolean
   * @default:
   **/
  is_onsale: boolean;

  /**
   * @description: 规格信息
   * @type: PddStockWareDetailQueryOpenApiResponseWareSkusSpecsResponseInterface[]
   * @default:
   *
   **/
  specs: PddStockWareDetailQueryOpenApiResponseWareSkusSpecsResponseInterface[];
}

/**
 * @description 规格信息
 * @default
 * @example
 **/
export interface PddStockWareDetailQueryOpenApiResponseWareSkusSpecsResponseInterface {
  /**
   * @description: 规格id
   * @type: string | number
   * @default:
   **/
  spec_id: string | number;

  /**
   * @description: 规格名称
   * @type: string
   * @default:
   **/
  spec_key: string;

  /**
   * @description: 规格值
   * @type: string
   * @default:
   **/
  spec_value: string;
}
