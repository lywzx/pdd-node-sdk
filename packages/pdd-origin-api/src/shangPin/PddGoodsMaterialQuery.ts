export const PDD_GOODS_MATERIAL_QUERY = 'pdd.goods.material.query';

/**
 * 接口名称：商品素材列表查询
 * 接口标识：pdd.goods.material.query
 * 接口使用场景：查询商品素材列表
 **/
export interface PddGoodsMaterialQueryRequestInterface {
  /**
   * @description: 商品id列表
   * @type: Array<string | number>
   * @default:
   **/
  goods_id_list: Array<string | number>;

  /**
   * @description: 素材类型列表
   * @type: Array<string | number>
   * @default:
   **/
  type_list: Array<string | number>;
}

/**
 * 接口名称：商品素材列表查询
 * 接口标识：pdd.goods.material.query
 * 接口使用场景：查询商品素材列表
 **/
export interface PddGoodsMaterialQueryResponseInterface {
  /**
   * @description:
   * @type: PddGoodsMaterialQueryMaterialListResponseInterface[]
   * @default:
   *
   **/
  material_list: PddGoodsMaterialQueryMaterialListResponseInterface[];
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddGoodsMaterialQueryMaterialListResponseInterface {
  /**
   * @description: 申诉审核信息
   * @type: string
   * @default:
   **/
  appeal_check_comment: string;

  /**
   * @description: 审核信息
   * @type: string
   * @default:
   **/
  check_comment: string;

  /**
   * @description: 审核状态（1：待审核；2：通过；3：驳回；101：申诉待审核；102：申诉通过；103：申诉驳回）
   * @type: number
   * @default:
   **/
  check_status: number;

  /**
   * @description: 素材内容
   * @type: string
   * @default:
   **/
  content: string;

  /**
   * @description: 商品id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 素材id
   * @type: string | number
   * @default:
   **/
  material_id: string | number;

  /**
   * @description: 线上素材
   * @type: string
   * @default:
   **/
  online_material: string;

  /**
   * @description: 素材类型（1：白底图；3：长图）
   * @type: number
   * @default:
   **/
  type: number;
}
