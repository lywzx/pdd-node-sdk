export const PDD_GOODS_COMMIT_LIST_GET = 'pdd.goods.commit.list.get';
export const PDD_GOODS_COMMIT_LIST_GET_RESPONSE_KEY = 'goods_commit_list_get_response';

/**
 * 接口名称：草稿列表接口
 * 接口标识：pdd.goods.commit.list.get
 * 接口使用场景：查询店铺的商品草稿列表
 **/
export interface PddGoodsCommitListGetRequestInterface {
  /**
   * @description: 草稿状态（0:编辑中,1:审核中,2:审核通过,3:审核驳回）
   * @type: number
   * @default:
   **/
  check_status?: number;

  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id: string;

  /**
   * @description: 页码，最多不超过100
   * @type: number
   * @default:
   **/
  page?: number;

  /**
   * @description: 每页数量，最多不超过100
   * @type: number
   * @default:
   **/
  page_size?: number;
}

/**
 * 接口名称：草稿列表接口
 * 接口标识：pdd.goods.commit.list.get
 * 接口使用场景：查询店铺的商品草稿列表
 **/
export interface PddGoodsCommitListGetResponseInterface {
  /**
   * @description: res
   * @type: PddGoodsCommitListGetGoodsCommitListGetResponseResponseInterface
   * @default:
   *
   **/
  goods_commit_list_get_response: PddGoodsCommitListGetGoodsCommitListGetResponseResponseInterface;
}

/**
 * @description res
 * @default
 * @example
 **/
export interface PddGoodsCommitListGetGoodsCommitListGetResponseResponseInterface {
  /**
   * @description: list
   * @type: PddGoodsCommitListGetGoodsCommitListGetResponseListResponseInterface[]
   * @default:
   *
   **/
  list: PddGoodsCommitListGetGoodsCommitListGetResponseListResponseInterface[];

  /**
   * @description: total
   * @type: string
   * @default:
   **/
  total: string;
}

/**
 * @description list
 * @default
 * @example
 **/
export interface PddGoodsCommitListGetGoodsCommitListGetResponseListResponseInterface {
  /**
   * @description: 草稿id
   * @type: string
   * @default:
   **/
  commit_id: string;

  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id: string;

  /**
   * @description: 商家编码
   * @type: string
   * @default:
   **/
  outer_goods_id: string;

  /**
   * @description: 商品标题
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 草稿状态 0:编辑中,1:审核中,2:审核通过,3:审核驳回
   * @type: number
   * @default:
   **/
  check_status: number;

  /**
   * @description: 是否新增 0:新增，1：修改
   * @type: number
   * @default:
   **/
  is_shop: number;

  /**
   * @description: 提交时间
   * @type: number
   * @default:
   **/
  submit_time: number;

  /**
   * @description: 审核时间
   * @type: number
   * @default:
   **/
  checked_time: number;

  /**
   * @description: 驳回原因
   * @type: string
   * @default:
   **/
  reject_comment: string;
}
