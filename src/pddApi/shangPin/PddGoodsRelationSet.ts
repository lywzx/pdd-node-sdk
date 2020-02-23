export const PDD_GOODS_RELATION_SET = 'pdd.goods.relation.set';

/**
 * 接口名称：商品关联信息设置接口
 * 接口标识：pdd.goods.relation.set
 * 接口使用场景：商品关联信息设置
 **/
export interface PddGoodsRelationSetRequestInterface {
  /**
   * @description: 拼多多商品id
   * @type: string
   * @default:
   **/
  goods_id?: string;

  /**
   * @description: 外部平台商品id
   * @type: string
   * @default:
   **/
  out_goods_id?: string;

  /**
   * @description: 外部平台商品url
   * @type: string
   * @default:
   **/
  out_detail_url?: string;

  /**
   * @description: 外部平台商品最低价，单位：分
   * @type: string
   * @default:
   **/
  out_low_goods_price?: string;

  /**
   * @description: 外部平台商品最高价，单位：分
   * @type: string
   * @default:
   **/
  out_high_goods_price?: string;

  /**
   * @description: 外部平台枚举值， 0-淘宝/天猫 ，1-京东，2-1688，3-唯品会，4-苏宁，5-亚马逊，6-网易，8-微店，9-网商园，10-蘑菇街，11-vvic搜款网，12-搜鞋网，13-一起做网店17zwd，14-杭州女装网，15-折800，16-当当，17-青创网，18-开山网，19-新款网
   * @type: number
   * @default:
   **/
  source_type?: number;

  /**
   * @description: 邮费
   * @type: string
   * @default:
   **/
  postage?: string;

  /**
   * @description: 外部平台店铺id
   * @type: string
   * @default:
   **/
  out_mall_id: string;
}

/**
 * 接口名称：商品关联信息设置接口
 * 接口标识：pdd.goods.relation.set
 * 接口使用场景：商品关联信息设置
 **/
export interface PddGoodsRelationSetResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsRelationSetGoodsRelationSetResponseResponseInterface
   * @default:
   *
   **/
  goods_relation_set_response: PddGoodsRelationSetGoodsRelationSetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGoodsRelationSetGoodsRelationSetResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
