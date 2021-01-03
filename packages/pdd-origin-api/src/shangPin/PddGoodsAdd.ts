export const PDD_GOODS_ADD = 'pdd.goods.add';
export const PDD_GOODS_ADD_RESPONSE_KEY = 'goods_add_response';
export const PDD_GOODS_ADD_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 1,
    times: 20,
  },
  {
    limiterLevel: 3,
    timeRange: 5,
    times: 4800,
  },
  {
    limiterLevel: 4,
    timeRange: 10,
    times: 2400,
  },
];

/**
 * 接口名称：商品新增接口
 * 接口标识：pdd.goods.add
 * 接口使用场景：单个商品发布，需要配合pdd.goods.image.upload上传主图及商品详情图片，每个店铺一天可调用1200次，3次/秒。
 **/
export interface PddGoodsAddRequestInterface {
  /**
   * @description: 坏果包赔
   * @type: number
   * @default:
   **/
  bad_fruit_claim?: number;

  /**
   * @description: 限购次数
   * @type: string | number
   * @default:
   **/
  buy_limit?: string | number;

  /**
   * @description: 商品轮播图，按次序上传，图片格式支持JPEG/JPG/PNG， 图片尺寸长宽比1：1且尺寸不低于480px，图片大小最高1MB
   * @type: string[]
   * @default:
   **/
  carousel_gallery: string[];

  /**
   * @description: 商品视频
   * @type: PddGoodsAddCarouselVideoRequestInterface[]
   * @default:
   *
   **/
  carousel_video?: PddGoodsAddCarouselVideoRequestInterface[];

  /**
   * @description: 轮播视频
   * @type: string
   * @default:
   **/
  carousel_video_url?: string;

  /**
   * @description: 叶子类目ID
   * @type: string | number
   * @default:
   **/
  cat_id: string | number;

  /**
   * @description: 物流运费模板ID，可使用pdd.logistics.template.get获取
   * @type: string | number
   * @default:
   **/
  cost_template_id: string | number;

  /**
   * @description: 国家ID，country_id可以通过pdd.goods.country.get获取，仅在goods_type为2、3时（海淘商品）入参生效，其余goods_type传0
   * @type: number
   * @default:
   **/
  country_id: number;

  /**
   * @description: 团购人数
   * @type: string | number
   * @default:
   **/
  customer_num?: string | number;

  /**
   * @description: 海关名称，只在goods_type=3（直供商品）时入参且is_customs=true，入参枚举值为：广州、杭州、宁波、郑州、郑州(保税物流中心)、重庆、西安、上海、郑州(综保区)、深圳、福建、天津
   * @type: string
   * @default:
   **/
  customs?: string;

  /**
   * @description: 是否当日发货,0 否，1 是
   * @type: number
   * @default:
   **/
  delivery_one_day?: number;

  /**
   * @description: 商品详情图：
   * a. 尺寸要求宽度处于480~1200px之间，高度0-1500px之间
   * b. 大小1M以内
   * c. 数量限制在20张之间
   * d. 图片格式仅支持JPG,PNG格式
   * e. 点击上传时，支持批量上传详情图
   * @type: string[]
   * @default:
   **/
  detail_gallery: string[];

  /**
   * @description: 卡券类商品属性
   * @type: PddGoodsAddElecGoodsAttributesRequestInterface
   * @default:
   *
   **/
  elec_goods_attributes?: PddGoodsAddElecGoodsAttributesRequestInterface;

  /**
   * @description: 商品描述， 字数限制：20-500，例如，新包装，保证产品的口感和新鲜度。单颗独立小包装，双重营养，1斤家庭分享装，更实惠新疆一级骏枣夹核桃仁。
   * @type: string
   * @default:
   **/
  goods_desc: string;

  /**
   * @description: 商品标题，例如，新疆特产 红满疆枣夹核桃500g
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 商品属性列表
   * @type: PddGoodsAddGoodsPropertiesRequestInterface[]
   * @default:
   *
   **/
  goods_properties?: PddGoodsAddGoodsPropertiesRequestInterface[];

