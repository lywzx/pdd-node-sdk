export const PDD_DDK_GOODS_BASIC_INFO_GET = 'pdd.ddk.goods.basic.info.get';

/**
 * 接口名称：获取商品基本信息接口
 * 接口标识：pdd.ddk.goods.basic.info.get
 * 接口使用场景：获取商品基本信息
 **/
export interface PddDdkGoodsBasicInfoGetRequestInterface {
  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id_list?: string;
}

/**
 * 接口名称：获取商品基本信息接口
 * 接口标识：pdd.ddk.goods.basic.info.get
 * 接口使用场景：获取商品基本信息
 **/
export interface PddDdkGoodsBasicInfoGetResponseInterface {
  /**
   * @description: response
   * @type: PddDdkGoodsBasicInfoGetGoodsBasicDetailResponseResponseInterface
   * @default:
   *
   **/
  goods_basic_detail_response: PddDdkGoodsBasicInfoGetGoodsBasicDetailResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddDdkGoodsBasicInfoGetGoodsBasicDetailResponseResponseInterface {
  /**
   * @description: list
   * @type: PddDdkGoodsBasicInfoGetGoodsBasicDetailResponseGoodsListResponseInterface[]
   * @default:
   *
   **/
  goods_list: PddDdkGoodsBasicInfoGetGoodsBasicDetailResponseGoodsListResponseInterface[];
}

/**
 * @description list
 * @default
 * @example
 **/
export interface PddDdkGoodsBasicInfoGetGoodsBasicDetailResponseGoodsListResponseInterface {
  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id: string;

  /**
   * @description: 最小单买价格，单位分
   * @type: string
   * @default:
   **/
  min_normal_price: string;

  /**
   * @description: 最小成团价格，单位分
   * @type: string
   * @default:
   **/
  min_group_price: string;

  /**
   * @description: 商品缩略图
   * @type: string
   * @default:
   **/
  goods_pic: string;

  /**
   * @description: 商品标题
   * @type: string
   * @default:
   **/
  goods_name: string;
}
