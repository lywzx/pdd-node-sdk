export const PDD_TICKET_GOODS_QUERY = 'pdd.ticket.goods.query';
export const PDD_TICKET_GOODS_QUERY_RESPONSE_KEY = 'goods_detail_get_response';

/**
 * 接口名称：门票商品查询接口
 * 接口标识：pdd.ticket.goods.query
 * 接口使用场景：门票商品查询
 **/
export interface PddTicketGoodsQueryRequestInterface {
  /**
   * @description: 草稿id，入参草稿id时，表示查询该草稿的信息
   * @type: string | number
   * @default:
   **/
  goods_commit_id?: string | number;

  /**
   * @description: 商品id入参商品id时，表示查询该商品的线上商品信息。。
   * @type: string | number
   * @default:
   **/
  goods_id?: string | number;
}

/**
 * 接口名称：门票商品查询接口
 * 接口标识：pdd.ticket.goods.query
 * 接口使用场景：门票商品查询
 **/
export interface PddTicketGoodsQueryResponseInterface {
  /**
   * @description: 草稿查询返回结果
   * @type: PddTicketGoodsQueryGoodsDetailGetResponseResponseInterface
   * @default:
   *
   **/
  goods_detail_get_response: PddTicketGoodsQueryGoodsDetailGetResponseResponseInterface;
}

/**
 * @description 草稿查询返回结果
 * @default
 * @example
 **/
export interface PddTicketGoodsQueryGoodsDetailGetResponseResponseInterface {
  /**
   * @description: 商品轮播图
   * @type: string[]
   * @default:
   **/
  carousel_gallery: string[];

  /**
   * @description: 轮播视频
   * @type: PddTicketGoodsQueryGoodsDetailGetResponseCarouselVideoResponseInterface[]
   * @default:
   *
   **/
  carousel_video: PddTicketGoodsQueryGoodsDetailGetResponseCarouselVideoResponseInterface[];

  /**
   * @description: 类目id，国内门票（含港澳台）9088，国外门票20042。
   * @type: number
   * @default:
   **/
  cat_id: number;

  /**
   * @description: 电子票发码方式，0=手动电子票；1=实时电子票，自动发货。
   * @type: number
   * @default:
   **/
  code_mode: number;

  /**
   * @description: 商品草稿状态，查询草稿id时返回。0=编辑中，1=待审核，2=审核通过，3=审核驳回
   * @type: number
   * @default:
   **/
  commit_status: number;

  /**
   * @description: 商品详情图
   * @type: string[]
   * @default:
   **/
  detail_gallery: string[];

  /**
   * @description: 商品描述
   * @type: string
   * @default:
   **/
  goods_desc: string;

  /**
   * @description: 商品标题
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 商品属性
   * @type: PddTicketGoodsQueryGoodsDetailGetResponseGoodsPropertiesResponseInterface[]
   * @default:
   *
   **/
  goods_properties: PddTicketGoodsQueryGoodsDetailGetResponseGoodsPropertiesResponseInterface[];

  /**
   * @description: 商品状态，查询商品id时返回。1=上架，2=下架，3=售罄，4=已删除
   * @type: number
   * @default:
   **/
  goods_status: number;

  /**
   * @description: 商品市场价，单位为分。
   * @type: string | number
   * @default:
   **/
  market_price: string | number;

  /**
   * @description: 商品goods外部编码，同其他接口中的outer_goods_id 、out_goods_id、out_goods_sn、outer_goods_sn 都为商品维度的商家编码。
   * @type: string
   * @default:
   **/
  out_goods_sn: string;

  /**
   * @description: 预定时间限制，格式：1_20_00，含义：需要提前1天，且在20:00分之前才可预定那天的门票。若为空则表示不限制预定时间。0_24_00表示在当前的24点前预定都可以，等效于不限制预定时间。
   * @type: string
   * @default:
   **/
  reserve_limit_rule: string;

  /**
   * @description: sku列表
   * @type: PddTicketGoodsQueryGoodsDetailGetResponseSkuListResponseInterface[]
   * @default:
   *
   **/
  sku_list: PddTicketGoodsQueryGoodsDetailGetResponseSkuListResponseInterface[];

  /**
   * @description: 销售方式，0=普通库存，1=日历库存。
   * @type: number
   * @default:
   **/
  sku_type: number;
}

/**
 * @description 轮播视频
 * @default
 * @example
 **/
export interface PddTicketGoodsQueryGoodsDetailGetResponseCarouselVideoResponseInterface {
  /**
   * @description: 轮播视频id
   * @type: string | number
   * @default:
   **/
  file_id: string | number;

  /**
   * @description: 轮播视频url
   * @type: string
   * @default:
   **/
  video_url: string;
}

/**
 * @description 商品属性
 * @default
 * @example
 **/
export interface PddTicketGoodsQueryGoodsDetailGetResponseGoodsPropertiesResponseInterface {
  /**
   * @description: 父规格id，仅销售属性有
   * @type: string | number
   * @default:
   **/
  parent_spec_id: string | number;

