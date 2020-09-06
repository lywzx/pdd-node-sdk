export const PDD_LOGISTICS_CS_SESSION_START = 'pdd.logistics.cs.session.start';
export const PDD_LOGISTICS_CS_SESSION_START_RESPONSE_KEY = 'logistics_cs_session_start_response';

/**
 * 接口名称：物流客服系统创建同步会话状态接口
 * 接口标识：pdd.logistics.cs.session.start
 * 接口使用场景：该接口用于物流客服系统创建以及同步会话状态。
 **/
export interface PddLogisticsCsSessionStartRequestInterface {
  /**
   * @description: pdd会话id
   * @type: string
   * @default:
   **/
  session_id: string;

  /**
   * @description: 物流公司会话id
   * @type: string
   * @default:
   **/
  wp_session_id: string;

  /**
   * @description: 样式YYYY-MM-DD HH:MM:SS
   * @type: string
   * @default:
   **/
  action_time: string;

  /**
   * @description: 可选值：1：已分配 2：排队中 3：分配异常
   * @type: number
   * @default:
   **/
  biz_type: number;

  /**
   * @description: 客服id，biz_type为1时必填
   * @type: string
   * @default:
   **/
  dealer_id?: string;

  /**
   * @description: 队列id，biz_type为1时必填
   * @type: string
   * @default:
   **/
  queue_id?: string;

  /**
   * @description: 网点名，biz_type为1时必填
   * @type: string
   * @default:
   **/
  queue_name?: string;

  /**
   * @description: 排队位置，biz_type为2时必填
   * @type: number
   * @default:
   **/
  queue_index?: number;

  /**
   * @description: 分配遇到的异常，示例：33222，biz_type为3时不为空
   * @type: number
   * @default:
   **/
  exception_code?: number;

  /**
   * @description: 物流客服系统遇到的异常，biz_type为3时不为空
   * @type: string
   * @default:
   **/
  exception_msg?: string;

  /**
   * @description: 接待的网点地址，biz_type为1时必填，示例: ”河南省”
   * @type: string
   * @default:
   **/
  queue_address?: string;
}

/**
 * 接口名称：物流客服系统创建同步会话状态接口
 * 接口标识：pdd.logistics.cs.session.start
 * 接口使用场景：该接口用于物流客服系统创建以及同步会话状态。
 **/
export interface PddLogisticsCsSessionStartResponseInterface {
  /**
   * @description: response
   * @type: PddLogisticsCsSessionStartLogisticsCsSessionStartResponseResponseInterface
   * @default:
   *
   **/
  logistics_cs_session_start_response: PddLogisticsCsSessionStartLogisticsCsSessionStartResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddLogisticsCsSessionStartLogisticsCsSessionStartResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
