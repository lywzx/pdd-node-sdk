export const PDD_STOCK_WARE_LIST = 'pdd.stock.ware.list';

/**
 * 接口名称：查询货品列表
 * 接口标识：pdd.stock.ware.list
 * 接口使用场景：家电分仓库存-列表查询货品
 **/
export interface PddStockWareListRequestInterface {
  /**
   * @description: 货品id
   * @type: string
   * @default:
   **/
  id: string;

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
   * @description: 类型 0:单独货品。1:组合货品
   * @type: number
   * @default:
   **/
  ware_type: number;

  /**
   * @description: 页数，从1开始
   * @type: number
   * @default:
   **/
  page?: number;

  /**
   * @description: 每页记录数
   * @type: number
   * @default:
   **/
  size?: number;
}

/**
 * 接口名称：查询货品列表
 * 接口标识：pdd.stock.ware.list
 * 接口使用场景：家电分仓库存-列表查询货品
 **/
export interface PddStockWareListResponseInterface {
  /**
   * @description: response
   * @type: PddStockWareListOpenApiResponseResponseInterface
   * @default:
   *
   **/
  open_api_response: PddStockWareListOpenApiResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddStockWareListOpenApiResponseResponseInterface {
  /**
   * @description: 总数
   * @type: number
   * @default:
   **/
  total: number;

  /**
   * @description: 货品详情
   * @type: PddStockWareListOpenApiResponseWareDetailsResponseInterface[]
   * @default:
   *
   **/
  ware_details: PddStockWareListOpenApiResponseWareDetailsResponseInterface[];
}

/**
 * @description 货品详情
 * @default
 * @example
 **/
export interface PddStockWareListOpenApiResponseWareDetailsResponseInterface {
  /**
   * @description: 货品id
   * @type: string
   * @default:
   **/
  id: string;

  /**
   * @description: 货品类型.0:单独货品 1:组合货品
   * @type: number
   * @default:
   **/
  type: number;

  /**
   * @description: 组合货品中子货品的关联关系
   * @type: PddStockWareListOpenApiResponseWareDetailsWareInfosResponseInterface[]
   * @default:
   *
   **/
  ware_infos: PddStockWareListOpenApiResponseWareDetailsWareInfosResponseInterface[];

  /**
   * @description: 货品sku信息
   * @type: PddStockWareListOpenApiResponseWareDetailsWareSkusResponseInterface[]
   * @default:
   *
   **/
  ware_skus: PddStockWareListOpenApiResponseWareDetailsWareSkusResponseInterface[];

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
   * @type: string
   * @default:
   **/
  quantity: string;

  /**
   * @description: 创建时间（毫秒）
   * @type: string
   * @default:
   **/
  created_at: string;

  /**
   * @description: 更新时间（毫秒）
   * @type: string
   * @default:
   **/
  updated_at: string;
}

/**
 * @description 组合货品中子货品的关联关系
 * @default
 * @example
 **/
export interface PddStockWareListOpenApiResponseWareDetailsWareInfosResponseInterface {
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
   * @type: string
   * @default:
   **/
  ware_quantity: string;

  /**
   * @description: 子货品id
   * @type: string
   * @default:
   **/
  ware_id: string;
}

/**
 * @description 货品sku信息
 * @default
 * @example
 **/
export interface PddStockWareListOpenApiResponseWareDetailsWareSkusResponseInterface {
  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id: string;

  /**
   * @description: skuid
   * @type: string
   * @default:
   **/
  sku_id: string;

  /**
   * @description: 货品id
   * @type: string
   * @default:
   **/
  ware_id: string;

  /**
   * @description: 是否已绑定货品true/false
   * @type: boolean
   * @default:
   **/
  exist_ware: boolean;

  /**
   * @description: 上下架状态，true为上架
   * @type: boolean
   * @default:
   **/
  is_onsale: boolean;

  /**
   * @description: 规格信息
   * @type: PddStockWareListOpenApiResponseWareDetailsWareSkusSpecsResponseInterface[]
   * @default:
   *
   **/
  specs: PddStockWareListOpenApiResponseWareDetailsWareSkusSpecsResponseInterface[];
}

/**
 * @description 规格信息
 * @default
 * @example
 **/
export interface PddStockWareListOpenApiResponseWareDetailsWareSkusSpecsResponseInterface {
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

  /**
   * @description: 规格id
   * @type: string
   * @default:
   **/
  spec_id: string;
}
