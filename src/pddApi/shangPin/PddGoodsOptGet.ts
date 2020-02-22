export const PDD_GOODS_OPT_GET = 'PDD_GOODS_OPT_GET';

/**
 * 接口名称：查询商品标签列表
 * 接口标识：pdd.goods.opt.get
 * 接口使用场景：获得拼多多商品标签列表（非商品类目cat，当前仅开放给多多客使用）
 **/

export interface PddGoodsOptGetRequestInterface {
  /**
   * @description: 值=0时为顶点opt_id,通过树顶级节点获取opt树
   * @type: number
   * @default:
   **/
  parent_opt_id?: number;
}

/**
 * 接口名称：查询商品标签列表
 * 接口标识：pdd.goods.opt.get
 * 接口使用场景：获得拼多多商品标签列表（非商品类目cat，当前仅开放给多多客使用）
 **/

export interface PddGoodsOptGetResponseInterface {
  /**
   * @description: 返回response
   * @type: PddGoodsOptGetGoodsOptGetResponseResponseInterface
   * @default:
   *
   **/
  goods_opt_get_response: PddGoodsOptGetGoodsOptGetResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/

export interface PddGoodsOptGetGoodsOptGetResponseResponseInterface {
  /**
   * @description: opt列表
   * @type: PddGoodsOptGetGoodsOptGetResponseGoodsOptListResponseInterface[]
   * @default:
   *
   **/
  goods_opt_list: PddGoodsOptGetGoodsOptGetResponseGoodsOptListResponseInterface[];
}

/**
 * @description opt列表
 * @default
 * @example
 **/

export interface PddGoodsOptGetGoodsOptGetResponseGoodsOptListResponseInterface {
  /**
   * @description: 层级，1-一级，2-二级，3-三级，4-四级
   * @type: number
   * @default:
   **/
  level: number;

  /**
   * @description: id所属父ID，其中，parent_id=0时为顶级节点
   * @type: string
   * @default:
   **/
  parent_opt_id: string;

  /**
   * @description: 商品标签名
   * @type: string
   * @default:
   **/
  opt_name: string;

  /**
   * @description: 商品标签ID
   * @type: string
   * @default:
   **/
  opt_id: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_GOODS_OPT_GET]: {
    requestInterface: PddGoodsOptGetRequestInterface;
    responseInterface: PddGoodsOptGetResponseInterface;
  };
}
