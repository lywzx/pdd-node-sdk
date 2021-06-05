export const PDD_TICKET_GOODS_UPLOAD = 'pdd.ticket.goods.upload';
export const PDD_TICKET_GOODS_UPLOAD_RESPONSE_KEY = 'goods_upload_response';

/**
 * 接口名称：门票商品新建及更新接口
 * 接口标识：pdd.ticket.goods.upload
 * 接口使用场景：门票商品新建及更新
 **/
export interface PddTicketGoodsUploadRequestInterface {
  /**
   * @description: 商品轮播图，按次序上传，图片格式支持JPEG/JPG/PNG， 图片尺寸长宽比1：1且尺寸不低于480px，图片大小最高1MB。先通过pdd.goods.image.upload上传图片
   * @type: string[]
   * @default:
   **/
  carousel_gallery: string[];

  /**
   * @description: 轮播视频。需要先上传到pdd.goods.filespace.image.upload
   * @type: PddTicketGoodsUploadCarouselVideoRequestInterface[]
   * @default:
   *
   **/
  carousel_video?: PddTicketGoodsUploadCarouselVideoRequestInterface[];

  /**
   * @description: 类目id，国内门票（含港澳台）传9088，国外门票传20042。发布成功后不能修改。新增商品时必填。
   * @type: string | number
   * @default:
   **/
  cat_id: string | number;

  /**
   * @description: 电子票发码方式，0=手动电子票；1=实时电子票，自动发货。新增商品时必填。
   * @type: number
   * @default:
   **/
  code_mode: number;

  /**
   * @description: 商品详情图： a. 尺寸要求宽度处于480~1200px之间，高度0-1500px之间 b. 大小1M以内 c. 数量限制在20张之间 d. 图片格式仅支持JPG,PNG格式 。先通过pdd.goods.image.upload上传图片，新增商品时必填。
   * @type: string[]
   * @default:
   **/
  detail_gallery: string[];

  /**
   * @description: 草稿id，编辑草稿时必传。
   * @type: string | number
   * @default:
   **/
  goods_commit_id?: string | number;

  /**
   * @description: 商品描述，字数限制：20~500。新增商品时必填。
   * @type: string
   * @default:
   **/
  goods_desc: string;

  /**
   * @description: 商品id，编辑商品时必传。
   * @type: string | number
   * @default:
   **/
  goods_id?: string | number;

  /**
   * @description: 商品标题，新增商品时必填。
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 商品属性，先调pdd.goods.cat.template.get，根据cat_id获取，新增商品时必填。
   * @type: PddTicketGoodsUploadGoodsPropertiesRequestInterface[]
   * @default:
   *
   **/
  goods_properties: PddTicketGoodsUploadGoodsPropertiesRequestInterface[];

  /**
   * @description: 是否提交本次编辑，0=不提交，表示仅保存草稿，不进行提交，不会进行校验；1=提交，表示提交本次编辑内容，会进行校验；不传时默认为提交
   * @type: number
   * @default:
   **/
  is_submit?: number;

  /**
   * @description: 商品市场价，单位为分，必须高于最高的sku单买价。新增商品时必填。
   * @type: string | number
   * @default:
   **/
  market_price: string | number;

  /**
   * @description: 商品goods外部编码，同其他接口中的outer_goods_id 、out_goods_id、out_goods_sn、outer_goods_sn 都为商品维度的商家编码。
   * @type: string
   * @default:
   **/
  out_goods_sn?: string;

  /**
   * @description: 预定时间限制，格式：1_20_00，含义：需要提前1天，且在20:00分之前才可预定那天的门票。若不传则表示不限制预定时间。0_24_00表示在当前的24点前预定都可以，等效于不限制预定时间。
   * @type: string
   * @default:
   **/
  reserve_limit_rule?: string;

  /**
   * @description: sku列表。新增商品时必填。整个sku_list会作为整体更新。
   * @type: PddTicketGoodsUploadSkuListRequestInterface[]
   * @default:
   *
   **/
  sku_list: PddTicketGoodsUploadSkuListRequestInterface[];

  /**
   * @description: 销售方式，0=普通库存，1=日历库存。对于普通库存入参sku维度的价格库存，对于日历库存需要在pdd.goods.child.sku.edit入参child_sku维度的价格库存后再提交。编辑商品时不允许修改。
   * @type: number
   * @default:
   **/
  sku_type: number;

  /**
   * @description: 提交后上下架状态，0=上架；1=保持原样。表示编辑商品并提交后商品的上下架状态，不传时默认为0，上架。
   * @type: number
   * @default:
   **/
  sync_goods_operate?: number;

  /**
   * @description: 是否获取商品发布警告信息，默认为忽略
   * @type: boolean
   * @default:
   **/
  ignore_edit_warn?: boolean;
}

/**
 * @description 轮播视频。需要先上传到pdd.goods.filespace.image.upload
 * @default
 * @example
 **/
