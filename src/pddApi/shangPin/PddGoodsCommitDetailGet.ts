export const PDD_GOODS_COMMIT_DETAIL_GET = 'PDD_GOODS_COMMIT_DETAIL_GET';

/**
 * 接口名称：获取商品提交的商品详情
 * 接口标识：pdd.goods.commit.detail.get
 * 接口使用场景：商品编辑或者提交之后，可以通过此接口查询提交后的编辑信息
 **/

export interface PddGoodsCommitDetailGetRequestInterface {
  /**
   * @description: 提交申请的序列id
   * @type: string
   * @default:
   **/
  goods_commit_id?: string;

  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id?: string;
}

/**
 * 接口名称：获取商品提交的商品详情
 * 接口标识：pdd.goods.commit.detail.get
 * 接口使用场景：商品编辑或者提交之后，可以通过此接口查询提交后的编辑信息
 **/

export interface PddGoodsCommitDetailGetResponseInterface {
  /**
   * @description: 返回response
   * @type: PddGoodsCommitDetailGetGoodsCommitDetailResponseResponseInterface
   * @default:
   *
   **/
  goods_commit_detail_response: PddGoodsCommitDetailGetGoodsCommitDetailResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/

export interface PddGoodsCommitDetailGetGoodsCommitDetailResponseResponseInterface {
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
   * @description: 商品轮播图列表
   * @type: string
   * @default:
   **/
  carousel_gallery_list: string;

  /**
   * @description: 商品视频
   * @type: PddGoodsCommitDetailGetGoodsCommitDetailResponseCarouselVideoResponseInterface[]
   * @default:
   *
   **/
  carousel_video: PddGoodsCommitDetailGetGoodsCommitDetailResponseCarouselVideoResponseInterface[];

  /**
   * @description: 轮播视频
   * @type: number
   * @default:
   **/
  carousel_video_url: number;

  /**
   * @description: 类目id
   * @type: string
   * @default:
   **/
  cat_id: string;

  /**
   * @description: 驳回原因，仅在status=2时返回，其余状态返回空值
   * @type: string
   * @default:
   **/
  commit_message: string;

  /**
   * @description: 运费模版id
   * @type: string
   * @default:
   **/
  cost_template_id: string;

  /**
   * @description: 国家id
   * @type: string
   * @default:
   **/
  country_id: string;

  /**
   * @description: 团购人数
   * @type: string
   * @default:
   **/
  customer_num: string;

  /**
   * @description: 海关名称
   * @type: string
   * @default:
   **/
  customs: string;

  /**
   * @description: 是否删除
   * @type: number
   * @default:
   **/
  deleted: number;

  /**
   * @description: 是否当日发货,0 否，1 是
   * @type: number
   * @default:
   **/
  delivery_one_day: number;

  /**
   * @description: 商品详情图
   * @type: string
   * @default:
   **/
  detail_gallery_list: string;

  /**
   * @description: 卡券类商品属性
   * @type: PddGoodsCommitDetailGetGoodsCommitDetailResponseElecGoodsAttributesResponseInterface
   * @default:
   *
   **/
  elec_goods_attributes: PddGoodsCommitDetailGetGoodsCommitDetailResponseElecGoodsAttributesResponseInterface;

  /**
   * @description: 提交申请的序列ID
   * @type: string
   * @default:
   **/
  goods_commit_id: string;

  /**
   * @description: 商品描述， 字数限制：20-500，例如，新包装，保证产品的口感和新鲜度。单颗独立小包装，双重营养，1斤家庭分享装，更实惠新疆一级骏枣夹核桃仁。
   * @type: string
   * @default:
   **/
  goods_desc: string;

  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id: string;

  /**
   * @description: 商品名称
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 商品属性列表
   * @type: PddGoodsCommitDetailGetGoodsCommitDetailResponseGoodsPropertyListResponseInterface[]
   * @default:
   *
   **/
  goods_property_list: PddGoodsCommitDetailGetGoodsCommitDetailResponseGoodsPropertyListResponseInterface[];

  /**
   * @description: 商品状态，枚举：0-编辑中，1-待审核，2-审核通过，3-审核驳回
   * @type: number
   * @default:
   **/
  goods_status: number;

  /**
   * @description: 1-国内普通商品，2-进口，3-国外海淘，4-直邮 ,5-流量,6-话费,7,优惠券;8-QQ充值,9-加油卡，15-商家卡券，19-平台卡券，暂时支持1-普通商品的上架 19-平台卡券
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
   * @description: 是否预售,true-预售商品，false-非预售商品
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
   * @description: 原产地id，是指海淘商品的生产地址
   * @type: number
   * @default:
   **/
  origin_country_id: number;

  /**
   * @description: 商家编码（商品维度），同其他接口中的outer_goods_id 、out_goods_id、out_goods_sn、outer_goods_sn 都为商家编码（goods维度）
   * @type: string
   * @default:
   **/
  outer_goods_id: string;

  /**
   * @description: oversea_goods
   * @type: PddGoodsCommitDetailGetGoodsCommitDetailResponseOverseaGoodsResponseInterface
   * @default:
   *
   **/
  oversea_goods: PddGoodsCommitDetailGetGoodsCommitDetailResponseOverseaGoodsResponseInterface;

