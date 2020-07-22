export const PDD_AD_CREATIVE_QUERY = 'pdd.ad.creative.query';
export const PDD_AD_CREATIVE_QUERY_RESPONSE_KEY = 'open_api_response';

/**
 * 接口名称：根据推广单元id获取现有创意列表
 * 接口标识：pdd.ad.creative.query
 * 接口使用场景：根据推广单元id获取现有创意列表（创意列表：创意id、创意信息、创意状态、创意实时报表数据）
 **/
export interface PddAdCreativeQueryRequestInterface {
  /**
   * @description: 单元id
   * @type: string | number
   * @default:
   **/
  unit_id: string | number;

  /**
   * @description: 格式："yyyy-MM-dd" 时区："GMT+8"
   * @type: string
   * @default:
   **/
  begin_date: string;

  /**
   * @description: 格式："yyyy-MM-dd" 时区："GMT+8"
   * @type: string
   * @default:
   **/
  end_date: string;

  /**
   * @description: 0:搜索广告
   * @type: number
   * @default:
   **/
  scene_type: number;
}

/**
 * 接口名称：根据推广单元id获取现有创意列表
 * 接口标识：pdd.ad.creative.query
 * 接口使用场景：根据推广单元id获取现有创意列表（创意列表：创意id、创意信息、创意状态、创意实时报表数据）
 **/
export interface PddAdCreativeQueryResponseInterface {
  /**
   * @description: List<Object>
   * @type: PddAdCreativeQueryOpenApiResponseResponseInterface[]
   * @default:
   *
   **/
  open_api_response: PddAdCreativeQueryOpenApiResponseResponseInterface[];
}

/**
 * @description List<Object>
 * @default
 * @example
 **/
export interface PddAdCreativeQueryOpenApiResponseResponseInterface {
  /**
   * @description: 千次展现成本
   * @type: string
   * @default:
   **/
  cpm: string;

  /**
   * @description: 广告投资回报率
   * @type: string
   * @default:
   **/
  roi: string;

  /**
   * @description: 广告转化支付金额，单位厘
   * @type: string | number
   * @default:
   **/
  gmv: string | number;

  /**
   * @description: 广告转化支付订单数
   * @type: string | number
   * @default:
   **/
  order_num: string | number;

  /**
   * @description: 点击单价，单位厘
   * @type: string
   * @default:
   **/
  cpc: string;

  /**
   * @description: 广告消耗,单位厘
   * @type: string | number
   * @default:
   **/
  spend: string | number;

  /**
   * @description: 广告点击率
   * @type: string
   * @default:
   **/
  ctr: string;

  /**
   * @description: 广告点击数
   * @type: number
   * @default:
   **/
  click: number;

  /**
   * @description: 广告曝光数
   * @type: number
   * @default:
   **/
  impression: number;

  /**
   * @description: 创意状态。1表示推广中，2表示手动暂停，3表示已删除，4表示待发布，5表示已驳回
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 销量
   * @type: string | number
   * @default:
   **/
  sold_quantity: string | number;

  /**
   * @description: 最小团购价
   * @type: string | number
   * @default:
   **/
  min_group_price: string | number;

  /**
   * @description: 广告主操作状态：1-有效，2-暂停
   * @type: number
   * @default:
   **/
  operate_status: number;

  /**
   * @description: 图高
   * @type: number
   * @default:
   **/
  image_height: number;

  /**
   * @description: 图宽
   * @type: number
   * @default:
   **/
  image_width: number;

  /**
   * @description: 图片地址
   * @type: string
   * @default:
   **/
  image_url: string;

  /**
   * @description: 图片id
   * @type: string | number
   * @default:
   **/
  image_id: string | number;

  /**
   * @description: 标题
   * @type: string
   * @default:
   **/
  title: string;

  /**
   * @description: 创意id
   * @type: string | number
   * @default:
   **/
  creative_id: string | number;
}
