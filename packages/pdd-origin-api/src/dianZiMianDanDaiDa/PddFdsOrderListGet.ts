export const PDD_FDS_ORDER_LIST_GET = 'pdd.fds.order.list.get';
export const PDD_FDS_ORDER_LIST_GET_RESPONSE_KEY = 'pdd_fds_order_list_get_response';

/**
 * 接口名称：根据更新时间查询订单列表
 * 接口标识：pdd.fds.order.list.get
 * 接口使用场景：厂家首次接入ISV时，同步商家分配给厂家历史订单列表，最多支持同步近一个月数据
 **/
export interface PddFdsOrderListGetRequestInterface {
  /**
   * @description: 入参信息
   * @type: PddFdsOrderListGetParamFdsOrderListGetRequestRequestInterface
   * @default:
   *
   **/
  param_fds_order_list_get_request: PddFdsOrderListGetParamFdsOrderListGetRequestRequestInterface;
}

/**
 * @description 入参信息
 * @default
 * @example
 **/
export interface PddFdsOrderListGetParamFdsOrderListGetRequestRequestInterface {
  /**
   * @description: 必填，更新时间结束时间的时间戳，指格林威治时间 1970 年 01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)起至现在的总毫秒数 PS：开始时间结束时间间距不超过半小时
   * @type: string | number
   * @default:
   **/
  end_updated_time: string | number;

  /**
   * @description: 返回页码，页码从 1 开始 PS：当前采用分页返回，数量和页数会一起传
   * @type: number
   * @default:
   **/
  page: number;

  /**
   * @description: 返回数量，最大 100
   * @type: number
   * @default:
   **/
  page_size: number;

  /**
   * @description: 必填，更新时间开始时间的时间戳，指格林威治时间 1970 年 01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)起至现在的总毫秒数 PS：开始时间结束时间间距不超过半小时
   * @type: string | number
   * @default:
   **/
  start_updated_time: string | number;
}

/**
 * 接口名称：根据更新时间查询订单列表
 * 接口标识：pdd.fds.order.list.get
 * 接口使用场景：厂家首次接入ISV时，同步商家分配给厂家历史订单列表，最多支持同步近一个月数据
 **/
export interface PddFdsOrderListGetResponseInterface {
  /**
   * @description: response
   * @type: PddFdsOrderListGetPddFdsOrderListGetResponseResponseInterface
   * @default:
   *
   **/
  pdd_fds_order_list_get_response: PddFdsOrderListGetPddFdsOrderListGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddFdsOrderListGetPddFdsOrderListGetResponseResponseInterface {
  /**
   * @description: 订单列表
   * @type: PddFdsOrderListGetPddFdsOrderListGetResponseOrderListResponseInterface[]
   * @default:
   *
   **/
  order_list: PddFdsOrderListGetPddFdsOrderListGetResponseOrderListResponseInterface[];

  /**
   * @description: 订单总数
   * @type: number
   * @default:
   **/
  total: number;
}

/**
 * @description 订单列表
 * @default
 * @example
 **/
export interface PddFdsOrderListGetPddFdsOrderListGetResponseOrderListResponseInterface {
  /**
   * @description: 分配时间,毫秒
   * @type: string | number
   * @default:
   **/
  allow_time: string | number;

  /**
   * @description: 市
   * @type: string
   * @default:
   **/
  city: string;

  /**
   * @description: 区
   * @type: string
   * @default:
   **/
  district: string;

  /**
   * @description: 商品名称
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 商品数量
   * @type: number
   * @default:
   **/
  goods_number: number;

  /**
   * @description: 规格
   * @type: string
   * @default:
   **/
  goods_spec: string;

  /**
   * @description: 代打店铺id
   * @type: string
   * @default:
   **/
  mall_mask_id: string;

  /**
   * @description: 代打店铺自定义名称
   * @type: string
   * @default:
   **/
  mall_mask_name: string;

  /**
   * @description: 代打订单号
   * @type: string
   * @default:
   **/
  order_mask_sn: string;

  /**
   * @description: 省
   * @type: string
   * @default:
   **/
  province: string;

  /**
   * @description: 卖家备注
   * @type: string
   * @default:
   **/
  remark: string;

  /**
   * @description: 分配状态 0：取消分配 1：已分配
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 货号
   * @type: string
   * @default:
   **/
  product_sn: string;

  /**
   * @description: 结算价格，单位：分
   * @type: number
   * @default:
   **/
  product_price: number;

  /**
   * @description: 收件人姓名+电话+地址相同,receiver_id字段相同，该功能上线前字段为""
   * @type: string
   * @default:
   **/
  receiver_id: string;
}
