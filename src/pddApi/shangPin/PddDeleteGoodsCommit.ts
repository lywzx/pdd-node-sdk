export const PDD_DELETE_GOODS_COMMIT = 'PDD_DELETE_GOODS_COMMIT';

/**
 * 接口名称：删除商品接口
 * 接口标识：pdd.delete.goods.commit
 * 接口使用场景：删除商品接口,只能删除下架的商品
 **/

export interface PddDeleteGoodsCommitRequestInterface {
  /**
   * @description: 商品id 列表(List<Long>) json string，例：[1,2]，一次操作数量请小于50
   * @type: string
   * @default:
   **/
  goods_ids?: string;
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

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_DELETE_GOODS_COMMIT]: {
    requestInterface: PddDeleteGoodsCommitRequestInterface;
    responseInterface: PddDeleteGoodsCommitResponseInterface;
  };
}
