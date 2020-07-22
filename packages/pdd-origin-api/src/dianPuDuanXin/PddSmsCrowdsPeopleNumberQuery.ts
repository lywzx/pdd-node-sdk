export const PDD_SMS_CROWDS_PEOPLE_NUMBER_QUERY = 'pdd.sms.crowds.people.number.query';
export const PDD_SMS_CROWDS_PEOPLE_NUMBER_QUERY_RESPONSE_KEY = 'sms_crows_people_number_query_response';

/**
 * 接口名称：查询人群数量
 * 接口标识：pdd.sms.crowds.people.number.query
 * 接口使用场景：查询人群数量
 **/
export interface PddSmsCrowdsPeopleNumberQueryRequestInterface {
  /**
   * @description: 人群id
   * @type: string | number
   * @default:
   **/
  crowd_id?: string | number;

  /**
   * @description: //0-全部 1-江浙沪 2-自定义
   * @type: number
   * @default:
   **/
  location_type?: number;

  /**
   * @description: [1,34] //  //选自定义的时候列表存省代表的id
   * @type: Array<string | number>
   * @default:
   **/
  location?: Array<string | number>;

  /**
   * @description: //0-全部 1-男 2-女
   * @type: number
   * @default:
   **/
  gender?: number;

  /**
   * @description: 店铺有购买天数
   * @type: string | number
   * @default:
   **/
  purchase_days?: string | number;

  /**
   * @description: 店铺无购买天数
   * @type: string | number
   * @default:
   **/
  none_purchase_days?: string | number;

  /**
   * @description: 收藏物品天数
   * @type: string | number
   * @default:
   **/
  goods_favor_days?: string | number;

  /**
   * @description: 收藏店铺天数
   * @type: string | number
   * @default:
   **/
  mall_favor_days?: string | number;

  /**
   * @description: 历史订单成交次数
   * @type: string | number
   * @default:
   **/
  min_order_count?: string | number;

  /**
   * @description: 历史订单成交次数
   * @type: string | number
   * @default:
   **/
  max_order_count?: string | number;

  /**
   * @description: 第一次购买时间
   * @type: string
   * @default:
   **/
  first_buy_start_time?: string;

  /**
   * @description: 最后一次购买时间
   * @type: string
   * @default:
   **/
  first_buy_end_time?: string;

  /**
   * @description: 店铺有访问天数
   * @type: string | number
   * @default:
   **/
  mall_visit_days?: string | number;
}

/**
 * 接口名称：查询人群数量
 * 接口标识：pdd.sms.crowds.people.number.query
 * 接口使用场景：查询人群数量
 **/
export interface PddSmsCrowdsPeopleNumberQueryResponseInterface {
  /**
   * @description: response
   * @type: PddSmsCrowdsPeopleNumberQuerySmsCrowsPeopleNumberQueryResponseResponseInterface
   * @default:
   *
   **/
  sms_crows_people_number_query_response: PddSmsCrowdsPeopleNumberQuerySmsCrowsPeopleNumberQueryResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddSmsCrowdsPeopleNumberQuerySmsCrowsPeopleNumberQueryResponseResponseInterface {
  /**
   * @description: 筛选人数
   * @type: string | number
   * @default:
   **/
  object_num: string | number;

  /**
   * @description: 短信余量
   * @type: string | number
   * @default:
   **/
  remain: string | number;
}
