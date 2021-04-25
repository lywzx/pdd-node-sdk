export const PDD_GOODS_COMMIT_STATUS_GET = 'pdd.goods.commit.status.get';
export const PDD_GOODS_COMMIT_STATUS_GET_RESPONSE_KEY = 'goods_commit_status_get_response';

/**
 * 接口名称：草稿状态查询接口
 * 接口标识：pdd.goods.commit.status.get
 * 接口使用场景：查询店铺的商品草稿列表状态
 **/
export interface PddGoodsCommitStatusGetRequestInterface {
  /**
   * @description: goods_commit_id列表
   * @type: Array<string | number>
   * @default:
   **/
  goods_commit_id_list: Array<string | number>;
}

/**
 * 接口名称：草稿状态查询接口
 * 接口标识：pdd.goods.commit.status.get
 * 接口使用场景：查询店铺的商品草稿列表状态
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
   * @type: string | number
   * @default:
   **/
  goods_commit_id: string | number;

  /**
   * @description: 驳回原因
   * @type: string
   * @default:
   **/
  reject_comment: string;
}
