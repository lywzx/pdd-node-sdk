export const PDD_ORDER_PROMISE_INFO_GET = 'pdd.order.promise.info.get';
export const PDD_ORDER_PROMISE_INFO_GET_RESPONSE_KEY = 'promise_info_get_response';

/**
 * 接口名称：查询订单承诺信息
 * 接口标识：pdd.order.promise.info.get
 * 接口使用场景：查询订单承诺信息，用于打单等场景下的承诺信息展示
 **/
export interface PddOrderPromiseInfoGetRequestInterface {
  /**
   * @description: 承诺id
   * @type: string | number
   * @default:
   **/
  promise_id: string | number;
}

/**
 * 接口名称：查询订单承诺信息
 * 接口标识：pdd.order.promise.info.get
 * 接口使用场景：查询订单承诺信息，用于打单等场景下的承诺信息展示
 **/
export interface PddOrderPromiseInfoGetResponseInterface {
  /**
   * @description:
   * @type: PddOrderPromiseInfoGetPromiseInfoGetResponseResponseInterface
   * @default:
   *
   **/
  promise_info_get_response: PddOrderPromiseInfoGetPromiseInfoGetResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddOrderPromiseInfoGetPromiseInfoGetResponseResponseInterface {
  /**
   * @description:
   * @type: PddOrderPromiseInfoGetPromiseInfoGetResponsePromiseInfoResponseInterface
   * @default:
   *
   **/
  promise_info: PddOrderPromiseInfoGetPromiseInfoGetResponsePromiseInfoResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddOrderPromiseInfoGetPromiseInfoGetResponsePromiseInfoResponseInterface {
  /**
   * @description: 承诺详情
   * @type: PddOrderPromiseInfoGetPromiseInfoGetResponsePromiseInfoDetailInfoResponseInterface
   * @default:
   *
   **/
  detail_info: PddOrderPromiseInfoGetPromiseInfoGetResponsePromiseInfoDetailInfoResponseInterface;

  /**
   * @description: 额外信息
   * @type: PddOrderPromiseInfoGetPromiseInfoGetResponsePromiseInfoExtraInfoResponseInterface
   * @default:
   *
   **/
  extra_info: PddOrderPromiseInfoGetPromiseInfoGetResponsePromiseInfoExtraInfoResponseInterface;

  /**
   * @description: 是否已删除
   * @type: boolean
   * @default:
   **/
  is_deleted: boolean;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;

  /**
   * @description: 服务承诺描述
   * @type: string
   * @default:
   **/
  promise_desc: string;

  /**
   * @description: 服务承诺单性质，1-平台协议，2-客服承 诺，3-平台建议
   * @type: number
   * @default:
   **/
  promise_level: number;

  /**
   * @description: 服务承诺状态，0-已创建，1-履约中，2-履 约未达成，3-履约成功
   * @type: number
   * @default:
   **/
  promise_status: number;

  /**
   * @description: 服务承诺类型，1-指定快递/物流，2-优先发 货
   * @type: number
   * @default:
   **/
  promise_type: number;

  /**
   * @description: 承诺信息id
   * @type: string | number
   * @default:
   **/
  promise_id: string | number;

  /**
   * @description: 业务场景，1-发货场景
   * @type: number
   * @default:
   **/
  scene_type: number;

  /**
   * @description: 最后更新时间
   * @type: string
   * @default:
   **/
  updated_at: string;
}

/**
 * @description 承诺详情
 * @default
 * @example
 **/
export interface PddOrderPromiseInfoGetPromiseInfoGetResponsePromiseInfoDetailInfoResponseInterface {
  /**
   * @description: key 详情请参阅接口文档
   * @type: string
   * @default:
   **/
  $key: string;

  /**
   * @description: value 详情请参阅接口文档
   * @type: string
   * @default:
   **/
  $value: string;
}

/**
 * @description 额外信息
 * @default
 * @example
 **/
export interface PddOrderPromiseInfoGetPromiseInfoGetResponsePromiseInfoExtraInfoResponseInterface {
  /**
   * @description:
   * @type: string
   * @default:
   **/
  $key: string;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  $value: string;
}
