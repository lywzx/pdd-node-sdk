export const PDD_AD_CREATIVE_REPORT_GET = 'PDD_AD_CREATIVE_REPORT_GET';

/**
 * 接口名称：创意日报报表
 * 接口标识：pdd.ad.creative.report.get
 * 接口使用场景：创意日报报表：1、可以获取某个创意的分天历史数据；2、可获取最近30天的数据。
 **/

export interface PddAdCreativeReportGetRequestInterface {
  /**
   * @description: 开始时间 2018-01-01
   * @type: string
   * @default:
   **/
  begin_date?: string;

  /**
   * @description: 结束时间 2018-01-01
   * @type: string
   * @default:
   **/
  end_date?: string;

  /**
   * @description: 页面大小,默认100
   * @type: number
   * @default:
   **/
  page_size: number;

  /**
   * @description: 页面数,默认1
   * @type: number
   * @default:
   **/
  page_number: number;
}

/**
 * 接口名称：创意日报报表
 * 接口标识：pdd.ad.creative.report.get
 * 接口使用场景：创意日报报表：1、可以获取某个创意的分天历史数据；2、可获取最近30天的数据。
 **/

export interface PddAdCreativeReportGetResponseInterface {
  /**
   * @description: response
   * @type: PddAdCreativeReportGetAdCreativeReportGetResponseResponseInterface
   * @default:
   *
   **/
  ad_creative_report_get_response: PddAdCreativeReportGetAdCreativeReportGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/

export interface PddAdCreativeReportGetAdCreativeReportGetResponseResponseInterface {
  /**
   * @description: 数量
   * @type: number
   * @default:
   **/
  total: number;

  /**
   * @description: 结果
   * @type: PddAdCreativeReportGetAdCreativeReportGetResponseResultResponseInterface[]
   * @default:
   *
   **/
  result: PddAdCreativeReportGetAdCreativeReportGetResponseResultResponseInterface[];
}

/**
 * @description 结果
 * @default
 * @example
 **/

export interface PddAdCreativeReportGetAdCreativeReportGetResponseResultResponseInterface {
  /**
   * @description: 日期
   * @type: string
   * @default:
   **/
  date: string;

  /**
   * @description: 商家id
   * @type: string
   * @default:
   **/
  mall_id: string;

  /**
   * @description: 计划编号
   * @type: string
   * @default:
   **/
  plan_id: string;

  /**
   * @description: 计划名称
   * @type: string
   * @default:
   **/
  plan_name: string;

  /**
   * @description: 单元id
   * @type: string
   * @default:
   **/
  unit_id: string;

  /**
   * @description: 单元名称
   * @type: string
   * @default:
   **/
  unit_name: string;

  /**
   * @description: 创意id
   * @type: string
   * @default:
   **/
  creative_id: string;

  /**
   * @description: 点位编号
   * @type: string
   * @default:
   **/
  scene_info: string;

  /**
   * @description: 点位名称
   * @type: string
   * @default:
   **/
  idx: string;

  /**
   * @description: 展现量
   * @type: string
   * @default:
   **/
  impr_num: string;

  /**
   * @description: 点击量
   * @type: string
   * @default:
   **/
  click_num: string;

  /**
   * @description: 花费
   * @type: string
   * @default:
   **/
  spend: string;

  /**
   * @description: 成交订单数
   * @type: string
   * @default:
   **/
  pay_order_num: string;

  /**
   * @description: 成交订单金额
   * @type: string
   * @default:
   **/
  pay_gmv: string;

  /**
   * @description: CPT日消耗
   * @type: string
   * @default:
   **/
  plan_cpt_spend: string;

  /**
   * @description: 跳转URL
   * @type: string
   * @default:
   **/
  page_url: string;

  /**
   * @description: 素材URL
   * @type: string
   * @default:
   **/
  image_url: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_AD_CREATIVE_REPORT_GET]: {
    requestInterface: PddAdCreativeReportGetRequestInterface;
    responseInterface: PddAdCreativeReportGetResponseInterface;
  };
}
