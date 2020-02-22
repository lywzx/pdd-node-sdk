export const PDD_TIME_GET = 'PDD_TIME_GET';

/**
 * 接口名称：获取拼多多系统时间
 * 接口标识：pdd.time.get
 * 接口使用场景：获取拼多多系统时间
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddTimeGetRequestInterface {}

/**
 * 接口名称：获取拼多多系统时间
 * 接口标识：pdd.time.get
 * 接口使用场景：获取拼多多系统时间
 **/
export interface PddTimeGetResponseInterface {
  /**
   * @description: response
   * @type: PddTimeGetTimeGetResponseResponseInterface
   * @default:
   *
   **/
  time_get_response: PddTimeGetTimeGetResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddTimeGetTimeGetResponseResponseInterface {
  /**
   * @description: 拼多多系统时间
   * @type: string
   * @default:
   **/
  time: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_TIME_GET]: {
    requestInterface: PddTimeGetRequestInterface;
    responseInterface: PddTimeGetResponseInterface;
  };
}