  /**
   * @description: 日历商品交易相关信息
   * @type: PddGoodsAddGoodsTradeAttrRequestInterface
   * @default:
   *
   **/
  goods_trade_attr?: PddGoodsAddGoodsTradeAttrRequestInterface;

  /**
   * @description: 商品出行信息
   * @type: PddGoodsAddGoodsTravelAttrRequestInterface
   * @default:
   *
   **/
  goods_travel_attr?: PddGoodsAddGoodsTravelAttrRequestInterface;

  /**
   * @description: 1-国内普通商品，2-进口，3-直供（保税），4-直邮 ,5-流量 ,6-话费 ,7-优惠券 ,8-QQ充值 ,9-加油卡，15-商家卡券，19-平台卡券
   * @type: number
   * @default:
   **/
  goods_type: number;

  /**
   * @description: 商品主图，请参考拼多多首页大图，如果商品参加部分活动则必填，否则无法参加活动
   * a. 尺寸750 x 352px
   * b. 大小100k以内
   * c. 图片格式仅支持JPG,PNG格式
   * d. 图片背景应以纯白为主, 商品图案居中显示
   * e. 图片不可以添加任何品牌相关文字或logo
   * @type: string
   * @default:
   **/
  image_url?: string;

  /**
   * @description: 是否支持开票（测试中）
   * @type: boolean
   * @default:
   **/
  invoice_status?: boolean;

  /**
   * @description: 是否需要上报海关，false-无需上报海关，true-需上报海关
   * @type: boolean
   * @default:
   **/
  is_customs?: boolean;

  /**
   * @description: 是否支持假一赔十，false-不支持，true-支持
   * @type: boolean
   * @default:
   **/
  is_folt: boolean;

  /**
   * @description: 是否预售,true-预售商品，false-非预售商品
   * @type: boolean
   * @default:
   **/
  is_pre_sale: boolean;

  /**
   * @description: 是否7天无理由退换货，true-支持，false-不支持
   * @type: boolean
   * @default:
   **/
  is_refundable: boolean;

  /**
   * @description: 缺重包退
   * @type: number
   * @default:
   **/
  lack_of_weight_claim?: number;

  /**
   * @description: 买家自提模版id
   * @type: string
   * @default:
   **/
  mai_jia_zi_ti?: string;

  /**
   * @description: 市场价格，单位为分
   * @type: string | number
   * @default:
   **/
  market_price: string | number;

  /**
   * @description: 单次限量
   * @type: number
   * @default:
   **/
  order_limit?: number;

  /**
   * @description: 原产地id，是指海淘商品的生产地址，仅在goods type=3/4的时候必填，可以通过pdd.goods.country.get获取
   * @type: number
   * @default:
   **/
  origin_country_id?: number;

  /**
   * @description: 商品goods外部编码，同其他接口中的outer_goods_id 、out_goods_id、out_goods_sn、outer_goods_sn 都为商家编码（goods维度）。
   * @type: string
   * @default:
   **/
  out_goods_id?: string;

  /**
   * @description: 第三方商品Id
   * @type: string
   * @default:
   **/
  out_source_goods_id?: string;

  /**
   * @description: 第三方商品来源
   * @type: number
   * @default:
   **/
  out_source_type?: number;

  /**
   * @description: {
   * 	"consumption_tax_rate": 1,
   * 	"value_added_tax_rate": 9,
   * 	"hs_code": "2200",
   * 	"customs_broker": "sss",
   * 	"bonded_warehouse_key": "pp"
   * }
   * @type: PddGoodsAddOverseaGoodsRequestInterface
   * @default:
   *
   **/
  oversea_goods?: PddGoodsAddOverseaGoodsRequestInterface;

  /**
   * @description: oversea_type
   * @type: number
   * @default:
   **/
  oversea_type?: number;

