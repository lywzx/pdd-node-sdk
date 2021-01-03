export const PDD_OVERSEA_DECLARATION_FAIL_NOTIFY = 'pdd.oversea.declaration.fail.notify';
export const PDD_OVERSEA_DECLARATION_FAIL_NOTIFY_RESPONSE_KEY = 'notify_exceeded_response';

/**
 * 接口名称：同步海淘订单申报失败情况
 * 接口标识：pdd.oversea.declaration.fail.notify
 * 接口使用场景：用于服务商向平台同步海淘订单申报失败和具体原因
 **/
export interface PddOverseaDeclarationFailNotifyRequestInterface {
  /**
   * @description: 1=超过购买额度
   * @type: number
   * @default:
   **/
  fail_reason: number;

  /**
   * @description: 订单号
   * @type: string
   * @default:
   **/
  order_sn: string;
}

/**
 * 接口名称：同步海淘订单申报失败情况
 * 接口标识：pdd.oversea.declaration.fail.notify
 * 接口使用场景：用于服务商向平台同步海淘订单申报失败和具体原因
 **/
export interface PddOverseaDeclarationFailNotifyResponseInterface {
  /**
   * @description:
   * @type: PddOverseaDeclarationFailNotifyNotifyExceededResponseResponseInterface
   * @default:
   *
   **/
  notify_exceeded_response: PddOverseaDeclarationFailNotifyNotifyExceededResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddOverseaDeclarationFailNotifyNotifyExceededResponseResponseInterface {
  /**
   * @description: true=处理成功
   * @type: boolean
   * @default:
   **/
  result: boolean;
}
