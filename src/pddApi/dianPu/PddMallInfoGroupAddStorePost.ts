export const PDD_MALL_INFO_GROUP_ADD_STORE_POST = 'pdd.mall.info.group.add.store.post';

/**
 * 接口名称：门店组添加门店
 * 接口标识：pdd.mall.info.group.add.store.post
 * 接口使用场景：门店组添加门店
 **/
export interface PddMallInfoGroupAddStorePostRequestInterface {
  /**
   * @description: 店铺ID
   * @type: string
   * @default:
   **/
  group_id?: string;

  /**
   * @description: 门店ID列表
   * @type: string
   * @default:
   **/
  store_id_list?: string;
}

/**
 * 接口名称：门店组添加门店
 * 接口标识：pdd.mall.info.group.add.store.post
 * 接口使用场景：门店组添加门店
 **/
export interface PddMallInfoGroupAddStorePostResponseInterface {
  /**
   * @description:
   * @type: PddMallInfoGroupAddStorePostMallInfoGroupAddStorePostResponseResponseInterface
   * @default:
   *
   **/
  mall_info_group_add_store_post_response: PddMallInfoGroupAddStorePostMallInfoGroupAddStorePostResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddMallInfoGroupAddStorePostMallInfoGroupAddStorePostResponseResponseInterface {
  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