export interface PddTicketGoodsUploadCarouselVideoRequestInterface {
  /**
   * @description: 轮播视频id
   * @type: string | number
   * @default:
   **/
  file_id?: string | number;

  /**
   * @description: 轮播视频url
   * @type: string
   * @default:
   **/
  video_url?: string;
}

/**
 * @description 商品属性，先调pdd.goods.cat.template.get，根据cat_id获取，新增商品时必填。
 * @default
 * @example
 **/
export interface PddTicketGoodsUploadGoodsPropertiesRequestInterface {
  /**
   * @description: 父规格id，仅对于销售属性入参
   * @type: string | number
   * @default:
   **/
  parent_spec_id?: string | number;

  /**
   * @description: 引用属性id
   * @type: string | number
   * @default:
   **/
  ref_pid: string | number;

  /**
   * @description: 规格id，仅对于销售属性入参，和sku中的spec对应
   * @type: string | number
   * @default:
   **/
  spec_id?: string | number;

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
  value_unit?: string;

  /**
   * @description: 属性值id
   * @type: string | number
   * @default:
   **/
  vid?: string | number;
}

/**
 * @description sku列表。新增商品时必填。整个sku_list会作为整体更新。
 * @default
 * @example
 **/
export interface PddTicketGoodsUploadSkuListRequestInterface {
  /**
   * @description: 仅当sku_type为日历库存时入参。若父sku多于10个，需要通过pdd.goods.child.sku.edit接口分批维护。
   * @type: PddTicketGoodsUploadSkuListChildSkusRequestInterface[]
   * @default:
   *
   **/
  child_skus?: PddTicketGoodsUploadSkuListChildSkusRequestInterface[];

  /**
   * @description: 拼团价，单位为分。仅当sku_type为普通库存时入参
   * @type: string | number
   * @default:
   **/
  group_price?: string | number;

  /**
   * @description: 上架状态。0=已下架，1=已上架。新建sku时不传时表示上架。
   * @type: number
   * @default:
   **/
  is_onsale?: number;

  /**
   * @description: sku外部编码，同其他接口中的outer_id 、out_id、out_sku_sn、outer_sku_sn、out_sku_id、outer_sku_id 都为商家编码（sku维度）。
   * @type: string
   * @default:
   **/
  out_sku_sn?: string;

  /**
   * @description: 库存增减。仅当sku_type为普通库存时入参。比如传-10表示将对应的sku库存减10。
   * @type: string | number
   * @default:
   **/
  quantity_delta?: string | number;

  /**
   * @description: 调pdd.scenic.sku.rule.get得到的规则id。在发布成功后不可修改。
   * @type: string
   * @default:
   **/
  rule_id: string;

  /**
   * @description: 单买价，单位为分。仅当sku_type为普通库存时入参。
   * @type: string | number
   * @default:
   **/
  single_price?: string | number;

  /**
   * @description: 如果传值，则在原sku基础上进行编辑，如果传空，则新增sku
   * @type: string | number
   * @default:
   **/
  sku_id?: string | number;

  /**
   * @description: 商品规格列表，从pdd.goods.cat.template.get中获取销售属性规格id后，再在pdd.goods.spec.id.get获取spec_id。spec_id需要和goods_properties中的对应。对于多种规格，需要传每个规格的spec_id的值，如[20,5]。在发布后不可修改。
   * @type: Array<string | number>
   * @default:
   **/
  spec_id_list: Array<string | number>;

  /**
   * @description: SKU预览图。图片格式支持JPEG/JPG/PNG， 图片尺寸长宽比1：1且尺寸不低于480px，图片大小最高1MB。先通过pdd.goods.image.upload上传图片
   * @type: string
   * @default:
   **/
  thumb_url: string;
}

/**
 * @description 仅当sku_type为日历库存时入参。若父sku多于10个，需要通过pdd.goods.child.sku.edit接口分批维护。
 * @default
 * @example
 **/
export interface PddTicketGoodsUploadSkuListChildSkusRequestInterface {
  /**
   * @description: 日期。格式：2020-06-01。每个sku最多支持180天。
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
   * @description: 库存增减。比如传-10表示将对应的sku库存减10。
   * @type: string | number
   * @default:
   **/
  quantity_delta: string | number;

  /**
   * @description: 单买价，单位为分。
   * @type: string | number
   * @default:
   **/
  single_price: string | number;
}

/**
 * 接口名称：门票商品新建及更新接口
 * 接口标识：pdd.ticket.goods.upload
 * 接口使用场景：门票商品新建及更新
 **/
export interface PddTicketGoodsUploadResponseInterface {
  /**
   * @description:
   * @type: PddTicketGoodsUploadGoodsUploadResponseResponseInterface
   * @default:
   *
   **/
  goods_upload_response: PddTicketGoodsUploadGoodsUploadResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddTicketGoodsUploadGoodsUploadResponseResponseInterface {
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
