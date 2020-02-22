export const PDD_SMS_VENDOR_COMPLAINT_CREATE = 'PDD_SMS_VENDOR_COMPLAINT_CREATE';

/**
 * 接口名称：投诉号码上传
 * 接口标识：pdd.sms.vendor.complaint.create
 * 接口使用场景：短信供应商投诉号码上传
 **/
export interface PddSmsVendorComplaintCreateRequestInterface {
  /**
   * @description: cmpp账号名
   * @type: string
   * @default:
   **/
  account?: string;

  /**
   * @description: 投诉时间(格式yyyy-MM-dd HH:mm:ss)
   * @type: string
   * @default:
   **/
  complaint_time?: string;

  /**
   * @description: 投诉次数
   * @type: number
   * @default:
   **/
  count?: number;

  /**
   * @description: 短信下发时间(格式yyyy-MM-dd HH:mm:ss)
   * @type: string
   * @default:
   **/
  deliver_time: string;

  /**
   * @description: 手机号码
   * @type: string
   * @default:
   **/
  mobile?: string;

  /**
   * @description: 归属运营商
   * @type: string
   * @default:
   **/
  operator?: string;

  /**
   * @description: 归属地省份
   * @type: string
   * @default:
   **/
  province?: string;

  /**
   * @description: 短信投诉内容(不超过500个字)
   * @type: string
   * @default:
   **/
  sms_content: string;
}

/**
 * 接口名称：投诉号码上传
 * 接口标识：pdd.sms.vendor.complaint.create
 * 接口使用场景：短信供应商投诉号码上传
 **/
export interface PddSmsVendorComplaintCreateResponseInterface {
  /**
   * @description:
   * @type: PddSmsVendorComplaintCreateResponseResponseInterface
   * @default:
   *
   **/
  response: PddSmsVendorComplaintCreateResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddSmsVendorComplaintCreateResponseResponseInterface {
  /**
   * @description:
   * @type: number
   * @default:
   **/
  error_code: number;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  error_msg: string;

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  success: boolean;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_SMS_VENDOR_COMPLAINT_CREATE]: {
    requestInterface: PddSmsVendorComplaintCreateRequestInterface;
    responseInterface: PddSmsVendorComplaintCreateResponseInterface;
  };
}
