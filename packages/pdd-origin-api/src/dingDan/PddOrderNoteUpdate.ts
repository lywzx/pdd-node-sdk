export const PDD_ORDER_NOTE_UPDATE = 'pdd.order.note.update';

/**
 * 接口名称：编辑商家订单备注
 * 接口标识：pdd.order.note.update
 * 接口使用场景：编辑商家订单备注信息
 **/
export interface PddOrderNoteUpdateRequestInterface {
  /**
   * @description: 订单备注
   * @type: string
   * @default:
   **/
  note: string;

  /**
   * @description: 备注标记：1-红色，2-黄色，3-绿色，4-蓝色，5-紫色
   * @type: number
   * @default:
   **/
  tag?: number;

  /**
   * @description: 标记名称；长度最大为3个字符
   * @type: string
   * @default:
   **/
  tag_name?: string;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;
}

/**
 * 接口名称：编辑商家订单备注
 * 接口标识：pdd.order.note.update
 * 接口使用场景：编辑商家订单备注信息
 **/
export interface PddOrderNoteUpdateResponseInterface {
  /**
   * @description: 请求响应
   * @type: PddOrderNoteUpdateResponseResponseInterface
   * @default:
   *
   **/
  response: PddOrderNoteUpdateResponseResponseInterface;
}

/**
 * @description 请求响应
 * @default
 * @example
 **/
export interface PddOrderNoteUpdateResponseResponseInterface {
  /**
   * @description: 是否请求成功
   * @type: boolean
   * @default:
   **/
  success: boolean;

  /**
   * @description: 错误码
   * @type: number
   * @default:
   **/
  error_code: number;

  /**
   * @description: 错误信息
   * @type: string
   * @default:
   **/
  error_msg: string;
}
