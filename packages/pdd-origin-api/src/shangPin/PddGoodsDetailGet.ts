export const PDD_GOODS_DETAIL_GET = 'pdd.goods.detail.get';
export const PDD_GOODS_DETAIL_GET_RESPONSE_KEY = 'goods_detail_get_response';
export const PDD_GOODS_DETAIL_GET_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 60,
    times: 3000,
  },
  {
    limiterLevel: 3,
    timeRange: 1,
    times: 3000,
  },
];

/**
 * 接口名称：商品明细
 * 接口标识：pdd.goods.detail.get
 * 接口使用场景：新增商品或者修改商品的时候
 **/
export interface PddGoodsDetailGetRequestInterface {
  /**
   * @description: 1213414
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;
}

/**
 * 接口名称：商品明细
 * 接口标识：pdd.goods.detail.get
 * 接口使用场景：新增商品或者修改商品的时候
 **/
export interface PddGoodsDetailGetResponseInterface {
  /**
   * @description: 商品详情response
   * @type: PddGoodsDetailGetGoodsDetailGetResponseResponseInterface
   * @default:
   *
   **/
  goods_detail_get_response: PddGoodsDetailGetGoodsDetailGetResponseResponseInterface;
}

/**
 * @description 商品详情response
 * @default
 * @example
 **/
export interface PddGoodsDetailGetGoodsDetailGetResponseResponseInterface {
  /**
   * @description: 坏果包赔
   * @type: number
   * @default:
   **/
  bad_fruit_claim: number;

  /**
   * @description: 限购次数
   * @type: string | number
   * @default:
   **/
  buy_limit: string | number;

  /**
   * @description: 商品轮播图列表
   * @type: string[]
   * @default:
   **/
  carousel_gallery_list: string[];

  /**
   * @description: 叶子类目ID
   * @type: string | number
   * @default:
   **/
  cat_id: string | number;

  /**
   * @description: 运费模版id
   * @type: string | number
   * @default:
   **/
  cost_template_id: string | number;

  /**
   * @description: 国家id
   * @type: number
   * @default:
   **/
  country_id: number;

  /**
   * @description: 团购人数
   * @type: string | number
   * @default:
   **/
  customer_num: string | number;

  /**
   * @description: 海关名称
   * @type: string
   * @default:
   **/
  customs: string;

  /**
   * @description: 是否当日发货,0 否，1 是
   * @type: number
   * @default:
   **/
  delivery_one_day: number;

  /**
   * @description: 商品详情图
   * @type: string[]
   * @default:
   **/
  detail_gallery_list: string[];

  /**
   * @description: 商品描述
   * @type: string
   * @default:
   **/
  goods_desc: string;

  /**
   * @description: 商品id
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 商品名称
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 商品属性列表
   * @type: PddGoodsDetailGetGoodsDetailGetResponseGoodsPropertyListResponseInterface[]
   * @default:
   *
   **/
  goods_property_list: PddGoodsDetailGetGoodsDetailGetResponseGoodsPropertyListResponseInterface[];

  /**
   * @description: 日历商品交易相关信息
   * @type: PddGoodsDetailGetGoodsDetailGetResponseGoodsTradeAttrResponseInterface
   * @default:
   *
   **/
  goods_trade_attr: PddGoodsDetailGetGoodsDetailGetResponseGoodsTradeAttrResponseInterface;

  /**
   * @description: 日历商品出行信息
   * @type: PddGoodsDetailGetGoodsDetailGetResponseGoodsTravelAttrResponseInterface
   * @default:
   *
   **/
  goods_travel_attr: PddGoodsDetailGetGoodsDetailGetResponseGoodsTravelAttrResponseInterface;

  /**
   * @description: 商品类型：1-国内普通商品，2-进口，3-国外海淘，4-直邮 ,5-流量,6-话费,7,优惠券;8-QQ充值,9-加油卡 暂时支持1-普通商品的上架
   * @type: number
   * @default:
   **/
  goods_type: number;