  /**
   * @description: 预售时间，is_pre_sale为true时必传，UNIX时间戳，只能为某一天的23:59:59
   * @type: string | number
   * @default:
   **/
  pre_sale_time?: string | number;

  /**
   * @description: 0：不支持全国联保；1：支持全国联保
   * @type: number
   * @default:
   **/
  quan_guo_lian_bao?: number;

  /**
   * @description: 是否二手商品，true -二手商品 ，false-全新商品
   * @type: boolean
   * @default:
   **/
  second_hand: boolean;

  /**
   * @description: 上门安装模版id
   * @type: string
   * @default:
   **/
  shang_men_an_zhuang?: string;

  /**
   * @description: 承诺发货时间（ 秒），普通、进口商品可选48小时或24小时；直邮、直供商品只能入参120小时；is_pre_sale为true时不必传
   * @type: string | number
   * @default:
   **/
  shipment_limit_second: string | number;

  /**
   * @description: 尺码表id
   * @type: string | number
   * @default:
   **/
  size_spec_id?: string | number;

  /**
   * @description: sku对象列表,实例：[{
   * 	"is_onsale": 1,
   * 	"limit_quantity": 999,
   * 	"price": "2200",
   * 	"weight": 1000,
   * 	"multi_price": "1900",
   * 	"thumb_url": "http://t06img.yangkeduo.com/images/2018-04-15/ced035033b5d40b589140af882621c03.jpg",
   * 	"out_sku_sn": "L",
   * 	"quantity": 100,
   * 	"spec_id_list": "[25]",
   * 	"oversea_sku": {
   * 		"measurement_code": "计量单位编码",
   * 		"taxation": "税费",
   * 		"specifications": "规格"
   * 	}
   * }]
   * @type: PddGoodsAddSkuListRequestInterface[]
   * @default:
   *
   **/
  sku_list: PddGoodsAddSkuListRequestInterface[];

  /**
   * @description: 库存方式（0：普通型，1：日历型）
   * @type: number
   * @default:
   **/
  sku_type?: number;

  /**
   * @description: 送货入户并安装模版id
   * @type: string
   * @default:
   **/
  song_huo_an_zhuang?: string;

  /**
   * @description: 送货入户模版id
   * @type: string
   * @default:
   **/
  song_huo_ru_hu?: string;

  /**
   * @description: 短标题，示例：新包装，保证产品的口感和新鲜度。单颗独立小包装，双重营养，1斤家庭分享装，更实惠新疆一级骏枣夹核桃仁。
   * @type: string
   * @default:
   **/
  tiny_name?: string;

  /**
   * @description: 保税仓，只在goods_type=3（直供商品）时入参，入参枚举值为：宁波保税仓、杭州保税仓、广州保税仓、深圳保税仓、重庆保税仓、郑州保税仓、福建保税仓、天津保税仓、上海保税仓、银川保税仓、成都保税仓
   * @type: string
   * @default:
   **/
  warehouse?: string;

  /**
   * @description: 水果类目温馨提示，只在水果类目商品才生效， 字数限制：商品描述goods_desc+温馨提示总计不超过500字。
   * @type: string
   * @default:
   **/
  warm_tips?: string;

  /**
   * @description: 只换不修的天数，目前只支持0和365
   * @type: number
   * @default:
   **/
  zhi_huan_bu_xiu?: number;

  /**
   * @description: 发货方式。0：无物流发货；1：有物流发货。
   * @type: number
   * @default:
   **/
  delivery_type?: number;
}

/**
 * @description 商品视频
 * @default
 * @example
 **/
export interface PddGoodsAddCarouselVideoRequestInterface {
  /**
   * @description: 商品视频id
   * @type: string | number
   * @default:
   **/
  file_id?: string | number;

  /**
   * @description: 商品视频url
   * @type: string
   * @default:
   **/
  video_url?: string;
}

/**
 * @description 卡券类商品属性
 * @default
 * @example
 **/
