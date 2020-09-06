export const PDD_POP_AUTH_TOKEN_CREATE = 'pdd.pop.auth.token.create';
export const PDD_POP_AUTH_TOKEN_CREATE_RESPONSE_KEY = 'pop_auth_token_create_response';

/**
 * 接口名称：获取Access Token
 * 接口标识：pdd.pop.auth.token.create
 * 接口使用场景：用户通过code换获取access_token
 **/
export interface PddPopAuthTokenCreateRequestInterface {
  /**
   * @description: 授权code，grantType==authorization_code 时需要
   * @type: string
   * @default:
   **/
  code: string;
}

/**
 * 接口名称：获取Access Token
 * 接口标识：pdd.pop.auth.token.create
 * 接口使用场景：用户通过code换获取access_token
 **/
export interface PddPopAuthTokenCreateResponseInterface {
  /**
   * @description:
   * @type: PddPopAuthTokenCreatePopAuthTokenCreateResponseResponseInterface
   * @default:
   *
   **/
  pop_auth_token_create_response: PddPopAuthTokenCreatePopAuthTokenCreateResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddPopAuthTokenCreatePopAuthTokenCreateResponseResponseInterface {
  /**
   * @description: access_token
   * @type: string
   * @default:
   **/
  access_token: string;

  /**
   * @description: access_token过期时间点
   * @type: string | number
   * @default:
   **/
  expires_at: string | number;

  /**
   * @description: access_token过期时间段，10（表示10秒后过期）
   * @type: number
   * @default:
   **/
  expires_in: number;

  /**
   * @description: 商家店铺id
   * @type: string
   * @default:
   **/
  owner_id: string;

  /**
   * @description: 商家账号名称
   * @type: string
   * @default:
   **/
  owner_name: string;

  /**
   * @description: r1级别API或字段的访问过期时间点
   * @type: string | number
   * @default:
   **/
  r1_expires_at: string | number;

  /**
   * @description: r1级别API或字段的访问过期时间；	 10（表示10秒后过期）
   * @type: number
   * @default:
   **/
  r1_expires_in: number;

  /**
   * @description: r2级别API或字段的访问过期时间点
   * @type: string | number
   * @default:
   **/
  r2_expires_at: string | number;

  /**
   * @description: r2级别API或字段的访问过期时间；10（表示10秒后过期）
   * @type: number
   * @default:
   **/
  r2_expires_in: number;

  /**
   * @description: refresh token，可用来刷新access_token
   * @type: string
   * @default:
   **/
  refresh_token: string;

  /**
   * @description: Refresh token过期时间点
   * @type: string | number
   * @default:
   **/
  refresh_token_expires_at: string | number;

  /**
   * @description: refresh_token过期时间段，10表示10秒后过期
   * @type: number
   * @default:
   **/
  refresh_token_expires_in: number;

  /**
   * @description: 接口列表
   * @type: string[]
   * @default:
   **/
  scope: string[];

  /**
   * @description: w1级别API或字段的访问过期时间点
   * @type: string | number
   * @default:
   **/
  w1_expires_at: string | number;

  /**
   * @description: w1级别API或字段的访问过期时间；	 10（表示10秒后过期）
   * @type: number
   * @default:
   **/
  w1_expires_in: number;

  /**
   * @description: w2级别API或字段的访问过期时间点
   * @type: string | number
   * @default:
   **/
  w2_expires_at: string | number;

  /**
   * @description: w2级别API或字段的访问过期时间；10（表示10秒后过期）
   * @type: number
   * @default:
   **/
  w2_expires_in: number;
}