  /**
   * @description: 商品主图
   * @type: string
   * @default:
   **/
  image_url: string;

  /**
   * @description: 是否支持正品发票；0-不支持、1-支持
   * @type: number
   * @default:
   **/
  invoice_status: number;

  /**
   * @description: 是否需要上报海关 0:否 1:是
   * @type: number
   * @default:
   **/
  is_customs: number;

  /**
   * @description: 是否支持假一赔十，0-不支持，1-支持
   * @type: number
   * @default:
   **/
  is_folt: number;

  /**
   * @description: 是否预售,1-预售商品，0-非预售商品
   * @type: number
   * @default:
   **/
  is_pre_sale: number;

  /**
   * @description: 是否7天无理由退换货，1-支持，0-不支持
   * @type: number
   * @default:
   **/
  is_refundable: number;

  /**
   * @description: 缺重包退
   * @type: number
   * @default:
   **/
  lack_of_weight_claim: number;

  /**
   * @description: 买家自提模版id
   * @type: string
   * @default:
   **/
  mai_jia_zi_ti: string;

  /**
   * @description: 市场价格，单位为分
   * @type: string | number
   * @default:
   **/
  market_price: string | number;

  /**
   * @description: 单次限量
   * @type: string | number
   * @default:
   **/
  order_limit: string | number;

  /**
   * @description: 商家编码（商品维度），同其他接口中的outer_goods_id 、out_goods_id、out_goods_sn、outer_goods_sn 都为商家编码（goods维度）。
   * @type: string
   * @default:
   **/
  outer_goods_id: string;

  /**
   * @description: 第三方商品Id
   * @type: string
   * @default:
   **/
  out_source_goods_id: string;

  /**
   * @description: 第三方商品来源
   * @type: number
   * @default:
   **/
  out_source_type: number;

  /**
   * @description: oversea_goods
   * @type: PddGoodsDetailGetGoodsDetailGetResponseOverseaGoodsResponseInterface
   * @default:
   *
   **/
  oversea_goods: PddGoodsDetailGetGoodsDetailGetResponseOverseaGoodsResponseInterface;

  /**
   * @description: oversea_type
   * @type: number
   * @default:
   **/
  oversea_type: number;

  /**
   * @description: 预售时间
   * @type: string | number
   * @default:
   **/
  pre_sale_time: string | number;

  /**
   * @description: 0：不支持全国联保；1：支持全国联保
   * @type: number
   * @default:
   **/
  quan_guo_lian_bao: number;

  /**
   * @description: 是否二手 1:是 0:否
   * @type: number
   * @default:
   **/
  second_hand: number;

  /**
   * @description: 上门安装模版id
   * @type: string
   * @default:
   **/
  shang_men_an_zhuang: string;

  /**
   * @description: 承诺发货时间（ 秒）
   * @type: string | number
   * @default:
   **/
  shipment_limit_second: string | number;

  /**
   * @description: 尺码表id
   * @type: string | number
   * @default:
   **/
  size_spec_id: string | number;

  /**
   * @description: 库存方式（0：普通型，1：日历型）
   * @type: number
   * @default:
   **/
  skuType: number;

  /**
   * @description: sku列表
   * @type: PddGoodsDetailGetGoodsDetailGetResponseSkuListResponseInterface[]
   * @default:
   *
   **/
  sku_list: PddGoodsDetailGetGoodsDetailGetResponseSkuListResponseInterface[];

  /**
   * @description: 送货入户并安装模版id
   * @type: string
   * @default:
   **/
  song_huo_an_zhuang: string;

  /**
   * @description: 送货入户模版id
   * @type: string
   * @default:
   **/
  song_huo_ru_hu: string;

  /**
   * @description: 商品状态 1:上架，2：下架，3：售罄 4：已删除
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 短标题，示例：新包装，保证产品的口感和新鲜度。单颗独立小包装，双重营养，1斤家庭分享装，更实惠新疆一级骏枣夹核桃仁。
   * @type: string
   * @default:
   **/
  tiny_name: string;

