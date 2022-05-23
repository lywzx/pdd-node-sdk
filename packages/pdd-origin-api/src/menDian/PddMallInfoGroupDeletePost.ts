export const PDD_MALL_INFO_GROUP_DELETE_POST = 'pdd.mall.info.group.delete.post';

/**
 * 接口名称：删除门店组
 * 接口标识：pdd.mall.info.group.delete.post
 * 接口使用场景：删除门店组
 **/
export interface PddMallInfoGroupDeletePostRequestInterface {
  /**
   * @description: 门店组id列表
   * @type: number[]
   * @default:
   **/
  group_id_list: number[];
}

/**
 * 接口名称：删除门店组
 * 接口标识：pdd.mall.info.group.delete.post
 * 接口使用场景：删除门店组
 **/
export interface PddMallInfoGroupDeletePostResponseInterface {
  /**
   * @description:
   * @type: PddMallInfoGroupDeletePostResponseResponseInterface
   * @default:
   *
   **/
  response: PddMallInfoGroupDeletePostResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddMallInfoGroupDeletePostResponseResponseInterface {
  /**
   * @description: 操作是否成功
   * @type: boolean
   * @default:
   **/
  result: boolean;
}
