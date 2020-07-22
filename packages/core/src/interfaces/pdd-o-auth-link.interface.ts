import { OAuthType } from '../constant';

export interface PddOAuthLinkInterface {
  // 链接的类型
  type: OAuthType;

  // 生成之后的链接地址
  url: string;
}
