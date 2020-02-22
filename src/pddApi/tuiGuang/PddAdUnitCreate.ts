export const PDD_AD_UNIT_CREATE = 'PDD_AD_UNIT_CREATE';

/**
 * 接口名称：添加推广单元
 * 接口标识：pdd.ad.unit.create
 * 接口使用场景：添加推广单元，计划内单元上限20
 **/
export interface PddAdUnitCreateRequestInterface {
  /**
   * @description: 推广类型，0-搜索推广，2-展示推广
   * scene type为0的时候，keywords必填，bid不用填；scene type为2的时候，keywords不用填，bid必填
   * @type: number
   * @default:
   **/
  scene_type?: number;

  /**
   * @description: 计划id
   * @type: string
   * @default:
   **/
  plan_id?: string;

  /**
   * @description: 商品id
   * @type: string
   * @default:
   **/
  goods_id?: string;

  /**
   * @description: [{"word":"test","bid":200}]
   * @type: PddAdUnitCreateKeywordsRequestInterface[]
   * @default:
   *
   **/
  keywords: PddAdUnitCreateKeywordsRequestInterface[];

  /**
   * @description: 创意列表 [{"image_url":"123.jpg","title":"test"}]
   * @type: PddAdUnitCreateCreativeListRequestInterface[]
   * @default:
   *
   **/
  creative_list: PddAdUnitCreateCreativeListRequestInterface[];

  /**
   * @description: 通投单元出价，单位厘，出价需在0.10~99.0元区间内。展示推广必填
   * @type: string
   * @default:
   **/
  bid: string;
}

/**
 * @description [{"word":"test","bid":200}]
 * @default
 * @example
 **/
export interface PddAdUnitCreateKeywordsRequestInterface {
  /**
   * @description: 关键字出价（厘）范围需在0.10~99.0元区间内
   * @type: string
   * @default:
   **/
  bid?: string;

  /**
   * @description: 关键词
   * @type: string
   * @default:
   **/
  word?: string;
}

/**
 * @description 创意列表 [{"image_url":"123.jpg","title":"test"}]
 * @default
 * @example
 **/
export interface PddAdUnitCreateCreativeListRequestInterface {
  /**
   * @description: 图片地址
   * @type: string
   * @default:
   **/
  image_url?: string;

  /**
   * @description: 标题
   * @type: string
   * @default:
   **/
  title?: string;
}

/**
 * 接口名称：添加推广单元
 * 接口标识：pdd.ad.unit.create
 * 接口使用场景：添加推广单元，计划内单元上限20
 **/
export interface PddAdUnitCreateResponseInterface {
  /**
   * @description: 返回response
   * @type: PddAdUnitCreateAdUnitCreateResponseResponseInterface
   * @default:
   *
   **/
  ad_unit_create_response: PddAdUnitCreateAdUnitCreateResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/
export interface PddAdUnitCreateAdUnitCreateResponseResponseInterface {
  /**
   * @description: 单元id
   * @type: string
   * @default:
   **/
  unit_id: string;

  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_AD_UNIT_CREATE]: {
    requestInterface: PddAdUnitCreateRequestInterface;
    responseInterface: PddAdUnitCreateResponseInterface;
  };
}
