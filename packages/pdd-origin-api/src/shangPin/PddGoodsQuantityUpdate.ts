export const PDD_GOODS_QUANTITY_UPDATE = 'pdd.goods.quantity.update';
export const PDD_GOODS_QUANTITY_UPDATE_RESPONSE_KEY = 'goods_quantity_update_response';

/**
 * 接口名称：商品库存更新接口
 * 接口标识：pdd.goods.quantity.update
 * 接口使用场景：修改商品sku库存，在资源位上的商品不能减少库存
 **/
export interface PddGoodsQuantityUpdateRequestInterface {
  /**
   * @description: 商品id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 库存修改值。当全量更新库存时，quantity必须为大于等于0的正整数；当增量更新库存时，quantity为整数，可小于等于0。若增量更新时传入的库存为负数，则负数与实际库存之和不能小于0。比如当前实际库存为1，传入增量更新quantity=-1，库存改为0
   * @type: string | number
   * @default:
   **/
  quantity: string | number;

  /**
   * @description: sku_id和outer_id必填一个
   * @type: string | number
   * @default:
   **/
  sku_id?: string | number;

  /**
   * @description: sku商家编码
   * @type: string
   * @default:
   **/
  outer_id?: string;

  /**
   * @description: 库存更新方式，可选。1为全量更新，2为增量更新。如果不填，默认为全量更新
   * @type: number
   * @default:
   **/
  update_type?: number;
}

/**
 * 接口名称：商品库存更新接口
 * 接口标识：pdd.goods.quantity.update
 * 接口使用场景：修改商品sku库存，在资源位上的商品不能减少库存
 **/
export interface PddGoodsQuantityUpdateResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsQuantityUpdateGoodsQuantityUpdateResponseResponseInterface
   * @default:
   *
   **/
  goods_quantity_update_response: PddGoodsQuantityUpdateGoodsQuantityUpdateResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGoodsQuantityUpdateGoodsQuantityUpdateResponseResponseInterface {
  /**
   * @description: true
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
