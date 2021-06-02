export const PDD_DDY_PDP_USER_DELETE = 'pdd.ddy.pdp.user.delete';
export const PDD_DDY_PDP_USER_DELETE_RESPONSE_KEY = 'ddy_pdp_users_delete_response';

/**
 * 接口名称：删除数据推送用户
 * 接口标识：pdd.ddy.pdp.user.delete
 * 接口使用场景：删除应用的数据推送用户
 **/
export interface PddDdyPdpUserDeleteRequestInterface {
  /**
   * @description: 需要删除的用户编号
   * @type: string | number
   * @default:
   **/
  owner_id: string | number;
}

/**
 * 接口名称：删除数据推送用户
 * 接口标识：pdd.ddy.pdp.user.delete
 * 接口使用场景：删除应用的数据推送用户
 **/
export interface PddDdyPdpUserDeleteResponseInterface {
  /**
   * @description: 返回结果
   * @type: PddDdyPdpUserDeleteDdyPdpUsersDeleteResponseResponseInterface
   * @default:
   *
   **/
  ddy_pdp_users_delete_response: PddDdyPdpUserDeleteDdyPdpUsersDeleteResponseResponseInterface;
}

/**
 * @description 返回结果
 * @default
 * @example
 **/
export interface PddDdyPdpUserDeleteDdyPdpUsersDeleteResponseResponseInterface {
  /**
   * @description: 是否删除成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
