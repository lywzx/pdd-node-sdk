export const PDD_LOGISTICS_ORDERTRACE_GET = 'pdd.logistics.ordertrace.get';

export const PDD_LOGISTICS_ORDERTRACE_GET_LIMITERS = [
  {
    limiterLevel: 4,
    timeRange: 20,
    times: 4800,
    callSourceType: 0,
  },
];

/**
 * 接口名称：轨迹查询接口
 * 接口标识：pdd.logistics.ordertrace.get
 * 接口使用场景：查询单个运单详情
 **/
export interface PddLogisticsOrdertraceGetRequestInterface {
  /**
   * @description: 1
   * @type: string
   * @default:
   **/
  company_code?: string;

  /**
   * @description: 1
   * @type: string
   * @default:
   **/
  mail_no?: string;
}

/**
 * 接口名称：轨迹查询接口
 * 接口标识：pdd.logistics.ordertrace.get
 * 接口使用场景：查询单个运单详情
 **/
export interface PddLogisticsOrdertraceGetResponseInterface {
  /**
   * @description: response
   * @type: PddLogisticsOrdertraceGetLogisticsOrdertraceGetResposneResponseInterface
   * @default:
   *
   **/
  logistics_ordertrace_get_resposne: PddLogisticsOrdertraceGetLogisticsOrdertraceGetResposneResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddLogisticsOrdertraceGetLogisticsOrdertraceGetResposneResponseInterface {
  /**
   * @description: 返回列表
   * @type: PddLogisticsOrdertraceGetLogisticsOrdertraceGetResposneTraceListResponseInterface[]
   * @default:
   *
   **/
  trace_list: PddLogisticsOrdertraceGetLogisticsOrdertraceGetResposneTraceListResponseInterface[];
}

/**
 * @description 返回列表
 * @default
 * @example
 **/
export interface PddLogisticsOrdertraceGetLogisticsOrdertraceGetResposneTraceListResponseInterface {
  /**
   * @description: 节点说明 ，指明当前节点揽收、派送，签收。
   * @type: string
   * @default:
   **/
  action: string;

  /**
   * @description: 描述
   * @type: string
   * @default:
   **/
  desc: string;

  /**
   * @description: 地址地一
   * @type: string
   * @default:
   **/
  node_description: string;

  /**
   * @description: 状态描述
   * @type: string
   * @default:
   **/
  status_desc: string;

  /**
   * @description: 状态发生的时间
   * @type: string
   * @default:
   **/
  status_time: string;

  /**
   * @description: 时间。。
   * @type: string
   * @default:
   **/
  time: string;
}
