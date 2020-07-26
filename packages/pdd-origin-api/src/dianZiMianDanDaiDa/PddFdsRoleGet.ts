export const PDD_FDS_ROLE_GET = 'pdd.fds.role.get';
export const PDD_FDS_ROLE_GET_RESPONSE_KEY = 'pdd_fds_role_get_response';
export const PDD_FDS_ROLE_GET_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 1,
    times: 1,
  },
];

/**
 * 接口名称：查询店铺身份
 * 接口标识：pdd.fds.role.get
 * 接口使用场景：确认店铺的身份
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddFdsRoleGetRequestInterface {}

/**
 * 接口名称：查询店铺身份
 * 接口标识：pdd.fds.role.get
 * 接口使用场景：确认店铺的身份
 **/
export interface PddFdsRoleGetResponseInterface {
  /**
   * @description: response
   * @type: PddFdsRoleGetPddFdsRoleGetResponseResponseInterface
   * @default:
   *
   **/
  pdd_fds_role_get_response: PddFdsRoleGetPddFdsRoleGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddFdsRoleGetPddFdsRoleGetResponseResponseInterface {
  /**
   * @description: 店铺身份 0：未知身份 2：厂家
   * @type: number
   * @default:
   **/
  mall_role: number;
}
