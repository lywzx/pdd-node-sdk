export const PDD_GOODS_EDIT_GOODS_COMMIT = 'pdd.goods.edit.goods.commit';
export const PDD_GOODS_EDIT_GOODS_COMMIT_RESPONSE_KEY = 'goods_update_response';

/**
 * 接口名称：新增或编辑草稿接口
 * 接口标识：pdd.goods.edit.goods.commit
 * 接口使用场景：新增或编辑草稿
 **/
export interface PddGoodsEditGoodsCommitRequestInterface {
  /**
   * @description: 坏果包赔
   * @type: number
   * @default:
   **/
  bad_fruit_claim: number;

  /**
   * @description: 限购次数
   * @type: string
   * @default:
   **/
  buy_limit: string;

  /**
   * @description: 商品轮播图，按次序上传，图片格式支持JPEG/JPG/PNG， 图片尺寸长宽比1：1且尺寸不低于480px，图片大小最高1MB
   * @type: string[]
   * @default:
   **/
  carousel_gallery: string[];

  /**
   * @description: 商品视频
   * @type: PddGoodsEditGoodsCommitCarouselVideoRequestInterface[]
   * @default:
   *
   **/
  carousel_video: PddGoodsEditGoodsCommitCarouselVideoRequestInterface[];

  /**
   * @description: 轮播视频
   * @type: string
   * @default:
   **/
  carousel_video_url: string;

  /**
   * @description: 叶子类目ID
   * @type: string
   * @default:
   **/
  cat_id?: string;

  /**
   * @description: 物流运费模板ID，可使用pdd.logistics.template.get获取
   * @type: string
   * @default:
   **/
  cost_template_id: string;

  /**
   * @description: 国家ID，0-中国，暂时只传0（普通商品）
   * @type: number
   * @default:
   **/
  country_id: number;

  /**
   * @description: 团购人数
   * @type: string
   * @default:
   **/
  customer_num: string;

  /**
   * @description: 海关名称，只在goods_type为直供商品时有效（现阶段暂不支持）
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
   * @type: PddGoodsEditGoodsCommitElecGoodsAttributesRequestInterface
   * @default:
   *
   **/
  elec_goods_attributes: PddGoodsEditGoodsCommitElecGoodsAttributesRequestInterface;

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
   * @type: PddGoodsEditGoodsCommitGoodsPropertiesRequestInterface[]
   * @default:
   *
   **/
  goods_properties: PddGoodsEditGoodsCommitGoodsPropertiesRequestInterface[];

  /**
   * @description: 1-国内普通商品，2-进口，3-国外海淘，4-直邮 ,5-流量,6-话费,7,优惠券;8-QQ充值,9-加油卡，15-商家卡券，19-平台卡券，暂时支持1-普通商品的上架 19-平台卡券
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
  image_url: string;

  /**
   * @description: 是否支持正品发票；0-不支持、1-支持
   * @type: number
   * @default:
   **/
  invoice_status: number;

  /**
   * @description: 是否需要上报海关，现阶段入参默认false，入参true会失败
   * @type: boolean
   * @default:
   **/
  is_customs: boolean;

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
  lack_of_weight_claim: number;

  /**
   * @description: 买家自提模版id
   * @type: string
   * @default:
   **/
  mai_jia_zi_ti: string;

  /**
   * @description: 市场价格，单位为分
   * @type: string
   * @default:
   **/
  market_price: string;

  /**
   * @description: 单次限量
   * @type: string
   * @default:
   **/
  order_limit: string;

  /**
   * @description: 原产地id，是指海淘商品的生产地址，仅在goods type=3/4的时候必填，可以通过pdd.goods.country.get获取
   * @type: number
   * @default:
   **/
  origin_country_id: number;

  /**
   * @description: 商品goods外部编码
   * @type: string
   * @default:
   **/
  out_goods_id: string;

