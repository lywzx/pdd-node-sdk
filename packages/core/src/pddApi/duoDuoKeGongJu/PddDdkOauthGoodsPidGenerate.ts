export const PDD_DDK_OAUTH_GOODS_PID_GENERATE = 'pdd.ddk.oauth.goods.pid.generate';
export const PDD_DDK_OAUTH_GOODS_PID_GENERATE_RESPONSE_KEY = 'p_id_generate_response';

/**
 * 接口名称：多多进宝推广位创建接口
 * 接口标识：pdd.ddk.oauth.goods.pid.generate
 * 接口使用场景：创建多多进宝推广位
 **/
export interface PddDdkOauthGoodsPidGenerateRequestInterface {
  /**
   * @description: 要生成的推广位数量，默认为10，范围为：1~100
   * @type: string | number
   * @default:
   **/
  number: string | number;

  /**
   * @description: 推广位名称，例如["1","2"]
   * @type: string[]
   * @default:
   **/
  p_id_name_list?: string[];
}

/**
 * 接口名称：多多进宝推广位创建接口
 * 接口标识：pdd.ddk.oauth.goods.pid.generate
 * 接口使用场景：创建多多进宝推广位
 **/
export interface PddDdkOauthGoodsPidGenerateResponseInterface {
  /**
   * @description: response
   * @type: PddDdkOauthGoodsPidGeneratePIdGenerateResponseResponseInterface
   * @default:
   *
   **/
  p_id_generate_response: PddDdkOauthGoodsPidGeneratePIdGenerateResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddDdkOauthGoodsPidGeneratePIdGenerateResponseResponseInterface {
  /**
   * @description: 多多进宝推广位对象列表
   * @type: PddDdkOauthGoodsPidGeneratePIdGenerateResponsePIdListResponseInterface[]
   * @default:
   *
   **/
  p_id_list: PddDdkOauthGoodsPidGeneratePIdGenerateResponsePIdListResponseInterface[];

  /**
   * @description: PID剩余数量
   * @type: number
   * @default:
   **/
  remain_pid_count: number;
}

/**
 * @description 多多进宝推广位对象列表
 * @default
 * @example
 **/
export interface PddDdkOauthGoodsPidGeneratePIdGenerateResponsePIdListResponseInterface {
  /**
   * @description: 推广位创建时间
   * @type: string | number
   * @default:
   **/
  create_time: string | number;

  /**
   * @description: 推广位名称
   * @type: string
   * @default:
   **/
  pid_name: string;

  /**
   * @description: 调用方推广位ID
   * @type: string
   * @default:
   **/
  p_id: string;
}
