export const PDD_VAS_ORDER_SEARCH = 'pdd.vas.order.search';
export const PDD_VAS_ORDER_SEARCH_RESPONSE_KEY = 'vas_order_search_response';
export const PDD_VAS_ORDER_SEARCH_LIMITERS = [
  {
    limiterLevel: 4,
    timeRange: 1,
    times: 20,
  },
];

/**
 * 接口名称：线上服务市场订单查询接口
 * 接口标识：pdd.vas.order.search
 * 接口使用场景：用于拉取回流完成的订单以及线上增量的订购订单
 **/
export interface PddVasOrderSearchRequestInterface {
  /**
   * @description: 创建时间结束，UNIX时间戳（ms 级别），默认为当前时间，支持最大范围为7天。
   * @type: string | number
   * @default:
   **/
  create_time_end?: string | number;

  /**
   * @description: 创建时间开始，UNIX时间戳（ms级别），默认为当前时间往前推7天，支持最大范围为7天。
   * @type: string | number
   * @default:
   **/
  create_time_start?: string | number;

  /**
   * @description: 买家店铺id
   * @type: string | number
   * @default:
   **/
  mall_id?: string | number;

  /**
   * @description: 服务订单号
   * @type: string
   * @default:
   **/
  order_sn?: string;

  /**
   * @description: 订单状态，枚举值，0-未完成，1-已完成，2-已取消，空-全部
   * @type: number
   * @default:
   **/
  order_status?: number;

  /**
   * @description: 分页页码
   * @type: number
   * @default:
   **/
  page: number;

  /**
   * @description: 分页大小，最大支持100
   * @type: number
   * @default:
   **/
  page_size: number;

  /**
   * @description: 支付时间开始，UNIX时间戳（ms 级别）
   * @type: string | number
   * @default:
   **/
  pay_time_end?: string | number;

  /**
   * @description: 支付时间开始，UNIX时间戳（ms 级别）
   * @type: string | number
   * @default:
   **/
  pay_time_start?: string | number;

  /**
   * @description: 服务sku_id，可在服务详情页中获取
   * @type: string | number
   * @default:
   **/
  sku_id?: string | number;

  /**
   * @description: 售后状态，0-未售后，1-已售后
   * @type: number
   * @default:
   **/
  refund_status?: number;
}

/**
 * 接口名称：线上服务市场订单查询接口
 * 接口标识：pdd.vas.order.search
 * 接口使用场景：用于拉取回流完成的订单以及线上增量的订购订单
 **/
export interface PddVasOrderSearchResponseInterface {
  /**
   * @description: response
   * @type: PddVasOrderSearchVasOrderSearchResponseResponseInterface
   * @default:
   *
   **/
  vas_order_search_response: PddVasOrderSearchVasOrderSearchResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddVasOrderSearchVasOrderSearchResponseResponseInterface {
  /**
   * @description: 订单列表
   * @type: PddVasOrderSearchVasOrderSearchResponseOrdersResponseInterface[]
   * @default:
   *
   **/
  orders: PddVasOrderSearchVasOrderSearchResponseOrdersResponseInterface[];

  /**
   * @description: 当前查询条件下所有订单总数
   * @type: number
   * @default:
   **/
  totalCount: number;
}

/**
 * @description 订单列表
 * @default
 * @example
 **/
export interface PddVasOrderSearchVasOrderSearchResponseOrdersResponseInterface {
  /**
   * @description: 实付价格
   * @type: string | number
   * @default:
   **/
  amount: string | number;

  /**
   * @description: 订单创建时间
   * @type: string | number
   * @default:
   **/
  create_time: string | number;

  /**
   * @description: 店铺ID
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;

  /**
   * @description: 服务订单ID
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 支付状态，枚举值，0-未支付，1-已支付
   * @type: number
   * @default:
   **/
  pay_status: number;

  /**
   * @description: 支付时间
   * @type: string | number
   * @default:
   **/
  pay_time: string | number;

  /**
   * @description: 服务ID
   * @type: string | number
   * @default:
   **/
  service_id: string | number;

  /**
   * @description: 服务名称
   * @type: string
   * @default:
   **/
  service_name: string;

  /**
   * @description: 服务SKUID
   * @type: string | number
   * @default:
   **/
  sku_id: string | number;

  /**
   * @description: 服务SKU名称
   * @type: string
   * @default:
   **/
  sku_spec: string;

  /**
   * @description: 订单来源，0-线上订购，1-线下回流
   * @type: number
   * @default:
   **/
  source: number;

  /**
   * @description: 订购时长
   * @type: string | number
   * @default:
   **/
  time_length: string | number;

  /**
   * @description: 售后完成时间，如果没有申请过售后则为null
   * @type: string | number
   * @default:
   **/
  refund_finish_time: string | number;

  /**
   * @description: 售后状态，0-未售后，1-已售后
   * @type: number
   * @default:
   **/
  refund_status: number;

  /**
   * @description: 店铺名称
   * @type: string
   * @default:
   **/
  mall_name: string;
}
