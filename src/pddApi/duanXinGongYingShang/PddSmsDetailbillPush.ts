export const PDD_SMS_DETAILBILL_PUSH = 'pdd.sms.detailbill.push';

/**
 * 接口名称：短信明细回执
 * 接口标识：pdd.sms.detailbill.push
 * 接口使用场景：短信供应商明细回传
 **/
export interface PddSmsDetailbillPushRequestInterface {
  /**
   * @description: cmpp账号名
   * @type: string
   * @default:
   **/
  account?: string;

  /**
   * @description: 批次版本，每天数据必须属于同一个批次，如果重传可以批次号增加，平台以最大批次号为准。一般情况下，批次号固定数字，只有当某天上传数据错误需要弃用时，使用增加后的新批次号。
   * @type: string
   * @default:
   **/
  batch_version?: string;

  /**
   * @description: 数据日期(格式yyyy-MM-dd)
   * @type: string
   * @default:
   **/
  date?: string;

  /**
   * @description: 短信明细，detail的列表，list最大100
   * @type: PddSmsDetailbillPushDetailsRequestInterface[]
   * @default:
   *
   **/
  details?: PddSmsDetailbillPushDetailsRequestInterface[];
}

/**
 * @description 短信明细，detail的列表，list最大100
 * @default
 * @example
 **/
export interface PddSmsDetailbillPushDetailsRequestInterface {
  /**
   * @description: 短信下发时间(yyyy-MM-dd HH:mm:ss)
   * @type: string
   * @default:
   **/
  deliver_time?: string;

  /**
   * @description: 回执状态码，发送成功传DELIVRD
   * @type: string
   * @default:
   **/
  error_code?: string;

  /**
   * @description: 短信id,即SubmitResp.msgId,十进制表示
   * @type: string
   * @default:
   **/
  msg_id?: string;

  /**
   * @description: 短信提交时间(yyyy-MM-dd HH:mm:ss)
   * @type: string
   * @default:
   **/
  submit_time?: string;
}

/**
 * 接口名称：短信明细回执
 * 接口标识：pdd.sms.detailbill.push
 * 接口使用场景：短信供应商明细回传
 **/
export interface PddSmsDetailbillPushResponseInterface {
  /**
   * @description: response
   * @type: PddSmsDetailbillPushSmsDetailbillPushResposneResponseInterface
   * @default:
   *
   **/
  sms_detailbill_push_resposne: PddSmsDetailbillPushSmsDetailbillPushResposneResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddSmsDetailbillPushSmsDetailbillPushResposneResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