  /**
   * @description: 商品视频
   * @type: PddGoodsDetailGetGoodsDetailGetResponseVideoGalleryResponseInterface[]
   * @default:
   *
   **/
  video_gallery: PddGoodsDetailGetGoodsDetailGetResponseVideoGalleryResponseInterface[];

  /**
   * @description: 保税仓
   * @type: string
   * @default:
   **/
  warehouse: string;

  /**
   * @description: 水果类目温馨提示
   * @type: string
   * @default:
   **/
  warm_tips: string;

  /**
   * @description: 只换不修的天数，目前只支持0和365
   * @type: number
   * @default:
   **/
  zhi_huan_bu_xiu: number;
}

/**
 * @description 商品属性列表
 * @default
 * @example
 **/
export interface PddGoodsDetailGetGoodsDetailGetResponseGoodsPropertyListResponseInterface {
  /**
   * @description: 属性单位
   * @type: string
   * @default:
   **/
  punit: string;

  /**
   * @description: 引用属性id
   * @type: string | number
   * @default:
   **/
  ref_pid: string | number;

  /**
   * @description: 模板属性Id
   * @type: string | number
   * @default:
   **/
  template_pid: string | number;

  /**
   * @description: 基础属性值Id
   * @type: string | number
   * @default:
   **/
  vid: string | number;

  /**
   * @description: 基础属性值
   * @type: string
   * @default:
   **/
  vvalue: string;
}

/**
 * @description 日历商品交易相关信息
 * @default
 * @example
 **/
export interface PddGoodsDetailGetGoodsDetailGetResponseGoodsTradeAttrResponseInterface {
  /**
   * @description: 提前预定天数，默认为0表示当天可预定
   * @type: number
   * @default:
   **/
  advances_days: number;

  /**
   * @description: 预订须知
   * @type: PddGoodsDetailGetGoodsDetailGetResponseGoodsTradeAttrBookingNotesResponseInterface
   * @default:
   *
   **/
  booking_notes: PddGoodsDetailGetGoodsDetailGetResponseGoodsTradeAttrBookingNotesResponseInterface;

  /**
   * @description: 卡券有效期，日历日期后多少天可用。默认值为0表示仅限日历日当天使用
   * @type: number
   * @default:
   **/
  life_span: number;
}

/**
 * @description 预订须知
 * @default
 * @example
 **/
export interface PddGoodsDetailGetGoodsDetailGetResponseGoodsTradeAttrBookingNotesResponseInterface {
  /**
   * @description: 预定须知图片地址
   * @type: string
   * @default:
   **/
  url: string;
}

/**
 * @description 日历商品出行信息
 * @default
 * @example
 **/
export interface PddGoodsDetailGetGoodsDetailGetResponseGoodsTravelAttrResponseInterface {
  /**
   * @description: 日历商品类型1:旅行类,2:住宿类,3:票务类
   * @type: boolean
   * @default:
   **/
  need_tourist: boolean;

  /**
   * @description: 出行人是否必填（默认是）
   * @type: number
   * @default:
   **/
  type: number;
}

/**
 * @description oversea_goods
 * @default
 * @example
 **/
export interface PddGoodsDetailGetGoodsDetailGetResponseOverseaGoodsResponseInterface {
  /**
   * @description: 保税仓唯一标识
   * @type: string
   * @default:
   **/
  bonded_warehouse_key: string;

  /**
   * @description: 消费税率
   * @type: number
   * @default:
   **/
  consumption_tax_rate: number;

  /**
   * @description: 清关服务商
   * @type: string
   * @default:
   **/
  customs_broker: string;

  /**
   * @description: 海关编号
   * @type: string
   * @default:
   **/
  hs_code: string;

