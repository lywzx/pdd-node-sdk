export const PDD_PROMOTION_LIMITED_QUALIFIED_GOODS_GET = 'pdd.promotion.limited.qualified.goods.get';

/**
 * 接口名称：限时限量购可选商品查询接口
 * 接口标识：pdd.promotion.limited.qualified.goods.get
 * 接口使用场景：查询可参与限时限量购活动的商品
 **/
export interface PddPromotionLimitedQualifiedGoodsGetRequestInterface {
  /**
   * @description: 商品id列表
   * @type: Array<string | number>
   * @default:
   **/
  goods_id_list?: Array<string | number>;

  /**
   * @description: TRUE-仅查询可选商品（满足活动资格商品）数据；FALSE-查询不可选商品数据
   * @type: boolean
   * @default:
   **/
  is_valid: boolean;

  /**
   * @description: 页码
   * @type: number
   * @default:
   **/
  page_no?: number;

  /**
   * @description: 每页查询数
   * @type: number
   * @default:
   **/
  page_size?: number;
}

/**
 * 接口名称：限时限量购可选商品查询接口
 * 接口标识：pdd.promotion.limited.qualified.goods.get
 * 接口使用场景：查询可参与限时限量购活动的商品
 **/
export interface PddPromotionLimitedQualifiedGoodsGetResponseInterface {
  /**
   * @description: 商品列表
   * @type: PddPromotionLimitedQualifiedGoodsGetGoodsListResponseInterface[]
   * @default:
   *
   **/
  goods_list: PddPromotionLimitedQualifiedGoodsGetGoodsListResponseInterface[];

  /**
   * @description: 总数
   * @type: string | number
   * @default:
   **/
  total: string | number;
}

/**
 * @description 商品列表
 * @default
 * @example
 **/
export interface PddPromotionLimitedQualifiedGoodsGetGoodsListResponseInterface {
  /**
   * @description: 商品id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;
}
