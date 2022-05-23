export const PDD_MALL_INFO_GROUP_ADD_POST = 'pdd.mall.info.group.add.post';

/**
 * 接口名称：新增门店组
 * 接口标识：pdd.mall.info.group.add.post
 * 接口使用场景：新增门店组
 **/
export interface PddMallInfoGroupAddPostRequestInterface {
  /**
   * @description: 门店组名称
   * @type: string
   * @default:
   **/
  group_name: string;
}

/**
 * 接口名称：新增门店组
 * 接口标识：pdd.mall.info.group.add.post
 * 接口使用场景：新增门店组
 **/
export interface PddMallInfoGroupAddPostResponseInterface {
  /**
   * @description:
   * @type: PddMallInfoGroupAddPostResponseResponseInterface
   * @default:
   *
   **/
  response: PddMallInfoGroupAddPostResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddMallInfoGroupAddPostResponseResponseInterface {
  /**
   * @description: 门店组id
   * @type: number
   * @default:
   **/
  group_id: number;
}
