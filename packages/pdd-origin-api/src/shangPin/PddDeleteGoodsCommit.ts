export const PDD_DELETE_GOODS_COMMIT = 'pdd.delete.goods.commit';

export const PDD_DELETE_GOODS_COMMIT_LIMITERS = [
  {
    limiterLevel: 4,
    timeRange: 20,
    times: 1200,
    callSourceType: 0,
  },
  {
    limiterLevel: 3,
    timeRange: 10,
    times: 3000,
    callSourceType: 0,
  },
];

/**
 * 接口名称：删除商品接口
 * 接口标识：pdd.delete.goods.commit
 * 接口使用场景：删除商品接口,只能删除下架的商品
 **/
export interface PddDeleteGoodsCommitRequestInterface {
  /**
   * @description: 商品id 列表(List<Long>) json string，例：[1,2]，一次操作数量请小于50
   * @type: Array<string | number>
   * @default:
   **/
  goods_ids: Array<string | number>;
}

/**
 * 接口名称：删除商品接口
 * 接口标识：pdd.delete.goods.commit
 * 接口使用场景：删除商品接口,只能删除下架的商品
 **/
export interface PddDeleteGoodsCommitResponseInterface {
  /**
   * @description: 操作结果
   * @type: boolean
   * @default:
   **/
  open_api_response: boolean;
}
