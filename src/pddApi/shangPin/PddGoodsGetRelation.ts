export const PDD_GOODS_GET_RELATION = 'PDD_GOODS_GET_RELATION';

/**
 * 接口名称：商品映射查询接口
 * 接口标识：pdd.goods.get.relation
 * 接口使用场景：商品映射查询接口
 **/

export interface PddGoodsGetRelationRequestInterface {
  /**
   * @description: 拼多多商品id
   * @type: string
   * @default:
   **/
  pdd_goods_id?: string;
}

/**
 * 接口名称：商品映射查询接口
 * 接口标识：pdd.goods.get.relation
 * 接口使用场景：商品映射查询接口
 **/

export interface PddGoodsGetRelationResponseInterface {
  /**
   * @description: 映射关系查询返回对象列表
   * @type: PddGoodsGetRelationQueryGoodsRelationResponseResponseInterface[]
   * @default:
   *
   **/
  query_goods_relation_response: PddGoodsGetRelationQueryGoodsRelationResponseResponseInterface[];
}

/**
 * @description 映射关系查询返回对象列表
 * @default
 * @example
 **/

export interface PddGoodsGetRelationQueryGoodsRelationResponseResponseInterface {
  /**
   * @description: 拼多多商品id
   * @type: string
   * @default:
   **/
  pdd_goods_id: string;

  /**
   * @description: 外部平台枚举值， 淘宝/天猫 0，京东1，1688 2，唯品会3，苏宁4，亚马逊,5，网易6，其他7
   * @type: number
   * @default:
   **/
  out_goods_platform: number;

  /**
   * @description: 外部平台商品id
   * @type: string
   * @default:
   **/
  out_goods_id: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_GOODS_GET_RELATION]: {
    requestInterface: PddGoodsGetRelationRequestInterface;
    responseInterface: PddGoodsGetRelationResponseInterface;
  };
}
