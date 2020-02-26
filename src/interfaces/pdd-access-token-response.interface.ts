import { PddCollectRequestInterface } from '../pddApi';

type keys = keyof PddCollectRequestInterface;

export interface PddAccessTokenResponseInterface {
  // 当前client有权限调接口
  scope: keys[];

  // 当前用户access_token内容
  access_token: string;

  // 过期时间
  expires_in: number;

  // 刷新的token
  refresh_token: string;

  // 当前用owner_id
  owner_id: string | number;

  // 当前用户名称
  owner_name: string;
}
