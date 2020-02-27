export const PDD_AD_KEYWORD_DAILY_REPORT = 'pdd.ad.keyword.daily.report';

/**
 * 接口名称：关键词历史报表数据， 一次性导出分天详情
 * 接口标识：pdd.ad.keyword.daily.report
 * 接口使用场景：关键词历史报表数据，支持一次性导出某单元下所有关键词的分天详情
 **/
export interface PddAdKeywordDailyReportRequestInterface {
  /**
   * @description:
   * @type: string | number
   * @default:
   **/
  unit_id: string | number;

  /**
   * @description: 0:搜索广告
   * @type: number
   * @default:
   **/
  scene_type: number;

  /**
   * @description: 格式："yyyy-MM-dd" 时区："GMT+8"
   * @type: string
   * @default:
   **/
  begin_date: string;

  /**
   * @description: 格式："yyyy-MM-dd" 时区："GMT+8"
   * @type: string
   * @default:
   **/
  end_date: string;
}

/**
 * 接口名称：关键词历史报表数据， 一次性导出分天详情
 * 接口标识：pdd.ad.keyword.daily.report
 * 接口使用场景：关键词历史报表数据，支持一次性导出某单元下所有关键词的分天详情
 **/
export interface PddAdKeywordDailyReportResponseInterface {
  /**
   * @description: 结果excel表格链接
   * @type: string
   * @default:
   **/
  open_api_response: string;
}
