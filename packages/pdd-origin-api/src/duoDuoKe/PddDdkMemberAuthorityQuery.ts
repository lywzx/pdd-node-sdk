export const PDD_DDK_MEMBER_AUTHORITY_QUERY = 'pdd.ddk.member.authority.query';
export const PDD_DDK_MEMBER_AUTHORITY_QUERY_RESPONSE_KEY = 'authority_query_response';

/**
 * 接口名称：查询是否绑定备案
 * 接口标识：pdd.ddk.member.authority.query
 * 接口使用场景：通过pid和自定义参数来查询是否已经绑定备案
 **/
export interface PddDdkMemberAuthorityQueryRequestInterface {
  /**
   * @description: 自定义参数，为链接打上自定义标签；自定义参数最长限制64个字节；格式为：  {"uid":"11111","sid":"22222"} ，其中 uid 用户唯一标识，可自行加密后传入，每个用户仅且对应一个标识，必填； sid 上下文信息标识，例如sessionId等，非必填。该json字符串中也可以加入其他自定义的key。（如果使用GET请求，请使用URLEncode处理参数）
   * @type: string
   * @default:
   **/
  custom_parameters?: string;

  /**
   * @description: 推广位id
   * @type: string
   * @default:
   **/
  pid?: string;
}

/**
 * 接口名称：查询是否绑定备案
 * 接口标识：pdd.ddk.member.authority.query
 * 接口使用场景：通过pid和自定义参数来查询是否已经绑定备案
 **/
export interface PddDdkMemberAuthorityQueryResponseInterface {
  /**
   * @description: 查询结果
   * @type: PddDdkMemberAuthorityQueryAuthorityQueryResponseResponseInterface
   * @default:
   *
   **/
  authority_query_response: PddDdkMemberAuthorityQueryAuthorityQueryResponseResponseInterface;
}

/**
 * @description 查询结果
 * @default
 * @example
 **/
export interface PddDdkMemberAuthorityQueryAuthorityQueryResponseResponseInterface {
  /**
   * @description: 1-已绑定；0-未绑定
   * @type: number
   * @default:
   **/
  bind: number;
}