export interface PddGoodsAddElecGoodsAttributesRequestInterface {
  /**
   * @description: 开始时间（timeType=1时必填表示核销的开始时间）（精确到毫秒）
   * @type: string | number
   * @default:
   **/
  begin_time?: string | number;

  /**
   * @description: 天数内有效（timeType=3必填，表示发货后几天内核销）
   * @type: number
   * @default:
   **/
  days_time?: number;

  /**
   * @description: 截止时间（timeType=1,2时必填，表示发货后核销的截止时间）（精确到毫秒）
   * @type: string | number
   * @default:
   **/
  end_time?: string | number;

  /**
   * @description: 卡券核销类型（1：起始时间内有效，2：发货后后至截止时间内有效，3：发货后多少天内有效）
   * @type: number
   * @default:
   **/
  time_type?: number;
}

/**
 * @description 商品属性列表
 * @default
 * @example
 **/
export interface PddGoodsAddGoodsPropertiesRequestInterface {
  /**
   * @description: 组id，非销售属性不用传
   * @type: number
   * @default:
   **/
  group_id?: number;

  /**
   * @description: 图片url，非销售属性不用传
   * @type: string
   * @default:
   **/
  img_url?: string;

  /**
   * @description: 备注，非销售属性不用传
   * @type: string
   * @default:
   **/
  note?: string;

  /**
   * @description: 父属性id，非销售属性不用传
   * @type: string | number
   * @default:
   **/
  parent_spec_id?: string | number;

  /**
   * @description: 引用属性id
   * @type: string | number
   * @default:
   **/
  ref_pid?: string | number;

  /**
   * @description: 属性id，非销售属性不用传
   * @type: string | number
   * @default:
   **/
  spec_id?: string | number;

  /**
   * @description: 模板属性id
   * @type: string | number
   * @default:
   **/
  template_pid?: string | number;

  /**
   * @description: 属性值
   * @type: string
   * @default:
   **/
  value?: string;

  /**
   * @description: 属性单位
   * @type: string
   * @default:
   **/
  value_unit?: string;

  /**
   * @description: 属性值id
   * @type: string | number
   * @default:
   **/
  vid?: string | number;
}

/**
 * @description 日历商品交易相关信息
 * @default
 * @example
 **/
export interface PddGoodsAddGoodsTradeAttrRequestInterface {
  /**
   * @description: 提前预定天数，默认为0表示当天可预定
   * @type: number
   * @default:
   **/
  advances_days?: number;

  /**
   * @description: 预订须知
   * @type: PddGoodsAddGoodsTradeAttrBookingNotesRequestInterface
   * @default:
   *
   **/
  booking_notes?: PddGoodsAddGoodsTradeAttrBookingNotesRequestInterface;

  /**
   * @description: 卡券有效期，日历日期后多少天可用。默认值为0表示仅限日历日当天使用
   * @type: number
   * @default:
   **/
  life_span?: number;
}

/**
 * @description 预订须知
 * @default
 * @example
 **/
export interface PddGoodsAddGoodsTradeAttrBookingNotesRequestInterface {
  /**
   * @description: 预定须知图片地址
   * @type: string
   * @default:
   **/
  url?: string;
}

/**
 * @description 商品出行信息
 * @default
 * @example
 **/
export interface PddGoodsAddGoodsTravelAttrRequestInterface {
  /**
   * @description: 出行人是否必填（默认是）
   * @type: boolean
   * @default:
   **/
  need_tourist?: boolean;

  /**
   * @description: 日历商品类型1:旅行类,2:住宿类,3:票务类
   * @type: number
   * @default:
   **/
  type?: number;
}

/**
 * @description {
 * 	"consumption_tax_rate": 1,
 * 	"value_added_tax_rate": 9,
 * 	"hs_code": "2200",
 * 	"customs_broker": "sss",
 * 	"bonded_warehouse_key": "pp"
 * }
 * @default
 * @example
 **/
