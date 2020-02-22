export const PDD_GOODS_LATEST_COMMIT_STATUS_GET = 'PDD_GOODS_LATEST_COMMIT_STATUS_GET';

/**
 * 接口名称：批量goodsId查询最新的审核状态
 * 接口标识：pdd.goods.latest.commit.status.get
 * 接口使用场景：批量goodsId查询最新的审核状态
 **/
export interface PddGoodsLatestCommitStatusGetRequestInterface {
  /**
   * @description: 商品id(不超过100个)
   * @type: string
   * @default:
   **/
  goods_id_list?: string;
}

/**
 * 接口名称：批量goodsId查询最新的审核状态
 * 接口标识：pdd.goods.latest.commit.status.get
 * 接口使用场景：批量goodsId查询最新的审核状态
 **/
export interface PddGoodsLatestCommitStatusGetResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsLatestCommitStatusGetGoodsLatestCommitStatusGetResponseResponseInterface
   * @default:
   *
   **/
  goods_latest_commit_status_get_response: PddGoodsLatestCommitStatusGetGoodsLatestCommitStatusGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGoodsLatestCommitStatusGetGoodsLatestCommitStatusGetResponseResponseInterface {
  /**
   * @description: list
   * @type: PddGoodsLatestCommitStatusGetGoodsLatestCommitStatusGetResponseListResponseInterface[]
   * @default:
   *
   **/
  list: PddGoodsLatestCommitStatusGetGoodsLatestCommitStatusGetResponseListResponseInterface[];
}

/**
 * @description list
 * @default
 * @example
 **/
export interface PddGoodsLatestCommitStatusGetGoodsLatestCommitStatusGetResponseListResponseInterface {
  /**
   * @description: 草稿状态
   * @type: number
   * @default:
   **/
  check_status: number;

  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id: string;

  /**
   * @description: 驳回原因
   * @type: string
   * @default:
   **/
  reject_comment: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_GOODS_LATEST_COMMIT_STATUS_GET]: {
    requestInterface: PddGoodsLatestCommitStatusGetRequestInterface;
    responseInterface: PddGoodsLatestCommitStatusGetResponseInterface;
  };
}
