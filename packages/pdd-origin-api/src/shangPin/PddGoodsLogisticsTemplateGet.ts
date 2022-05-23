export const PDD_GOODS_LOGISTICS_TEMPLATE_GET = 'pdd.goods.logistics.template.get';
export const PDD_GOODS_LOGISTICS_TEMPLATE_GET_RESPONSE_KEY = 'goods_logistics_template_get_response';
export const PDD_GOODS_LOGISTICS_TEMPLATE_GET_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 60,
    times: 2400,
    callSourceType: 0,
  },
  {
    limiterLevel: 3,
    timeRange: 1,
    times: 200,
    callSourceType: 0,
  },
];

/**
 * 接口名称：商品运费模版接口
 * 接口标识：pdd.goods.logistics.template.get
 * 接口使用场景：获取拼多多商家的物流运费模板信息
 **/
export interface PddGoodsLogisticsTemplateGetRequestInterface {
  /**
   * @description: 默认返回运费模板的页数为1，最高为100页，注意：page与page_size必须传一个
   * @type: number
   * @default:
   **/
  page?: number;

  /**
   * @description: 默认返回20条模板数据，最多100条数据
   * @type: number
   * @default:
   **/
  page_size?: number;

  /**
   * @description: 0-新发布商品，1-编辑商品。如传值为空，平台默认为发布商品
   * @type: number
   * @default:
   **/
  goods_status?: number;
}

/**
 * 接口名称：商品运费模版接口
 * 接口标识：pdd.goods.logistics.template.get
 * 接口使用场景：获取拼多多商家的物流运费模板信息
 **/
export interface PddGoodsLogisticsTemplateGetResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseResponseInterface
   * @default:
   *
   **/
  goods_logistics_template_get_response: PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseResponseInterface {
  /**
   * @description: 商家运费模板对象列表
   * @type: PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseLogisticsTemplateListResponseInterface[]
   * @default:
   *
   **/
  logistics_template_list: PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseLogisticsTemplateListResponseInterface[];

  /**
   * @description: 返回的运费模板总数
   * @type: number
   * @default:
   **/
  total_count: number;
}

/**
 * @description 商家运费模板对象列表
 * @default
 * @example
 **/
export interface PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseLogisticsTemplateListResponseInterface {
  /**
   * @description: 计费方式，0-按件计费，1-按重量计费
   * @type: number
   * @default:
   **/
  cost_type: number;

  /**
   * @description: 最近更新时间
   * @type: number
   * @default:
   **/
  last_updated_time: number;

  /**
   * @description: 模板id
   * @type: string | number
   * @default:
   **/
  template_id: string | number;

  /**
   * @description: 运费模板名称
   * @type: string
   * @default:
   **/
  template_name: string;
}
