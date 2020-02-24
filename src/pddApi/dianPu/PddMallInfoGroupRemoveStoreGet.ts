export const PDD_MALL_INFO_GROUP_REMOVE_STORE_GET = 'pdd.mall.info.group.remove.store.get';
export const PDD_MALL_INFO_GROUP_REMOVE_STORE_GET_RESPONSE_KEY = 'mall_info_group_remove_store_get_response';

/**
 * 接口名称：门店组删除门店
 * 接口标识：pdd.mall.info.group.remove.store.get
 * 接口使用场景：门店组删除门店
 **/
export interface PddMallInfoGroupRemoveStoreGetRequestInterface {
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
 * 接口名称：门店组删除门店
 * 接口标识：pdd.mall.info.group.remove.store.get
 * 接口使用场景：门店组删除门店
 **/
export interface PddMallInfoGroupRemoveStoreGetResponseInterface {
  /**
   * @description:
   * @type: PddMallInfoGroupRemoveStoreGetMallInfoGroupRemoveStoreGetResponseResponseInterface
   * @default:
   *
   **/
  mall_info_group_remove_store_get_response: PddMallInfoGroupRemoveStoreGetMallInfoGroupRemoveStoreGetResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddMallInfoGroupRemoveStoreGetMallInfoGroupRemoveStoreGetResponseResponseInterface {
  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
