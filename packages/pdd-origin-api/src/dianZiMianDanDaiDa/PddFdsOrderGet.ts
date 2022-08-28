export const PDD_FDS_ORDER_GET = 'pdd.fds.order.get';
export const PDD_FDS_ORDER_GET_RESPONSE_KEY = 'pdd_fds_order_get_response';
export const PDD_FDS_ORDER_GET_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 1,
    times: 200,
    callSourceType: 0,
  },
  {
    limiterLevel: 3,
    timeRange: 1,
    times: 2000,
    callSourceType: 0,
  },
];

/**
 * 接口名称：订单详情
 * 接口标识：pdd.fds.order.get
 * 接口使用场景：收到分配，更新地址消息，使用该接口拉取订单详情
 **/
export interface PddFdsOrderGetRequestInterface {
  /**
   * @description: 入参信息
   * @type: PddFdsOrderGetParamFdsOrderGetRequestRequestInterface
   * @default:
   *
   **/
  param_fds_order_get_request: PddFdsOrderGetParamFdsOrderGetRequestRequestInterface;
}

/**
 * @description 入参信息
 * @default
 * @example
 **/
export interface PddFdsOrderGetParamFdsOrderGetRequestRequestInterface {
  /**
   * @description: 代打店铺id
   * @type: string
   * @default:
   **/
  mall_mask_id: string;

  /**
   * @description: 代打订单号
   * @type: string
   * @default:
   **/
  order_mask_sn: string;
}

/**
 * 接口名称：订单详情
 * 接口标识：pdd.fds.order.get
 * 接口使用场景：收到分配，更新地址消息，使用该接口拉取订单详情
 **/
export interface PddFdsOrderGetResponseInterface {
  /**
   * @description: response
   * @type: PddFdsOrderGetPddFdsOrderGetResponseResponseInterface
   * @default:
   *
   **/
  pdd_fds_order_get_response: PddFdsOrderGetPddFdsOrderGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddFdsOrderGetPddFdsOrderGetResponseResponseInterface {
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
   * @description: 结算价格，单位：分
   * @type: number
   * @default:
   **/
  product_price: number;

  /**
   * @description: 货号
   * @type: string
   * @default:
   **/
  product_sn: string;

  /**
   * @description: 收件人姓名+电话+地址相同,receiver_id字段相同，该功能上线前字段为""
   * @type: string
   * @default:
   **/
  receiver_id: string;

  /**
   * @description: 商家设置的sku编码
   * @type: string
   * @default:
   **/
  out_sku_sn: string;

  /**
   * @description: 加价发顺丰0：不是 1：是
   * @type: number
   * @default:
   **/
  sf_only: number;

  /**
   * @description: 运单回传状态 0：未回传 1：已回传
   * @type: number
   * @default:
   **/
  return_status: number;
}
