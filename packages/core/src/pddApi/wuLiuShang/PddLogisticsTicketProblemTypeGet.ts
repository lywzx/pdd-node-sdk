export const PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET = 'pdd.logistics.ticket.problem.type.get';
export const PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET_RESPONSE_KEY = 'logistics_problem_type_get_response';

/**
 * 接口名称：快递公司工单问题类型列表接口
 * 接口标识：pdd.logistics.ticket.problem.type.get
 * 接口使用场景：快递公司通过此接口同步多多所有物流工单问题类型
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddLogisticsTicketProblemTypeGetRequestInterface {}

/**
 * 接口名称：快递公司工单问题类型列表接口
 * 接口标识：pdd.logistics.ticket.problem.type.get
 * 接口使用场景：快递公司通过此接口同步多多所有物流工单问题类型
 **/
export interface PddLogisticsTicketProblemTypeGetResponseInterface {
  /**
   * @description: 返回response
   * @type: PddLogisticsTicketProblemTypeGetLogisticsProblemTypeGetResponseResponseInterface
   * @default:
   *
   **/
  logistics_problem_type_get_response: PddLogisticsTicketProblemTypeGetLogisticsProblemTypeGetResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/
export interface PddLogisticsTicketProblemTypeGetLogisticsProblemTypeGetResponseResponseInterface {
  /**
   * @description: 问题类型list
   * @type: PddLogisticsTicketProblemTypeGetLogisticsProblemTypeGetResponseLogisticsProblemTypeListResponseInterface[]
   * @default:
   *
   **/
  logistics_problem_type_list: PddLogisticsTicketProblemTypeGetLogisticsProblemTypeGetResponseLogisticsProblemTypeListResponseInterface[];
}

/**
 * @description 问题类型list
 * @default
 * @example
 **/
export interface PddLogisticsTicketProblemTypeGetLogisticsProblemTypeGetResponseLogisticsProblemTypeListResponseInterface {
  /**
   * @description: 问题类型描述
   * @type: string
   * @default:
   **/
  type_desc: string;

  /**
   * @description: 问题类型id
   * @type: string | number
   * @default:
   **/
  id: string | number;
}