  /**
   * @description: {
   * 	"consumption_tax_rate": 1,
   * 	"value_added_tax_rate": 9,
   * 	"hs_code": "2200",
   * 	"customs_broker": "sss",
   * 	"customs_declaration_method": 1,
   * 	"bonded_warehouse": "sss",
   * 	"bonded_warehouse_key": "pp"
   * }
   * @type: PddGoodsEditGoodsCommitOverseaGoodsRequestInterface
   * @default:
   *
   **/
  oversea_goods: PddGoodsEditGoodsCommitOverseaGoodsRequestInterface;

  /**
   * @description: oversea_type
   * @type: number
   * @default:
   **/
  oversea_type: number;

  /**
   * @description: 预售时间，is_pre_sale为1时必传，UNIX时间戳
   * @type: string
   * @default:
   **/
  pre_sale_time: string;

  /**
   * @description: 0：不支持全国联保；1：支持全国联保
   * @type: number
   * @default:
   **/
  quan_guo_lian_bao: number;

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
  shang_men_an_zhuang: string;

  /**
   * @description: 承诺发货时间（ 秒），48小时或24小时，is_pre_sale为1时不必传
   * @type: string
   * @default:
   **/
  shipment_limit_second: string;

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
   * @type: PddGoodsEditGoodsCommitSkuListRequestInterface[]
   * @default:
   *
   **/
  sku_list: PddGoodsEditGoodsCommitSkuListRequestInterface[];

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
   * @description: 商品短标题（仅在部分活动中生效），字数限制为4-20字
   * @type: string
   * @default:
   **/
  tiny_name: string;

  /**
   * @description: 保税仓，只在goods_type为直供商品时有效（现阶段暂不支持）
   * @type: string
   * @default:
   **/
  warehouse: string;

  /**
   * @description: 水果类目温馨提示，只在水果类目商品才生效， 字数限制：商品描述goods_desc+温馨提示总计不超过500字。
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
 * @description 商品视频
 * @default
 * @example
 **/
export interface PddGoodsEditGoodsCommitCarouselVideoRequestInterface {
  /**
   * @description: 商品视频id
   * @type: string
   * @default:
   **/
  file_id: string;

  /**
   * @description: 商品视频url
   * @type: string
   * @default:
   **/
  video_url: string;
}

/**
 * @description 卡券类商品属性
 * @default
 * @example
 **/
export interface PddGoodsEditGoodsCommitElecGoodsAttributesRequestInterface {
  /**
   * @description: 开始时间（timeType=1时必填表示核销的开始时间）（精确到毫秒）
   * @type: string
   * @default:
   **/
  begin_time: string;

  /**
   * @description: 天数内有效（timeType=3必填，表示发货后几天内核销）
   * @type: number
   * @default:
   **/
  days_time: number;

  /**
   * @description: 截止时间（timeType=1,2时必填，表示发货后核销的截止时间）（精确到毫秒
   * @type: string
   * @default:
   **/
  end_time: string;

  /**
   * @description: 卡券核销类型（1：起始时间内有效，2：发货后后至截止时间内有效，3：发货后多少天内有效）
   * @type: number
   * @default:
   **/
  time_type: number;
}

/**
 * @description 商品属性列表
 * @default
 * @example
 **/
export interface PddGoodsEditGoodsCommitGoodsPropertiesRequestInterface {
  /**
   * @description: 组id，非销售属性不用传
   * @type: number
   * @default:
   **/
  group_id: number;

  /**
   * @description: 图片url，非销售属性不用传
   * @type: string
   * @default:
   **/
  img_url: string;

  /**
   * @description: 备注，非销售属性不用传
   * @type: string
   * @default:
   **/
  note: string;

  /**
   * @description: 父属性id，非销售属性不用传
   * @type: string
   * @default:
   **/
  parent_spec_id: string;

  /**
   * @description: 属性id，非销售属性不用传
   * @type: string
   * @default:
   **/
  spec_id: string;

  /**
   * @description: 模板属性id
   * @type: string
   * @default:
   **/
  template_pid: string;

  /**
   * @description: 属性值
   * @type: string
   * @default:
   **/
  value: string;

