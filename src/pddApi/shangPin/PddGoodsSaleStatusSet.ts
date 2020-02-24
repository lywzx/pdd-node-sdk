export const PDD_GOODS_SALE_STATUS_SET = 'pdd.goods.sale.status.set';
export const PDD_GOODS_SALE_STATUS_SET_RESPONSE_KEY = 'goods_sale_status_set_response';

/**
 * 接口名称：商品上架状态设置
 * 接口标识：pdd.goods.sale.status.set
 * 接口使用场景：修改商品上下架状态
 **/
export interface PddGoodsSaleStatusSetRequestInterface {
  /**
   * @description: 拼多多商品id
   * @type: string | number
   * @default:
   **/
  goods_id?: string | number;

  /**
   * @description: 上下架状态：1:上架 0:下架
   * @type: number
   * @default:
   **/
  is_onsale?: number;
}

/**
 * 接口名称：商品上架状态设置
 * 接口标识：pdd.goods.sale.status.set
 * 接口使用场景：修改商品上下架状态
 **/
export interface PddGoodsSaleStatusSetResponseInterface {
  /**
   * @description: 返回response
   * @type: PddGoodsSaleStatusSetGoodsSaleStatusSetResponseResponseInterface
   * @default:
   *
   **/
  goods_sale_status_set_response: PddGoodsSaleStatusSetGoodsSaleStatusSetResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/
export interface PddGoodsSaleStatusSetGoodsSaleStatusSetResponseResponseInterface {
  /**
   * @description: 是否修改成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
