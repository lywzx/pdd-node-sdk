export const PDD_CLOUD_ISV_PAGE_CODE = 'pdd.cloud.isv.page.code';

/**
 * 接口名称：开平ISV前端插件检测页面code获取接口
 * 接口标识：pdd.cloud.isv.page.code
 * 接口使用场景：获取植入ISV的前端检测插件的初始化code。
 * 用于ISV前端插件检测
 * 状态及接口管理信息
 **/
export interface PddCloudIsvPageCodeRequestInterface {
  /**
   * @description: 用户关联的拼多多商家ID列表
   * @type: string[]
   * @default:
   **/
  mallIdList: string[];

  /**
   * @description: 用户前端请求的HTTP referer, 需要满足标准URL格式. 如果为C/S架构客户端,填client, 如果为移动端,填mobile
   * @type: string
   * @default:
   **/
  httpReferer: string;

  /**
   * @description: ISV权限体系里的商家用户ID
   * @type: string
   * @default:
   **/
  userId: string;
}

/**
 * 接口名称：开平ISV前端插件检测页面code获取接口
 * 接口标识：pdd.cloud.isv.page.code
 * 接口使用场景：获取植入ISV的前端检测插件的初始化code。
 * 用于ISV前端插件检测
 * 状态及接口管理信息
 **/
export interface PddCloudIsvPageCodeResponseInterface {
  /**
   * @description:
   * @type: PddCloudIsvPageCodeResponseResponseInterface
   * @default:
   *
   **/
  response: PddCloudIsvPageCodeResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example 无
 **/
export interface PddCloudIsvPageCodeResponseResponseInterface {
  /**
   * @description: 错误码
   * @type: number
   * @default:
   **/
  errorCode: number;

  /**
   * @description: 服务端错误
   * @type: string
   * @default:
   **/
  errorMessage: string;

  /**
   * @description: 插件token
   * @type: string
   * @default:
   **/
  pageCode: string;

  /**
   * @description: 失败
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