  /**
   * @description: 增值税率
   * @type: number
   * @default:
   **/
  value_added_tax_rate: number;
}

/**
 * @description sku列表
 * @default
 * @example
 **/
export interface PddGoodsDetailGetGoodsDetailGetResponseSkuListResponseInterface {
  /**
   * @description: 上下架状态 1：上架 0 ：下架
   * @type: number
   * @default:
   **/
  is_onsale: number;

  /**
   * @description: sku送装参数：长度
   * @type: string | number
   * @default:
   **/
  length: string | number;

  /**
   * @description: sku购买限制
   * @type: string | number
   * @default:
   **/
  limit_quantity: string | number;

  /**
   * @description: 商品团购价格 单位分
   * @type: string | number
   * @default:
   **/
  multi_price: string | number;

  /**
   * @description: 商家编码（sku维度），同其他接口中的outer_id 、out_id、out_sku_sn、outer_sku_sn、out_sku_id、outer_sku_id 都为商家编码（sku维度）。
   * @type: string
   * @default:
   **/
  out_sku_sn: string;

  /**
   * @description: 第三方sku Id
   * @type: string
   * @default:
   **/
  out_source_sku_id: string;

  /**
   * @description: oversea_sku
   * @type: PddGoodsDetailGetGoodsDetailGetResponseSkuListOverseaSkuResponseInterface
   * @default:
   *
   **/
  oversea_sku: PddGoodsDetailGetGoodsDetailGetResponseSkuListOverseaSkuResponseInterface;

  /**
   * @description: 商品单买价格 单位分
   * @type: string | number
   * @default:
   **/
  price: string | number;

  /**
   * @description: 库存
   * @type: string | number
   * @default:
   **/
  quantity: string | number;

  /**
   * @description: 预扣库存
   * @type: string | number
   * @default:
   **/
  reserve_quantity: string | number;

  /**
   * @description: sku编码
   * @type: string | number
   * @default:
   **/
  sku_id: string | number;

  /**
   * @description: 商品规格列表
   * @type: PddGoodsDetailGetGoodsDetailGetResponseSkuListSpecResponseInterface[]
   * @default:
   *
   **/
  spec: PddGoodsDetailGetGoodsDetailGetResponseSkuListSpecResponseInterface[];

  /**
   * @description: sku预览图
   * @type: string
   * @default:
   **/
  thumb_url: string;

  /**
   * @description: 重量，单位为g
   * @type: string | number
   * @default:
   **/
  weight: string | number;
}

/**
 * @description oversea_sku
 * @default
 * @example
 **/
export interface PddGoodsDetailGetGoodsDetailGetResponseSkuListOverseaSkuResponseInterface {
  /**
   * @description: 计量单位编码，从接口pdd.gooods.sku.measurement.list获取desc
   * @type: string
   * @default:
   **/
  measurement_code: string;

  /**
   * @description: 规格
   * @type: string
   * @default:
   **/
  specifications: string;

  /**
   * @description: 税费
   * @type: number
   * @default:
   **/
  taxation: number;
}

/**
 * @description 商品规格列表
 * @default
 * @example
 **/
export interface PddGoodsDetailGetGoodsDetailGetResponseSkuListSpecResponseInterface {
  /**
   * @description: 自定义规格所属的规格ID
   * @type: string | number
   * @default:
   **/
  parent_id: string | number;

  /**
   * @description: 商品规格ID对应的规格名称
   * @type: string
   * @default:
   **/
  parent_name: string;

  /**
   * @description: 自定义规格ID
   * @type: string | number
   * @default:
   **/
  spec_id: string | number;

  /**
   * @description: 自定义规格名称
   * @type: string
   * @default:
   **/
  spec_name: string;
}

/**
 * @description 商品视频
 * @default
 * @example
 **/
export interface PddGoodsDetailGetGoodsDetailGetResponseVideoGalleryResponseInterface {
  /**
   * @description: 商品视频id
   * @type: number
   * @default:
   **/
  file_id: number;

  /**
   * @description: 商品视频url
   * @type: string
   * @default:
   **/
  video_url: string;
}