  /**
   * @description: 属性单位
   * @type: string
   * @default:
   **/
  value_unit: string;

  /**
   * @description: 属性值id
   * @type: string
   * @default:
   **/
  vid: string;
}

/**
 * @description {
 * 	"consumption_tax_rate": 1,
 * 	"value_added_tax_rate": 9,
 * 	"hs_code": "2200",
 * 	"customs_broker": "sss",
 * 	"customs_declaration_method": 1,
 * 	"bonded_warehouse": "sss",
 * 	"bonded_warehouse_key": "pp"
 * }
 * @default
 * @example
 **/
export interface PddGoodsEditGoodsCommitOverseaGoodsRequestInterface {
  /**
   * @description: 保税仓唯一标识
   * @type: string
   * @default:
   **/
  bonded_warehouse_key?: string;

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
export interface PddGoodsEditGoodsCommitSkuListRequestInterface {
  /**
   * @description: sku上架状态，0-已下架，1-上架中
   * @type: number
   * @default:
   **/
  is_onsale?: number;

  /**
   * @description: sku送装参数：长度
   * @type: string
   * @default:
   **/
  length: string;

  /**
   * @description: sku购买限制，只入参999
   * @type: string
   * @default:
   **/
  limit_quantity?: string;

  /**
   * @description: 商品团购价格
   * @type: string
   * @default:
   **/
  multi_price?: string;

  /**
   * @description: 商品sku外部编码
   * @type: string
   * @default:
   **/
  out_sku_sn: string;

  /**
   * @description: oversea_sku
   * @type: PddGoodsEditGoodsCommitSkuListOverseaSkuRequestInterface
   * @default:
   *
   **/
  oversea_sku: PddGoodsEditGoodsCommitSkuListOverseaSkuRequestInterface;

  /**
   * @description: 商品单买价格
   * @type: string
   * @default:
   **/
  price?: string;

  /**
   * @description: 商品sku库存初始数量，后续库存update只使用stocks.update接口进行调用
   * @type: string
   * @default:
   **/
  quantity?: string;

  /**
   * @description: 商品规格列表，根据pdd.goods.spec.id.get生成的规格属性id，例如：颜色规格下商家新增白色和黑色，大小规格下商家新增L和XL，则由4种spec组合，入参一种组合即可，在skulist中需要有4个spec组合的sku
   * @type: string
   * @default:
   **/
  spec_id_list?: string;

  /**
   * @description: sku预览图，预览图尺寸：等宽高，且高度不低于480px，现已支持1M大小，越清晰越好卖，SKU预览图格式：仅支持JPG,PNG格式
   * @type: string
   * @default:
   **/
  thumb_url?: string;

  /**
   * @description: 重量，单位为g
   * @type: string
   * @default:
   **/
  weight?: string;
}

/**
 * @description oversea_sku
 * @default
 * @example
 **/
export interface PddGoodsEditGoodsCommitSkuListOverseaSkuRequestInterface {
  /**
   * @description: 计量单位编码，从接口pdd.gooods.sku.measurement.list获取code
   * @type: string
   * @default:
   **/
  measurement_code?: string;

  /**
   * @description: 规格
   * @type: string
   * @default:
   **/
  specifications?: string;

  /**
   * @description: 税费
   * @type: number
   * @default:
   **/
  taxation?: number;
}

/**
 * 接口名称：新增或编辑草稿接口
 * 接口标识：pdd.goods.edit.goods.commit
 * 接口使用场景：新增或编辑草稿
 **/
export interface PddGoodsEditGoodsCommitResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsEditGoodsCommitGoodsUpdateResponseResponseInterface
   * @default:
   *
   **/
  goods_update_response: PddGoodsEditGoodsCommitGoodsUpdateResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddGoodsEditGoodsCommitGoodsUpdateResponseResponseInterface {
  /**
   * @description: 草稿id
   * @type: string
   * @default:
   **/
  goods_commit_id: string;

  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id: string;
}