export interface PddGoodsAddOverseaGoodsRequestInterface {
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
  consumption_tax_rate?: number;

  /**
   * @description: 清关服务商
   * @type: string
   * @default:
   **/
  customs_broker?: string;

  /**
   * @description: 海关编号
   * @type: string
   * @default:
   **/
  hs_code?: string;

  /**
   * @description: 增值税率
   * @type: number
   * @default:
   **/
  value_added_tax_rate?: number;
}

/**
 * @description sku对象列表,实例：[{
 * 	"is_onsale": 1,
 * 	"limit_quantity": 999,
 * 	"price": "2200",
 * 	"weight": 1000,
 * 	"multi_price": "1900",
 * 	"thumb_url": "http://t06img.yangkeduo.com/images/2018-04-15/ced035033b5d40b589140af882621c03.jpg",
 * 	"out_sku_sn": "L",
 * 	"quantity": 100,
 * 	"spec_id_list": "[25]",
 * 	"oversea_sku": {
 * 		"measurement_code": "计量单位编码",
 * 		"taxation": "税费",
 * 		"specifications": "规格"
 * 	}
 * }]
 * @default
 * @example
 **/
export interface PddGoodsAddSkuListRequestInterface {
  /**
   * @description: sku上架状态，0-已下架，1-上架中
   * @type: number
   * @default:
   **/
  is_onsale: number;

  /**
   * @description: sku送装参数：长度
   * @type: string | number
   * @default:
   **/
  length?: string | number;

  /**
   * @description: sku购买限制，只入参999
   * @type: string | number
   * @default:
   **/
  limit_quantity: string | number;

  /**
   * @description: 商品团购价格
   * @type: string | number
   * @default:
   **/
  multi_price: string | number;

  /**
   * @description: 商品sku外部编码，同其他接口中的outer_id 、out_id、out_sku_sn、outer_sku_sn、out_sku_id、outer_sku_id 都为商家编码（sku维度）。
   * @type: string
   * @default:
   **/
  out_sku_sn?: string;

  /**
   * @description: 第三方sku Id
   * @type: string
   * @default:
   **/
  out_source_sku_id?: string;

  /**
   * @description: oversea_sku
   * @type: PddGoodsAddSkuListOverseaSkuRequestInterface
   * @default:
   *
   **/
  oversea_sku?: PddGoodsAddSkuListOverseaSkuRequestInterface;

  /**
   * @description: 商品单买价格
   * @type: string | number
   * @default:
   **/
  price: string | number;

  /**
   * @description: 商品sku库存初始数量，后续库存update只使用stocks.update接口进行调用
   * @type: string | number
   * @default:
   **/
  quantity: string | number;

  /**
   * @description: 商品规格列表，根据pdd.goods.spec.id.get生成的规格属性id，例如：颜色规格下商家新增白色和黑色，大小规格下商家新增L和XL，则由4种spec组合，入参一种组合即可，在skulist中需要有4个spec组合的sku，示例：[20,5]
   * @type: string
   * @default:
   **/
  spec_id_list: string;

  /**
   * @description: sku 缩略图
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
export interface PddGoodsAddSkuListOverseaSkuRequestInterface {
  /**
   * @description: 计量单位编码，从接口pdd.gooods.sku.measurement.list获取code
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
 * 接口名称：商品新增接口
 * 接口标识：pdd.goods.add
 * 接口使用场景：单个商品发布，需要配合pdd.goods.image.upload上传主图及商品详情图片，每个店铺一天可调用1200次，3次/秒。
 **/
export interface PddGoodsAddResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsAddGoodsAddResponseResponseInterface
   * @default:
   *
   **/
  goods_add_response: PddGoodsAddGoodsAddResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGoodsAddGoodsAddResponseResponseInterface {
  /**
   * @description: 上传商品的上传序列ID
   * @type: string | number
   * @default:
   **/
  goods_commit_id: string | number;

  /**
   * @description: 商品ID
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;
}
