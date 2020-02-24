export const PDD_DDK_GOODS_PID_QUERY = 'pdd.ddk.goods.pid.query';
export const PDD_DDK_GOODS_PID_QUERY_RESPONSE_KEY = 'p_id_query_response';

/**
 * 接口名称：查询已经生成的推广位信息
 * 接口标识：pdd.ddk.goods.pid.query
 * 接口使用场景：查询已经生成的推广位信息
 **/
export interface PddDdkGoodsPidQueryRequestInterface {
  /**
   * @description: 返回的页数
   * @type: number
   * @default:
   **/
  page: number;

  /**
   * @description: 返回的每页推广位数量
   * @type: number
   * @default:
   **/
  page_size: number;

  /**
   * @description: 推广位id列表
   * @type: string
   * @default:
   **/
  pid_list: string;
}

/**
 * 接口名称：查询已经生成的推广位信息
 * 接口标识：pdd.ddk.goods.pid.query
 * 接口使用场景：查询已经生成的推广位信息
 **/
export interface PddDdkGoodsPidQueryResponseInterface {
  /**
   * @description: response
   * @type: PddDdkGoodsPidQueryPIdQueryResponseResponseInterface
   * @default:
   *
   **/
  p_id_query_response: PddDdkGoodsPidQueryPIdQueryResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddDdkGoodsPidQueryPIdQueryResponseResponseInterface {
  /**
   * @description: 多多进宝推广位对象列表
   * @type: PddDdkGoodsPidQueryPIdQueryResponsePIdListResponseInterface[]
   * @default:
   *
   **/
  p_id_list: PddDdkGoodsPidQueryPIdQueryResponsePIdListResponseInterface[];

  /**
   * @description: 返回推广位总数
   * @type: string
   * @default:
   **/
  total_count: string;
}

/**
 * @description 多多进宝推广位对象列表
 * @default
 * @example
 **/
export interface PddDdkGoodsPidQueryPIdQueryResponsePIdListResponseInterface {
  /**
   * @description: 推广位生成时间
   * @type: string
   * @default:
   **/
  create_time: string;

  /**
   * @description: 推广位名称
   * @type: string
   * @default:
   **/
  pid_name: string;

  /**
   * @description: 推广位ID
   * @type: string
   * @default:
   **/
  p_id: string;
}
