export const PDD_SMS_ADD_CROWD = 'PDD_SMS_ADD_CROWD';

/**
 * 接口名称：新增人群
 * 接口标识：pdd.sms.add.crowd
 * 接口使用场景：新增人群
 **/

export interface PddSmsAddCrowdRequestInterface {
  /**
   * @description: 选自定义的时候列表存省代表的id [10]
   * @type: string
   * @default:
   **/
  location: string;

  /**
   * @description: 地区类型 0-不限 1-江浙沪 2-自定义
   * @type: number
   * @default:
   **/
  location_type: number;

  /**
   * @description: 性别 0-全部 1-男 2-女
   * @type: number
   * @default:
   **/
  gender: number;

  /**
   * @description: 商品收藏天数
   * @type: string
   * @default:
   **/
  goods_favor_days: string;

  /**
   * @description: 店铺收藏天数
   * @type: string
   * @default:
   **/
  mall_favor_days: string;

  /**
   * @description: 人群名称
   * @type: string
   * @default:
   **/
  name?: string;

  /**
   * @description: 店铺无购买天数
   * @type: string
   * @default:
   **/
  none_purchase_days: string;

  /**
   * @description: 店铺有购买天数
   * @type: string
   * @default:
   **/
  purchase_days: string;

  /**
   * @description: 历史成交最小次数
   * @type: string
   * @default:
   **/
  min_order_count: string;

  /**
   * @description: 历史成交最大次数
   * @type: string
   * @default:
   **/
  max_order_count: string;

  /**
   * @description: 首次购买开始时间 "2017-10-19 00:00:00"
   * @type: string
   * @default:
   **/
  first_buy_start_time: string;

  /**
   * @description: 首次购买结束时间
   * @type: string
   * @default:
   **/
  first_buy_end_time: string;

  /**
   * @description: 店铺有访问天数
   * @type: string
   * @default:
   **/
  mall_visit_days: string;
}

/**
 * 接口名称：新增人群
 * 接口标识：pdd.sms.add.crowd
 * 接口使用场景：新增人群
 **/

export interface PddSmsAddCrowdResponseInterface {
  /**
   * @description: 创建结果，为空成功
   * @type: PddSmsAddCrowdSmsAddCrowdResponseResponseInterface
   * @default:
   *
   **/
  sms_add_crowd_response: PddSmsAddCrowdSmsAddCrowdResponseResponseInterface;
}

/**
 * @description 创建结果，为空成功
 * @default
 * @example
 **/

export interface PddSmsAddCrowdSmsAddCrowdResponseResponseInterface {
  /**
   * @description: 请求结果
   * @type: string
   * @default:
   **/
  result: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_SMS_ADD_CROWD]: {
    requestInterface: PddSmsAddCrowdRequestInterface;
    responseInterface: PddSmsAddCrowdResponseInterface;
  };
}
