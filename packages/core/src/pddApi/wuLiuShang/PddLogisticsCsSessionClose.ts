export const PDD_LOGISTICS_CS_SESSION_CLOSE = 'pdd.logistics.cs.session.close';
export const PDD_LOGISTICS_CS_SESSION_CLOSE_RESPONSE_KEY = 'logistics_cs_session_close_response';

/**
 * 接口名称：客服关闭会话接口
 * 接口标识：pdd.logistics.cs.session.close
 * 接口使用场景：该接口用于客服关闭会话
 **/
export interface PddLogisticsCsSessionCloseRequestInterface {
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
}

/**
 * 接口名称：客服关闭会话接口
 * 接口标识：pdd.logistics.cs.session.close
 * 接口使用场景：该接口用于客服关闭会话
 **/
export interface PddLogisticsCsSessionCloseResponseInterface {
  /**
   * @description: response
   * @type: PddLogisticsCsSessionCloseLogisticsCsSessionCloseResponseResponseInterface
   * @default:
   *
   **/
  logistics_cs_session_close_response: PddLogisticsCsSessionCloseLogisticsCsSessionCloseResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddLogisticsCsSessionCloseLogisticsCsSessionCloseResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}
