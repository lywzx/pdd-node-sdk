export const PDD_MALL_INFO_GROUP_UPDATE_POST = 'pdd.mall.info.group.update.post';

/**
 * 接口名称：编辑门店组
 * 接口标识：pdd.mall.info.group.update.post
 * 接口使用场景：编辑门店组
 **/
export interface PddMallInfoGroupUpdatePostRequestInterface {
  /**
   * @description: 门店组id
   * @type: number
   * @default:
   **/
  group_id: number;

  /**
   * @description: 门店组名称
   * @type: string
   * @default:
   **/
  group_name: string;
}

/**
 * 接口名称：编辑门店组
 * 接口标识：pdd.mall.info.group.update.post
 * 接口使用场景：编辑门店组
 **/
export interface PddMallInfoGroupUpdatePostResponseInterface {
  /**
   * @description:
   * @type: PddMallInfoGroupUpdatePostResponseResponseInterface
   * @default:
   *
   **/
  response: PddMallInfoGroupUpdatePostResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddMallInfoGroupUpdatePostResponseResponseInterface {
  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  result: boolean;
}
