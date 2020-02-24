export const PDD_SMS_CROWDS_QUERY = 'pdd.sms.crowds.query';
export const PDD_SMS_CROWDS_QUERY_RESPONSE_KEY = 'sms_crows_query_response';

/**
 * 接口名称：查询人群列表
 * 接口标识：pdd.sms.crowds.query
 * 接口使用场景：查询人群列表
 **/
export interface PddSmsCrowdsQueryRequestInterface {
  /**
   * @description: //人群类型选择  1-推荐人群（官方）  2-自定义人群  不传-全部
   * @type: number
   * @default:
   **/
  crows_type?: number;

  /**
   * @description: 页码
   * @type: number
   * @default:
   **/
  page_number: number;

  /**
   * @description: 每页条目数
   * @type: number
   * @default:
   **/
  page_size: number;
}

/**
 * 接口名称：查询人群列表
 * 接口标识：pdd.sms.crowds.query
 * 接口使用场景：查询人群列表
 **/
export interface PddSmsCrowdsQueryResponseInterface {
  /**
   * @description: response
   * @type: PddSmsCrowdsQuerySmsCrowsQueryResponseResponseInterface
   * @default:
   *
   **/
  sms_crows_query_response: PddSmsCrowdsQuerySmsCrowsQueryResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddSmsCrowdsQuerySmsCrowsQueryResponseResponseInterface {
  /**
   * @description: 数量
   * @type: number
   * @default:
   **/
  total: number;

  /**
   * @description: 结果
   * @type: PddSmsCrowdsQuerySmsCrowsQueryResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddSmsCrowdsQuerySmsCrowsQueryResponseResultResponseInterface[];
}

/**
 * @description 结果
 * @default
 * @example
 **/
export interface PddSmsCrowdsQuerySmsCrowsQueryResponseResultResponseInterface {
  /**
   * @description: 人群id
   * @type: string | number
   * @default:
   **/
  id: string | number;

  /**
   * @description: 类型
   * @type: number
   * @default:
   **/
  type: number;

  /**
   * @description: 场景
   * @type: number
   * @default:
   **/
  scene: number;

  /**
   * @description: 店铺id
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;

  /**
   * @description: 名称
   * @type: string
   * @default:
   **/
  name: string;

  /**
   * @description: 人群数量
   * @type: string | number
   * @default:
   **/
  people_num: string | number;

  /**
   * @description: 人群
   * @type: PddSmsCrowdsQuerySmsCrowsQueryResponseResultCrowdResponseInterface
   * @default:
   *
   **/
  crowd: PddSmsCrowdsQuerySmsCrowsQueryResponseResultCrowdResponseInterface;
}

/**
 * @description 人群
 * @default
 * @example
 **/
export interface PddSmsCrowdsQuerySmsCrowsQueryResponseResultCrowdResponseInterface {
  /**
   * @description: 对象类型
   * @type: number
   * @default:
   **/
  location_type: number;

  /**
   * @description: 对象
   * @type: string
   * @default:
   **/
  location: string;

  /**
   * @description: 性别
   * @type: number
   * @default:
   **/
  gender: number;

  /**
   * @description: 有购买天数
   * @type: string | number
   * @default:
   **/
  purchase_days: string | number;

  /**
   * @description: 无购买天数
   * @type: string | number
   * @default:
   **/
  none_purchase_days: string | number;

  /**
   * @description: 商品被收藏天数
   * @type: string | number
   * @default:
   **/
  goods_favor_days: string | number;

  /**
   * @description: 店铺被收藏天数
   * @type: string | number
   * @default:
   **/
  mall_favor_days: string | number;

  /**
   * @description: 最小订单金额
   * @type: string | number
   * @default:
   **/
  min_order_count: string | number;

  /**
   * @description: 最大订单金额
   * @type: string | number
   * @default:
   **/
  max_order_count: string | number;

  /**
   * @description: 首次购买开始时间
   * @type: string | number
   * @default:
   **/
  first_buy_start_time: string | number;

  /**
   * @description: 首次购买结束时间
   * @type: string | number
   * @default:
   **/
  first_buy_end_time: string | number;

  /**
   * @description: 店铺有浏览天数
   * @type: string | number
   * @default:
   **/
  mall_visit_days: string | number;

  /**
   * @description: 店铺无浏览天数
   * @type: string | number
   * @default:
   **/
  mall_none_visit_days: string | number;
}
