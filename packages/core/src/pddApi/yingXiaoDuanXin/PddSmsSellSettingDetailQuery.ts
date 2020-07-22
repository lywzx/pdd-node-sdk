export const PDD_SMS_SELL_SETTING_DETAIL_QUERY = 'pdd.sms.sell.setting.detail.query';
export const PDD_SMS_SELL_SETTING_DETAIL_QUERY_RESPONSE_KEY = 'sms_sell_setting_detail_query_response';

/**
 * 接口名称：营销短信设置详情
 * 接口标识：pdd.sms.sell.setting.detail.query
 * 接口使用场景：营销短信设置详情
 **/
export interface PddSmsSellSettingDetailQueryRequestInterface {
  /**
   * @description: 任务id
   * @type: string | number
   * @default:
   **/
  id: string | number;
}

/**
 * 接口名称：营销短信设置详情
 * 接口标识：pdd.sms.sell.setting.detail.query
 * 接口使用场景：营销短信设置详情
 **/
export interface PddSmsSellSettingDetailQueryResponseInterface {
  /**
   * @description: response
   * @type: PddSmsSellSettingDetailQuerySmsSellSettingDetailQueryResponseResponseInterface
   * @default:
   *
   **/
  sms_sell_setting_detail_query_response: PddSmsSellSettingDetailQuerySmsSellSettingDetailQueryResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddSmsSellSettingDetailQuerySmsSellSettingDetailQueryResponseResponseInterface {
  /**
   * @description: 模板id
   * @type: number
   * @default:
   **/
  template_id: number;

  /**
   * @description: 模版内容
   * @type: string
   * @default:
   **/
  template_content: string;

  /**
   * @description: 发送时间
   * @type: string
   * @default:
   **/
  send_time: string;

  /**
   * @description: 是否开启 1-开启 0-关闭
   * @type: number
   * @default:
   **/
  open: number;

  /**
   * @description: 实际发送记录
   * @type: number
   * @default:
   **/
  send_num: number;

  /**
   * @description: 人群id
   * @type: string | number
   * @default:
   **/
  crowd_id: string | number;

  /**
   * @description: 人群
   * @type: PddSmsSellSettingDetailQuerySmsSellSettingDetailQueryResponseCrowdResponseInterface
   * @default:
   *
   **/
  crowd: PddSmsSellSettingDetailQuerySmsSellSettingDetailQueryResponseCrowdResponseInterface;

  /**
   * @description: 任务id
   * @type: string | number
   * @default:
   **/
  id: string | number;

  /**
   * @description: 店铺id
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;

  /**
   * @description: 设置类型
   * @type: number
   * @default:
   **/
  scene: number;

  /**
   * @description: 触发状态
   * @type: number
   * @default:
   **/
  trigger_condition: number;

  /**
   * @description: 目标
   * @type: PddSmsSellSettingDetailQuerySmsSellSettingDetailQueryResponseTargetResponseInterface
   * @default:
   *
   **/
  target: PddSmsSellSettingDetailQuerySmsSellSettingDetailQueryResponseTargetResponseInterface;
}

/**
 * @description 人群
 * @default
 * @example
 **/
export interface PddSmsSellSettingDetailQuerySmsSellSettingDetailQueryResponseCrowdResponseInterface {
  /**
   * @description: 人群名称
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
   * @type: PddSmsSellSettingDetailQuerySmsSellSettingDetailQueryResponseCrowdCrowdResponseInterface
   * @default:
   *
   **/
  crowd: PddSmsSellSettingDetailQuerySmsSellSettingDetailQueryResponseCrowdCrowdResponseInterface;
}

/**
 * @description 人群
 * @default
 * @example
 **/
export interface PddSmsSellSettingDetailQuerySmsSellSettingDetailQueryResponseCrowdCrowdResponseInterface {
  /**
   * @description: 定位类型
   * @type: number
   * @default:
   **/
  location_type: number;

  /**
   * @description: 选自定义的时候列表存省代表的id
   * @type: Array<string | number>
   * @default:
   **/
  location: Array<string | number>;

  /**
   * @description: 性别
   * @type: number
   * @default:
   **/
  gender: number;

  /**
   * @description: 店铺有购买天数
   * @type: string | number
   * @default:
   **/
  purchase_days: string | number;

  /**
   * @description: 店铺无购买天数
   * @type: string | number
   * @default:
   **/
  none_purchase_days: string | number;

  /**
   * @description: 商品收藏天数
   * @type: string | number
   * @default:
   **/
  goods_favor_days: string | number;

  /**
   * @description: 店铺收藏天数
   * @type: string | number
   * @default:
   **/
  mall_favor_days: string | number;

  /**
   * @description: 历史订单最小成交次数
   * @type: string | number
   * @default:
   **/
  min_order_count: string | number;

  /**
   * @description: 历史订单最大成交次数
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
   * @description: 店铺有访问天数
   * @type: string | number
   * @default:
   **/
  mall_visit_days: string | number;

  /**
   * @description: 店铺无访问天数
   * @type: string | number
   * @default:
   **/
  mall_none_visit_days: string | number;
}

/**
 * @description 目标
 * @default
 * @example
 **/
export interface PddSmsSellSettingDetailQuerySmsSellSettingDetailQueryResponseTargetResponseInterface {
  /**
   * @description: 实付金额最低价
   * @type: string | number
   * @default:
   **/
  min_pay_amount: string | number;

  /**
   * @description: 实付金额最高价
   * @type: string | number
   * @default:
   **/
  max_pay_amount: string | number;

  /**
   * @description: 是否不限
   * @type: number
   * @default:
   **/
  pay_amount_limit: number;

  /**
   * @description: 性别
   * @type: number
   * @default:
   **/
  sex: number;

  /**
   * @description: 收获地区
   * @type: number[]
   * @default:
   **/
  region: number[];

  /**
   * @description: 地区类型
   * @type: number
   * @default:
   **/
  region_type: number;

  /**
   * @description: 订单开始时间
   * @type: string
   * @default:
   **/
  order_start_time: string;

  /**
   * @description: 订单结束时间
   * @type: string
   * @default:
   **/
  order_end_time: string;

  /**
   * @description: 订单时间类型
   * @type: number
   * @default:
   **/
  order_time_type: number;

  /**
   * @description: 预计发送人数
   * @type: number
   * @default:
   **/
  people_num: number;
}
