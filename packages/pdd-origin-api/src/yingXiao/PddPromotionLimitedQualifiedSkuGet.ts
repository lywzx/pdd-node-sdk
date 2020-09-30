export const PDD_PROMOTION_LIMITED_QUALIFIED_SKU_GET = 'pdd.promotion.limited.qualified.sku.get';

/**
 * 接口名称：限时限量购可选sku查询接口
 * 接口标识：pdd.promotion.limited.qualified.sku.get
 * 接口使用场景：查询可参加限时限量购活动的sku列表
 **/
export interface PddPromotionLimitedQualifiedSkuGetRequestInterface {
  /**
   * @description: 商品id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;
}

/**
 * 接口名称：限时限量购可选sku查询接口
 * 接口标识：pdd.promotion.limited.qualified.sku.get
 * 接口使用场景：查询可参加限时限量购活动的sku列表
 **/
export interface PddPromotionLimitedQualifiedSkuGetResponseInterface {
  /**
   * @description: 不可选sku列表
   * @type: PddPromotionLimitedQualifiedSkuGetInValidSkuListResponseInterface[]
   * @default:
   *
   **/
  in_valid_sku_List: PddPromotionLimitedQualifiedSkuGetInValidSkuListResponseInterface[];

  /**
   * @description: 可选sku列表
   * @type: PddPromotionLimitedQualifiedSkuGetValidSkuListResponseInterface[]
   * @default:
   *
   **/
  valid_sku_list: PddPromotionLimitedQualifiedSkuGetValidSkuListResponseInterface[];
}

/**
 * @description 不可选sku列表
 * @default
 * @example
 **/
export interface PddPromotionLimitedQualifiedSkuGetInValidSkuListResponseInterface {
  /**
   * @description: 商品id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 不可选原因
   * @type: string
   * @default:
   **/
  invalid_reason: string;

  /**
   * @description: skuid
   * @type: string | number
   * @default:
   **/
  sku_id: string | number;

  /**
   * @description: sku是否可以设置营销工具活动价。0-sku有效，1-sku需上架，2-sku库存需≥3，3-sku参考价不符合规则
   * @type: number
   * @default:
   **/
  valid_status: number;
}

/**
 * @description 可选sku列表
 * @default
 * @example
 **/
export interface PddPromotionLimitedQualifiedSkuGetValidSkuListResponseInterface {
  /**
   * @description: 商品id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 不可选原因
   * @type: string
   * @default:
   **/
  invalid_reason: string;

  /**
   * @description: skuid
   * @type: string | number
   * @default:
   **/
  sku_id: string | number;

  /**
   * @description: sku是否可以设置营销工具活动价。0-sku有效，1-sku需上架，2-sku库存需≥3，3-sku参考价不符合规则
   * @type: number
   * @default:
   **/
  valid_status: number;
}
