export const PDD_TRACE_SOURCE_QUERY_GOODS_INFO = 'pdd.trace.source.query.goods.info';

/**
 * 接口名称：根据防伪码ID获取溯源商品信息
 * 接口标识：pdd.trace.source.query.goods.info
 * 接口使用场景：根据溯源码ID获取溯源商品信息
 **/
export interface PddTraceSourceQueryGoodsInfoRequestInterface {
  /**
   * @description: 请求方法
   * @type: string
   * @default:
   **/
  httpMethod: string;

  /**
   * @description: 请求参数
   * @type: PddTraceSourceQueryGoodsInfoParamsRequestInterface
   * @default:
   *
   **/
  params: PddTraceSourceQueryGoodsInfoParamsRequestInterface;
}

/**
 * @description 请求参数
 * @default
 * @example
 **/
export interface PddTraceSourceQueryGoodsInfoParamsRequestInterface {
  /**
   * @description: 接口调用账号（由平台分配）
   * @type: string
   * @default:
   **/
  userid: string;

  /**
   * @description: 请求时间戳，10分钟有效，格式：yyyy-MM-dd HH:mm:ss
   * @type: string
   * @default:
   **/
  timestamp: string;

  /**
   * @description: 签名
   * @type: string
   * @default:
   **/
  sign: string;

  /**
   * @description: 防伪溯源码ID
   * @type: string
   * @default:
   **/
  id: string;
}

/**
 * 接口名称：根据防伪码ID获取溯源商品信息
 * 接口标识：pdd.trace.source.query.goods.info
 * 接口使用场景：根据溯源码ID获取溯源商品信息
 **/
export interface PddTraceSourceQueryGoodsInfoResponseInterface {
  /**
   * @description: 返回参数
   * @type: string
   * @default:
   **/
  response: string;
}
