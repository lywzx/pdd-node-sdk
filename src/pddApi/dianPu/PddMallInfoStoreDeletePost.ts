export const PDD_MALL_INFO_STORE_DELETE_POST = 'pdd.mall.info.store.delete.post';
export const PDD_MALL_INFO_STORE_DELETE_POST_RESPONSE_KEY = 'mall_info_store_delete_post_response';

/**
 * 接口名称：删除店铺门店
 * 接口标识：pdd.mall.info.store.delete.post
 * 接口使用场景：删除店铺门店
 **/
export interface PddMallInfoStoreDeletePostRequestInterface {
  /**
   * @description: 门店ID列表
   * @type: string[]
   * @default:
   **/
  store_id_list?: string[];
}

/**
 * 接口名称：删除店铺门店
 * 接口标识：pdd.mall.info.store.delete.post
 * 接口使用场景：删除店铺门店
 **/
export interface PddMallInfoStoreDeletePostResponseInterface {
  /**
   * @description:
   * @type: PddMallInfoStoreDeletePostMallInfoStoreDeletePostResponseResponseInterface
   * @default:
   *
   **/
  mall_info_store_delete_post_response: PddMallInfoStoreDeletePostMallInfoStoreDeletePostResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddMallInfoStoreDeletePostMallInfoStoreDeletePostResponseResponseInterface {
  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
