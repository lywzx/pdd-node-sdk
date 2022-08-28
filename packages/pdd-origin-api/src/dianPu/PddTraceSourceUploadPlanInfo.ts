export const PDD_TRACE_SOURCE_UPLOAD_PLAN_INFO = 'pdd.trace.source.upload.plan.info';

/**
 * 接口名称：溯源服务商上传正品溯源粘贴计划
 * 接口标识：pdd.trace.source.upload.plan.info
 * 接口使用场景：溯源服务商上传正品溯源粘贴计划, 用于正品溯源功能
 **/
export interface PddTraceSourceUploadPlanInfoRequestInterface {
  /**
   * @description: 到港日期
   * @type: string
   * @default:
   **/
  arrive_time?: string;

  /**
   * @description: 提单号
   * @type: string
   * @default:
   **/
  bill_no?: string;

  /**
   * @description: 报检日期
   * @type: string
   * @default:
   **/
  ciq_date?: string;

  /**
   * @description: 报检单号
   * @type: string
   * @default:
   **/
  ciq_no?: string;

  /**
   * @description: 境内收发货人
   * @type: string
   * @default:
   **/
  dealer_org?: string;

  /**
   * @description: 申报单位
   * @type: string
   * @default:
   **/
  declare_org: string;

  /**
   * @description: 启运地
   * @type: string
   * @default:
   **/
  desp_port_name: string;

  /**
   * @description: 报关日期
   * @type: string
   * @default:
   **/
  entry_date: string;

  /**
   * @description: 报关单号
   * @type: string
   * @default:
   **/
  entry_no: string;

  /**
   * @description: 溯源码粘贴计划(商品维度)
   * @type: PddTraceSourceUploadPlanInfoGoodsRequestInterface[]
   * @default:
   *
   **/
  goods: PddTraceSourceUploadPlanInfoGoodsRequestInterface[];

  /**
   * @description: 清单申报日期
   * @type: string
   * @default:
   **/
  list_date?: string;

  /**
   * @description: 核注清单编号
   * @type: string
   * @default:
   **/
  list_no?: string;

  /**
   * @description: 装货港
   * @type: string
   * @default:
   **/
  load_port: string;

  /**
   * @description: 粘贴计划所属店铺ID
   * @type: string | number
   * @default:
   **/
  mall_id: string | number;

  /**
   * @description: 粘贴计划所属店铺名
   * @type: string
   * @default:
   **/
  mall_name: string;

  /**
   * @description: 粘贴计划单激活时间
   * @type: string
   * @default:
   **/
  plan_active_time: string;

  /**
   * @description: 粘贴计划单创建时间
   * @type: string
   * @default:
   **/
  plan_created_time: string;

  /**
   * @description: 粘贴计划单编号
   * @type: string
   * @default:
   **/
  plan_no: string;

  /**
   * @description: 进口口岸
   * @type: string
   * @default:
   **/
  port: string;

  /**
   * @description: 运输方式
   * @type: string
   * @default:
   **/
  transport_mode: string;

  /**
   * @description: 粘贴计划单所属保税仓名称
   * @type: string
   * @default:
   **/
  warehouse_name: string;
}

/**
 * @description 溯源码粘贴计划(商品维度)
 * @default
 * @example
 **/
export interface PddTraceSourceUploadPlanInfoGoodsRequestInterface {
  /**
   * @description: 防伪溯源码粘贴数量
   * @type: string | number
   * @default:
   **/
  code_amount: string | number;

  /**
   * @description: 防伪溯源码结束顺序号
   * @type: string
   * @default:
   **/
  end_serial_no: string;

  /**
   * @description: 商品ID
   * @type: string | number
   * @default:
   **/
  goods_id: string | number;

  /**
   * @description: 商品备案图片
   * @type: string
   * @default:
   **/
  goods_image_url?: string;

  /**
   * @description: 商品备案名称
   * @type: string
   * @default:
   **/
  goods_name: string;

  /**
   * @description: 原产国(地)
   * @type: string
   * @default:
   **/
  goods_origin: string;

  /**
   * @description: 商品备案规格型号
   * @type: string
   * @default:
   **/
  goods_property: string;

  /**
   * @description: 商品规格
   * @type: string
   * @default:
   **/
  goods_sku_no: string;

  /**
   * @description: Hs编码
   * @type: string
   * @default:
   **/
  hs_code: string;

  /**
   * @description: Hs名称
   * @type: string
   * @default:
   **/
  hs_name: string;

  /**
   * @description: 防伪溯源码起始顺序号
   * @type: string
   * @default:
   **/
  start_serial_no: string;
}

/**
 * 接口名称：溯源服务商上传正品溯源粘贴计划
 * 接口标识：pdd.trace.source.upload.plan.info
 * 接口使用场景：溯源服务商上传正品溯源粘贴计划, 用于正品溯源功能
 **/
export interface PddTraceSourceUploadPlanInfoResponseInterface {
  /**
   * @description:
   * @type: PddTraceSourceUploadPlanInfoResponseResponseInterface
   * @default:
   *
   **/
  response: PddTraceSourceUploadPlanInfoResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddTraceSourceUploadPlanInfoResponseResponseInterface {
  /**
   * @description:
   * @type: number
   * @default:
   **/
  status: number;
}
