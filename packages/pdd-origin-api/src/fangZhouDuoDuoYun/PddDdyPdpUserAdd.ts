export const PDD_DDY_PDP_USER_ADD = 'pdd.ddy.pdp.user.add';
export const PDD_DDY_PDP_USER_ADD_RESPONSE_KEY = 'ddy_pdp_user_add_response';
export const PDD_DDY_PDP_USER_ADD_LIMITERS = [
  {
    limiterLevel: 4,
    timeRange: 1,
    times: 50,
  },
];

/**
 * 接口名称：添加数据推送用户
 * 接口标识：pdd.ddy.pdp.user.add
 * 接口使用场景：提供给接入数据推送的应用添加数据推送服务的用户
 **/
export interface PddDdyPdpUserAddRequestInterface {
  /**
   * @description: 推送历史数据天数，只能为30天内，包含30天。当此参数不填时，表示以页面中应用配置的历史天数为准；如果为0表示这个用户不推送历史数据；其它表示推送的历史天数
   * @type: number
   * @default: 0
   **/
  history_days?: number;

  /**
   * @description: rds实例编号
   * @type: string
   * @default:
   **/
  rds_id: string;
}

/**
 * 接口名称：添加数据推送用户
 * 接口标识：pdd.ddy.pdp.user.add
 * 接口使用场景：提供给接入数据推送的应用添加数据推送服务的用户
 **/
export interface PddDdyPdpUserAddResponseInterface {
  /**
   * @description: 返回结果
   * @type: PddDdyPdpUserAddDdyPdpUserAddResponseResponseInterface
   * @default:
   *
   **/
  ddy_pdp_user_add_response: PddDdyPdpUserAddDdyPdpUserAddResponseResponseInterface;
}

/**
 * @description 返回结果
 * @default
 * @example
 **/
export interface PddDdyPdpUserAddDdyPdpUserAddResponseResponseInterface {
  /**
   * @description: 是否添加成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
