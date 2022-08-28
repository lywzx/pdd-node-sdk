export const PDD_DDK_STATISTICS_DATA_QUERY = 'pdd.ddk.statistics.data.query';
export const PDD_DDK_STATISTICS_DATA_QUERY_RESPONSE_KEY = 'statistics_data_response';

/**
 * 接口名称：多多进宝数据统计查询接口
 * 接口标识：pdd.ddk.statistics.data.query
 * 接口使用场景：本接口用于查询特定活动数据，仅限特定渠道可用。
 **/
export interface PddDdkStatisticsDataQueryRequestInterface {
  /**
   * @description: 分页数，默认值: 1
   * @type: number
   * @default:
   **/
  page?: number;

  /**
   * @description: 每页结果数，默认值: 20
   * @type: number
   * @default:
   **/
  page_size?: number;

  /**
   * @description: 周期类型: 1-每7天，2-自然月
   * @type: number
   * @default:
   **/
  period_type: number;

  /**
   * @description: 数据类型: 1-增量补贴数据
   * @type: number
   * @default:
   **/
  statistics_type: number;

  /**
   * @description: 查询时间点，格式: "yyyy-MM-dd"。period_type为1时，查询时间点前7天的数据；period_type为2时，查询时间点所在自然月的数据。
   * @type: string
   * @default:
   **/
  time: string;
}

/**
 * 接口名称：多多进宝数据统计查询接口
 * 接口标识：pdd.ddk.statistics.data.query
 * 接口使用场景：本接口用于查询特定活动数据，仅限特定渠道可用。
 **/
export interface PddDdkStatisticsDataQueryResponseInterface {
  /**
   * @description:
   * @type: PddDdkStatisticsDataQueryStatisticsDataResponseResponseInterface
   * @default:
   *
   **/
  statistics_data_response: PddDdkStatisticsDataQueryStatisticsDataResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddDdkStatisticsDataQueryStatisticsDataResponseResponseInterface {
  /**
   * @description:
   * @type: PddDdkStatisticsDataQueryStatisticsDataResponseDataListResponseInterface[]
   * @default:
   *
   **/
  data_list: PddDdkStatisticsDataQueryStatisticsDataResponseDataListResponseInterface[];
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddDdkStatisticsDataQueryStatisticsDataResponseDataListResponseInterface {
  /**
   * @description: 自定义参数，为链接打上自定义标签；自定义参数最长限制64个字节；格式为： {"uid":"11111","sid":"22222"} ，其中 uid 用户唯一标识，可自行加密后传入，每个用户仅且对应一个标识，必填； sid 上下文信息标识，例如sessionId等，非必填。该json字符串中也可以加入其他自定义的key。（如果使用GET请求，请使用URLEncode处理参数）
   * @type: string
   * @default:
   **/
  custom_parameters: string;

  /**
   * @description: 结束时间，格式: "yyyy-MM-dd"
   * @type: string
   * @default:
   **/
  end_time: string;

  /**
   * @description: GMV,单位为分
   * @type: string | number
   * @default:
   **/
  order_amount: string | number;

  /**
   * @description: 订单数
   * @type: string | number
   * @default:
   **/
  order_num: string | number;

  /**
   * @description: 推广位ID
   * @type: string
   * @default:
   **/
  p_id: string;

  /**
   * @description: 开始时间，格式: "yyyy-MM-dd"
   * @type: string
   * @default:
   **/
  start_time: string;
}
