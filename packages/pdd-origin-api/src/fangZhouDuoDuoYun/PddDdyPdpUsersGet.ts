export const PDD_DDY_PDP_USERS_GET = 'pdd.ddy.pdp.users.get';
export const PDD_DDY_PDP_USERS_GET_RESPONSE_KEY = 'ddy_pdp_users_get_response';
export const PDD_DDY_PDP_USERS_GET_LIMITERS = [
  {
    limiterLevel: 4,
    timeRange: 1,
    times: 100,
    callSourceType: 0,
  },
];

/**
 * 接口名称：获取开通订单同步服务的用户
 * 接口标识：pdd.ddy.pdp.users.get
 * 接口使用场景：获取开通订单同步服务的用户
 **/
export interface PddDdyPdpUsersGetRequestInterface {
  /**
   * @description: 如果传了owner_id，表示单条查询
   * @type: string | number
   * @default:
   **/
  owner_id?: string | number;

  /**
   * @description: 查询最后更改时间在某个时间段内的用户
   * @type: string
   * @default:
   **/
  start_modified?: string;

  /**
   * @description: 查询最后更改时间在某个时间段内的用户
   * @type: string
   * @default:
   **/
  end_modified?: string;

  /**
   * @description: 当前页数
   * @type: number
   * @default: 1
   **/
  page_no?: number;

  /**
   * @description: 每页记录数，默认200，最大200
   * @type: number
   * @default: 200
   **/
  page_size?: number;
}

/**
 * 接口名称：获取开通订单同步服务的用户
 * 接口标识：pdd.ddy.pdp.users.get
 * 接口使用场景：获取开通订单同步服务的用户
 **/
export interface PddDdyPdpUsersGetResponseInterface {
  /**
   * @description: 接口返回结果
   * @type: PddDdyPdpUsersGetDdyPdpUsersGetResponseResponseInterface
   * @default:
   *
   **/
  ddy_pdp_users_get_response: PddDdyPdpUsersGetDdyPdpUsersGetResponseResponseInterface;
}

/**
 * @description 接口返回结果
 * @default
 * @example
 **/
export interface PddDdyPdpUsersGetDdyPdpUsersGetResponseResponseInterface {
  /**
   * @description: 总记录数
   * @type: string | number
   * @default:
   **/
  total_results: string | number;

  /**
   * @description: 用户列表
   * @type: PddDdyPdpUsersGetDdyPdpUsersGetResponseUsersResponseInterface[]
   * @default:
   *
   **/
  users: PddDdyPdpUsersGetDdyPdpUsersGetResponseUsersResponseInterface[];
}

/**
 * @description 用户列表
 * @default
 * @example
 **/
export interface PddDdyPdpUsersGetDdyPdpUsersGetResponseUsersResponseInterface {
  /**
   * @description: 用户id
   * @type: string | number
   * @default:
   **/
  owner_id: string | number;

  /**
   * @description: rds数据库的实例id
   * @type: string
   * @default:
   **/
  rds_id: string;

  /**
   * @description: 状态，0: 暂停，1: 正常，2: 商家授权已过期
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 推送历史数据天数
   * @type: number
   * @default:
   **/
  history_days: number;
}
