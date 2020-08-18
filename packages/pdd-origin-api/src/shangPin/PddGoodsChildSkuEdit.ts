export const PDD_GOODS_CHILD_SKU_EDIT = 'pdd.goods.child.sku.edit';
export const PDD_GOODS_CHILD_SKU_EDIT_RESPONSE_KEY = 'child_sku_edit_response';

/**
 * 接口名称：日历库存子SKU新增及编辑接口
 * 接口标识：pdd.goods.child.sku.edit
 * 接口使用场景：日历库存类商品编辑或新增价格日历接口
 **/
export interface PddGoodsChildSkuEditRequestInterface {
  /**
   * @description: 草稿id（未填写则新建一条商品草稿）
   * @type: string | number
   * @default:
   **/
  goods_commit_id?: string | number;

  /**
   * @description: 商品id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 日历库存型商品sku信息列表
   * @type: PddGoodsChildSkuEditSkusRequestInterface[]
   * @default:
   *
   **/
  skus: PddGoodsChildSkuEditSkusRequestInterface[];
}

/**
 * @description 日历库存型商品sku信息列表
 * @default
 * @example
 **/
export interface PddGoodsChildSkuEditSkusRequestInterface {
  /**
   * @description: 日历库存商品子sku信息列表
   * @type: PddGoodsChildSkuEditSkusChildSkusRequestInterface[]
   * @default:
   *
   **/
  child_skus: PddGoodsChildSkuEditSkusChildSkusRequestInterface[];

  /**
   * @description: 上架状态。0=已下架，1=已上架。不传表示不做修改
   * @type: number
   * @default:
   **/
  is_onsale?: number;

  /**
   * @description: 与sku_id必填其一，用于确定编辑的sku，当有多个sku的out_sku_sn一样时会编辑失败。
   * @type: string
   * @default:
   **/
  out_sku_sn?: string;

  /**
   * @description: 日历库存商品父skuId
   * @type: string | number
   * @default:
   **/
  sku_id?: string | number;
}

/**
 * @description 日历库存商品子sku信息列表
 * @default
 * @example
 **/
export interface PddGoodsChildSkuEditSkusChildSkusRequestInterface {
  /**
   * @description: 售卖日期（“yyyy-MM-dd”）
   * @type: string
   * @default:
   **/
  date: string;

  /**
   * @description: 团购价
   * @type: string | number
   * @default:
   **/
  group_price: string | number;

  /**
   * @description: 库存增减
   * @type: string | number
   * @default: 0
   **/
  quantity_delta: string | number;

  /**
   * @description: 单买价
   * @type: string | number
   * @default: 0
   **/
  single_price: string | number;
}

/**
 * 接口名称：日历库存子SKU新增及编辑接口
 * 接口标识：pdd.goods.child.sku.edit
 * 接口使用场景：日历库存类商品编辑或新增价格日历接口
 **/
export interface PddGoodsChildSkuEditResponseInterface {
  /**
   * @description: 子sku新增或提交结果
   * @type: PddGoodsChildSkuEditChildSkuEditResponseResponseInterface
   * @default:
   *
   **/
  child_sku_edit_response: PddGoodsChildSkuEditChildSkuEditResponseResponseInterface;
}

/**
 * @description 子sku新增或提交结果
 * @default
 * @example
 **/
export interface PddGoodsChildSkuEditChildSkuEditResponseResponseInterface {
  /**
   * @description: 草稿id
   * @type: string | number
   * @default:
   **/
  goods_commit_id: string | number;

  /**
   * @description: 商品id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;
}