  /**
   * @description: oversea_type
   * @type: number
   * @default:
   **/
  oversea_type: number;

  /**
   * @description: 预售时间
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
   * @description: 是否二手
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
   * @type: string
   * @default:
   **/
  shipment_limit_second: string;

  /**
   * @description: sku列表
   * @type: PddGoodsCommitDetailGetGoodsCommitDetailResponseSkuListResponseInterface[]
   * @default:
   *
   **/
  sku_list: PddGoodsCommitDetailGetGoodsCommitDetailResponseSkuListResponseInterface[];

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
   * @description: 新包装，保证产品的口感和新鲜度。单颗独立小包装，双重营养，1斤家庭分享装，更实惠新疆一级骏枣夹核桃仁。
   * @type: string
   * @default:
   **/
  tiny_name: string;

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
 * @description 商品视频
 * @default
 * @example
 **/

export interface PddGoodsCommitDetailGetGoodsCommitDetailResponseCarouselVideoResponseInterface {
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

export interface PddGoodsCommitDetailGetGoodsCommitDetailResponseElecGoodsAttributesResponseInterface {
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
   * @description: 截止时间（timeType=1,2时必填，表示发货后核销的截止时间）（精确到毫秒）
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

export interface PddGoodsCommitDetailGetGoodsCommitDetailResponseGoodsPropertyListResponseInterface {
  /**
   * @description: 属性单位
   * @type: string
   * @default:
   **/
  punit: string;

  /**
   * @description: 引用属性id
   * @type: string
   * @default:
   **/
  ref_pid: string;

  /**
   * @description: 模板属性Id
   * @type: string
   * @default:
   **/
  template_pid: string;

  /**
   * @description: 基础属性值Id
   * @type: string
   * @default:
   **/
  vid: string;

  /**
   * @description: 基础属性值
   * @type: string
   * @default:
   **/
  vvalue: string;
}

/**
 * @description oversea_goods
 * @default
 * @example
 **/

export interface PddGoodsCommitDetailGetGoodsCommitDetailResponseOverseaGoodsResponseInterface {
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

export interface PddGoodsCommitDetailGetGoodsCommitDetailResponseSkuListResponseInterface {
  /**
   * @description: 上下架状态 1：上架 0 ：下架
   * @type: number
   * @default:
   **/
  is_onsale: number;

  /**
   * @description: sku送装参数：长度
   * @type: string
   * @default:
   **/
  lengtj: string;

  /**
   * @description: sku购买限制
   * @type: string
   * @default:
   **/
  limit_quantity: string;

  /**
   * @description: 商品团购价格 单位分
   * @type: string
   * @default:
   **/
  multi_price: string;

  /**
   * @description: 商家编码（sku维度），同其他接口中的outer_id 、out_id、out_sku_sn、outer_sku_sn、out_sku_id、outer_sku_id 都为商家编码（sku维度）
   * @type: string
   * @default:
   **/
  out_sku_sn: string;

  /**
   * @description: oversea_sku
   * @type: PddGoodsCommitDetailGetGoodsCommitDetailResponseSkuListOverseaSkuResponseInterface
   * @default:
   *
   **/
  oversea_sku: PddGoodsCommitDetailGetGoodsCommitDetailResponseSkuListOverseaSkuResponseInterface;

  /**
   * @description: 商品单买价格 单位分
   * @type: string
   * @default:
   **/
  price: string;

  /**
   * @description: 库存
   * @type: string
   * @default:
   **/
  quantity: string;

  /**
   * @description: sku编码
   * @type: string
   * @default:
   **/
  sku_id: string;

  /**
   * @description: 商品规格列表
   * @type: PddGoodsCommitDetailGetGoodsCommitDetailResponseSkuListSpecResponseInterface[]
   * @default:
   *
   **/
  spec: PddGoodsCommitDetailGetGoodsCommitDetailResponseSkuListSpecResponseInterface[];

  /**
   * @description: sku预览图
   * @type: string
   * @default:
   **/
  thumb_url: string;

  /**
   * @description: 重量，单位为g
   * @type: string
   * @default:
   **/
  weight: string;
}

/**
 * @description oversea_sku
 * @default
 * @example
 **/

export interface PddGoodsCommitDetailGetGoodsCommitDetailResponseSkuListOverseaSkuResponseInterface {
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

export interface PddGoodsCommitDetailGetGoodsCommitDetailResponseSkuListSpecResponseInterface {
  /**
   * @description: 商品规格对应的ID
   * @type: string
   * @default:
   **/
  parent_id: string;

  /**
   * @description: 商品规格ID对应的规格名称
   * @type: string
   * @default:
   **/
  parent_name: string;

  /**
   * @description: 生成的自定义规格ID
   * @type: string
   * @default:
   **/
  spec_id: string;

  /**
   * @description: 商家编辑的规格值，如颜色规格下设置白色属性
   * @type: string
   * @default:
   **/
  spec_name: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_GOODS_COMMIT_DETAIL_GET]: {
    requestInterface: PddGoodsCommitDetailGetRequestInterface;
    responseInterface: PddGoodsCommitDetailGetResponseInterface;
  };
}
