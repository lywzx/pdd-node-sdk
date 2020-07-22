export const PDD_DDK_OAUTH_GOODS_PID_QUERY = 'pdd.ddk.oauth.goods.pid.query';
export const PDD_DDK_OAUTH_GOODS_PID_QUERY_RESPONSE_KEY = 'p_id_query_response';

/**
 * 接口名称：多多客已生成推广位信息查询
 * 接口标识：pdd.ddk.oauth.goods.pid.query
 * 接口使用场景：查询已经生成的推广位信息
 **/
export interface PddDdkOauthGoodsPidQueryRequestInterface {
  /**
   * @description: 返回的页数
   * @type: number
   * @default:
   **/
  page?: number;

  /**
   * @description: 返回的每页推广位数量
   * @type: number
   * @default:
   **/
  page_size?: number;

  /**
   * @description: 推广位id列表
   * @type: string[]
   * @default:
   **/
  pid_list?: string[];
}

/**
 * 接口名称：多多客已生成推广位信息查询
 * 接口标识：pdd.ddk.oauth.goods.pid.query
 * 接口使用场景：查询已经生成的推广位信息
 **/
export interface PddDdkOauthGoodsPidQueryResponseInterface {
  /**
   * @description: response
   * @type: PddDdkOauthGoodsPidQueryPIdQueryResponseResponseInterface
   * @default:
   *
   **/
  p_id_query_response: PddDdkOauthGoodsPidQueryPIdQueryResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddDdkOauthGoodsPidQueryPIdQueryResponseResponseInterface {
  /**
   * @description: 多多进宝推广位对象列表
   * @type: PddDdkOauthGoodsPidQueryPIdQueryResponsePIdListResponseInterface[]
   * @default:
   *
   **/
  p_id_list: PddDdkOauthGoodsPidQueryPIdQueryResponsePIdListResponseInterface[];

  /**
   * @description: 返回推广位总数
   * @type: string | number
   * @default:
   **/
  total_count: string | number;
}

/**
 * @description 多多进宝推广位对象列表
 * @default
 * @example
 **/
export interface PddDdkOauthGoodsPidQueryPIdQueryResponsePIdListResponseInterface {
  /**
   * @description: 推广位生成时间
   * @type: string | number
   * @default:
   **/
  create_time: string | number;

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
