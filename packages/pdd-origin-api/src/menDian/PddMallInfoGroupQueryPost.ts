export const PDD_MALL_INFO_GROUP_QUERY_POST = 'pdd.mall.info.group.query.post';

/**
 * 接口名称：查询店铺下门店组列表
 * 接口标识：pdd.mall.info.group.query.post
 * 接口使用场景：查询店铺下门店组列表
 **/
export interface PddMallInfoGroupQueryPostRequestInterface {
  /**
   * @description: 第几页
   * @type: number
   * @default:
   **/
  page_number: number;

  /**
   * @description: 每页多少个
   * @type: number
   * @default:
   **/
  page_size: number;
}

/**
 * 接口名称：查询店铺下门店组列表
 * 接口标识：pdd.mall.info.group.query.post
 * 接口使用场景：查询店铺下门店组列表
 **/
export interface PddMallInfoGroupQueryPostResponseInterface {
  /**
   * @description:
   * @type: PddMallInfoGroupQueryPostResponseResponseInterface
   * @default:
   *
   **/
  response: PddMallInfoGroupQueryPostResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddMallInfoGroupQueryPostResponseResponseInterface {
  /**
   * @description:
   * @type: PddMallInfoGroupQueryPostResponseMallStoreGroupListResponseInterface[]
   * @default:
   *
   **/
  mall_store_group_list: PddMallInfoGroupQueryPostResponseMallStoreGroupListResponseInterface[];

  /**
   * @description: 总数
   * @type: number
   * @default:
   **/
  total: number;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddMallInfoGroupQueryPostResponseMallStoreGroupListResponseInterface {
  /**
   * @description:
   * @type: number
   * @default:
   **/
  group_id: number;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  group_name: string;

  /**
   * @description:
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;
}
