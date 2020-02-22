export const PDD_CLOUDPRINT_CMDPRINT_RENDER = 'PDD_CLOUDPRINT_CMDPRINT_RENDER';

/**
 * 接口名称：生成打印机渲染命令（通过打印机命令打印）
 * 接口标识：pdd.cloudprint.cmdprint.render
 * 接口使用场景：isv 进行无线打印，需要将渲染数据传给打印机，通过生成打印机命令的方式能够最大限度的减少移动设备和打印机之间通信数据量。
 **/
export interface PddCloudprintCmdprintRenderRequestInterface {
  /**
   * @description: request
   * @type: PddCloudprintCmdprintRenderRequestRequestInterface
   * @default:
   *
   **/
  request?: PddCloudprintCmdprintRenderRequestRequestInterface;
}

/**
 * @description request
 * @default
 * @example
 **/
export interface PddCloudprintCmdprintRenderRequestRequestInterface {
  /**
   * @description: 客户端id
   * @type: string
   * @default:
   **/
  client_side_id?: string;

  /**
   * @description: 客户端类型
   * @type: string
   * @default:
   **/
  client_type?: string;

  /**
   * @description: 打印配置
   * @type: PddCloudprintCmdprintRenderRequestConfigRequestInterface
   * @default:
   *
   **/
  config?: PddCloudprintCmdprintRenderRequestConfigRequestInterface;

  /**
   * @description: 需要打印的文档，包括模板地址，打印数据
   * @type: PddCloudprintCmdprintRenderRequestDocumentRequestInterface
   * @default:
   *
   **/
  document?: PddCloudprintCmdprintRenderRequestDocumentRequestInterface;

  /**
   * @description: 打印机名称
   * @type: string
   * @default:
   **/
  printer_name?: string;

  /**
   * @description: 枚举值：CPCL、TSPL
   * @type: string
   * @default:
   **/
  print_command_type?: string;
}

/**
 * @description 打印配置
 * @default
 * @example
 **/
export interface PddCloudprintCmdprintRenderRequestConfigRequestInterface {
  /**
   * @description: 水平偏移
   * @type: string
   * @default:
   **/
  horizontal_offset: string;

  /**
   * @description: 是否打印下联logo
   * @type: boolean
   * @default:
   **/
  need_bottom_logo: boolean;

  /**
   * @description: 是否打印中联logo
   * @type: boolean
   * @default:
   **/
  need_middle_logo: boolean;

  /**
   * @description: 是否打印上联logo
   * @type: boolean
   * @default:
   **/
  need_top_logo: boolean;

  /**
   * @description: 打印方向 normal-正常 reverse-翻转
   * @type: string
   * @default:
   **/
  orientation?: string;

  /**
   * @description: 垂直偏移
   * @type: string
   * @default:
   **/
  vertical_offset: string;
}

/**
 * @description 需要打印的文档，包括模板地址，打印数据
 * @default
 * @example
 **/
export interface PddCloudprintCmdprintRenderRequestDocumentRequestInterface {
  /**
   * @description: 包含的区域列表。对于有自定义区的文档，content会包含两条，即第一条是标准模板区域内容、第二条是自定义区域内容
   * @type: PddCloudprintCmdprintRenderRequestDocumentContentsRequestInterface[]
   * @default:
   *
   **/
  contents?: PddCloudprintCmdprintRenderRequestDocumentContentsRequestInterface[];
}

/**
 * @description 包含的区域列表。对于有自定义区的文档，content会包含两条，即第一条是标准模板区域内容、第二条是自定义区域内容
 * @default
 * @example
 **/
export interface PddCloudprintCmdprintRenderRequestDocumentContentsRequestInterface {
  /**
   * @description: 附加数据（用于修改数据）例如：{ sender:{ address:{ detail:蒋村街道西溪诚园小区2-1-101 } } }
   * @type: string
   * @default:
   **/
  add_data: string;

  /**
   * @description: 是否获取加密数据
   * @type: boolean
   * @default:
   **/
  encrypted: boolean;

  /**
   * @description: 打印数据
   * @type: string
   * @default:
   **/
  print_data?: string;

  /**
   * @description: 数据签名
   * @type: string
   * @default:
   **/
  signature: string;

  /**
   * @description: 模板url
   * @type: string
   * @default:
   **/
  template_url?: string;

  /**
   * @description: 加密数据使用秘钥版本
   * @type: string
   * @default:
   **/
  ver: string;
}

/**
 * 接口名称：生成打印机渲染命令（通过打印机命令打印）
 * 接口标识：pdd.cloudprint.cmdprint.render
 * 接口使用场景：isv 进行无线打印，需要将渲染数据传给打印机，通过生成打印机命令的方式能够最大限度的减少移动设备和打印机之间通信数据量。
 **/
export interface PddCloudprintCmdprintRenderResponseInterface {
  /**
   * @description: response
   * @type: PddCloudprintCmdprintRenderCloudprintCmdprintRenderResponseResponseInterface
   * @default:
   *
   **/
  cloudprint_cmdprint_render_response: PddCloudprintCmdprintRenderCloudprintCmdprintRenderResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddCloudprintCmdprintRenderCloudprintCmdprintRenderResponseResponseInterface {
  /**
   * @description: 指令集内容串
   * @type: string
   * @default:
   **/
  cmd_content: string;

  /**
   * @description: 指令集编码方式：origin-原串；gzip-采用gzip压缩并使用base64编码
   * @type: string
   * @default:
   **/
  cmd_encoding: string;

  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  success: boolean;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_CLOUDPRINT_CMDPRINT_RENDER]: {
    requestInterface: PddCloudprintCmdprintRenderRequestInterface;
    responseInterface: PddCloudprintCmdprintRenderResponseInterface;
  };
}