  /**
   * @description: 引用属性id
   * @type: string | number
   * @default:
   **/
  ref_pid: string | number;

  /**
   * @description: 规格id，仅销售属性有和sku中的spec对应
   * @type: string | number
   * @default:
   **/
  spec_id: string | number;

  /**
   * @description: 属性值
   * @type: string
   * @default:
   **/
  value: string;

  /**
   * @description: 属性值单位
   * @type: string
   * @default:
   **/
  value_unit: string;

  /**
   * @description: 属性值id
   * @type: string | number
   * @default:
   **/
  vid: string | number;
}

/**
 * @description sku列表
 * @default
 * @example
 **/
export interface PddTicketGoodsQueryGoodsDetailGetResponseSkuListResponseInterface {
  /**
   * @description: 子sku列表，仅当sku_type为日历库存且父sku数小于等于10个时返回。若父sku多于10个，需要在pdd.goods.child.sku.detail.get接口中查询子sku信息。
   * @type: PddTicketGoodsQueryGoodsDetailGetResponseSkuListChildSkusResponseInterface[]
   * @default:
   *
   **/
  child_skus: PddTicketGoodsQueryGoodsDetailGetResponseSkuListChildSkusResponseInterface[];

  /**
   * @description: 拼团价，单位为分。当sku_type为日历库存时是可预定日期的拼团价最低价。
   * @type: string | number
   * @default:
   **/
  group_price: string | number;

  /**
   * @description: 上架状态。0=已下架，1=已上架。
   * @type: number
   * @default:
   **/
  is_onsale: number;

  /**
   * @description: 商品sku外部编码，同其他接口中的outer_id 、out_id、out_sku_sn、outer_sku_sn、out_sku_id、outer_sku_id 都为商家编码（sku维度）。
   * @type: string
   * @default:
   **/
  out_sku_sn: string;

  /**
   * @description: 线上库存量
   * @type: string | number
   * @default:
   **/
  quantity: string | number;

  /**
   * @description: 库存增减，当查草稿时返回。
   * @type: string | number
   * @default:
   **/
  quantity_delta: string | number;

  /**
   * @description: 线上预扣库存量
   * @type: string | number
   * @default:
   **/
  reserve_quantity: string | number;

  /**
   * @description: 调pdd.scenic.sku.rule.get得到的规则id
   * @type: string
   * @default:
   **/
  rule_id: string;

  /**
   * @description: 单买价，单位为分。当sku_type为日历库存时是可预定日期的单买价最低价。
   * @type: string | number
   * @default:
   **/
  single_price: string | number;

  /**
   * @description: skuId
   * @type: string
   * @default:
   **/
  sku_id: string;

  /**
   * @description: sku规格列表
   * @type: PddTicketGoodsQueryGoodsDetailGetResponseSkuListSpecResponseInterface[]
   * @default:
   *
   **/
  spec: PddTicketGoodsQueryGoodsDetailGetResponseSkuListSpecResponseInterface[];

  /**
   * @description: SKU预览图
   * @type: string
   * @default:
   **/
  thumb_url: string;
}

/**
 * @description 子sku列表，仅当sku_type为日历库存且父sku数小于等于10个时返回。若父sku多于10个，需要在pdd.goods.child.sku.detail.get接口中查询子sku信息。
 * @default
 * @example
 **/
export interface PddTicketGoodsQueryGoodsDetailGetResponseSkuListChildSkusResponseInterface {
  /**
   * @description: 日期。格式：2020-06-01
   * @type: string
   * @default:
   **/
  date: string;

  /**
   * @description: 拼团价，单位为分。
   * @type: string | number
   * @default:
   **/
  group_price: string | number;

  /**
   * @description: 线上库存
   * @type: string | number
   * @default:
   **/
  quantity: string | number;

  /**
   * @description: 库存增减，当查草稿时返回。
   * @type: string | number
   * @default:
   **/
  quantity_delta: string | number;

  /**
   * @description: 线上预扣库存
   * @type: string | number
   * @default:
   **/
  reserve_quantity: string | number;

  /**
   * @description: 单买价，单位为分
   * @type: string | number
   * @default:
   **/
  single_price: string | number;

  /**
   * @description: skuId
   * @type: string | number
   * @default:
   **/
  sku_id: string | number;
}

/**
 * @description sku规格列表
 * @default
 * @example
 **/
export interface PddTicketGoodsQueryGoodsDetailGetResponseSkuListSpecResponseInterface {
  /**
   * @description: 父规格id
   * @type: string | number
   * @default:
   **/
  parent_id: string | number;

  /**
   * @description: 父规格名称
   * @type: string
   * @default:
   **/
  parent_name: string;

  /**
   * @description: 规格id
   * @type: string | number
   * @default:
   **/
  spec_id: string | number;

  /**
   * @description: 规格名称
   * @type: string
   * @default:
   **/
  spec_name: string;
}
