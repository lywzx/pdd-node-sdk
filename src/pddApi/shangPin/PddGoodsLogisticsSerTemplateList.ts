export const PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST = 'pdd.goods.logistics.ser.template.list';
export const PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST_RESPONSE_KEY = 'goods_logistics_ser_template_list_response';

/**
 * 接口名称：商品送装服务模版列表
 * 接口标识：pdd.goods.logistics.ser.template.list
 * 接口使用场景：商品送装服务模版列表
 **/
export interface PddGoodsLogisticsSerTemplateListRequestInterface {
  /**
   * @description: 模板类型
   * @type: number
   * @default:
   **/
  template_type: number;

  /**
   * @description: 查询偏移量
   * @type: number
   * @default:
   **/
  start: number;

  /**
   * @description: 查询大小
   * @type: number
   * @default:
   **/
  length: number;

  /**
   * @description: 查询类型
   * @type: number
   * @default:
   **/
  query_type: number;
}

/**
 * 接口名称：商品送装服务模版列表
 * 接口标识：pdd.goods.logistics.ser.template.list
 * 接口使用场景：商品送装服务模版列表
 **/
export interface PddGoodsLogisticsSerTemplateListResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsLogisticsSerTemplateListGoodsLogisticsSerTemplateListResponseResponseInterface
   * @default:
   *
   **/
  goods_logistics_ser_template_list_response: PddGoodsLogisticsSerTemplateListGoodsLogisticsSerTemplateListResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGoodsLogisticsSerTemplateListGoodsLogisticsSerTemplateListResponseResponseInterface {
  /**
   * @description: 总数
   * @type: number
   * @default:
   **/
  total: number;

  /**
   * @description: 列表
   * @type: PddGoodsLogisticsSerTemplateListGoodsLogisticsSerTemplateListResponseListResponseInterface[]
   * @default:
   *
   **/
  list: PddGoodsLogisticsSerTemplateListGoodsLogisticsSerTemplateListResponseListResponseInterface[];
}

/**
 * @description 列表
 * @default
 * @example
 **/
export interface PddGoodsLogisticsSerTemplateListGoodsLogisticsSerTemplateListResponseListResponseInterface {
  /**
   * @description: 使用情况
   * @type: number
   * @default:
   **/
  using: number;

  /**
   * @description: 更新时间
   * @type: number
   * @default:
   **/
  update_time: number;

  /**
   * @description: 模版名称
   * @type: string
   * @default:
   **/
  template_name: string;

  /**
   * @description: 模版id
   * @type: string
   * @default:
   **/
  template_id: string;
}
