import { OAuthType } from '../constant';
import { AxiosRequestConfig } from 'axios';

export interface PddClientOptionsInterface {
  // 拼多多应用client_id
  clientId: string;

  // 拼多多应用密钥
  clientSecret: string;

  // 选传，默认http://gw-api.pinduoduo.com/api/router
  endpoint?: string;

  // 处理OAuthType中的数据
  oAuthType?: OAuthType[] | OAuthType;

  // 授权登录，重定向地址
  oAuthRedirectUrl?: string;

  // 关于axios发送请求时的配置信息
  axiosRequestConfig?: Pick<AxiosRequestConfig, 'timeout' | 'proxy'>;
}
