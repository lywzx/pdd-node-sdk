export const PDD_GOODS_COMMIT_STATUS_GET = 'PDD_GOODS_COMMIT_STATUS_GET';

/**
 * 接口名称：草稿状态查询接口
 * 接口标识：pdd.goods.commit.status.get
 * 接口使用场景：查询店铺的商品草稿状态
 **/
export interface PddGoodsCommitStatusGetRequestInterface {
  /**
   * @description: goods_commit_id列表
   * @type: string
   * @default:
   **/
  goods_commit_id_list?: string;
}

/**
 * 接口名称：草稿状态查询接口
 * 接口标识：pdd.goods.commit.status.get
 * 接口使用场景：查询店铺的商品草稿状态
 **/
export interface PddGoodsCommitStatusGetResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsCommitStatusGetGoodsCommitStatusGetResponseResponseInterface
   * @default:
   *
   **/
  goods_commit_status_get_response: PddGoodsCommitStatusGetGoodsCommitStatusGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGoodsCommitStatusGetGoodsCommitStatusGetResponseResponseInterface {
  /**
   * @description: list
   * @type: PddGoodsCommitStatusGetGoodsCommitStatusGetResponseListResponseInterface[]
   * @default:
   *
   **/
  list: PddGoodsCommitStatusGetGoodsCommitStatusGetResponseListResponseInterface[];
}

/**
 * @description list
 * @default
 * @example
 **/
export interface PddGoodsCommitStatusGetGoodsCommitStatusGetResponseListResponseInterface {
  /**
   * @description: 状态
   * @type: number
   * @default:
   **/
  check_status: number;

  /**
   * @description: 草稿id
   * @type: string
   * @default:
   **/
  goods_commit_id: string;

  /**
   * @description: 驳回原因
   * @type: string
   * @default:
   **/
  reject_comment: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_GOODS_COMMIT_STATUS_GET]: {
    requestInterface: PddGoodsCommitStatusGetRequestInterface;
    responseInterface: PddGoodsCommitStatusGetResponseInterface;
  };
}
